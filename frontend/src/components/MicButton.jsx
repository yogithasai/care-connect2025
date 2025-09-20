import { useSpeech } from "../hooks/useSpeech";

export default function MicButton({ onFinalized }) {
  const { supported, listening, transcript, startListening, stopListening } = useSpeech();

  const toggle = () => {
    if (!supported.stt) return;
    if (listening) stopListening(); else startListening();
  };

  return (
    <div>
      <button
        type="button"
        onClick={toggle}
        className={`px-3 py-2 rounded ${listening ? "bg-red-600" : "bg-blue-600"} text-white`}
        disabled={!supported.stt}
        title={!supported.stt ? "Speech input not supported" : "Toggle microphone"}
      >
        {listening ? "Stop" : "Mic"}
      </button>
      {transcript && (
        <div className="text-sm text-gray-700 mt-1">{transcript}</div>
      )}
    </div>
  );
}


