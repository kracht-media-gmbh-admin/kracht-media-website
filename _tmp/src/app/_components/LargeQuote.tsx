type LargeQuoteProps = {
  title: string;
  from: string;
};

export default function LargeQuote({ title="", from="" }: LargeQuoteProps) {
  return (
    <>
    <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      color: "var(--color-background)",
    }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{title}</h2>
      <p style={{ opacity: 0.8 }}>{from}</p>
    </div>
    </>
  );
}
