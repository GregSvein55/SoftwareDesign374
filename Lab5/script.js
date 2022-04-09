$(document).ready( () => { 
    
    $( "#add" ).click( () => {
        
        let nTask = $('input[name=newTask]').val();


        $( "#enterTask" ).before( "<div class='input-group mb-3' id= 'unclaimed'><input type='text' class='form-control' name = 'unclaimed' disabled value = " + nTask + " > <div class='input-group-append'><button class='btn btn-outline-secondary' type='button' id='claim'>Claim</button></div></div>" );
        


    });
    

    $('body').on('click', '#claim', function() {

        let uTask = $('input[name=unclaimed]').val();

        $( "#elseUnclaimed" ).after("<div class='input-group mb-3' id='claimed'><div class='input-group-prepend'><div class='input-group-text'><input type='checkbox' id ='box' ></div></div><input type='text' id ='claimedTask' class='form-control' name='claimedTask' value=" + uTask + " disabled><div class='input-group-append'><button class='btn btn-outline-secondary' type='button' id='abandon'>Abandon</button></div></div>");

        $( "#unclaimed" ).remove();

    });

    $('body').on('click', '#box', function() {

        if($("#box").is(':checked')){
            $( "#abandon" ).remove();

            $( "#claimedTask" ).css( "text-decoration-line", "line-through" );


        }
        else{
            $( "#claimed" ).append("<div class='input-group-append'><button class='btn btn-outline-secondary' type='button' id='abandon'>Abandon</button>")

            $( "#claimedTask" ).css( "text-decoration-line", "none" );
        }
        

    });

    $('body').on('click', '#abandon', function() {

        let cTask = $('input[name=claimedTask]').val();

        $( "#enterTask" ).before("<div class='input-group mb-3' id= 'unclaimed'><input type='text' class='form-control' name = 'unclaimed' disabled  value = " + cTask + " > <div class='input-group-append'><button class='btn btn-outline-secondary' type='button' id='claim'>Claim</button></div></div>");

        $( "#claimed" ).remove();
        
    });


    $('body').on('click', '#remove', function() {

        if($("#box").is(':checked')){
            $( "#claimed" ).remove();
        }
       
        

    });







   });
