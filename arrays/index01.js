

let num = document.getElementById('fnum')
let lista = document.getElementById('fselec')
let resp = document.getElementById('resp')
let valores = []

function add(){
    if(isnumero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))

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

function finalizar(){
    if(valores.length == 0){
        alert('Digite um valor para poder finalizar!')
    }else{
        
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        
        
        for(let pos in valores){
            soma += valores[pos]

            if(valores[pos] > maior){
                maior = valores[pos]
            }if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        let media = soma / tot

        resp.innerHTML = ``
        resp.innerHTML += `<p>Valores cadastrados: ${tot}</p>`
        resp.innerHTML += `<p> O maior valor cadastrado: ${maior}</p>`
        resp.innerHTML += `<p> O menor valor cadastrado: ${menor}</p>`
        resp.innerHTML += `<p> A soma dos valores: ${soma}</p>`
        resp.innerHTML += `<p>A média dos valores: ${media}</p>`

    }
    
    
}