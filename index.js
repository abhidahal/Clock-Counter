function setTime() {
  const timeer = document.getElementById("ab1354").value;
  let [h, m] = timeer.split(":");
  console.log(timeer);
  const time = date(0, Number(h), Number(m), 0);
  const twoDaysFromNow = time;
  const flipdown = new FlipDown(twoDaysFromNow).start().ifEnded(() => {
    console.log("The countdown has ended!");
  });

  // const ver = document.getElementById("ver");
  // ver.innerHTML = flipdown.version;
}
function date(days, hours, minute, sec) {
  const a =
    new Date().getTime() / 1000 +
    60 * 60 * 24 * days +
    60 * 60 * hours +
    60 * minute +
    sec;
  return a;
}
