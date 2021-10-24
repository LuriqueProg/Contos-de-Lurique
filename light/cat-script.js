var cat =document.querySelector('#cat')
var navheader =document.querySelector('.ulist-navbar')
var catlist = document.querySelector('.ul-cat')
var before = document.querySelector('.before')
var after = document.querySelector('.after')
var order = document.querySelector('.order')

document.querySelector('#cat').addEventListener('mouseenter', menutrocar)
function menutrocar(){
    navheader.style.display='none'
    catlist.style.display='flex'
    order.style.marginTop='3rem'
    before.style.display='none'
    after.style.display='block'
}
document.querySelector('.after').addEventListener('click', menuvoltar)
function menuvoltar(){
    navheader.style.display='flex'
    catlist.style.display='none'
    before.style.display='block'
    after.style.display='none'
}