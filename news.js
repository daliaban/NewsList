/**
 * Created by dalia on 16/06/16.
 */
'use strict';

_.templateSettings.variable = "rc";

jQuery('.newslist').click(function(e){
    var url = "http://content.guardianapis.com/search?api-key=9wur7sdh84azzazdt3ye54k4";
    var query = 'uk%20news';
    e.preventDefault();
    $(e.target).parent().siblings().removeClass('active');
    $(e.target).parent().addClass('active');

    if ($(e.target).is('#news')){
        query = 'uk%20news';
    } else if ($(e.target).is('#football')){
        query = 'football';
    } else if ($(e.target).is('#travel')){
        query = 'travel';
    }
    url = url + '&q=' + query;

    $.ajax({
        type: 'get',
        url: url,
        success: function(data){
            var items = data.response;
            var template = _.template($('#newsTableContent').html());
            $('#newscontent').empty().append(template(items));
        },
        error: function(xhr){
            var errorText = xhr.responseText;
            $('#newscontent').empty().append(errorText);
        }
    })
});

$(document).ready(function(){
        jQuery('#news').click();
});
