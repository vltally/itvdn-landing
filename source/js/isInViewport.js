
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}
let messageText;

const box = document.querySelector('.form-section');


document.addEventListener('scroll', function () {
     messageText = isInViewport(box) ?
        true :
        false;

    

}, {
    passive: true
});


