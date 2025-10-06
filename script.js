const bouton=document.getElementById('bouton');
const texte=document.getElementById('texte');
const div =document.getElementById('message');


bouton.addEventListener('click', () => {
    const prenom = texte.value;
    div.innerText = "Bienvenue " + prenom + " !";
    console.log("Bienvenue " + prenom + " !");
    div.style.color = "#8800ff";
});
alert("Veuillez entrer votre nom");




