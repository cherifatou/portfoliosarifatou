document.getElementById("formContact").addEventListener("submit", function(e) {
  e.preventDefault();
  
  let nom = document.getElementById("nom").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if(nom === "" || email === "" || message === "") {
    alert("Veuillez remplir tous les champs !");
  } else {
    alert("Merci " + nom + ", votre message a été envoyé avec succès !");
    this.reset();
  }
});
