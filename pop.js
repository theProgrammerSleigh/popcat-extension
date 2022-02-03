let auto = false;

let div = document.createElement('div');
div.id = "sonicDiv";
div.classList = "sonic-div";
div.innerHTML = `<img src="/img/popcat.4158e1f3.svg" alt="POPCAT" class="title">`;

document.querySelector('.title').replaceWith(div);

let btn = document.createElement("button");
btn.textContent = "SonicPop (Click Me)";
btn.classList = 'sonic-pop';
btn.onclick = (ev) => {
	auto = !auto;
	console.log(auto ? 'Gotta Go Fast!!!' : 'Okay I guess I will stop for now');
}
	
document.querySelector('#sonicDiv').appendChild(btn);

let event = new KeyboardEvent('keydown', {
	key: 'g'
});
setInterval(function(){
	if (auto) {
	for (i = 0; i < 100; i++) {
		document.dispatchEvent(event);
	}}
}, 0);