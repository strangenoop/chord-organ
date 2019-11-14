const multiplier = 2 ** (1 / 12);
const rootFq = 440;

export const fq = (distanceFromRoot: number) => {
  // Say the key is 3 units away from the root.
  // We want to multiply the root frequency by the multiplier 3 times.
  // == (((R * M) * M) * M)
  // == R * (M * M * M)
  // == R * (M ** 3)
  // QUESTION: how does it work for negative distances?
  return rootFq * multiplier ** distanceFromRoot;
};

export const key = (note: Note, octave: number) => {
  const _ = 0;
  // prettier-ignore
  const octaves = [
    {
       c: _,
      cc: _,
       d: _,
      dd: _,
       e: _,
       f: _,
      ff: _,
       g: _,
      gg: _,
       a: fq(-36),
      aa: fq(-35),
       b: fq(-34)
    },
    {
       c: fq(-33),
      cc: fq(-32),
       d: fq(-31),
      dd: fq(-30),
       e: fq(-29),
       f: fq(-28),
      ff: fq(-27),
       g: fq(-26),
      gg: fq(-25),
       a: fq(-24),
      aa: fq(-23),
       b: fq(-22)
    },
    {
       c: fq(-21),
      cc: fq(-20),
       d: fq(-19),
      dd: fq(-18),
       e: fq(-17),
       f: fq(-16),
      ff: fq(-15),
       g: fq(-14),
      gg: fq(-13),
       a: fq(-12),
      aa: fq(-11),
       b: fq(-10)
    },
    {
       c: fq(-9),
      cc: fq(-8),
       d: fq(-7),
      dd: fq(-6),
       e: fq(-5),
       f: fq(-4),
      ff: fq(-3),
       g: fq(-2),
      gg: fq(-1),
       a: fq(0),
      aa: fq(1),
       b: fq(2)
    },
    {
       c: fq(3),
      cc: fq(4),
       d: fq(5),
      dd: fq(6),
       e: fq(7),
       f: fq(8),
      ff: fq(9),
       g: fq(10),
      gg: fq(11),
       a: fq(12),
      aa: fq(13),
       b: fq(14)
    },
    {
       c: fq(15),
      cc: fq(16),
       d: fq(17),
      dd: fq(18),
       e: fq(19),
       f: fq(20),
      ff: fq(21),
       g: fq(22),
      gg: fq(23),
       a: fq(24),
      aa: fq(25),
       b: fq(26)
    },
    {
       c: fq(27),
      cc: fq(28),
       d: fq(29),
      dd: fq(30),
       e: fq(31),
       f: fq(32),
      ff: fq(33),
       g: fq(34),
      gg: fq(35),
       a: fq(36),
      aa: fq(37),
       b: fq(38)
    },
    {
       c: fq(39),
      cc: _,
       d: _,
      dd: _,
       e: _,
       f: _,
      ff: _,
       g: _,
      gg: _,
       a: _,
      aa: _,
       b: _
    }
  ];
  return octaves[octave][note];
};

// *** TYPES ***

export type Note =
  | "a" // A
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "aa" // A Sharp
  | "cc"
  | "dd"
  | "ff"
  | "gg";
