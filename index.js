const TaskList = document.querySelector('.task__list');
const button = document.querySelector('.task__btn-add');
const input = document.querySelector('.task__input');

let del;


let time;

function clock() {
    var date = new Date(),
        hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
        minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
    time = `${hours} : ${minutes}`;
}

if (localStorage.length >= 1) {
    TaskList.innerHTML = localStorage.getItem('html');
    del = document.querySelectorAll('.delete');
}

setInterval(()=>{
    del = document.querySelectorAll('.delete');
    n2()
},1000)


button.addEventListener('click', addElement);
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addElement();
    }
})



let element;
function addElement() {
    if (input.value != '') {
        clock();
        element =
            `<li class="task__item">
                <label>
                    <div class="task__content">
                        <input class="task__check" type="checkbox">
                        <span class="task__title">${input.value}</span>
                    </div>
                    <div class="right_wrapper">
                        <span class="task__date">${time}</span>
                        <button class="delete"></button>
                    </div>
                </label>         
            </li>`
        TaskList.insertAdjacentHTML('beforeend', element);

        input.value = '';
        n1();
    }
}



//TaskList.addEventListener('click', (event) => {
//    if (event.target.className = 'delete') {
//        event.target.closest('.task__item').remove();
//    }
//    n1();
//})

function n2(){
    for (let a of del) {
        a.addEventListener('click', ()=>{
            a.closest('.task__item').remove();
            n1()
        })
    }
}
    

function n1() {
    localStorage.setItem('html', TaskList.innerHTML);
}