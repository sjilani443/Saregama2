jQuery(document).ready(function($) {
    $(".main-body .card").click(function() {
      console.log("card clicked");
      // Define and assign values to mainDiv and albumsDiv variables
      var mainDiv = $(".main-body");
      var albumsDiv = $(".albums");
  
      // Check the display property of mainDiv and toggle the display of mainDiv and albumsDiv accordingly
      if (mainDiv.css('display') === 'none') {
        mainDiv.css('display', 'flex');
        albumsDiv.css('display', 'none');
        console.log("switchhh");
      } else {
        mainDiv.css('display', 'none');
        albumsDiv.css('display', 'flex');
      }
  
      var index1 = $(this).index(".card") + 1;
      console.log(index1);
      $("#index1").text(index1);
    
      console.log("Redirecting to index.php?number=" + index1);
      var newUrl = window.location.href + "&number=" + index1;
        
        window.history.pushState({ path: newUrl }, '', newUrl);
    });
  });
  