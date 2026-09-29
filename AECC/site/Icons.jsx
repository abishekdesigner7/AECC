/* global React */
// Icons rendered via the official Lucide library (loaded from CDN).
// We map a few legacy/custom names to their real Lucide equivalents.
const ICON_ALIASES = {
  pipe: "git-merge",
  frame: "boxes",
  conveyor: "move-horizontal",
  hardhat: "hard-hat",
  "target-2": "target",
};

const toPascal = (s) => s.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join("");

const buildSvg = (data, size, strokeWidth) => {
  // Lucide icon data: [tagName, attrs, children]
  // where children is an array of [tagName, attrs] tuples.
  if (!data) return "";
  const renderAttrs = (a) =>
    Object.entries(a || {})
      .map(([k, v]) => `${k}="${String(v).replace(/"/g, "&quot;")}"`)
      .join(" ");
  const rootAttrs = {
    ...(data[1] || {}),
    width: size,
    height: size,
    "stroke-width": strokeWidth,
  };
  const renderChild = (child) => {
    if (!child) return "";
    const [tag, attrs, kids] = Array.isArray(child) ? child : [];
    if (!tag) return "";
    const inner = (kids || []).map(renderChild).join("");
    return `<${tag} ${renderAttrs(attrs)}>${inner}</${tag}>`;
  };
  const kids = (data[2] || []).map(renderChild).join("");
  return `<svg ${renderAttrs(rootAttrs)}>${kids}</svg>`;
};

const Icon = ({ name, size = 20, strokeWidth = 2, className = "", style }) => {
  const [svg, setSvg] = React.useState("");
  React.useEffect(() => {
    let cancelled = false;
    const tryRender = () => {
      const lib = window.lucide;
      if (!lib || !lib.icons) return false;
      const lookup = ICON_ALIASES[name] || name;
      const pascal = toPascal(lookup);
      const data = lib.icons[pascal];
      if (!cancelled) setSvg(buildSvg(data, size, strokeWidth));
      return true;
    };
    if (tryRender()) return;
    // Lucide may still be loading — poll briefly.
    const id = setInterval(() => { if (tryRender()) clearInterval(id); }, 60);
    setTimeout(() => clearInterval(id), 4000);
    return () => { cancelled = true; clearInterval(id); };
  }, [name, size, strokeWidth]);
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        color: "currentColor",
        flexShrink: 0,
        ...style,
      }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

window.Icon = Icon;
