var abaprincipal = document.querySelector('.aba-princi')
var abasecundaria = document.querySelector('.aba')
var menusub = document.querySelector('.subprinci')


document.querySelector('.aba-princi').addEventListener('click',abrirmenu)
function abrirmenu(){
    document.querySelector(".aba").classList.toggle("abamudar")    
    document.querySelector(".subprinci").classList.toggle("abrirmenu")    
}