'use strict'

//implement use of local storage

//create a variable that stores the Todo list number, and store it in the local storage
// localStorage.setItem("list", 0);

//if this list exist add one to increment

//create a string to store the items in field

/* alert(
  "do not store Password please ?? this has innerHTML usage you will be at risk"
); */

Date.prototype.simpleTime = function () {
  let d, m, h, y, minute, second /*, day, dayName */ /* = this */

  let simple_time_string = ''

  d = this.getDate()

  m = this.getMonth()

  y = this.getFullYear()

  h = this.getHours()

  minute = this.getMinutes()

  second = this.getSeconds()

  // day = this.getDay();

  // dayName = this.getUTCDay();
  /* day - ${day|dayName} */
  return simple_time_string.concat(
    `${d}-${m + 1}-${y}|| ${h}:${minute}:${second}`,
  )
}

let list_data_string = ''

const body = document.body

let tasks = document.querySelector('.task')

function createTask() {
  let li = document.createElement('li')

  let inpField = document.createElement('input')

  inpField.classList.add('taskName')

  li.append(inpField)

  let del = document.createElement('button'),
    edit = document.createElement('button'),
    ok = document.createElement('button'),
    delTask = document.createElement('button')

  li.append(del, edit, ok, delTask)

  var buttons = [del, edit, ok, delTask]

  var BtnText = ['Remove', 'Edit', 'save', 'Delete Task Field']

  for (let i = 0; i < buttons.length; i++) buttons[i].innerText = BtnText[i]

  buttons.forEach((li) => li.classList.add('action'))

  ok.addEventListener('click', () => {
    if (inpField.value == '') {
      inpField.placeholder = 'enter something'

      setTimeout(() => (inpField.placeholder = ''), 1000)

      return
    }
    if (!list_data_string.includes(inpField.value)) {
      let taskDate = new Date()

      list_data_string += `${
        inpField.value
      } ( time - ${taskDate.simpleTime()}),`

      let temp_value

      if (localStorage.length === 0) temp_value = ''
      else temp_value = localStorage.getItem('list_data_string')

      localStorage.setItem('list_data_string', temp_value + list_data_string)
    }

    inpField.readOnly = true
  })

  del.addEventListener('click', () => {
    inpField.placeholder = 'enter something'

    setTimeout(() => (inpField.placeholder = ''), 1500)

    inpField.value = ''

    inpField.readOnly = false
  })

  edit.addEventListener('click', () => (inpField.readOnly = false))

  delTask.addEventListener('click', () => li.remove())

  tasks.appendChild(li)
}

const PrevListField = document.querySelector('.PrevListField')
var isOpen = false

const oldTask = () => {
  if (isOpen) {
    PrevListField.innerHTML = ''
    PrevListField.previousElementSibling.innerText = 'show previous tasks'
    isOpen = false
    return
  }

  isOpen = true

  PrevListField.innerHTML = ''
  PrevListField.previousElementSibling.innerText = 'close'

  let old = localStorage.getItem('list_data_string').split(',')

  old.forEach((text) => {
    let li = document.createElement('li')

    li.innerText = text

    PrevListField.append(li)
  })
}

const nuke = document.querySelector('#clear-local-storage')

body.addEventListener('keypress', (e) => {
  if (e.key == 'n') {
    console.log('n is pressed')
    body.addEventListener('keypress', (e) => {
      if (e.key == '*') {
        console.log('* is pressed')
        nuke.style.display = 'block'
      }
      setTimeout(() => {
        nuke.style.display = 'none'
      }, 4000)
    })
  }
})


nuke.addEventListener('click', () => {
  let m = prompt(
    'are you sure; you wanna delete all the history ! (y) for yes or anything for no',
  ).toLowerCase()

  if (m == 'y') {
    localStorage.clear()
  } else {
    let t = nuke.innerText
    nuke.innerText = 'fine for now '
    setTimeout(() => (nuke.innerText = t), 5000)
  }
})

// let taskDate = new Date();

// console.log(taskDate.simpleTime());

/* Date.prototype.simpleTime = function () {
    const options = { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return this.toLocaleString(undefined, options);
};

console.log((new Date()).simpleTime());
 */

/*Date.prototype.simpleTime = function () {
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return this.toLocaleString(undefined, options);
};

console.log((new Date()).simpleTime());
 */
// console.log(taskDate.simpleTime());
