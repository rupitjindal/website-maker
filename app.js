const workshop = document.getElementById("workshop");
workshop.addEventListener("drop",workshopDrop);
workshop.addEventListener("dragover",(e)=>e.preventDefault());

window.addEventListener("drop",(e)=>{
  e.preventDefault();}
);
window.addEventListener("dragover",(e)=>{e.preventDefault();}
);

//creating element
function generateElement(){
  try{
const article = document.getElementById("workshop");
const panel = document.createElement("div");
panel.setAttribute("draggable", "true");
panel.setAttribute("class", "msgBox");
article.appendChild(panel)

//adding drag event listener to element
panel.addEventListener("dragstart", dragElement);
panel.addEventListener("dragend", (e) => {
  e.target.removeAttribute("id");
});
const closeBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appendChild(closeBtn);

closeBtn.addEventListener("click", () => article.removeChild(panel));

  }
  catch(error){
console.log(error);
  }
}

const generate = document.querySelector("button");
generate.addEventListener("click",()=>generateElement());


function workshopDrop(e){
  try{
  e.preventDefault();
  const element = document.getElementById("dragged");
  const x = e.clientX;
  const y = e.clientY;
  element.style.left = x + "px";
  element.style.top = y + "px";
  workshop.appendChild(element);
}catch(error){
  console.log(`Drop element: ${error}`);
};
}

function dragElement(e){
  try{
  e.target.setAttribute("id", "dragged");
  e.dropEffect = "move";
  }catch(error){
    console.log(`Drag element: ${error}`);
  }
}
