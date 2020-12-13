let formData = new FormData();
var buttonsubmit = document.forms.recheptsform;
let button = document.getElementById('addrechept');
if (button != null) {
  button.addEventListener("click", buttonPressed);
  console.log("Скрипт загружен")
}
function buttonPressed(evt) {
  console.log("Кнопка нажата загружен");
  evt.preventDefault();
  if (document.forms.recheptsform.elements.namerecept.value == '') {
    Swal.fire(
      'Ошибка!',
      'Вы не ввели название рецепта!',
      'error'
    )
    console.log("Нет названия рецепта");
  }
  else if (document.forms.recheptsform.elements.portion.value == '') {
    Swal.fire(
      'Ошибка',
      'Вы не ввели количество порций',
      'error'
    )
    console.log("Нет количества порций");
  }
  else if (document.forms.recheptsform.elements.timecooking.value == '') {
    Swal.fire(
      'Ошибка',
      'Вы не ввели время приготовления',
      'error'
    )
    console.log("Нет время приготовления");
  }
  else if (document.forms.recheptsform.elements.ingredient1.value == '') {
    Swal.fire(
      'Ошибка',
      'Вы не ввели ингредиент',
      'error'
    )
    console.log("Нет ингредиента"); 
  }
  else if (document.forms.recheptsform.elements.count1.value == '') {
    Swal.fire(
      'Ошибка',
      'Вы не ввели количество ингредиента',
      'error'
    )
    console.log("Нет количество ингредиента");
  }
  else if (document.forms.recheptsform.elements.ingredient2.value == '') {
    Swal.fire(
      'Ошибка',
      'Вы не ввели ингредиент',
      'error'
    )
    console.log("Нет ингредиента");
  }
  else if (document.forms.recheptsform.elements.count2.value == '') {
    Swal.fire(
      'Ошибка',
      'Вы не ввели количество ингредиента',
      'error'
    )
    console.log("Нет количество ингредиента");
  }
  else if (document.forms.recheptsform.elements.step1.value == '') {
    Swal.fire(
      'Ошибка',
      'Вы не ввели шаг 1',
      'error'
    )
    console.log("Нет шаг 1");
  }
  else if (document.forms.recheptsform.elements.step2.value == '') {
    Swal.fire(
      'Ошибка',
      'Вы не ввели шаг 2',
      'error'
    )
    console.log("Нет шаг 2");
  }
  else if (document.forms.recheptsform.elements.spinnertypecook.value == 'Выберите категорию блюда') {
    Swal.fire(
      'Ошибка',
      'Вы не выбрали категорию блюда',
      'error'
    )
    console.log("Нет категории блюда");
  }
  else {
    formData.append('namerecept', document.forms.recheptsform.elements.namerecept.value);
    formData.append('portion', document.forms.recheptsform.elements.portion.value);
    formData.append('timecook', document.forms.recheptsform.elements.timecooking.value);
    formData.append('ingridientone', document.forms.recheptsform.elements.ingredient1.value);
    formData.append('countingridientone', document.forms.recheptsform.elements.count1.value);
    formData.append('ingridienttwo', document.forms.recheptsform.elements.ingredient2.value);
    formData.append('countingridienttwo', document.forms.recheptsform.elements.count2.value);
    formData.append('stepone', document.forms.recheptsform.elements.step1.value);
    formData.append('steptwo', document.forms.recheptsform.elements.step2.value);
    formData.append('typecook', document.forms.recheptsform.elements.spinnertypecook.value);
    Swal.fire(
      'Добавлено',
      'Вы добавили рецепт ' + formData.get('namerecept') +
      '. В ближайшее время рецепт пройдет обработку и появится на сайте',
      'success'
    )
    console.log("Успешно");
  }
  formData = new FormData();
}