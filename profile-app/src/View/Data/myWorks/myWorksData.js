import thumbnailsPictures from './thumbnailsPictures.js';

const gitHubRepoURL = 'https://github.com/efnushtaev/';
const gitHubPagesURL = 'https://efnushtaev.github.io/';

//If project has no repository gitHubRepoURL should be '#'


const myWorksData = {
    thumbnails: [{
        id: 1,
        title: 'Landing Page #3',
        year: '',
        describe: 'Простой лэндинг. Выполнен в учебных целях. Не для коммерческого использования',
        technology: 'HTML, CSS',
        gitHubRepoURL: gitHubRepoURL + 'Landings/tree/master/NonprofitLanPage_3/',
        picture: thumbnailsPictures.Piroll,
        url: gitHubPagesURL + 'Landings/NonprofitLanPage_3/'
    },
    {
        id: 2,
        title: '9shop Market',
        year: '',
        describe: 'Интернет магазин. Был проведен полный редизайн по составленному маркетологами ТЗ',
        technology: 'HTML, CSS, jQuery',
        gitHubRepoURL: '#',
        picture: thumbnailsPictures.Nineshop,
        url: 'https://9-shop.ru/'
    },
    {
        id: 3,
        title: 'Innobet Online Betting',
        technology: 'HTML, CSS, JS, RESTful',
        describe: 'Промо лэндинг для сервиса спортивных ставок с регистрацией пользователя по API основного сервиса',
        year: '',
        gitHubRepoURL: gitHubRepoURL + 'Landings/tree/master/BettingLanPage_Innobet/',
        picture: thumbnailsPictures.Innobet,
        url: gitHubPagesURL + 'Landings/BettingLanPage_Innobet/'
    },
    {
        id: 4,
        title: 'Nani hotel',
        technology: 'HTML, CSS, JS',
        describe: 'Лэндинг для минии-отеля с возможность бронирования номеров при помощью плагина realCalendar',
        year: '',
        gitHubRepoURL: gitHubRepoURL + 'Landings/tree/master/LanPage_1_Nani/',
        picture: thumbnailsPictures.NaniHotel,
        url: 'http://www.jambu9.ru/'
    }


],
}

export default myWorksData;