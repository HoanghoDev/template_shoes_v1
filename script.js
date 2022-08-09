$(document).ready(function(){
  var count_group = $(".list .item").length;
  var active = 0;
  function Load(){
    var bg =  $('#item_'+active).data('bg');
    var cl =  $('#item_'+active).data('cl');

    $('#item_'+(active - 1 < 0 ? count_group - 1 : active - 1)).removeClass('item_active');
    $('#item_'+(active - 1 < 0 ? count_group - 1 : active - 1)).addClass('item_none');

    $('#item_'+active).removeClass('item_none');
    $('#item_'+active).addClass('item_active');
    $('.bg-rotate').css('background', bg);
    $('.alphabets').css('color', cl);

    $('.dot div').removeClass('active');
    $('#dot_'+active).addClass('active');

    // content
    $('#content_'+active).css('opacity',1);
    $('#content_'+active).css('left',0);
    $('#content_'+(active-1 < 0 ? count_group - 1 : active  -1 )).css('left','-100%');
    $('#content_'+(active-1 < 0 ? count_group - 1 : active  -1 )).css('opacity','0');
    $('#content_'+(active - 2 == -1 ? count_group - 1 :active - 2 == -2 ? count_group - 2 : active - 2)).css('left','100%');
  }
  
  Load();
  $('#next').on('click', function(){
    active = active + 1 >= count_group ? 0 : active + 1;
    Load();
  })
  $('#prev').on('click', function(){
    active = active - 1 < 0 ? count_group - 1 : active - 1;
    Load();
  })
  });