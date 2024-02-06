document.querySelectorAll('.watch-control, .controls a, .iphone-btn').forEach(control => {
    control.addEventListener('click', e => {
        e.preventDefault()

    })
})

let x = 0
let y = 20
let z = 0

let bool = true
let Interval;

const cube = document.querySelector('.cube')

document.querySelector('.top').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x += 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`

})


document.querySelector('.bottom-x-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x -= 20}deg)  rotateY(${y}deg) rotateZ(${z}deg)`

})

document.querySelector('.left-y-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y -=20 }deg) rotateZ(${z}deg)`

})

document.querySelector('.right-y-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y +=20 }deg) rotateZ(${z}deg)`

})
document.querySelector('.top-z-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z -= 20}deg)`

})

document.querySelector('.bottom-z-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z += 20}deg)`

})

const playpause = () =>{
    if(bool){

        Interval = setInterval(() => {
            cube.style.transform = `rotateX(${x}deg)
            rotateY(${y++}deg) rotateZ(${z}deg)`
        },100)
    }else{
        clearInterval(Interval)
    }
}
playpause()

document.querySelector('.controls').addEventListener('mouseover', () => {
    bool=false
    playpause()
})
document.querySelector('.controls').addEventListener('mouseout', () => {
    bool=true
    playpause()
})


const slideshowdivs = () => {
    for(let i =1; i<=5; i++){
        const div = document.createElement('div')

        div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`

        i === 1 && div.classList.add('change');
        document.querySelector('.slideshow').appendChild(div)
    }
}
slideshowdivs()

const divs = document.querySelectorAll('.slideshow div')

let a = 1

const slideshow = () => {
    setInterval(() => {
        a++
        const div = document.querySelector('.slideshow .change')

        div.classList.remove('change')

        if(a < divs.length){
            div.nextElementSibling.classList.add('change')
        }else{
            divs[0].classList.add('change')
            a=1
        }

        
    }, 2000)
}
slideshow()


const section3content = document.querySelector('.section-3-content')
window.addEventListener('scroll', () => {
    if(window.pageYOffset + window.innerHeight >= section3content.offsetTop
        + section3content.offsetHeight /2){
            section3content.classList.add('change');
        }
})

const watchbands = document.querySelector('.watch-bands')

const watchcases = document.querySelector('.watch-cases')

const watchTopControl = document.querySelector('.watch-top-control')
const watchRightControl = document.querySelector('.watch-right-control')
const watchbottomcontrol = document.querySelector('.watch-bottom-control')
const watchLeftControl = document.querySelector('.watch-left-control')

let axisY = 0
let axisX = 0
const hideControl = () => {
    if(axisY === -280){
        watchTopControl.classList.add("hideControl")
    }else{
        watchTopControl.classList.remove("hideControl")
    }

    if(axisY === 280){
        watchbottomcontrol.classList.add("hideControl")
    }else{
        watchbottomcontrol.classList.remove("hideControl")
    }

    if(axisX === 280){
        watchRightControl.classList.add("hideControl")
    }else{
        watchRightControl.classList.remove("hideControl")
    }

    
    if(axisX === -280){
        watchLeftControl.classList.add("hideControl")
    }else{
        watchLeftControl.classList.remove("hideControl")
    }



}

watchTopControl.addEventListener('click', () =>{
    watchcases.style.marginTop = `${axisY -= 70}rem`
    hideControl()
})

watchbottomcontrol.addEventListener('click', () =>{
    watchcases.style.marginTop = `${axisY += 70}rem`
    hideControl()
})


watchRightControl.addEventListener('click', () =>{
    watchbands.style.marginRight = `${axisX += 70}rem`
    hideControl()
})


watchLeftControl.addEventListener('click', () =>{
    watchbands.style.marginRight = `${axisX -= 70}rem`
    hideControl()
})