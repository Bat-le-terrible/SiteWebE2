//Calculs des dimentions de plusieurs objets

// const headdiv = document.getElementById('bg_header')
// if(navigator.userAgent.match (/iphone/i) || navigator.userAgent.match (/Android/i)){
//     // headdiv.style.height = Math.floor(screen.height*0.6) + "px"
//     // L_img = screen.height
//     // l_img= Math.floor(L_img*560/1600)
//     // console.log("L image:" + L_img + "\n l image:" + l_img)
//     // headdiv.style.width = L-17 + "px"
//     // headdiv.style.height = l + "px"
 

// }else{
//     // L = screen.width
//     // l = Math.floor(L*560/1600)
    
//     // headdiv.style.width = L-17 + "px"
//     // headdiv.style.height = l + "px"
//     }




// Nav:hover
// function posmouse(event){
//     //console.log("Position Y souris: " + event.clientY +"\nPosition sur la page: " + event.pageY)
//     if(event.pageY <= 150){
//         if(event.clientY <= 55){
//             navbar.style.background = "rgb(30,30,30)"
//         }else{
//             navbar.style.background = "transparent"
//         }
//     }
// }
// window.addEventListener('mousemove', posmouse);





//Code pour mobiles et pc
// Flèche haut de page
const bouton = document.getElementById('topPage')

window.addEventListener('scroll', ()=>{       

    if(navigator.userAgent.match (/iphone/i) || navigator.userAgent.match (/Android/i)){

    }else{
            if(scrollY > 150){
                navbar.style.background = "rgb(30,30,30)"
            }else{
                navbar.style.background = "transparent"
                rubdiv.style.visibility = "hidden"
                isvisible.innerHTML = "false"
                btnrub.innerHTML = "Rubriques ▼"
            }
        }

    if(scrollY > 300){
        bouton.style.visibility = "visible"
    }else{
        bouton.style.visibility = "hidden"
    }
})

bouton.addEventListener("click", () => {                     //Lors de l'evènement (ici un clique) de la classe sélectionnée, exécuter le code ente {}
    window.scrollTo({                                       // "Scroller", aller à
        top: 0,
        behavior: "smooth"                                  //adsoucir le déplacement
    })

})




const btnrub = document.getElementById('btnrub')
const rubdiv = document.getElementById('test')
let isvisible = document.getElementById('rub_is_visible')
btnrub.addEventListener("click", () =>{
    if (isvisible.innerText === "false") {
        rubdiv.style.visibility = "visible"
        document.getElementById('rub_is_visible').innerHTML= "true"
        navbar.style.background = "rgb(30,30,30)"

        btnrub.innerHTML = "Rubriques ▲"


    }else if(isvisible.innerText === "true"){
        rubdiv.style.visibility = "hidden"
        isvisible.innerHTML = "false"

        btnrub.innerHTML = "Rubriques ▼"
        if(scrollY < 150){
            navbar.style.background = 'transparent'
        }
    }


})


// if(navigator.userAgent.indexOf("Opera")){
//     alert('opera est utilisé')
// }




//Fonction à ne pas retirer, relance la page si un changement d'écran est fait
window.onresize = function(){
    if(navigator.userAgent.match (/iphone/i) || navigator.userAgent.match (/Android/i)){  
         return 
    }else{
        setTimeout(()=>{
            window.location.reload()
        }, 2500)
    }
    
}


// Récupérer la hauteur de l'écran

function getheight(){
    console.log(screen.width + "x" + screen.height + "\nBien joué Sherlock, mais ce n'est pas un des gros easter egg") 
}
getheight()
const navbar = document.getElementById('Bandeau')






