type SmallQuoteProps = {
    quote: string;
    style?: React.CSSProperties;
};

export default function SmallQuote({ quote="", style={} }: SmallQuoteProps) {
  return (
    <>
      <p style={{ 
        color: "var(--color-background)",
        ...style 
      }}>{quote}</p>
    </>
  );
}
