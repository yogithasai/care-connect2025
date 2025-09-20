import { useEffect, useRef, useState } from "react";

export function useSpeech() {
  const recognitionRef = useRef(null);
  const [supported, setSupported] = useState({ stt: false, tts: false });
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const hasSTT = !!SpeechRecognition;
    const hasTTS = typeof window.speechSynthesis !== "undefined";
    setSupported({ stt: hasSTT, tts: hasTTS });
    if (hasSTT) {
      const rec = new SpeechRecognition();
      rec.lang = "en-US";
      rec.interimResults = true;
      rec.continuous = false;
      rec.onresult = (e) => {
        let text = "";
        for (let i = e.resultIndex; i < e.results.length; i++) text += e.results[i][0].transcript;
        setTranscript(text.trim());
      };
      rec.onend = () => setListening(false);
      recognitionRef.current = rec;
    }
  }, []);

  const startListening = () => {
    if (!recognitionRef.current) return;
    setTranscript("");
    recognitionRef.current.start();
    setListening(true);
  };

  const stopListening = () => {
    if (!recognitionRef.current) return;
    recognitionRef.current.stop();
    setListening(false);
  };

  const speak = (text) => {
    if (!supported.tts) return;
    const utter = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utter);
  };

  return { supported, listening, transcript, startListening, stopListening, speak };
}


