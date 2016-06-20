$(function() {

// Loads gif and stories on the change of the headline
$('.headline').on('change', function() {

  $('.loading-gif').show();
  var selection = $('.headline').val();

 $('.nytlogo').toggleClass('nytlogo-change');
 $('.normal').toggleClass('load')

// Gets the api for NYT
   $.ajax({
      method: 'GET',
      url: 'http://api.nytimes.com/svc/topstories/v1/'+selection+'.json?api-key=6fa93f85b280dcf9c3e43f93642ef722:18:75124092'
   })
   .done(function(data) {

// Makes sure stories don't load multiple times
    $('.stories').empty();

// Show no results for Science
    if (data.results.length === 0) {
      $('.stories').append('<p class= "error"> Sorry, nothing found! Please try again. </p>')
    } else {

// Cuts off the api to only return 12 stories
     var nytData = data.results
      nytData = nytData.filter(function(item){
          return item.multimedia.length;
      }).splice(0, 12);

      nytData.forEach(function(item, index) {
// Makes story text (value.abstract)) into a url leading to the story page (value.url)
          $('.stories').append('<div class= "images content' + index + '"> <div class= "text"> <a href= "' + item.url + '"> ' + item.abstract + '</a> </div> </div>')
// Links Image into Content div
           img = item.multimedia[4];
           $('.content' + index).css("background-image", "url('" + img.url + "')");


        });

// Hides the loading gif
      };
    }).always(function() {
                    $('.loading-gif').hide();
});
});
});
