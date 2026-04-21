
let form = document.getElementById("form")
const allTasks=[]

const validateForm=(event)=>{
    event.preventDefault()

    let display=document.getElementById("display")
    let userInput=event.target.ui

    //display.innerHTML="hello"

    // allTasks.forEach((task)=>{
    //     console.log(task);
    // });

    allTasks.push(userInput.value);

    display.innerHTML = ""
    display.innerHTML +=
    allTasks.map((task) =>
        `<li>${task} <button>delete</button></li>`);
    //allTasks.push(event.target.ui.value)
    //console.log(allTasks)
    userInput.value="";
};
form.addEventListener('submit',validateForm)
