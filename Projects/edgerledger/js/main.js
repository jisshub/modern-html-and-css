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
  
//   // Sticky menu background
//   window.addEventListener('scroll', function() {
//     if (window.scrollYAIzaSyA1n5JTf1-sbNndXSx-PX9210RRZIj2Wq4 > 150) {
//       document.querySelector('#navbar').style.opacity = 0.9;
//     } else {
//       document.querySelector('#navbar').style.opacity = 1;
//     }
//   });
  
  
//   // Smooth Scrolling
//   $('#navbar a, .btn').on('click', function(event) {
//     if (this.hash !== '') {
//       event.preventDefault();
  
//       const hash = this.hash;
  
//       $('html, body').animate(
//         {
//           scrollTop: $(hash).offset().top - 100
//         },
//         800
//       );
//     }
//   });