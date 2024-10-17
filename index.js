document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const heart = button.querySelector('.like-glyph');
            heart.classList.toggle('liked');
            
            mimicServerCall()
                .then(response => {
                    console.log(response); 
                })
                .catch(error => {
                    console.error(error); 
                    alert("Something went wrong. Please try again."); 
                });
        });
    });
});

function mimicServerCall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = Math.random() > 0.2; 
            if (isSuccess) {
                resolve("Server response: Liked!");
            } else {
                reject("Server response: Error liking the post.");
            }
        }, 1000); 
    });
}
