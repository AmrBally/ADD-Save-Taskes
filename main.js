let todoContainer = document.querySelector('.todo-container');
let addTaskContainer = document.querySelector('.add-task');
let inputType = document.querySelector('.add-task input');
let plusSpan = document.querySelector('.plus');
let taskStats = document.querySelector('.task-stats');
let tasksCount = document.querySelector('.tasks-count span');
let taskscompleted = document.querySelector('.tasks-completed');
let container = document.getElementById('container');
let noDataToShow = document.querySelector('.no-tasks-message');
let deleteAll = document.querySelector('#delete-all');




// html form
// click on enter  --ok

// Read Data From LocalStorage Rather Than container Html
// same task , alert error --ok
// delete all ----- ok
// complete task (hard), when refresh page all completed tasks shown successfully
// Search For == === 

plusSpan.onclick = function() {
    
    
    
    // console.log(container.innerHTML, 'container');
    

    
    if (container.innerHTML === '') {
        console.log('empty');
        add()
    }else {

        let ttt = 0;

        // console.log('not empty');
        // Create Array And Add All span into It
        let spansArr = document.querySelectorAll('.mainDiv span');

        for (let i = 0; i < spansArr.length; i++) {

            if (inputType.value === spansArr[i].innerText) {

                console.log('yes');

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Add Your Task Name Plz...',
                })

            }else {
                // storage the count of loop in this var 
                ttt++
            }

        }
        console.log(ttt, 'count');

        if (ttt == spansArr.length) { // if they has the same count do this add
            add()
        }

    }
    

    // if (container.innerHTML === '') {
    //     console.log('empty');
    //     add()
    // }else {

    //     let ttt = '';

    //     // console.log('not empty');
    //     // Create Array And Add All span into It
    //     let spansArr = document.querySelectorAll('.mainDiv span');

    //     for (let i = 0; i < spansArr.length; i++) {

    //         if (inputType.value === spansArr[i].innerText) {
    //             console.log('yes');
    //             ttt = "exists before"
                

    //         }else {
    //             ttt = "add"
                
    //         }


    //         // if (inputType.value === spansArr[i].innerText) {
    //         //     console.log('yes');
    //         //     ttt = "exists before"
    //         //     return;
    //         // }
            
    //         // ttt = "add"

    //     }

    //     console.log(ttt, 'count');

    //     if (ttt == "add") { // if they has the same count do this add
    //         add()
    //     }else{
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Oops...',
    //             text: 'Add Your Task Name Plz...',
    //         });
    //     }

    // }






    
}



inputType.addEventListener('keyup', (e) => {

    // console.log(e);

    if (e.key === 'Enter') {
        
        // Search For It
        e.preventDefault();
        
        console.log('yes');
        
        if ( inputType.value = "" ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Add Your Task Name Plz...',
            })
            
        }else {
            
            add() 
        }
        
    }
    
    
})



function add() {
    // Create Span And Delete Button & Put THem In Main Div..then Add Main Div TO todoContainer
    
    // Create mainDive
    let mainDive = document.createElement('div');
    
    // Add Class To mainDive
    mainDive.classList.add('mainDiv')
    
    // Create Span
    let span = document.createElement('span');
    
    // put inputType Value In The TextNode Of Span
    let inputValue = document.createTextNode(inputType.value);
    
    // add textNode In Span
    span.appendChild(inputValue);
    
    // add span Into mainDive
    mainDive.appendChild(span);
    
    // Create Delete Button
    let deleteBtn = document.createElement('button');
    
    // add class To Delete Button
    deleteBtn.classList.add('delete');
    
    // Create textNode To deleteBtn
    let deleteText = document.createTextNode('Delete')
    
    // add textNode To deleteBtn
    deleteBtn.appendChild(deleteText)
    
    // add deleteBtn To mainDive
    mainDive.appendChild(deleteBtn);
    
    // add mainDive to todoContainer
    container.appendChild(mainDive);
    
    // Display None Div NoDataToShow
    noDataToShow.style.display = 'none'
    
    addToLocalStorage()
    
    showData()
    
    inputType.value = "";
}








function completeTask() {
    
    console.log('good');
    // mainDivSpan.classList.add('.finished');
    let spanMain = document.querySelectorAll('.mainDiv span');

    for (let i = 0; i < spanMain.length; i++) {
    
    
        console.log('yes');
    }


}


let clickSpan = document.querySelector('.mainDiv span');








// LocalStorage

let dataPro; // undefined

// if localStorage Empty Or Not

// console.log(localStorage.getItem('Task'));

if (localStorage.Task != null  ) {
    dataPro = JSON.parse(localStorage.Task);
}else {
    dataPro = []
}

// Add Tasks Value TO LocalStorage
function addToLocalStorage() {
    // let newPro = {
    //     title: inputType.value,
    // }
    dataPro.push(inputType.value);
    localStorage.setItem('Task', JSON.stringify(dataPro));
}


// To Show In Page
function showData() {

    let mainData = '';
    
    for (let i = 0; i < dataPro.length; i++) {
        mainData += `
            <div class="mainDiv">
                <span>${dataPro[i]}</span>
                <button class="delete" onclick="deleteData(${i})">Delete</button>
            </div>
        `    
    }

    container.innerHTML = mainData

    if (dataPro.length === 0) {
        container.innerHTML = '';
        noDataToShow.style.display = 'block';
        deleteAll.style.display = 'none';
    }else {
        deleteAll.style.display = 'block';
        noDataToShow.style.display = 'none';
    }

    tasksCount.innerText = dataPro.length
}
showData()

// TO Delete Data Or Task From Page And LocalStorage

function deleteData(i) {
    
    console.log(dataPro);

    dataPro.splice(i,1);
    console.log(dataPro);
    localStorage.setItem('Task', JSON.stringify(dataPro));
    showData()
}



deleteAll.onclick = function() {
    
    localStorage.clear()
    dataPro.splice(0)
    // dataPro = []
    showData()
}




