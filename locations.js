document.addEventListener('DOMContentLoaded', () => {
    const openButtons = document.querySelectorAll('.open-modal-btn');
    const modals = document.querySelectorAll('.modal-overlay');

    const setModalState = (modal, isOpen) => {
        if (!modal) return;
        modal.classList.toggle('active', isOpen);
        modal.setAttribute('aria-hidden', !isOpen);
        document.body.classList.toggle('modal-open', isOpen);
    };

    openButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) setModalState(modal, true);
        });
    });

    document.querySelectorAll('.close-modal-btn').forEach((button) => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal-overlay');
            if (modal) setModalState(modal, false);
        });
    });

    modals.forEach((modal) => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) setModalState(modal, false);
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modals.forEach((modal) => setModalState(modal, false));
        }
    });
});