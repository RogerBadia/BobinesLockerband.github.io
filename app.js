// ======================================================
// CONNEXIÓ AMB SUPABASE
// ======================================================

const SUPABASE_URL = "https://goqjspmmdckdiufbield.supabase.co";
const SUPABASE_KEY = "sb_publishable_oqPQlIQF530ByPmI5tF3lQ_mj4wQ9XH";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

// ======================================================
// DADES DE TEIXITS
// ======================================================

let teixits = [];

let teixitEditant = null;

// ======================================================
// PROVA SUPABASE
// ======================================================

async function provarSupabase() {

    const { data, error } = await supabaseClient
        .from("teixits")
        .select("*");

    if (error) {
        console.error("ERROR SUPABASE:", error);
        return;
    }

    console.log("SUPABASE FUNCIONA!");
    console.log("Teixits:", data);
}


// Executar prova
provarSupabase();

// ======================================================
// COORDENADES DE LES POSICIONS
// ======================================================

// AQUÍ POSAREM LES NOSTREES COORDENADES

const posicions = [

    // --- CARA A ---//

    // Carro 1 
    { x: 11.35, y: 31.36},
    { x: 12.80, y: 31.36},
    { x: 14.32, y: 31.36},
    { x: 15.69, y: 31.36},

    { x: 11.35, y: 34.95},
    { x: 12.80, y: 34.95},
    { x: 14.32, y: 34.95},
    { x: 15.68, y: 34.95},

    { x: 11.35, y: 39.00},
    { x: 12.80, y: 39.00},
    { x: 14.32, y: 39.00},
    { x: 15.68, y: 39.00},

    { x: 11.35, y: 42.82},
    { x: 12.80, y: 42.82},
    { x: 14.32, y: 42.82},
    { x: 15.68, y: 42.82},

    // Carro 2
    { x: 17.87, y: 31.36},
    { x: 19.28, y: 31.36},
    { x: 20.85, y: 31.36},
    { x: 22.24, y: 31.36},

    { x: 17.87, y: 34.95},
    { x: 19.28, y: 34.95},
    { x: 20.85, y: 34.95},
    { x: 22.24, y: 34.95},

    { x: 17.87, y: 39.00},
    { x: 19.28, y: 39.00},
    { x: 20.85, y: 39.00},
    { x: 22.24, y: 39.00},

    { x: 17.87, y: 42.82},
    { x: 19.28, y: 42.82},
    { x: 20.85, y: 42.82},
    { x: 22.24, y: 42.82},

    // Carro 3
    { x: 24.27, y: 31.36},
    { x: 25.68, y: 31.36},
    { x: 27.26, y: 31.36},
    { x: 28.64, y: 31.36},

    { x: 24.27, y: 34.95},
    { x: 25.68, y: 34.95},
    { x: 27.26, y: 34.95},
    { x: 28.64, y: 34.95},

    { x: 24.27, y: 39.00},
    { x: 25.68, y: 39.00},
    { x: 27.26, y: 39.00},
    { x: 28.64, y: 39.00},

    { x: 24.27, y: 42.82},
    { x: 25.68, y: 42.82},
    { x: 27.26, y: 42.82},
    { x: 28.64, y: 42.82},

    // Carro 4
    { x: 30.80, y: 31.36},
    { x: 32.16, y: 31.36},
    { x: 33.70, y: 31.36},
    { x: 35.18, y: 31.36},

    { x: 30.80, y: 34.95},
    { x: 32.16, y: 34.95},
    { x: 33.70, y: 34.95},
    { x: 35.18, y: 34.95},

    { x: 30.80, y: 39.00},
    { x: 32.16, y: 39.00},
    { x: 33.70, y: 39.00},
    { x: 35.18, y: 39.00},

    { x: 30.80, y: 42.82},
    { x: 32.16, y: 42.82},
    { x: 33.70, y: 42.82},
    { x: 35.18, y: 42.82},

    // Carro 5
    { x: 37.36, y: 31.36},
    { x: 38.80, y: 31.36},
    { x: 40.32, y: 31.36},
    { x: 41.70, y: 31.36},

    { x: 37.36, y: 34.95},
    { x: 38.80, y: 34.95},
    { x: 40.32, y: 34.95},
    { x: 41.70, y: 34.95},

    { x: 37.36, y: 39.00},
    { x: 38.80, y: 39.00},
    { x: 40.32, y: 39.00},
    { x: 41.70, y: 39.00},

    { x: 37.36, y: 42.82},
    { x: 38.80, y: 42.82},
    { x: 40.32, y: 42.82},
    { x: 41.70, y: 42.82},

    // Carro 6
    { x: 43.92, y: 31.36},
    { x: 45.36, y: 31.36},
    { x: 46.88, y: 31.36},
    { x: 48.32, y: 31.36},

    { x: 43.92, y: 34.95},
    { x: 45.36, y: 34.95},
    { x: 46.88, y: 34.95},
    { x: 48.32, y: 34.95},

    { x: 43.92, y: 39.00},
    { x: 45.36, y: 39.00},
    { x: 46.88, y: 39.00},
    { x: 48.32, y: 39.00},

    { x: 43.92, y: 42.82},
    { x: 45.36, y: 42.82},
    { x: 46.88, y: 42.82},
    { x: 48.32, y: 42.82},

    // Carro 7
    { x: 50.59, y: 31.36},
    { x: 51.98, y: 31.36},
    { x: 53.50, y: 31.36},
    { x: 54.94, y: 31.36},

    { x: 50.59, y: 34.95},
    { x: 51.98, y: 34.95},
    { x: 53.50, y: 34.95},
    { x: 54.94, y: 34.95},

    { x: 50.59, y: 39.00},
    { x: 51.98, y: 39.00},
    { x: 53.50, y: 39.00},
    { x: 54.94, y: 39.00},

    { x: 50.59, y: 42.82},
    { x: 51.98, y: 42.82},
    { x: 53.50, y: 42.82},
    { x: 54.94, y: 42.82},

    // Carro 8
    { x: 57.02, y: 31.36},
    { x: 58.46, y: 31.36},
    { x: 60.00, y: 31.36},
    { x: 61.44, y: 31.36},

    { x: 57.02, y: 34.95},
    { x: 58.46, y: 34.95},
    { x: 60.00, y: 34.95},
    { x: 61.44, y: 34.95},

    { x: 57.02, y: 39.00},
    { x: 58.46, y: 39.00},
    { x: 60.00, y: 39.00},
    { x: 61.44, y: 39.00},

    { x: 57.02, y: 42.82},
    { x: 58.46, y: 42.82},
    { x: 60.00, y: 42.82},
    { x: 61.44, y: 42.82},

    // Carro 9
    { x: 63.44, y: 31.36},
    { x: 64.88, y: 31.36},
    { x: 66.40, y: 31.36},
    { x: 67.84, y: 31.36},

    { x: 63.44, y: 34.95},
    { x: 64.88, y: 34.95},
    { x: 66.40, y: 34.95},
    { x: 67.84, y: 34.95},

    { x: 63.44, y: 39.00},
    { x: 64.88, y: 39.00},
    { x: 66.40, y: 39.00},
    { x: 67.84, y: 39.00},

    { x: 63.44, y: 42.82},
    { x: 64.88, y: 42.82},
    { x: 66.40, y: 42.82},
    { x: 67.84, y: 42.82},

    // Carro 10
    { x: 69.95, y: 31.36},
    { x: 71.39, y: 31.36},
    { x: 72.91, y: 31.36},
    { x: 74.28, y: 31.36},

    { x: 69.95, y: 34.95},
    { x: 71.39, y: 34.95},
    { x: 72.91, y: 34.95},
    { x: 74.28, y: 34.95},

    { x: 69.95, y: 39.00},
    { x: 71.39, y: 39.00},
    { x: 72.91, y: 39.00},
    { x: 74.28, y: 39.00},

    { x: 69.95, y: 42.82},
    { x: 71.39, y: 42.82},
    { x: 72.91, y: 42.82},
    { x: 74.28, y: 42.82},

    // Carro 11
    { x: 76.43, y: 31.36},
    { x: 77.95, y: 31.36},
    { x: 79.47, y: 31.36},
    { x: 80.83, y: 31.36},

    { x: 76.43, y: 34.95},
    { x: 77.95, y: 34.95},
    { x: 79.47, y: 34.95},
    { x: 80.83, y: 34.95},

    { x: 76.43, y: 39.00},
    { x: 77.95, y: 39.00},
    { x: 79.47, y: 39.00},
    { x: 80.83, y: 39.00},

    { x: 76.43, y: 42.82},
    { x: 77.95, y: 42.82},
    { x: 79.47, y: 42.82},
    { x: 80.83, y: 42.82},   


    // Carro 12
    { x: 83.07, y: 31.36},
    { x: 84.51, y: 31.36},
    { x: 86.03, y: 31.36},
    { x: 87.39, y: 31.36},

    { x: 83.07, y: 34.95},
    { x: 84.51, y: 34.95},
    { x: 86.03, y: 34.95},
    { x: 87.39, y: 34.95},

    { x: 83.07, y: 39.00},
    { x: 84.51, y: 39.00},
    { x: 86.03, y: 39.00},
    { x: 87.39, y: 39.00},

    { x: 83.07, y: 42.82},
    { x: 84.51, y: 42.82},
    { x: 86.03, y: 42.82},
    { x: 87.39, y: 42.82},   

    // Carro 13
    { x: 89.71, y: 31.36},
    { x: 91.15, y: 31.36},
    { x: 92.67, y: 31.36},
    { x: 94.07, y: 31.36},

    { x: 89.71, y: 34.95},
    { x: 91.15, y: 34.95},
    { x: 92.67, y: 34.95},
    { x: 94.07, y: 34.95},

    { x: 89.71, y: 39.00},
    { x: 91.15, y: 39.00},
    { x: 92.67, y: 39.00},
    { x: 94.07, y: 39.00},

    { x: 89.71, y: 42.82},
    { x: 91.15, y: 42.82},
    { x: 92.67, y: 42.82},
    { x: 94.07, y: 42.82},


    // --- CARA B --- //
    
    //Carro 1
    { x: 90.74, y: 76.98},
    { x: 89.30, y: 76.98},
    { x: 87.78, y: 76.98},
    { x: 86.34, y: 76.98},

    { x: 90.74, y: 80.93},
    { x: 89.30, y: 80.93},
    { x: 87.78, y: 80.93},
    { x: 86.34, y: 80.93},

    { x: 90.74, y: 84.88},
    { x: 89.30, y: 84.88},
    { x: 87.78, y: 84.88},
    { x: 86.34, y: 84.88},

    { x: 90.74, y: 88.82},
    { x: 89.30, y: 88.82},
    { x: 87.78, y: 88.82},
    { x: 86.34, y: 88.82},  

    //Carro 2
    { x: 84.10, y: 76.59},
    { x: 82.66, y: 76.59},
    { x: 81.14, y: 76.59},
    { x: 79.70, y: 76.59},

    { x: 84.10, y: 80.44},
    { x: 82.66, y: 80.44},
    { x: 81.14, y: 80.44},
    { x: 79.70, y: 80.44},

    { x: 84.10, y: 84.38},
    { x: 82.66, y: 84.38},
    { x: 81.14, y: 84.38},
    { x: 79.70, y: 84.38},

    { x: 84.10, y: 88.33},
    { x: 82.66, y: 88.33},
    { x: 81.14, y: 88.33},
    { x: 79.70, y: 88.33}, 

    //Carro 3
    { x: 77.54, y: 76.59},
    { x: 76.10, y: 76.59},
    { x: 74.58, y: 76.59},
    { x: 73.14, y: 76.59},

    { x: 77.54, y: 80.44},
    { x: 76.10, y: 80.44},
    { x: 74.58, y: 80.44},
    { x: 73.14, y: 80.44},

    { x: 77.54, y: 84.38},
    { x: 76.10, y: 84.38},
    { x: 74.58, y: 84.38},
    { x: 73.14, y: 84.38},

    { x: 77.54, y: 88.33},
    { x: 76.10, y: 88.33},
    { x: 74.58, y: 88.33},
    { x: 73.14, y: 88.33}, 

    //Carro 4
    { x: 70.98, y: 76.59},
    { x: 69.54, y: 76.59},
    { x: 68.02, y: 76.59},
    { x: 66.68, y: 76.59},

    { x: 70.98, y: 80.44},
    { x: 69.54, y: 80.44},
    { x: 68.02, y: 80.44},
    { x: 66.68, y: 80.44},

    { x: 70.98, y: 84.38},
    { x: 69.54, y: 84.38},
    { x: 68.02, y: 84.38},
    { x: 66.68, y: 84.38},

    { x: 70.98, y: 88.33},
    { x: 69.54, y: 88.33},
    { x: 68.02, y: 88.33},
    { x: 66.68, y: 88.33},
    
    //Carro 5
    { x: 64.50, y: 76.59},
    { x: 63.06, y: 76.59},
    { x: 61.54, y: 76.59},
    { x: 60.10, y: 76.59},

    { x: 64.50, y: 80.44},
    { x: 63.06, y: 80.44},
    { x: 61.54, y: 80.44},
    { x: 60.10, y: 80.44},

    { x: 64.50, y: 84.38},
    { x: 63.06, y: 84.38},
    { x: 61.54, y: 84.38},
    { x: 60.10, y: 84.38},

    { x: 64.50, y: 88.33},
    { x: 63.06, y: 88.33},
    { x: 61.54, y: 88.33},
    { x: 60.10, y: 88.33}, 

    //Carro 6
    { x: 58.02, y: 76.59},
    { x: 56.64, y: 76.59},
    { x: 55.10, y: 76.59},
    { x: 53.70, y: 76.59},

    { x: 58.02, y: 80.44},
    { x: 56.64, y: 80.44},
    { x: 55.10, y: 80.44},
    { x: 53.70, y: 80.44},

    { x: 58.02, y: 84.38},
    { x: 56.64, y: 84.38},
    { x: 55.10, y: 84.38},
    { x: 53.70, y: 84.38},

    { x: 58.02, y: 88.33},
    { x: 56.64, y: 88.33},
    { x: 55.10, y: 88.33},
    { x: 53.70, y: 88.33}, 

    //Carro 7
    { x: 51.58, y: 76.59},
    { x: 50.14, y: 76.59},
    { x: 48.62, y: 76.59},
    { x: 47.20, y: 76.59},

    { x: 51.58, y: 80.44},
    { x: 50.14, y: 80.44},
    { x: 48.62, y: 80.44},
    { x: 47.20, y: 80.44},

    { x: 51.58, y: 84.38},
    { x: 50.14, y: 84.38},
    { x: 48.62, y: 84.38},
    { x: 47.20, y: 84.38},

    { x: 51.58, y: 88.33},
    { x: 50.14, y: 88.33},
    { x: 48.62, y: 88.33},
    { x: 47.20, y: 88.33},

    //Carro 8
    { x: 44.89, y: 76.59},
    { x: 43.50, y: 76.59},
    { x: 41.98, y: 76.59},
    { x: 40.55, y: 76.59},

    { x: 44.89, y: 80.44},
    { x: 43.50, y: 80.44},
    { x: 41.98, y: 80.44},
    { x: 40.55, y: 80.44},

    { x: 44.89, y: 84.38},
    { x: 43.50, y: 84.38},
    { x: 41.98, y: 84.38},
    { x: 40.55, y: 84.38},

    { x: 44.89, y: 88.33},
    { x: 43.50, y: 88.33},
    { x: 41.98, y: 88.33},
    { x: 40.55, y: 88.33},

    //Carro 9
    { x: 38.38, y: 76.59},
    { x: 36.94, y: 76.59},
    { x: 35.39, y: 76.59},
    { x: 33.99, y: 76.59},

    { x: 38.38, y: 80.44},
    { x: 36.94, y: 80.44},
    { x: 35.39, y: 80.44},
    { x: 33.99, y: 80.44},

    { x: 38.38, y: 84.38},
    { x: 36.94, y: 84.38},
    { x: 35.39, y: 84.38},
    { x: 33.99, y: 84.38},

    { x: 38.38, y: 88.33},
    { x: 36.94, y: 88.33},
    { x: 35.39, y: 88.33},
    { x: 33.99, y: 88.33},

    //Carro 10
    { x: 31.78, y: 76.59},
    { x: 30.34, y: 76.59},
    { x: 28.83, y: 76.59},
    { x: 27.43, y: 76.59},

    { x: 31.78, y: 80.44},
    { x: 30.34, y: 80.44},
    { x: 28.83, y: 80.44},
    { x: 27.43, y: 80.44},

    { x: 31.78, y: 84.38},
    { x: 30.34, y: 84.38},
    { x: 28.83, y: 84.38},
    { x: 27.43, y: 84.38},

    { x: 31.78, y: 88.33},
    { x: 30.34, y: 88.33},
    { x: 28.83, y: 88.33},
    { x: 27.43, y: 88.33},

    //Carro 11
    { x: 25.33, y: 76.59},
    { x: 23.88, y: 76.59},
    { x: 22.34, y: 76.59},
    { x: 20.90, y: 76.59},

    { x: 25.33, y: 80.44},
    { x: 23.88, y: 80.44},
    { x: 22.34, y: 80.44},
    { x: 20.90, y: 80.44},

    { x: 25.33, y: 84.38},
    { x: 23.88, y: 84.38},
    { x: 22.34, y: 84.38},
    { x: 20.90, y: 84.38},

    { x: 25.33, y: 88.33},
    { x: 23.88, y: 88.33},
    { x: 22.34, y: 88.33},
    { x: 20.90, y: 88.33},
    
    //Carro 12
    { x: 18.90, y: 76.59},
    { x: 17.51, y: 76.59},
    { x: 15.94, y: 76.59},
    { x: 14.50, y: 76.59},

    { x: 18.90, y: 80.44},
    { x: 17.51, y: 80.44},
    { x: 15.94, y: 80.44},
    { x: 14.50, y: 80.44},

    { x: 18.90, y: 84.38},
    { x: 17.51, y: 84.38},
    { x: 15.94, y: 84.38},
    { x: 14.50, y: 84.38},

    { x: 18.90, y: 88.33},
    { x: 17.51, y: 88.33},
    { x: 15.94, y: 88.33},
    { x: 14.50, y: 88.33},

    //Carro 13
    { x: 12.42, y: 76.59},
    { x: 10.97, y: 76.59},
    { x: 9.46, y: 76.59},
    { x: 8.02, y: 76.59},

    { x: 12.42, y: 80.44},
    { x: 10.97, y: 80.44},
    { x: 9.46, y: 80.44},
    { x: 8.02, y: 80.44},

    { x: 12.42, y: 84.38},
    { x: 10.97, y: 84.38},
    { x: 9.46, y: 84.38},
    { x: 8.02, y: 84.38},

    { x: 12.42, y: 88.33},
    { x: 10.97, y: 88.33},
    { x: 9.46, y: 88.33},
    { x: 8.02, y: 88.33}
];


// ======================================================
// ELEMENTS HTML
// ======================================================

const btnUtilitzar = document.getElementById("btnUtilitzar");
const btnCrear = document.getElementById("btnCrear");

const pantallaUtilitzar = document.getElementById("pantallaUtilitzar");
const pantallaCrear = document.getElementById("pantallaCrear");

const selectorTeixit = document.getElementById("selectorTeixit");

const rack = document.getElementById("rack");
const rackCrear = document.getElementById("rackCrear");

const nomTeixit = document.getElementById("nomTeixit");
const numeroPosicions = document.getElementById("numeroPosicions");

const nomNouTeixit = document.getElementById("nomNouTeixit");

const contadorSeleccionades =
    document.getElementById("contadorSeleccionades");

const guardarTeixit =
    document.getElementById("guardarTeixit");



// ======================================================
// EDICIÓ I ELIMINACIÓ
// ======================================================

btnEditar.addEventListener("click", function () {

    const id = selectorTeixit.value;

    if (id === "") {
        return;
    }

    // Buscar el teixit en les dades carregades
    const teixit = teixits.find(function(t) {
        return String(t.id) === String(id);
    });

    if (!teixit) {
        return;
    }

    // Guardem l'ID del teixit que estem editant
    teixitEditant = teixit.id;

    // Posem el seu nom actual
    nomNouTeixit.value = teixit.nom;

    // Canviem el títol
    titolPantallaCrear.textContent =
        "Editar teixit";

    // Canviem el text del botó
    guardarTeixit.textContent =
        "Guardar canvis";

    // Canviem de pantalla
    pantallaUtilitzar.classList.add("ocult");
    pantallaCrear.classList.remove("ocult");

    // Carreguem les posicions que ja tenia
    crearPuntsEdicio(teixit.posicions);
});

btnEliminar.addEventListener("click", async function () {

    const id = selectorTeixit.value;

    if (id === "") {
        return;
    }

    // Buscar el teixit
    const teixit = teixits.find(function(t) {
        return String(t.id) === String(id);
    });

    if (!teixit) {
        return;
    }

    // Confirmació
    const confirmar = confirm(
        `Vols eliminar el teixit "${teixit.nom}"?`
    );

    if (!confirmar) {
        return;
    }

    // Eliminar de Supabase
    const { error } = await supabaseClient
        .from("teixits")
        .delete()
        .eq("id", teixit.id);

    if (error) {

        console.error(
            "Error eliminant teixit:",
            error
        );

        alert("No s'ha pogut eliminar el teixit.");

        return;
    }

    alert("Teixit eliminat correctament.");

    // Tornar a carregar els teixits
    await carregarTeixits();

    // Deixar el selector sense seleccionar
    selectorTeixit.selectedIndex = 0;

    // Netejar informació
    nomTeixit.textContent = "-";
    numeroPosicions.textContent = "-";

    // Desactivar botons
    actualitzarBotons();

    // Tornar a mostrar els punts blaus
    crearPuntsUtilitzar();
});

cancelarEdicio.addEventListener("click", function () {

    // Sortim de qualsevol mode d'edició
    teixitEditant = null;

    // Buidem el nom
    nomNouTeixit.value = "";

    // Reiniciem el títol
    titolPantallaCrear.textContent = "Crear nou teixit";

    // Reiniciem el botó
    guardarTeixit.textContent = "Guardar teixit";

    // Tornem a la pantalla principal
    pantallaCrear.classList.add("ocult");
    pantallaUtilitzar.classList.remove("ocult");

    // IMPORTANT:
    // No deixem cap teixit seleccionat
    selectorTeixit.selectedIndex = 0;

    // Buidem la informació
    nomTeixit.textContent = "-";
    numeroPosicions.textContent = "-";

    // Desactivem Editar i Eliminar
    actualitzarBotons();

    // Tornem a mostrar tots els punts en blau
    crearPuntsUtilitzar();

});

// ======================================================
// CANVI DE PANTALLA
// ======================================================

btnUtilitzar.addEventListener("click", function () {

    pantallaUtilitzar.classList.remove("ocult");
    pantallaCrear.classList.add("ocult");

});


btnCrear.addEventListener("click", function () {

    // Indiquem que NO estem editant cap teixit
    teixitEditant = null;

    // Preparar la pantalla de creació
    titolPantallaCrear.textContent = "Crear nou teixit";

    guardarTeixit.textContent = "Guardar teixit";

    // Buidar el nom
    nomNouTeixit.value = "";

    // Mostrar pantalla de creació
    pantallaCrear.classList.remove("ocult");
    pantallaUtilitzar.classList.add("ocult");

    // Crear tots els punts sense cap seleccionat
    crearPuntsEdicio([]);

});


// ======================================================
// CREAR PUNTS PER A LA PANTALLA D'UTILITZAR
// ======================================================

function crearPuntsUtilitzar() {

    rack.innerHTML = "";

    const imatge = document.createElement("img");

    imatge.src = "carros_quadri.png";
    imatge.id = "imatge";

    rack.appendChild(imatge);


    posicions.forEach(function (posicio, index) {

        const punt = document.createElement("div");

        punt.classList.add("punt");

        punt.style.left = posicio.x + "%";
        punt.style.top = posicio.y + "%";

        punt.dataset.index = index;

        rack.appendChild(punt);

    });

}


// ======================================================
// CREAR PUNTS PER EDITAR UN TEIXIT
// ======================================================

let posicionsSeleccionades = [];


function crearPuntsEdicio(posicionsInicials) {

    rackCrear.innerHTML = "";

    // Copiem les posicions que ja tenia el teixit
    posicionsSeleccionades = [...posicionsInicials];

    actualitzarContador();


    const imatge = document.createElement("img");

    imatge.src = "carros_quadri.png";
    imatge.id = "imatgeCrear";

    rackCrear.appendChild(imatge);


    posicions.forEach(function (posicio, index) {

        const punt = document.createElement("div");

        punt.classList.add("punt");

        punt.style.left = posicio.x + "%";
        punt.style.top = posicio.y + "%";

        punt.dataset.index = index;


        // IMPORTANT:
        // Si el teixit ja tenia aquesta posició,
        // la posem verda
        if (posicionsSeleccionades.includes(index)) {

            punt.classList.add("seleccionat");

        }


        // Permet afegir o eliminar la posició
        punt.addEventListener("click", function () {

            seleccionarPosicio(index, punt);

        });


        rackCrear.appendChild(punt);

    });

}




// ======================================================
// SELECCIONAR / DESELECCIONAR POSICIÓ
// ======================================================

function seleccionarPosicio(index, punt) {

    const posicio =
        posicionsSeleccionades.indexOf(index);


    if (posicio === -1) {

        // No estava seleccionada
        // → l'afegim

        posicionsSeleccionades.push(index);

        punt.classList.add("seleccionat");

    } else {

        // Ja estava seleccionada
        // → l'eliminem

        posicionsSeleccionades.splice(
            posicio,
            1
        );

        punt.classList.remove("seleccionat");

    }


    actualitzarContador();

}


// ======================================================
// ACTUALITZAR COMPTADOR
// ======================================================

function actualitzarContador() {

    contadorSeleccionades.textContent =
        posicionsSeleccionades.length;

}


// ======================================================
// GUARDAR TEIXIT
// ======================================================

guardarTeixit.addEventListener("click", async function () {

    const nom = nomNouTeixit.value.trim();

    // Comprovar que hi ha nom
    if (nom === "") {

        alert("Has d'escriure un nom per al teixit.");

        return;
    }

    // Comprovar que hi ha almenys una posició
    if (posicionsSeleccionades.length === 0) {

        alert("Has de seleccionar almenys una posició.");

        return;
    }


    // ==================================================
    // EDITAR UN TEIXIT EXISTENT
    // ==================================================

    if (teixitEditant !== null) {

        const { error } = await supabaseClient
            .from("teixits")
            .update({
                nom: nom,
                posicions: posicionsSeleccionades
            })
            .eq("id", teixitEditant);

        if (error) {

            console.error(
                "Error actualitzant teixit:",
                error
            );

            alert("No s'ha pogut actualitzar el teixit.");

            return;
        }

        alert("Teixit actualitzat correctament.");

    }


    // ==================================================
    // CREAR UN TEIXIT NOU
    // ==================================================

    else {

        const { error } = await supabaseClient
            .from("teixits")
            .insert({
                nom: nom,
                posicions: posicionsSeleccionades
            });

        if (error) {

            console.error(
                "Error creant teixit:",
                error
            );

            alert("No s'ha pogut guardar el teixit.");

            return;
        }

        alert("Teixit guardat correctament.");
    }


    // ==================================================
    // TORNAR A CARREGAR LES DADES
    // ==================================================

    await carregarTeixits();


    // Sortim del mode edició
    teixitEditant = null;


    // Reiniciar pantalla
    nomNouTeixit.value = "";

    titolPantallaCrear.textContent =
        "Crear nou teixit";

    guardarTeixit.textContent =
        "Guardar teixit";


    pantallaCrear.classList.add("ocult");
    pantallaUtilitzar.classList.remove("ocult");


    // Deixem el selector sense seleccionar
    selectorTeixit.selectedIndex = 0;

    nomTeixit.textContent = "-";
    numeroPosicions.textContent = "-";

    actualitzarBotons();

    crearPuntsUtilitzar();

});


// ======================================================
// CARREGAR TEIXITS GUARDATS
// ======================================================

async function carregarTeixits() {

    const { data, error } = await supabaseClient
        .from("teixits")
        .select("*")
        .order("id");

    if (error) {
        console.error("Error carregant teixits:", error);
        alert("No s'han pogut carregar els teixits.");
        return;
    }

    // Guardem els teixits en memòria
    teixits = data;

    // Buidem el desplegable
    selectorTeixit.innerHTML =
        '<option value="">-- Selecciona un teixit --</option>';

    // Afegim els teixits
    teixits.forEach(function(teixit) {

        const opcio = document.createElement("option");

        // Ara utilitzem l'ID de Supabase
        opcio.value = teixit.id;

        opcio.textContent = teixit.nom;

        selectorTeixit.appendChild(opcio);
    });
}


// ======================================================
// SELECCIONAR UN TEIXIT
// ======================================================

selectorTeixit.addEventListener("change", function () {

    const id = this.value;

    actualitzarBotons();

    // No hi ha cap teixit seleccionat
    if (id === "") {

        nomTeixit.textContent = "-";
        numeroPosicions.textContent = "-";

        crearPuntsUtilitzar();

        return;
    }

    // Buscar el teixit carregat de Supabase
    const teixit = teixits.find(function(t) {
        return String(t.id) === String(id);
    });

    if (!teixit) {
        return;
    }

    // Mostrar informació
    nomTeixit.textContent = teixit.nom;

    numeroPosicions.textContent =
        teixit.posicions.length;

    // Mostrar les posicions verdes
    mostrarTeixit(teixit);
});


// ======================================================
// MOSTRAR TEIXIT
// ======================================================

function mostrarTeixit(teixit) {

    rack.innerHTML = "";


    const imatge = document.createElement("img");

    imatge.src = "carros_quadri.png";
    imatge.id = "imatge";

    rack.appendChild(imatge);


    posicions.forEach(function (posicio, index) {

        const punt = document.createElement("div");

        punt.classList.add("punt");

        punt.style.left = posicio.x + "%";
        punt.style.top = posicio.y + "%";


        // Si aquesta posició forma part del teixit,
        // la posem verda

        if (teixit.posicions.includes(index)) {

            punt.classList.add("seleccionat");

        }


        rack.appendChild(punt);

    });

}

//actualitzar botons
function actualitzarBotons() {

    if (selectorTeixit.value === "") {

        btnEditar.disabled = true;
        btnEliminar.disabled = true;

    } else {

        btnEditar.disabled = false;
        btnEliminar.disabled = false;
    }
}

// ======================================================
// SUPABASE REALTIME
// ======================================================

function iniciarRealtime() {

    supabaseClient
        .channel("teixits-canvis")
        .on(
            "postgres_changes",
            {
                event: "*",
                schema: "public",
                table: "teixits"
            },
            async function (payload) {

                console.log("CANVI DETECTAT:", payload);

                // Tornem a carregar els teixits
                await carregarTeixits();

                // Actualitzem la vista actual
                actualitzarVistaActual();
            }
        )
        .subscribe(function (status) {

            console.log("Realtime:", status);

        });
}

// ======================================================
// ACTUALITZAR VISTA DESPRÉS D'UN CANVI REALTIME
// ======================================================

function actualitzarVistaActual() {

    const id = selectorTeixit.value;

    // No hi ha cap teixit seleccionat
    if (id === "") {

        nomTeixit.textContent = "-";
        numeroPosicions.textContent = "-";

        crearPuntsUtilitzar();

        actualitzarBotons();

        return;
    }

    // Buscar el teixit actualitzat
    const teixit = teixits.find(function(t) {

        return String(t.id) === String(id);

    });

    // Si el teixit ja no existeix
    if (!teixit) {

        selectorTeixit.selectedIndex = 0;

        nomTeixit.textContent = "-";
        numeroPosicions.textContent = "-";

        crearPuntsUtilitzar();

        actualitzarBotons();

        return;
    }

    // Actualitzar informació
    nomTeixit.textContent = teixit.nom;

    numeroPosicions.textContent =
        teixit.posicions.length;

    // Actualitzar els punts
    mostrarTeixit(teixit);

    actualitzarBotons();
}

// ======================================================
// INICI
// ======================================================

carregarTeixits();

crearPuntsUtilitzar();

iniciarRealtime();