<?php include './header.php'?>
<main>
  <section class="compra">
    <div class="container">
      <div class="row">
        <div class="menu">
          <div class="plan-details">
            <p class="chosen">Plano escolhido</p>
            <p class="speed">000 Mega</p>
            <p class="adicional">adicional</p>
          </div>
          <div class="division"></div>
          <div class="price-details">
            <p class="title">Detalhes</p>
            <div class="container-price">
              <img src="./img/icon-cart.svg" alt="" class="icon" />
              <div class="price-time">
                <div class="box-price">
                  <span class="price">R$00</span>
                  <span class="month">/mês</span>
                </div>
                <p class="time">tempo</p>
              </div>
            </div>
          </div>
          <div class="division"></div>
          <div class="plan-steps">
            <p class="title">Etapas</p>
            <ul>
              <li class="instalacao active" data-step="instalacao">Dados Instalação</li>
              <li class="pessoal" data-step="pessoal">Dados pessoais</li>
              <li class="pagamento" data-step="pagamento">Dados pagamento</li>
              <li class="conclusao" data-step="conclusao">Conclusão</li>
            </ul>
          </div>
        </div>
        <div class="campos">
          <form id="multiStepForm" class="form" method="POST">
            <input type="hidden" name="_subject" value="New submission!" />
            <input type="hidden" name="preco" class="preco" value="" />
            <input type="hidden" name="velocidade" class="velocidade" value="" />
            <input type="hidden" name="cep" class="cep" value="" />
            <input type="hidden" name="rua" class="rua" value="" />
            <input type="hidden" name="bairro" class="bairro" value="" />
            <input type="hidden" name="cidade" class="cidade" value="" />
            <input type="hidden" name="uf" class="uf" value="" />
            <input type="hidden" name="_captcha" value="false" />
            <div class="step active" data-step="instalacao">
              <h2>Onde será feita a instalação?</h2>
              <label for="cep">Informe seu CEP:</label>
              <input type="text" id="cep" class="input-rounded" data-input-type="cep" required>
              <a target="_blank" href="https://buscacepinter.correios.com.br/app/endereco/" class="correios-link">Não
                sei o meu CEP</a>
              <button onclick="buscarEndereco()" class="btn btn-busca-cep">Buscar</button>
              <ul class='resultadoBuscaCep'></ul>
            </div>

            <div class="step" data-step="instalacao">
              <h2>Qual é o número e o complemento da sua residência?</h2>
              <label for="numero">Número da casa/prédio:</label>
              <input type="text" id="numero" class="input-rounded" name="numero" data-input-type="houseNumber"
                maxlength="4" required />
              <label for="complemento">Complemento:</label>
              <input type="text" id="complemento" class="input-rounded" name="complemento" />
            </div>

            <div class="step" data-step="pessoal">
              <h2>Qual seu nome ?</h2>
              <label for="nome">Nome completo:</label>
              <input type="text" id="nome" class="input-rounded" name="nome" data-input-type="name" required />
            </div>

            <div class="step" data-step="pessoal">
              <h2>Qual seu telefone ?</h2>
              <label for="telefone">Digite seu número com DDD:</label>
              <input type="text" id="telefone" class="input-rounded" name="telefone" data-input-type="cellphone"
                maxlength="15" required />
            </div>

            <div class="step" data-step="pessoal">
              <h2>Qual seu melhor E-mail ?</h2>
              <label for="email">E-mail:</label>
              <input type="text" id="email" class="input-rounded" name="email" data-input-type="email" required />
            </div>

            <div class="step" data-step="pessoal">
              <h2>Qual sua data de nascimento ?</h2>
              <label for="data-nascimento">Data de Nascimento:</label>
              <input type="text" id="nascimento" class="input-rounded" name="nascimento" data-input-type="date"
                maxlength="10" required />
            </div>

            <div class="step" data-step="pessoal">
              <h2>Qual nome da sua mãe ?</h2>
              <label for="nome-mae">Nome da mãe:</label>
              <input type="text" id="nome-mae" class="input-rounded" name="nome-mae" data-input-type="name" required />
            </div>

            <div class="step" data-step="pessoal">
              <h2>Digite um documento ?</h2>
              <label for="cpf-cnpj">CPF ou CNPJ:</label>
              <input type="text" id="cpf-cnpj" class="input-rounded" name="cpf-cnpj" data-input-type="cpf-cnpj"
                maxlength="18" required />
            </div>

            <div class="step" data-step="pagamento">
              <h2>Qual melhor dia para o vencimento?</h2>
              <p class="label">Dia do Vencimento:</p>
              <div class="vencimento-opcoes">
                <label for="vencimento-01" class="vencimento-opcao active" onclick="setActivePayday(this)">
                  <input type="radio" id="vencimento-01" name="vencimento" value="01" checked required />
                  01
                </label>
                <label for="vencimento-07" class="vencimento-opcao" onclick="setActivePayday(this)">
                  <input type="radio" id="vencimento-07" name="vencimento" value="07" required />
                  07
                </label>
                <label for="vencimento-10" class="vencimento-opcao" onclick="setActivePayday(this)">
                  <input type="radio" id="vencimento-10" name="vencimento" value="10" required />
                  10
                </label>
                <label for="vencimento-12" class="vencimento-opcao" onclick="setActivePayday(this)">
                  <input type="radio" id="vencimento-12" name="vencimento" value="12" required />
                  12
                </label>
                <label for="vencimento-15" class="vencimento-opcao" onclick="setActivePayday(this)">
                  <input type="radio" id="vencimento-15" name="vencimento" value="15" required />
                  15
                </label>
              </div>
            </div>

            <div class="step" data-step="pagamento">
              <h2>Como prefere fazer o pagamento?</h2>
              <p class="label">Forma de Pagamento:</p>
              <div class="tipo-pagamento-opcoes">
                <label for="tipo-pagamento-boleto" class="tipo-pagamento-opcao active" onclick="setActivePayType(this)">
                  <input type="radio" id="tipo-pagamento-boleto" name="tipo-pagamento" value="boleto" required />
                  Boleto
                </label>
                <label for="tipo-pagamento-cartaocredito" class="tipo-pagamento-opcao" onclick="setActivePayType(this)">
                  <input type="radio" id="tipo-pagamento-cartaocredito" name="tipo-pagamento" value="cartaocredito"
                    required />
                  Cartão Crédito
                </label>
                <label for="tipo-pagamento-pix" class="tipo-pagamento-opcao" onclick="setActivePayType(this)">
                  <input type="radio" id="tipo-pagamento-pix" name="tipo-pagamento" value="pix" required />
                  PIX
                </label>
              </div>
            </div>

            <div class="step" data-step="pagamento">
              <h2>Quais melhores periodos para instalação?</h2>
              <ul id="dates" class="dates"></ul>
            </div>

            <div class="step" data-step="conclusao">
              <h2>Confirme seu Dados:</h2>
              <ul id="output"></ul>
              <div class="checkbox-box">
                <input type="checkbox" id="checkbox-agree" name="agreeBox" value="agree">
                <p class="checkbox-content">
                  Li e concordo com a fidelização e com o
                  <a href="#"> Contrato de prestação de Serviços</a>,
                  <a href="#"> Regulamento da Oferta</a>.
                </p>
              </div>
            </div>
            <span class="label-message"> </span>
            <div class="btns">
              <button type="button" class="btn-back" id="prevBtn" onclick="nextPrev(-1)">
                Voltar
              </button>
              <button type="button" class="btn-next" id="nextBtn" onclick="nextPrev(1)">
                Continuar
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  </section>
</main>

<?php include './footer.php'?>