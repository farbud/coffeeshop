"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`پیام ارسال شد!\nنام: ${name}\nایمیل: ${email}\nپیام: ${message}`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">تماس با ما</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="نام"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="ایمیل"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <textarea
          placeholder="پیام شما"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-2 border rounded"
          rows={4}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          ارسال
        </button>
      </form>
    </div>
  );
}
