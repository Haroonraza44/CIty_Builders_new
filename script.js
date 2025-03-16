// Animate Smooth Scroll
$('#view-work').on('click', function() {
    const images = $('#projects').position().top;
  
    $('html, body').animate(
      {
        scrollTop: images
      },
      900
    );
  });
  