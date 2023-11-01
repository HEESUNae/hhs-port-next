import Image from 'next/image';
import React from 'react';
import styles from './skill.module.scss';

interface SkillProps {
  iconSrc: string;
  name: string;
}

const Skill = ({ iconSrc, name }: SkillProps) => {
  return (
    <div className={styles.skill}>
      <Image src={iconSrc} width={30} height={30} alt="" />
      <p>{name}</p>
    </div>
  );
};

export default Skill;
