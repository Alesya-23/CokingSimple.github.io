const form = document.forms[0];

form.addEventListener("submit", function(event) {
  event.preventDefault();
  new FormData(form);
});

form.addEventListener("recheptsform", event => {
  const data = event.formData;

  // get the data
  const entries = [...data.entries()];
  console.log(entries);

  const values = [...data.values()];
  console.log(values);

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  Swal.fire({
    title: 'Ты закончил создание рецепта и хочешь его добавить?',
    showCancelButton: true,
    confirmButtonText: `Добавить`,
    CancelButtonText: `Закрыть и продолжить редактирование`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Рецепт добавлен!', '', 'success')
    }
  })
});