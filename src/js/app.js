const layer1 = document.querySelector('.layer1')
const layer2 = document.querySelector('.layer2')
const layer3 = document.querySelector('.layer3')
const layer4 = document.querySelector('.layer4')
const layer5 = document.querySelector('.layer5')
const layer6 = document.querySelector('.layer6')
const layer7 = document.querySelector('.layer7')

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    layer6.style.bottom = `${-value * 0.4}px`
    layer5.style.bottom = `${-value * 0.3}px`
    layer4.style.bottom = `${-value * 0.4}px`
    layer3.style.bottom = `${-value * 0.3}px`
    layer2.style.bottom = `${-value * 0.4}px`
})