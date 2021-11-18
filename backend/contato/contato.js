let enviar = document.getElementById("enviar");

let nome = document.getElementById('nomeCompleto');
let email = document.getElementById('sendEmail');
let telefone = document.getElementById('telefone');
let mensagem = document.getElementById('mensagem');

enviar.onclick = function(){
    
    let dadosFormulario = {
        nome: nome.value,
        email: email.value,
        telefone: telefone.value,
        mensagem: mensagem.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type','application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == "success"){ 
            alert('Email enviado!');
            nome.value = '';
            email.value = '';
            telefone.value = '';
            mensagem.value = '';
        }else{
            alert('Algo deu errado!')
        }
    }

    xhr.send(JSON.stringify(dadosFormulario));
}
