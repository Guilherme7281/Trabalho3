// Função para buscar os dados da API
async function fetchData() {
    const url = 'https://jsonplaceholder.typicode.com/users'; // API pública
    try {
        const response = await fetch(url);
        const data = await response.json();

        // Exibe os dados na tela
        displayData(data);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

// Função para exibir os dados na página
function displayData(data) {
    const container = document.getElementById('data-container');
    container.innerHTML = ''; // Limpar o conteúdo antes de adicionar novos dados

    // Itera sobre os dados e cria um card para cada item
    data.forEach(item => {
        const dataItem = document.createElement('div');
        dataItem.classList.add('data-item');

        dataItem.innerHTML = `
            <h3>${item.name}</h3>
            <p><strong>Email:</strong> ${item.email}</p>
            <p><strong>Website:</strong> <a href="http://${item.website}" target="_blank">${item.website}</a></p>
        `;

        container.appendChild(dataItem);
    });
}

// Chama a função para buscar os dados quando a página carrega
window.onload = fetchData;
