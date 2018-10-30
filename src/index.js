const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".btn.btn-primary").addEventListener("click", () => {
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(renderPerson);
  });

  function renderPerson(data) {
    let person = data.results[0];
    document.getElementById("fullname").innerHTML =
      person.name.title + " " + person.name.first + " " + person.name.last;
    document.getElementById("email").innerHTML = person.email;
    document.getElementById("street").innerHTML = person.location.street;
    document.getElementById("city").innerHTML = person.location.city;
    document.getElementById("state").innerHTML = person.location.state;
    document.getElementById("postcode").innerHTML = person.location.postcode;
    document.getElementById("phone").innerHTML = person.phone;
    document.getElementById("cell").innerHTML = person.cell;
    document.getElementById("date_of_birth").innerHTML = person.dob.date;
    document.getElementById("profile_picture").src = person.picture.large;
  }
});

//im number 1
