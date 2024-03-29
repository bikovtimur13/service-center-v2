'use strict';

document.addEventListener('DOMContentLoaded', () => {

    try {

        // Отбивка в случае отправки данных из формы
        const closeMain = document.querySelector('.pop-up-order__close');
        const popUpMain = document.querySelector('.pop-up-order');
        const backgroundMain = document.querySelector('.pop-up-background');
        const popUpNumber = document.querySelector('.pop-up-order__number');

        const popUp = document.querySelector('.pop-up-wrapper');


        function popUpIsOpen(id) {
            popUpMain.classList.add('_active')
            backgroundMain.classList.add('_active')
            popUpNumber.innerHTML = id

        }

        closeMain.addEventListener('click', () => {
            popUpMain.classList.remove('_active')
            backgroundMain.classList.remove('_active')
        });

        // При нажатии на задний фон закрыввается окно
        backgroundMain.addEventListener('mousedown', () => {
            popUpMain.classList.remove('_active')
            backgroundMain.classList.remove('_active')
            popUp.classList.remove('_active')

        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                popUpMain.classList.remove('_active')
                backgroundMain.classList.remove('_active')
            }
        });

        const form = document.getElementById('form3')
        form.addEventListener('submit', formSend)


        async function formSend(e) {
            e.preventDefault()

            let error = formValidate(form)


            if (error === 0) {
                let formData = new FormData(form);

                fetch('/post.php', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Access-Control-Allow-Origin': "*"
                    }
                })
                    .then(res => {
                        return res.json()
                    })

                    .then(data => {
                        popUpIsOpen(data.id)
                    })

                    .catch(err => {
                        console.log(err);
                    })

            }
        }



        function formValidate(form) {
            let error = 0
            let formReq = document.querySelectorAll('._req')

            for (let index = 0; index < formReq.length; index++) {
                const input = formReq[index]
                formRemoveError(input)

                if (input.classList.contains('_email')) {
                    if (emailTest(input)) {
                        formAddError(input)
                        error++
                    }
                } else if (input.classList.contains('_phone')) {
                    validatePhoneNumberInput(input)
                    if (!phoneTest(input)) {
                        formAddError(input)
                        error++
                    }
                }
                else {
                    if (input.value === '') {

                        formAddError(input)
                        error++
                    }
                }

            }
            return error

        }

        function formAddError(input) {
            input.parentElement.classList.add('_error')
            input.classList.add('_error')
        }
        function formRemoveError(input) {
            input.parentElement.classList.remove('_error')
            input.classList.remove('_error')
        }
        function phoneTest(input) {
            return /\d{4}/.test(input.value)
        }
        function validatePhoneNumberInput(input) {
            // Удаление всех символов, кроме цифр
            input.value = input.value.replace(/\D/g, '');
        }
        function emailTest(input) {
            return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
        }


    } catch (error) {
        console.log(error);
    }

})