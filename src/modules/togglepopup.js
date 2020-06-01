const togglepopup = () => {
    const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    popupClose = document.querySelector('.popup-close'),
    popupContent = document.querySelector('.popup-content');
    
    popupBtn.forEach((elem) =>{
        elem.addEventListener('click', () =>{
           popup.style.display = 'block';
           if(window.innerWidth > 768){
            popupContent.animate([
                //keyframes
                {transform: 'translate(-50%,-100%)', opacity: 0},
                {transform: 'translate(-50%, 50%)', opacity: 1},
            ],{
                //options
                duration: 500,
                iterations: 1,
            });
           } 
          
        });
    });

    popupClose.addEventListener('click', () => {
        if(window.innerWidth > 768){
            popupContent.animate([
                //keyframes
                {transform: 'translate(-50px, 0%)', opacity: 1},
                {transform: 'translate(-50px, -100%)', opacity: 0,},
            ],{
                //options
                duration: 300,
                iterations: 1
            });
            
            setTimeout(closePopup, 300);
        }else{
            popup.style.display = 'none';
        }
        function closePopup(){
            popup.style.display = 'none';
           }
   
      
    });
};

export default togglepopup;