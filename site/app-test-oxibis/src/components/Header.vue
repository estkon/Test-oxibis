<template>
  <div class="header">
    <div class="row">
      <div class="col-12 logo">
        <img src="../assets/img/header_logo.svg" alt="Oxibis Logo" />
      </div>
      <div class="col-12 boutons">
        <nav class="navbar">
          <div class="search-box bouton">
            <input
              type="text"
              class="search-text"
              placeholder="référence,collection"
            />
            <label for="search">
              <img
                src="../assets/img/loupe.svg"
                class="search-img"
                alt="loupe icone"
              />
            </label>
          </div>
          <div class="animation-pro bouton">
            <button class="btn-pro">
              <p class="text-pro">PRO</p>
            </button>
            <ul class="list-pro">
              <li>
                <img src="../assets/img/plume.svg" alt="plume icone" />
                <p>PRESS</p>
              </li>
              <li>
                <img src="../assets/img/cadenas.svg" alt="plume icone" />
                <p>PRO</p>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
.logo {
  position: absolute;
  padding-top: 2em;
}
.boutons {
  position: relative;
  display: flex;
  justify-content: flex-end;
}
.bouton {
  margin-right: 1em;
}

.header {
  padding-bottom: 3em;
  border-bottom: 1em;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  box-shadow: 0px 3px 2px 1px lightgrey;
  padding-top: 0px;
  max-height: 120px;
  background-color: white;
  text-align: center;
  position: fixed;
  width: auto;
  top: 0;
  right:1em;
  left:1em;
}

nav.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  max-height: 100px;
  overflow-y: hidden;
  padding-bottom: 8em;
  padding-top: 3em;
}

////////////////////////////////***GESTION DES ANIMATIONS***//////////////////////////////

// ***************************Barre de recherche****************************************//

label,
button p {
  padding: 0.2em;
}
.search-box:hover > .search-text {
  width: 150px;
  padding: 0 3px;
  font-size: 12px;
}

.search-box {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  box-shadow: 0px 1px 1px 1px lightgrey;
  border-radius: 50px;
  border: 1px solid lightgrey;
  padding: 0px 10px;
  transition: 0.4s;
  position:relative;
  cursor: pointer;
}

.search-text {
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  font-size: 16px;
  font-weight: normal;
  line-height: 40px;
  width: 0px;
  transition: 0.4s;
}

// ***************************Bouton PRO****************************************//
.btn-pro {
  position: absolute;
  background-color: #d50c0c;
  border-radius: 100%;
  border: none;
  box-shadow: 0px 3px 2px 1px lightgrey;
  font-size: 12px;
  padding: 9px;
  &:hover + .list-pro {
    animation: 0.2s anim-list-pro ease-out;
    animation-fill-mode: forwards;
  }
}

.text-pro {
  margin: 0px;
  color: white;
  font-weight: 500;
}

@keyframes anim-pro-btn {
  0% {
    opacity: 0;
    transform: translateY(80%);
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes anim-list-pro {
  0% {
    opacity: 1;
    transform: translateY(-80%);
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
// *****************liste cachée*****************//
.animation-pro {
  position: relative;
  display: flex;
  align-items: center;
}

.list-pro {
  z-index: 1;
  list-style: none;
  background-color: #d50c0c;
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 0px 0px 30px 30px;
  justify-content: center;
  padding: 6px;
  padding-top: 2em;
  margin-top: 3.4em;
  transform: translateY(-200%);
}
ul li {
  font-size: 0.8em;
  padding-top: 1em;
}
</style>