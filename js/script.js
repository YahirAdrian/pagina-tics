const navbar = document.querySelector('#navbar-main');
const navbarHeight = navbar.offsetTop;
const topicsList = document.querySelector('#subtopics');
const topicsListElements = topicsList.querySelectorAll('li a');


function navBarScroll(){
    topicsListElements.forEach((listElement, i)=>{
        if(listElement.classList.contains('active')){
            const distance = listElement.offsetLeft - topicsList.offsetLeft;
            topicsList.scroll(distance, 0)
        }
    })
}

document.addEventListener("scroll", e=>{
    if(document.scrollingElement.scrollTop >= navbarHeight)
    {
        navbar.style.position = "fixed";
        navbar.style.top="0"
        navbar.classList.add('bg-secondary');
    }else{
        navbar.style.position = "";
        navbar.style.top=""
        navbar.classList.remove('bg-secondary')
        navbar.classList.add('bg-secondary-transparent');
    }

    navBarScroll();
})