class create_div 
{
    constructor()
    {
    this.elem = document.createElement("div")
    this.text = document.createTextNode("Movable div")
    this.elem.appendChild(this.text)
    const button = document.getElementById("generate_div")
    document.body.insertBefore(this.elem,button)
    this.elem.setAttribute("backgroundColor","Red")
    }

}

const button = document.getElementById("generate_div")
button.addEventListener("click",()=>{
    const div = new create_div()
})