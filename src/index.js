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
      toTitleCase(person.name.title) +
      " " +
      toTitleCase(person.name.first) +
      " " +
      toTitleCase(person.name.last);
    document.getElementById("email").innerHTML = person.email;
    document.getElementById("street").innerHTML = toTitleCase(
      person.location.street
    );
    document.getElementById("city").innerHTML = toTitleCase(
      person.location.city
    );
    document.getElementById("state").innerHTML = toTitleCase(
      person.location.state
    );
    document.getElementById("postcode").innerHTML = person.location.postcode;
    document.getElementById("phone").innerHTML = person.phone;
    document.getElementById("cell").innerHTML = person.cell;
    document.getElementById("date_of_birth").innerHTML = person.dob.date.slice(
      0,
      10
    );
    document.getElementById("profile_picture").src = person.picture.large;
  }

  let toTitleCase = function(str) {
    str = str.toLowerCase().split(" ");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
  };
});

//im number 1
