var video;
var volume;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay=false;
	video.loop=false;
	console.log('auto play is set to '+video.autoplay);
	console.log('loop is set to '+video.loop);
	volume = document.querySelector("#volume");
    volume.innerHTML = video.volume * 100 + "%";
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volume.innerHTML = video.volume * 100 + "%";
});
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("Slow Video Down", video.playbackRate);
});
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("Speed Video Up", video.playbackRate);
});
document.querySelector("#skip")