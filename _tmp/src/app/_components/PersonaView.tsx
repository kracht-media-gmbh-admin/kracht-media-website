import { ImageAsset } from "@/types";
import RoundedBox from "@/components/ui/RoundedBox";

type PersonaViewProps = {
  name: string;
  title: string;
  image: ImageAsset;
  style?: React.CSSProperties;
};

export default function PersonaView({ name, title, image, style = {} }: PersonaViewProps) {
  return (
    <RoundedBox
      variant="surface"
      padding="p-0"
      radius="rounded-2xl"
      className="w-[300px] h-[400px] flex flex-col shadow-md hover:shadow-xl transition-shadow cursor-default"
      style={style}
      depth
      hasSheen
    >
      {/* Image Container */}
      <div className="w-full h-[80%] relative overflow-hidden group-hover:scale-105 transition-transform duration-500">

        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info Container */}
      <div className="w-full h-[20%] flex flex-col justify-center items-center p-2 bg-[var(--color-surface)]">
        <h3 className="font-[var(--font-heading)] text-lg font-bold text-[var(--color-primary)] m-0">
          {name}
        </h3>
        <p className="font-[var(--font-body)] text-sm text-[var(--color-secondary)] m-0">
          {title}
        </p>
      </div>
    </RoundedBox>
  );
}

