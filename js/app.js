var log = $('#log');

routie({
    '': function() {
      console.log("Home Page")
    },
    ':name': function(name) {
      $('#container').load('./js/tpl/' + name + '.html', function(response, status, xhr){
        if(status === 'error'){
          $(this).html('<h1 class="error">' + status + '</h1>');
        } else {
          var marks = $('.marked').text();
          var showdown = new Showdown.converter();
          $('.marked').empty();
          $('div[data-xray]').html(showdown.makeHtml(marks));
          $('div[data-xray]').xray();
        }
      });
      log.text(name)
    }
});

$(function(){
  
});
