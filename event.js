// TODO: compresser le fichier pour assurer la sécurité
//info: Fichier pour les éléments déclencheurs (sur les pages classiques)


//! Changer le chemin d'accès en fonction du serveur
 if(location.pathname === '/JournalE2/' || location.pathname === "/JournalE2/index.html"){
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
 if(location.pathname === "/JournalE2/credits.html"){
     let TheRealImage = document.getElementById('key')
     TheRealImage.addEventListener('click', ()=>{
         window.location.href = "sus/pour_le_fbi.html"
     })
 }
