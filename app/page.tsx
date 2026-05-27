"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./styles.css";

export default function Home() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [tool, setTool] = useState("");
  const [plan, setPlan] = useState("");
  const [spend, setSpend] = useState("");
  const [users, setUsers] = useState("");
  const [useCase, setUseCase] = useState("");

  const [message, setMessage] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [savings, setSavings] = useState(0);
  const [level, setLevel] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) router.push("/login");
    else setUsername(user);
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!tool || !plan || !spend || !users || !useCase) {
      setMessage("Please fill all fields");
      setSuggestion("");
      setSavings(0);
      setLevel("");
      return;
    }

    const amount = Number(spend);

    if (amount > 100) {
      setMessage(`High spending detected on ${tool}`);
      setSuggestion(`Downgrade ${plan} plan`);
      setSavings(30);
      setLevel("High");
    } else if (amount > 50) {
      setMessage(`Moderate spending detected on ${tool}`);
      setSuggestion("Optimize usage");
      setSavings(15);
      setLevel("Medium");
    } else {
      setMessage(`Your spending on ${tool} is optimized`);
      setSuggestion("No changes needed");
      setSavings(0);
      setLevel("Low");
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <main className="page">
      <button type="button" className="logout" onClick={logout}>
        Logout
      </button>

      <section className="hero">
        <span className="badge">AI Cost Optimizer</span>
        <h1>Audit Your AI Spending Smarter</h1>
        <p>Analyze your AI tool cost and get instant savings suggestions.</p>
      </section>

      <section className="auditCard">
        <h2>Welcome, {username}</h2>
        <p className="subtitle">Enter your AI tool details</p>

        <form onSubmit={handleSubmit} className="form">
          <input placeholder="Tool Name" value={tool} onChange={(e) => setTool(e.target.value)} />
          <input placeholder="Plan" value={plan} onChange={(e) => setPlan(e.target.value)} />
          <input type="number" placeholder="Monthly Spend ($)" value={spend} onChange={(e) => setSpend(e.target.value)} />
          <input type="number" placeholder="Users" value={users} onChange={(e) => setUsers(e.target.value)} />
          <input placeholder="Use Case" value={useCase} onChange={(e) => setUseCase(e.target.value)} />

          <button type="submit" className="analyzeBtn">Analyze Spend</button>
        </form>

        {message && (
          <div className="result">
            <p>{message}</p>
            {suggestion && <p>Suggestion: {suggestion}</p>}
          </div>
        )}

        {level && (
          <div className="dashboard">
            <div>
              <h3>Savings</h3>
              <p>${savings}/mo</p>
            </div>
            <div>
              <h3>Level</h3>
              <p>{level}</p>
            </div>
            <div>
              <h3>Efficiency</h3>
              <p>{Number(spend) > 50 ? "Needs Work" : "Good"}</p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}