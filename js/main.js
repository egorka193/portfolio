const arrow = document.querySelector('.hero__doubledown');
console.log(arrow);
function handleClick(){
    window.scrollBy({top: document.documentElement.clientHeight, left: 0, behavior: "smooth"})
}
// 0, document.documentElement.clientHeight

arrow.addEventListener('click', handleClick)