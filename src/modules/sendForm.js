const sendForm = () => {
        
    const errorMessage = 'Что то пошло не так...',
    loadMessage = 'Загрузка...',
    successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    const formAll = document.querySelectorAll('form');
    const statusMessage = document.createElement('div');
            statusMessage.style.cssText = 'color: white; font-size: 2rem;';
    let body = {};

    formAll.forEach(function(form){
        form.addEventListener('submit', (event) =>{
            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(form);
            for(let val of formData.entries()){
                body[val[0]] = val[1];
            }
            postData(body)
            .then((response) => {
                if(response.status !== 200){
                    throw new Error('status network not 200');
                }
                console.log(response);
                statusMessage.textContent = successMessage;
                const inputsAll = document.querySelectorAll('input');
                    inputsAll.forEach(function(input){
                    input.value = '';
                });
        })
            .catch((error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
    });
});

    const postData = (body) =>  {
        return fetch('./server.php',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };
};

export default sendForm;