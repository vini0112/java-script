function conte(){
    
    var inicio = document.getElementById('ini').value 
    var fim = document.getElementById('fin').value 
    var passo = document.getElementById('pass').value
    var resp = document.getElementById('resp')

    if(inicio.length == 0 || fim.length == 0 || passo.length == 0){
        resp.innerHTML = `Impossivel contar!`
    }else{
        var i = Number(inicio)
        var f = Number(fim)
        var p = Number(passo)

        resp.innerHTML = `Contando: `
        if(p <= 0){
            alert('Cosiderado PASSO 1')
            p = 1
        }

        //contagem crescente
        if(i < f){
            for(var c = i; c <= f; c += p){
                resp.innerHTML += ` ${c} \u{1f449} `
        }
    } 
    //contagem regressiva
    else{
        for(var c = i; c >= f; c -= p){
        	resp.innerHTML += ` ${c} \u{1f449} `
        }
    }


        resp.innerHTML += ` \u{1f3c1}`
    }


}