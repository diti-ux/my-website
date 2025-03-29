// Lista e linkeve M3U për "Kanale Falas"
const linketM3U = [
    "http://fs.premium-ott.tv:9600/get.php?username=kMoH9v9AAKeVx5G&password=upADcyqEHEwbDwf&type=m3u_plus&output=ts",
    "https://example.com/link2.m3u",
    "https://example.com/link3.m3u",
    "https://example.com/link4.m3u",
    "https://example.com/link5.m3u"
];

// Funksioni që shfaq linket kur klikojnë Kanale Falas
function shfaqLinket() {
    const divLinket = document.getElementById("linket-m3u");

    // Nëse linket janë shfaqur më parë, mos i shto përsëri
    if (divLinket.innerHTML.trim() !== "") {
        divLinket.style.display = divLinket.style.display === "none" ? "block" : "none";
        return;
    }

    // Krijo linket dhe shtoji në HTML
    linketM3U.forEach(link => {
        const a = document.createElement("a");
        a.href = link;
        a.textContent = link;
        a.target = "_blank"; // Hap në faqe të re
        divLinket.appendChild(a);
    });

    // Shfaq listën e linkeve
    divLinket.style.display = "block";
}
