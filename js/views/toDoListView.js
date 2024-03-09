import {toDoItemTemplate} from '../templates/toDoItemTemplate.js';

let view;
const tetsObject = {
    uid: 12345,
    todo: 'Pick up shoes',
    category: 'shopping',
    status: 'incomplete',
}

export function toDoListView() {
    view = document.querySelector('#to-Do-List');
    return ()
}

function render(data) {
    const div = document.createElement('div');
    const toDoList = document.querySelector('#item-container')
    toDoList.replaceChildren()
    const testToDo = div.prepend(toDoItemTemplate(testObject))
    toDoList.append(div)
}