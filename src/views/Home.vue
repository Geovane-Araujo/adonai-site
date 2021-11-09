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
          <p>Principais Funcionalidades</p>
        </div>
        <div class="cards-funcionalidades">
          <div v-for="item in funcionalidades" :key="item.text" class="card-func">
            {{ item.description }}
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
          <div class="card-pl">
            Em construção
          </div>
          <div class="card-pl">
            Em construção
          </div>
          <div class="card-pl">
            Em construção
          </div>
          <div class="card-pl">
            Em construção
          </div>
        </div>
      </div>
    </section>
    <section id="sobre" class="espacamento">
      <div>
        <div class="session-title">
          <p>Sobre Nós</p>
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
