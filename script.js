// Funksioni për të shfaqur ose fshehur linket
function shfaqLinket() {
    var linket = document.getElementById("kanal1-links");

    if (linket.style.display === "none") {
        linket.style.display = "block"; // Shfaq linket
    } else {
        linket.style.display = "none"; // Fshih linket nëse janë të dukshme
    }
}

// Funksioni për të kopjuar linkun
function kopjoLink(button) {
    var linku = button.previousElementSibling.innerText; // Merr tekstin e linkut
    var tempInput = document.createElement("input"); // Krijo një input të përkohshëm
    document.body.appendChild(tempInput);
    tempInput.value = linku;
    tempInput.select();
    document.execCommand("copy"); // Kopjo tekstin në clipboard
    document.body.removeChild(tempInput);

    // Ndrysho tekstin e butonit për disa sekonda për të treguar që është kopjuar
    button.innerText = "Kopjuar!";
    setTimeout(() => {
        button.innerText = "Kopjo";
    }, 1500);
}
