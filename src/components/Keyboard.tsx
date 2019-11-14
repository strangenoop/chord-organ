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
  n   : key("ff", 3),
  m   : key("g",  3),
  "," : key("gg", 3),
  "." : key("a",  3),
  "/" : key("aa", 3),
  h   : key("b",  3),
  j   : key("c",  4),
  k   : key("cc", 4),
  l   : key("d",  4),
  ";" : key("dd", 4),
  "'" : key("e",  4),
  y   : key("f",  4),
  u   : key("ff", 4),
  i   : key("g",  4),
  o   : key("gg", 4),
  p   : key("a",  4),
  "[" : key("aa", 4),
  "]" : key("b",  4),
  "\\": key("c",  4)
};
