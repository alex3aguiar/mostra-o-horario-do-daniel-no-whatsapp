if(window.location.hostname ==  'web.whatsapp.com' ){
  setInterval(function () {
    let nomeDoDaniel = "Dan Ni";
    let danieis = [...document.querySelectorAll('._3FuDI[aria-label]')].filter(a => {
      return a.innerText == (nomeDoDaniel) || a.innerText.includes(nomeDoDaniel)
    });
    danieis.forEach(daniel => {
      var dataBerlim = new Date();
      let horaDaMensagem = daniel.parentNode.parentElement.childNodes[2].innerText
      let [hora, min ]= horaDaMensagem.split(":")
      dataBerlim.setHours(hora, min, 0, 0);

      var horaBerlim = dataBerlim.toLocaleString('pt-BR', { timeZone: 'Europe/Berlin' });
      daniel.parentElement.parentElement.firstChild.innerHTML = daniel.parentElement.parentElement.firstChild.innerHTML.split("</span>")[0] + "</span>" +
      `<span dir="auto" aria-label="" style="min-height: 0px;font-size: small;color: grey;margin-left: 1rem;">${horaBerlim}</span>`  
    });
  
  }, 10000);
}
