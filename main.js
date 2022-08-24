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
      var secNum= parseInt(secString.innerText[3]);
        var secNumNext=secNum+1
        var secNextString=secNumNext.toString()
        var addressNext= `./S${secNextString}.html`
        window.location.assign(addressNext)
      }
      
      function prevS() {
        var secString = document.getElementById("Sec");
        var secNum= parseInt(secString.innerText[3]);
          var secNumPrev=secNum-1
          var secPrevString=secNumPrev.toString()
          var addressPrev= `./S${secPrevString}.html`
          window.location.assign(addressPrev)
        }
  
  