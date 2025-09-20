import { useEffect, useRef, useState } from "react";

export default function VoiceAssistant() {
  const recognitionRef = useRef(null);
  const [supported, setSupported] = useState(true);
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setSupported(false);
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = true;
    recognition.continuous = false;
    recognition.onresult = (e) => {
      let text = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        text += e.results[i][0].transcript;
      }
      setTranscript(text.trim());
    };
    recognition.onend = () => setListening(false);
    recognitionRef.current = recognition;
  }, []);

  const toggle = () => {
    if (!recognitionRef.current) return;
    if (listening) {
      recognitionRef.current.stop();
      setListening(false);
    } else {
      setTranscript("");
      recognitionRef.current.start();
      setListening(true);
    }
  };

  const speak = (text) => {
    const utter = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utter);
  };

  return (
    <div className="border rounded p-4 bg-white">
      <h2 className="text-xl font-semibold mb-2">Voice Assistant</h2>
      {!supported ? (
        <p>Your browser does not support speech recognition.</p>
      ) : (
        <>
          <button onClick={toggle} className={`px-3 py-2 rounded text-white ${listening ? "bg-red-600" : "bg-green-600"}`}>
            {listening ? "Stop" : "Start"} Listening
          </button>
          <div className="mt-3 text-gray-700 min-h-[2rem]">{transcript}</div>
          <div className="mt-3">
            <button onClick={() => speak(transcript || "Hello, how can I help you?")} className="px-3 py-2 rounded bg-blue-600 text-white">
              Speak Response
            </button>
          </div>
        </>
      )}
    </div>
  );
}


