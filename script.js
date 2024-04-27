let attempts = 3;

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Vérification du mot de passe
    if (password === '1234') {
        // Redirection vers la page d'accueil si le mot de passe est correct
        window.location.href = 'welcome.html';
    } else {
        attempts--;
        document.getElementById('message').textContent = 'Password is incorrect.'
        
        if (attempts === 0) {
            // Si le nombre de tentatives est épuisé, affiche un message et désactive le formulaire
            document.getElementById('message').textContent = 'Vous ne pouvez plus essayer.';
            document.getElementById('username').disabled = true;
            document.getElementById('password').disabled = true;
            document.querySelector('button[type="submit"]').disabled = true;
        }
    }
});
