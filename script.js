/**
 * Created by Caio on 03/09/2015.
 */
$(document).delegate("#index", "pageinit", function(){
   $('#tab1').addClass("ui-btn-active");
   refresh_list();
});

// esta funcao refresh lista e delega metodo de click para cada item.
function refresh_list(){
   for(var i=1; i<5; i++){
      var lista = $( "#lista-"+i );
      console.log(lista);
      lista.promise().done(function () {
         //refresh list here
         $(this).listview("refresh");
         //then add click event using delegation
         $(this).on("click", "li", function () {
            $.mobile.navigate('#view_item');
         });
      });
   }
}