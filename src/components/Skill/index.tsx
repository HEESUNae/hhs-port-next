import Image from 'next/image';
import React from 'react';
import styles from './skill.module.scss';

interface SkillProps {
  iconSrc: string;
  name: string;
}

const Skill: React.FC<SkillProps> = ({ iconSrc, name }) => {
  return (
    <div className={styles.skill}>
      <Image src={iconSrc} width={30} height={30} alt="" />
      <p>{name}</p>
    </div>
  );
};

export default Skill;
