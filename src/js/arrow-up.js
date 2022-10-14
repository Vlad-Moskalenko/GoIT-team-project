const arrowUp = {
  el: document.querySelector('.arrow-up'),
  show() {
    this.el.classList.remove('hide');
  },
  hide() {
    this.el.classList.add('hide');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? this.show() : this.hide();
    });

    document.querySelector('.arrow-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

arrowUp.addEventListener();