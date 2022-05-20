// info: Déclaration des variables + déclenchement de la question 1
// todo: Faire la page finale à la fin du QCM
var btn1 = document.getElementById('Choix1')
var btn2 = document.getElementById('Choix2')
var quest_num = document.getElementById('Numquest')
var quest_content = document.getElementById('question_content')
quest1()
checkcookies()


// *Questions
function quest1() {

    quest_num.innerText = "Question 1:";
    quest_content.innerHTML = "Qu'est ce que Vilala préfère?"

    btn1.innerHTML = "Les carottes";
    btn1.classList.add("faux")

    btn2.innerHTML = "Les champignions"
    btn2.classList.add("vrai")

}
function quest2() {
    quest_num.innerText = "Question 2:";
    quest_content.innerHTML = "Pour parler des  crush, on utilise des noms :"

    btn1.innerHTML = "D'étoiles";
    btn2.innerHTML = "De fruits/légumes"
}
function quest3() {
    quest_num.innerText = "Question 3:";
    quest_content.innerHTML = "Mattéo a mis sa tête dans une rivière au Pic."

    btn1.innerHTML = "Vrai";
    btn1.classList.remove('faux')
    btn1.classList.add("vrai")
    btn2.innerHTML = "Faux"
    btn2.classList.remove('vrai')
    btn2.classList.add('faux')
}
function quest4() {
    quest_num.innerText = "Question 4:";
    quest_content.innerHTML = "Comment appelle-t-on les habitants de la Mecque?"

    btn1.innerHTML = "Les mécaniciens";
    btn2.innerHTML = "Les Mecquois"
}
function quest5() {
    quest_num.innerHTML = 'Question 5:'
    quest_content.innerHTML = "Quel est le nom du manequin tansgenre ?"

    btn1.innerHTML = "Véronique"; btn2.innerHTML = "Dominique";
    btn1.classList.remove("vrai"); btn1.classList.add('faux')
    btn2.classList.remove('faux'); btn2.classList.add('vrai')
}
function quest6() {
    quest_num.innerHTML = 'Question 6:'
    quest_content.innerHTML = "Avec quoi Abila est-il marié?"

    btn1.innerHTML = "Aux chiffres significatifs"; btn2.innerHTML = "A attendre 2 semaines pour rendre les copies"
    btn1.classList.remove("faux"); btn1.classList.add('vrai')
    btn2.classList.remove('vrai'); btn2.classList.add('faux')
}
function quest7() {
    quest_num.innerHTML = 'Question 7:'
    quest_content.innerHTML = "BOF TV est la meilleure chaîne d'info au monde"

    btn1.innerHTML = "Vrai"; btn2.innerHTML = "Faux"
}
function quest8() {
    quest_num.innerHTML = 'Question 8:'
    quest_content.innerHTML = "Il y a eu un réveil à l'hymne n*zi au Pic:"

    btn1.innerHTML = "Vrai"; btn2.innerHTML = "Faux"
    btn1.classList.remove("vrai"); btn1.classList.add('faux')
    btn2.classList.remove('faux'); btn2.classList.add('vrai')
}
function quest9() {
    quest_num.innerHTML = 'Question 9:'
    quest_content.innerHTML = "Clémentine a un don pour ruiner les games Clash Royal en:"

    btn1.innerHTML = "Fermant H24 le jeu"; btn2.innerHTML = "En activant la tour du roi"
}
function quest10() {
    quest_num.innerHTML = 'Question 10:'
    quest_content.innerHTML = "Au début de l'année Mickaël voulait devenir:"

    btn1.innerHTML = "Guide Michelin"; btn2.innerHTML = "Gérant d'une station-service"
    btn1.classList.remove("faux"); btn1.classList.add('vrai')
    btn2.classList.remove('vrai'); btn2.classList.add('faux')
}
function quest11(){
    quest_num.innerHTML = 'Question 11:'
    quest_content.innerHTML = "Super Mario Maker Simulator"

    btn1.innerHTML = "Réponse A"; btn2.innerHTML = "Réponse B"
    btn1.classList.remove("vrai"); btn1.classList.add('faux')

    let valueCookie = getCookie('SMM')
    if(valueCookie === "False"){
        setTimeout(() => {
            btn2.innerHTML = "Réponse C";
            btn2.classList.remove('faux'); btn2.classList.add('vrai')
        }, 15000);
    }else if(valueCookie === "True"){
        setTimeout(() => {
            btn2.innerHTML = "Réponse C";
            btn2.classList.remove('faux'); btn2.classList.add('vrai')
        }, 5000);
    }
}
function quest12(){
    quest_num.innerHTML = "Question 12:" ; quest_content.innerHTML = "Babaji o la ikis bokes seris ikis"
    btn1.innerHTML = "Babaji"; btn2.innerHTML = "ikis bokes seris ikis"

    btn1.classList.remove('faux'); btn1.classList.add('vrai')
    btn2.classList.remove('vrai'); btn2.classList.add('faux')
}
function quest13(){
    quest_num.innerHTML = "Question 13:" ; quest_content.innerHTML = "Qui a connu le plus de drama au sein de la classe?"
    btn1.innerHTML = "Maël"; btn2.innerHTML = "Santatra"

    btn1.classList.remove('vrai'); btn1.classList.add('faux')
    btn2.classList.remove('faux'); btn2.classList.add('vrai')
}
function quest14(){
    quest_num.innerHTML = "Question 14:" ; quest_content.innerHTML = "Qui a eu la meilleure moyenne G au second trimestre?"
    btn1.innerHTML = "Romane"; btn2.innerHTML = "Florence"
}
function quest15(){
    quest_num.innerHTML = "Question 15:" ; quest_content.innerHTML = "Qui a participé au reportage BOF TV à la cité de l'espace:"
    btn1.innerHTML = "Mattéo<br>Alexandre C<br>Quentin<br>Baptiste<br>Authur"; btn2.innerHTML = "Alexandre C<br>Quentin<br>Baptiste<br>Mickaël<br>Mattéo"
    btn1.classList.remove('faux'); btn1.classList.add('vrai')
    btn2.classList.remove('vrai'); btn2.classList.add('faux')
}
function finalquest(){
    quest_num.innerHTML = "Question Fianle"; quest_content.innerHTML = "Pour réussir ce questionnaire, il faudra écrire le nom de Famille de cette personne:<br><br>[insérer image] <br><br>(Attention: il faut tout mettre en majuscules)"

    btn1.style.display = "none"; btn2.style.display = "none"
    let liste = document.querySelector('ul')
    liste.style.display = "flex"
}

// const StartTimer = setTimeout(elimplayer, 5000)
// function stop(){
//     clearTimeout(StartTimer)
// }


document.body.addEventListener('click', function (evt) {
    if (evt.target.className === 'faux') {
        elimplayer()
    }
    else if (evt.target.className === "vrai") {
        go2nextQuest()
    }
}, false);

function checkrep(){
    let rp = document.getElementById('rep')
    if(rp.value === "ANDRIAMAHEFASON"){
        alert('GG')
    }else{
        elimplayer()
    }
}
function antipaste(){
    elimplayer()
    let txt = document.getElementById('txtelim')
    txt.innerHTML = "Interdiction de coller"
}

//info: Code de retour à l'acceuil en cas de mauvaise réponse
function elimplayer() {

    //*Changement du contenu de page
    let question = document.getElementById("question")
    let elim = document.getElementById('elim')
    let gif = document.getElementById('gif')

    question.style.display = "none"
    elim.style.display = "block"


    //* Exécution des sons et du retour à l'acceuil
    //!Le code est buggé lors du premier click, à retravailler (avec les .then ?)

    // info: Elimination 1 (squid game)
    playsound().then(() => {
        gif.style.visibility = "visible"
        setTimeout(() => {
            window.location.href = "../index.html"
        }, 6650); //Valeur de départ : 5650
    })

    let showTry = document.getElementById('nbTry')
    showTry.style.display = "none"
    Add1toCookie()
}
let playsound = function playsound() {
    return new Promise((resolve, reject) => {
        resolve('go')
        let son = new Audio('rick.mp3')
        son.play()
    })
}

function go2nextQuest() {
    console.log("A: " + btn1.classList + "\nB: " + btn2.classList)
    if (quest_num.innerText === "Question 1:") {
        alert("Il aime tellement ça qu'il nous a fait sniffé")
        quest2()
    }
    else if (quest_num.innerText === "Question 2:") {
        alert('Grâce à Santatra on va pouvoir faire une salade')
        // ? Un peu borderline non?
        quest3()
    }
    else if (quest_num.innerText === "Question 3:") {
        alert("A 5h du matin...")
        quest4()
    }
    else if (quest_num.innerText === "Question 4:") {
        alert("QI de 143")
        quest5()
    }
    else if (quest_num.innerText === "Question 5:") {
        alert("Dominique comunique nique nique...")
        quest6()
    }
    else if (quest_num.innerText === "Question 6:") {
        alert("C'est pas 2 semaines d'attente c'est 1 mois")
        quest7()
    }
    else if (quest_num.innerText === "Question 7:") {
        alert("Avis très objectif tkt :)")
        quest8()
    }
    else if (quest_num.innerText === "Question 8:") {
        alert("C'était l'hymne soviétique ou les vaches")
        quest9()
    }
    else if (quest_num.innerText === "Question 9:") {
        alert("Activo torre")
        quest10()
    }
    else if (quest_num.innerText === "Question 10:") {
        alert('Il foutait quoi en E² lui?')
        quest11()
    }
    else if (quest_num.innerText === "Question 11:") {
        alert("OK c'était un peu méchant")
        ReduceTimeQuest11()
        quest12()
    }
    else if (quest_num.innerText === "Question 12:") {
        alert("Sinon vous allez bien vous?")
        quest13()
    }
    else if (quest_num.innerText === "Question 13:") {
        alert("Je commence à ne plus avoir d'idées")
        quest14()
    }
    else if (quest_num.innerText === "Question 14:") {
        alert("Ce QCM a pris bcp de temps à développer")
        quest15()
    }
    else if (quest_num.innerText === "Question 15:") {
        alert("La Dream Team")
        finalquest()
    }
}



// info: Section Cookie
let date = new Date(Date.now() + 86400000 * 7);  // Calcule le temps qu'il sera au bout d'une semaine
date = date.toUTCString();

//info:Chercher le contenu d'une info d'un cookie
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


// info: Ajoute 1 au nombre d'essai
function Add1toCookie() {
    let nbTry = getCookie('Try_QCM')
    if (nbTry != "") {
        let nbTry = Number(getCookie("Try_QCM"))  //Conversion du texte en nombre
        nbTry = nbTry + 1
        document.cookie = 'Try_QCM=' + nbTry + '; path=/ ; expires=' + date;
    } else {
        document.cookie = 'Try_QCM=1; path=/ ; expires=' + date;
    }
}
function ReduceTimeQuest11(){
    let reducer = getCookie('SMM')
    if(reducer === "False"){
        console.log('Switch')
        document.cookie = "SMM=False; path=/ ; max-age=0"; //Suprime le cookie avec "False" en mettant une date d'expiration passée
        document.cookie = "SMM=True; path=/ ; expires=" + date;
        
    }
    
}


// info: Crée un cookie en cas de 1ere visite

function checkcookies() {
    let date = new Date(Date.now() + 86400000 * 7);  // Calcule le temps qu'il sera au bout d'une semaine
    date = date.toUTCString();

    let nbTry = getCookie('Try_QCM')
    if (nbTry != "") {

    } else {
        document.cookie = 'Try_QCM=1; path=/ ; expires=' + date;
    }

    //Cookie question 11
    let isSMMcookie = getCookie('SMM')
    if(isSMMcookie !=""){

    }else{
        document.cookie = "SMM=False; path=/ ; expires=" + date;
    }
}





// info:Affichage du numéro de l'essai
let showTry = document.getElementById('nbTry')

let nbTry = getCookie('Try_QCM')
if (nbTry != "") {
    showTry.innerHTML = `<br><br><br><br>Essai n°: ${nbTry}<br><br>Cette fonctionnalité nécessite d'utiliser les cookies et comme en JavaScript c'est un peu relou soit reconnaissant stp (Ps: Baptiste est un génie du code pour avoir fait ça)`
} else {
    showTry.innerHTML = "Essai n°1"
}

