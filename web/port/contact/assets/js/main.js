const contents = [
    '<div>\n<H4><a href="https://mirrors.esiea.Fr">Projet mirrors.esiea.fr</a></H4>\n<p>\nun serveur mirroir linux pour debian, ubuntu, archlinux, mageia et raspibian\n</p>\n<img src="assets/img/mirrors.png" width="340px" style="border: solid;">\n</div>',
    '<div>\n<H4>Projet Rat-io</H4>\n<p>\nun bot discord qui fait differante chose tel aléatoirment ratio les gens dans les salon de discution\n</p>\n<img src="assets/img/rat-io.png" width="340px" style="border: solid;">\n</div>',
    '<div>\n<H4>Projet ru.py</H4><p>Un bot discord qui envoie le menu du resto U tout les jours a 10h utc+1</p><img src="assets/img/ru.png" width="340px" style="border: solid;"></div>'

];

let currentIndex = 0;

function changeContent() {
    const div = document.getElementById("contentDiv");
    currentIndex = (currentIndex + 1) % contents.length;
    div.innerHTML = contents[currentIndex];
}
