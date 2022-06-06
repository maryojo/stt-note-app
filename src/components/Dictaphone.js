// import React from "react";
import { useState } from 'react'
// import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


// const appId = 'aad66907-143a-4039-ae97-c4b5bea66ac0';
// const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
// SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);



const Dictaphone = () => {
  const [message, setMessage] = useState("Hello!");
  const commands = [
    {
      command: 'reset' || 'cancel',
      callback: () => resetTranscript()
    },
    {
      command: 'shut up',
      callback: () => setMessage("I was not talking")
    },
    {
      command: 'Hello',
      callback: () => setMessage("Hiya!")
    },
    {
      command: 'stop',
      callback: () => SpeechRecognition.stopListening()
    },
    
  ]
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
   } = useSpeechRecognition({commands});

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="p-5 md:p-7">
      <div className='flex flex-row mb-2'>
      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" /></svg>
      {listening ? "Listening..." : navigator.onLine ? message : navigator.onLine && transcript.length === 0 ? "Check your internet connection" : "You are offline" }
      </div>
      {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}
      <p className={`h-80  ${transcript ? "text-black" : "text-gray-400"}`}>{ transcript ? transcript : "Click the mic to add a new note..."}</p>

      <div className='flex flex-row justify-between md:items-end md:justify-end md:space-x-5 text-gray-400'>
        <svg onClick={SpeechRecognition.startListening} className={`w-6 h-6 md:hover:text-orange-500 cursor-pointer active:text-yellow-300 ${listening ? "text-orange-500" : ""}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" /></svg>
        <svg onClick={SpeechRecognition.stopListening} className="w-6 h-6 md:hover:text-orange-500 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" /></svg>
        {/* <svg className="w-6 h-6 hover:text-orange-500 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" /></svg> */}
        <svg onClick={resetTranscript} className="w-6 h-6 md:hover:text-orange-500 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
      </div>
    </div>
  );
};

export default Dictaphone;