<template>
<div class="container-footer">
  <div class="container-jaune col-12">
    <div class="reseaux">
      <h4>alors ici les reseaux</h4>
      <div class="picto">
        <img src="../assets/img/facebook.png" alt="icone bulle conversation " />
    </div>
    <div class="picto">
        <p>petit picto facebook</p>
    </div> 
      <div class="picto">
        <img
          src="../assets/img/instagram.png"
          alt="icone bulle conversation "
        />
        </div>
        <div class="picto">
        <p>et celui la off course!</p>
        </div>
    </div>
    <div class="foot-colonnes col-6">
      <ul class="colonne">
        <div><img src="../assets/img/lunettes-footer.png" alt="icone lunettes" /></div>

        <li>Donc, on est dans la lunette</li>
        <li>Vous en portez?</li>
        <li>Attention à ce qui suit:</li>
        <li>C'est en capitale italic</li>
      </ul>

      <ul class="colonne">
        <div><img src="../assets/img/bulle.png" alt="icone bulle conversation " /></div>
        
          <li>Donc, on est dans la lunette</li>
          <li>Blah blah</li>
          <li>bref on taille une bavette</li>
        </ul>


      <ul class="colonne">
        <div><img src="../assets/img/connexion.png" alt="icone cadenas" /></div>
          <li>Ici les zones lockées</li>
          <li>Genre login</li>
          <li>Et mot de passe</li>
        </ul>
    </div>
</div>
  <div class="container-bleu col-11"> 
    <span class="triangle col-12"></span>
    <span class="rectangle col-12"></span>
</div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>

.container-footer{
    position: relative;
}
.container-jaune {
  background-color: #fbbb05;
  display: flex;
  justify-content: space-evenly;
  padding-top:3em;
  position:relative;
 background-image: url("../assets/img/footer_cercle.svg");
  background-attachment: fixed; /* Le fond restera fixe */
  background-repeat: no-repeat; /* Le fond ne sera pas répété */
  background-position: left; /* Le fond sera placé en haut à droite */
  padding-bottom: 10em;
}

.foot-colonnes {
  display: flex;
  justify-content: space-around;
}
ul{
    padding-left: 0;
}

li {
  list-style-type: none;
  color: white;
}
.reseaux {
  color: #d50c0c;
  display: flex;
  flex-direction: column;
  margin-left: -8em;
}


.picto{
    text-align: center;
}

/* gestion de la forme */
.container-bleu{
  display: flex;
flex-direction: column-reverse;
}


.rectangle{
	height:40px;
    background: #58aeb9;
    position: absolute;
}
.triangle{
    display: inline-block;
    height: 0;
    width: 0;
    border-bottom: 150px solid #58aeb9;
    border-left: 1300px solid transparent;
    margin-bottom: 40px;
    
    position: absolute;
}
</style>