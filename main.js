$(document).ready(function() {
    $("button.respButton").click(function() {
         $(this).next("div.resp-box").toggle();
    });
  });
  
    function myFunction() {
    var elementInfo = document.querySelectorAll("div.info-box");
    var elementDef= document.querySelectorAll("div.definicion-box");
    var elementEjer=document.querySelectorAll("div.ejercicio-box");
    var elementNota=document.querySelectorAll("div.nota-box");
    var elementTeo=document.querySelectorAll("div.teorema-box");
    var elementResp=document.querySelectorAll("div.resp-box");
    var elementProp=document.querySelectorAll("div.prop-box");
    var elementQuiz=document.querySelectorAll("div.quiz-box");
    var elementCoro=document.querySelectorAll("div.coro-box");
    document.body.classList.toggle("fondo-body-dark");
    document.querySelector("nav.top-nav").classList.toggle("top-nav-dark");
    var i;
    for (i=0; i < elementInfo.length; i++ ){
    elementInfo[i].classList.toggle("info-box-dark");
      };
    for (i=0;i < elementDef.length;i++){
      elementDef[i].classList.toggle("definicion-box-dark");
    };
    for (i=0;i < elementEjer.length;i++){
      elementEjer[i].classList.toggle("ejercicio-box-dark");
    };
    for (i=0;i < elementNota.length;i++){
      elementNota[i].classList.toggle("nota-box-dark");
    };
    for (i=0;i < elementTeo.length;i++){
      elementTeo[i].classList.toggle("teorema-box-dark");
    };
    for (i=0;i < elementResp.length;i++){
      elementResp[i].classList.toggle("resp-box-dark");
    };
    for (i=0;i < elementProp.length;i++){
      elementProp[i].classList.toggle("prop-box-dark");
    };
    for (i=0;i < elementQuiz.length;i++){
      elementQuiz[i].classList.toggle("quiz-box-dark");
    };
    for (i=0;i < elementCoro.length;i++){
      elementCoro[i].classList.toggle("coro-box-dark");
    };
    };

    /// 
    
    function nextS() {
      var secString = document.getElementById("Sec");
      var cleanSecString=secString.innerText.replace(/[§ ]/g,"")
      var secNum= parseInt(cleanSecString);
      //var secNum= parseInt(secString.innerText[3]);
        var secNumNext=secNum+1
        var secNextString=secNumNext.toString()
        var addressNext= `./S${secNextString}.html`
        window.location.assign(addressNext)
      }
      
      function prevS() {
        var secString = document.getElementById("Sec");
        var cleanSecString=secString.innerText.replace(/[§ ]/g,"")
        var secNum= parseInt(cleanSecString);
        //var secNum= parseInt(secString.innerText[3]);
          var secNumPrev=secNum-1
          var secPrevString=secNumPrev.toString()
          var addressPrev= `./S${secPrevString}.html`
          window.location.assign(addressPrev)
        }
  
  /////// Para hacer referencias automáticas entre elementos en distintas páginas

  $(document).ready(function() {
    // Función para extraer el número de sección de un documento
    function getSectionNumber(doc) {
        let styleText = $(doc).find('style').text();
        let match = styleText.match(/sectionCounter (\d+)/);
        return match ? parseInt(match[1]) + 1 : 0;
    }

    // Función para procesar cada enlace de referencia
    $('a.ref').each(function() {
        let $link = $(this);
        let fullHref = $link.attr('href');
        let parts = fullHref.split('#');
        let fileName = parts[0]; // Ej: "S2.html"
        let targetId = parts[1]; // Ej: "Ejer:TripleProducto"

        // CASO 1: Referencia en la misma página
        if (fileName === "" || fileName === window.location.pathname.split('/').pop()) {
            let sectionNum = getSectionNumber(document);
            updateLinkText($link, $(document), targetId, sectionNum);
        } 
        // CASO 2: Referencia a otra página
        else {
            $.get(fileName, function(data) {
                // Creamos un documento temporal en memoria para buscar
                let $externalDoc = $($.parseHTML(data));
                let sectionNum = getSectionNumber($externalDoc);
                updateLinkText($link, $externalDoc, targetId, sectionNum);
            });
        }
    });

    function updateLinkText($link, $doc, id, sectionNum) {
        // Buscamos el elemento con el ID
        let $target = $doc.find('#' + id);
        if ($target.length === 0) {
            // Si no tiene ID el contenedor, buscamos si el number-title lo tiene
            $target = $doc.find('h2.number-title#' + id).closest('div[class$="-box"]');
        }

        if ($target.length > 0) {
            // Buscamos qué posición ocupa este cuadro en la página
            let allBoxes = $doc.find('.definicion-box, .teorema-box, .ejercicio-box, .prop-box, .nota-box');
            let index = allBoxes.index($target) + 1;
            
            // Obtenemos el nombre (Teorema, Proposición, etc.)
            let type = $target.find('h2.number-title').first().contents().filter(function() {
                return this.nodeType === 3; // Solo el texto, no el número
            }).text().trim();

            $link.text(type + " " + sectionNum + "." + index);
        } else {
            $link.text("Ref no encontrada");
        }
    }
});