
function Submit() {
    let nome = document.getElementById('name').value;
    let telefone = document.getElementById('telephone').value;
    let assunto = document.getElementById('subject').value;
    let mensagem = document.getElementById('msg').value;

    alert(nome + ' Sua mensagem foi enviada com sucesso!')

    sendEmail(nome,telefone, assunto, msg)
}

function sendEmail(nome, telefone, assunto, msg) {

    var params = {  
        nome: nome,
        telefone: telefone,
        assunto: assunto,
        msg:msg

    }

    emailjs.send('service_italian_bistro'), ('template_4mndvdi', params)
       .then(function(response){
          console.log('SUCESS!!', response.status, response.text)
       },function(error){
        console.log('ERROR!!!', error)
       })
    
}