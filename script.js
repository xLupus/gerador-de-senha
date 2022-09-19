const BTN        = document.getElementById('gerar');
const BTN_COPIAR = document.getElementById('copiar');

BTN_COPIAR.addEventListener('click', function() {
    let resposta = document.getElementById('senha-gerada');

    if(resposta.value.length > 0){
        navigator.clipboard.writeText(resposta.value);
        alert('Senha copiada');
    }
})

BTN.addEventListener('click', function() {
    let quant_caracter    = document.getElementById('quant_caracter').value;
    let letra_minuscula   = document.getElementById('letra_min');
    let letra_maiuscula   = document.getElementById('letra_maius');
    let caracter_especial = document.getElementById('caracter_especial');
    let numeros           = document.getElementById('numero');
    let resposta          = document.getElementById('senha-gerada');
    let senha             = '';
    let password          = '';

    if(quant_caracter < 1){
        document.getElementById('quant_caracter').value = '';
        resposta.textContent = '';
        alert('insira um numero maior que zero');
    }

    if(letra_minuscula.checked == true)
        senha += 'abcdefghijklmnopqrstuvwxyz';

    if(letra_maiuscula.checked == true)
        senha += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if(caracter_especial.checked == true)
        senha += '!@#$%^&*()_=+}{][|\/><';

    if(numeros.checked == true)
        senha += '0123456789';

    for(let i = 1; i <= quant_caracter; i++){
        let sorteio = Math.floor(Math.random() * senha.length);
        password += senha.charAt(sorteio);
    }

    resposta.textContent      = password;
    resposta.style.color      = '#b11226';
    resposta.style.fontWeight = 'bold';

    let box    = resposta.offsetHeight;
    let scroll = resposta.scrollHeight;

    if(scroll > box){
        let height = scroll - box;
        let size = (box + 2) + height;

        resposta.style.height = `${size}px`;
    }
    resposta.style.fontSize = '16px';
})
