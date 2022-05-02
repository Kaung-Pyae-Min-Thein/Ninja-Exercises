const clock = document.querySelector('.clock');



const tick = _ => {
  const now = new Date();
  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();
  const Html = `<span>${hour}</span> :
                <span>${min}</span> : 
                <span>${sec}</span>`;
  clock.innerHTML = Html;
};

setInterval(tick, 1000);