let select = document.querySelectorAll(".category__btn");
const handleClick = function() {
  const elm = this;
  const arrow = elm.querySelector(".category__slide-icon");
  const slider = elm.parentElement.querySelector(".category__slide");
  if (!slider.classList.contains("slide--active")) {
    RemoveActiveAll();
    const offsetTop = elm.offsetTop;
    const offsetHeight = elm.offsetHeight;
    const offset = offsetTop + offsetHeight + 15;
    arrow.classList.replace("fa-angle-up", "fa-angle-down");
    slider.classList.add("slide--active");
    slider.querySelector(".slider__content").style.top = offset + "px";
    location.hash = elm.id;
  } else {
    arrow.classList.replace("fa-angle-down", "fa-angle-up");
    slider.classList.remove("slide--active");
  }
};
Object.entries(select).map(object => (object[1].onclick = handleClick));
const RemoveActiveAll = function() {
  const allElem = document.querySelectorAll(".category__slide ");
  Object.entries(allElem).map(object => {
    object[1].parentElement
      .querySelector(".category__slide-icon")
      .classList.replace("fa-angle-down", "fa-angle-up");
    object[1].classList.remove("slide--active");
  });
};
