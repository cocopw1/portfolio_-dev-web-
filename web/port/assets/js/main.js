const contents = [
    "Contenu 1 : Bonjour, ceci est le premier message!",
    "Contenu 2 : Voici un autre message intéressant!",
    "Contenu 3 : Dernier message, amusez-vous bien!"
];

let currentIndex = 0;

function changeContent() {
    const div = document.getElementById("contentDiv");
    currentIndex = (currentIndex + 1) % contents.length;
    div.innerHTML = contents[currentIndex];
}
