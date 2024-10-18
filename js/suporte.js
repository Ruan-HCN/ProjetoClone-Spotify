document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('ler_mais1');
    const content = document.getElementById('content');
    
    toggleButton.addEventListener('click', function() {
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            toggleButton.textContent = 'Não consigo fazer login ▲';
        } else {
            content.classList.add('hidden');
            toggleButton.textContent = 'Não consigo fazer login ▼';
        }
    })
})
//2
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('ler_mais2');
    const content = document.getElementById('content2');
    
    toggleButton.addEventListener('click', function() {
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            toggleButton.textContent = 'Ajuda com pagamento não efetuado ▲';
        } else {
            content.classList.add('hidden');
            toggleButton.textContent = 'Ajuda com pagamento não efetuado ▼';
        }
    })
})
//3
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('ler_mais3');
    const content = document.getElementById('content3');
    
    toggleButton.addEventListener('click', function() {
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            toggleButton.textContent = 'Cobrança muito alta ▲';
        } else {
            content.classList.add('hidden');
            toggleButton.textContent = 'Cobrança muito alta ▼';
        }
    })
})
//4
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('ler_mais4');
    const content = document.getElementById('content4');
    
    toggleButton.addEventListener('click', function() {
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            toggleButton.textContent = 'Convidar ou remover membros do plano Família ▲';
        } else {
            content.classList.add('hidden');
            toggleButton.textContent = 'Convidar ou remover membros do plano Família ▼';
        }
    })
})
//5
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('ler_mais5');
    const content = document.getElementById('content5');
    
    toggleButton.addEventListener('click', function() {
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            toggleButton.textContent = 'Atualizar dados de pagamento ▲';
        } else {
            content.classList.add('hidden');
            toggleButton.textContent = 'Atualizar dados de pagamento ▼';
        }
    })
})
