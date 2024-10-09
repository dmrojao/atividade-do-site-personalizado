const data = {
    // Dados para a pergunta 1
    question1: {
        labels: ['Sim', 'Não', 'Corriqueiramente'],
        data: [12, 3, 5]
    },
    // Dados para a pergunta 2
    question2: {
        labels: ['Café expresso', 'Café com leite', 'Café coado'],
        data: [6, 8, 6]
    },
    // Dados para a pergunta 3
    question3: {
        labels: ['Com açúcar', 'Sem açúcar', 'Com adoçante'],
        data: [10, 6, 4]
    },
    // Dados para a pergunta 4
    question4: {
        labels: ['Bolo', 'Salgados', 'Doces finos', 'Cookies'],
        data: [7, 4, 5, 4]
    },
    // Dados para a pergunta 5
    question5: {
        labels: ['Nunca', 'Ocasionalmente', 'Sempre'],
        data: [2, 10, 8]
    }
};

// Função para criar o gráfico
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

// Funções para calcular média, moda e mediana
function calculateMean(data) {
    const sum = data.reduce((a, b) => a + b, 0);
    return sum / data.length;
}

function calculateMedian(data) {
    const sorted = [...data].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

function calculateMode(data) {
    const frequency = {};
    let maxFreq = 0;
    let modes = [];

    data.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
        }
    });

    for (const key in frequency) {
        if (frequency[key] === maxFreq) {
            modes.push(Number(key));
        }
    }

    return modes.length === Object.keys(frequency).length ? [] : modes;
}

// Preparar os dados para o gráfico de estatísticas
const allData = [
    data.question1.data,
    data.question2.data,
    data.question3.data,
    data.question4.data,
    data.question5.data
];

const meanData = allData.map(arr => calculateMean(arr));
const medianData = allData.map(arr => calculateMedian(arr));
const modeData = allData.map(arr => calculateMode(arr).length ? calculateMode(arr)[0] : null);

// Criar os gráficos
createChart(document.getElementById('question1').getContext('2d'), data.question1.labels, data.question1.data);
createChart(document.getElementById('question2').getContext('2d'), data.question2.labels, data.question2.data);
createChart(document.getElementById('question3').getContext('2d'), data.question3.labels, data.question3.data);
createChart(document.getElementById('question4').getContext('2d'), data.question4.labels, data.question4.data);
createChart(document.getElementById('question5').getContext('2d'), data.question5.labels, data.question5.data);

// Criar gráfico de média, moda e mediana
const statsLabels = ['Média', 'Mediana', 'Moda'];
const statsData = [meanData, medianData.map(num => num || 0), modeData.map(num => num || 0)];

const statsChart = new Chart(document.getElementById('statsChart').getContext('2d'), {
    type: 'bar',
    data: {
        labels: ['Pergunta 1', 'Pergunta 2', 'Pergunta 3', 'Pergunta 4', 'Pergunta 5'],
        datasets: [{
            label: 'Média',
            data: meanData,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
        }, {
            label: 'Mediana',
            data: medianData,
            backgroundColor: 'rgba(255, 206, 86, 0.6)',
        }, {
            label: 'Moda',
            data: modeData,
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
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
