import Ticker from "@/components/ui/Ticker";

type TextTickerProps = {
  keywords: string[];
  style?: React.CSSProperties;
  color?: string;
};

const textTickerStyle: React.CSSProperties = {
  fontSize: "clamp(2rem, 8vw, 6rem)", // Making it more responsive and larger as per modern agency look
  fontWeight: "900",
  color: "var(--color-background)",
  margin: "0 2rem",
  lineHeight: "1",
  letterSpacing: "-0.02em",
  textTransform: "uppercase",
};

export default function TextTicker({
  keywords,
  style,
  color,
}: TextTickerProps) {
  const finalStyle = {
    ...textTickerStyle,
    ...(color ? { color } : {}),
    ...style,
  };

  return (
    <Ticker duration={40}>
      {keywords.map((item, index) => (
        <div className="select-none whitespace-nowrap" key={index} style={finalStyle}>
          {item}
        </div>
      ))}
    </Ticker>
  );
}

