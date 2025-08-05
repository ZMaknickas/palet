const object=document.getElementById('rut');

object.addEventListener('click', (e)=> {
    e.stopPropagation();
    object.classList.toggle('move');
    console.log('clclc')
})