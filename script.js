javascript
document.addEventListener('DOMContentLoaded', function() {
    const postList = document.getElementById('post-list');
    const form = document.getElementById('blog-form');
    const postIdInput = document.getElementById('post-id');
    const titleInput = document.getElementById('title');
    const contentInput = document.getElementById('content');

    let posts = JSON.parse(localStorage.getItem('posts')) || [];

    function renderPosts() {
        postList.innerHTML = '';
        posts.forEach((post, index) => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <button onclick="editPost(${index})">Edit</button>
                <button onclick="deletePost(${index})">Delete</button>
            `;
            postList.appendChild(postElement);
        });
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const postData = {
            title: titleInput.value,
            content: contentInput.value
        };

        if (postIdInput.value) {
            posts[postIdInput.value] = postData;
        } else {
            posts.push(postData);
        }

        localStorage.setItem('posts', JSON.stringify(posts));
        renderPosts();

        postIdInput.value = '';
        titleInput.value = '';
        contentInput.value = '';
    });

    window.editPost = function(index) {
        const post = posts[index];
        postIdInput.value = index;
        titleInput.value = post.title;
        contentInput.value = post.content;
    };

    window.deletePost = function(index) {
        posts.splice(index, 1);
        localStorage.setItem('posts', JSON.stringify(posts));
        renderPosts();
    };

    renderPosts();
});