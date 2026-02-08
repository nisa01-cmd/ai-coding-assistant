"use client";

import { useState } from "react";
import CodeEditor from "@/components/CodeEditor";

export default function Home() {
  const [code, setCode] = useState("# Write your code here");

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">AI Coding Assistant</h1>
      <CodeEditor code={code} setCode={setCode} />
    </main>
  );
}
