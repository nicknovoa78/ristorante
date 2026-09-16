const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;

    const messaggio = document.getElementById("messaggio");

    messaggio.textContent =
        "Grazie " + nome + "! La tua richiesta di prenotazione è stata ricevuta.";

    form.reset();

});