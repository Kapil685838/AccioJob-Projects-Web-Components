let nav_items = document.querySelectorAll('.nav-item');

nav_items.forEach((item) => {
    item.addEventListener('click', active);
});

function active(event){
    nav_items.forEach((item) => {
        if(item == event.target){
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}