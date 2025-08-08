$(function () {
  // your code here
  $('.accordion-header').on('click', function () {
    $('.accordion-header').not(this).next('.accordion-content').slideUp()
    $(this).next('.accordion-content').slideToggle()
  })

  $('.todos button').on('click', function () {
    $.ajax({
      url: "https://dummyjson.com/todos",
      type: "GET",
      success: function (res) {
        const todos = res.todos
        buildTodos(todos)
      },
      error: function (err) {
        console.error(err)
      }
    })
  })

  function buildTodos(arr) {

    const list = $('.todos button').next('ul')
    list.empty()
    arr.forEach(el => {
      const li = $('<li></li>')
      li.text(el.todo)
      list.append(li)
    });
  }
})