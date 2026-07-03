const API = "http://localhost:5000/posts";

async function loadPosts() {

    const response = await fetch(API);
    const posts = await response.json();

    const container = document.getElementById("posts");

    container.innerHTML = posts.map(post => `
        <div class="post">
            <h3>${post.title}</h3>
            <p>${post.category}</p>
            <small>${post.author}</small>
        </div>
    `).join("");
}

async function createPost() {

    const title = document.getElementById("title").value;

    await fetch(API,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            title,
            category:"General",
            content:"Demo Content",
            author:"User"
        })
    });

    loadPosts();
}

loadPosts();