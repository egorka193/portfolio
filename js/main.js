const arrow = document.querySelector('.hero__doubledown');
console.log(arrow);
function handleClick(){
    window.scrollBy(0, document.documentElement.clientHeight)
}


arrow.addEventListener('click', handleClick)