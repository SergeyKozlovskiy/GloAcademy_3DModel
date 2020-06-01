    //Таймер
    function countTimer(deadLine){
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining(){
            let dateStop = new Date(deadLine).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow)/1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
                return {timeRemaining, hours, minutes, seconds}; 
            }
           function upDateClock(){
            let timer = getTimeRemaining();
            let h = getTimeRemaining().hours + '',
            m = getTimeRemaining().minutes + '',
            s = getTimeRemaining().seconds + '',
            arr = [h, m, s];
           let arr2 = arr.map(function(item){
               if(item.length === 1){
                return '0' + item;
               }else{
                   return item;
               }
        });
            timerHours.textContent = arr2[0];
            timerMinutes.textContent = arr2[1];
            timerSeconds.textContent = arr2[2];
            if(timer.timeRemaining > 0){
                setInterval(upDateClock, 1000);
            }else if(timer.timeRemaining <= 0){
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            } 
           }
           upDateClock();
    }  
    export default countTimer;