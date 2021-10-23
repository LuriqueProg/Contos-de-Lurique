//VARIAVEIS
var seletor = document.querySelector('.seletores')
var config = document.querySelector('.config')
var selec = document.querySelector('.selec')
var marcarlido = document.querySelector('.lido')
var nlido = document.querySelector('.n-lidos')
var gostei = document.querySelector('.like')
var naogostei = document.querySelector('.unlike')
var fechar = document.querySelector('.remove')
var engre = document.querySelector('.config-2')
var cat =document.querySelector('#cat')
var nav =document.querySelector('.ul-nav')
var catlist = document.querySelector('.ul-cat')
var before = document.querySelector('.before')
var after = document.querySelector('.after')

//EventListiner + Function

document.querySelector('#cat').addEventListener('mouseenter', menutrocar)
function menutrocar(){
    nav.style.display='none'
    catlist.style.display='flex'
    before.style.display='none'
    after.style.display='block'
}
document.querySelector('.after').addEventListener('click', menuvoltar)
function menuvoltar(){
    nav.style.display='flex'
    catlist.style.display='none'
    before.style.display='block'
    after.style.display='none'
}
document.querySelector('.seletores').addEventListener('click', mudarconfig)        
function mudarconfig(){                        
    config.style.display='none'
    selec.style.display='flex'
}
document.querySelector('.lido').addEventListener('click', mudarlido)
function mudarlido(){            
    marcarlido.style.display='none'
    nlido.style.display='flex'
}
document.querySelector('.n-lidos').addEventListener('click', mudarnlido)        
function mudarnlido(){
    nlido.style.display='none'
    marcarlido.style.display='flex'
}        
document.querySelector('.like').addEventListener('click', mudargostei)
function mudargostei(){
    gostei.style.display='none'
    naogostei.style.display='flex'
}        
document.querySelector('.unlike').addEventListener('click',mudarnaogostei)        
function mudarnaogostei(){
    naogostei.style.display='none'
    gostei.style.display='flex'
}       
document.querySelector('.remove').addEventListener('click', fecharaba)
function fecharaba(){                     
    fechar.style.display='none'                       
    marcarlido.style.display='none'
    nlido.style.display='none'
    gostei.style.display='none'
    naogostei.style.display='none'            
    engre.style.display='flex'
}
document.querySelector('.config-2').addEventListener('click', chamarconfig)
document.querySelector('.config-2').addEventListener('click', mudarconfig)
function chamarconfig(){
    engre.style.display='none'
    selec.style.display='flex'
}