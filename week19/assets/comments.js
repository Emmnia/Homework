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
            const container = document.getElementById('container');
            newPost.title = post.title;
            newPost.content = post.body;
            const postContainer = document.createElement('div');
            postContainer.innerHTML = `<h2>${newPost.title}</h2>
            <p>${newPost.content}</p>`;
            container.append(postContainer);
        })
    });
}

renderPosts();