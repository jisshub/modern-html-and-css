// Initialize and add the map
function initMap() {
    // Your location
    const loc = { lat: 10.184909, lng: 76.375305 };
    // Centered map on location
    // here document.queryselector is targeting the map class in index.html file
    const map = new google.maps.Map(document.querySelector('.map'), {
      zoom: 14,
      center: loc
    });
    // The marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map: map });
  }
  
   // Sticky menu background
  // in js there is a window obj, which is the whole browser.
  // & when v scroll down the browser more than 150 then opacity of navbar is set to 0.9.
  // and if not scroll more than 150, opacity is set to 1, which means not transparent
  window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
      document.querySelector('#navbar').style.opacity = 0.9;
    } else {
      document.querySelector('#navbar').style.opacity = 1;
    }
  });
  
  
  // Smooth Scrolling
  // here v implement smooth scrolling on navbars and .btn class

  $('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100
        },
        800
      );
    }
  });