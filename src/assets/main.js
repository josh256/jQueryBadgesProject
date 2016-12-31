$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/joseam.json',
    dataType: 'jsonp',
    success: function(response) {

      let badges = $('#badges');

      $.each( response.courses.completed, function( key, obj ) {
        //console.log( key + ": " + obj.title );

        let divEle = $("<div/>", {
          class: 'course'
        });

        let h3Ele = $("<h3/>", {
          text: obj.title
        });

        let imgEle = $("<img/>", {
          src: obj.badge
        });

        let aEle = $("<a/>", {
          href: obj.url,
          target: '_blank',
          class: 'btn btn-primary',
          text: 'See Course'
        });

        //div
        divEle.append(h3Ele);
        divEle.append(imgEle);
        divEle.append(aEle);

        //badge
        badges.append(divEle);

      });

    }
  });

});
