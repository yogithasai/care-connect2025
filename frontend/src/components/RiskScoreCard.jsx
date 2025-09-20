export default function RiskScoreCard({ score = 0, trend = "stable" }) {
  const color = score > 80 ? "text-red-600" : score > 60 ? "text-yellow-600" : "text-green-600";
  const trendText = trend === "increasing" ? "↑" : trend === "decreasing" ? "↓" : "→";
  return (
    <div className="border rounded p-4 bg-white">
      <h3 className="text-lg font-semibold">Risk Score</h3>
      <div className={`text-3xl font-bold mt-2 ${color}`}>{score}<span className="ml-2 text-lg">{trendText}</span></div>
      <p className="text-gray-700 mt-1">AI-predicted risk for chronic disease.</p>
    </div>
  );
}


