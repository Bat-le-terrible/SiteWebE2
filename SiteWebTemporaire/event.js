// TODO: compresser le fichier pour assurer la sécurité
//info: Fichier pour les éléments déclencheurs (sur les pages classiques)

console.log(document.URL)
//! Changer le chemin d'accès en fonction du serveur
// if(location.pathname === "/index.html" || location.pathname === "/"){
//     console.log("pathname : True")
    const sus = document.getElementById('ඞ')
    if(navigator.userAgent.match (/iphone/i) || navigator.userAgent.match (/Android/i)){
        sus.addEventListener("click", () =>{
            console.log("GG!")
            window.location.href = "sus/ඞ.html"
        })
    }else{
        sus.addEventListener("dblclick", () =>{
            console.log("GG!")
            window.location.href = "sus/ඞ.html"
        })
    }
// }


// if(location.pathname === "/credits.html"){
    // let TheRealImage = document.getElementById('key')
    // console.log("cc")
    // TheRealImage.addEventListener('click', ()=>{
    //     console.log('.')
    //     window.location.href = "sus/pour_le_fbi.html"
    // })
// }