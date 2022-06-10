async function deletePostHandler(event) {
    event.preventDefault();
    
const post_id = document.getElementById('post_id')

    const response = await fetch("/api/post/" + post_id.value, {
        method: "DELETE"
    })
    if (response.ok) {
        document.location.replace("/dashboard/");
    } else {
        alert(response.statusText);
    }
    
}
  
  
  document.getElementById('delete-btn').addEventListener('click', deletePostHandler);