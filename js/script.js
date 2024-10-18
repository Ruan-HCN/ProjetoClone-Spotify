document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('ler_mais1');
    const content = document.getElementById('content');
    
    toggleButton.addEventListener('click', function() {
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            toggleButton.textContent = 'Como funciona o teste grátis do Spotify Premium? ▲';
        } else {
            content.classList.add('hidden');
            toggleButton.textContent = 'Como funciona o teste grátis do Spotify Premium? ▼';
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
            toggleButton.textContent = 'Como faço pra cancelar meu plano Premium? ▲';
        } else {
            content.classList.add('hidden');
            toggleButton.textContent = 'Como faço pra cancelar meu plano Premium? ▼';
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
            toggleButton.textContent = 'Como funciona o Premium Duo? ▲';
        } else {
            content.classList.add('hidden');
            toggleButton.textContent = 'Como funciona o Premium Duo? ▼';
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
            toggleButton.textContent = 'Como funciona o Premium Família? ▲';
        } else {
            content.classList.add('hidden');
            toggleButton.textContent = 'Como funciona o Premium Família? ▼';
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
            toggleButton.textContent = 'Como funciona o plano Premium Universitário? ▲';
        } else {
            content.classList.add('hidden');
            toggleButton.textContent = 'Como funciona o plano Premium Universitário? ▼';
        }
    })
})
//6
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('ler_mais6');
    const content = document.getElementById('content6');
    
    toggleButton.addEventListener('click', function() {
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            toggleButton.textContent = 'Quanto custa o Spotify Premium em Brasil? ▲';
        } else {
            content.classList.add('hidden');
            toggleButton.textContent = 'Quanto custa o Spotify Premium em Brasil? ▼';
        }
    })
})