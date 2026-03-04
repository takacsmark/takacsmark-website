const PALETTE = [
  { bg: '#e8f0ff', color: '#7287fd', border: '#c5d0f8' }, // lavender
  { bg: '#fff0f8', color: '#ea76cb', border: '#f8c5e0' }, // pink
  { bg: '#f3efff', color: '#8839ef', border: '#d5c5f8' }, // mauve
  { bg: '#e8f8ff', color: '#209fb5', border: '#b8e0f0' }, // sapphire
  { bg: '#e8fff5', color: '#179299', border: '#b0e0d8' }, // teal
  { bg: '#f0fae8', color: '#40a02b', border: '#c5e8b0' }, // green
  { bg: '#fff4ed', color: '#fe640b', border: '#f8d0b0' }, // peach
];

function hashTag(str: string): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash);
}

export function getTagStyle(tag: string): string {
  const c = PALETTE[hashTag(tag.toLowerCase()) % PALETTE.length];
  return `background:${c.bg};color:${c.color};border:1px solid ${c.border};`;
}
