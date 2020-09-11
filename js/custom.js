
var $grid = $('.property_container').isotope({
    itemSelector: '.property_wrapper'
  });
  
  // store filter for each group
  var filters = {};
  
  $('.filters').on( 'click', '.button', function( event ) {
    var $button = $( event.currentTarget );
    // get group key
    var $buttonGroup = $button.parents('.button-group');
    var filterGroup = $buttonGroup.attr('data-filter-group');
    // set filter for group
    filters[ filterGroup ] = $button.attr('data-filter');
    // combine filters
    var filterValue = concatValues( filters );
    // set filter for Isotope
    $grid.isotope({ filter: filterValue });
  });
  
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function( event ) {
      alert('here')
      // $buttonGroup.find('.is-checked').removeClass('is-checked');
      // var $button = $( event.currentTarget );
      // alert($button);
      // $button.addClass('is-checked');
    });
  });
    
  // flatten object by concatting values
  function concatValues( obj ) {
    var value = '';
    for ( var prop in obj ) {
      value += obj[ prop ];
    }
    return value;
  }


  var $window = $(window);
 
  $(window).on('scroll', function() {
      $topOffset = $(this).scrollTop();
   
      console.log($topOffset);
   
  });

  $('.red').on('click' , function(event){
    event.currentTarget.addClass('blue')
  }) ;
  