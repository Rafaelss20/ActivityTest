// script.js
const form = document.querySelector('form')
const nameFirst = document.getElementById('firstName')
const alerta = document.getElementById('templateEmail')
function test(){
    // lógica para enviar dados ao backend
    if(nameFirst.value ===  ''){
        console.log('erro');
        alerta.style.display = 'block'
        return alerta.innerHTML = 'Erro'
        
    }
    console.log('enviado');
    
    form.submit()
    form.reset();
    
};
