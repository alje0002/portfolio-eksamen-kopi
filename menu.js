// fundet inspiration fra w3 schools https://www.w3schools.com/howto/howto_js_curtain_menu.asp
// Gør at width er 100% (viser det i fuld skærm) - onClick er i html menuen
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  // Gør at width er 0% (fjerner det igen) - onClick er i html menuen
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }