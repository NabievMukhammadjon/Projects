import React, { useContext } from 'react';
import { TimerContext } from '../../context/TimerContext';
import { TimerBtns } from './TimerBtns';
import styles from './timerinner.css';

export function TimerInner() {
  const {
    seconds,
    setSeconds,
    minutes,
    setMinutes,
    isRunning,
    setIsRunning,
    isStartBtn,
    setIsStartBtn,
    isResetting,
    setIsResetting,
    isContinue,
    setIsContinue,
    startTimer,
    continueTimer,
    pauseTimer,
    resetTimer,
  } = useContext(TimerContext);

  return (
    <div className={styles.inner}>
      <div className={styles.time}>
        <div className={styles.count}>
          {minutes >= 10 ? (
            <div className={styles.minutes}>{minutes}</div>
          ) : (
            <div className={styles.minutes}>
              0{minutes}
            </div>
          )}
          :
          {seconds >= 10 ? (
            <div className={styles.seconds}>{seconds}</div>
          ) : (
            <div className={styles.seconds}>
              0{seconds}
            </div>
          )}            
        </div>
        <button className={styles.btnAdd}></button>
      </div>
      <div className={styles.task}>
        <h4 className={styles.subtitle}>Задача 1 -</h4>
        &#32;<span className={styles.name}>Сверстать сайт</span>
      </div>
      {/* <TimerBtns /> */}
      <div className={styles.btns}>
        {isStartBtn && (
          <button 
            className={styles.btnGreen}
            onClick={startTimer}
          >Старт</button>
        )}
        {isRunning && (
          <button 
            className={styles.btnGreen}
            onClick={pauseTimer}
          >Пауза</button>
        )}
        {isContinue && (
          <button 
            className={styles.btnGreen}
            onClick={continueTimer}
          >Возобновить</button>
        )}
        <button 
          className={styles.btnRed}
          onClick={resetTimer}
        >Стоп</button>
      </div>
    </div>
  );
}

//========================================================================================================================================================
// import React, { useEffect, useState } from 'react';
// import { TimerBtns } from './TimerBtns';
// import styles from './timerinner.css';

// export function TimerInner() {
//   const [seconds, setSeconds] = useState(15);
//   const [minutes, setMinutes] = useState(1);
//   const [isRunning, setIsRunning] = useState(false);
//   const [isStartBtn, setIsStartBtn] = useState(true);
//   const [isResetting, setIsResetting] = useState(false);
//   const [isContinue, setIsContinue] = useState(false);

//   useEffect(() => {
//     let interval: any = null;

//     if (isContinue) {
//       let result = 125 + 45;
//       const array = [12, 55, 99, 45, 77];
//       for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         for (const item of array) {
//           console.log(item);
//           array.forEach(elem => {
//             console.log(elem);
//           });
//         }
//         for (let index = 0; index < array.length; index++) {
//           console.log(index);
//           console.log(array);
//         }
//         console.log(element);
//       }
//       console.log(result);
//     }

//     if (isRunning) {
//       interval = setInterval(() => {
//         if (seconds > 0 ) {
//           setSeconds(prevSeconds => prevSeconds - 1);
//         } else {
//           setSeconds(15);
//           setMinutes(prevMinutes => prevMinutes - 1)
//         } 
//       }, 1000);
//     }
    
//     if (minutes === 0 && seconds === 0) {
//       clearInterval(interval);      
//     }

//     return () => {
//       clearInterval(interval);
//     };
//   }, [seconds, isRunning, isContinue, isStartBtn]);

//   const startTimer = () => {
//     setIsRunning(true);
//     setIsStartBtn(false);
//   };

//   const continueTimer = () => {
//     setIsRunning(true);
//     setIsContinue(false);
//   };

//   const pauseTimer = () => {
//     setIsContinue(true);
//     setIsRunning(false);
//   };

//   const resetTimer = () => {
//     setIsRunning(false);
//     setIsStartBtn(true);
//     setIsContinue(false);
//     setSeconds(15);
//     setMinutes(1);
//   }

//   return (
//     <div className={styles.inner}>
//       <div className={styles.time}>
//         <div className={styles.count}>
//           {minutes >= 10 ? (
//             <div className={styles.minutes}>{minutes}</div>
//           ) : (
//             <div className={styles.minutes}>
//               0{minutes}
//             </div>
//           )}
//           :
//           {seconds >= 10 ? (
//             <div className={styles.seconds}>{seconds}</div>
//           ) : (
//             <div className={styles.seconds}>
//               0{seconds}
//             </div>
//           )}            
//         </div>
//         <button className={styles.btnAdd}></button>
//       </div>
//       <div className={styles.task}>
//         <h4 className={styles.subtitle}>Задача 1 -</h4>
//         &#32;<span className={styles.name}>Сверстать сайт</span>
//       </div>
//       {/* <TimerBtns /> */}
//       <div className={styles.btns}>
//         {isStartBtn && (
//           <button 
//             className={styles.btnGreen}
//             onClick={startTimer}
//           >Старт</button>
//         )}
//         {isRunning && (
//           <button 
//             className={styles.btnGreen}
//             onClick={pauseTimer}
//           >Пауза</button>
//         )}
//         {isContinue && (
//           <button 
//             className={styles.btnGreen}
//             onClick={continueTimer}
//           >Возобновить</button>
//         )}
//         <button 
//           className={styles.btnRed}
//           onClick={resetTimer}
//         >Стоп</button>
//       </div>
//     </div>
//   );
// }