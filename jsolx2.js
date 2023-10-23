document.addEventListener("DOMContentLoaded", function () {
    const addCommentButton = document.getElementById("add-comment-button");
    const newCommentNameInput = document.getElementById("new-comment-name");
    const newCommentContentInput = document.getElementById("new-comment-content");
    const commentsList = document.querySelector(".comments ul");

    addCommentButton.addEventListener("click", function () {
        const commentName = newCommentNameInput.value;
        const commentContent = newCommentContentInput.value;

        if (commentName.trim() !== "" && commentContent.trim() !== "") {
            const comment = document.createElement("li");
            comment.innerHTML = `<strong>${commentName}:</strong> ${commentContent}`;
            commentsList.appendChild(comment);

            newCommentNameInput.value = "";
            newCommentContentInput.value = "";
        }
    });
});
