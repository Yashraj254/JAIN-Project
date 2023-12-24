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

// Login and Registration Validation
$(document).ready(function () {
  $("#registerEmail").keyup(function () {
    if (checkEmail($("#registerEmail").val())) {
      $("#registerEmailValidity").html(
        "<span style='color: green;'>E-mail Valid ✔</span>"
      );
    } else {
      $("#registerEmailValidity").html(
        "<span style='color: red;'>Enter valid E-mail</span>"
      );
    }
  });
});
$(document).ready(function () {
  $("#loginInputEmail").keyup(function () {
    if (checkEmail($("#loginInputEmail").val())) {
      $("#loginEmailValidity").html(
        "<span style='color: green;'>E-mail Valid ✔</span>"
      );
    } else {
      $("#loginEmailValidity").html(
        "<span style='color: red;'>Enter valid E-mail</span>"
      );
    }
  });
});
$(document).ready(function () {
  $("#loginInputPassword").keyup(function () {
    if (!$("#loginInputPassword").val().trim() == "") {
      $("#loginPasswordValidity").html("");
    } else {
      $("#loginPasswordValidity").html(
        "<span style='color: red;'>Enter your password</span>"
      );
    }
  });
});

$(document).ready(function () {
  $("#inputName").keyup(function () {
    if (checkName($("#inputName").val())) {
      $("#nameValidity").html("<span style='color: green;'> Valid ✔</span>");
    } else {
      $("#nameValidity").html(
        "<span style='color: red;'>Enter valid name</span>"
      );
    }
  });
});
$(document).ready(function () {
  $("#inputContact").keyup(function () {
    if (checkContact($("#inputContact").val())) {
      $("#contactValidity").html("<span style='color: green;'> Valid ✔</span>");
    } else {
      $("#contactValidity").html(
        "<span style='color: red;'>Enter 10 digit contact number</span>"
      );
    }
  });
});
$(document).ready(function () {
  $("#inputPassword").keyup(function () {
    if (checkPassword($("#inputPassword").val())) {
      $("#passwordValidity").html(
        "<span style='color: green;'> Valid ✔</span>"
      );
    } else {
      $("#passwordValidity").html(
        "<span style='color: red;'>Use atleast one uppercase, lowercase, number and special characters</span>"
      );
    }
  });
});

function checkPassword(pwd) {
  let pwdExpression =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/;
  if (pwdExpression.test(pwd)) {
    return true;
  } else {
    return false;
  }
}
function checkEmail(email) {
  let emailExpression = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  if (emailExpression.test(email)) {
    return true;
  } else {
    return false;
  }
}

function checkContact(contact) {
  let contactExpression = /^\d{10}$/;
  if (contactExpression.test(contact)) {
    return true;
  } else {
    return false;
  }
}
function checkName(name) {
  let nameExpression = /^[a-zA-Z\s]+$/;
  if (nameExpression.test(name)) {
    return true;
  } else {
    return false;
  }
}

$(document).ready(function () {
  // Add an event listener for form submission
  $("#loginForm").submit(function (event) {
    // Check all validation conditions
    if (
      !checkEmail($("#loginInputEmail").val()) ||
      $("#loginInputPassword").val().trim() == ""
    ) {
      if (!checkEmail($("#loginInputEmail").val()))
        $("#loginEmailValidity").html(
          "<span style='color: red;'>Enter valid E-mail</span>"
        );
      if ($("#loginInputPassword").val().trim() == "") {
        $("#loginPasswordValidity").html(
          "<span style='color: red;'>Enter your password</span>"
        );
      }
      event.preventDefault();
    }
  });
});

$(document).ready(function () {
  // Add an event listener for form submission
  $("form").submit(function (event) {
    // Check all validation conditions
    if (
      !checkEmail($("#registerEmail").val()) ||
      !checkName($("#inputName").val()) ||
      !checkContact($("#inputContact").val()) ||
      !checkPassword($("#inputPassword").val())
    ) {
      // Display error messages in red
      if (!checkEmail($("#registerEmail").val()))
        $("#registerEmailValidity").html(
          "<span style='color: red;'>Enter valid E-mail</span>"
        );
      if (!checkName($("#inputName").val()))
        $("#nameValidity").html(
          "<span style='color: red;'>Enter valid name</span>"
        );
      if (!checkContact($("#inputContact").val()))
        $("#contactValidity").html(
          "<span style='color: red;'>Enter 10 digit contact number</span>"
        );
      if (!checkPassword($("#inputPassword").val()))
        $("#passwordValidity").html(
          "<span style='color: red;'>Use at least one uppercase, lowercase, number, and special characters</span>"
        );

      // Prevent form submission if any validation fails
      event.preventDefault();
    }
  });
})(
  // Booking Form Validation

  () => {
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
  }
)();

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
