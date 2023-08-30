/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./resources/js/style.js ***!
  \*******************************/
$('.notify').click(function () {
  $(this).fadeOut();
});

/*   contact zalo fb ... */

$(document).ready(function () {
  $('.support-content').hide();
  $('a.btn-support').click(function (e) {
    e.stopPropagation();
    $('.support-content').slideToggle();
  });
  $('.support-content').click(function (e) {
    e.stopPropagation();
  });
  $(document).click(function () {
    $('.support-content').slideUp();
  });
});

/*  clock */
var hours = document.querySelector('.hours');
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');

/*  play button */
var play = document.querySelector('.play');
var pause = document.querySelector('.pause');
var playBtn = document.querySelector('.circle__btn');
var wave1 = document.querySelector('.circle__back-1');
var wave2 = document.querySelector('.circle__back-2');

/*  rate slider */
var container = document.querySelector('.slider__box');
var btn = document.querySelector('.slider__btn');
var color = document.querySelector('.slider__color');
var tooltip = document.querySelector('.slider__tooltip');
clock = function (_clock) {
  function clock() {
    return _clock.apply(this, arguments);
  }
  clock.toString = function () {
    return _clock.toString();
  };
  return clock;
}(function () {
  var today = new Date();
  var h = today.getHours() % 12 + today.getMinutes() / 59; // 22 % 12 = 10pm
  var m = today.getMinutes(); // 0 - 59
  var s = today.getSeconds(); // 0 - 59

  h *= 30; // 12 * 30 = 360deg
  m *= 6;
  s *= 6; // 60 * 6 = 360deg

  rotation(hours, h);
  rotation(minutes, m);
  rotation(seconds, s);

  // call every second
  setTimeout(clock, 500);
});
rotation = function rotation(target, val) {
  target.style.transform = "rotate(".concat(val, "deg)");
};
window.onload = clock();
dragElement = function dragElement(target, btn) {
  target.addEventListener('mousedown', function (e) {
    onMouseMove(e);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  });
  onMouseMove = function onMouseMove(e) {
    e.preventDefault();
    var targetRect = target.getBoundingClientRect();
    var x = e.pageX - targetRect.left + 10;
    if (x > targetRect.width) {
      x = targetRect.width;
    }
    ;
    if (x < 0) {
      x = 0;
    }
    ;
    btn.x = x - 10;
    btn.style.left = btn.x + 'px';

    // get the position of the button inside the container (%)
    var percentPosition = (btn.x + 10) / targetRect.width * 100;

    // color width = position of button (%)
    color.style.width = percentPosition + "%";

    // move the tooltip when button moves, and show the tooltip
    tooltip.style.left = btn.x - 5 + 'px';
    tooltip.style.opacity = 1;

    // show the percentage in the tooltip
    tooltip.textContent = Math.round(percentPosition) + '%';
  };
  onMouseUp = function onMouseUp(e) {
    window.removeEventListener('mousemove', onMouseMove);
    tooltip.style.opacity = 0;
    btn.addEventListener('mouseover', function () {
      tooltip.style.opacity = 1;
    });
    btn.addEventListener('mouseout', function () {
      tooltip.style.opacity = 0;
    });
  };
};
dragElement(container, btn);

/*  play button  */
playBtn.addEventListener('click', function (e) {
  e.preventDefault();
  pause.classList.toggle('visibility');
  play.classList.toggle('visibility');
  playBtn.classList.toggle('shadow');
  wave1.classList.toggle('paused');
  wave2.classList.toggle('paused');
});
/******/ })()
;