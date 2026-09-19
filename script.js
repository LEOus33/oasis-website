const playButton = document.getElementById("playButton");
const progressBar = document.getElementById("progressBar");
const currentTime = document.getElementById("currentTime");
const message = document.getElementById("message");

let playing = false;
let progress = 0;

playButton.addEventListener("click", function () {

    if (!playing) {

        playing = true;

        playButton.textContent = "Ⅱ";
        message.textContent = "NOW PLAYING...";

        const timer = setInterval(function () {

            if (!playing) {
                clearInterval(timer);
                return;
            }

            progress += 0.35;

            if (progress >= 100) {
                progress = 0;
            }

            progressBar.style.width = progress + "%";

            let seconds = Math.floor(
                (progress / 100) * 288
            );

            let minutes = Math.floor(seconds / 60);

            seconds = seconds % 60;

            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            currentTime.textContent =
                minutes + ":" + seconds;

        }, 100);

    } else {

        playing = false;

        playButton.textContent = "▶";

        message.textContent = "PAUSED";

    }

});
