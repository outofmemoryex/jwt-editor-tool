import React, { useState } from "react";

function base64url(input: string): string {
  return btoa(input)
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function decodeBase64Url(str: string): string {
  str = str.replace(/-/g, "+").replace(/_/g, "/");
  while (str.length % 4) str += "=";
  return atob(str);
}

export default function App() {
  const [jwt, setJwt] = useState("");
  const [header, setHeader] = useState("{}");
  const [payload, setPayload] = useState("{}");
  const [modifiedJwt, setModifiedJwt] = useState("");

  const handleDecode = () => {
    try {
      const parts = jwt.split(".");
      const decodedHeader = decodeBase64Url(parts[0]);
      const decodedPayload = decodeBase64Url(parts[1]);
      setHeader(decodedHeader);
      setPayload(decodedPayload);
    } catch (err) {
      alert("Invalid JWT format");
    }
  };

  const handleEncode = () => {
    try {
      const encodedHeader = base64url(header);
      const encodedPayload = base64url(payload);
      setModifiedJwt(`${encodedHeader}.${encodedPayload}.`);
    } catch (err) {
      alert("Invalid JSON format in header or payload");
    }
  };

  return (
    <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <h2>JWT Editor</h2>
      <textarea
        placeholder="Paste JWT here"
        value={jwt}
        onChange={(e) => setJwt(e.target.value)}
        rows={3}
        style={{ width: '100%' }}
      />
      <button onClick={handleDecode}>Decode</button>

      <h4>Edit Header</h4>
      <textarea
        value={header}
        onChange={(e) => setHeader(e.target.value)}
        rows={5}
        style={{ width: '100%' }}
      />

      <h4>Edit Payload</h4>
      <textarea
        value={payload}
        onChange={(e) => setPayload(e.target.value)}
        rows={5}
        style={{ width: '100%' }}
      />

      <button onClick={handleEncode}>Re-encode</button>

      <h4>Modified JWT</h4>
      <textarea
        value={modifiedJwt}
        readOnly
        rows={3}
        style={{ width: '100%' }}
      />
    </div>
  );
}
