// Navbar Toggler

$(document).ready(function () {
  var canClick = true; // A flag to control whether the button can be clicked

  $(".navbar-toggler").click(function () {
    console.log("click");
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
      if ($("#nav-icon")[0].classList.contains("open")) {
        $(".navbar-toggler").click();
        bsCollapse.toggle();
      }
    }
  });
});

// Booking Form Validation

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

$("#startDateValidation")[0].min = new Date().toISOString().split("T")[0];

$("#endDateValidation")[0].min = new Date(
  new Date().setDate(new Date().getDate() + 1)
)
  .toISOString()
  .split("T")[0];

// Packages

function setDestinationValue(newValue) {
  $("#destinationValidation").val(newValue);
}

// Scroll to exact package when clicking on a package item from navbar

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  // Remove links that don't actually link to anything
  .click(function (event) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();

        var scrollTop = target.offset().top - $(".sticky-top").height();

        $("html, body").animate(
          {
            scrollTop: scrollTop,
          },
          500
        );
      }
    }
  });
