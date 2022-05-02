// TODO: compresser le fichier pour assurer la sécurité
//info: Fichier pour les éléments déclencheurs (sur les pages classiques)

if(location.pathname === "/index.html" || location.pathname === "/"){
    console.log("pathname : True")
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
}