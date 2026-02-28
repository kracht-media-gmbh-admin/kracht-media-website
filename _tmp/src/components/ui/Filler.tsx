type FillerProps = {
    children?: React.ReactNode;
    width?: number | string;
    height?: number | string;
}

export default function Filler({ children, width = "100%", height = "100%" }: FillerProps) {
  const fillerStyle = {
    width,
    height,
    backgroundColor: "#f0f0f0",
    padding: "1rem",
    color: "#000000",
  };

  return (<div style={fillerStyle}>
    {children}
  </div>);
}
