import * as commonJs from "./common.js"

async function quantidadeUsuariosPorRede(){
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuario.json'
    const res = await fetch(url)
    const dados = await res.json()
    const noeDasRedes =Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)
    const data = [
        {
            x: nomeDasRedes,
            y:quantidadeDEUsuarios,
            type:'bar',
            marken:{
                color:commonJs.getCSS('--primary-color')
            }
        }
    ]
    const laytout={
        plot_bgcolor: commonJ.jetCSS('--bg-color'),
        paper_bgcolor: commonJ.jetCSS('--bg-color'),
        title: {
            text:'Redes sociais com mais usuários',
            x:0,
            font:{
                color: commonJs.getCSS('--primary-color'),
                size: 30,
                font:commonJs.getCSS('--font')
            }
        },
        xaxis:{
            tickfont: commonJs.tickConfig,
            title:{
                text:'Nome das redes',
                font: {
                    color: commonnJs.jetCSS('--secondary-color')
                }
            }
        },
        yaxis:{
            tickfont: commonJs.tickConfig,
            title:{
                text:'Bilhoẽs de usuários ativos',
                font:{
                    color:commonJs.jetCSS('--secondary-color')
                }
            }
        }
    }
    const grafico= document.createElement('div')
    grafico.className= 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico,data,laytout)
}
quantidadeUsuariosPorRede()
