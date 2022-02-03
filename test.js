let event = new KeyboardEvent('keydown', {
	key: 'g'
});
setInterval(function(){
	for (i = 0; i < 100; i++) {
		document.dispatchEvent(event);
	}
}, 0);