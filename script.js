// Lista e linkeve M3U
const kanalet = [
    { emri: "Kanal 1", linku: "https://example.com/kanal1.m3u" },
    { emri: "Kanal 2", linku: "https://example.com/kanal2.m3u" },
    { emri: "Kanal 3", linku: "https://example.com/kanal3.m3u" },
    { emri: "Kanal 4", linku: "https://example.com/kanal4.m3u" }
];

// Gjej listën në HTML
const listaKanalet = document.getElementById("lista-kanaleve");

// Shto linket në HTML automatikisht
kanalet.forEach(kanal => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    
    link.href = kanal.linku;
    link.textContent = kanal.emri;
    link.target = "_blank"; // Hap në faqe të re
    
    li.appendChild(link);
    listaKanalet.appendChild(li);
});
