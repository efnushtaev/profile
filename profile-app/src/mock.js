import Piroll from './View/Assets/img/main/thumbnails/piroll.jpg';
import Nineshop from './View/Assets/img/main/thumbnails/9market.jpg';
import Innobet from './View/Assets/img/main/thumbnails/inno.jpg';
import NaniHotel from './View/Assets/img/main/thumbnails/nani.jpg';
import Todolist from './View/Assets/img/main/thumbnails/todolist.jpg';
import ItKamasutra from './View/Assets/img/main/thumbnails/itKamasutra.jpg';

import tShirts from './View/Assets/img/main/creatives/tshirts.jpg';

const gitHubRepoURL = 'https://github.com/efnushtaev/';
const gitHubPagesURL = 'https://efnushtaev.github.io/';

// If project has no repository - gitHubRepoURL should be '#'

export const myWorksData = [
  {
    id: 1,
    workNum: 1,
    title: 'Landing Page #3',
    year: '',
    describe: 'Простой лэндинг. Не для коммерческого использования',
    technology: ['HTML', 'CSS'],
    gitHubRepoURL: gitHubRepoURL + 'Landings/tree/master/NonprofitLanPage_3/',
    picture: Piroll,
    url: gitHubPagesURL + 'Landings/NonprofitLanPage_3/'
  },
  {
    id: 2,
    workNum: 2,
    title: '9shop Market',
    year: '',
    describe:
      'Интернет магазин. Был проведен полный редизайн по составленному маркетологами ТЗ',
    technology: ['HTML', 'CSS', 'jQuery'],
    gitHubRepoURL: '#',
    picture: Nineshop,
    url: 'https://9-shop.ru/'
  },
  {
    id: 3,
    workNum: 3,
    title: 'Innobet Online Betting',
    technology: ['HTML', 'CSS', 'JavaScript'],
    describe:
      'Промо лэндинг для сервиса спортивных ставок с регистрацией пользователя по API основного сервиса',
    year: '',
    gitHubRepoURL:
      gitHubRepoURL + 'Landings/tree/master/BettingLanPage_Innobet/',
    picture: Innobet,
    url: gitHubPagesURL + 'Landings/BettingLanPage_Innobet/'
  },
  {
    id: 4,
    workNum: 4,
    title: 'Nani hotel',
    technology: ['HTML', 'CSS', 'JavaScript'],
    describe:
      'Лэндинг для минии-отеля с возможность бронирования номеров при помощью плагина realCalendar',
    year: '',
    gitHubRepoURL: gitHubRepoURL + 'Landings/tree/master/LanPage_1_Nani/',
    picture: NaniHotel,
    url: 'http://www.jambu9.ru/'
  },
  {
    id: 5,
    workNum: 5,
    title: 'Todolist SPA',
    technology: ['React', 'TypeScript', 'Materialize'],
    describe:
      'ss',
    year: '',
    gitHubRepoURL: gitHubRepoURL + 'todo-react-ts/',
    picture: Todolist,
    url: 'https://efnushtaev.github.io/todo-react-ts/#/'
  },
  {
    id: 6,
    workNum: 6,
    title: 'Social Network SPA',
    technology: ['React', 'Redux'],
    describe:
      'ss',
    year: '',
    gitHubRepoURL: gitHubRepoURL + 'it-kamasutra-network/',
    picture: ItKamasutra,
    url: 'https://efnushtaev.github.io/it-kamasutra-network/#/profile'
  }
];

export const myCreatives = [
  {
    src: tShirts,
    width: 4,
    height: 5
  },
  {
    src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
    width: 3,
    height: 3
  },
  {
    src: 'https://source.unsplash.com/qDkso9nvCg0/600x799',
    width: 3,
    height: 3
  },
  {
    src: 'https://source.unsplash.com/iecJiKe_RNg/600x799',
    width: 3,
    height: 3
  },
  {
    src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799',
    width: 3,
    height: 4
  },
  {
    src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599',
    width: 4,
    height: 3
  },
  // {
  //   src: 'https://source.unsplash.com/zh7GEuORbUw/600x799',
  //   width: 3,
  //   height: 4
  // },
  // {
  //   src: 'https://source.unsplash.com/PpOHJezOalU/800x599',
  //   width: 4,
  //   height: 3
  // },
  // {
  //   src: 'https://source.unsplash.com/I1ASdgphUH4/800x599',
  //   width: 4,
  //   height: 3
  // }
];
