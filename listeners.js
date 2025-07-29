const value = document.getElementById('value');
const loader = document.getElementById('loader');
const toggleAnimBtn = document.getElementById('toggleAnimation');
const toggleHiddenBtn = document.getElementById('toggleVisibility');

value.addEventListener('input',(ev) => {
    loader.setAttribute('percent', ev.target.value);
})

toggleAnimBtn.addEventListener('change', (e) => {
    console.log(e.target.checked)
    if (e.target.checked){
        loader.setAttribute('animated', true);
    }
    else{
        loader.setAttribute('animated', false);
    }
});

toggleHiddenBtn.addEventListener('change', (e) => {
    if (e.target.checked){
        loader.setAttribute('hidden', "");
    }
    else{
        loader.removeAttribute("hidden");
    }
});