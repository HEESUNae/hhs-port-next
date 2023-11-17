import { appImg, thumbnailImg } from './image';

export const cardDesc = [
  {
    image: thumbnailImg.starbucks,
    title: '스타벅스',
    subTitle: '스타벅스 커피를 소개하는 웹페이지',
    desc: '스타벅스 커피에 대한 종류와 소개를 확인하고 좋아하는 커피를 찜할 수 있습니다.',
    workDesc:
      '카페에서 코딩을 하다가 키오스크에 추천 커피를 보고 아이디어가 떠올랐습니다. TypeScript로 Redux에 익숙해지고자 만들어보게 되었습니다.',
    skill: 'React, TypeScript',
    link: 'https://starbucks-pink.vercel.app/',
  },
  {
    image: thumbnailImg.sweetPotato,
    title: '고답 (고구마 답답이)',
    subTitle: '세상 모든 고구마들을 위한 고민상담 커뮤니티',
    desc: '처음 방문한 유저는 회원가입을 통해 유니크한 아이디를 생성한 후 고민을 작성하고, 수정하고, 삭제할 수 있습니다. 커뮤니티 내에서 모든 유저들은 서로 고구마 라고 부르며, 원한다면 익명으로 아이디를 밝히지 않고도 작성할 수 있습니다. 다른 유저들은 고민에 대해 댓글을 작성하거나 삭제할 수 있습니다.',
    workDesc:
      '그동안 무료 API만으로 포트폴리오를 만드는데 한계를 느꼈고, 직접 CRUD 기능을 구현하여 만들면서 백엔드에 대한 이해도를 높여보고 싶었습니다. 또한 프로젝트 성향상 서로 고민을 주고 받아야 함으로 DB가 필수로 필요하다고 생각되어 디자인부터 백엔드까지 혼자 풀스택으로 작업하게 되었습니다.',
    skill: 'React, TypeScript, Node.js, MongoDB, Mongoose',
    link: 'https://sweet-potato.vercel.app/',
  },
  {
    image: thumbnailImg.covergirl,
    title: 'CoverGirl',
    subTitle: 'CoverGirl 브랜드의 화장품 정보를 카테고리별로 공유하는 웹페이지',
    desc: '화장품 카테고리 클릭시 해당 카테고리의 화장품 정보 리스트가 표출되어 가격을 알 수 있고, 해당 상품의 구매페이지로 이동합니다.',
    workDesc:
      '우연히 화장품 정보를 가져올 수 있는 무료 API를 발견하게 되었고, 화장품 정보 API를 활용하여 포트폴리오 용도로 만들어 보면 좋겠다는 생각이 들었습니다.',
    skill: 'React, TypeScript',
    link: 'https://react-cover-girl.vercel.app/',
  },
  {
    image: thumbnailImg.bestdilly,
    title: 'Best Dilly',
    subTitle: '전국 맛집 공유 플랫폼',
    desc: '맛집을 등록, 수정, 삭제하고 위치를 카카오 지도를 확인할 수 있습니다.',
    workDesc:
      '평소 맛집 탐방을 좋아해서 블로그를 찾아보다가 문득 아이디어가 떠올라서 만들어 보았습니다. 무료 카카오지도 API와 카카오 길찾기 API를 활용하여 위치를 확인할 수 있습니다. 백엔드가 없어서 로컬스토리지에 데이터를 저장하고 꺼내오고 삭제하는 방식으로 작업했습니다.',
    skill: 'React, TypeScript',
    link: 'https://best-dilly.vercel.app/',
  },
  {
    image: thumbnailImg.incheon,
    title: 'Incheon Parking',
    subTitle: '인천광역시 주차장 정보 현황을 공유하는 웹페이지',
    desc: '인천광역시 주차장 현황과 전체 주차면적 수를 알 수 있습니다. 지도 아이콘을 클릭하면 해당위치의 지도로 위치가 변경됩니다.',
    workDesc:
      '공공데이터포털에서 제공하는 무료 API를 활용하여 실시간으로 인천광역시 주차장 현황을 알려주고자 작업을 시작하게 되었으나, 무료 API가 실시간 주차장 수를 알려주는 값을 반환하지 않아서 버그를 신고하고 아쉽게도 실시간 주차장 수는 반영하지 못했습니다. 그래도 카카오지도를 활용해 볼 수 있었던 좋은 경험이였습니다.',
    skill: 'React, TypeScript',
    link: 'https://incheon-parking.vercel.app/',
  },
  {
    image: thumbnailImg.pokemonBook,
    title: 'Pokemon Book',
    subTitle: '포켓몬 리스트 도감',
    desc: '포켓몬 종류에 대한 정보와 기본 능력치를 알 수 있는 포켓몬 도감입니다.',
    workDesc: '패스트캠퍼스 강의 수강중에 포켓몬 도감 만들기가 있었고 디자인이 마음에 들어서 클론코딩 해보았습니다.',
    skill: 'React, TypeScript',
    link: 'https://pokemon-book-one.vercel.app/',
  },
  {
    image: thumbnailImg.pokemon,
    title: 'Pokemon',
    subTitle: '포켓몬을 잡고 합성할 수 있는 웹페이지',
    desc: '포켓몬을 사냥하고, 사냥한 포켓몬은 가방에 저장되며 랜덤으로 합성이 가능합니다.',
    workDesc:
      '무료 포켓몬 API를 활용하여 React 상태관리와 TypeScript에 익숙해지고자 만들어 보았습니다. API KEY 값이 필요없는 무료 API로 호출되는 속도가 느릴 수도 있습니다.',
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
