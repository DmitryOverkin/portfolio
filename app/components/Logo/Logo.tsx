import Image from "next/image";

const Logo = () => {
  return (
    <Image src={"./logo.svg"} alt="logo" width={120} height={70}/>
  );
};

export default Logo;
