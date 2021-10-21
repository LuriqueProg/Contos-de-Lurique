var az = document.querySelector('#az')
var melhores = document.querySelector('#melhores')
var mlidos = document.querySelector('#mlidos')
var fav = document.querySelector('#fav')
var recematt = document.querySelector('#recematt')
var ncap = document.querySelector('#ncap')
var recemfin = document.querySelector('#recemfin')
    
    document.querySelector('#az').addEventListener('mouseenter', atualize)
    document.querySelector('#az').addEventListener('mouseout', desatualize)    
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
        melhores.style.background = '#b4ad9d'
        melhores.style.border = 'none'
        melhores.style.color = 'white'
    }
    function desatualize(){
        melhores.style.background = 'white'
        melhores.style.borderBottom = '2px solid #5a574f'
        melhores.style.color = 'black'
    }    