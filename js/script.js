// console.log("Hello world");

// const title = document.querySelector('.title');
const buttonElement = document.querySelector('.button');
const blockElement = document.querySelector('.block');

// button.addEventListener('click', buttonClick)

// function buttonClick() {
//     button.textContent = block.classList.contains('hidden') ? 'Закрыть': 'Войти';
//     block.classList.toggle ('hidden')
// }
buttonElement.addEventListener ('click', function (e) {
        blockElement.classList.toggle('visible');
        buttonElement.textContent = 'Закрыть';
        buttonElement.classList.toggle();
        if (buttonElement.classList.contains('visible')) {
                buttonElement.classList.remove('visible');
        //        тут меняем текст кнопки на одно значение
             } else {
                buttonElement.textContent = 'Войти';
        buttonElement.classList.toggle();
                // тут добавляем класс
                // и меняем значение на другое 
             }
        });
// else ('click', function (e) {
//     blockElement.classList.toggle('hidden');
//     buttonElement.textContent = 'Войти';
//     });

        // buttonElement.addEventListener('click', function (e) {
        //     buttonElement.textContent = 'Войти';
        //     });
// function openBlock() {
//     block.classList.toggle ('popup_conteiner_opened');
// }

// buttonEl.addEventListener ('click' block);