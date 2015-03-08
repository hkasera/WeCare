var app = angular.module("CampaignIndiaCtrl", ["ngFlowGrid"]);


app.controller('PhotoGridCtrl',['$scope','fgDelegate',function($scope,fgDelegate){
    $scope.campaigns = [
        {
            img:'/img/camp1.jpeg',
            name:'Udaan',
            ngo: {
               name : 'Hope Foundation',
               url : '/ngo/n111001'
            },
            shortDesc: 'Rise and fly',
            url: '/campaign/c11001',
            id: '110001'
        },
        {
            img:'/img/camp2.jpeg',
            name:'Hope',
            ngo: {
               name : 'Hope Foundation',
               url : '/ngo/n111001'
            },
            url: '/campaign/c11001',
            shortDesc: 'We make you see the world with a new hope..'
        },
        {
            img:'/img/camp3.jpeg',
            name:'Khusiyaan',
            ngo: {
               name : 'Hope Foundation',
               url : '/ngo/n111001'
            },
            url: '/campaign/c11001',
            shortDesc: 'We spread happiness'
        },
        {
            img:'/img/camp4.jpeg',
            name:'Umeed',
            ngo: {
               name : 'Hope Foundation',
               url : '/ngo/n111001'
            },
            url: '/campaign/c11001',
            shortDesc: 'Lorem ipsum'
        },
        {
            img:'/img/camp5.jpeg',
            name:'New Horizon',
            ngo: {
               name : 'Hope Foundation',
               url : '/ngo/n111001'
            },
            url: '/campaign/c11001',
            shortDesc: 'Lorem ipsum'
        },
        {
            img:'/img/camp6.jpeg',
            name:'Nanhi si duniya',
            ngo: {
               name : 'Hope Foundation',
               url : '/ngo/n111001'
            },
            url: '/campaign/c11001',
            shortDesc: 'Lorem ipsum'
        },
        {
            img:'/img/camp7.jpeg',
            name:'Umeed',
            ngo: {
               name : 'Hope Foundation',
               url : '/ngo/n111001'
            },
            url: '/campaign/c11001',
            shortDesc: 'Lorem ipsum'
        },
        {
            img:'/img/camp8.jpg',
            name:'Sapne',
            ngo: {
               name : 'Hope Foundation',
               url : '/ngo/n111001'
            },
            url: '/campaign/c11001',
            shortDesc: 'Lorem ipsum'
        },
        {
            img:'/img/camp9.jpg',
            name:'Muskaan',
            ngo: {
               name : 'Hope Foundation',
               url : '/ngo/n111001'
            },
            url: '/campaign/c11001',
            shortDesc: 'Lorem ipsum'
        },
        {
            img:'/img/camp10.jpg',
            name:'Roshni',
            ngo: {
               name : 'Hope Foundation',
               url : '/ngo/n111001'
            },
            url: '/campaign/c11001',
            shortDesc: 'Lorem ipsum'
        },
        {
            img:'/img/camp11.jpeg',
            name:'Khushi',
            ngo: {
               name : 'Hope Foundation',
               url : '/ngo/n111001'
            },
            url: '/campaign/c11001',
            shortDesc: 'Lorem ipsum'
        },
        {
            img:'/img/camp12.png',
            name:'Paheli',
            ngo: {
               name : 'Hope Foundation',
               url : '/ngo/n111001'
            },
            url: '/campaign/c11001',
            shortDesc: 'Lorem ipsum'
        },
        
    ]
}]);