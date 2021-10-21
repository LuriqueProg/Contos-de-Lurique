    document.querySelector('#melhores').addEventListener('mouseenter', atualize)    
    document.querySelector('#melhores').addEventListener('mouseout', desatualize)
    document.querySelector('#az').addEventListener('mouseenter', atualize)    
    document.querySelector('#az').addEventListener('mouseout', desatualize)
    document.querySelector('#mlidos').addEventListener('mouseenter', atualize)
    document.querySelector('#mlidos').addEventListener('mouseout', desatualize)
    document.querySelector('#fav').addEventListener('mouseenter', atualize)
    document.querySelector('#fav').addEventListener('mouseout', desatualize)    
    document.querySelector('#ncap').addEventListener('mouseenter', atualize)
    document.querySelector('#ncap').addEventListener('mouseout', desatualize)
    document.querySelector('#recemfin').addEventListener('mouseenter', atualize)
    document.querySelector('#recemfin').addEventListener('mouseout', desatualize)
    function atualize(){
        recematt.style.background = '#b4ad9d'
        recematt.style.border = 'none'
        recematt.style.color = 'white'
    }
    function desatualize(){
        recematt.style.background = 'white'
        recematt.style.borderBottom = '2px solid #5a574f'
        recematt.style.color = 'black'
    }    