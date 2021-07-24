
let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let end = document.querySelector('#end')
let labelEnd = document.querySelector('#labelEnd')
let validEnd = false

let num = document.querySelector('#num')
let labelNum = document.querySelector('#labelNum')
let validNum = false

let cidade = document.querySelector('#cidade')
let labelCidade = document.querySelector('#labelCidade')
let validCidade = false


let estado = document.querySelector('#estado')
let labelEstado = document.querySelector('#labelEstado')
let validEstado = false

let cep = document.querySelector('#cep')
let labelCep = document.querySelector('#labelCep')
let validCep = false

let cel = document.querySelector('#cel')
let labelCel = document.querySelector('#labelCel')
let validCel = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let msgSuccess = document.querySelector('#msgSuccesss')
let msgError = document.querySelector('#msgError')




     // Set the date we're counting down to
     var countDownDate = new Date("Jul 25, 2021 23:58:00").getTime();

     // Update the count down every 1 second
     var x = setInterval(function() {
     
       // Get today's date and time
       var now = new Date().getTime();
     
       // Find the distance between now and the count down date
       var distance = countDownDate - now;
     
       // Time calculations for days, hours, minutes and seconds
       var days = Math.floor(distance / (1000 * 60 * 60 * 24));
       var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
       var seconds = Math.floor((distance % (1000 * 60)) / 1000);
     
       // Display the result in the element with id="demo"
       document.getElementById("demo").innerHTML = days + "d " + hours + "h "
       + minutes + "m " + seconds + "s ";
     
       // If the count down is finished, write some text
       if (distance < 0) {
         clearInterval(x);
         document.getElementById("demo").innerHTML = "EXPIRED";
       }
     }, 1000);
    


//  Validar botão Cadastrar

function incluir(){





        // localStorage

        let listaClientes = JSON.parse(localStorage.getItem('listaClientes') || '[]')


        listaClientes.push(
            {
               nome: nome.value,
               end: end.value,
               num: num.value,
               estado: estado.value,
               cep: cep.value,
               cel: cel.value,
               email: email.value

            }

        )

        localStorage.setItem('listaClientes', JSON.stringify(listaClientes))

/*
        //msg cadastro com sucesso

        if(validNome && validEnd && validNum && validCidade && validEstado && validCep && validCel && validEmail){
         
        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
        msgError.setAttribute('style', 'display: none')
        


       
     

    }else{
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencher todos os campos antes ..</strong>'
        msgSuccess.setAttribute('style', 'display: none')
        
        



    }

    */

    alert('Cliente cadastrado com sucesso!')

    // limpar campos do input ao clicar o botão incluir

    document.getElementById('nome').value='';
    document.getElementById('end').value='';
    document.getElementById('num').value='';
    document.getElementById('cidade').value='';
    document.getElementById('estado').value='';
    document.getElementById('cep').value='';
    document.getElementById('cel').value='';
    document.getElementById('email').value='';

}


// limpar campos do input ao clicar o botão excluir


function excluir(){

    document.getElementById('nome').value='';
    document.getElementById('end').value='';
    document.getElementById('num').value='';
    document.getElementById('cidade').value='';
    document.getElementById('estado').value='';
    document.getElementById('cep').value='';
    document.getElementById('cel').value='';
    document.getElementById('email').value='';

}



function home(){

    window.location.href="home.html"
}


function produtos(){

    window.location.href="cadProdutos.html"
}



// somente numeros no input

function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    //var regex = /^[0-9.,]+$/;
    var regex = /^[0-9.]+$/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
 }








