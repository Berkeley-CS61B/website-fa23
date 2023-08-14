$(document).ready(function(){
	    var audio_url = 'https://docs.google.com/uc?export=open&id=1i_4WX16zi1SvnmYvc4R2EK_FQW78isA5'

    // Konami Code
    cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
        audio = new Audio(audio_url)
        audio.play();
});
    
});
