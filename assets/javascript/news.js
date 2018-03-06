$("#search").on("click", function() {
    var key = "67726612ab0c479680b5b6d8d68ac561";
    var searchTerm = $("#searchTerm").val();
    var beginYear = $("#startYear").val();
    var endYear = $("#endYear").val();
    
    if (beginYear !== undefined) {
        var beginDate = "&begin_date=" + beginYear + "0101";
    }
    else if(beginYear === undefined) {
        var beginDate = "";
    };
    if (endYear !== undefined) {
        var endDate = "&end_date=" + endYear +"1231";
    }
    else if(endYear === undefined) {
        var endDate = "";
    };

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +key+ 
        "&q=" + searchTerm + beginDate +endDate;
        
    console.log(url);
        
    $.ajax({
        url: url,
        method: 'GET',
    }).then(function(response) {
        console.log(response.response.docs);
    
    });
});    
