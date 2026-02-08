"use client";

import Editor, { OnChange } from "@monaco-editor/react";

type Props = {
  code: string;
  setCode: (value: string) => void;
};

export default function CodeEditor({ code, setCode }: Props) {
  const handleChange: OnChange = (value) => {
    setCode(value ?? "");
  };

  return (
    <Editor
      height="400px"
      defaultLanguage="python"
      value={code}
      theme="vs-dark"
      onChange={handleChange}
    />
  );
}
