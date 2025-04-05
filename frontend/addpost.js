document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const resetButton = document.getElementById("reset-form");
    const notification = document.querySelector(".notification");
    const deleteButton = notification.querySelector(".delete");
  
    // 🚀 Submit post
    form.addEventListener("submit", async (e) => {
      e.preventDefault(); // prevent default form reload
  
      const title = form.elements["title"].value.trim();
      const content = form.elements["content"].value.trim();
  
      if (!title || !content) return; // basic validation
  
      try {
        const res = await fetch("http://localhost:3000/api/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, content }),
        });
  
        if (res.ok) {
          showNotification("Added Successfully");
  
          // optionally clear form after success
          form.reset();
        } else {
          showNotification("Failed to add post", true);
        }
      } catch (err) {
        console.error(err);
        showNotification("Server error", true);
      }
    });
  
    // 🧼 Clear form manually
    resetButton.addEventListener("click", (e) => {
      e.preventDefault(); // prevent form submission
      form.reset();
    });
  
    // ❌ Hide notification
    deleteButton.addEventListener("click", () => {
      notification.classList.add("is-hidden");
    });
  
    // ✅ Show notification (green or red)
    function showNotification(message, isError = false) {
      notification.classList.remove("is-hidden", "is-primary", "is-danger");
      notification.classList.add(isError ? "is-danger" : "is-primary");
      notification.innerHTML = `
        <button class="delete"></button>
        ${message}
      `;
  
      // re-bind delete button each time (because we overwrite innerHTML)
      notification.querySelector(".delete").addEventListener("click", () => {
        notification.classList.add("is-hidden");
      });
    }
  });
  