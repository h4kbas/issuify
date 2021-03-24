document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("test").addEventListener("click", function (e) {
    console.log("Hello World");
  })
  Array.from(document.querySelectorAll("*")).forEach(element => {


    element.onmouseover = function (e) {
      element.onclick = function (ev) {
        element.removeEventListener("click");
      }
      element.classList.add("border");
      const rect = element.getBoundingClientRect();
      console.log(rect.left, rect.top);
    }

    element.onmouseout = function (e) {
      console.log(element);
      element.classList.remove("border");
      event.stopPropagation();
    }
  });
})