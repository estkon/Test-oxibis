<template>
  <div id="app">
    <Header />

      <div class="bienvenue">
        <img src="./assets/img/enveloppe.svg" alt="icone enveloppe" />
        <p>
          Bienvenue dans le test oxibis:<br />
          respirer...ça va bien se passer
        </p>
      </div>

      <div class="carte-container">
        <div class="carte col-3">
          <img src="./assets/img/geolo.svg" alt="icone geolocalisation" />
          <p>Ici une ligne centrée</p>
        </div>

        <div class="carte col-3">
          <img src="./assets/img/lunettes.svg" alt="icone lunettes" />
          <p>Ici 2 lignes...et sinon,<br />vous aimez le fromage?</p>
        </div>

        <div class="carte col-3">
          <img src="./assets/img/news.svg" alt="icone news" />
          <p>
            Comté,Morbier,Raclette...<br />
            ça donne faim hein?
          </p>
        </div>

        <div class="carte col-3">
          <img src="./assets/img/mon-compte.svg" alt="icone geolocalisation" />
          <p>Allons restons concentré,<br />c'est du sérieux tout de même :)</p>
        </div>

        <div class="carte col-3">
          <p>...On vous attendra pour la fondue ;)</p>
        </div>
      </div>

      <Footer />
    </div>
  
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";




export default {
  name: "App",
  components: {
    Header,
    Footer
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),
   url(./fonts/Montserrat/static/Montserrat-Regular.ttf) format("truetype");
}
#app {
  // text-align: center;
  margin: 1em;
  border: 2px solid lightgrey;
  background-image: url("./assets/img/footer_cercle.svg");
  background-attachment: fixed; /* Le fond restera fixe */
  background-repeat: no-repeat; /* Le fond ne sera pas répété */
  background-position: left; /* Le fond sera placé en haut à droite */
    font-family: "Montserrat", sans-serif;
  
}

.carte:nth-child(5) {
  display: flex;
  align-items: flex;
  flex-direction: column;
  margin-right: 24em;
}
//cartes

.carte-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 5em;
}

.bienvenue {
  margin: 2em 0em;
  display: flex;
  align-items: center;
  flex-direction: column;

  & p {
    margin: 1em 0em;
    text-transform: uppercase;
    font-weight: 400;
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
  & p {
    display: flex;
    text-align: center;
    align-items: center;
    margin: 0;
  }
  & img {
    opacity: 80%;
  }
}

.carte:hover {
  border-color: #d50c0c;
  border-radius: 1.5em;
  transition: border-radius 250ms;
  & p {
    color: #d50c0c;
  }
  & img {
    opacity: 100%;
  }
}
</style>
