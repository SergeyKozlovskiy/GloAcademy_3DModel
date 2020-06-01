const changePhoto = () => {
    const commandPhoto  = document.querySelector('.command');
            commandPhoto.addEventListener('mouseover', () => {
                let target = event.target;
                if(target.matches('.command__photo')){
                let nameSrc = target.getAttribute('src');
                target.src = target.dataset.img;
                target.dataset.img = nameSrc;
                }
            });
            commandPhoto.addEventListener('mouseout', () => {
                let target = event.target;
                if(target.matches('.command__photo')){
                let nameSrc = target.getAttribute('src');
                target.src = target.dataset.img;
                target.dataset.img = nameSrc;       
                }
            });            
};

export default changePhoto;