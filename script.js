/**Chiediamo all’utente il suo nome,
poi chiediamo il suo cognome,
poi chiediamo il suo colore preferito.
Infine scrivi sulla pagina nomecognomecolorepreferito22
(sostituendo nome, cognome e colore preferito con quelli inseriti dall'utente) */

const usrName = prompt(" what is your name ? ");
console.log(usrName);

const lastName = prompt(" your last name ? ");
console.log(lastName);

const favoriteColor = prompt(" favorite color ? ");
console.log(favoriteColor);

//my passwd
const myPassword = usrName + lastName + favoriteColor + "22";

document.getElementById("name").innerHTML = usrName;
document.getElementById("surname").innerHTML = lastName;
document.getElementById("color").innerHTML = favoriteColor;
document.getElementById("password").innerHTML = myPassword;

//alert(usrName + lastName + favoriteColor);

// IMP. (i++) the value of i before increment

for (let i = 0; i < 10; i++) {
  console.log(myPassword);
  if (i % 2 !== 0) console.log(i);
}

//test
