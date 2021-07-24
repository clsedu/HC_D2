
let qtde1 = document.querySelector('#qtde1')
let labelQtde1 = document.querySelector('#labelqtde1')
let validQtde1 = false


let qtde2 = document.querySelector('#qtde2')
let labelQtde2 = document.querySelector('#labelqtde2')
let validQtde2 = false


let qtde3 = document.querySelector('#qtde3')
let labelQtde3 = document.querySelector('#labelqtde3')
let validQtde3 = false


let qtde4 = document.querySelector('#qtde4')
let labelQtde4 = document.querySelector('#labelqtde4')
let validQtde4 = false


let qtde5 = document.querySelector('#qtde5')
let labelQtde5 = document.querySelector('#labelqtde5')
let validQtde5 = false





let msgSuccess = document.querySelector('#msgSuccesss')
let msgError = document.querySelector('#msgError')


//  Validar botão Cadastrar

function incluir(){

        // localStorage

        let listaProdutos = JSON.parse(localStorage.getItem('listaProdutos') || '[]')


        listaProdutos.push(
            {
               Tinta: qtde1.value,
               Rolo: qtde2.value,
               qtdeCad3: qtde3.value,
               qtdeCad4: qtde4.value,
               qtdeCad5: qtde5.value
               

            }

        )

        localStorage.setItem('listaProdutos', JSON.stringify(listaProdutos))


        //msg cadastro com sucesso

        if(validQtde1 && validQtde2 && validQtde3 && validQtde4 && validQtde5 ){
         
        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
        msgError.setAttribute('style', 'display: none')
        


       
     

    }else{
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencher todos os campos antes ..</strong>'
        msgSuccess.setAttribute('style', 'display: none')
        
        



    }

    

    alert('Produto cadastrado com sucesso!')

    // limpar campos do input ao clicar o botão incluir

    document.getElementById('qtde1').value='';
    document.getElementById('qtde2').value='';
    document.getElementById('qtde3').value='';
    document.getElementById('qtde4').value='';
    document.getElementById('qtde5').value='';
  
  

}


// limpar campos do input ao clicar o botão excluir


function excluir(){

    alert('Produto excluído com sucesso!')

    document.getElementById('qtde1').value='';
    document.getElementById('qtde2').value='';
    document.getElementById('qtde3').value='';
    document.getElementById('qtde4').value='';
    document.getElementById('qtde5').value='';
 
}



function home(){

    window.location.href="home.html"
}


function clientes(){

    window.location.href="cadClientes.html"
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






