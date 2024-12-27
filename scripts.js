document.getElementById('down-button-1').addEventListener('click', function() {
    var destino = document.getElementById('content-1');
    destino.scrollIntoView({
        behavior: 'smooth'
    });
});
window.addEventListener('scroll', function() {
    // Obtiene la altura total de la página
    var scrollHeight = document.documentElement.scrollHeight;
    // Obtiene la posición del scroll vertical actual
    var scrollPosition = window.innerHeight + window.scrollY;

    // Si el usuario ha llegado al final de la página
    if (scrollPosition >= scrollHeight) {
        document.getElementById('upButton').style.display = 'block';
    } else {
        document.getElementById('upButton').style.display = 'none';
    }
});