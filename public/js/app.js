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

    $scope.loadText = "Load More..";
    $scope.loaded = false;

    $scope.newCampaigns = [
        {
            img:'http://lorempixel.com/300/600/transport',
            name:'Udaan',
            ngo: {
               name : 'Lorem',
               url : '/ngo/n111001'
            },
            shortDesc: 'Rise and fly',
            url: '/campaign/c11001',
            id: '110001'
        },
        {
            img:'http://lorempixel.com/300/400/abstract',
            name:'Hope',
            ngo: {
               name : 'Lorem',
               url : '/ngo/n111001'
            },
            url: '/campaign/c11001',
            shortDesc: 'We make you see the world with a new hope..'
        },
        {
            img:'http://lorempixel.com/300/300/people',
            name:'Khusiyaan',
            ngo: {
               name : 'Lorem',
               url : '/ngo/n111001'
            },
            url: '/campaign/c11001',
            shortDesc: 'We spread happiness'
        },
        {
            img:'http://lorempixel.com/300/250/people',
            name:'Umeed',
            ngo: {
               name : 'Lorem',
               url : '/ngo/n111001'
            },
            url: '/campaign/c11001',
            shortDesc: 'Lorem ipsum'
        },
        {
            img:'http://lorempixel.com/200/320/nature',
            name:'New Horizon',
            ngo: {
               name : 'Lorem',
               url : '/ngo/n111001'
            },
            url: '/campaign/c11001',
            shortDesc: 'Lorem ipsum'
        },
        {
            img:'http://lorempixel.com/400/500/technics',
            name:'Nanhi si duniya',
            ngo: {
               name : 'Lorem',
               url : '/ngo/n111001'
            },
            url: '/campaign/c11001',
            shortDesc: 'Lorem ipsum'
        },
        {
            img:'http://lorempixel.com/300/200/nature',
            name:'Umeed',
            ngo: {
               name : 'Lorem',
               url : '/ngo/n111001'
            },
            url: '/campaign/c11001',
            shortDesc: 'Lorem ipsum'
        },
        {
            img:'http://lorempixel.com/300/400/nature',
            name:'Sapne',
            ngo: {
               name : 'Lorem',
               url : '/ngo/n111001'
            },
            url: '/campaign/c11001',
            shortDesc: 'Lorem ipsum'
        },
        {
            img:'http://lorempixel.com/350/500/nature',
            name:'Muskaan',
            ngo: {
               name : 'Lorem',
               url : '/ngo/n111001'
            },
            url: '/campaign/c11001',
            shortDesc: 'Lorem ipsum'
        },
        {
            img:'http://lorempixel.com/300/200/nature',
            name:'Roshni',
            ngo: {
               name : 'Lorem',
               url : '/ngo/n111001'
            },
            url: '/campaign/c11001',
            shortDesc: 'Lorem ipsum'
        },
        {
            img:'http://lorempixel.com/300/400/nature',
            name:'Khushi',
            ngo: {
               name : 'Lorem',
               url : '/ngo/n111001'
            },
            url: '/campaign/c11001',
            shortDesc: 'Lorem ipsum'
        },
        {
            img:'http://lorempixel.com/300/300/nature',
            name:'Paheli',
            ngo: {
               name : 'Lorem',
               url : '/ngo/n111001'
            },
            url: '/campaign/c11001',
            shortDesc: 'Lorem ipsum'
        },
        
    ]



    $scope.addItem = function(){
        $scope.loadText = "Loading..";
        for(campaign in $scope.newCampaigns){

            var newItem = $scope.newCampaigns[campaign];
            //debugger;
            // add a new item;
            $scope.campaigns.splice(0,0,newItem);
        }


            // make sure ngRepeat is finished rendering
            $scope.$watch('$last',function(){
                fgDelegate.getFlow('demoGird').itemsChanged();
                $scope.addItem = function() {};
            });
            $scope.loadText = "No more results..";
            $scope.loaded = true;
    }

    $scope.changeWidth = function(width){
        var flow = fgDelegate.getFlow('demoGird')

        flow.minItemWidth += width;
        fgDelegate.getFlow('demoGird').refill(true);
    }

    // then you can:
    // homePageGrid.minItemWidth = 150;
    // homePageGrid.refill();

}]);