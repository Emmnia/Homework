const nameInput = document.getElementById('username-input');
const userpicURL = document.getElementById('userpic-url');
const commentInput = document.getElementById('comment-input');
const submitButton = document.getElementById('submit');
const chat = document.getElementById('chat');

submitButton.disabled = true;

function checkSpam(str) {
    str = commentInput.value;
    let lowStr = str.toLowerCase();
    return lowStr.includes('viagra') || lowStr.includes('xxx');
}

function checkFields() {
    if (nameInput.value.length === 0 || commentInput.value.length === 0) {
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
}

function submitComment() {
    const newComment = document.createElement('div');
    chat.append(newComment);
    const user = document.createElement('div');
    newComment.append(user);
    const userpic = document.createElement('img');
    userpic.src = userpicURL.value;
    if (userpicURL.value.length === 0) {
        userpic.src = 'https://static.thenounproject.com/png/801398-200.png';
    }
    userpic.alt = 'userpic';
    user.append(userpic);
    const username = document.createElement('span');
    user.append(username);
    const newName = nameInput.value.replace(/\s/g, "");
    const formattedName = newName[0].toUpperCase() + newName.slice(1).toLowerCase();
    username.textContent = formattedName;
    const commentText = document.createElement('p');
    newComment.append(commentText);
    if (checkSpam()) {
        commentText.textContent = commentInput.value.replace(/viagra|xxx/gi, "***");
    } else {
        commentText.textContent = commentInput.value;
    }
    newComment.classList.add('comment');
    user.classList.add('user');
    userpic.classList.add('userpic');
    nameInput.value = '';
    userpicURL.value = '';
    commentInput.value = '';
    submitButton.disabled = true;
}

nameInput.addEventListener('keyup', checkFields);
commentInput.addEventListener('keyup', checkFields);
submitButton.addEventListener('click', function() {
    checkSpam();
    submitComment();
});
