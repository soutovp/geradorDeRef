function copiar(){
    let text = document.getElementById("resultado").innerText;
    navigator.clipboard.writeText(text);
    alert("Texto Copiado!");
}
function limpar(){
    document.getElementById("resultado").innerHTML = "";
}
function listar(){
    var t = document.getElementById("referencia").value.toUpperCase();
    var resultado = document.getElementById("resultado");
    if(document.getElementById("manualCheck").checked != true){
        for(let i = 0; i<document.getElementById("33").value; i++){
            resultado.innerHTML += t+".N33<br>";
        }
        for(let i = 0; i<document.getElementById("34").value; i++){
            resultado.innerHTML += t+".N34<br>";
        }
        for(let i = 0; i<document.getElementById("35").value; i++){
            resultado.innerHTML += t+".N35<br>";
        }
        for(let i = 0; i<document.getElementById("36").value; i++){
            resultado.innerHTML += t+".N36<br>";
        }
        for(let i = 0; i<document.getElementById("37").value; i++){
            resultado.innerHTML += t+".N37<br>";
        }
        for(let i = 0; i<document.getElementById("38").value; i++){
            resultado.innerHTML += t+".N38<br>";
        }
        for(let i = 0; i<document.getElementById("39").value; i++){
            resultado.innerHTML += t+".N39<br>";
        }
        for(let i = 0; i<document.getElementById("40").value; i++){
            resultado.innerHTML += t+".N40<br>";
        }
        for(let i = 0; i<document.getElementById("41").value; i++){
            resultado.innerHTML += t+".N41<br>";
        }
        for(let i = 0; i<document.getElementById("42").value; i++){
            resultado.innerHTML += t+".N42<br>";
        }
        for(let i = 0; i<document.getElementById("43").value; i++){
            resultado.innerHTML += t+".N43<br>";
        }
        for(let i = 0; i<document.getElementById("44").value; i++){
            resultado.innerHTML += t+".N44<br>";
        }
        for(let i = 0; i<document.getElementById("45").value; i++){
            resultado.innerHTML += t+".N45<br>";
        }
        for(let i = 0; i<document.getElementById("uni").value; i++){
            resultado.innerHTML += t+".UNI<br>";
        }
    }else{
        for(let i = 0; i<document.getElementById("manual").value; i++){
            resultado.innerHTML += t+"<br>";
        }
    }
}