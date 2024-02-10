//change navBar

window.addEventListener('scroll', () => {
  document
    .querySelector('nav')
    .classList.toggle('windows-scroll', window.scrollY > 0)
})

const faqs = document.querySelectorAll('.faq')
faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open')
    const icon = faq.querySelector('.faq__icon i ')
    if (icon.className === 'fa-solid fa-plus') {
      icon.className = 'fa-solid fa-minus'
    } else {
      icon.className = 'fa-solid fa-plus'
    }
  })
})

const openbtn = document.querySelector('.open-menu-btn')
const menu = document.querySelector('.nav__menu')
const closbtn = document.querySelector('.close-menu-btn')

openbtn.addEventListener('click', () => {
  menu.style.display = 'flex'
  openbtn.style.display = 'none'
  closbtn.style.display = 'inline-block'
})
closbtn.addEventListener('click', () => {
  menu.style.display = 'none'
  openbtn.style.display = 'inline-block'
  closbtn.style.display = 'none'
})
