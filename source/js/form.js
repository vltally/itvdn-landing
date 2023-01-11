(function(){
    let me = {};
    let form = document.querySelector(".form-container");
    let closeButton = null;

    function onClose(){
        me.close();
        closeButton.removeEventListener("click", onClose);
    }

    me.open = function(){
        form.classList.remove('is-hidden');

        closeButton = document.querySelector('.form__close-button');
        console.log(closeButton);
        closeButton.addEventListener("click", onClose);
    }

    me.close = function(){
        console.log("hello");
        form.classList.add('is-hidden');
        
    }

    window.form = me;
}());