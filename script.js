

const uploadLabel = document.querySelector('.upload-label');
const fileInput = document.getElementById('file-input');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
const fileNameDisplay = document.getElementById('file-name');

// Quando um arquivo for selecionado
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        fileNameDisplay.textContent = `Arquivo: ${file.name}`;
    }
});

// Envia a mensagem (para fins de exemplo, apenas imprime no console)
sendBtn.addEventListener('click', () => {
    const message = messageInput.value;
    if (message.trim()) {
        console.log("Mensagem enviada: ", message);
        messageInput.value = ''; // Limpa o campo de input
        fileNameDisplay.textContent = ''; // Limpa o nome do arquivo
    } else {
        alert('Digite uma mensagem ou selecione um arquivo.');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Esconde todas as seções de conteúdo inicialmente
    const contentSections = document.querySelectorAll('.content');
    contentSections.forEach(section => {
        section.style.display = 'none';
    });

    // Mostra a primeira aba por padrão
    document.getElementById('chat-livre').style.display = 'block';

    // Clique aos links das abas
    const links = document.querySelectorAll('.sidebar a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link

            // Esconde todas as seções de conteúdo
            contentSections.forEach(section => {
                section.style.display = 'none';
            });

            // Mostra a seção de conteúdo correspondente
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).style.display = 'block';
        });
    });

    // Clique ao botão "Enviar" do Chat Livre
    const chatButton = document.querySelector('.chat-input button');
    chatButton.addEventListener('click', function() {
        // Lógica para enviar a mensagem para a IA
        // Enviar a mensagem para o backend Python
    });

    // **Código para o nome do arquivo e botão de exclusão**
    const fileInputChat = document.getElementById('upload-input-chat');
    const fileNameSpanChat = document.querySelector('.file-name'); 
    const removeFileButtonChat = document.querySelector('.remove-file');

    fileInputChat.addEventListener('change', (event) => {
        const file = event.target.files[0];
        fileNameSpanChat.textContent = file.name;
        removeFileButtonChat.style.display = 'block'; // Mostra o botão de exclusão
    });

    removeFileButtonChat.addEventListener('click', () => {
        fileInputChat.value = ''; // Limpa o input de arquivo
        fileNameSpanChat.textContent = ''; // Limpa o nome do arquivo
        removeFileButtonChat.style.display = 'none'; // Esconde o botão de exclusão
    });

    // Adiciona evento de clique ao botão "Gerar Proposta"
    const gerarPropostaButton = document.getElementById('gerar-proposta'); 
    gerarPropostaButton.addEventListener('click', function() {
        // Lógica para gerar a proposta
        // Enviar o edital para o backend Python
    });

    // Envio ao Formulário de Contato
    const contatoForm = document.getElementById('contato-form');
    contatoForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        // Dados do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        // Lógica para enviar os dados do formulário
        // Enviar os dados para o backend Python
    });


});

document.getElementById('upload-btn').addEventListener('click', function() {
    const fileInput = document.getElementById('file-upload');
    const fileList = document.getElementById('file-list');

    // Limpar a lista existente
    fileList.innerHTML = '';

    // Iterar sobre os arquivos selecionados
    Array.from(fileInput.files).forEach((file) => {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';

        // Criar elemento para o nome do arquivo
        const fileName = document.createElement('span');
        fileName.className = 'file-name';
        fileName.textContent = file.name;

        // Criar botão da lixeira
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = '🗑️';
        deleteBtn.onclick = function() {
            fileList.removeChild(fileItem); // Remove o item da lista
        };

        // Adicionar nome do arquivo e botão de deletar ao item
        fileItem.appendChild(fileName);
        fileItem.appendChild(deleteBtn);

        // Adicionar item à lista de arquivos
        fileList.appendChild(fileItem);
    });

});