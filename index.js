    function add( a, b){
        return a+b;
    }

    function sub(a, b){
        return a-b;
    }

    function div(a, b){
        return a/b;
    }

    function mod(a,b){
        return a%b;
    }

    function assert(expected, actual, message){
        if(expected === actual){
            return true;
        }
        else{
            console.log(message);
        }
    }

    assert(6, add(4,2), "it is not working😎");
    assert(6, add(4,4), "it is not working😎");
   

