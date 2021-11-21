function calcular(peso, altura) {
    var peso = document.getElementById('txtPeso').value;
    var altura = document.getElementById('txtAltura').value;
    var imc = peso / (altura * altura);
    document.getElementById('resultado').innerHTML = imc.toFixed(2);

    if (imc < 17) {
        document.getElementById('abaixodopeso').classList.remove('destaque');
        document.getElementById('pesonormal').classList.remove('destaque');
        document.getElementById('acimadopeso').classList.remove('destaque');
        document.getElementById('obesidade1').classList.remove('destaque');
        document.getElementById('obesidade2').classList.remove('destaque');
        document.getElementById('obesidade3').classList.remove('destaque');

        document.getElementById('muitoabaixodopeso').classList.add('destaque');
    } else if (imc <= 18.49) {
        document.getElementById('muitoabaixodopeso').classList.remove('destaque');
        document.getElementById('pesonormal').classList.remove('destaque');
        document.getElementById('acimadopeso').classList.remove('destaque');
        document.getElementById('obesidade1').classList.remove('destaque');
        document.getElementById('obesidade2').classList.remove('destaque');
        document.getElementById('obesidade3').classList.remove('destaque');

        document.getElementById('abaixodopeso').classList.add('destaque');
    } else if (imc <= 24.99) {
        document.getElementById('muitoabaixodopeso').classList.remove('destaque');
        document.getElementById('abaixodopeso').classList.remove('destaque');
        document.getElementById('acimadopeso').classList.remove('destaque');
        document.getElementById('obesidade1').classList.remove('destaque');
        document.getElementById('obesidade2').classList.remove('destaque');
        document.getElementById('obesidade3').classList.remove('destaque');

        document.getElementById('pesonormal').classList.add('destaque');
    } else if (imc <= 29.99) {
        document.getElementById('muitoabaixodopeso').classList.remove('destaque');
        document.getElementById('abaixodopeso').classList.remove('destaque');
        document.getElementById('pesonormal').classList.remove('destaque');
        document.getElementById('obesidade1').classList.remove('destaque');
        document.getElementById('obesidade2').classList.remove('destaque');
        document.getElementById('obesidade3').classList.remove('destaque');

        document.getElementById('acimadopeso').classList.add('destaque');
    } else if (imc <= 34.99) {
        document.getElementById('muitoabaixodopeso').classList.remove('destaque');
        document.getElementById('abaixodopeso').classList.remove('destaque');
        document.getElementById('pesonormal').classList.remove('destaque');
        document.getElementById('acimadopeso').classList.remove('destaque');
        document.getElementById('obesidade2').classList.remove('destaque');
        document.getElementById('obesidade3').classList.remove('destaque');

        document.getElementById('obesidade1').classList.add('destaque');
    } else if (imc <= 39.99) {
        document.getElementById('muitoabaixodopeso').classList.remove('destaque');
        document.getElementById('abaixodopeso').classList.remove('destaque');
        document.getElementById('pesonormal').classList.remove('destaque');
        document.getElementById('acimadopeso').classList.remove('destaque');
        document.getElementById('obesidade1').classList.remove('destaque');
        document.getElementById('obesidade3').classList.remove('destaque');

        document.getElementById('obesidade2').classList.add('destaque');
    } else if (imc >= 40) {
        document.getElementById('muitoabaixodopeso').classList.remove('destaque');
        document.getElementById('abaixodopeso').classList.remove('destaque');
        document.getElementById('pesonormal').classList.remove('destaque');
        document.getElementById('acimadopeso').classList.remove('destaque');
        document.getElementById('obesidade1').classList.remove('destaque');
        document.getElementById('obesidade2').classList.remove('destaque');

        document.getElementById('obesidade3').classList.add('destaque');
    } else {
        document.getElementById('resultado').innerHTML = 'digite um valor válido';
    }
}