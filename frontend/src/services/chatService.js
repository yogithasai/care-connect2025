export async function sendChatMessage(prompt) {
  // TODO: Replace with real backend endpoint
  // const res = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ prompt }) });
  // const data = await res.json();
  // return data.reply;
  await new Promise((r) => setTimeout(r, 300));
  return `This is an AI explanation for: ${prompt}`;
}


