// function navigo (){
//     const header = document.querySelector('header');
//     const headerheight = header.clientHeight;
//   document.addEventListener('scroll', onScroll, { passive: true });
//    function onScroll () {
//        const scrollposition = pageYOffset;
//      const nav = document.querySelector('nav');
//      if (headerheight<=scrollposition){
//        nav.classList.add('fix')
//      }
//      else {
//        nav.classList.remove('fix');
//      }
//    }  
    
//   }
//   navigo()

let scrollTop = 0;
let bar;
let per;
  
window.onload = function(){
  bar = document.querySelector('.bar');
}

window.addEventListener("scroll", function (e) {
    scrollTop = document.documentElement.scrollTop;
    per = (scrollTop / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    bar.style.width = per + "%";
});


let date = new Date();

const renderCalendar = () => {
  const viewYear = date.getFullYear();
  const viewMonth = date.getMonth();
  const viewDay = date.getDate();

  // year-month 채우기
  document.querySelector('.year-month-day').value = `${viewYear}년 ${viewMonth + 1}월 ${viewDay}일`;
  document.querySelector('.year-month-day2').value = `${viewYear}년 ${viewMonth + 1}월 ${viewDay}일`;

}
renderCalendar();



function tabMenu(){
  var index = $(this).parent().index()
  $('.tab span.active').removeClass('active')
  $(this).addClass('active')

  var target = index === 0 ? $('.tab_profits') : $('.tab_spending')

  $('.box article.active').removeClass('active')
  target.addClass('active')
} 



$(document)
.on('click', '.tab span', tabMenu)