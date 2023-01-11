(function() {
    let me  = {};

    me.toggleToActiveLink = function(target) {
        let links = document.querySelectorAll('.nav__link');

        let showedSection =  target.dataset.link;

        for(let i = 0; i < links.length; i++) {
            if(links[i].classList.contains('nav__link--active'))
            {
                links[i].classList.remove("nav__link--active");
            }
           
        }
        target.classList.add("nav__link--active");
        scrollToActiveSection(showedSection);
    };

    function scrollToActiveSection(showedSection) {
      
        let section = document.querySelector('.' + showedSection);
        let coords = section.getBoundingClientRect();
        let animateTime = 0.4;

        // window.scrollTo(0, coords.top);
        // let timerId  = setInterval(function() {
        //     if(document.body.scrollTop < coords.top){
        //         console.log(document.body.scrollLeft);
        //         window.scrollBy(0, 10);
        //     }
        //     else{
        //         clearInterval(timerId);
        //     }
        // }, animateTime || 0.5)
         let timerId  = setInterval(function() {
            if(window.pageYOffset < coords.top){
                console.log(document.body.scrollLeft);
                window.scrollBy(0, 10);
            }
            else{
                clearInterval(timerId);
            }
        }, animateTime || 0.5)

    }

    ITVDN.navigation = me;
}());