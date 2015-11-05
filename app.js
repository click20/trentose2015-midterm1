/* your code should go in this file */

/* 
 * The data is available in the array *data*
 * Each element of the array has the following structure:
 *  {
 *    phrase_en : "I'm a man",        // sentence in english
 *    phrase_de : "Ich bin ein Mann"  // sentence in german
 *  }
 */ 
var index=0;
var score=0 ;

var tmpl = ' <li id="ID">' +
           '  <h3>SENTENCE</h3>' +
           ' </li> ';

$(document).ready(function(){
    
    
    $(".sentences").append(tmpl.replace("SENTENCE",data[0].phrase_en) ).addClass("current");
    index++;
    
    $(".btn opt-continue").click( function(event){
        index++;
        
       for(s=0; s<index; s++){
        $(".sentences li").removeClass("current");
       }
        
        $(".sentences").append(tmpl.replace("SENTENCE",data[index++].phrase_en) ); 
        
     if( $(".sentences").text() == data[index].phrase_de){
         score++;
     }  
        
    } )
    
    
    
});







