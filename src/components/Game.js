import React, { useState } from 'react'
import axios from 'axios'

const baseURL = "https://localhost:44368/Words/GetWordOfTheDay";



const setWordOfTheDay = (word) => {
	const now = new Date();
	
	console.log(word);

	

	//console.log(words[word]);

	// Save on local storage a random word for the next 24 hours
	localStorage.setItem("wordOfTheDay", JSON.stringify({
		expireOn: new Date().setHours(now.getHours() + 24),
		word: word
	}));

	return word;
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
	const [post, setPost] = React.useState(null);
  
	React.useEffect(() => {
		axios.get(baseURL).then((response) => {
		  setPost(response.data);
		  setWordOfTheDay(response.data);
		  console.log(response.data);
		});
	  }, []);

  
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
		var statusList = ["Give another word a go", "Try a different term", "Experiment with a new phrase", "Test out another word", "Explore a fresh choice", "Seek a different option", "Try a varied approach", "Give a new word a shot", "Look for an alternative word"]
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
			{/* <div>
				<h1>{post.title}</h1>
				<p>{post.body}</p>
			</div> */}
		</>
  )
}

export default Game