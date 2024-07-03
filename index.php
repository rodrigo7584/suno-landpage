<?php include './header.php'?>
<main>
  <section class="hero">
    <div class="container-fluid">
      <div class="row">
        <div class="content">
          <img src="./img/logo-light.svg" alt="" class="logo">
          <h1>Sua internet <br> <strong>DEFINITIVA!</strong></h1>
          <div class="hero-price-container">
            <h2>1 <br> GIGA </h2>
            <div class="hero-price">
              <h3>a partir de apenas</h3>
              <h4><span>R$</span> 147 <span>,00</span></h4>
            </div>
          </div>
          <a href="./compra.php?price=R%24+147%2C00&speed=1+Giga&time=null&adicional=null" class="btn-compre">Contrate agora</a>
        </div>
        <div class="image">
          <img src="./img/note.jpg" alt="" />
        </div>
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
                <div class="tag">
                  <img src="./img/emoji-dollar.svg" alt=""><span>PROMOÇÃO</span>
                </div>
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
                  <a href="https://api.whatsapp.com/send?phone=558007655520&text=Oi,%20vim%20pelo%20site%20da%20Suno" 
                   target="_blank" class="btn btn-whatsapp">
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
                  <a href="https://api.whatsapp.com/send?phone=558007655520&text=Oi,%20vim%20pelo%20site%20da%20Suno"  target="_blank" class="btn btn-whatsapp">
                    CONTRATAR WHATSAPP
                    <img src="./img/icon-arrow.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="table table-3">
                <div class="tag">
                  <img src="./img/emoji-stars.svg" alt=""><span>MAIS VENDIDO</span>
                </div>
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
                  <a href="https://api.whatsapp.com/send?phone=558007655520&text=Oi,%20vim%20pelo%20site%20da%20Suno" target="_blank" class="btn btn-whatsapp">
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
                  <a href="https://api.whatsapp.com/send?phone=558007655520&text=Oi,%20vim%20pelo%20site%20da%20Suno" target="_blank" class="btn btn-whatsapp">
                    CONTRATAR WHATSAPP
                    <img src="./img/icon-arrow.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
  </section>

  <section class="faq">
    <div class="container">
      <div class="row">
        <h2 class="title">Tire suas dúvidas sobre a Suno Fibra</h2>
        <div class="box-faq">
          <div class="accordion">
            <div class="accordion-title">
              <h3>1. O que é a Suno Fibra?</h3>
              <img src="./img/icon-arrow-up.svg" alt="" class="icon">
            </div>
            <div class="accordion-content">
              <p>
                A Suno Fibra é um serviço de internet de alta velocidade que utiliza tecnologia de fibra óptica para oferecer conexões rápidas e estáveis para residências e empresas.
              </p>
            </div>
          </div>
          <div class="accordion">
            <div class="accordion-title">
              <h3>2. Quais são os benefícios da internet fibra óptica?</h3>
              <img src="./img/icon-arrow-up.svg" alt="" class="icon">
            </div>
            <div class="accordion-content">
              <p>
              A internet via fibra óptica proporciona velocidades mais altas, menor latência, maior estabilidade e é menos sujeita a interferências, garantindo uma experiência de navegação mais fluida e confiável.              
              </p>      
            </div>
          </div>
          <div class="accordion">
            <div class="accordion-title">
              <h3>3. Como posso assinar a Suno Fibra?</h3>
              <img src="./img/icon-arrow-up.svg" alt="" class="icon">
            </div>
            <div class="accordion-content">
              <p>
              Você pode assinar a Suno Fibra diretamente pelo site oficial, através do atendimento telefônico ou visitando uma loja parceira da Suno Fibra. Verifique a cobertura do serviço na sua área antes de contratar.            
              </p>
            </div>
          </div>
          <div class="accordion">
            <div class="accordion-title">
              <h3>4. Quais são os planos de velocidade oferecidos pela Suno Fibra?</h3>
              <img src="./img/icon-arrow-up.svg" alt="" class="icon">
            </div>
            <div class="accordion-content">
              <p>
              A Suno Fibra oferece diversos planos que se adaptam às diferentes necessidades dos usuários, desde planos básicos até opções com velocidades ultra-rápidas para atividades que demandam alto desempenho, como streaming e jogos online.
              </p>
            </div>
          </div>
          <div class="accordion">
            <div class="accordion-title">
              <h3>5. O que está incluso nos planos da Suno Fibra?</h3>
              <img src="./img/icon-arrow-up.svg" alt="" class="icon">
            </div>
            <div class="accordion-content">
              <p>
              Os planos da Suno Fibra geralmente incluem a instalação do serviço, um roteador Wi-Fi, suporte técnico e a opção de adicionar serviços complementares, como telefonia fixa e TV por assinatura.             
             </p>
            </div>
          </div>
          <div class="accordion">
            <div class="accordion-title">
              <h3>6. Como é realizada a instalação da Suno Fibra?</h3>
              <img src="./img/icon-arrow-up.svg" alt="" class="icon">
            </div>
            <div class="accordion-content">
              <p>
                A instalação é feita por técnicos qualificados que levam a fibra óptica até o seu local, instalam o roteador e verificam a qualidade da conexão para garantir que o serviço esteja funcionando corretamente.            
              </p>
            </div>
          </div>
          <div class="accordion">
            <div class="accordion-title">
              <h3>
              7. Qual é o tempo estimado para a instalação após a contratação do serviço?
              </h3>
              <img src="./img/icon-arrow-up.svg" alt="" class="icon">
            </div>
            <div class="accordion-content">
              <p>
              O tempo de instalação pode variar dependendo da disponibilidade de técnicos e da demanda na sua região, mas geralmente é feito dentro de alguns dias úteis após a confirmação da contratação.
              </p>
            </div>
          </div>
          <div class="accordion">
            <div class="accordion-title">
              <h3>
              8. Como posso verificar se a Suno Fibra está disponível na minha área?
              </h3>
              <img src="./img/icon-arrow-up.svg" alt="" class="icon">
            </div>
            <div class="accordion-content">
              <p>
                Você pode verificar a disponibilidade da Suno Fibra no site oficial da empresa, inserindo o seu endereço, ou entrando em contato com o serviço de atendimento ao cliente.
              </p>
            </div>
          </div>
          <div class="accordion">
            <div class="accordion-title">
              <h3>
                9. Quais equipamentos são necessários para usar a Suno Fibra em casa?
              </h3>
              <img src="./img/icon-arrow-up.svg" alt="" class="icon">
            </div>
            <div class="accordion-content">
              <p>
                Para usar a Suno Fibra, você precisa de uma tomada elétrica próxima ao local de instalação do roteador e um dispositivo, como um computador ou smartphone, capaz de se conectar à rede Wi-Fi.
              </p>
            </div>
          </div>
          <div class="accordion">
            <div class="accordion-title">
              <h3>
              10. Como funciona o suporte técnico da Suno Fibra?
              </h3>
              <img src="./img/icon-arrow-up.svg" alt="" class="icon">
            </div>
            <div class="accordion-content">
              <p>
              O suporte técnico da Suno Fibra está disponível 24 horas por dia, 7 dias por semana. Você pode entrar em contato pelo telefone, pelo site ou pelo aplicativo da Suno Fibra para solucionar qualquer problema ou dúvida que possa surgir.
              </p>
            </div>
          </div>
       
        </div>
      </div>
    </div>
  </section>
</main>
<?php include './footer.php'?>