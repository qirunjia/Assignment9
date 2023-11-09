//reference (tutorial?): https://www.jb51.net/article/283117.htm
let range_ipt = document.querySelector(".range_ipt")
let dom = document.querySelector(".dom")
let btn = document.querySelector(".btn")
let sele = document.querySelector(".sele")
let show_hide = document.querySelector(".show_hide")
range_ipt.onchange = function () {
    dom.style.borderRadius = this.value + '%'
}
let startX = 0
let startY = 0
let endX = 0
let endY = 0
let domeState = true
dom.addEventListener('dragstart', (e) => {
    console.log();
    startX = dom.getBoundingClientRect().x + dom.getBoundingClientRect().width/2 - e.clientX
    startY = dom.getBoundingClientRect().y + dom.getBoundingClientRect().height/2 - e.clientY
})
dom.addEventListener("dragend", (e) => {
    endX = e.clientX
    endY = e.clientY
    dom.style.left = endX + startX + 'px'
    dom.style.top = endY + startY + 'px'
});
btn.addEventListener('click', () => {
    dom.style.backgroundColor = rgbColor()
})
sele.onchange = function () {
    if (this.value == 0) {
        dom.style.width = 300 + 'px'
        dom.style.height = 300 + 'px'
    } else if (this.value == 1) {
        dom.style.width = 400 + 'px'
        dom.style.height = 400 + 'px'
    } else if (this.value == 2) {
        dom.style.width = 500 + 'px'
        dom.style.height = 500 + 'px'
    }
}
function rgbColor() {
    return "rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 10) + ')';
}
show_hide.addEventListener('click', () => {

    if(domeState){
        dom.style.display = 'none'
        domeState  = !domeState
    }else {
        dom.style.display = 'block'
        domeState  = !domeState
    }
})
