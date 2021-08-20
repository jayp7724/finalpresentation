$(document).ready(function(){

    var database = firebase.database();

    var ref = database.ref("message")

    $("button").on("click", function(){
        let name = $("#name").val();
        let message = $("#message").val();

        var item = {
            sender : name,
            text : message
        }

        // console.log(item);
        
        ref.push(item);
    });

    ref.on("value", function( snapshot) {
        $(".list-group").empty();   
        snapshot.forEach( function (childSnapshot){

            var messsage = childSnapshot.val();

            $(".list-group").append(` <li class="list-group-item"> <strong>${messsage.sender}:</strong>  Message: ${messsage.text}  </li>`);
            // console.log(messsage);

        });
    });



});