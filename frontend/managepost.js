document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("posts-container");
  
    try {
      const res = await fetch("http://localhost:3000/api/posts");
      const posts = await res.json();
  
      container.innerHTML = "";
  
      if (!posts.length) {
        const noPostsMsg = document.createElement("p");
        noPostsMsg.textContent = "No posts yet.";
        noPostsMsg.classList.add("has-text-grey", "has-text-centered", "is-size-5");
        container.appendChild(noPostsMsg);
      } else {
        posts.forEach((post) => {
          const box = document.createElement("div");
          box.className = "box";
  
          const titleEl = document.createElement("h3");
          titleEl.className = "title is-5";
          titleEl.textContent = post.title;
  
          const contentEl = document.createElement("p");
          contentEl.textContent = post.content;
  
          // 🛠️ Button group
          const buttonGroup = document.createElement("div");
          buttonGroup.className = "buttons mt-3";
  
          // Delete button (functionality in Issue 4)
          const deleteBtn = document.createElement("button");
          deleteBtn.textContent = "Delete";
          deleteBtn.className = "button is-danger is-small";
          deleteBtn.dataset.id = post.id;
  
          // Edit button (functionality in Issue 5)
          const editBtn = document.createElement("button");
          editBtn.textContent = "Edit";
          editBtn.className = "button is-info is-small";
          editBtn.dataset.id = post.id;
  
          // Add buttons to group
          buttonGroup.appendChild(editBtn);
          buttonGroup.appendChild(deleteBtn);
  
          // Assemble post box
          box.appendChild(titleEl);
          box.appendChild(contentEl);
          box.appendChild(buttonGroup);
  
          container.appendChild(box);
        });
      }
    } catch (err) {
      console.error("Error loading posts:", err);
      const errorMsg = document.createElement("p");
      errorMsg.textContent = "Failed to load posts.";
      errorMsg.classList.add("has-text-danger");
      container.appendChild(errorMsg);
    }
  });
  