

function setTimer(){
    let getSeconds = document.getElementById("custom-seconds").value || 0;
    let getMinutes = document.getElementById("custom-minutes").value || 0 ;
    let getHours = document.getElementById("custom-hours").value || 0;
    // console.log(getHours,getMinutes,getSeconds);
    
    if((getSeconds>=0 && getSeconds<=60) && getMinutes>=0 && getHours>=0){
       let s =  setInterval(function(){
        //    let date = new Date();
        //    console.log(date.toLocaleTimeString());
        let displayTimer = document.getElementById("display-timers");
            displayTimer.innerText = `${getHours}: ${getMinutes} :  ${getSeconds}`;
            if( getSeconds==0 && getMinutes==0 && getHours==0){
                clearInterval(s);
                displayTimer.innerText = "";
            }
            
            if(getSeconds<=0 && getMinutes>0 && getHours>0){
                getMinutes--;
                getSeconds=60;
            }
            if(getSeconds<=0 && getMinutes>0 && getHours==0){
                getMinutes--;
                getSeconds=60;
            }

            if(getMinutes<0 && getHours>0){
                getHours--;
                getMinutes=59;
            }
            if(getHours>0 && getMinutes==0 && getSeconds==0){
                getHours--;
                getMinutes=59;
                getSeconds=59;
            }
            getSeconds--;
            console.log(getSeconds);

            

            
           
        },1000)
        
        
    }

    document.getElementById("custom-seconds").value="";
    document.getElementById("custom-minutes").value="";
    document.getElementById("custom-hours").value="";
    
}