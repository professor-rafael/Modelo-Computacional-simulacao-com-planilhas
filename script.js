// Atualiza a data atual no rodapé
document.getElementById('current-date').textContent = new Date().toLocaleDateString('pt-BR');

// Adiciona efeito de seleção ao clicar nas linhas da tabela
document.querySelectorAll('.spreadsheet tbody tr').forEach(row => {
    row.addEventListener('click', () => {
        row.classList.toggle('selected');
    });
});