
// //  Event bubling: deeplevel element to top level element

// document.querySelector("#grandparent").addEventListener("click",()=>{
//     console.log("clicked on grandparent")
// })
// document.querySelector("#parent").addEventListener("click",()=>{
//     console.log("clicked on parent")
// })
// document.querySelector("#child").addEventListener("click",function(){
//     console.log("clicked on child")
// })

// // event trickling (or) capturing : handling top level to bottom level

// document.querySelector("#grandparent").addEventListener("click",()=>{
//     console.log("clicked on grandparent")
// },true)
// document.querySelector("#parent").addEventListener("click",()=>{
//     console.log("clicked on parent")
// },true)
// document.querySelector("#child").addEventListener("click",function(){
//     console.log("clicked on child")
// },true)

document.querySelector("#grandparent").addEventListener("click",()=>{
    console.log("clicked on grandparent")
},false)
document.querySelector("#parent").addEventListener("click",()=>{
    console.log("clicked on parent")
},true)
document.querySelector("#child").addEventListener("click",function(){
    console.log("clicked on child")
},true)