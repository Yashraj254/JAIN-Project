$(document).ready(function(){
    var canClick = true; // A flag to control whether the button can be clicked
  
    $('.navbar-toggler').click(function(){
      if (canClick) {
        $('#nav-icon').toggleClass('open');
        canClick = false; // Disable further clicks
  
        // Enable the button after 350ms 
        setTimeout(function() {
          canClick = true;
        }, 350);
      }
    });
  });
  