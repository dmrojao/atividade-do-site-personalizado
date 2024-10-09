const responses = JSON.parse(localStorage.getItem('coffeeResponses'));

if (responses) {
    // Simulando os dados para os gráficos a partir das respostas
    const question1Data = {
        'sim': 0,
        'nao': 0,
        'corriqueiramente': 0
    };
    const question2Data = {
        'expresso': 0,
        'leite': 0,
        'coado': 0
    };
    const question3Data = {
        'acucar': 0,
        'sem_acucar': 0,
        'adoçante': 0
    };
    const question4Data = {
        'bolo': 0,
        'salgados': 0,
        'doces': 0,
        'cookies': 0
    };
    const question5Data = {
        'nunca': 0,
        'ocasionalmente': 0,
        'sempre': 0
    };

    // Contabiliza as respostas
    question1Data[responses.coffeeDrink]++;
    question2Data[responses.coffeeType]++;
    question3Data[responses.sweetener]++;
    question4Data[responses.accompaniment]++;
    question5Data[responses.frequency]++;

    // Gráfico 1: Você toma café?
    createChart(document.getElementById('question1').getContext('2d'), Object.keys(question1Data), Object.values(question1Data));
    // Gráfico 2: Tipos de Café Preferidos
    createChart(document.getElementById('question2').getContext('2d'), Object.keys(question2Data), Object.values(question2Data));
    // Gráfico 3: Modo de Adoçar o Café
    createChart(document.getElementById('question3').getContext('2d'), Object.keys(question3Data), Object.values(question3Data));
    // Gráfico 4: Acompanhamentos com Café
    createChart(document.getElementById('question4').getContext('2d'), Object.keys(question4Data), Object.values(question4Data));
    // Gráfico 5: Frequência em Cafeterias
    createChart(document.getElementById('question5').getContext('2d'), Object.keys(question5Data), Object.values(question5Data));
}

// Função para criar o gráfico (mesma função que antes)
function createChart(ctx, labels, data) {
    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Número de Pessoas',
                data: data,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
