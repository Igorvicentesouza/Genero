function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } 
    
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero =''
        var img = document.createElement('img')

        if(fsex[0].checked) {
            genero = 'crinça'
            if(idade >=0 && idade <9){
                //criança
                img.setAttribute('src', 'foto de criança m.jpg')
                }
                
                else if (idade <45) {
                genero = 'homem'
                img.setAttribute('src', 'foto de homem m.jpg')
                }

                if (idade >56){
                genero ='idoso'
                img.setAttribute('src', 'foto de idoso m.jpg')
                }

                if (idade >=10 && idade <25){
                    genero ='jovem'
                    img.setAttribute('src', 'download.jpg')
                    }

                else if (idade <1) {
                genero = 'recem nascido'
                img.setAttribute('src', 'foto de recem nascido.jpg')
                }
                

        }if(fsex[1].checked){
            genero = 'mulher'
            if(idade >=25 && idade <47){
            //mulher
            img.setAttribute('src', 'foto de mulher f.jpg')
            }

            else if (idade >55){
            genero ='idosa'
            img.setAttribute('src', 'foto de idosa f.jpg')
            }

            if (idade <9){
            genero ='criança'
            img.setAttribute('src', 'foto de criança f.jpg')
            }
            
 

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
       
    }
}