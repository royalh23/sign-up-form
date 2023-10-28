const password = document.getElementById("psw");
const confirmationPassword = document.getElementById("confirmation-psw");
const btn = document.querySelector("button");
const para = document.querySelector("p:nth-child(5)");

password.addEventListener("change", checkPasswords);
confirmationPassword.addEventListener("change", checkPasswords);

function checkPasswords() {
  if (password.value !== confirmationPassword.value) {
    password.classList.add("error");
    confirmationPassword.classList.add("error");
    para.setAttribute("data-content", "* Passwords do not match!");
    btn.disabled = true;
  }
  else {
    password.classList.remove("error");
    confirmationPassword.classList.remove("error");
    para.setAttribute("data-content", "");
    btn.disabled = false;
  }
}