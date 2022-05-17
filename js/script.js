let numeracoes = [33,34,35,36,37,38,39,40,41,42,43,44,45,"uni","manual", "referencia"];
let count = 0;
function warning(texto, animation){
    var el = $("warning");
    el.innerHTML = texto;
    el.style.animationName = animation;

    setTimeout(function(){
        el.style.animationName = "";
        el.innerHTML = "";
    }, 4000);
}

window.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        listar()
    }
    if($("sectionResultado").innerText != "" && event.keyCode === 13){
        $("sectionResultado").style.display = "block";
    }
}, true);
function destaque(){
    if($("resultado").innerText != ""){
        $("btnCopy").className = "destacado";
    }else{
        $("btnCopy").className = "btnDesativado"
    }
}
function copiar(){
    if($("resultado").innerText != ""){
        let text = $("resultado").innerText;
        navigator.clipboard.writeText(text);
        warning("Texto Copiado", "warningGood");
        $("referencia").focus();
    }
}
function limpar(){
    $("resultado").innerHTML = "";
    destaque();
    $("sectionResultado").style.display = "none";
    $("referencia").focus();
}
function clean(){
    for(let i=0;i<numeracoes.length;i++){
        $(numeracoes[i]).value = "";
    }
    $(numeracoes[16]).focus();
    $(numeracoes[16]).value = "";
}
function $(nome){
    return document.getElementById(nome);
}
function listar(){
    var resultado = $("resultado");
    var referencia = $("referencia").value.toUpperCase();
    function valor(val){
        return $(val).value;
    }
    if($("manualCheck").checked != true){
        var anonimo = function(valor, num){
            if(valor>500){
                warning("Não é permitido valores maiores que 500", "warningBad");
            }else{
                for(let i = 0; i<valor && valor<=100; i++){
                    resultado.innerHTML += referencia+".N"+num+"<br>";
                }
            }
        }
        for(let i = 0; i<numeracoes.length-3;i++){
            anonimo(valor(numeracoes[i]),numeracoes[i]);
        }
        for(let i = 0; i<$("uni").value; i++){
            if(referencia!=""){
                resultado.innerHTML += referencia+".UNI<br>";
            }
        }
    }else{
        for(let i = 0; i<$("manual").value; i++){
            if(referencia!=""){
                if($("manual").value<500){
                    resultado.innerHTML += referencia+"<br>";
                }else{
                    warning("Não é permitido valores maiores que 500", "warningBad");
                    return;
                }
                $("warning").innerHTML = "";
            }
        }
    }
    destaque();
    for(let i=0;i<numeracoes.length;i++){
        $(numeracoes[i]).value = "";
    }
    $("sectionResultado").style.display = "block";
    $("referencia").focus();
}