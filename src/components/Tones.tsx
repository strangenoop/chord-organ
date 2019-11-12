import React, { useEffect } from "react";

const Tones = ({ freqs }: { freqs: number[] }) => {
  return (
    <>
      {freqs.map(freq => (
        <Tone freq={freq} />
      ))}
    </>
  );
};

export default Tones;

const Tone = ({
  freq,
  waveform = "sine",
  detune = 0
}: {
  freq: number;
  waveform?: Waveform;
  detune?: number;
}) => {
  useEffect(() => {
    let osc = audioCtx.createOscillator();
    osc.connect(masterGainNode);
    osc.type = waveform;
    osc.frequency.value = freq;
    osc.detune.value = detune;
    osc.start();
    return () => {
      osc.stop();
    };
  });
  return <div>{freq.toFixed(2)}</div>;
};

// Setup

const audioCtx = new AudioContext();

const masterGainNode = audioCtx.createGain();
masterGainNode.connect(audioCtx.destination);

// Types

type Waveform = "sine" | "square" | "triangle" | "sawtooth";
