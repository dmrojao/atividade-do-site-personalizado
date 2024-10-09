document.getElementById('coffeeSurvey').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const formData = new FormData(this);
    const responses = {};

    for (const [key, value] of formData.entries()) {
        responses[key] = value;
    }

    console.log('Respostas do questionário:', responses);
    alert('Obrigado por responder ao questionário!');

    // Aqui você pode adicionar a lógica para processar os dados, como armazená-los ou enviá-los para um servidor
});
