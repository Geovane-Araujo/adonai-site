<template>
  <div id="navheader">
    <div class="logo">
    </div>
    <div class="botoes">
      <a href="#apresentacao" class="btn solid-black">
        <div>
          <p class="p">Home</p>
        </div>
      </a>
      <a href="#funcionalidades" class="btn solid-black">
        <div>
          <p class="p">Funcionalidades</p>
        </div>
      </a>
      <a href="#planos" class="btn solid-black">
        <div>
          <p class="p">Preços e Planos</p>
        </div>
      </a>
      <a href="#sobre" class="btn solid-black">
        <div>
          <p class="p">Sobre Nós</p>
        </div>
      </a>
      <a href="https://app.adonaisoft.com.br" class="btn solid-black">
        <div>
          <p class="p">Login</p>
        </div>
      </a>
    </div>
  </div>
  <div class="sess">
    <section id="apresentacao" class="espacamento">
      <div class="apr-left">
        <div>
          <div>
            <p class="text-header">E se nós te contarmos que tem um jeito bem mais</p>
            <p class="text-header">facil para administrar seu ministério?</p>
          </div>
          <div class="btns">
            <div>
              <a href="#finaleira" class="btn btn-rounded btn-btns">
                <div>
                  <p class="p">Conheça mais</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="apr-rigth">
        <div class="img-rigth">
        </div>
      </div>
    </section>
    <section id="funcionalidades" class="espacamento">
      <div>
        <div class="session-title">
          <p>Algumas funcionalidades que pode ajudar na gestão do ministério</p>
        </div>
        <div class="cards-funcionalidades">
          <div v-for="item in funcionalidades" :key="item.text" class="card-func">
            <div class="funcionalidade-icon">
              <i :class="item.icon"></i>
            </div>
            <div class="funcionalidade-text">
              {{ item.description }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="planos" class="espacamento">
      <div>
        <div class="session-title">
          <p>Preços e Planos</p>
        </div>
        <div class="cards-planos">
          <div v-for="item in planos" :key="item.descricao" class="card-pl">
            <div class="title-cards">
              <div class="title-card-combo">
                <div class="title-card-plano">
                   {{ item.title }}
                </div>
                <div class="title-card-price">
                  {{ item.price }}
                </div>
              </div>
            </div>
            <div v-for="func in item.funcoes" :key="func.text" class="funcoes">
              {{ func.text }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="sobre" class="espacamento">
        <div class="session-title">
          <p>Sobre Nós</p>
        </div>
        <div class="sobre-nos">
          <div class="sobre-esquerdo">
            Olá
          </div>
          <div class="sobre-direito">
            Direito
          </div>
        </div>
    </section>
  </div>
</template>

<script src="./Home.js">
</script>
<style lang="scss">
@import "./Home.scss";
</style>
