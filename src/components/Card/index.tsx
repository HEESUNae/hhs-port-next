import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './card.module.scss';
import { icon } from '@/consts/image';

interface CardProps {
  list: { image: string; title: string; desc: string; skill: string; link: string; imageAlt: any; subTitle: string };
}

const Card: React.FC<CardProps> = ({ list }) => {
  return (
    <div className={styles.card}>
      <figure>
        <Image src={list.image} width={300} height={200} alt={list.imageAlt} />
      </figure>
      <div className={styles.cardInfo}>
        <h3>{list.title}</h3>
        <p className={styles.cardDesc}>{list.subTitle}</p>
        <p>{list.desc}</p>
        <b>기술스택</b>
        <p>{list.skill}</p>
        <div className={styles.buttons}>
          <Link href={list.link} target="_blank" title="새창열림">
            <Image src={icon.gotoSite} width={20} height={20} alt="" />
            사이트 바로가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
