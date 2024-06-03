const searchContainer = document.querySelector('.search-container');
const listContainer = document.getElementById("list-container");

// function logic
function myFun(){
    if(searchContainer.value==""){
        alert("You must enter some value");
    }
    else{
        const li = document.createElement("li");
        li.innerHTML = searchContainer.value;
        listContainer.appendChild(li)

        const span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    searchContainer.value="";
    saveData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();