"use client";

import { useEffect, useState } from "react";

export default function BattleNetTest() {
  const [characters, setCharacters] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const res = await fetch("/api/test/battlenetTest");
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const data = await res.json();
        setCharacters(data);
      } catch (err: any) {
        setError(err.message);
      }
    }

    fetchCharacters();
  }, []);

  if (error) return <div>❌ Error: {error}</div>;
  if (!characters) return <div>⏳ Loading characters...</div>;

  return (
    <div>
      <h2 className="text-lg font-bold">🧙 Your WoW Characters</h2>
      <ul>
        {characters.characters?.map((char: any) => (
          <li key={char.id}>
            {char.name} — Level {char.level} ({char.realm?.name})
          </li>
        ))}
      </ul>
    </div>
  );
}
