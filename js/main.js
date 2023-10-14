// burger menu
const burgerBtn = document.querySelector('.burger__menu')
const burgerMenu = document.querySelector('.header__navigation')

burgerBtn.addEventListener('click', ()=>{
  burgerMenu.classList.toggle('active')
})
// Модальное окно

const modalClose = document.querySelector('.modal__close')

const modalWrapper = document.querySelector('.modal__wrapper')
const modalBtn = document.querySelector('.header__btn')
const modalBtnMobile = document.querySelector('.mobile-btn')
const modal = document.querySelector('.modal')


function openModal(){
        modal.classList.add('active');
        document.body.style.overflowY='hidden';  
}

modalBtn.addEventListener('click',openModal)
modalBtnMobile.addEventListener('click',openModal)
function closeModal(){
        modal.classList.remove('active');
        document.body.style.overflow='';
}
modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e)=>{
        if(e.target===modalWrapper){
                closeModal();
        }
})

document.addEventListener('keydown', (e)=>{
        if(e.code==="Escape"&& modal.classList.contains('active')){
                closeModal();
        }
});
// Попап (выпадающее меню) в хедере

const curs = document.querySelector(".header__list-curs")
const popupHeader = document.querySelector(".header__popup")

curs.addEventListener('click', () =>{
  popupHeader.classList.toggle('active')
  curs.classList.toggle('active')
})

// Реализация функционала select

const value1 = document.querySelector("#value1")
const value2 = document.querySelector("#value2")
const value3 = document.querySelector("#value3")
const value4 = document.querySelector("#value4")

value1.addEventListener('click', function(){
  select.textContent=value1.value
})
value2.addEventListener('click', function(){
  select.textContent=value2.value
})
value3.addEventListener('click', function(){
  select.textContent=value3.value
})
value4.addEventListener('click', function(){
  select.textContent=value4.value
})

let select = document.querySelector(".think__form-select")
const popup = document.querySelector(".think__form-popup")
const formSvg = document.querySelector(".think__form-svg")

select.addEventListener('click', ()=>{
  popup.classList.toggle('active')
  select.classList.toggle('active')
  formSvg.classList.toggle('active')
})

let tabItem=document.querySelectorAll('.think__form-tab');
tabItem.forEach(function(elem){
	elem.addEventListener('click', activeTab);
  
})

function activeTab(){
	tabItem.forEach(function(elem){
        elem.classList.remove('active');
        elem.parentNode.classList.remove('active')
        
	})
	this.classList.add('active');
  this.parentNode.classList.add('active')
}

// Слайдер

const swiper = new Swiper('.swiper', {
  
  slidesPerView:3,
  loop: true,

  
  pagination: {
    el: '.swiper-pagination',
    clickable:true
  },
  spaceBetween:30,
  breakpoints: {
    320:{
      slidesPerView:1
    },
    514: {
      slidesPerView:2
    },
    779: {
      slidesPerView:3
    }
    
  }
  
});


// Звёздный рейтинг

const grades = document.querySelectorAll(".grade");
const numberGrade = document.querySelector(".think__grade-number");
    
grades.forEach((grade, index) => {
  grade.addEventListener('click', () => {
    numberGrade.textContent = index + 1;
    
    grades.forEach((g, i) => {
      if (i <= index) {
        g.classList.add('active');
      } else {
        g.classList.remove('active');
      }
    });
  });
});

