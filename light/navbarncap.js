    document.querySelector('#melhores').addEventListener('mouseenter', atualize)    
    document.querySelector('#melhores').addEventListener('mouseout', desatualize)
    document.querySelector('#az').addEventListener('mouseenter', atualize)    
    document.querySelector('#az').addEventListener('mouseout', desatualize)    
    document.querySelector('#mlidos').addEventListener('mouseenter', atualize)
    document.querySelector('#mlidos').addEventListener('mouseout', desatualize)
    document.querySelector('#fav').addEventListener('mouseenter', atualize)
    document.querySelector('#fav').addEventListener('mouseout', desatualize)
    document.querySelector('#recematt').addEventListener('mouseenter', atualize)
    document.querySelector('#recematt').addEventListener('mouseout', desatualize)    
    document.querySelector('#recemfin').addEventListener('mouseenter', atualize)
    document.querySelector('#recemfin').addEventListener('mouseout', desatualize)
    function atualize(){
        ncap.style.background = '#b4ad9d'
        ncap.style.border = 'none'
        ncap.style.color = 'white'
    }
    function desatualize(){
        ncap.style.background = 'white'
        ncap.style.borderBottom = '2px solid #5a574f'
        ncap.style.color = 'black'
    }    