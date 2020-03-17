$(document).ready(function() {
    var source = $("#card-template").html();
    var cardTemplate = Handlebars.compile(source);

    $.ajax ({
        url:'https://flynn.boolean.careers/exercises/api/array/music',
        method:'GET',
        success: function(data) {
            var albums = data.response;
            // console.log(album);
            cardGenerator(albums);
        },

        error: function() {

        }
    });

    function cardGenerator(array) {
        for (var i = 0; i < array.length; i++) {
            var album = { albumPic:array[i].poster, albumTitle:array[i].title ,artistName:array[i].author,year:array[i].year,genre:array[i].genre };
            var filledTemplate = cardTemplate(album);
            $('.container').append(filledTemplate);
        };
    };
});
