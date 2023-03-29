async function fetchAdvice() {
    let url = 'https://api.adviceslip.com/advice';
    try{
      let res = await fetch(url);
      return await res.json();
    } catch(error){
      console.log(error);
    }
  }

  async function getAdvice() {
    let msg = await fetchAdvice();
    let id = msg.slip.id;
    let advice = msg.slip.advice;
    
    let id_tag = `advice #${id}`
    let advice_tag = `<p class="advice-text">“${advice}”</p>`;
    
    let id_container = document.querySelector(".advice-id");
    let container = document.querySelector(".fillme");
    id_container.innerHTML = id_tag;
    container.innerHTML = advice_tag;
  }

  window.onload = getAdvice;