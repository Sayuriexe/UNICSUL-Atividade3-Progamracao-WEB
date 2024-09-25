let nome = prompt("Informe seu nome:");
let anoNascimento = parseInt(prompt("Informe o ano de nascimento:"));
let anoAtual = new Date().getFullYear();
let idade = anoAtual - anoNascimento;
alert("Nome: " + nome + "\nIdade: " + idade);
