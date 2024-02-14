import React, { createContext, useState } from 'react';

export const TimerContext = createContext<any>({});

export const TimerProvider = ({ children }: any) => {
    const [seconds, setSeconds] = useState(15);
    const [minutes, setMinutes] = useState(1);
    const [isRunning, setIsRunning] = useState(false);
    const [isStartBtn, setIsStartBtn] = useState(true);
    const [isResetting, setIsResetting] = useState(false);
    const [isContinue, setIsContinue] = useState(false);
  
    const startTimer = () => {
      setIsRunning(true);
      setIsStartBtn(false);
    };
  
    const continueTimer = () => {
      setIsRunning(true);
      setIsContinue(false);
    };
  
    const pauseTimer = () => {
      setIsContinue(true);
      setIsRunning(false);
    };
  
    const resetTimer = () => {
      setIsRunning(false);
      setIsStartBtn(true);
      setIsContinue(false);
      setSeconds(15);
      setMinutes(1);
    };
  
    const timerContextValue = {
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
    };
  
    return (
      <TimerContext.Provider value={timerContextValue}>
        {children}
      </TimerContext.Provider>
    );
  };
  
