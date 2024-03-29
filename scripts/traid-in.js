'use strict';

document.addEventListener('DOMContentLoaded', () => {


  let options = {
    rootMargin: '0px',
    threshold: 0.5,
  };

  let appearance = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        // entry.target.style.paddingTop = 0;
      }
    })
  }

  const observer = new IntersectionObserver(appearance, options);
  const targets = document.querySelectorAll('.changes__item_js');

  targets.forEach(item => {
    observer.observe(item);
  })

  // let sendBtn = document.querySelector('.request__button')
  // let thanksModal = document.querySelector('.modal-thanks');

  //     sendBtn.onclick = function (e) {
  //     e.preventDefault();
  //     thanksModal.classList.add('modal-thanks__active');
  //   }

  //   let closeModalBtn = document.querySelector('.modal-thanks__close');

  //   closeModalBtn.onclick = function (e) {
  //     thanksModal.classList.remove('modal-thanks__active');
  //   }


  // // HEADER
  // function hideUnhideMenuOnScroll() {
  //     // const serviceCenter = document.querySelector('.service-center');
  //     let scrollPosition = document.documentElement.scrollTop;
  //     let header = document.querySelector('.header');
  //     let headerValue = header.getBoundingClientRect();
  //     console.log(headerValue);

  //     window.onscroll = function() {
  //       let currentScrollPosition = document.documentElement.scrollTop;

  //       if (scrollPosition < currentScrollPosition ) {
  //           header.classList.add('header__hide_js');
  //       } else {
  //         header.classList.remove('header__hide_js');
  //       }
  //       scrollPosition = currentScrollPosition;
  //       }
  //     }

  //     hideUnhideMenuOnScroll();

  //HEADER2
  let lastScroll = 0;
  const defaultOffset = 200;
  const header = document.querySelector('.header');

  const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
  const containHideHeader = () => header.classList.contains('hide-header');

  window.addEventListener('scroll', () => {

    if (scrollPosition() < lastScroll && !containHideHeader()) {
      //scroll down
      header.classList.add('hide-header');
    }
    else if (scrollPosition() > lastScroll || scrollPosition() == 0) {
      //scroll up
      header.classList.remove('hide-header');
    }

    lastScroll = scrollPosition();
  })

  //   let mobileQuery = window.matchMedia("(max-width: 767px)").matches;
  //          //validation and sending form
  //   class ValidationForm {
  //     constructor (form) {
  //       this.form = form;
  //       this.inputWrappers = this.form.querySelectorAll('div');
  //       this.button = this.form.querySelector('button');
  //       this.inputs = this.form.querySelectorAll('.__js__input');
  //       this.modalThanks = document.querySelector('.modal-thanks__overlay');
  //       this.modalCloseButton = document.querySelector('.modal-thanks__close');
  //       this.inputs.forEach(element => {
  //         if (element.name == 'name') {
  //           this.name = element
  //         } else if (element.name ==  'tel') {
  //           this.tel = element
  //         } else if (element.name == 'email') {
  //           this.email = element
  //         } else if (element.name == 'message') {
  //           this.message = element
  //         } else if (element.name =='policy') {
  //             this.policy = element;
  //         }
  //       })
  //     }

  //     initForm() {

  //       const phoneOptions = {
  //           mask: '+{7} (000) 000-00-00',
  //       };

  //       new IMask(this.tel, phoneOptions);
  //       this.inputWrappers.forEach(wrapper => {
  //         const input = wrapper.querySelector('input');
  //         const errText = wrapper.querySelector('p');
  //         const TypeAtr = input.getAttribute('name');
  //         console.log(TypeAtr);
  //         if(mobileQuery && TypeAtr === "email"){
  //           console.log(TypeAtr);
  //         }else{
  //           input.addEventListener('input', (event) => this.handleInputChanges(event, input, errText));
  //           input.addEventListener('blur', (event) => this.handleInputBlur(event, input, errText));
  //         }
  //       });

  //       this.button.addEventListener('click', (event) => {
  //         event.preventDefault();
  //         let isValid = this.form.checkValidity()
  //           if (isValid) { 
  //           this.sendForm(event);
  //         }
  //       })

  //     }

  //     setBtnDisabled() {
  //       this.button.disabled = true;
  //       this.button.classList.add('_disabled');
  //     }

  //     setBtnActive() {
  //         this.button.disabled = false;
  //         this.button.classList.remove('_disabled');
  //     }

  //     handleInputChanges = (event, input, errText) => {
  //         (this.form.checkValidity()) ? this.setBtnActive() : this.setBtnDisabled();

  //         if (input.validity.valid && errText.classList.contains('_unhide')) {
  //           errText.classList.remove('_unhide');
  //         }

  //     }

  //     handleInputBlur = (event, input, errText) => {
  //       if(!input.validity.valid) {
  //         errText.classList.add('_unhide');
  //       }
  //     }

  //     sendForm(event) {
  //       let formData = new FormData(this.form);

  //       for (let pair of formData.entries()) {
  //           console.log(pair);
  //       }

  //       fetch('https://www.yamaguchi.ru/', {
  //           method: 'POST',
  //           body: formData,
  //           headers: {
  //               'Access-Control-Allow-Origin': "*"
  //           }
  //       })
  //       .then(res=> {
  //           alert(res);
  //           this.showModal();
  //           this.form.reset();
  //       })
  //       .catch(err=>{
  //           console.log(err);
  //       })
  //     }

  //     hideModal() {
  //       this.modalThanks.addEventListener('click', (e) =>  {
  //         if(e.target === e.currentTarget || e.target.classList.contains('modal-thanks__close')) {
  //           this.modalThanks.classList.remove('modal-thanks__overlay_active');
  //         }
  //       });
  //     }

  //     showModal() {
  //       this.modalThanks.classList.add('modal-thanks__overlay_active');
  //       this.hideModal();
  //     }

  //   }

  //   let serviceCenter = document.querySelector('.service-center__form');
  //   new ValidationForm(serviceCenter).initForm();
  //   new ValidationForm(document.querySelector('.request__form')).initForm();


  // })

  // class ValidationForm {
  //   constructor (form) {
  //     this.form = form;
  //     // this.inputWrappers = this.form.querySelectorAll('div');
  //     this.inputWrappers = this.form.querySelectorAll('.__js__input-wrapper');
  //     this.button = this.form.querySelector('.request__form__btn');
  //     this.inputs = this.form.querySelectorAll('.__js__input');
  //     this.modalThanks = document.querySelector('.modal-thanks__overlay');
  //     this.modalCloseButton = document.querySelector('.modal-thanks__close');
  //     this.inputs.forEach(element => {
  //       if (element.name == 'name') {
  //         this.name = element
  //       }  else if (element.name ==  'tel') {
  //         this.tel = element 
  //       // } else if (element.name == 'email') {
  //       //   this.email = element
  //       } else if (element.name == 'message') {
  //         this.message = element
  //       }
  //     })
  //     this.email = true;
  //     console.log(this.email);
  //   }


  //   initForm() {

  //     const phoneOptions = {
  //         mask: '+{7} (000) 000-00-00',
  //     };

  //     new IMask(this.tel, phoneOptions);

  //     this.inputWrappers.forEach(wrapper => {
  //       const input = wrapper.querySelector('input');
  //       const errText = wrapper.querySelector('p');
  //       input.addEventListener('input', (event) => this.handleInputChanges(event, input, errText));
  //       input.addEventListener('blur', (event) => this.handleInputBlur(event, input, errText));
  //     })

  //     this.button.addEventListener('click', (event) => {
  //         // event.preventDefault();
  //         let isValid = this.form.checkValidity()
  //           if (isValid) { 
  //           this.sendForm(event);
  //         }
  //       })
  //   }

  //   setBtnDisabled() {
  //     this.button.disabled = true;
  //     this.button.classList.add('_disabled');
  //   }

  //   setBtnActive() {
  //       this.button.disabled = false;
  //       this.button.classList.remove('_disabled');
  //   }

  //   handleInputChanges(event, input, errText) {
  //       (this.form.checkValidity()) ? this.setBtnActive() : this.setBtnDisabled();

  //       if (input.validity.valid && errText.classList.contains('_unhide')) {
  //         errText.classList.remove('_unhide');
  //       }

  //   }

  //   handleInputBlur = (event, input, errText) => {
  //     if(!input.validity.valid) {
  //       errText.classList.add('_unhide');
  //     }
  //   }

  //   sendForm(event) {
  //     let formData = new FormData(this.form);

  //     fetch('https://jsonplaceholder.typicode.com/posts', {
  //       method: 'POST',
  //       body: formData,
  //       headers: {
  //         'Access-Control-Allow-Origin': "*"
  //       }
  //     })
  //     .then(res=> {
  //       res.json()
  //         this.showModal();
  //         this.form.reset();
  //     })
  //     .catch(err=>{
  //         console.log(err);
  //     })
  //   }

  //   hideModal() {
  //     this.modalThanks.addEventListener('click', (e) =>  {
  //       if(e.target === e.currentTarget || e.target.classList.contains('modal-thanks__close')) {
  //         this.modalThanks.classList.remove('modal-thanks__overlay_active');
  //       }
  //     });
  //   }

  //   showModal() {
  //     this.modalThanks.classList.add('modal-thanks__overlay_active');
  //     this.hideModal();
  //   }
  // }

  // new ValidationForm(document.querySelector('.request__form')).initForm();
  // new ValidationForm(document.querySelector('.request__form2')).initForm();
  // })







  try {

    if (window.innerWidth > 767) {
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
        // popUp.classList.remove('_active')

      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          popUpMain.classList.remove('_active')
          backgroundMain.classList.remove('_active')
        }
      });

      const form = document.getElementById('form2')
      form.addEventListener('submit', formSend)


      async function formSend(e) {
        e.preventDefault()

        let error = formValidate(form)
        console.log(error);



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
          } else if (
            input.getAttribute('type') === 'checkbox' &&
            input.checked === false
          ) {

            formAddError(input)
            error++
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
    }

    if (window.innerWidth <= 767) {
      // Отбивка в случае отправки данных из формы
      const closeMain = document.querySelector('.pop-up-order__close');
      const popUpMain = document.querySelector('.pop-up-order-mob');
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
        // popUp.classList.remove('_active')

      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          popUpMain.classList.remove('_active')
          backgroundMain.classList.remove('_active')
        }
      });


      const form = document.getElementById('form2-mob')

      form.addEventListener('submit', formSend)

      async function formSend(e) {
        e.preventDefault()

        let error = formValidate(form)
        console.log(error);



        if (error === 0) {
          let formData = new FormData(form);

          fetch('https://jsonplaceholder.typicode.com/posts', {
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
        let formReq = document.querySelectorAll('._req-mob')
        for (let index = 0; index < formReq.length; index++) {
          const input = formReq[index]
          formRemoveError(input)

          if (input.classList.contains('_email-mob')) {
            if (emailTest(input)) {
              formAddError(input)
              error++
            }
          } else if (
            input.getAttribute('type') === 'checkbox' &&
            input.checked === false
          ) {

            formAddError(input)
            error++
          } else if (input.classList.contains('_phone-mob')) {
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
    }






  } catch (error) {
    console.log(error);
  }




})


