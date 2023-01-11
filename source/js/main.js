(function(){
   
    
    let openFormButton = document.querySelector(".arrow-down");
    let form = document.querySelector(".form");

    if(openFormButton){
        openFormButton.addEventListener("click", (e) => {
            e.preventDefault();
            ITVDN.form.open();
        })
    }

    if(form){
        form.addEventListener("submit", function(e){
            e.preventDefault();
            if(ITVDN.form.isValid()){
                console.log("All good");
            }
            else{
                console.log("Is not valid");
            }
        })
    }
   
}());