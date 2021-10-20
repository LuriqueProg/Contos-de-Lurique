document.querySelector('#melhores').addEventListener('mouseenter', atualize)    
    document.querySelector('#melhores').addEventListener('mouseout', desatualize)
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