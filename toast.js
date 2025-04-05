const submitBtn = document.querySelector('#submit');
const toastElement = document.querySelector('#submitToast');
function toast() {
    toastElement.className = 'show';
    setTimeout(function(){toastElement.className = toastElement.className.replace('show', '');}, 3000);
}

submitBtn.addEventListener('click' , function(){
    toast();
})