(function(){
    let me = {};
    let form = document.querySelector(".form-container");
    let closeButton = null;

    function onClose(){
        me.close();
        closeButton.removeEventListener("click", onClose);
        document.removeEventListener("keydown", keyCheck);
    }

    function keyCheck(e){
        const keyName = e.key;
        if(keyName == "Escape"){
             if(messageText === true)
                {
                    onClose();
                }
    }
    }

    me.open = function(){
        form.classList.remove('is-hidden');
        closeButton = document.querySelector('.form__close-button');
        closeButton.addEventListener("click", onClose);
       
        document.addEventListener("keydown", keyCheck);
        
    }

    me.close = function(){
        
        form.classList.add('is-hidden');
        
    }

    me.isValid = function(){
        let requiredFields = document.querySelectorAll('[data-valid="required"]');
        let emailValue = document.querySelector('[data-email]').value;
        let numberValue = document.querySelector('[data-number]').value;
        
        if(!me.isAllCompleted(requiredFields)){
            console.log("Заповність усі необхідні поля");
            return false;
        }else if (!ITVDN.validation.isEmail(emailValue)){
            console.log("Не вірний email");
            return false;
        }else if (!ITVDN.validation.isNumber(numberValue)){
            console.log("Не вірний number");    
            return false;
        }
        else return true
        

       
    }

    me.isAllCompleted = function(data){
        let result = true;
        for(let i = 0; i < data.length; i++){
            if(ITVDN.validation.isNotEmpty(data[i].value) != true){
                result = false;
                break;
            }
            
        }
        return result;
    }

    ITVDN.form = me;
}());