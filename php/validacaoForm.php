<?php
class Form {
    public $nome, $email, $mensagem;

    function cadastrarNome($nome) {
        return $nome;
    }
    function cadastrarEmail($email) {
        return $email;
    }
    function cadastrarMensagem($mensagem) {
        return $mensagem;
    }
}

$usuario = new Form;
$resnome = $usuario -> cadastrarNome($_GET['nome']);
$resemail = $usuario -> cadastrarEmail($_GET['email']);
$resmensagem = $usuario -> cadastrarMensagem($_GET['mensagem']);

include("conexao.php");
    $sql = "INSERT INTO usuario(nome, email, mensagem) VALUES ('$resnome', '$resemail', '$resmessage')";

if(mysqli_query($conexao, $sql)){
        echo "Usuário cadastrado com sucesso <br><br>";
    } else {
        echo "Erro".mysqli_connect_error($conexao);
    }
    mysqli_close($conexao);
    
    print("<a href=\"index.html\">Voltar</a>");
?>