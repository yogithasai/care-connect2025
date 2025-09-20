import { useEffect, useRef, useState } from "react";

export default function VideoCall() {
  const localRef = useRef(null);
  const remoteRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    return () => {
      if (localRef.current && localRef.current.srcObject) {
        localRef.current.srcObject.getTracks().forEach(t => t.stop());
      }
    };
  }, []);

  const start = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    if (localRef.current) localRef.current.srcObject = stream;
    // Placeholder: in real app, connect to signaling server and set remote stream
    setStarted(true);
  };

  const stop = () => {
    if (localRef.current && localRef.current.srcObject) {
      localRef.current.srcObject.getTracks().forEach(t => t.stop());
      localRef.current.srcObject = null;
    }
    if (remoteRef.current) remoteRef.current.srcObject = null;
    setStarted(false);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <video ref={localRef} autoPlay playsInline className="w-full bg-black rounded" />
        <video ref={remoteRef} autoPlay playsInline className="w-full bg-black rounded" />
      </div>
      <div className="mt-3 space-x-2">
        {!started ? (
          <button onClick={start} className="px-3 py-2 rounded bg-green-600 text-white">Start Call</button>
        ) : (
          <button onClick={stop} className="px-3 py-2 rounded bg-red-600 text-white">End Call</button>
        )}
      </div>
    </div>
  );
}


