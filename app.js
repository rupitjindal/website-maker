function create_div(){
    const elem = document.createElement("div")
    const text = document.createTextNode("Movable div")
    elem.appendChild(text)
    const button = document.getElementById("generate_div")
    document.body.insertBefore(elem,button)

}

const button = document.getElementById("generate_div")
button.addEventListener("click",create_div)