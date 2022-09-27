const myGlobal = 0;

function myFunction(){
    const myNumber = 1;
    console.log(myGlobal);

    function parent(){
        const inner =2;
        console.log(myNumber, myGlobal);

        function child(){
            console.log(myNumber, myGlobal, inner);

        }
        return child();

    }

    return parent();

}

myFunction();