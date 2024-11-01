function updateCountdown() {
    const eventDate = new Date('December 16, 2024 19:00:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('countdown').innerHTML = `Faltan: ${days} días, ${hours} horas y ${minutes} minutos`;
}

function addToCalendar() {
    const eventDetails = {
        title: '40° Aniversario - Fredy & America Lopez',
        description: 'Celebración de Bodas de Rubí',
        location: 'Salón Real, Ciudad de Guatemala',
        start: '2024-12-16T19:00:00',
        end: '2024-12-16T23:00:00'
    };

    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&details=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}&dates=${eventDetails.start.replace(/[-:]/g, '')}/${eventDetails.end.replace(/[-:]/g, '')}`;
    
    window.open(googleCalendarUrl, '_blank');
}

function openMap() {
    // Reemplazar con las coordenadas correctas del Salón Real
    const mapUrl = 'https://maps.google.com/?q=Ciudad+de+Guatemala';
    window.open(mapUrl, '_blank');
}

function confirmAssistance() {
    // Reemplazar con el número de WhatsApp correcto
    const message = encodeURIComponent('¡Hola! Soy Confirmo mi asistencia al 40° Aniversario de Fredy & America Lopez');
    const whatsappUrl = `https://wa.me/+50235435006?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

// Actualizar el contador cada minuto
updateCountdown();
setInterval(updateCountdown, 60000);