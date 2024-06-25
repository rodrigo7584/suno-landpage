<?php include './header.php'?>
<main>
  <section class="hero">
    <div class="container-fluid">
      <div class="row">
        <div class="content">
          <img src="./img/banner.png" alt="">
          <!-- <img src="./img/logo-light.svg" alt="" class="logo">
          <h1>Sua internet <strong>DEFINITIVA!</strong></h1>
          <h2>1 Giga </h2>
          <h3>a partir de apenas</h3>
          <h4>R$ 147,00</h4>
        </div>
        <div class="image">
          <img src="./img/note.jpg" alt="" />
        </div> -->
        </div>
      </div>
  </section>

  <section class="price-tables">
    <div class="container">
      <div class="row">
        <div class=" swiper tables">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="table table-1">
                <h2 class="subtitle">Internet fibra com Wi-Fi 5</h2>
                <h3 class="speed">400 Mega</h3>
                <div class="box-price">
                  <span class="price">R$ 47,00</span>
                  <span class="month">/mês</span>
                </div>
                <span class="time">após 3 meses R$ 89,90/mês</span>
                <div class="btns">
                  <button class="btn btn-online" onclick="sendData('table-1')">
                    CONTRATAR ONLINE
                    <img src="./img/icon-arrow.svg" alt="" />
                  </button>
                  <a href="#" class="btn btn-whatsapp">
                    CONTRATAR WHATSAPP
                    <img src="./img/icon-arrow.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="table table-2">
                <h2 class="subtitle">Internet fibra com Wi-Fi 5</h2>
                <h3 class="speed" data-speed="800 Mega">800 Mega</h3>
                <div class="box-price">
                  <span class="price" data-price="R$ 97,00">R$ 97,00</span>
                  <span class="month">/mês</span>
                </div>
                <div class="adicional-boxes">
                  <div class="adicional-box">
                    <!-- <img src="./img/detail.png" alt="" class="detail"> -->
                    <span class="description">
                      Adicional Telefone Fixo ilimitado + 200Mega grátis
                    </span>
                    <div class="btn-switch" data-price="R$ 197,00" data-speed="1 Giga">
                      <span class="ball"></span>
                    </div>
                  </div>
                  <div class="adicional-box">
                    <span class="description">Adicional Wi-Fi 6</span>
                    <div class="btn-switch" data-price="R$ 147,00" data-speed="800 Mega">
                      <span class="ball"></span>
                    </div>
                  </div>
                </div>
                <div class="btns">
                  <button class="btn btn-online" onclick="sendData('table-2')">
                    CONTRATAR ONLINE
                    <img src="./img/icon-arrow.svg" alt="" />
                  </button>
                  <a href="#" class="btn btn-whatsapp">
                    CONTRATAR WHATSAPP
                    <img src="./img/icon-arrow.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="table table-3">
                <h2 class="subtitle">Internet fibra com Wi-Fi 5</h2>
                <h3 class="speed" data-speed="1 Giga">1 Giga</h3>
                <div class="box-price">
                  <span class="price" data-price="R$ 147,00">R$ 147,00</span>
                  <span class="month">/mês</span>
                </div>
                <div class="adicional-boxes">
                  <div class="adicional-box">
                    <span class="description">
                      Adicional Telefone Fixo ilimitado + Wi-Fi 6 grátis
                    </span>
                    <div class="btn-switch" data-price="R$ 276,00" data-speed="1 Giga">
                      <span class="ball"></span>
                    </div>
                  </div>
                  <div class="adicional-box">
                    <span class="description">Adicional Wi-Fi 6</span>
                    <div class="btn-switch" data-price="R$ 197,00" data-speed="1 Giga">
                      <span class="ball"></span>
                    </div>
                  </div>
                </div>
                <div class="btns">
                  <button class="btn btn-online" onclick="sendData('table-3')">
                    CONTRATAR ONLINE
                    <img src="./img/icon-arrow.svg" alt="" />
                  </button>
                  <a href="#" class="btn btn-whatsapp">
                    CONTRATAR WHATSAPP
                    <img src="./img/icon-arrow.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="table table-4">
                <h2 class="subtitle">Perfeito para você</h2>
                <h3 class="speed">Personalizado</h3>
                <span class="text">
                  Monte um plano especial e personalizado para sua necessidade.
                  Fale com nossos especialistas
                </span>
                <div class="btns">
                  <a href="#" class="btn btn-whatsapp">
                    CONTRATAR WHATSAPP
                    <img src="./img/icon-arrow.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
<?php include './footer.php'?>