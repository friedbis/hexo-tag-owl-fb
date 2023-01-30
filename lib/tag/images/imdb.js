'use strict';

const cheerio=require('cheerio-httpcli');

module.exports = (hexo, args) => {
    /* search */
    //console.log(args);
    let q=args[0];
    let showtype=args[1];
    let title=((q)=>{
        let titleArray=[];
        if(q.indexOf(" ")>0)
            titleArray=q.split(" ");
        else
            titleArray.push(q);
        let searchTitle="";
        for(let i=0;i<titleArray.length;i++){
            (i!=titleArray.length-1)?searchTitle+=titleArray[i]+'+':searchTitle+=titleArray[i];
        }
        return searchTitle;
    })(q);
    let movies=[];
    let searchurl='https://www.imdb.com/find';
    let searchoptions={
        s: 'tt',
        ttype: 'ft',
        ref_: 'fn_ft',
        q: title,
    };
    console.log('title: '+title);
    const result=cheerio.fetchSync(searchurl, searchoptions);
    if(result.error)
        return '<p><div class="owl-media owl-image owl-imdb"><img src="/assets/no-media.png" alt="no media"></div></p>';
    let $=result.$;
    //$('.findResult').each(async (i, element)=>{
    $('.find-result-item').each(async (i, element)=>{
        const $image = $(element).find('div.loIvFb div.ipc-media img.ipc-image');
        const $title = $(element).find('div.ipc-metadata-list-summary-item__c div.ipc-metadata-list-summary-item__tc a.ipc-metadata-list-summary-item__t');
        const imdbID = $title.attr('href').match(/title\/(.*)\//)[1];
        const movie = {
            image: $image.attr('src'),
            title: $title.text(),
            imdbID : imdbID
        };
        console.log(movie);
        movies.push(movie);
        return false;
    });
    console.log(movies);

    /* details */
    let detailurl='https://www.imdb.com/title/'+movies[0].imdbID+'/';
    let detailoptions={
        ref_:'fn_al_tt_1',
    };
    const result2=cheerio.fetchSync(detailurl, detailoptions);
    if(result2.error)
        return '<p><div class="owl-media owl-image owl-imdb"><img src="/assets/no-media.png" alt="no media"></div></p>';
    $=result2.$;
    //var articleChildren = $('.ipc-page-section--baseAlt').children()
    var movieDetails = {
        title : $('.ipc-page-section--baseAlt h1').text(),
        year: $('.ipc-page-section--baseAlt ul.ipc-inline-list li:first-child span').text(),
        rating : $('.ipc-page-section--baseAlt .ipc-button__text span:first-child').eq(0).text(),
        //votes : $('.imdbRating a span').text(),
        time: $('.ipc-page-section--baseAlt ul.ipc-inline-list li:nth-child(2)').eq(0).text(),
        poster : $('.ipc-page-section--baseAlt .ipc-media img').attr('src'),
        release : $('.ipc-page-section--baseAlt ul.ipc-inline-list li:first-child span').eq(0).text(),
        //story : $('.article .canwrap p span').text().trim(),
        //writtenBy : $('.article .canwrap em a').text()
        director : $('.ipc-page-section--baseAlt ul.ipc-metadata-list li:first-child ul li:first-child a').eq(0).text(),
    }

    if(showtype=='detail'){
        return '<p><div class="owl-media owl-image owl-imdb owl-imdb-detail"><img src="'+movieDetails.poster+'" alt="'+movieDetails.title+'"><div class="imdb-staff"><ul><li>Title: '+movieDetails.title+'</li><li>Rating: '+movieDetails.rating+'</li><li>Release Date: '+movieDetails.release+'</li><li>Time: '+movieDetails.time+'</li><li>Director: '+movieDetails.director+'</li></ul></div></div></p>';
    }else{
        return '<p><div class="owl-media owl-image owl-imdb"><img src="'+movieDetails.poster+'" alt="'+movieDetails.title+'"><div class="imdb-staff"><ul><li>Title: '+movieDetails.title+'</li><li>Release Date: '+movieDetails.release+'</li></ul></div></div></p>';
    }
}

