const navButton = document.querySelector('.nav-button')
const navOpen = document.querySelector('.nav-open')

console.log(navButton)
// const tween = TweenLite.to(object, time, {animation properties})
// const tween = TweenLite.to(".cover", 2, {width:'50%'})

const tl = new TimelineLite({paused: true, reversed: true})

tl.to('.cover', 1, {
    width:'60%',
    ease: Power2.easeOut
})
.to('nav', 1, {
    height:'100%',
    ease: Power2.easeOut
}, '-=0.5')

.fromTo('.nav-open', 0.5, {
    opacity:0,
    x:50,
    ease: Power2.easeOut
},{
    opacity:1,
    x:0,
    onComplete: function(){
        navOpen.getElementsByClassName.poinetEvents= 'auto';
        console.log('done')
    }
})

// navButton.addEventListener('click', ()=>{

//     // tl.play() // tl.reverse
// })

navButton.addEventListener('click', ()=>{

    if(tl.isActive()){
        e.preventDefault()
        e.stopImmediatePropagation()
        return false
    }

    toggleTween(tl)
})

function toggleTween(tween){
    tween.reversed() ? tween.play(): tween.reverse()
}