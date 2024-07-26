// var paraf = document.getElementsByClassName('para')
// console.log(paraf)
// paraf[0].style.color = "yellow"


// var para = document.getElementsByTagName('p')
// console.log(para)
// para[1].style.color = "green"

// var p = document.querySelector(".para")

// console.log(p)

// var paras = document.querySelectorAll('.para')

// console.log(paras)

// paras[0].style.textDecoration = 'underline'

// var divM = document.getElementById('main')
// // console.log(divM.firstElementChild)
// console.log(divM.lastElementChild.previousElementSibling.nextElementSibling)

// var divM = document.querySelector('#main')

// // console.log(divM.innerHTML)
// console.log(divM.innerText)

// var btn = document.createElement('button')
// var divM = document.getElementById('main')
// btn.innerText = "Hello"
// divM.appendChild(btn)

// var titre = document.querySelector('h1')
// titre.setAttribute('class','nour')

function sayHello(){
    alert("Hello")
}


// var btnPlus = document.querySelector(".btnPlus")

// btnPlus.addEventListener("click",function(){
//     btnPlus.previousElementSibling.innerText++
// })







// var btnMoins = document.querySelector('.btnMoins')

// btnMoins.addEventListener('click',function(){
//     if (btnMoins.nextElementSibling.innerText>0) {
//         btnMoins.nextElementSibling.innerText--
//     }
    
// })



var btnPlus = document.querySelectorAll(".btnPlus")

// console.log(btnPlus)

for(let i = 0; i< btnPlus.length;i++){
    btnPlus[i].addEventListener('click',function(){
        btnPlus[i].previousElementSibling.innerText++
    })
}








var btnMoins = document.querySelectorAll('.btnMoins')

for (let i = 0; i < btnMoins.length; i++) {
    btnMoins[i].addEventListener('click',function(){
        
        if (btnMoins[i].nextElementSibling.innerText>0) {
            btnMoins[i].nextElementSibling.innerText--
        }      
        
    })
    
}


document.querySelector('#main').remove()