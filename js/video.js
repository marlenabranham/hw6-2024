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
});
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= 0.1;
	console.log("Slow Video Down", video.playbackRate);
});
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 0.1;
	console.log("Speed Video Up", video.playbackRate);
});
document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 > video.duration) {
        video.currentTime = 0;
	} else {
        video.currentTime += 10;
    }
	console.log("Skip Video", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
        video.muted = false;
	console.log("Unmute Video");
    } 
	else {
        video.muted = true;
	console.log("Mute Video");
    }
});
document.querySelector("#slider").addEventListener("change", function() {
	console.log(this.value);
	video.volume = this.value / 100;

document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function(){
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function(){
    video.classList.remove("oldSchool");
});
