const container = document.getElementById('post-container');
const headingInput = document.getElementById('headingInput');
const textInput = document.getElementById('textInput');
const addButton = document.getElementById('addButton');

const createPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: headingInput.value,
        body: textInput.value,
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })
    .then(response => response.json())
    .then((post) => {
        const postContainer = document.createElement('div');
        postContainer.innerHTML = `<h2>${post.title}</h2>
        <p>${post.body}</p>`;
        container.append(postContainer);
    })
    headingInput.value = '';
    textInput.value = '';
}

addButton.addEventListener('click', createPost);