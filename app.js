// get Generate Pin part 
document.getElementById('pin-btn').addEventListener('click',function(){

    // const pinRandom=Math.round(Math.random()*10000);
    // console.log(pinRandom);
    // lets get 4 digite pin 
    function pinRandom() {
        const pinRanNumber=Math.round(Math.random()*10000);
        const pinRan=pinRanNumber+'';
        console.log(pinRanNumber);
        if(pinRan.length==4){
            return pinRanNumber;

        }
        else{
            return pinRandom();
        }  
    }

    const pinGenInput=document.getElementById('pin-gen');
    pinGenInput.value=pinRandom();
})

// input pin part 
document.getElementById('input-button').addEventListener('click',function(event) {
    let inputNumber=event.target.innerText;
    const inputFeild=document.getElementById('input-pin');
    if (isNaN(inputNumber)){
        if(inputNumber=="C"){
            inputFeild.value='';

        }
    }
    else{
        inputNumber= inputFeild.value + inputNumber;
        inputFeild.value=inputNumber;
    }
    
})

// pin submittion part 
document.getElementById('submit-button').addEventListener('click',function(){
    // pins 
    const genPin=document.getElementById('pin-gen');
    const inputPin=document.getElementById('input-pin');
    // notify 
    const notMatch=document.getElementById('not-match');
    const matched= document.getElementById('matched');
    if(genPin.value==inputPin.value){
        console.log("yea, we are same bro");
        // notify part 
        notMatch.style.display='none';
        matched.style.display='block';
        // emty the feild 
        genPin.value='';
        inputPin.value='';
    }else{
        console.log("sry , we are not same bro");
        notMatch.style.display='block';
        matched.style.display='none';
        // emty the input feild 
        inputPin.value='';
    }
    
    

})

