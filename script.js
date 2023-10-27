$(document).ready(function(){
    var canClick = true; // A flag to control whether the button can be clicked
  
    $('#nav-icon').click(function(){
      if (canClick) {
        $(this).toggleClass('open');
        canClick = false; // Disable further clicks
  
        // Enable the button after 350ms 
        setTimeout(function() {
          canClick = true;
        }, 350);
      }
    });
  });
  