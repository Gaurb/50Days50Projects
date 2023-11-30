const click=document.getElementById('btn');
click.addEventListener('click',(flag)=>{
    const input=document.querySelector('input');
    input.classList.toggle('active')
    input.focus();
})