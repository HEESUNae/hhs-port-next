import { appImg, skillImg, thumbnailImg } from './image';

export const skillCategory = [
  {
    name: 'HTML',
    image: skillImg.html,
  },
  {
    name: 'CSS',
    image: skillImg.css,
  },
  {
    name: 'JavaScript',
    image: skillImg.javascript,
  },
  {
    name: 'TypeScript',
    image: skillImg.typescript,
  },
  {
    name: 'React',
    image: skillImg.react,
  },
  {
    name: 'React Native',
    image: skillImg.react,
  },
  {
    name: 'Next.js',
    image: skillImg.next,
  },
  {
    name: 'Node.js',
    image: skillImg.node,
  },
  {
    name: 'MongoDB',
    image: skillImg.mongo,
  },
];

export const cardDesc = [
  {
    image: thumbnailImg.starbucks,
    imageAlt: 'STARBUCKS 매장',
    title: '스타벅스',
    subTitle: '스타벅스 커피를 소개하는 웹페이지',
    desc: '스타벅스 커피에 대한 종류와 소개를 확인하고 좋아하는 커피를 찜할 수 있습니다.',
    skill: 'React, TypeScript',
    link: 'https://starbucks-pink.vercel.app/',
  },
  {
    image: thumbnailImg.sweetPotato,
    imageAlt: '고구마 먹고 답답해 하는 표정인 남자',
    title: '고답 (고구마 답답이)',
    subTitle: '세상 모든 고구마들을 위한 고민상담 커뮤니티',
    desc: '처음 방문한 유저는 회원가입을 통해 유니크한 아이디를 생성한 후 고민을 작성하고, 수정하고, 삭제할 수 있습니다. 커뮤니티 내에서 모든 유저들은 서로 고구마 라고 부르며, 원한다면 익명으로 아이디를 밝히지 않고도 작성할 수 있습니다. 다른 유저들은 고민에 대해 댓글을 작성하거나 삭제할 수 있습니다.',
    skill: 'React, TypeScript, Node.js, MongoDB, Mongoose',
    link: 'https://sweet-potato.vercel.app/',
  },
  {
    image: thumbnailImg.covergirl,
    imageAlt: 'COVERGIRL 브랜드의 다양한 종류의 화장품',
    title: 'CoverGirl',
    subTitle: 'CoverGirl 브랜드의 화장품 정보를 카테고리별로 공유하는 웹페이지',
    desc: '화장품 카테고리 클릭시 해당 카테고리의 화장품 정보 리스트가 표출되어 가격을 알 수 있고, 해당 상품의 구매페이지로 이동합니다.',
    skill: 'React, TypeScript',
    link: 'https://react-cover-girl.vercel.app/',
  },
  {
    image: thumbnailImg.bestdilly,
    imageAlt: '',
    title: 'Best Dilly',
    subTitle: '전국 맛집 공유 플랫폼',
    desc: '맛집을 등록, 수정, 삭제하고 위치를 카카오 지도를 확인할 수 있습니다.',
    skill: 'React, TypeScript',
    link: 'https://best-dilly.vercel.app/',
  },
  // {
  //   image: thumbnailImg.incheon,
  //   title: 'Incheon Parking',
  //   subTitle: '인천광역시 주차장 정보 현황을 공유하는 웹페이지',
  //   desc: '인천광역시 주차장 현황과 전체 주차면적 수를 알 수 있습니다. 지도 아이콘을 클릭하면 해당위치의 지도로 위치가 변경됩니다.',
  //   skill: 'React, TypeScript',
  //   link: 'https://incheon-parking.vercel.app/',
  // },
  {
    image: thumbnailImg.pokemonBook,
    imageAlt: '신난다! 피카츄(을)를 잡았다! pokemon 안전하고 간편하게! 포켓몬 도감 만들기',
    title: 'Pokemon Book',
    subTitle: '포켓몬 리스트 도감',
    desc: '포켓몬 종류에 대한 정보와 기본 능력치를 알 수 있는 포켓몬 도감입니다.',
    skill: 'React, TypeScript',
    link: 'https://pokemon-book-one.vercel.app/',
  },
  {
    image: thumbnailImg.pokemon,
    imageAlt: 'Pokemon GO',
    title: 'Pokemon',
    subTitle: '포켓몬을 잡고 합성할 수 있는 웹페이지',
    desc: '포켓몬을 사냥하고, 사냥한 포켓몬은 가방에 저장되며 랜덤으로 합성이 가능합니다.',
    skill: 'React, TypeScript',
    link: 'https://heesunae.github.io/pokemon/',
  },
];

export const appDesc = [
  {
    image: appImg.bus,
    title: 'Kakao Bus',
    desc: '카카오 버스 도착 정보 어플',
  },
  {
    image: appImg.gallery,
    title: 'Gallery',
    desc: '앨범을 만들고 이미지를 추가하는 갤러리 어플',
  },
  {
    image: appImg.translate,
    title: 'Translation',
    desc: '언어별로 언어 변경해서 볼수있는 포춘쿠키 어플',
  },
  {
    image: appImg.wallpaper,
    title: 'Wallpaper',
    desc: '핸드폰 배경화면을 다운로드 받을 수 있는 어플',
  },
  {
    image: appImg.lotto,
    title: 'Lotto',
    desc: '6개의 로또번호를 랜덤으로 추출해주는 어플',
  },
];
