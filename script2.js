//VARIAVEIS
var seletor = document.getElementsByClassName("seletores")
var config = document.getElementsByClassName("config")
var selec = document.getElementsByClassName("selec")
var marcarlido = document.getElementsByClassName("lido")
var nlido = document.getElementsByClassName("n-lidos")
var gostei = document.getElementsByClassName("like")
var naogostei = document.getElementsByClassName("unlike")
var fechar = document.getElementsByClassName("remove")
var engre = document.getElementsByClassName("config-2")
//EventListiner + Function

document.getElementsByClassName("seletores").addEventListener('click', mudarconfig)        
function mudarconfig(){                        
    config.style.display='none'
    selec.style.display='flex'
}
document.getElementsByClassName("lido").addEventListener('click', mudarlido)
function mudarlido(){            
    marcarlido.style.display='none'
    nlido.style.display='flex'
}
document.getElementsByClassName("n-lidos").addEventListener('click', mudarnlido)        
function mudarnlido(){
    nlido.style.display='none'
    marcarlido.style.display='flex'
}        
document.getElementsByClassName("like").addEventListener('click', mudargostei)
function mudargostei(){
    gostei.style.display='none'
    naogostei.style.display='flex'
}        
document.getElementsByClassName("unlike").addEventListener('click',mudarnaogostei)        
function mudarnaogostei(){
    naogostei.style.display='none'
    gostei.style.display='flex'
}       
document.getElementsByClassName("remove").addEventListener('click', fecharaba)
function fecharaba(){                     
    fechar.style.display='none'                       
    marcarlido.style.display='none'
    nlido.style.display='none'
    gostei.style.display='none'
    naogostei.style.display='none'            
    engre.style.display='flex'
}
document.getElementsByClassName("config-2").addEventListener('click', chamarconfig)
document.getElementsByClassName("config-2").addEventListener('click', mudarconfig)
function chamarconfig(){
    engre.style.display='none'
    selec.style.display='flex'
}