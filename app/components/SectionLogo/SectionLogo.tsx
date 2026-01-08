interface Iprops {
  name: string;
}

const SectionLogo = ({name}: Iprops) => {
  return (
    <div className="relative w-fit rounded-full p-[1px] bg-gradient-to-br from-black to-gray-300">
      <div className="px-5 py-2 rounded-full bg-white">{name}</div>
    </div>
  );
};

export default SectionLogo;
