const comment_form = document.querySelector(".comment__form");
const save_button = document.querySelector(".comment__submit");

function onCommentSave() {
  if(!comment_form.value || comment_form.value.length <= 5) {
    comment_form.style.border = "2px solid red";
    setTimeout(() => (comment_form.style.border = "none"), 500);
  } else {
    save_button.innerHTML = "Сохранено";
    setTimeout(() => (save_button.innerHTML = "Сохранить"), 500);
    localStorage.setItem("comment", comment_form.value);
  }
}

function latestComment() {
  const comment = localStorage.getItem("comment");
  if(comment) {
    comment_form.innerHTML = comment;
  }
}

latestComment();
save_button.addEventListener("click", onCommentSave);