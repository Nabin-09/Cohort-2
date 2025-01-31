let ctr = 0;
function callback(){
  //  console.log(ctr);
  //  ctr++;
  const el = document.querySelectorAll("h4")[1]
  el.innerHTML = ctr;
  ctr++;
}
setInterval(callback,1000);//setInterval keeps calling it at an interval of 1s