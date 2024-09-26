// Placeholder for future interactivity
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfólio carregado!');
});
// Feedback após envio do formulário
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();  // Evita o comportamento padrão de recarregar a página

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                successMessage.classList.remove('d-none');
                form.reset();  // Limpa o formulário após o envio
            } else {
                alert('Ops, ocorreu um erro. Tente novamente mais tarde.');
            }
        } catch (error) {
            alert('Erro ao enviar o formulário.');
        }
    });
});
