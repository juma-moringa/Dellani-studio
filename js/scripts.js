// toggle effect
$(document).ready(function(){
    $("#toggler").click(function(){
      $("#design-image").toggle();
      $("#design").toggle();
    });
  });
  $(document).ready(function(){
    $("#toggler2").click(function(){
      $("#development-image").toggle();
      $("#development").toggle();
    });
  });
  $(document).ready(function(){
    $("#toggler3").click(function(){
      $("#product-image").toggle();
      $("#product").toggle();
    });
  }); 

// hoover effect
  $(document).ready(function(){
    $("#work1").mouseover(function(){
      $("#overlay").show();
    }).mouseout(function(){
      $("#overlay").hide();
    });
  });
  $(document).ready(function(){
    $("#work2").mouseover(function(){
      $("#overlay1").show();
    }).mouseout(function(){
      $("#overlay1").hide();
    });
  });

  $(document).ready(function(){
    $("#work3").mouseover(function(){
      $("#overlay2").show();
    }).mouseout(function(){
      $("#overlay2").hide();
    });
  });
   $(document).ready(function(){
    $("#work4").mouseover(function(){
      $("#overlay3").show();
    }).mouseout(function(){
      $("#overlay3").hide();
    });
  });
  $(document).ready(function(){
    $("#work5").mouseover(function(){
      $("#overlay4").show();
    }).mouseout(function(){
      $("#overlay4").hide();
    });
  });
  $(document).ready(function(){
    $("#work6").mouseover(function(){
      $("#overlay5").show();
    }).mouseout(function(){
      $("#overlay5").hide();
    });
  });
  $(document).ready(function(){
    $("#work7").mouseover(function(){
      $("#overlay6").show();
    }).mouseout(function(){
      $("#overlay6").hide();
    });
  });
  $(document).ready(function(){
    $("#work8").mouseover(function(){
      $("#overlay7").show();
    }).mouseout(function(){
      $("#overlay7").hide();
    });
  });



// mailchimp function
  (function($) {window.fnames = new Array(); 
    window.ftypes = new Array();
    fnames[0]='EMAIL';
    ftypes[0]='email';
    fnames[1]='FNAME';
    ftypes[1]='text';
    fnames[3]='ADDRESS';
    ftypes[3]='address';
    fnames[4]='PHONE';
    ftypes[4]='phone';
  }(jQuery));
    var $mcj = jQuery.noConflict(true);


    // alert function
    $(document).ready(function(){
      $("form#formsubmit").submit(function(event){
         event.preventDefault();
        var name = $("input#MERGE1").val();
        var email = $("input#MERGE0").val();
        var message = $("textarea#comment").val();
        if ($("input#MERGE1").val() && $("input#MERGE0").val()){
          alert (name + ",Delani Studio  has recieve you message.We will get back to you soon.Keep it Delani studio always. Thanks for your feedback.:)");
        }
        else {
          alert("Please enter a valid email and name!");
        }
        
      });
    
    });
  