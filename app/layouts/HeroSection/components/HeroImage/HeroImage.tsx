import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="rounded-2xl overflow-hidden w-full max-w-80 h-fit">
      <Image
        src={"/main-image.jpg"}
        alt="Image of Dmitry Overkin"
        width={700}
        height={100}
        objectFit="contain"
      />
    </div>
  );
};

export default HeroImage;
