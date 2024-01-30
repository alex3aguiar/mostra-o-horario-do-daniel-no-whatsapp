if(window.location.hostname ==  'web.whatsapp.com' ){
  setInterval(function () {
    let nomeDoDaniel = "Dan Ni";
    let danieis = [...document.querySelectorAll('._3FuDI[aria-label]')].filter(a => {
      return a.innerText == (nomeDoDaniel) || a.innerText.includes(nomeDoDaniel)
    });
    danieis.forEach(daniel => {
      var dataBerlim = new Date();
      var horaBerlim = dataBerlim.toLocaleString('en-US', { timeZone: 'Europe/Berlin' });
      daniel.innerText = nomeDoDaniel + "  "+ horaBerlim
  
    });
  
  }, 10000);
}