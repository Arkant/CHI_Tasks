/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2018. MIT licensed.
 */
// Create elements add styles
let body = document.querySelector('body');
let modal = document.createDocumentFragment();

let div = document.createElement('div'); div.id = 'mydiv';
let div1 = document.createElement('div'); div1.id = 'mydivheader'; div1.style = `width:240px; 
                                                                                 height:20px; background:#46639e; 
                                                                                 margin-bottom:10px;
                                                                                 margin-right: 5px;
                                                                                 `;
                                                                                 
let h1 = document.createElement('h1'); h1.innerHTML = 'Find node element'; h1.style = 'color:white; margin-left:5px;';
let input = document.createElement('input'); input.ad
let next = document.createElement('button'); next.innerHTML = 'NEXT'; 
let prev = document.createElement('button'); prev.innerHTML = 'PREV';
let search = document.createElement('button');  search.innerHTML = 'SEARCH';
let parentbtn = document.createElement('button');  parentbtn.innerHTML = 'PARENT';
let childbtn = document.createElement('button'); childbtn.innerHTML = 'CHILD';

let style = document.createElement('style'); style.innerText = ` .checked {border:solid red;} 
                                                                  #mydiv {position:absolute; top:100px; 
                                                                  left:100px; width:280px;height:110px; 
                                                                  padding:5px 5px 5px 5px; background-color:#6292e5;
                                                                  border: 1px solid black;
                                                                  border-radius:5px;}
                                                                  input{margin-bottom: 12px}`;
                                                                  
let close = document.createElement('button'); close.innerHTML = '&times;'; close.style = `color:red; float:right; 
                                                                                           cursor:pointer;`; 

// Add to DOM
div.appendChild(close);
div.appendChild(div1);
div1.appendChild(h1);
div.appendChild(input);
div.appendChild(search);
div.appendChild(next);
div.appendChild(prev);
div.appendChild(parentbtn);
div.appendChild(childbtn);

modal.appendChild(div);
body.appendChild(modal);
body.appendChild(style);

/*Functions */

function addColor (elem) {
    elem.classList.add('checked');
}

function removeColor (elem){
    elem.classList.remove('checked');
} 

function getSelector (input) {
    let selector = input.value;
    input.value = "";
    return selector
}
function onStartDisable (){
    childbtn.disabled = true;
    parentbtn.disabled = true;
    next.disabled = true;
    prev.disabled = true;
}

function disableButton (elem) {
    
    if (elem.firstElementChild == null) {
        childbtn.disabled = true;
    }
    else {
        childbtn.disabled = false;
    }

    if (elem.nextElementSibling == null){
        next.disabled = true;
    }
    else {
        next.disabled = false;
    }

    if (elem.previousElementSibling == null){ 
        prev.disabled = true;
    }
    else {
        prev.disabled = false;
    }

    if (elem.parentElement == null){ 
        parentbtn.disabled = true;
    }
    else {
        parentbtn.disabled = false;
    }

}

// Event listeners
onStartDisable();
search.addEventListener("click", function(){
    let checked = document.querySelector('.checked');
    let element = document.querySelector(getSelector(input));
    if (element !== null){
        disableButton(element);
        addColor(element);
    }
    removeColor(checked);
});

next.addEventListener("click", function(){
    let checked = document.querySelector('.checked');
    let nextchecked = checked.nextElementSibling;
    if (nextchecked !== null){
        disableButton(nextchecked);
        addColor(nextchecked);
    }
    removeColor(checked);
});

prev.addEventListener("click", function(){
    let checked = document.querySelector('.checked');
    let prevchecked = checked.previousElementSibling;
    if (prevchecked !== null){
        disableButton(prevchecked);
        addColor(prevchecked);
    }
    removeColor(checked);
});

parentbtn.addEventListener("click", function(){
    let checked = document.querySelector('.checked');
    let parentchecked = checked.parentElement;
    if (parentchecked !== null){
        disableButton(parentchecked);
        addColor(parentchecked);
    }
    removeColor(checked);
});

childbtn.addEventListener("click", function(){
    let checked = document.querySelector('.checked');
    let childchecked = checked.firstElementChild;
    if (childchecked !== null){
        disableButton(childchecked);
        addColor(childchecked);
    }
    removeColor(checked);
});

close.addEventListener("click",function(){
    body.removeChild(div);
});

//Drag function
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }
  
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}