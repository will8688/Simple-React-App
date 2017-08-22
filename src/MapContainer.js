import Google from 'load-google-maps';
 
Google({libraries: ['places']}, function (err, google) {
  //=> google.maps...   
})