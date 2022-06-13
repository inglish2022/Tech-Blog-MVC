async function editPostHandler(event) {
    event.preventDefault();
    const title = document.getElementById('post-title');
    const content = document.getElementById('post-content');
    const post_id = document.getElementById('post_id')

    const response = await fetch("/api/post/" + post_id.value, {
        method: "PUT", 
        body: JSON.stringify({
            title,
            content
        }),
        headers: { "Content-Type": "application/json"}
    })
        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert(response.statusText)
        }
      
  }
  
  document.querySelector('#edit-post-form').addEventListener('submit', editPostHandler);