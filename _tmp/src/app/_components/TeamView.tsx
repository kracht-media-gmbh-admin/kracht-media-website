import PersonaView from "./PersonaView";
import RoundedBox from "@/components/ui/RoundedBox";

export default function TeamView() {
  return (
    <div className="w-full py-20 flex flex-col items-center">
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-16 md:gap-24 lg:gap-32 w-full">

        {/* Row 1 / Initial Set */}
        <div className="flex flex-col sm:flex-row gap-16 md:gap-32 w-full justify-center items-center">
          <div className="md:-translate-y-12">
            <PersonaView
              name="Leon Köllnhofer"
              title="CEO & Creative Director"
              image={{
                src: "/images/team/leon-koellnhofer.webp",
                alt: "Leon Köllnhofer",
              }}
            />
          </div>
          <div className="md:translate-y-12">
            <PersonaView
              name="Tobias Hübl"
              title="Technical Lead"
              image={{
                src: "/images/team/tobias-huebl.webp",
                alt: "Tobias Hübl",
              }}
            />
          </div>
        </div>

        {/* Row 2 / Centered/Offset Set */}
        <div className="flex justify-center w-full pt-8 md:pt-16">
          <PersonaView
            name="Jonathan Lörnitzo"
            title="Art Director"
            image={{
              src: "/images/team/jonathan-loernitzo.webp",
              alt: "Jonathan Lörnitzo",
            }}
          />
        </div>

      </div>

      {/* Group Photo Section */}
      <div className="w-full max-w-6xl mt-32 px-4 pb-20">
        <RoundedBox
          variant="surface"
          padding="p-0"
          radius="rounded-3xl"
          className="w-full aspect-[1/1] md:aspect-[16/9] flex flex-col shadow-xl"
          depth
          hasSheen
        >
          <img
            src="/images/team/kracht-team.webp"
            alt="Kracht Media Team"
            className="w-full h-full object-cover object-bottom"
          />
        </RoundedBox>
      </div>
    </div>
  );
}

