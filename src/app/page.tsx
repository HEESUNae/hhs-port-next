import Image from 'next/image';
import styles from './page.module.scss';
import { icon } from '@/consts/image';
import { appDesc, cardDesc, skillCategory } from '@/consts/contents';
import Skill from '@/components/Skill';
import Card from '@/components/Card';

export interface CardType {
  image: string;
  title: string;
  desc: string;
  skill: string;
  link: string;
  imageAlt: any;
  subTitle: string;
}

export default function Home() {
  return (
    <main id="contents">
      <div className={styles.main}></div>
      <section className={styles.sec01}>
        <div className={styles.intro}>
          <Image src={icon.code} width={200} height={200} alt="" />
          <h2>FrontEnd Engineer, Web Developer</h2>
          <p>
            커피와 맥북만 있다면, 프론트엔드 개발을 즐겁게 할 준비가 되어있는 프론트엔드 개발자 황희선 포트폴리오
            입니다.
          </p>
          <div className={styles.call}>
            <a href="tel:010-7139-3044">010-7139-3044</a>
          </div>
        </div>
        <div className={styles.skillContainer}>
          {skillCategory.map((item) => (
            <Skill key={item.name} iconSrc={item.image} name={item.name} />
          ))}
        </div>
      </section>
      <section className={styles.sec02}>
        <h2>{'< Web Project />'}</h2>
        <ul className="card-container">
          {cardDesc.map((card: any) => (
            <li key={card.title}>
              <Card list={card} />
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.sec03}>
        <h2>{'< App Project />'}</h2>
        <p>React Native 패스트캠퍼스 인터넷 강의를 수강하며 클론코딩한 프로젝트 입니다.</p>
        <div className={styles.appContainer}>
          {appDesc.map((card) => (
            <div key={card.title} className={styles.appCard}>
              <figure className={styles.appImg}>
                <Image src={card.image} alt="" />
              </figure>
              <b>{card.title}</b>
              <p className={styles.appDesc}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
