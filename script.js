function draKort() {
    fetch('kort/')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const htmlDoc = parser.parseFromString(data, 'text/html');
            const links = htmlDoc.querySelectorAll('a');
            const bilder = Array.from(links)
                .map(link => link.getAttribute('href'))
                .filter(href => href.match(/\.(jpg|jpeg|png|gif)$/i));

            if (bilder.length === 0) {
                alert("Inga djurbilder hittades i mappen 'kort'.");
                return;
            }

            const slumpBild = bilder[Math.floor(Math.random() * bilder.length)];
            const bildElement = document.getElementById("djurbild");
            const namnElement = document.getElementById("djurnamn");

            bildElement.src = "kort/" + slumpBild;
            bildElement.style.display = "block";

            const namn = decodeURIComponent(slumpBild.split('/').pop().split('.')[0]);
            namnElement.textContent = namn.charAt(0).toUpperCase() + namn.slice(1);
        })
        .catch(error => {
            console.error("Fel vid hämtning av bilder:", error);
        });
}
