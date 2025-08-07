const object=document.getElementById('rut');
const goods=document.getElementsByClassName('in');

object.addEventListener('click', ()=> {
    object.classList.toggle('move');
    console.log('clclc')
});

goods.addEventListener('click', ()=>{
    goods.classList.toggle('.onto');
    console.log('ononoo')
});