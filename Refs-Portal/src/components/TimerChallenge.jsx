import React, { useEffect, useRef, useState } from 'react'
import ResultModal from './ResultModal';

function TimerChallenge({title, targetTime}) {

	const [isTimerActive, setIsTimerActive] = useState(false);
	const [remainingTime, setRemainingTime] = useState(targetTime*1000);
	const timerRef = useRef();
	const dialogRef= useRef();

	console.log("remainTime : ", remainingTime);
	function openModal() {
		clearInterval(timerRef.current);
		setIsTimerActive(false);
		dialogRef.current.open();
	}

	if(remainingTime <= 0 && isTimerActive) {
		openModal();

	}

	const handleClick = () => {
		console.log("button clicked!!", isTimerActive)
		if(!isTimerActive) {
			setIsTimerActive(true);
			timerRef.current = setInterval(()=> {
				setRemainingTime(prevRemainingTime => prevRemainingTime - 10);
			}, 10);
			
		} else {
			openModal();
		}
	}

	function resetRemainingTime() {
		setRemainingTime(targetTime*1000)
	}


	return (
		<>
			<ResultModal ref={dialogRef} remainingTime={remainingTime} targetTime={targetTime} resetRemainingTime={resetRemainingTime}/>
			<section className='challenge'>
				<h2>{title}</h2>
				<p className='challenge-time'>
					{targetTime} second{targetTime > 1 ? 's' : ''}
				</p>
				<p>
					<button onClick={handleClick}>{!isTimerActive ? 'Start' : 'Stop'} challenge</button>
				</p>
				<p className={isTimerActive ? 'active' : ''}>
					{isTimerActive ? 'Time is running...' : 'Timer inactive'}
				</p>
			</section>
		</>
		
	)
}

export default TimerChallenge