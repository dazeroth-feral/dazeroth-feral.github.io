	// let no = prompt("Password?");
	// console.log(no);

let passwordWriteID = document.getElementById(`passwordWrite`);
let gotoVideosID = document.getElementById(`gotoVideos`);
let opisanieID = document.getElementById(`opisanie`);

passwordWriteID.addEventListener(`click`, function(){
	let password = prompt(`Your Password`);
	if (password == `4444`) {
		window.location.href = `videos.html`;

		// passwordWriteID.setAttribute(`disabled`, ``);
		// let videosID = document.getElementById(`videos`).innerHTML = `<details class="spoiler">` +
		// `<summary class="spoiler-summary"><span class="b"><span class="border">Full № 1.</span></span></summary>` +
		// `<p class="spoiler-p"><iframe src="https://www.pornhub.com/embed/ph5e29849aac1b7" frameborder="0" width="560" height="340" scrolling="no" allowfullscreen></iframe></p>` +
		// `</details>`;


	} else{
		alert(`Жалкая, не удачная попытка. Проваливай глупец!`)
	}
});