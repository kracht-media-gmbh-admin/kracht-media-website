import SmallQuote from "@/app/_components/SmallQuote";

type QuoteColumnProps = {
  quotes: Array<string>;
};

export default function QuoteColumn({ quotes = [] }: QuoteColumnProps) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {quotes.map((quote, index) => (
          <SmallQuote key={index} quote={quote} style={{
            width: "10vw"
          }}/>
        ))}
      </div>
    </>
  );
}
