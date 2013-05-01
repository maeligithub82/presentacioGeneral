/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_taller}", "click", function(sym, e) {
         window.location.href = "#";

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_icono_portal}", "click", function(sym, e) {
window.location.href = "#";

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_mc_mate2}", "click", function(sym, e) {
          window.location.href = "#";

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mc_espanol2}", "click", function(sym, e) {
         window.location.href = "#";

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_ico_prese}", "click", function(sym, e) {
         window.location.href = "#";

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_educacion}", "click", function(sym, e) {
         window.location.href = "mapaCurricular/index_libros.html";
		 

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mate1}", "click", function(sym, e) {
         window.location.href = "mate_primaria/index.html";
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cienciasnatu}", "click", function(sym, e) {
         window.location.href = "ciencias_primaria/index.html";
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_espanol}", "click", function(sym, e) {
         window.location.href = "#";

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cienciasnatu_2}", "click", function(sym, e) {
         window.location.href = "#";

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_educacion_basica_sec}", "click", function(sym, e) {
         window.location.href = "../index.html";

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'mc_espanol1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_espanol}", "click", function(sym, e) {

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 90, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("mc_espanol1");
   //Edge symbol end:'mc_espanol1'

   //=========================================================
   
   //Edge symbol: 'mc_mate1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_mate1}", "click", function(sym, e) {
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 145, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("mc_mate1");
   //Edge symbol end:'mc_mate1'

   //=========================================================
   
   //Edge symbol: 'mc_espanol2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_espanol2}", "click", function(sym, e) {
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23000, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 125, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("mc_espanol2");
   //Edge symbol end:'mc_espanol2'

   //=========================================================
   
   //Edge symbol: 'mc_mate2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_mate2}", "click", function(sym, e) {

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 100, function(sym, e) {
         // introducir código aquí
      });
      //Edge binding end

   })("mc_mate2");
   //Edge symbol end:'mc_mate2'

})(jQuery, AdobeEdge, "EDGE-24649434");