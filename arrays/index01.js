

let num = document.getElementById('fnum')
let lista = document.getElementById('fselec')
let resp = document.getElementById('resp')
let valores = []

function add(){
    if(isnumero(num.value) && !inlista(num.value, valores)){
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado!`
        lista.appendChild(item)
        
    }else{
        alert('Valor invalido ou não encontrado!')
    }


    num.value = ''
    num.focus()
}

function isnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return  false
    }

}