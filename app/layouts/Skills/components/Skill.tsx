"use client";

import Image from "next/image";

type SkillProps = {
  name: string;
  skillIcon: string;
};

const Skill = ({name, skillIcon}: SkillProps) => {
  return (
    <div className="flex items-center gap-2 bg-gray-200 py-4 pl-4 pr-6 rounded-full border border-gray-300 whitespace-nowrap">
      <Image src={skillIcon} alt={name} width={30} height={30} />
      <span className="text-xl">{name}</span>
    </div>
  );
};

export default Skill;
