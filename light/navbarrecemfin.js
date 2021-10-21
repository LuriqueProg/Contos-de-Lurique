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
    document.querySelector('#ncap').addEventListener('mouseenter', atualize)
    document.querySelector('#ncap').addEventListener('mouseout', desatualize)
    
    function atualize(){
        recemfin.style.background = '#b4ad9d'
        recemfin.style.border = 'none'
        recemfin.style.color = 'white'
    }
    function desatualize(){
        recemfin.style.background = 'white'
        recemfin.style.borderBottom = '2px solid #5a574f'
        recemfin.style.color = 'black'
    }    