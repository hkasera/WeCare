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
            shortDesc: 'Hope in lives of millions of people'
        },
        {
            img:'/img/camp5.jpeg',
            name:'New Horizon',
            ngo: {
               name : 'Hope Foundation',
               url : '/ngo/n111001'
            },
            url: '/campaign/c11001',
            shortDesc: 'Promote awareness among people'
        },
        {
            img:'/img/camp6.jpeg',
            name:'Nanhi si duniya',
            ngo: {
               name : 'Hope Foundation',
               url : '/ngo/n111001'
            },
            url: '/campaign/c11001',
            shortDesc: 'Preserving Childhood'
        },
        {
            img:'/img/camp7.jpeg',
            name:'Hosala',
            ngo: {
               name : 'Hope Foundation',
               url : '/ngo/n111001'
            },
            url: '/campaign/c11001',
            shortDesc: 'Lets get rid of habits that take your lives'
        },
        {
            img:'/img/camp8.jpeg',
            name:'Sapne',
            ngo: {
               name : 'Hope Foundation',
               url : '/ngo/n111001'
            },
            url: '/campaign/c11001',
            shortDesc: 'Lets fulfill the dreams in those innocent eyes'
        },
        {
            img:'/img/camp9.jpeg',
            name:'Muskaan',
            ngo: {
               name : 'Hope Foundation',
               url : '/ngo/n111001'
            },
            url: '/campaign/c11001',
            shortDesc: 'Together we can make others smile'
        },
        {
            img:'/img/camp10.jpeg',
            name:'Roshni',
            ngo: {
               name : 'Hope Foundation',
               url : '/ngo/n111001'
            },
            url: '/campaign/c11001',
            shortDesc: 'Awareness is growing.'
        },
        {
            img:'/img/camp11.jpeg',
            name:'Khushi',
            ngo: {
               name : 'Hope Foundation',
               url : '/ngo/n111001'
            },
            url: '/campaign/c11001',
            shortDesc: 'One girl with courage is a revolution'
        },
        {
            img:'/img/camp12.jpeg',
            name:'Health is Wealth',
            ngo: {
               name : 'Hope Foundation',
               url : '/ngo/n111001'
            },
            url: '/campaign/c11001',
            shortDesc: 'Spreading awareness among people about HIV'
        }
        
    ]
}]);