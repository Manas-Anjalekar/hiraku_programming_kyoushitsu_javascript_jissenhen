'use-strict';

{
    const open = document.getElementById('modal-open');
    const container = document.getElementById('modal-container');
    const modelBg = document.getElementById('modal-bg');
    const close = document.getElementById('modal-close');

    open.addEventListener('click', () => {
        container.classList.add('active');
        modelBg.classList.add('active');
    });

    close.addEventListener('click', () => {
        container.classList.remove('active');
        modelBg.classList.remove('active');
    });

    modelBg.addEventListener('click', () => {
        container.classList.remove('active');
        modelBg.classList.remove('active');
    });
}