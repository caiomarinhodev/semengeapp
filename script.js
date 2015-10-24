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
            //$.mobile.navigate('#view_item');
         });
      });
   }
}


/**
 * Created by Caio on 18/10/2015.
 */
function validateEmail(a) {
   var o = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return o.test(a)
}
//function postContactToGoogle() {
//    var a = $("#email").val();
//    "" !== a && validateEmail(a) && $.ajax({
//        url: "https://docs.google.com/forms/d/1S9gbOowiQ-TalLDdIeYoPf5Nqyy60aYGx3JSpNatOZc/formResponse",
//        data: {"entry.505346081": a},
//        type: "POST",
//        dataType: "xml",
//        statusCode: {
//            0: function () {
//                console.log($("#email").text())
//            }, 200: function () {
//                console.log($("#email").text())
//            }
//        }
//    })
//}
function postFormToGoogle() {
   var a = $("#nome").val(), o = $("#comentario").val();
   "" !== o && $.ajax({
      url: "https://docs.google.com/forms/d/1ngPrhbQFA-8hZ7p75tBr9qf0AxuNrf2pwf7RfwxDcDA/formResponse",
      data: {"entry_1417058320": a, "entry_391821953": o},
      type: "POST",
      dataType: "xml",
      statusCode: {
         0: function () {
         }, 200: function () {
         }
      }
   }).done(function( html ) {
      console.log(html);
      window.location = 'index.html'
   }).error(function(data){
      console.log(data);
   });
}