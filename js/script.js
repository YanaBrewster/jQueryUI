// console.log("hello");

// $( function() {
//     $( "#draggable" ).draggable({
//        axis: "y"
//     });
//   } );

  $( function() {
   $( "input" ).checkboxradio();
 } );

 $( function() {
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  } );
