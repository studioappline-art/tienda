// Inicializar librería de animaciones al scroll (AOS)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        once: true
    });
});

// Reloj Contador de Oferta Exclusiva (Countdown Timer)
function startTimer(durationInSeconds) {
    let timer = durationInSeconds;
    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');

    setInterval(function () {
        let hours = parseInt(timer / 3600, 10);
        let minutes = parseInt((timer % 3600) / 60, 10);
        let seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if (hoursSpan) hoursSpan.textContent = hours;
        if (minutesSpan) minutesSpan.textContent = minutes;
        if (secondsSpan) secondsSpan.textContent = seconds;

        if (--timer < 0) {
            timer = durationInSeconds; // Reinicia oferta si llega a 0
        }
    }, 1000);
}

// Iniciar contador en 2 horas y 45 minutos (9900 segundos)
startTimer(9900);

// Cambiar opacidad del Navbar al hacer scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.glass-nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 10, 12, 0.95)';
    } else {
        nav.style.background = 'rgba(10, 10, 12, 0.7)';
    }
});
