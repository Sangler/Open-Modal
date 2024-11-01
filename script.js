
document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.querySelector("#checkbox");
    checkbox.addEventListener('change', () => {
    const isDarkMode = checkbox.checked;
        // Add or remove the 'dark-theme' class based on the checkbox state
        document.documentElement.classList.toggle("dark-theme", isDarkMode);
    });

    const btnModal = document.getElementById('myBtn');
    const modal = document.getElementById('open-modal');
    const close = document.querySelector(".modal-close");
    // Open modal
    btnModal.addEventListener('click', (evt) => {
        evt.preventDefault();
        modal.style.display="block";
    });

    // Close modal
    close.addEventListener('click', () => {
        modal.style.display="none";
    });

});

