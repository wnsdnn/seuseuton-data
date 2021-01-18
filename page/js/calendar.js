// Date 객체 생성
let date = new Date(); 

const renderCalendar = () => {
  const viewYear = date.getFullYear();
  const viewMonth = date.getMonth();

  // year-month 채우기
  document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth + 1}월`;

  // 지난 달 마지막 Date, 이번 달 마지막 Date
  const prevLast = new Date(viewYear, viewMonth, 0);
  const thisLast = new Date(viewYear, viewMonth + 1, 0);

  const PLDate = prevLast.getDate();
  const PLDay = prevLast.getDay();

  const TLDate = thisLast.getDate();
  const TLDay = thisLast.getDay();

  // Dates 기본 배열들
  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  const nextDates = [];

  // prevDates 계산
  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }

  // nextDates 계산
  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i)
  }

  // Dates 합치기
  const dates = prevDates.concat(thisDates, nextDates);

  // Dates 정리
  const firstDateIndex = dates.indexOf(1);
  const lastDateIndex = dates.lastIndexOf(TLDate);
  dates.forEach((date, i) => {
    const condition = i >= firstDateIndex && i < lastDateIndex + 1 ? 'this' : 'other';

    dates[i] = `<div class="date"><span class="${condition}">${date}</span></div>`;
  })

  // Dates 그리기
  document.querySelector('.dates').innerHTML = dates.join('');


}


const prevMonth = () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
}
  
const nextMonth = () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
}

const goToday = () => {
  date = new Date();
  renderCalendar();
}

let scrollTop = 0;
let bar = document.querySelector('.bar');
let per;

window.addEventListener("scroll", function (e) {
    scrollTop = document.documentElement.scrollTop;
    per = (scrollTop / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    bar.style.width = per + "%";
});

renderCalendar();




function tabMenu(){
    var index = $(this).parent().index()
    $('.tab span.active').removeClass('active')
    $(this).addClass('active')

    var target = index === 0 ? $('.tab_profits') : $('.tab_spending')

    $('.popup article.active').removeClass('active')
    target.addClass('active')
} 

function popupToggle() {
    $('.popup').toggle()
    
}


$(document)
.on('click', '.tab span', tabMenu)
.on('click', '.dates .date, .popup_close', popupToggle)