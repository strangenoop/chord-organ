import React, { useEffect, useState } from "react";
import Tones from "./Tones";
import { compact } from "lodash";
import { freq } from "frequencies/piano";

const Keyboard = () => {
  const [keys, setKeys] = useState<Set<string>>(new Set());
  useEffect(() => {
    const addKey = ({ key }: KeyboardEvent) => {
      if (!keys.has(key)) {
        setKeys(keys => new Set(keys).add(key));
      }
    };
    const removeKey = ({ key }: KeyboardEvent) => {
      setKeys(keys => {
        const nextKeys = new Set(keys);
        nextKeys.delete(key);
        return nextKeys;
      });
    };
    window.addEventListener("keydown", addKey);
    window.addEventListener("keyup", removeKey);
    return () => {
      window.removeEventListener("keydown", addKey);
      window.removeEventListener("keyup", removeKey);
    };
  });

  return (
    <>
      <div>{keys}</div>
      <br />
      <div>
        <Tones freqs={compact([...keys].map(getFreqFromKey))} />
      </div>
    </>
  );
};

export default Keyboard;

const getFreqFromKey = (key: string) => {
  return mapKeyToFreq[key] || null;
};

const mapKeyToFreq: { [key: string]: number } = {
  a: freq(4, "c"),
  s: freq(4, "d"),
  d: freq(4, "e"),
  f: freq(4, "f"),
  g: freq(4, "g"),
  h: freq(4, "a"),
  j: freq(4, "b"),
  k: freq(5, "c"),
  l: freq(5, "d"),
  ";": freq(5, "e")
};
