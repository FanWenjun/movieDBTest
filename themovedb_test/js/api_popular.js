
/***********popular_list*************/


$.getJSON("https://api.themoviedb.org/3/movie/popular?api_key=ddb907d69f1671fabdfd75c40b664a37&language=en-US&page=1", function(data){

    console.log(data.results[0].overview);


    for(var i=0; i<20; i++) {

        $('.popular_all_content').find('.popular_list_content').eq(i).children('a').children('img').attr('src','https://image.tmdb.org/t/p/w185_and_h278_bestv2/'+data.results[i].poster_path);
        $('.popular_all_content').find('.popular_list_content').eq(i).find('.popular_info_title').children('a').html(data.results[i].original_title);


        var month=['January','February','March','April','May','June','July','August','September','October','November','December'];

        var year_number=data.results[i].release_date.substring(0,4);
        var month_number=data.results[i].release_date.substring(5,7)-1;
        var date_number=data.results[i].release_date.substring(8,10);

        $('.popular_all_content').find('.popular_list_content').eq(i).find('.popular_info_title').children('span').html(month[month_number]+' '+date_number+', '+year_number);

        $('.popular_all_content').find('.popular_list_content').eq(i).find('.popular_info_content').html(data.results[i].overview);

        $('.popular_all_content').find('.popular_list_content').eq(i).find('.info_more').children('a').attr('title',data.results[i].original_title+'');


    }

});