let senha= document.getElementById('senhad');
function verSenha(){
if (senha.type === 'password'){
    senha.setAttribute('type','text');
}
else {senha.setAttribute('type','password');
}
}