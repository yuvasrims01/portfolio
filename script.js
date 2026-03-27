const sideMenu=document.querySelector("#sideMenu");
const navBar=document.querySelector('nav');
const navLinks=document.querySelector('nav ul');


function openMenu(){
    sideMenu.style.transform='translateX(-16rem)';
}

function closeMenu(){
    sideMenu.style.transform='translateX(16rem)';
}

window.addEventListener('scroll',()=>{
    if(scrollY>50)
    {
        navBar.classList.add('bg-white', 'backdrop-blur-lg', 'bg-opacity-50', 'shadow-sm','dark:bg-gray-800','dark:shadow-white/20')
        navLinks.classList.remove('bg-white','shadow-sm','bg-opacity-50','dark:border','dark:border-white/70','dark:transparent')
    }
    else{
        navBar.classList.remove('bg-white', 'backdrop-blur-lg', 'bg-opacity-50', 'shadow-sm','dark:bg-gray-800','dark:shadow-white/20')
        navLinks.classList.add('bg-white','shadow-sm','bg-opacity-50','dark:border','dark:border-white/70','dark:transparent')
    }
})

if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}