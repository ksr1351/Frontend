// main.js

//롤링배너

setInterval(function () {
  let rb = document.querySelector('.slide');
  rb.style.top = '-100%';
  rb.style.transition = '0.6s';

  setTimeout(function () {
    let first = rb.querySelectorAll('li')[0];
    rb.appendChild(first);
    rb.style.top = '0';
    rb.styl.transition = 'none';
  }, 600);
}, 3000);
