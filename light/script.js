var az = document.querySelector('#az')
var melhores = document.querySelector('#melhores')
var mlidos = document.querySelector('#mlidos')
var fav = document.querySelector('#fav')
var recematt = document.querySelector('#recematt')
var ncap = document.querySelector('#ncap')
var recemfin = document.querySelector('#recemfin')
document.querySelector('#az').addEventListener('mouseenter', atualize2)
document.querySelector('#az').addEventListener('mouseout', desatualize2)
document.querySelector('#melhores').addEventListener('mouseenter', atualize)    
document.querySelector('#melhores').addEventListener('mouseout', desatualize)      
document.querySelector('#melhores').addEventListener('click', selecionarmelhores)
document.querySelector('#melhores').addEventListener('mouseout', fixarmelhores)
document.querySelector('#mlidos').addEventListener('mouseenter', atualize)
document.querySelector('#mlidos').addEventListener('mouseout', desatualize)
document.querySelector('#fav').addEventListener('mouseenter', atualize)
document.querySelector('#fav').addEventListener('mouseout', desatualize)
document.querySelector('#recematt').addEventListener('mouseenter', atualize)
document.querySelector('#recematt').addEventListener('mouseout', desatualize)
document.querySelector('#ncap').addEventListener('mouseenter', atualize)
document.querySelector('#ncap').addEventListener('mouseout', desatualize)
document.querySelector('#recemfin').addEventListener('mouseenter', atualize)
document.querySelector('#recemfin').addEventListener('mouseout', desatualize)


function atualize(){
    az.style.background = '#b4ad9d'
    az.style.border = 'none'
    az.style.color = 'white'
}
function desatualize(){
    az.style.background = 'white'
    az.style.borderBottom = '2px solid #5a574f'
    az.style.color = 'black'
}
function selecionarmelhores(){
    melhores.style.background = 'white'
    melhores.style.borderBottom = '2px solid #5a574f'
    melhores.style.color = 'black'
}
function fixarmelhores(){
    az.style.background = '#b4ad9d'
    az.style.border = 'none'
    az.style.color = 'white'
}
function atualize2(){
    az.style.background = 'white'
    az.style.borderBottom = '2px solid #5a574f'
    az.style.color = 'black'  
    melhores.style.background = '#b4ad9d'
    melhores.style.border = 'none'
    melhores.style.color = 'white'

}
function desatualize2(){
    melhores.style.background = '#b4ad9d'
    melhores.style.border = 'none'
    melhores.style.color = 'white'
}
