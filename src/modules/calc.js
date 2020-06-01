    //Калькулятор
            //Запрет ввода других знаков кроме цифр в калькуляторе
            const calcBlock = document.querySelector('.calc-block');
            calcBlock.addEventListener('input', () => {
                let target = event.target;
                if(target.matches('.calc-square' || '.calc-count' || '.calc-day')){
                let text = target.value;
                   target.textContent = text.replace(/\D/g, ''); 
                }
            });

            const calc = (price = 100) => {
                const calcType = document.querySelector('.calc-type'),
                calcSquare = document.querySelector('.calc-square'),
                calcDay = document.querySelector('.calc-day'),
                calcCount = document.querySelector('.calc-count'),
                totalValue = document.getElementById('total');
        
                const countSum = () => {
                    let total = 0,
                        countValue = 1,
                        dayValue = 1;
                    //Получение значения индекса select
                    const typeValue = calcType.options[calcType.selectedIndex].value,
                     squareValue = +calcSquare.value;
        
                    if(calcDay.value && calcDay.value < 5){
                        dayValue *= 2;
                    }else if(calcDay.value && calcDay.value < 10){
                        dayValue *= 1.5;
                    }
        
                    if(calcCount.value > 1){
                        countValue += (calcCount.value - 1) / 10;
                    }
        
                    if(typeValue && squareValue){
                        total = price * typeValue * squareValue * countValue * dayValue;
                    }  
                    totalValue.textContent = total;
                    function animateTotal(val, timeout, step){
                        let i = 0;
                        (function(){
                            if(i <= val){
                                setTimeout(arguments.callee, timeout);
                                totalValue.textContent = Math.ceil(i);
                                i = i + step;
                        }else{
                                totalValue.textContent = Math.ceil(val);
                    }
                    })();
                    }
                    animateTotal(total, 5, 50);
            };
                calcBlock.addEventListener('change', (event) => {
                    const target = event.target;
                    if(target.matches('.calc-type') || target.matches('.calc-square') ||
                    target.matches('.calc-day') || target.matches('.calc-count')){
                    countSum();
                    }
                });
            };

            export default calc;