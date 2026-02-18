// Make the DIV element draggable:
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmousemove = null;
    console.log(pos1,pos2,pos3,pos4);
  }
}

function generateElement(){
  try{
   const body = document.body;

const panel = document.createElement("div");
panel.setAttribute("class", "msgBox");
panel.setAttribute("id","divId");
panel.style.overflow = "hidden";
panel.style.resize = "both";
panel.addEventListener("click",dragElement(panel));
body.appendChild(panel);
const header = document.createElement("div");
header.setAttribute("class", "header");
header.setAttribute("id","divIdheader");
const headerText = document.createElement("p");
headerText.textContent = "Header";
header.appendChild(headerText);
header.style.cursor = "move";
panel.appendChild(header);
const msg = document.createElement("p");
msg.textContent = "Element";
panel.appendChild(msg);

const closeBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appendChild(closeBtn);

closeBtn.addEventListener("click", () => body.removeChild(panel));

  }
  catch(error){
console.log(error);
  }
}

const generate = document.querySelector("button");
generate.addEventListener("click",()=>generateElement());


