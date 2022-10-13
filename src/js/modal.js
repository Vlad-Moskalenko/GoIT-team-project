(() => {
  let refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    backdrop: document.querySelectorAll('.backdrop')
  };

  for (let el of refs.openModalBtn) {
    el.addEventListener('click', (e) => {
      const currentModal = e.target.dataset.modalOpen;
      refs.modal = document.querySelector(`[data-modal = ${currentModal}]`)
      refs.closeModalBtn = refs.modal.querySelector('[data-modal-close]')
      refs.closeModalBtn.addEventListener('click', toggleModal);

      toggleModal()
    });
  }

    for (let el of refs.backdrop) {
      el.addEventListener('click', (e) => {
        e.target.classList.contains('backdrop') ? toggleModal() : null;
      })
    }

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');

    const scrollLockMethod = !refs.modal.classList.contains('is-hidden')
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  }
})();
