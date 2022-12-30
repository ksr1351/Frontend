// main.js

////////////////////////////////////////////
//슬라이드 기능 구현
///////////////////////////////////////////

setInterval(function () {
  let tg = document.querySelector('.slide');
  tg.style.top = '-100%'; //100% 위로 올리고
  tg.style.transition = '0.6s'; //transition > 애니메이션 효과

  setTimeout(function () {
    let first = tg.querySelectorAll('li')[0];
    tg.appendChild(first);
    tg.style.top = '0';
    tg.style.transition = 'none';
  }, 600);
}, 3000); //0.6초동안 settimeout 실행 한 후 3초가 지나면 setinteval 수행한다.

////////////////////////////////////////////////
//탭변경하기
///////////////////////////////////////////////

function chgTab(i1, i2) {
  //탭메뉴
  let tm = document.querySelectorAll('.tm>li');

  //탭내용
  let tc = document.querySelectorAll('.tc>li');

  //클래스 추가
  tm[i1].classList.add('on');
  tc[i1].classList.add('on');

  //클래스 제거
  tm[i2].classList.remove('on');
  tm[i2].classList.remove('on');
}

///////////////////////////////////////////
// 함수명 : popup
// 기능 : 팝업 열기/닫기
//////////////////////////////////////////
function popup(sts) {
  var pop = document.querySelector('.pop');
  pop.style.display = sts;
}
