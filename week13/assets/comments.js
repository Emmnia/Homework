const nameInput = document.getElementById('username-input');
const yesCheckbox = document.getElementById('yes');
const noCheckbox = document.getElementById('no');
const userpicURL = document.getElementById('userpic-url');
const commentInput = document.getElementById('comment-input');
const submitButton = document.getElementById('submit');
const chat = document.getElementById('chat');

submitButton.disabled = true;

function checkSpam(str) {
    let lowStr = str.toLowerCase();
    return lowStr.includes('viagra') || lowStr.includes('xxx');
}

function checkFields() {
    if (commentInput.value.length === 0) {
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
}

function submitComment() {
    const newComment = document.createElement('div');
    chat.append(newComment);
    newComment.classList.add('comment');
    const user = document.createElement('div');
    newComment.append(user);
    user.classList.add('user');
    const userpic = document.createElement('img');
    userpic.src = userpicURL.value;
    if (userpicURL.value.length === 0) {
        let randomNumber = Math.floor(Math.random() * 6 + 1);
        switch(randomNumber) {
            case 1:
            userpic.src = '/assets/userpic1.png';
            break;
            case 2:
            userpic.src = '/assets/userpic2.jpg';
            break;
            case 3:
            userpic.src = '/assets/userpic3.png';
            break;
            case 4:
            userpic.src = '/assets/userpic4.jpg';
            break;
            case 5:
            userpic.src = '/assets/userpic5.png';
            break;
            case 6:
            userpic.src = '/assets/userpic6.png';
            break;
            default:
            userpic.src = '/assets/userpic1.png';
        }
    }
    userpic.alt = 'userpic';
    user.append(userpic);
    userpic.classList.add('userpic');
    const username = document.createElement('span');
    user.append(username);
    username.classList.add('username');
    if (yesCheckbox.checked === true) {
        const newName = nameInput.value.replace(/\s/g, "");
        const formattedName = newName[0].toUpperCase() + newName.slice(1).toLowerCase();
        username.textContent = formattedName;
    } else if (noCheckbox.checked === true) {
        username.textContent = "Username";
    } else {
        username.textContent = "Username";
    }
    const date = document.createElement('span');
    user.append(date);
    date.classList.add('date');
    date.textContent = new Date();
    const commentText = document.createElement('p');
    newComment.append(commentText);
    if (checkSpam(commentInput.value)) {
        commentText.textContent = commentInput.value.replace(/viagra|xxx/gi, "***");
    } else {
        commentText.textContent = commentInput.value;
    }
    nameInput.value = '';
    userpicURL.value = '';
    commentInput.value = '';
    submitButton.disabled = true;
}

nameInput.addEventListener('keyup', checkFields);
commentInput.addEventListener('keyup', checkFields);
submitButton.addEventListener('click', submitComment);
