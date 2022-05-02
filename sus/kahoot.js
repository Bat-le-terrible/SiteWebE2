// info: Déclaration des variables + déclenchement de la question 1
var btn1 = document.getElementById('Choix1')
var btn2 = document.getElementById('Choix2')
var quest_num = document.getElementById('Numquest')
var quest_content = document.getElementById('question_content')
quest1()
checkcookie()


// *Questions
function quest1(){

    quest_num.innerText = "Question 1:";
    quest_content.innerHTML = "Qu'est ce que Vilala préfère?"

    btn1.innerHTML = "Les carottes";
    btn1.classList.add("faux")

    btn2.innerHTML = "Les champignions"
    btn2.classList.add("vrai")

}
function quest2(){
    quest_num.innerText = "Question 2:";
    quest_content.innerHTML = "Pour parler des  crush, on utilise des noms :"

    btn1.innerHTML = "D'étoiles";
    btn2.innerHTML = "De fruits/légumes"
}
function quest3(){
    quest_num.innerText = "Question 3:";
    quest_content.innerHTML = "Mattéo a mis sa tête dans une rivière au Pic."

    btn1.innerHTML = "Vrai";
    btn1.classList.remove('faux')
    btn1.classList.add("vrai")
    btn2.innerHTML = "Faux"
    btn2.classList.remove('vrai')
    btn2.classList.add('faux')
}
function quest4(){
    quest_num.innerText = "Question 4:";
    quest_content.innerHTML = "Comment appelle-t-on les habitants de la Mecque?"

    btn1.innerHTML = "Les mécaniciens";
    btn2.innerHTML = "Les Mecquois"
}
function quest5(){
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
function quest7(){
    quest_num.innerHTML = 'Question 7:'
    quest_content.innerHTML = "BOF TV est la meilleure chaîne d'info au monde"

    btn1.innerHTML = "Vrai"; btn2.innerHTML = "Faux"
}
function quest8(){
    quest_num.innerHTML = 'Question 8:'
    quest_content.innerHTML = "Il y a eu un réveil à l'hymne n*zi au Pic:"

    btn1.innerHTML = "Vrai"; btn2.innerHTML = "Faux"
    btn1.classList.remove("vrai"); btn1.classList.add('faux')
    btn2.classList.remove('faux'); btn2.classList.add('vrai')
}
function quest9(){
    quest_num.innerHTML = 'Question 9:'
    quest_content.innerHTML = "Clémentine a un don pour ruiner les games Clash Royal en:"

    btn1.innerHTML = "Fermant H24 le jeu"; btn2.innerHTML = "En activant la tour du roi"
}
function quest10(){
    quest_num.innerHTML = 'Question 10:'
    quest_content.innerHTML = "Au début de l'année Mickaël voulait devenir:"

    btn1.innerHTML = "Guide Michelin"; btn2.innerHTML = "Gérant d'une station-service"
    btn1.classList.remove("faux"); btn1.classList.add('vrai')
    btn2.classList.remove('vrai'); btn2.classList.add('faux')
}

// const StartTimer = setTimeout(elimplayer, 5000)
// function stop(){
//     clearTimeout(StartTimer)
// }


document.body.addEventListener('click', function (evt) {
    if (evt.target.className === 'faux') {
        elimplayer()
    }
    else if(evt.target.className === "vrai"){
        go2nextQuest()
    }
}, false);


//info: Code de retour à l'acceuil en cas de mauvaise réponse
function elimplayer(){

    //*Changement du contenu de page
    let question = document.getElementById("question")
    let elim = document.getElementById('elim')

    question.style.visibility = "hidden"
    elim.style.visibility = "visible"


    //* Exécution des sons et du retour à l'acceuil
    //!Le code est buggé lors du premier click, à retravailler (avec les .then ?)

    // info: Elimination 1 (squid game)
    playsound().then(()=>{
        setTimeout(() => {
            window.location.href = "../index.html"
        }, 5650);
    })

    let showTry = document.getElementById('nbTry')
    showTry.style.visibility = "hidden"
    Add1toCookie()
}
let playsound = function playsound(){
    return new Promise((resolve, reject)=>{
        resolve('go')
            let son = new Audio('rick.mp3')
            son.play()
    })
}

function go2nextQuest(){
    console.log("A: " + btn1.classList +  "\nB: " +btn2.classList)
    if(quest_num.innerText === "Question 1:"){
        alert("Il aime tellement ça qu'il nous a fait sniffé")
        quest2()
    }
    else if(quest_num.innerText === "Question 2:"){
        alert('Grâce à Santatra on va pouvoir faire une salade')
        // ? Un peu borderline non?
        quest3()
    }
    else if(quest_num.innerText === "Question 3:"){
        alert("A 5h du matin...")
        quest4()
    }
    else if(quest_num.innerText === "Question 4:"){
        alert("QI de 143")
        quest5()
    }
    else if(quest_num.innerText === "Question 5:"){
        alert("Dominique comunique nique nique...")
        quest6()
    }
    else if(quest_num.innerText === "Question 6:"){
        alert("C'est pas 2 semaines d'attente c'est 1 mois")
        quest7()
    }
    else if(quest_num.innerText === "Question 7:"){
        alert("Avis très objectif tkt :)")
        quest8()
    }
    else if(quest_num.innerText === "Question 8:"){
        alert("C'était l'hymne soviétique ou les vaches")
        quest9()
    }
    else if(quest_num.innerText === "Question 9:"){
        alert("Activo torre")
        quest10()
    }
    else if(quest_num.innerText === "Question 10:"){
        alert('Il foutait quoi en E² lui?')
    }
}



// info: Section Cookie


    //info:Chercher le contenu d'une info d'un cookie
    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i < ca.length; i++) {
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
function Add1toCookie(){
    let date = new Date(Date.now() + 86400000*7);  // Calcule le temps qu'il sera au bout d'une semaine
    date = date.toUTCString();

    let nbTry = getCookie('Try_QCM')
    if(nbTry != ""){
        let nbTry = Number(getCookie("Try_QCM"))  //Conversion du texte en nombre
        nbTry = nbTry+1
        document.cookie = 'Try_QCM='+nbTry+'; path=/ ; expires=' + date;
    }else{
        document.cookie = 'Try_QCM=1; path=/ ; expires=' + date;
    }   
}

// info: Crée un cookie en cas de 1ere visite

function checkcookie(){
    let date = new Date(Date.now() + 86400000*7);  // Calcule le temps qu'il sera au bout d'une semaine
    date = date.toUTCString();

    let nbTry = getCookie('Try_QCM')
    if(nbTry != ""){

    }else{
        document.cookie = 'Try_QCM=1; path=/ ; expires=' + date;
    }  
}



// info:Affichage du numéro de l'essai
let showTry = document.getElementById('nbTry')

let nbTry = getCookie('Try_QCM')
if(nbTry != ""){
    showTry.innerHTML = `<br><br><br><br>Essai n°: ${nbTry}<br><br><br><br><br>Cette fonctionnalité nécessite d'utiliser les cookies et comme en JavaScript c'est un peu relou soit reconnaissant stp (Ps: Baptiste est un génie du code pour avoir fait ça)`
}else{
    showTry.innerHTML = "Essai n°1"
}

