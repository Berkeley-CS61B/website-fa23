/**
* adapted from https://github.com/jelofsson/hangman-js
**/
var AoA = (function () {
    'use strict';

	
    /**
	 * Constructor
	 * @param {string} elId An ID used in this class and when rendering the DOM Elements
	*/
    function AoA(elId) {
		// DOM is ready
        this.elId       = elId;
        // Possible words
        this.words      = [
			'TOLL', 'RIM', 'EMBARRASSED', 'CLING', 'ISOLATED', 'BLINK', 'SUSPICIOUS', 'WHEELCHAIR', 'SQUAD', 'ELIGIBLE', 'PROCESSOR', 'PLUNGE', 'THIS', 'SPONSOR', 'GRIN', 'COLOR', 'DEMOGRAPHIC', 'RAIN', 'CHILL', 'REFUGE', 'STEER', 'LEGISLATOR', 'RALLY', 'PROGRAMMING', 'CHEER', 'OUTLET', 'INTACT', 'VENDOR', 'THRIVE', 'PEANUT', 'CHEW', 'ELABORATE', 'INTELLECTUAL', 'CONCEPTION', 'AUCTION', 'STEAK', 'COMPLY', 'TRIUMPH', 'SHAREHOLDER', 'COMPARABLE', 'TRANSPORT', 'CONSCIENCE', 'CALCULATION', 'CONSIDERABLY', 'INTERVAL', 'SCRATCH', 'AWAKE', 'JURISDICTION', 'INEVITABLY', 'FEMINIST', 'CONSTRAINT', 'EMOTIONALLY', 'EXPEDITION', 'ALLEGEDLY', 'COMPROMISE', 'STRAIN', 'SIMILARITY', 'BUTT', 'LID', 'DUMB', 'BULK', 'SPRINKLE', 'MORTALITY', 'PHILOSOPHICAL', 'CONVERSION', 'PATRON', 'MUNICIPAL', 'ANY', 'LIVER', 'HARMONY', 'SOLELY', 'TOLERANCE', 'INSTANT', 'GOAT', 'ARM', 'BLESSING', 'BANANA', 'RUNNING', 'PALACE', 'FORMERLY', 'PEASANT', 'NEAT', 'GRANDPARENT', 'LAWMAKER', 'SUPERMARKET', 'CRUISE', 'MOBILE', 'PLAIN', 'PART', 'CALENDAR', 'WIDOW', 'DEPOSIT', 'BEARD', 'BRAKE', 'DOWNTOWN', 'SCREENING', 'IMPULSE', 'FORBID', 'FUR', 'BRUTAL', 'PREDATOR', 'POKE', 'OPT', 'VOLUNTARY', 'TROUBLE', 'VALID', 'FORUM', 'DANCING', 'HAPPILY', 'SOAR', 'REMOVAL', 'AUTONOMY', 'ENACT', 'ROUND', 'THREAD', 'LIGHT', 'LANDMARK', 'UNHAPPY', 'OFFENDER', 'COMING', 'PRIVATELY', 'FRACTION', 'DISTINCTIVE', 'TOURISM', 'THRESHOLD', 'CALM', 'ROUTINELY', 'SUITE', 'REMARK', 'REGULATOR', 'STRAW', 'THEOLOGICAL', 'APART', 'EXHAUST', 'GLOBE', 'FRAGILE', 'OBJECTION', 'CHEMISTRY', 'OLD-FASHIONED', 'CROWDED', 'CIRCLE', 'BLAST', 'PREVAIL', 'OVERNIGHT', 'DENIAL', 'RENTAL', 'FANTASTIC', 'FRAGMENT', 'LEVEL', 'SCREW', 'WARMTH', 'UNDERGRADUATE', 'LIQUID', 'HEADACHE', 'POLICEMAN', 'YIELD', 'PROJECTION', 'BATTLE', 'SUITABLE', 'MENTION', 'GRADUATION', 'DRILL', 'CRUEL', 'MANSION', 'REGARD', 'GRAPE', 'AUTHORIZE', 'COTTAGE', 'DRIVEWAY', 'CHARM', 'SEXUALITY', 'LOYAL', 'CLAY', 'POUND', 'BALLOON', 'INVENTION', 'EGO', 'FARE', 'HOMEWORK', 'DISC', 'SOFA', 'GUARANTEE', 'AVAILABILITY', 'RADAR', 'FROWN', 'REGAIN', 'LEAVE', 'PERMIT', 'SWEATER', 'REHABILITATION', 'RUBBER', 'RETREAT', 'MOLECULE', 'FREELY', 'FAVORABLE', 'STEADILY', 'VETERAN', 'INTEGRATED', 'HA', 'YOUNGSTER', 'BROADCAST', 'PREMIUM', 'ACCOUNTABILITY', 'OVERWHELM', 'ONE-THIRD', 'CONTEMPLATE', 'UPDATE', 'SPARK', 'IRONICALLY', 'FATIGUE', 'BEYOND', 'SPECULATE', 'MARKER', 'LOW', 'PREACH', 'BUCKET', 'BOMB', 'BLOND', 'CONFESSION', 'PROVOKE', 'MARBLE', 'SUBSTANTIALLY', 'TWIST', 'DEFENDER', 'FISH', 'EXPLICIT', 'TRANSPORT', 'DISTURBING', 'SURVEILLANCE', 'MAGNETIC', 'TECHNICIAN', 'MUTTER', 'DEVASTATING', 'DEPART', 'ARROW', 'TRAUMA', 'NEIGHBORING', 'SOAK', 'RIBBON', 'MEANTIME', 'TRANSMIT', 'SCREEN', 'HARVEST', 'CONSECUTIVE', 'REPUBLICAN', 'COORDINATE', 'WORLDWIDE', 'WITHIN', 'SPY', 'SLOT', 'RIOT', 'NUTRIENT', 'CITIZENSHIP', 'SEVERELY', 'SOVEREIGNTY', 'RIDGE', 'BRAVE', 'LIGHTING', 'SPECIFY', 'CONTRIBUTOR', 'FRUSTRATE', 'CROWD', 'ARTICULATE', 'IMPORTANTLY', 'TRANSIT', 'DENSE', 'SEMINAR', 'ELECTRONICS', 'SUNNY', 'SHORTS', 'SWELL', 'ACCUSATION', 'SOFTEN', 'PHOTOGRAPH', 'STRAIGHTEN', 'TERRIBLY', 'CUE', 'SUDDEN', 'BRIDE', 'BIOGRAPHY', 'HAZARD', 'COMPELLING', 'SELDOM', 'TILE', 'ECONOMICALLY', 'HONESTLY', 'TROUBLED', 'BOW', 'TWENTIETH', 'BALANCED', 'FOREIGNER', 'LAUNCH', 'CONVENIENCE', 'DELIGHT', 'WEAVE', 'TIMBER', 'TILL', 'ACCURATELY', 'PLEA', 'BULB', 'COPY', 'FLYING', 'SUSTAINABLE', 'DEVIL', 'BOLT', 'CARGO', 'SPINE', 'SELLER', 'SKILLED', 'MANAGING', 'PUBLIC', 'MARINE', 'DOCK', 'ORGANIZED', 'FOG', 'DIPLOMAT', 'BORING', 'SOMETIME', 'SUMMARY', 'MISSIONARY', 'EPIDEMIC', 'FATAL', 'TRIM', 'WAREHOUSE', 'ACCELERATE', 'BUTTERFLY', 'BRONZE', 'DROWN', 'INHERENT', 'PRAISE', 'NATIONWIDE', 'SPIT', 'HARVEST', 'KNEEL', 'VACUUM', 'SELECTED', 'DICTATE', 'STEREOTYPE', 'SENSOR', 'LAUNDRY', 'MANUAL', 'PISTOL', 'NAVAL', 'IMMIGRANT', 'PLAINTIFF', 'KID', 'MIDDLE-CLASS', 'APOLOGY', 'TILL'
        ];
        // Bell sound is initially muted
        this.AUDIO_VOLUME   = 0.0;
    }
	
	/**
	 * Handles keypresses and passes them to the guess function if they are a letter 
	 */
	AoA.prototype.handleKeyPress = function (event) {
		if (event.key.match(/[a-z]/i) && event.key.length === 1) {
			this.guess(event.key);
		}
	}
	
	
    /**
	 * Resets the aoa game
	*/
    AoA.prototype.reset = function () {
		window.addEventListener("keydown", this.handleKeyPress.bind(this), false);
		// Variables
        this.STOPPED        = false;
        this.MISTAKES       = 0;
        this.GUESSES        = [];
        // Select a random word from the list
        this.WORD           = this.words[Math.floor(Math.random() * this.words.length)];
        // DOM Elements
        this.hideElementByClass('h');
        this.hideElementByClass('intro-text');
        this.showElementByIdWithContent(this.elId + "_guessbox", null);
        this.showElementByIdWithContent(this.elId + "_word", this.getGuessedfWord());
		this.showElementByIdWithContent("strikes_left", "Strikes left: 6")
        for (var i = 1; i <= 6; i += 1) {
			document.getElementById("aoa_w" + i).style.visibility = "hidden";            
        }
		
    };

	/**
	 * Sets the volume of the audio
	*/
	AoA.prototype.setVolume = function (volume) {
		this.AUDIO_VOLUME = volume;
	}
	
    /**
	 * Logic after the user guessed on a letter
	*
	* @param {char} letter A letter guessed by our enduser
	*/
    AoA.prototype.guess = function (letter) {
		letter = letter.charAt(0).toUpperCase();

        // Check if game is stopped or the user already guessed on that letter
        if (this.STOPPED || this.GUESSES.indexOf(letter) > -1) {
			// Then we wont do anything
            return;
        }
		
        // Add the letter to our GUESSES array
        this.GUESSES.push(letter);
        // Update the word hint, and guessed letter list for the user
        this.showElementByIdWithContent(this.elId + "_word", this.getGuessedfWord());
        this.showElementByIdWithContent(this.elId + "_guesses", this.GUESSES.join(''));
        // Check if our word does not contain the guessed letter
        if (this.WORD.indexOf(letter) < 0) {
			if (this.MISTAKES < 6) {
				// Incorrect guess, increase our mistakes by one
                this.MISTAKES++;
				// Update the strikes left
				this.showElementByIdWithContent("strikes_left", "Strikes left: " + (6 - this.MISTAKES));
                // Show next part of aoa character
                //this.showElementByIdWithContent(this.elId + "_" + this.MISTAKES, null);
                document.getElementById("aoa_w" + this.MISTAKES).style.visibility = "visible";
                var audio = new Audio('bell.mp3');
                audio.volume = this.AUDIO_VOLUME;
                audio.play();
            }            
			
            // Check if its Game Over
            if (this.MISTAKES === 6) {
                this.showElementByIdWithContent(this.elId + "_end", "GAME OVER! Azathoth Awakens.<br/><p>The word was: " + this.WORD);
                this.STOPPED = true;
            }
        } else if (this.WORD.indexOf(this.getGuessedfWord()) !== -1) {
			// Victory condition
            this.showElementByIdWithContent(this.elId + "_end", "You win. Azathoth continues his slumber.<br/>The word was: " + this.WORD);
            this.STOPPED = true;
        }
    };
	
    /**
	 * Displays HTML element by id with the following content
	*
	* @param {string} elId     DOM ID
	* @param {HTML} content 
	*/
    AoA.prototype.showElementByIdWithContent = function (elId, content) {
		if (content !== null) {
			document.getElementById(elId).innerHTML = content;
        }
        document.getElementById(elId).style.opacity = 1;
    };
	
    /**
	 * Hides element by class
     *
     * @param {string} elClass DOM class
	*/
    AoA.prototype.hideElementByClass = function (elClass) {
		var elements = document.getElementsByClassName(elClass), i;
        for (i = 0; i < elements.length; i++) {
			elements[i].style.opacity = 0;
        }
    };
	
    /**
	 * The word but only with letters the user has guessed so far is visible
	*/
    AoA.prototype.getGuessedfWord = function () {
        var result = "", i;
        for (i = 0; i < this.WORD.length; i++) {
			// Word characters
            result += (this.GUESSES.indexOf(this.WORD[i]) > -1) ?
			this.WORD[i] : "_";
        }
        return result;
    };
	
    // Create and return an instance of this class, its go time!
    return new AoA('aoa');    
}());