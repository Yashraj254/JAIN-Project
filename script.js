// Navbar Toggler

$(document).ready(function () {
  var canClick = true; // A flag to control whether the button can be clicked

  $(".navbar-toggler").click(function () {
    if (canClick) {
      $("#nav-icon").toggleClass("open");
      canClick = false; // Disable further clicks

      // Enable the button after 350ms
      setTimeout(function () {
        canClick = true;
      }, 350);
    }
  });
});

// Collapse Navbar on selecting a nav-item

const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarSupportedContent");
const bsCollapse = new bootstrap.Collapse(menuToggle, {
  toggle: false, // This option prevents the collapse from being open initially
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Check if the clicked element is the exception
    if (!event.target.classList.contains("no-collapse-toggle")) {
      $(".navbar-toggler").click();
      bsCollapse.toggle();
    }
  });
});

//Booking Form Validation

(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          alert("Form submitted successfully!");
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// Dates Validation

document.getElementById("startDateValidation").min = new Date()
  .toISOString()
  .split("T")[0];

document.getElementById("endDateValidation").min = new Date(
  new Date().setDate(new Date().getDate() + 2)
)
  .toISOString()
  .split("T")[0];
