document.getElementById("name").addEventListener("change", validateName);
document.getElementById("email").addEventListener("change", validateEmail);
document.getElementById("phone").addEventListener("change", validatePhone);
document.getElementById("message").addEventListener("change", validateMessage);

function validateName(){
    const nameNode = document.getElementById("name");
    const nameErrorNode = nameNode.parentNode.querySelector('p.help-block');
    nameErrorNode.innerHTML = '';

    let nameErrors = document.createElement('ul');
    nameErrors.setAttribute('role', 'alert');

    validateLength(nameNode, 1, nameErrors);
    validateForm(nameNode, /^\w+(\s{2}\w+)*$/, nameErrors);

    if(nameErrors.childElementCount > 0) {
        nameErrorNode.appendChild(nameErrors);
    }
}
function validateEmail(){
    const emailNode = document.getElementById("email");
    const emailErrorNode = emailNode.parentNode.querySelector('p.help-block');
    emailErrorNode.innerHTML = '';

    let emailErrors = document.createElement('ul');
    emailErrors.setAttribute('role', 'alert');

    if(emailNode.value.length > 50){
        let li = document.createElement('li');
        li.innerText = emailNode.id + ' is too long';
        emailErrors.appendChild(li);
    }
    validateLength(emailNode, 5, emailErrors);
    validateForm(emailNode, /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, emailErrors);

    if(emailErrors.childElementCount > 0) {
        emailErrorNode.appendChild(emailErrors);
    }
}
function validatePhone(){
    const phoneNode = document.getElementById("phone");
    const phoneErrorNode = phoneNode.parentNode.querySelector('p.help-block');
    phoneErrorNode.innerHTML = '';

    let phoneErrors = document.createElement('ul');
    phoneErrors.setAttribute('role', 'alert');

    validateLength(phoneNode, 12, phoneErrors);
    validateForm(phoneNode, /^[+0](?:\d{5}|\d{3}\(\d{2}\))(?:-\d{3}-\d{2}-\d{2}|\s\d{3}\s\d{2}\s\d{2})$/, phoneErrors);

    if(phoneErrors.childElementCount > 0) {
        phoneErrorNode.appendChild(phoneErrors);
    }
}
function validateMessage(){
    const messageNode = document.getElementById("message");
    const messageErrorNode = messageNode.parentNode.querySelector('p.help-block');
    messageErrorNode.innerHTML = '';

    let messageErrors = document.createElement('ul');
    messageErrors.setAttribute('role', 'alert');

    validateLength(messageNode, 10, messageErrors);
    // validateForm(messageNode, /^((?!ugly|dumm|stupid|pig|ignorant).)*$/, messageErrors);
    if(!messageNode.value.match(/^((?!ugly|dumm|stupid|pig|ignorant).)*$/)){
        let li = document.createElement('li');
        li.innerText = 'message contains bad words';
        messageErrors.appendChild(li);
    }

    if(messageErrors.childElementCount > 0) {
        messageErrorNode.appendChild(messageErrors);
    }
}

function validateLength(argNode, lim, errs){
    if(argNode.value.length < lim){
        let li = document.createElement('li');
        li.innerText = argNode.id + ' is too short';
        errs.appendChild(li);
    }
}
function validateForm(argNode, ex, errs){
    if (!argNode.value.match(ex)) {
        let li = document.createElement('li');
        li.innerText = argNode.id + ' format is incorrect';
        errs.appendChild(li);
    }
}