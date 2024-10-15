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

    
    // // Clique ao botão "Enviar" do Chat Livre
    // const chatButton = document.querySelector('.chat-input button');
    // chatButton.addEventListener('click', function() {
    //     // Lógica para enviar a mensagem para a IA
    //     // Enviar a mensagem para o backend Python
    // });

    // // Adiciona evento de clique ao botão "Enviar" da Área de Upload
    // const uploadButton = document.getElementById('upload-button');
    // uploadButton.addEventListener('click', function() {
    //     const fileInput = document.getElementById('upload-input');
    //     const file = fileInput.files[0];

    //     // Lógica para enviar o arquivo para a IA
    //     // Enviar o arquivo para o backend Python
    // });

    // **Código para o nome do arquivo e botão de exclusão**
    const fileInputChat = document.getElementById('upload-input-chat');
    const fileNameSpanChat = document.querySelector('.file-name'); // Assumindo que você adicionou uma <span class="file-name"> no HTML
    const removeFileButtonChat = document.querySelector('.remove-file'); // Assumindo que você adicionou um <button class="remove-file"> no HTML

    // fileInputChat.addEventListener('change', (event) => {
    //     const file = event.target.files[0];
    //     fileNameSpanChat.textContent = file.name;
    //     removeFileButtonChat.style.display = 'block'; // Mostra o botão de exclusão
    // });

    // removeFileButtonChat.addEventListener('click', () => {
    //     fileInputChat.value = ''; // Limpa o input de arquivo
    //     fileNameSpanChat.textContent = ''; // Limpa o nome do arquivo
    //     removeFileButtonChat.style.display = 'none'; // Esconde o botão de exclusão
    // });

    // // Adiciona evento de clique ao botão "Gerar Proposta"
    // const gerarPropostaButton = document.getElementById('gerar-proposta'); 
    // gerarPropostaButton.addEventListener('click', function() {
    //     // Lógica para gerar a proposta
    //     // Enviar o edital para o backend Python
    // });

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