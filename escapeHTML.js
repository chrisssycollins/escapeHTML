escapeHTML = function (el) {
  var forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i])
    }
  }

  var setAsText = function (el) {
    var codeBlockEls = document.querySelectorAll(el)

    forEach(codeBlockEls, function (index, value) {
      codeBlockEls[index].textContent = value.innerHTML
    })
  }
  setAsText(el)
}
