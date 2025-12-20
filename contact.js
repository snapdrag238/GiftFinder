document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const modal = document.getElementById('contactModal');
    const closeX = document.querySelector('.close-btn');
    const closeBtn = document.getElementById('modalCloseBtn');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            modal.style.display = "block";
        });
    }

    function closeModal() {
        modal.style.display = "none";
    }

    if (closeX) closeX.onclick = closeModal;
});