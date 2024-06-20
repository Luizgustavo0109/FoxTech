document.getElementById('solicitacaoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var descricao = document.getElementById('descricao').value;

    var mensagem = `Obrigado, ${nome}! Sua solicitação foi enviada com sucesso.`;

    document.getElementById('mensagem').innerText = mensagem;

    var whatsappUrl = `https://wa.me/5585992402160?text=Nome:%20${nome}%0AEmail:%20${email}%0ADescrição:%20${descricao}`;
    window.open(whatsappUrl, '_blank');
});