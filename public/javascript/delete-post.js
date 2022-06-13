async function deletePostHandler(event) {
    event.preventDefault();
    
const post_id = document.getElementById('post-id').value

    const response = await fetch("/api/post/" + post_id, {
        method: "DELETE"
    })
    if (response.ok) {
        document.location.replace("/dashboard/");
    } else {
        alert(response.statusText);
    }
    
}
  
  
  document.getElementById('delete-btn').addEventListener('click', deletePostHandler);