const form = document.forms[0].elements[9];

form.addEventListener("submit", buttonPressed);
console.log("Скрипт загружен")
var event = document.getElementById('bthaddrechept');
function buttonPressed(event) {
  if(event = null){
    return;
  }
  console.log('Button is pressed')
  event.preventDefault();
  if (document.forms[0].elements[0].value = '') {
    Swal.fire(
      'Ошибка!',
      'Вы не ввели название рецепта!',
      'error'
    )
    console.log("Нет названия рецепта");
  }
  else if (document.forms[0].elements[1].value = '') {
    Swal.fire(
      'Ошибка',
      'Вы не ввели количество порций',
      'error'
    )
  }
  else if (document.forms[0].elements[2].value = '') {
    Swal.fire(
      'Ошибка',
      'Вы не ввели время приготовления',
      'error'
    )
  }
  else if (document.forms[0].elements[3].value = '') {
    Swal.fire(
      'Ошибка',
      'Вы не ввели ингредиент',
      'error'
    )
  }
  else if (document.forms[0].elements[4].value = '') {
    Swal.fire(
      'Ошибка',
      'Вы не ввели количество ингредиента',
      'error'
    )
  }
  else if (document.forms[0].elements[5].value = '') {
    Swal.fire(
      'Ошибка',
      'Вы не ввели ингредиент',
      'error'
    )
  }
  else if (document.forms[0].elements[6].value = '') {
    Swal.fire(
      'Ошибка',
      'Вы не ввели количество ингредиента',
      'error'
    )
  }
  else if (document.forms[0].elements[7].value = '') {
    Swal.fire(
      'Ошибка',
      'Вы не ввели шаг 1',
      'error'
    )
  }
  else if (document.forms[0].elements[8].value = '') {
    Swal.fire(
      'Ошибка',
      'Вы не ввели шаг 2',
      'error'
    )
  }
  else if (document.forms[0].elements[9].value = 'Выберите категорию блюда') {
    Swal.fire(
      'Ошибка',
      'Вы не выбрали категорию блюда',
      'error'
    )
  }
  else {
    formData.append('namerechepts', document.forms[0].elements[0].value);
    formData.append('portion', document.forms[0].elements[1].value);
    formData.append('timecook', document.forms[0].elements[2].value);
    formData.append('ingridientone', document.forms[0].elements[3].value);
    formData.append('countingridientone', document.forms[0].elements[4].value);
    formData.append('ingridienttwo', document.forms[0].elements[5].value);
    formData.append('countingridienttwo', document.forms[0].elements[6].value);
    formData.append('stepone', document.forms[0].elements[7].value);
    formData.append('steptwo', document.forms[0].elements[8].value);
    formData.append('typecook', document.forms[0].elements[9].value);
    Swal.fire(
      'Вы добавили рецепт' + formData.get('namerechepts') +
      'В ближайшее время рецепт пройдет обработку и добавится на сайт',
      'success'
    )
    console.log("Записались");
  }
  formData = new FormData();
}
