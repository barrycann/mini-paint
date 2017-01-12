$('document').ready(function(){
   var color = 'white';
   var colors = ['red', 'green', 'blue', 'yellow', 'white']

   var $box = $('.box');
   var $reset = $('#reset');
   var $span = $('span');
   
   var mouseIsDown = false;

   $('body').on('mousedown', function(){
      mouseIsDown = true;
   });

   $('body').on('mouseup', function(){
      mouseIsDown = false;
   });

   $span.on('click', function(){
      color = ($(this).html()).toLowerCase();
      setColor(color);
   });

   $reset.on('click', wipeIt);

   $box.on('mouseover', function(){
      if(mouseIsDown){
         $(this).addClass(color);
      }
   });

   $box.on('click', function(){
      $(this).addClass(color);
   });

   $box.on('dblclick', function(){
      $(this).removeClass(color);
   });
   
   function setColor(col){
      color = col;
   }

   function wipeIt(){
      for(var i=0;i<colors.length;i++){
         $box.removeClass('' + colors[i] + '');
      }
   }
});

