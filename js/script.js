const swipeMenu = document.querySelector('.swipe__menu')

const swipeAdd = document.querySelector('.swipe__add')
swipeAdd.addEventListener('click', () => {
    scrollElement1();
    swipeMenu.style.borderBottom = ''
    swipeMenu.style.borderLeft = ''
})
function scrollElement1(){
    var wrappAdd = document.querySelector('.add__wrapp');
    wrappAdd.scrollIntoView({behavior: "smooth"});
}

const swipeLim = document.querySelector('.swipe__lim')
swipeLim.addEventListener('click', () => {
    scrollElement2();
    swipeMenu.style.borderBottom = '10px solid #E2D136'
    swipeMenu.style.borderLeft = '10px solid #E2D136'
})
function scrollElement2(){
    var wrappAdd = document.querySelector('.lim__wrapp');
    wrappAdd.scrollIntoView({behavior: "smooth"});
}

const swipeDel = document.querySelector('.swipe__del')
swipeDel.addEventListener('click', () => {
    scrollElement3();
    swipeMenu.style.borderBottom = '10px solid #8A8A8A'
    swipeMenu.style.borderLeft = '10px solid #8A8A8A'
})
function scrollElement3(){
    var wrappAdd = document.querySelector('.del__wrapp');
    wrappAdd.scrollIntoView({behavior: "smooth"});
}

const swipeNext = document.querySelector('.swipe__next')
swipeNext.addEventListener('click', () => {
    scrollElement4();
    swipeMenu.style.borderBottom = '10px solid #23BA46'
    swipeMenu.style.borderLeft = '10px solid #23BA46' 
})
function scrollElement4(){
    var wrappAdd = document.querySelector('.next__wrapp');
    wrappAdd.scrollIntoView({behavior: "smooth"});
}


function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
        change.target.classList.add('element-show');
        }
    });
    }
    let options = { threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animation');
    for (let elm of elements) {
    observer.observe(elm);
    }



window.onwheel = (e) => {
    // console.log(e.deltaY < 0);
    if(e.deltaY < 0){
        // console.log('вверх');
        swipeMenu.style.transform = ''
        arrowUp.style.transform = ''
    }else{
        // console.log('вниз');
        swipeMenu.style.transform = 'translateY(-100vh)'
        arrowUp.style.transform = 'translateY(0)'
    }
}

const arrowUp = document.querySelector('.arrow__up')
arrowUp.addEventListener('click', () => {
    scrollElement()
    arrowUp.style.transform = ''
    swipeMenu.style.transform = ''
    setTimeout(() => {
        window.scrollTo(0,0)
    }, 1000)
    
})
function scrollElement(){
    var element = document.querySelector('.title__main');
    element.scrollIntoView({behavior: "smooth"});
}

