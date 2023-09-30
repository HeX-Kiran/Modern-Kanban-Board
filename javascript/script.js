let category = new Map();
category.set("Overview",0);
category.set("Not Started",1);
category.set("In Progress",2);
category.set("Testing",3);
category.set("Completed",4);

// Initilise the arrays to store the object for each category

let notStartedArr = [];
let inProgressArr = [];
let  testingArr= [];
let completedArr = [];

// Select the add card and card div for each category
let notStartedSection = document.querySelector(".add-cards[category='1']");
let notStartedCard = document.querySelector(".cards[category='1']");

let inProgressSection = document.querySelector(".add-cards[category='2']");
let inprogressCard = document.querySelector(".cards[category = '2']");

let testingSection = document.querySelector(".add-cards[category='3']");
let testingCard = document.querySelector(".cards[category = '3']");

let completedSection = document.querySelector(".add-cards[category='4']");
let completedCard = document.querySelector(".cards[category = '4']");


let currObj = {};

let saveButton = document.querySelector(".save");

let closeForm = document.querySelector(".form-close");
let formInput = document.querySelector(".form input");
let textArea = document.querySelector(".form textArea");




// *************************************************************
// Save task button
saveButton.addEventListener("click",(e)=>{
    
    let title = formInput.value;
    let desc = textArea.value;
    currObj.title = title;
    currObj.desc = desc;

    console.log(currObj)
    
    if(currObj.category == 1){
        notStartedArr.push(currObj);
        currObj = {};

        // After pushing clone create a respective card using clone
        createCard(notStartedArr[notStartedArr.length-1].title,notStartedArr[notStartedArr.length-1].desc,notStartedArr[notStartedArr.length-1].category);

    } 
    else if(currObj.category == 2){
        inProgressArr.push(currObj);
        currObj={};
        // After pushing clone create a respective card using clone
        createCard(inProgressArr[inProgressArr.length-1].title,inProgressArr[inProgressArr.length-1].desc,inProgressArr[inProgressArr.length-1].category);
    }

    else if(currObj.category == 3){
        testingArr.push(currObj);
        currObj = {};
        // After pushing clone create a respective card using clone
        createCard(testingArr[testingArr.length-1].title,testingArr[testingArr.length-1].desc,testingArr[testingArr.length-1].category);
    }
    else{
        completedArr.push(currObj);
        currObj={};
        // After pushing clone create a respective card using clone
        createCard(completedArr[completedArr.length-1].title,completedArr[completedArr.length-1].desc,completedArr[completedArr.length-1].category);
    }

    // console.log(notStartedArr);
    // console.log(inProgressArr);
    // console.log(testingArr);
    // console.log(completedArr);

    //CLose form
    form.style.display = "none";
    formInput.value = "";
    textArea.value = "";
})


// *************************************************************
// Add Task button
let addTask = document.querySelector(".add-task-btn");
let form = document.querySelector(".task-form");

addTask.addEventListener("click",()=>{
    form.style.display = "block";
    currObj.category = 1
    console.log(currObj);
})
// *************************************************************
// Progress Add button

let progressAdd = document.querySelector("#icon[category='2']");

progressAdd.addEventListener("click",()=>{
    form.style.display = "block";
    currObj.category = 2
    console.log(currObj);
    
    
})

// *************************************************************
// Testing Add button
let testingAdd = document.querySelector("#icon[category='3']");

testingAdd.addEventListener("click",()=>{
    form.style.display = "block";
    currObj.category = 3
    console.log(currObj);
    
    
})


// *************************************************************
// Completed Add button
let completedAdd = document.querySelector("#icon[category='4']");

completedAdd.addEventListener("click",()=>{
    form.style.display = "block";
    currObj.category = 4
    console.log(currObj);
    
    
})

// **************************************************************
// Close Task Form
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
    link.addEventListener("click",(e)=>{
        
        if(category.has(link.innerText)){
            //   iterate over appropriate Array and display those elements
           
        }
        else{
            link.setAttribute("id","");
        }

        // Whenever a filter is pressed the other filter should not have selected id
        links.forEach(link=>{
            if(link === e.target) link.setAttribute("id","selected");
            else link.setAttribute("id"," ");
        })
    })
})


// *******************************************************************
// Create Card
function createCard(title,desc,category){
    if(category === 1){
        let newCard = notStartedCard.cloneNode(true);
        let titleElement = newCard.querySelector("h1");
        let taskDesc = newCard.querySelector(".task-desc");
        titleElement.innerText = title;
        taskDesc.innerText = desc;
        newCard.setAttribute("id","show");
        notStartedSection.appendChild(newCard);
    }
    else if(category === 2){
        let newCard = inprogressCard.cloneNode(true);
        let titleElement = newCard.querySelector("h1");
        let taskDesc = newCard.querySelector(".task-desc");
        titleElement.innerText = title;
        taskDesc.innerText = desc;
        newCard.setAttribute("id","show");
        inProgressSection.appendChild(newCard);
    }
    else if(category == 3){
        let newCard = testingCard.cloneNode(true);
        let titleElement = newCard.querySelector("h1");
        let taskDesc = newCard.querySelector(".task-desc");
        titleElement.innerText = title;
        taskDesc.innerText = desc;
        newCard.setAttribute("id","show");
        testingSection.appendChild(newCard);
    }
    else{
        let newCard = completedCard.cloneNode(true);
        let titleElement = newCard.querySelector("h1");
        let taskDesc = newCard.querySelector(".task-desc");
        titleElement.innerText = title;
        taskDesc.innerText = desc;
        newCard.setAttribute("id","show");
        completedSection.appendChild(newCard);
    }
    
    
    
}












