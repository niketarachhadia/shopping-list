$(document).ready(function(){
	 $("#js-shopping-list-form").submit(function(event) {
	  	var ul= $("ul");
		var li =$( "<li/>");
		var span=$("<span class='shopping-item'/>");
		var itemName= $("#shopping-list-entry").val();
		var div1=$("<div class='shopping-item-controls'/>");
		var button1=$("<button class='shopping-item-toggle'/>");
		var span1=$("<span class='button-label'/>");
		var buttonLabel1="check";
		var button2=$("<button class='shopping-item-delete'/>");
		var span2=$("<span class='button-label'/>");
		var buttonLabel2= "delete";

        span.append(itemName);
		li.append(span);
		
		span1.append(buttonLabel1);
		button1.append(span1);
		div1.append(button1);
		
		span2.append(buttonLabel2);
		button2.append(span2);
		div1.append(button2);
		li.append(div1);
		ul.append(li);

	    event.preventDefault();

 	 });

	 $('ul').on('click','.shopping-item-delete',function(event){
         $(this).closest("li").remove();

      });
  		
  	$('ul').on('click','.shopping-item-toggle',function(event){
         $(this).closest(".shopping-item").toggleClass('shopping-item__checked');
       //  $(this).parent().siblings('.shopping-item').toggleClass('shopping-item__checked');
  	});
         
});




