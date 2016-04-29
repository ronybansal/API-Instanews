var nytData = data.results,
                articleLink,
                articleCaption,
                articleImageUrl;

// Append the stories if we found any
if (nytData.length !== 0) {

// make sure we only get populate the grid with 12 stories with photos

nytData = nytData
        .filter(function(item){
                return item.multimedia.length;
        }).splice(0, 12);

        nytItems += '<ul>';

        $each(nytData, function(key, value) {

          articleImageUrl = value.multimedia[4].url;
          articleCaption = value.abstract;
          articleLink = value.url;

          nytItems +=
        }
