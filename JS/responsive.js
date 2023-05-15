burger = document.querySelector('.burgermenu')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')
burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav');
    rightNav.classList.toggle('vclass');
    navlist.classList.toggle('vclass');
})