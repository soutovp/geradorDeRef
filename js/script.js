function destaque(){
    if(document.getElementById("resultado").innerText != ""){
        document.getElementById("btnCopy").className = "destacado";
    }else{
        document.getElementById("btnCopy").className = "btnDesativado"
    }
}
function copiar(){
    if(document.getElementById("resultado").innerText != ""){
        let text = document.getElementById("resultado").innerText;
        navigator.clipboard.writeText(text);
        alert("Texto Copiado!");
    }
}
function limpar(){
    document.getElementById("resultado").innerHTML = "";
    destaque();
}
function listar(){
    var resultado = document.getElementById("resultado");
    var referencia = document.getElementById("referencia").value.toUpperCase();
    function valor(val){
        return document.getElementById(val).value;
    }
    let numeracoes = [33,34,35,36,37,38,39,40,41,42,43,44,45,"uni","manual"]
    if(document.getElementById("manualCheck").checked != true){
        var anonimo = function(valor, num){
            if(valor>500){
                alert("Não é permitido valores maiores que 500");
            }else{
                for(let i = 0; i<valor && valor<=100; i++){
                    resultado.innerHTML += referencia+".N"+num+"<br>";
                }
            }
        }
        for(let i = 0; i<numeracoes.length-1;i++){
            anonimo(valor(numeracoes[i]),numeracoes[i]);
        }
        for(let i = 0; i<document.getElementById("uni").value; i++){
            resultado.innerHTML += referencia+".UNI<br>";
        }
    }else{
        for(let i = 0; i<document.getElementById("manual").value; i++){
            resultado.innerHTML += referencia+"<br>";
        }
    }
    destaque();
}