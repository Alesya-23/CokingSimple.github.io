let formData = new FormData();
var buttonsubmit = document.forms.recheptsform;
buttonsubmit.addEventListener("click", buttonPressed);
console.log("Скрипт загружен")
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
  }
  else if (document.forms.recheptsform.elements.timecooking.value == '') {
    Swal.fire(
      'Ошибка',
      'Вы не ввели время приготовления',
      'error'
    )
  }
  else if (document.forms.recheptsform.elements.ingredient1.value == '') {
    Swal.fire(
      'Ошибка',
      'Вы не ввели ингредиент',
      'error'
    )
  }
  else if (document.forms.recheptsform.elements.count1.value == '') {
    Swal.fire(
      'Ошибка',
      'Вы не ввели количество ингредиента',
      'error'
    )
  }
  else if (document.forms.recheptsform.elements.ingredient2.value == '') {
    Swal.fire(
      'Ошибка',
      'Вы не ввели ингредиент',
      'error'
    )
  }
  else if (document.forms.recheptsform.elements.count2.value == '') {
    Swal.fire(
      'Ошибка',
      'Вы не ввели количество ингредиента',
      'error'
    )
  }
  else if (document.forms.recheptsform.elements.step1.value == '') {
    Swal.fire(
      'Ошибка',
      'Вы не ввели шаг 1',
      'error'
    )
  }
  else if (document.forms.recheptsform.elements.step2.value == '') {
    Swal.fire(
      'Ошибка',
      'Вы не ввели шаг 2',
      'error'
    )
  }
  else if (document.forms.recheptsform.elements.spinnertypecook.value == 'Выберите категорию блюда') {
    Swal.fire(
      'Ошибка',
      'Вы не выбрали категорию блюда',
      'error'
    )
  }
  else {
    formData.append('namerecept', document.forms.recheptsform.elements.namerecept.value);
    formData.append('portion', document.forms.recheptsform.elements.portion.value);
    formData.append('timecook', document.forms.recheptsform.elements.timecooking.value);
    formData.append('ingridientone', document.fors.recheptsform.elements.ingredient1.value);
    formData.append('countingridientone', document.forms.recheptsform.elements.count1.value);
    formData.append('ingridienttwo', document.forms.recheptsform.elements.ingredient2.value);
    formData.append('countingridienttwo', document.forms.recheptsform.elements.count2.value);
    formData.append('stepone', document.forms.recheptsform.elements.step1.value);
    formData.append('steptwo', document.forms.recheptsform.elements.step2.value);
    formData.append('typecook', document.forms.recheptsform.elements.spinnertypecook.value);
    Swal.fire(
      'Добавлено',
      'Вы добавили рецепт' + formData.get('namerecept') +
      'В ближайшее время рецепт пройдет обработку и добавится на сайт',
      'success'
    )
    console.log("Успешно");
  }
  formData = new FormData();
}
