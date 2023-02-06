console.log('carousel')

let slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
]
let indiceSlideAttiva = 0
let slideElements = document.getElementsByClassName('slide')
console.log(slideElements)

const rightBtnElement = document.querySelector('.arrow-general.arrow-right')
const leftBtnElement = document.querySelector('.arrow-general.arrow-left')

console.log(rightBtnElement)
let indiceSlideAttivaBlocco
rightBtnElement.addEventListener('click', function () {
	console.log('current slide', indiceSlideAttiva)
    if(indiceSlideAttiva < 4){
        let slideCorrente = slideElements[indiceSlideAttiva]
	// togliendo la classe active
	slideCorrente.classList.remove('active')

	// inremento l'indice
	indiceSlideAttiva += 1

	let prossimaSlide = slideElements[indiceSlideAttiva]
	// aggiungiamo la classe active alla seconda slide
	prossimaSlide.classList.add('active')

	console.log('next slide', indiceSlideAttiva)
    
    console.log(indiceSlideAttivaBlocco)
    }



    
    
})
leftBtnElement.addEventListener('click', function () {
	console.log('current slide', indiceSlideAttiva)
    if(indiceSlideAttiva  >0){
        let slideCorrente = slideElements[indiceSlideAttiva]
	// togliendo la classe active
	slideCorrente.classList.remove('active')

	// inremento l'indice
	indiceSlideAttiva -= 1

	let prossimaSlide = slideElements[indiceSlideAttiva]
	// aggiungiamo la classe active alla seconda slide
	prossimaSlide.classList.add('active')

	console.log('next slide', indiceSlideAttiva)
    
    console.log(indiceSlideAttivaBlocco)
    }



    
    
})


    