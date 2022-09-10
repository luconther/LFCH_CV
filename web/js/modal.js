(function(){
    $(function(){

        $('#btn-modal').on('click',function(){
            $('#modal1').modal();
        });
    });
}());

$(document).keydown(function(event) { 
    if (event.keyCode == 27) { 
      $('#modal1').modal('hide');
    }
  });