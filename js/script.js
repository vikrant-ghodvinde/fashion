// navbar
window.addEventListener('scroll', ()=>{
  navbar = document.querySelector('nav');
  navbar.classList.toggle('sticky', window.scrollY > 0);
});

// products
$(document).ready(function(){

  $('.list').click(function(){
    const value = $(this).attr('data-filter');

    if(value == 'all'){
      $('.box').show('1000');
    }
    else {
      $('.box').not('.'+value).hide('1000');
      $('.box').filter('.'+value).show('1000');
    }
  })
  // for active data
  $('.list').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  })
})

// responsive menu
function toggleMenu(){
  icon = document.querySelector('.menu-icon');
  menu = document.querySelector('.menu');

  icon.classList.toggle('active');
  menu.classList.toggle('active');
}

// loader
function loader(){
  load = document.querySelector('.pre-loader');
  load.style.visibility = 'hidden';
}
