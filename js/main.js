const arrow = document.querySelector('.hero__doubledown');
console.log(arrow);
function handleClick(){
    window.scrollBy(0, 800)
}


arrow.addEventListener('click', handleClick)