<?php
    // info: Initialisation du cookie qui compte le nombre de try
    setcookie('nombre_essais', 1, time()+3600*24*14, "/sus/");
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>???</title>
</head>
<body>

<div id="question">
    <h1 >Enigme 3</h1>
    <br><br>
    <h2>Félicitations, tu es arrivé jusqu'a la dernière enigme! <br></h2>
    <?php
        if(isset($_COOKIE['nombre_essais'])){
            echo 'Essai n° '.$_COOKIE['nombre_essais'].'<br>';
        }
    ?>
    <p id="Numquest"></p>  <br>
    <p id="question_content"></p>  
    <button id="Choix1"></button>
    <button id="Choix2"></button>
</div>





    <div id="elim">
        <!-- info: Elimination 1 -->
        <h1>Mauvaise Réponse</h1>
        <img src="elimination.gif" alt="gif" width="50%">

        
    </div>
    <style>


        #elim{
            top:0px;
            position: fixed;
            text-align: center;
            margin: 0 auto;
            width: 100%;
            visibility: hidden;

        }
        #question{
            visibility: visible;
            text-align: center;
        }
    </style>


    <script src="kahoot.js"></script>
    <script>
        function test(){
            console.log('video lancée')
            setTimeout(() => {
                window.location.href = "../index.html"
            }, 6000);
        }
    </script>
</body>
</html>