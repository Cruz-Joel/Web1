function login(){

    var usr_email = 'jocruz2021joel@gmail.com'
    var usr_senha = '12345678'
    var login = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if(login == usr_email && senha == usr_senha){
        alert ('Login efetuado com sucesso!!')
        location.href="#"
    }else if(login != usr_email && senha == usr_senha){
        alert ('Falha ao realizar login. Verifique seu e-mail!')
    }else if(login == usr_email && senha != usr_senha){
        alert ('Falha ao realizar login. Verifique sua senha!')
    }else if(login === "" && senha === ""){
        alert ('porfavor preencha os campos obrigatorios')
    }
}