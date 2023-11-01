import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './card.module.scss';
import { icon } from '@/consts/image';

interface CardProps {
  [key: string]: string;
}

const Card = ({ img, title, subTitle, desc, workDesc, skill, link }: CardProps) => {
  return (
    <div className={styles.card}>
      <figure>
        <Image src={img} width={300} height={200} alt="" />
      </figure>
      <div className={styles.cardInfo}>
        <h3>{title}</h3>
        <p className={styles.cardDesc}>{subTitle}</p>
        <p>{desc}</p>
        <b>작업하게 된 계기</b>
        <p>{workDesc}</p>
        <b>기술스택</b>
        <p>{skill}</p>
        <div className={styles.buttons}>
          <Link href={link} target="_blank">
            <Image src={icon.gotoSite} width={20} height={20} alt="" />
            사이트 바로가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
