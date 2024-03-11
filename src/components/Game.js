import React, { useState } from 'react'

const words = [
	"ABOUT",
	"ALERT",
	"ARGUE",
	"BEACH",
	"ABOVE",
	"ALIKE",
	"ARISE",
	"BEGAN",
	"ABUSE",
	"ALIVE",
	"ARRAY",
	"BEGIN",
	"ACTOR",
	"ALLOW",
	"ASIDE",
	"BEGUN",
	"ACUTE",
	"ALONE",
	"ASSET",
	"BEING",
	"ADMIT",
	"ALONG",
	"AUDIO",
	"BELOW",
	"ADOPT",
	"ALTER",
	"AUDIT",
	"BENCH",
	"ADULT",
	"AMONG",
	"AVOID",
	"BILLY",
	"AFTER",
	"ANGER",
	"AWARD",
	"BIRTH",
	"AGAIN",
	"ANGLE",
	"AWARE",
	"BLACK",
	"AGENT",
	"ANGRY",
	"BADLY",
	"BLAME",
	"AGREE",
	"APART",
	"BAKER",
	"BLIND",
	"AHEAD",
	"APPLE",
	"BASES",
	"BLOCK",
	"ALARM",
	"APPLY",
	"BASIC",
	"BLOOD",
	"ALBUM",
	"ARENA",
	"BASIS",
	"BOARD",
	"BOOST",
	"BUYER",
	"CHINA",
	"COVER",
	"BOOTH",
	"CABLE",
	"CHOSE",
	"CRAFT",
	"BOUND",
	"CALIF",
	"CIVIL",
	"CRASH",
	"BRAIN",
	"CARRY",
	"CLAIM",
	"CREAM",
	"BRAND",
	"CATCH",
	"CLASS",
	"CRIME",
	"BREAD",
	"CAUSE",
	"CLEAN",
	"CROSS",
	"BREAK",
	"CHAIN",
	"CLEAR",
	"CROWD",
	"BREED",
	"CHAIR",
	"CLICK",
	"CROWN",
	"BRIEF",
	"CHART",
	"CLOCK",
	"CURVE",
	"BRING",
	"CHASE",
	"CLOSE",
	"CYCLE",
	"BROAD",
	"CHEAP",
	"COACH",
	"DAILY",
	"BROKE",
	"CHECK",
	"COAST",
	"DANCE",
	"BROWN",
	"CHEST",
	"COULD",
	"DATED",
	"BUILD",
	"CHIEF",
	"COUNT",
	"DEALT",
	"BUILT",
	"CHILD",
	"COURT",
	"DEATH",
	"DEBUT",
	"ENTRY",
	"FORTH",
	"GROUP",
	"DELAY",
	"EQUAL",
	"FORTY",
	"GROWN",
	"DEPTH",
	"ERROR",
	"FORUM",
	"GUARD",
	"DOING",
	"EVENT",
	"FOUND",
	"GUESS",
	"DOUBT",
	"EVERY",
	"FRAME",
	"GUEST",
	"DOZEN",
	"EXACT",
	"FRANK",
	"GUIDE",
	"DRAFT",
	"EXIST",
	"FRAUD",
	"HAPPY",
	"DRAMA",
	"EXTRA",
	"FRESH",
	"HARRY",
	"DRAWN",
	"FAITH",
	"FRONT",
	"HEART",
	"DREAM",
	"FALSE",
	"FRUIT",
	"HEAVY",
	"DRESS",
	"FAULT",
	"FULLY",
	"HENCE",
	"DRILL",
	"FIBRE",
	"FUNNY",
	"NIGHT",
	"DRINK",
	"FIELD",
	"GIANT",
	"HORSE",
	"DRIVE",
	"FIFTH",
	"GIVEN",
	"HOTEL",
	"DROVE",
	"FIFTY",
	"GLASS",
	"HOUSE",
	"DYING",
	"FIGHT",
	"GLOBE",
	"HUMAN",
	"EAGER",
	"FINAL",
	"GOING",
	"IDEAL",
	"EARLY",
	"FIRST",
	"GRACE",
	"IMAGE",
	"EARTH",
	"FIXED",
	"GRADE",
	"INDEX",
	"EIGHT",
	"FLASH",
	"GRAND",
	"INNER",
	"ELITE",
	"FLEET",
	"GRANT",
	"INPUT",
	"EMPTY",
	"FLOOR",
	"GRASS",
	"ISSUE",
	"ENEMY",
	"FLUID",
	"GREAT",
	"IRONY",
	"ENJOY",
	"FOCUS",
	"GREEN",
	"JUICE",
	"ENTER",
	"FORCE",
	"GROSS",
	"JOINT",
	"JUDGE",
	"METAL",
	"MEDIA",
	"NEWLY",
	"KNOWN",
	"LOCAL",
	"MIGHT",
	"NOISE",
	"LABEL",
	"LOGIC",
	"MINOR",
	"NORTH",
	"LARGE",
	"LOOSE",
	"MINUS",
	"NOTED",
	"LASER",
	"LOWER",
	"MIXED",
	"NOVEL",
	"LATER",
	"LUCKY",
	"MODEL",
	"NURSE",
	"LAUGH",
	"LUNCH",
	"MONEY",
	"OCCUR",
	"LEARN",
	"MAGIC",
	"MORAL",
	"OFFER",
	"LEASE",
	"MAJOR",
	"MOTOR",
	"OFTEN",
	"LEAST",
	"MAKER",
	"MOUNT",
	"ORDER",
	"LEAVE",
	"MARCH",
	"MOUSE",
	"OTHER",
	"LEGAL",
	"MUSIC",
	"MOUTH",
	"OUGHT",
	"LEVEL",
	"MATCH",
	"MOVIE",
	"PAINT",
	"LIGHT",
	"MAYOR",
	"NEEDS",
	"PAPER",
	"LIMIT",
	"MEANT",
	"NEVER",
	"PARTY",
	"PEACE",
	"POWER",
	"RADIO",
	"ROUND",
	"PANEL",
	"PRESS",
	"RAISE",
	"ROUTE",
	"PHASE",
	"PRICE",
	"RANGE",
	"ROYAL",
	"PHONE",
	"PRIDE",
	"RAPID",
	"RURAL",
	"PHOTO",
	"PRIME",
	"RATIO",
	"SCALE",
	"PIECE",
	"PRINT",
	"REACH",
	"SCENE",
	"PILOT",
	"PRIOR",
	"READY",
	"SCOPE",
	"PITCH",
	"PRIZE",
	"REFER",
	"SCORE",
	"PLACE",
	"PROOF",
	"RIGHT",
	"SENSE",
	"PLAIN",
	"PROUD",
	"RIVAL",
	"SERVE",
	"PLANE",
	"PROVE",
	"RIVER",
	"SEVEN",
	"PLANT",
	"QUEEN",
	"QUICK",
	"SHALL",
	"PLATE",
	"SIXTH",
	"STAND",
	"SHAPE",
	"POINT",
	"QUIET",
	"ROMAN",
	"SHARE",
	"POUND",
	"QUITE",
	"ROUGH",
	"SHARP",
	"SHEET",
	"SPARE",
	"STYLE",
	"TIRED",
	"SHELF",
	"SPEAK",
	"SUGAR",
	"TIRED",
	"SHELL",
	"SPEED",
	"SUITE",
	"TITLE",
	"SHIFT",
	"SPENT",
	"SWEET",
	"TOPIC",
	"SHIRT",
	"SPENT",
	"SWEET",
	"TOPIC",
	"SHOCK",
	"SPLIT",
	"TABLE",
	"TOTAL",
	"SHOOT",
	"SPOKE",
	"TAKEN",
	"TOUCH",
	"SHORT",
	"SPORT",
	"TASTE",
	"TOUGH",
	"SHOWN",
	"STAFF",
	"TAXES",
	"TOWER",
	"SIGHT",
	"STAGE",
	"TEACH",
	"TRACK",
	"SINCE",
	"STAKE",
	"TEETH",
	"TRADE",
	"SIXTY",
	"START",
	"TEXAS",
	"TREAT",
	"SIZED",
	"STATE",
	"THANK",
	"TREND",
	"SKILL",
	"STEAM",
	"THEFT",
	"TRIAL",
	"SLEEP",
	"STEEL",
	"THEIR",
	"TRIED",
	"SLIDE",
	"STICK",
	"THEME",
	"TRIES",
	"SMALL",
	"STILL",
	"THERE",
	"TRUCK",
	"SMART",
	"STOCK",
	"THESE",
	"TRULY",
	"SMILE",
	"STONE",
	"THICK",
	"TRUST",
	"SMITH",
	"STOOD",
	"THING",
	"TRUTH",
	"SMOKE",
	"STORE",
	"THINK",
	"TWICE",
	"SOLID",
	"STORM",
	"THIRD",
	"UNDER",
	"SOLVE",
	"STORY",
	"THOSE",
	"UNDUE",
	"SORRY",
	"STRIP",
	"THREE",
	"UNION",
	"SOUND",
	"STUCK",
	"THREW",
	"UNITY",
	"SOUTH",
	"STUDY",
	"THROW",
	"UNTIL",
	"SPACE",
	"STUFF",
	"TIGHT",
	"UPPER",
	"UPSET",
	"WHOLE",
	"WASTE",
	"WOULD",
	"URBAN",
	"WHOSE",
	"WATCH",
	"WRITE",
	"USAGE",
	"WOMAN",
	"WATER",
	"WRONG",
	"USUAL",
	"TRAIN",
	"WHEEL",
	"WROTE",
	"VALID",
	"WORLD",
	"WHERE",
	"YIELD",
	"VALUE",
	"WORRY",
	"WHICH",
	"YOUNG",
	"VIDEO",
	"WORSE",
	"WHILE",
	"YOUTH",
	"VIRUS",
	"WORST",
	"WHITE",
	"WORTH",
	"VISIT",
	"WOULD",
	"VITAL",
	"VOICE"
];

const setWordOfTheDay = () => {
	const now = new Date();
	const word = Math.floor(Math.random() * words.length);
	console.log(word);

	console.log(words[word]);

	// Save on local storage a random word for the next 24 hours
	localStorage.setItem("wordOfTheDay", JSON.stringify({
		expireOn: new Date().setHours(now.getHours() + 24),
		word: words[word]
	}));

	return words[word];
}

const getWordOfTheDay = () => {
	const now = new Date();
  const wordOfTheDay = localStorage.getItem("wordOfTheDay");
	
	if (wordOfTheDay === null)
		return setWordOfTheDay();

	const parsedWordOfTheDay = JSON.parse(wordOfTheDay);

	if (parsedWordOfTheDay?.expireOn <= now)
		return setWordOfTheDay();

	return parsedWordOfTheDay.word;
}

function Game() {
	const wordOfTheDay = getWordOfTheDay();
	// States
	const [gameStatus, setGameStatus] = useState('Try your word!');
	const [wordHistory, setWordHistory] = useState([...Array(6)].fill(''));
	const [currentTry, setCurrentTry] = useState(0);
	const [matrix, setMatrix] = useState([...Array(6)].fill(Array(5).fill("#121213")));
	const [keyColor, setKeyColor] = useState([...Array(26)].fill('#818384'));

	// Handlers
	const handleType = (char) => {	
		if(wordHistory[currentTry].length < 5){
			setWordHistory((prev) => {
				const updatedWordHistory = [...prev];
				updatedWordHistory[currentTry] += char;
				return updatedWordHistory;
			});
		}
	}

	const handleDeleteLastChar = () => {
		setWordHistory((prev) => {
			const updatedWordHistory = [...prev];
			updatedWordHistory[currentTry] = updatedWordHistory[currentTry].slice(0, -1);
			return updatedWordHistory;
		});
	}

	const updateMatrix = (a,b,color) => {
		setMatrix(prevMatrix => {
		  const newMatrix = [...prevMatrix]; 
		  newMatrix[a] = [...prevMatrix[a]]; 
		  newMatrix[a][b] = color; 
		  return newMatrix;
		});
	};

	const updateKeyboard = (a, color) => {
		setKeyColor(prevKeyColor => {
			const newKeyColor = [...prevKeyColor];
			const index = a.charCodeAt(0);
			newKeyColor[index-65] = color;
			return newKeyColor;
		});
	};

	const handleCheckWord = () =>{
		var statusList = ["Give another word a go", "Try a different term", "Experiment with a new phrase", "Test out another word", "Explore a fresh choice", "Seek a different option", "Try a varied approach", "Aim for a different way of saying it", "Give a new word a shot", "Look for an alternative word"]
		if(wordHistory[currentTry].length === 5){
			if(wordHistory[currentTry] === wordOfTheDay){
				setGameStatus('Congratulations! You found the word of the day!');
			}
			else if(currentTry < 5){
				setCurrentTry((prev) => prev + 1);
				setGameStatus(statusList[Math.floor(Math.random() * statusList.length)]);

			}
			else if(currentTry === 5){
				setGameStatus('Try again tommorow!');
			}

			for(let a = 0; a < 5; a++){
				if(keyColor[wordHistory[currentTry][a].charCodeAt(0)-65] !== "#538d4e" && keyColor[wordHistory[currentTry][a].charCodeAt(0)-65] !== "#b59f3b"){
					updateKeyboard(wordHistory[currentTry][a], "#3a3a3c");
				}
				for(let b = 0; b < 5; b++){
					if(wordHistory[currentTry][a] === wordOfTheDay[b]){
						updateMatrix(currentTry,a,"#b59f3b");
						if(keyColor[wordHistory[currentTry][a].charCodeAt(0)-65] !== "#538d4e"){
							updateKeyboard(wordHistory[currentTry][a], "#b59f3b");
						}
					}
					if(wordHistory[currentTry][a] === wordOfTheDay[a]){		
						updateMatrix(currentTry,a,"#538d4e");
						updateKeyboard(wordHistory[currentTry][a], "#538d4e");
					}
				}
			}
		}
	}

  return (
		<>
			<div className="gameStatus">{gameStatus}</div>

			<div className='gameBoard'>
				<table cellSpacing = '5'>
					<tbody>
						{[...Array(6).fill(0)].map((item, row) => {
							if (wordHistory[row].length === 0)
								return (
									<tr>
										{[...Array(5).fill(0)].map((item, col) =>
											<td>&nbsp;</td>
										)}
									</tr>
								);
							else 
								return (
									<tr>
											{wordHistory[row].split('').map((item, col) =>
												<td style={{backgroundColor: matrix[row][col]}}>{item}</td>
											)}
										{[...Array(5 - wordHistory[row].length)].map((item) =>
											<td>&nbsp;</td>
										)}
									</tr>
								);
						})}
					</tbody>
				</table>
			</div>
			<div className='gameKeyboard'>
				<div className='gameKeyboardRow1'>
					{/* {[...Array(26).fill(0)].map((item, index) => {
						const char = String.fromCharCode(97 + index);
						return <button className='keyboardButton' onClick={() => handleType(char)}>{char}</button>
					})} */}
					<button className='keyboardButton' style={{backgroundColor: keyColor["Q".charCodeAt(0)-65]}} onClick={() => handleType('Q')}>Q</button>
					<button className='keyboardButton' style={{backgroundColor: keyColor["W".charCodeAt(0)-65]}} onClick={() => handleType('W')}>W</button>
					<button className='keyboardButton' style={{backgroundColor: keyColor["E".charCodeAt(0)-65]}} onClick={() => handleType('E')}>E</button>
					<button className='keyboardButton' style={{backgroundColor: keyColor["R".charCodeAt(0)-65]}} onClick={() => handleType('R')}>R</button>
					<button className='keyboardButton' style={{backgroundColor: keyColor["T".charCodeAt(0)-65]}} onClick={() => handleType('T')}>T</button>
					<button className='keyboardButton' style={{backgroundColor: keyColor["Y".charCodeAt(0)-65]}} onClick={() => handleType('Y')}>Y</button>
					<button className='keyboardButton' style={{backgroundColor: keyColor["U".charCodeAt(0)-65]}} onClick={() => handleType('U')}>U</button>
					<button className='keyboardButton' style={{backgroundColor: keyColor["I".charCodeAt(0)-65]}} onClick={() => handleType('I')}>I</button>
					<button className='keyboardButton' style={{backgroundColor: keyColor["O".charCodeAt(0)-65]}} onClick={() => handleType('O')}>O</button>
					<button className='keyboardButton' style={{backgroundColor: keyColor["P".charCodeAt(0)-65]}} onClick={() => handleType('P')}>P</button>
				</div>
				<div className='gameKeyboardRow2'>
					<button className='keyboardButton' style={{backgroundColor: keyColor["A".charCodeAt(0)-65]}} onClick={() => handleType('A')}>A</button>
					<button className='keyboardButton' style={{backgroundColor: keyColor["S".charCodeAt(0)-65]}} onClick={() => handleType('S')}>S</button>
					<button className='keyboardButton' style={{backgroundColor: keyColor["D".charCodeAt(0)-65]}} onClick={() => handleType('D')}>D</button>
					<button className='keyboardButton' style={{backgroundColor: keyColor["F".charCodeAt(0)-65]}} onClick={() => handleType('F')}>F</button>
					<button className='keyboardButton' style={{backgroundColor: keyColor["G".charCodeAt(0)-65]}} onClick={() => handleType('G')}>G</button>
					<button className='keyboardButton' style={{backgroundColor: keyColor["H".charCodeAt(0)-65]}} onClick={() => handleType('H')}>H</button>
					<button className='keyboardButton' style={{backgroundColor: keyColor["J".charCodeAt(0)-65]}} onClick={() => handleType('J')}>J</button>
					<button className='keyboardButton' style={{backgroundColor: keyColor["K".charCodeAt(0)-65]}} onClick={() => handleType('K')}>K</button>
					<button className='keyboardButton' style={{backgroundColor: keyColor["L".charCodeAt(0)-65]}} onClick={() => handleType('L')}>L</button>
				</div>
				<div className='gameKeyboardRow3'>
					<button className='keyboardButtonCheck' onClick={() => handleCheckWord()}>Enter</button>
					<button className='keyboardButton' style={{backgroundColor: keyColor["Z".charCodeAt(0)-65]}} onClick={() => handleType('Z')}>Z</button>
					<button className='keyboardButton' style={{backgroundColor: keyColor["X".charCodeAt(0)-65]}} onClick={() => handleType('X')}>X</button>
					<button className='keyboardButton' style={{backgroundColor: keyColor["C".charCodeAt(0)-65]}} onClick={() => handleType('C')}>C</button>
					<button className='keyboardButton' style={{backgroundColor: keyColor["V".charCodeAt(0)-65]}} onClick={() => handleType('V')}>V</button>
					<button className='keyboardButton' style={{backgroundColor: keyColor["B".charCodeAt(0)-65]}} onClick={() => handleType('B')}>B</button>
					<button className='keyboardButton' style={{backgroundColor: keyColor["N".charCodeAt(0)-65]}} onClick={() => handleType('N')}>N</button>
					<button className='keyboardButton' style={{backgroundColor: keyColor["M".charCodeAt(0)-65]}} onClick={() => handleType('M')}>M</button>
					<button className='keyboardButtonDelete' onClick={() => handleDeleteLastChar()}>⌫</button>
				</div>
			</div>
		</>
  )
}

export default Game