// aos
AOS.init({
    duration: 1200 
  })


//gnb
$(document).ready(function(){

  $('.open').click(function(){

      $('#m_gnb').show(300);
      $('.open').hide();
  });

  $('.close').click(function(){

      $('#m_gnb').hide(300);
      $('.open').show();
  });

});