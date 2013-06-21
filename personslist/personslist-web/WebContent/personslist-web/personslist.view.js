sap.ui.jsview("personslist-web.personslist", {

      getControllerName : function() {
         return "personslist-web.personslist";
      },

      createContent : function(oController) {
    	  
    	  // create the button instance
    	  var myButton = new sap.ui.commons.Button("btn");

    	  // set properties, e.g. the text (there is also a shorter way of setting several properties)
    	  myButton.setText("Hello World!");

    	  // attach an action to the button's "press" event (use jQuery to fade out the button)
    	  myButton.attachPress(function(){$("#btn").fadeOut();});

    	  return myButton;

      }

});
