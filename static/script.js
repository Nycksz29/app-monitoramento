const temperaturas = []
const horarios = []

const grafico = new Chart(
    document.getElementById("grafico"),
    {
        type: 'line',

        data:{
            labels: horarios,

            datasets: [{
                label: 'Temperatura ºC',
                data: temperaturas
            }]
        },
        options:{
            responsive: true
        }
    }
)

function atualizarTemperatura() {


    fetch("/temperatura").
    then(resposta => resposta.json()).
    then(dados => {

        let valor = dados.temperatura

        document.getElementById("temperatura").innerHTML =
        valor + " ºC "

        temperaturas.push(valor)
        horarios.push(new Date().toLocaleTimeString())

        grafico.update()
    })
}

setInterval(atualizarTemperatura, 2000)

atualizarTemperatura()