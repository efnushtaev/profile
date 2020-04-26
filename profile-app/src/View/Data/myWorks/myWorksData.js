import thumbnailsPictures from './thumbnailsPictures.js';

const gitHubRepoURL = 'https://github.com/efnushtaev/';
const gitHubPagesURL = 'https://efnushtaev.github.io/';


const myWorksData = {
    thumbnails: [{
        id: 1,
        title: 'Landing Page #1',
        year: '2017',
        describe: 'Простой лэндинг. Был выполнен в учебных целях. Не для коммерческого использования',
        body: 'HTML, CSS',
        gitHubRepoURL: gitHubRepoURL + 'Landings/tree/master/NonprofitLanPage_3/',
        picture: thumbnailsPictures.Piroll,
        url: gitHubPagesURL + 'Landings/NonprofitLanPage_3/'
    },
    {
        id: 2,
        title: '9shop Market',
        body: 'HTML, CSS, jQuery',
        describe: 'Интернет магазин. Мной был проведен редизайн по составленному маркетологами ТЗ',
        year: '2019',
        gitHubRepoURL: null,
        picture: thumbnailsPictures.Nineshop,
        url: 'https://9-shop.ru/'
    },
    {
        id: 3,
        title: 'Innobet Online Betting',
        body: 'HTML, CSS',
        year: '2019',
        gitHubRepoURL: gitHubRepoURL + 'Landings/tree/master/BettingLanPage_Innobet/',
        picture: thumbnailsPictures.Innobet,
        url: gitHubPagesURL + 'Landings/BettingLanPage_Innobet/'
    },
    {
        id: 4,
        title: 'Nani hotel',
        body: 'HTML, CSS, jQuery',
        year: '2019',
        gitHubRepoURL: gitHubRepoURL + 'Landings/tree/master/LanPage_1_Nani/',
        picture: thumbnailsPictures.NaniHotel,
        url: 'http://www.jambu9.ru/'
    }


],
}

export default myWorksData;