document.getElementById('down-button-1').addEventListener('click', function() {
    var destino = document.getElementById('content-1');
    destino.scrollIntoView({
        behavior: 'smooth'
    });
});
window.onscroll = function() {
    var subir = document.getElementById("subir");
    
    // Si el usuario está cerca del final de la página, mostrar el botón
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        subir.style.display = "block";
        document.getElementById("subir").addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Desplazamiento suave
            });
        });
    } else {
        subir.style.display = "none";
    }
};