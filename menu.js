let offset = 0;
const sliderinline = document.querySelector('.slider_inline');
var slideInterval = setInterval(nextSlide,10000);
const mediaequary = window.matchMedia('only screen and (min-width: 240px) and (max-width: 800px)')


if (mediaequary.matches) {
    var mql = window.matchMedia("only screen and (min-width: 240px) and (max-width: 800px)");
    document.querySelector('.button_next').addEventListener('click', nextSlide);
    document.querySelector('.button_prev').addEventListener('click', function () {
    offset = offset -  400;
    if (offset < 0){
        offset = 800;
    }
    sliderinline.style.left = -offset + 'px';
});
function nextSlide() {
    offset = offset + 400 ;
    if (offset > 800){
        offset = 0;
    }
    sliderinline.style.left = -offset + 'px';
};
}
else{
    document.querySelector('.button_next').addEventListener('click', nextSlide);
    document.querySelector('.button_prev').addEventListener('click', function () {
        offset = offset -  1547;
        if (offset < 0){
            offset = 3094;
        }
        sliderinline.style.left = -offset + 'px';
    });

    function nextSlide() {
        offset = offset +  1547;
        if (offset > 3094){
            offset = 0;
        }
        sliderinline.style.left = -offset + 'px';
    };
}