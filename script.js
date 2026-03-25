// Yeh function tab chalega jab button click hoga
function loginKaro() {

  // Input boxes se value uthao
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value

  // Check karo — kya kuch likha hai?
  if (email === "" || password === "") {
    document.getElementById("message").innerText = "Email aur password dono bharо!"
    document.getElementById("message").style.color = "red"
    return
  }

  // Abhi ke liye — hardcoded check
  if (email === "teacher@siksha.com" && password === "1234") {
    document.getElementById("message").innerText = "Welcome! Dashboard load ho raha hai..."
    document.getElementById("message").style.color = "#00E5A0"
  } else {
    document.getElementById("message").innerText = "Galat email ya password!"
    document.getElementById("message").style.color = "red"
  }

}