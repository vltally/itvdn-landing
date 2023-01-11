(function () {
    let me = {};

    me.isEmail = function(email){
        let re = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
        return re.test(email);
    }


    me.isNumber = function(number){
        let re = /^\d+$/;
        return re.test(number);
    }

    me.isNotEmpty = function(str){
        return Boolean(str);
    }

    ITVDN.validation = me;
}());