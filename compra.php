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
              <li class="instalacao active">Dados Instalação</li>
              <li class="pessoal">Dados pessoais</li>
              <li class="pagamento">Dados pagamento</li>
              <li class="conclusao">Conclusão</li>
            </ul>
          </div>
        </div>
        <div class="campos">
          <form id="multiStepForm" class="form" method="POST">
            <input type="hidden" name="_subject" value="New submission!" />
            <input type="hidden" name="preco" class="preco" value="" />
            <input type="hidden" name="velocidade" class="velocidade" value="" />
            <input type="hidden" name="_captcha" value="false" />
            <div class="step instalacao active">
              <h2>Onde será feita a instalação?</h2>
              <div class="box-steps">
                <label for="endereco">Endereço:</label>
                <input type="text" id="endereco" name="endereco" required />
                <label for="bairro">Bairro:</label>
                <input type="text" id="bairro" name="bairro" required />
                <label for="cidade">Cidade:</label>
                <input type="text" id="cidade" name="cidade" required />
                <label for="numero">Número:</label>
                <input type="text" id="numero" name="numero" required />
                <label for="complemento">Complemento:</label>
                <input type="text" id="complemento" name="complemento" />
              </div>
            </div>

            <div class="step">
              <h2>Seus dados para cadastro:</h2>
              <div class="box-steps">
                <label for="nome">Nome completo:</label>
                <input type="text" id="nome" name="nome" required />
                <label for="telefone">Telefone:</label>
                <input type="text" id="telefone" name="telefone" required />
                <label for="email">E-mail:</label>
                <input type="text" id="email" name="email" required />
                <label for="data-nascimento">Data de Nascimento:</label>
                <input type="text" id="nascimento" name="nascimento" required />
                <label for="nome-mae">Nome da mãe:</label>
                <input type="text" id="nome-mae" name="nome-mae" required />
                <label for="cpf-cnpj">CPF ou CNPJ:</label>
                <input type="text" id="cpf-cnpj" name="cpf-cnpj" required />
              </div>
            </div>

            <div class="step">
              <h2>Como prefere fazer o pagamento?</h2>
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
                  <input type="radio" id="tipo-pagamento-pix" name="tipo-pagamento" value="pix"
                    required />
                  PIX
                </label>
              </div>
            </div>

            <div class="step">
              <h2>Confirme seu Dados:</h2>
              <ul id="output"></ul>
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