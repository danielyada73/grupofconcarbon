<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    http_response_code(200);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'] ?? 'Não informado';
    $email = $_POST['email'] ?? 'Não informado';
    $telefone = $_POST['telefone'] ?? 'Não informado';
    $cargo = $_POST['cargo'] ?? 'Não informado';
    $projeto = $_POST['projeto'] ?? 'Não informado';
    $mensagem = $_POST['mensagem'] ?? 'Não informado';

    // Emails recipients based on user request (fallback domain prefixed with contato@)
    $to = "fabricio@fcon.com.br, contato@carbonconstrucoes.com.br, alpha.clientesleads@gmail.com";
    $subject = "Fcon/Carbon \"Novo Contato\"";
    
    $message = "
    <html>
    <head>
      <title>Fcon/Carbon \"Novo Contato\"</title>
    </head>
    <body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>
      <h2 style='color: #c5a47e;'>Novo Contato via Site - FCON CARBON</h2>
      <p><strong>Nome:</strong> {$nome}</p>
      <p><strong>E-mail:</strong> {$email}</p>
      <p><strong>Telefone:</strong> {$telefone}</p>
      <p><strong>Cargo:</strong> {$cargo}</p>
      <p><strong>Tipo de Projeto:</strong> {$projeto}</p>
      <hr style='border: 1px solid #eee; margin: 20px 0;'>
      <h3>Mensagem:</h3>
      <p style='white-space: pre-line; background: #f9f9f9; padding: 15px; border-radius: 5px;'>{$mensagem}</p>
    </body>
    </html>
    ";

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: no-reply@carbonconstrucoes.com.br" . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";

    if (mail($to, $subject, $message, $headers)) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "E-mail enviado com sucesso."]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Falha no envio do e-mail."]);
    }
} else {
    http_response_code(403);
    echo json_encode(["status" => "error", "message" => "Acesso negado."]);
}
?>
