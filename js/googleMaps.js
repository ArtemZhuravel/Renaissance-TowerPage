var geocoder = new google.maps.Geocoder();
      var address = document.getElementById("building-address").innerHTML;      
      function geo(address, geocoder) {
          var latitude;
          var longitude;
          geocoder.geocode( { 'address': address}, function(results, status) {

          if (status == google.maps.GeocoderStatus.OK) {                  
            latitude = results[0].geometry.location.lat();
            longitude = results[0].geometry.location.lng();                                            
          google.maps.event.addDomListener(window, 'load', function() {
            var mapOptions = {
               center:new google.maps.LatLng(latitude, longitude), 
               zoom:12, 
               mapTypeId:google.maps.MapTypeId.ROADMAP
            };
        
            var map = new google.maps.Map(document.getElementById("googleMap"),mapOptions);
            var marker = new google.maps.Marker({
                          position: new google.maps.LatLng(latitude, longitude),
                          map: map,
                          title: 'Hello World!'
                        });

          });
        }
        }); 
      }
      geo(address, geocoder);