const modal = document.querySelector('.modal');
const btnModal = document.querySelector('.nav-bar__btn-modal');
const btnModalIcon = document.querySelector('.btn-modal-icon')

const faders = document.querySelectorAll('.fade-in');

const sliders = document.querySelectorAll('.slide-in')

btnModal.addEventListener('click', () => {
  if(modal.classList.contains('open')) {
    modal.classList.remove('open');
    btnModalIcon.setAttribute('src', './images/icon-hamburger.svg')
  } else {
    modal.classList.add('open');
    btnModalIcon.setAttribute('src', './images/icon-close.svg')
  }
})

const appearOptions = {
  //threshold 0 - assim que o elemento toca o observer eu disparo o evento
  //threshold 1 - o elemento precisa estar em toda a view para disparar o evento
  threshold: 0,
}

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target)
      }
    })
  },appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  })

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
})