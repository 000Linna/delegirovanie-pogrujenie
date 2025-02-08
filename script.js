let lm1 = document.getElementById('lm1')
let lm2 = document.getElementById('lm2')
let lm3 = document.getElementById('lm3')

lm1.addEventListener("click",()=>{
    console.log('pink - погружение')
},true)
lm1.addEventListener("click",()=>{
    console.log('pink -всплытие')
},false)
lm2.addEventListener("click",(event)=>{
    console.log('red  - погружение')
  
},true)
// метод event.stopImmediatePropagation()- полностью останавливает обработку
lm2.addEventListener("click",(event)=>{
    console.log('red - всплытие')
    
},false)
// метод event.stopPropagation()- остановка вспытия
lm3.addEventListener("click",()=>{
    console.log('blue- погружение')
   
},true)

lm3.addEventListener("click",()=>{
    console.log('blue - всплытие')
   
},false)

