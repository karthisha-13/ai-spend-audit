"use client";
import { useState } from "react";

export default function Home() {
  const [tool, setTool] = useState("");
  const [plan, setPlan] = useState("");
  const [spend, setSpend] = useState("");
  const [users, setUsers] = useState("");
  const [useCase, setUseCase] = useState("");
  const [result, setResult] = useState("");

 const handleSubmit = (e: any) => {
  e.preventDefault();

  let message = "";
  let savings = 0;

  if (Number(spend) > 100) {
    message = `⚠️ High spending detected on ${tool}. Consider downgrading your ${plan} plan.`;
    savings = 30;
  } else if (Number(spend) > 50) {
    message = `⚠️ Moderate overspending on ${tool}. Try optimizing usage.`;
    savings = 15;
  } else {
    message = `✅ Your spending on ${tool} is well optimized.`;
  }

  if (savings > 0) {
    message += ` 💰 You could save around $${savings}/month.`;
  }

  setResult(message);
};

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-xl w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">
          AI Spend Audit
        </h1>

        <input
          type="text"
          placeholder="Tool (ChatGPT, Claude...)"
          className="w-full p-2 rounded bg-black border border-gray-700"
          value={tool}
          onChange={(e) => setTool(e.target.value)}
        />

        <input
          type="text"
          placeholder="Plan (Free, Pro, Team)"
          className="w-full p-2 rounded bg-black border border-gray-700"
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
        />

        <input
          type="number"
          placeholder="Monthly Spend ($)"
          className="w-full p-2 rounded bg-black border border-gray-700"
          value={spend}
          onChange={(e) => setSpend(e.target.value)}
        />

        <input
          type="number"
          placeholder="Number of Users"
          className="w-full p-2 rounded bg-black border border-gray-700"
          value={users}
          onChange={(e) => setUsers(e.target.value)}
        />

        <input
          type="text"
          placeholder="Use Case"
          className="w-full p-2 rounded bg-black border border-gray-700"
          value={useCase}
          onChange={(e) => setUseCase(e.target.value)}
        />

        <button
        type="submit"
        className="w-full bg-white text-black py-2 rounded font-semibold"
        >
          Analyze Spend
          </button>
          {result && (
            <div className="mt-6 p-4 bg-white/10 rounded-lg text-center text-lg font-medium border border-gray-700">
              {result}
              </div>
            )}
      </form>
    </main>
  );
}