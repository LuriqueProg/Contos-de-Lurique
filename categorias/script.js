var cat =document.querySelector('#cat')
var nav =document.querySelector('.ul-nav')
var catlist = document.querySelector('.ul-cat')
var before = document.querySelector('.before')
var after = document.querySelector('.after')

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