//função calcular recebe dois parâmetros o tipo e o valor
function calcular(tipo, valor){
    
    
    if(tipo === 'acao'){//recebendo o parâmetro tipo
        if(valor === 'ce'){
            document.getElementById('display').value = '0'
        }
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('display').value += valor
        }
        if(valor === '='){
            let valor_campo = eval(document.getElementById('display').value)
            document.getElementById('display').value = valor_campo
        }
    }else if(tipo === 'valor'){//recebendo o parâmetro valor
        let valor_campo = document.getElementById('display').value
        document.getElementById('display').value = valor_campo + valor
    }
}