import React, { useEffect, useState } from "react";
import Tones from "./Tones";
import { compact } from "lodash";
import { key } from "frequencies/piano";
import Circle from "./Circle";

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

  const freqs = compact([...keys].map(getFreqFromKey));

  return (
    <>
      <div
        style={{
          color: "white"
        }}
      >
        <div>{keys}</div>
        <br />
        <div>
          <Tones freqs={freqs} />
        </div>
      </div>
      <div>
        {freqs.map(freq => (
          <Circle
            style={{
              position: "fixed",
              top: `calc(50vh - ${freq / 10}px)`,
              left: `calc(50vw - ${freq / 10}px)`
            }}
            radius={freq / 10}
          />
        ))}
      </div>
    </>
  );
};

export default Keyboard;

const getFreqFromKey = (key: string) => {
  return mapKeyToFreq[key] || null;
};

// prettier-ignore
const mapKeyToFreq: { [key: string]: number } = {
  n   : key(3, "ff"),
  m   : key(3, "g"),
  "," : key(3, "gg"),
  "." : key(3, "a"),
  "/" : key(3, "aa"),
  h   : key(3, "b"),
  j   : key(4, "c"),
  k   : key(4, "cc"),
  l   : key(4, "d"),
  ";" : key(4, "dd"),
  "'" : key(4, "e"),
  y   : key(4, "f"),
  u   : key(4, "ff"),
  i   : key(4, "g"),
  o   : key(4, "gg"),
  p   : key(4, "a"),
  "[" : key(4, "aa"),
  "]" : key(4, "b"),
  "\\": key(5, "c")
};
