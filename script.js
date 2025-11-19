function lomake() {
    let nimi = document.getElementById("nimi").value;
    let sposti = document.getElementById("email").value;
    let radiob = document.getElementsByName("lisaa");
    let boxit = document.getElementsByName("tama");
   let valikko = document.getElementById("tieto").selectedIndex;
    let valikonValinta = document.getElementById("tieto").options;
    
    let muuttuja = "Toivoisit lisää: ";
    let muuttuja2 = "Ajattelet sivusta: ";
    let valinta = "Löysitkö etsimäsi: ";

    for (let i = 0, length = radiob.length; i < length; i++) {
        if (radiob[i].checked) {
            muuttuja += radiob[i].value;
        break;
        }
    }
    for (let i = 0, length = boxit.length; i < length; i++) {
        if (boxit[i].checked) {
            muuttuja2 += boxit[i].value +",";
        
        }
    }
    valinta += valikonValinta[valikko].text;

    document.getElementById("vastaus").innerHTML="Hei "+nimi+",<br> Sähköpostiosoitteesi on " +sposti+ ".<br>" +muuttuja + ".<br>"+ muuttuja2+ ".<br>" + valinta;

}
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.dropdown-menu a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);

      // Avaa accordion vain jos kohde on haitarin collapse-osio
      if (target && target.classList.contains("collapse")) {
        const collapse = new bootstrap.Collapse(target, {
          toggle: true
        });
      }
    });
  });
});

document.addEventListener("shown.bs.tab", function (event) {
  const iframe = event.target.parentNode.querySelector("iframe");
  if (iframe) {
    const src = iframe.src;
    iframe.src = src; // resetoi videon oikeaan kokoon
  }
});