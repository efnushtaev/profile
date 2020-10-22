import Piroll from './../View/Assets/img/myWorks/thumbnails/piroll.jpg'
import Nineshop from './../View/Assets/img/myWorks/thumbnails/9market.jpg';
import Innobet from './../View/Assets/img/myWorks/thumbnails/inno.jpg';
import NaniHotel from './../View/Assets/img/myWorks/thumbnails/nani.jpg';

const gitHubRepoURL = 'https://github.com/efnushtaev/';
const gitHubPagesURL = 'https://efnushtaev.github.io/';

// If project has no repository - gitHubRepoURL should be '#'

export const myWorksData = {
  thumbnails: [{
    id: 1,
    title: 'Landing Page #3',
    year: '',
    describe: 'Простой лэндинг. Не для коммерческого использования',
    technology: 'HTML, CSS',
    gitHubRepoURL: gitHubRepoURL + 'Landings/tree/master/NonprofitLanPage_3/',
    picture: Piroll,
    url: gitHubPagesURL + 'Landings/NonprofitLanPage_3/'
  },
  {
    id: 2,
    title: '9shop Market',
    year: '',
    describe: 'Интернет магазин. Был проведен полный редизайн по составленному маркетологами ТЗ',
    technology: 'HTML, CSS, jQuery',
    gitHubRepoURL: '#',
    picture: Nineshop,
    url: 'https://9-shop.ru/'
  },
  {
    id: 3,
    title: 'Innobet Online Betting',
    technology: 'HTML, CSS, JS, RESTful',
    describe: 'Промо лэндинг для сервиса спортивных ставок с регистрацией пользователя по API основного сервиса',
    year: '',
    gitHubRepoURL: gitHubRepoURL + 'Landings/tree/master/BettingLanPage_Innobet/',
    picture: Innobet,
    url: gitHubPagesURL + 'Landings/BettingLanPage_Innobet/'
  },
  {
    id: 4,
    title: 'Nani hotel',
    technology: 'HTML, CSS, JS',
    describe: 'Лэндинг для минии-отеля с возможность бронирования номеров при помощью плагина realCalendar',
    year: '',
    gitHubRepoURL: gitHubRepoURL + 'Landings/tree/master/LanPage_1_Nani/',
    picture: NaniHotel,
    url: 'http://www.jambu9.ru/'
  }],
  spaItems: [{
    title: 'Fantastick Network Project',
    describe: 'Некоммерчекий проект социальной сети. Обмен данных по RESTfull-api проекта "IT-Kamasutra". Разработка проекта продолжается.',
    url: 'https://efnushtaev.github.io/it-kamasutra-network/#/',
    gitHubLink: 'https://github.com/efnushtaev/it-kamasutra-network'
  },
  {
    title: 'Awesome Finance App',
    describe: '',
    url: 'https://efnushtaev.github.io/finance-app/#/',
    gitHubLink: 'https://github.com/efnushtaev/finance-app'
  }

  ]
}
