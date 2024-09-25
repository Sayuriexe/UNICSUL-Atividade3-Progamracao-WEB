let alturaDegrau = parseFloat(prompt("Informe a altura do degrau (em metros):"));
let alturaObjetivo = parseFloat(prompt("Informe a altura que deseja alcançar (em metros):"));
let degraus = Math.ceil(alturaObjetivo / alturaDegrau);
alert("Você deve subir " + degraus + " degraus.");
