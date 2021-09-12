var popup = document.getElementById('mypopup'),
    popupToggle = document.getElementById('mybtn'),
    popupClose = document.querySelector('.popup__close');

popupToggle.onclick = function () {
  popup.style.opacity = "1";
  popup.style.visibility = "visible";
};

popupClose.onclick = function () {
  popup.style.opacity = "0";
  popup.style.visibility = "hidden";
};

window.onclick = function (e) {
  if (e.target == popup) {
    popup.style.opacity = "0";
    popup.style.visibility = "hidden";
  }
};

var inputs = document.querySelectorAll('input[type="tel"]');
var im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);

function validateForms(selector, rules) {
  new window.JustValidate(selector, {
    rules: rules,
    submitHandler: function submitHandler(form, values, ajax) {
      console.log(form);
      var formData = new FormData(form);
      fetch("mail.php", {
        method: "POST",
        body: formData
      }).then(function (data) {
        console.log(data);
        console.log('Отправлено');
        form.reset();
      });
    }
  });
}

validateForms('.popup__form', {
  email: {
    required: true,
    email: true
  },
  tel: {
    required: true
  }
});
"use strict";
