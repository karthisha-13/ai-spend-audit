"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "../styles.css";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username) {
      alert("Please enter username");
      return;
    }

    localStorage.setItem("user", username);
    router.push("/");
  };

  return (
    <main className="loginPage">
      <div className="loginCard">
        <h1>AI Spend Audit</h1>
        <p>Login to continue</p>

        <form onSubmit={handleLogin}>
          <input
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="analyzeBtn" type="submit">Login</button>
        </form>
      </div>
    </main>
  );
}