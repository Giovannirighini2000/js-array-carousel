console.log('carousel')

let slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
]
for(let i = 0 ; i < 5; i++){
	let img = document.createElement("img")
	img.src = slides[i];
	let src = document.getElementById('img'+(i+1))
	src.appendChild(img)

}


// let img2 = document.createElement("img")
// img2.src = slides[1];
// let src2 = document.getElementById('img2')
// src2.appendChild(img2)

// let img3 = document.createElement("img")
// img3.src = slides[2];
// let src3 = document.getElementById('img3')
// src3.appendChild(img3)

// let img4 = document.createElement("img")
// img4.src = slides[3];
// let src4 = document.getElementById('img4')
// src4.appendChild(img4)

// let img5 = document.createElement("img")
// img5.src = slides[4];
// let src5 = document.getElementById('img5')
// src5.appendChild(img5)



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
    
    
    }
     
})


    