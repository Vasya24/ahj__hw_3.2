const inp = document.getElementById("top_task_input");
const pl = document.getElementById("pinned_list");
const al = document.getElementById("all_list");
let task = document.createElement('li');
let alArr = Array.of(task);
let noPin = document.getElementById('nopinned');
let noTasks = document.getElementById('notasks');
let cc;

//Функция, которая проверяет, есть ли задачи в списке
function checkTasks() {
    if (pl.children.length == 0) {
        noPin.innerText = 'NO PINNED TASKS';
    };
    if (al.children.length == 0) {
        noTasks.innerText = 'NO TASKS YET'
    }
}

checkTasks()

//Добавляем метод добавления задач в общий список
inp.addEventListener('keyup', function(e) {
    if (e.key == 'Enter') {
        if (!inp.value) {
            e.preventDefault()
        } else {
            noTasks.remove();
        cc = task.cloneNode(true);
        cc.innerText = inp.value;
        cc.classList = 'task';
        alArr.forEach(task => {
            task.classList = "task";
        });
        al.insertAdjacentElement("beforeend", cc);
        inp.value = '';
        cc.addEventListener('click', (e) => {
            e.target.remove();
            noPin.remove()
            pl.insertAdjacentElement('beforeend', e.target);
            e.target.classList = 'pinnedTask';
            checkTasks()
            
        });
    }
    }

});

let at = document.getElementsByClassName('task')

inp.addEventListener('input', () => {
    for (let i=0; i<at.length; i++) {
        if (at[i].innerText.includes(inp.value) === false) {
            at[i].classList.add('hidden')
        } else {
            at[i].classList.remove('hidden')
        }
    }
})










