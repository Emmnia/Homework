const container = document.getElementById('container');
const renderPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((posts) => {
        JSON.stringify(posts);
        let newPost = {
        title: 'Заголовок',
        content: 'Статья',
        };
        posts.forEach((post) => {
            newPost.title = post.title;
            newPost.content = post.body;
            const postContainer = document.createElement('div');
            postContainer.classList.add('post');
            postContainer.innerHTML = `<h2 class="title">Заголовок: ${newPost.title}</h2>
            <p>Статья: ${newPost.content}</p>`;
            container.append(postContainer);
        })
    })
    .catch((error) => {
        container.innerHTML = `<p>Не удалось отобразить посты: ${error}</p>`;
    });
}

renderPosts();