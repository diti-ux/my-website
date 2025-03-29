function shfaqLinket() {
    // Merrni div-in që përmban linket M3U
    var linket = document.getElementById("kanal1-links");
    
    // Kontrolloni nëse janë të dukshme ose jo linket
    if (linket.style.display === "none") {
        linket.style.display = "block"; // Shfaq linket
    } else {
        linket.style.display = "none"; // Fshij linket nëse janë të dukshme
    }
}
