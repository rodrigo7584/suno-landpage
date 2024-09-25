<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mail = new PHPMailer(true);
    
    try {
        // Configurações do servidor de e-mail (SMTP)
        $mail->isSMTP();
        $mail->Host = 'mail.sunotelecom.com.br'; // Servidor SMTP
        $mail->SMTPAuth = true;
        $mail->Username = 'lead.landingpage@sunotelecom.com.br'; // Seu e-mail
        $mail->Password = '+j@c76bwK%0A'; // Sua senha
        $mail->SMTPSecure = 'ssl'; // Método de criptografia
        $mail->Port = 465; // Porta SMTP
        $mail->CharSet = 'UTF-8'; // Define a codificação de caracteres como UTF-8

        // Configurações do e-mail
        $mail->setFrom('lead.landingpage@sunotelecom.com.br', 'Sunotelecom Lead');
        $mail->addAddress('lead@sunotelecom.com.br'); // Destinatário

        // Conteúdo do e-mail
        $mail->isHTML(true);
        $mail->Subject = 'Novo Lead - Formulário MultiSteps';
        $mail->Body = "
            <h2>Você recebeu um novo lead</h2>
            <p><strong>Nome:</strong> " . htmlspecialchars($_POST['nome'], ENT_QUOTES, 'UTF-8') . "</p>
            <p><strong>E-mail:</strong> " . htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8') . "</p>
            <p><strong>Telefone:</strong> " . htmlspecialchars($_POST['telefone'], ENT_QUOTES, 'UTF-8') . "</p>
            <p><strong>Preço:</strong> " . htmlspecialchars($_POST['preco'], ENT_QUOTES, 'UTF-8') . "</p>
            <p><strong>Velocidade:</strong> " . htmlspecialchars($_POST['velocidade'], ENT_QUOTES, 'UTF-8') . "</p>
            <p><strong>CEP:</strong> " . htmlspecialchars($_POST['cep'], ENT_QUOTES, 'UTF-8') . "</p>
            <p><strong>Rua:</strong> " . htmlspecialchars($_POST['rua'], ENT_QUOTES, 'UTF-8') . "</p>
            <p><strong>Bairro:</strong> " . htmlspecialchars($_POST['bairro'], ENT_QUOTES, 'UTF-8') . "</p>
            <p><strong>Cidade:</strong> " . htmlspecialchars($_POST['cidade'], ENT_QUOTES, 'UTF-8') . "</p>
            <p><strong>UF:</strong> " . htmlspecialchars($_POST['uf'], ENT_QUOTES, 'UTF-8') . "</p>
            <p><strong>Número:</strong> " . htmlspecialchars($_POST['numero'], ENT_QUOTES, 'UTF-8') . "</p>
            <p><strong>Complemento:</strong> " . htmlspecialchars($_POST['complemento'], ENT_QUOTES, 'UTF-8') . "</p>
            <p><strong>Data de Nascimento:</strong> " . htmlspecialchars($_POST['nascimento'], ENT_QUOTES, 'UTF-8') . "</p>
            <p><strong>Nome da Mãe:</strong> " . htmlspecialchars($_POST['nome-mae'], ENT_QUOTES, 'UTF-8') . "</p>
            <p><strong>CPF/CNPJ:</strong> " . htmlspecialchars($_POST['cpf-cnpj'], ENT_QUOTES, 'UTF-8') . "</p>
            <p><strong>Vencimento:</strong> " . htmlspecialchars($_POST['vencimento'], ENT_QUOTES, 'UTF-8') . "</p>
            <p><strong>Tipo de Pagamento:</strong> " . htmlspecialchars($_POST['tipo-pagamento'], ENT_QUOTES, 'UTF-8') . "</p>
        ";

        // Envia o e-mail
        $mail->send();
        echo json_encode(['success' => true]);

    } catch (Exception $e) {
        echo json_encode(['success' => false, 'message' => 'Erro ao enviar e-mail: ' . $mail->ErrorInfo]);
    }
}
?>