$(function() {

// Loads stories on the change of the headline
$('.headline').on('change', function() {
  var selection = $('.headline').val();

// Clears previous stories when switching headlines
  $('.stories').empty();

// Gets the api for NYT
   $.ajax({
      method: 'GET',
      url: 'http://api.nytimes.com/svc/topstories/v1/'+selection+'.json?api-key=6fa93f85b280dcf9c3e43f93642ef722:18:75124092'
   })
   .done(function(data) {

// Cuts off the api to only return 12 stories
     var nytData = data.results
      nytData = nytData.filter(function(item){
          return item.multimedia.length > 0;
      }).splice(0, 12);


      nytData.forEach(function(item, index) {
// Makes story text (value.abstract)) into a url leading to the story page (value.url)
          $('.stories').append('<div class= "content-' + index + '"> <div class= "text"> <a href= "' + item.url + '"> ' + item.abstract + '</a> </div> </div>')
// Links Image into Content div

           img = item.multimedia[4];
           $('.content-' + index).css("background-image", "url('" + img.url + "')");


        });
      });
    });
});

// var nytData = data.results,
//                 articleLink,
//                 articleCaption,
//                 articleImageUrl;
//
// // Append the stories if we found any
// if (nytData.length !== 0) {
//
// // make sure we only get populate the grid with 12 stories with photos
//
// nytData = nytData

//         nytItems += '<ul>';
//
//         $each(nytData, function(key, value) {
//
//           articleImageUrl = value.multimedia[4].url;
//           articleCaption = value.abstract;
//           articleLink = value.url;
//
//           nytItems +=
//           nytItems +=
//           nytItems +=
//           nytItems +=
//         });
// }
