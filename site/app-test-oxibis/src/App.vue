<template>
  <div id="app">
    <Header />


    <div class="carte-container">

        <div class="carte col-5">
        <img src="./assets/img/enveloppe.svg" alt="icone enveloppe" />
        <p>Bienvenue dans le test oxibis:<br/> respirer...ça va bien se passer </p>
      </div>

      <div class="carte col-5">
        <img src="./assets/img/geolo.svg" alt="icone geolocalisation" />
        <p>Ici une ligne centrée</p>
      </div>

      <div class="carte col-5">
        <img src="./assets/img/lunettes.svg" alt="icone lunettes" />
        <p>Ici 2 lignes...et sinon,<br />vous aimez le fromage?</p>
      </div>

      <div class="carte col-5">
        <img src="./assets/img/news.svg" alt="icone news" />
        <p>
          Comté,Morbier,Raclette...<br />
          ça donne faim hein?
        </p>
      </div>

      <div class="carte col-5">
        <img src="./assets/img/mon-compte.svg" alt="icone geolocalisation" />
        <p>Allons restons concentré,<br />c'est du sérieux tout de même :)</p>
      </div>

      <div class="carte col-5">
        <p>...On vous attenra pour la fondue ;)</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
#app {
  // text-align: center;
  margin: 1em;
  border: 2px solid lightgrey;
  background-image: url("./assets/img/rond-gris.svg");
  background-attachment: fixed; /* Le fond restera fixe */
  background-repeat: no-repeat; /* Le fond ne sera pas répété */
  background-position: left; /* Le fond sera placé en haut à droite */
  height: 800px;
}

html,
body {
  font-family: "Montserrat", sans-serif;
}

//cartes

.carte-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0em 8em;
}

.carte:nth-child(1){
    width: 100%;
    border: none;
    display: flex;
    flex-direction: column;
    background-color: transparent;
    text-transform: uppercase;
    font-weight: 400;
    & p{
      margin: 1em 0em;
    }
}

.carte {
  border: 3px solid lightgray;
  border-radius: 3em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  margin: 1em;
  text-align: center;
  padding: 1em 0em;
    & p{
        display: flex;
        text-align: center;
        align-items: center;
        margin:0;
      }
    & img{
      opacity: 80%;
    }
}

.carte:hover{
  border-color:#d50c0c;
  border-radius: 1.5em;
  & p{
    color:#d50c0c;
  }
      & img{
      opacity: 100%;
    }
}
</style>
