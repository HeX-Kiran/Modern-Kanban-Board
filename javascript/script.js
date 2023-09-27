let category = new Map();
category.set("Overview",0);
category.set("Not Started",1);
category.set("In Progress",2);
category.set("Testing",3);
category.set("Completed",4);

let NotStartedSection = document.querySelector("div[category='1']");

let notStartedCard = document.querySelector(".cards[category = '1']");

// createNotStartedCard("create component",",sdjbfksdfkjsdkjf");

function createNotStartedCard( title,desc){
    let newCard = notStartedCard.cloneNode(true);
    let titleElement = newCard.querySelector("h1");
    let taskDesc = newCard.querySelector(".task-desc");

    titleElement.innerText = title;
    taskDesc.innerText = desc;
    NotStartedSection.appendChild(newCard);
    
}


// *************************************************************
// Add Task button
let addTask = document.querySelector(".add-task-btn");
let form = document.querySelector(".task-form");

addTask.addEventListener("click",()=>{
    form.style.display = "block";
})

// Close Task Form

let closeForm = document.querySelector(".form-close");
let formInput = document.querySelector(".form input");
let textArea = document.querySelector(".form textArea");

closeForm.addEventListener("click",()=>{
    form.style.display = "none";
    // If we are closing we need to clear input fields
    formInput.value = "";
    textArea.value = "";
})

// *************************************************************


// *************************************************************
// Adding filter capability
let links = document.querySelectorAll(".tasks-nav-link a");

console.log(links);

links.forEach(link=>{
    link.addEventListener("click",()=>{
        // 
        if(category.has(link.innerText)){
            //   iterate over appropriate Array and display those elements
        }
    })
})


// *************************************************************





