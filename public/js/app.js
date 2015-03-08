var app = angular.module("CampaignIndiaCtrl", ["ngFlowGrid"]);


app.controller('PhotoGridCtrl',['$scope','fgDelegate',function($scope,fgDelegate){
    $scope.campaigns = [
        {
            img:'http://placehold.it/300x600/E97452/fff',
            name:'Udaan',
            ngo: 'Lorem',
            shortDesc: 'Rise and fly'
        },
        {
            img:'http://placehold.it/300x400/E59649/fff',
            name:'Hope',
            ngo: 'Lorem',
            shortDesc: 'We make you see the world with a new hope..'
        },
        {
            img:'http://placehold.it/300x300/4C6EB4/fff',
            name:'Khusiyaan',
            ngo: 'Lorem',
            shortDesc: 'We spread happiness'
        },
        {
            img:'http://placehold.it/300x250/449F93/fff',
            name:'Umeed',
            ngo: 'Lorem',
            shortDesc: 'Lorem ipsum'
        },
        {
            img:'http://placehold.it/200x320/936FBC/fff',
            name:'New Horizon',
            ngo: 'Lorem',
            shortDesc: 'Lorem ipsum'
        },
        {
            img:'http://placehold.it/400x500/D25064/fff',
            name:'Nanhi si duniya',
            ngo: 'Lorem',
            shortDesc: 'Lorem ipsum'
        },
        {
            img:'http://placehold.it/300x200/CF364A/fff',
            name:'Umeed',
            ngo: 'Lorem',
            shortDesc: 'Lorem ipsum'
        },
        {
            img:'http://placehold.it/300x400/E59649/fff',
            name:'Sapne',
            ngo: 'Lorem',
            shortDesc: 'Lorem ipsum'
        },
        {
            img:'http://placehold.it/350x500/75A0CC/fff',
            name:'Muskaan',
            ngo: 'Lorem',
            shortDesc: 'Lorem ipsum'
        },
        {
            img:'http://placehold.it/300x200/4296AD/fff',
            name:'Roshni',
            ngo: 'Lorem',
            shortDesc: 'Lorem ipsum'
        },
        {
            img:'http://placehold.it/300x400/9FDBC7/fff',
            name:'Khushi',
            ngo: 'Lorem',
            shortDesc: 'Lorem ipsum'
        },
        {
            img:'http://placehold.it/300x300/4E8EF7/fff',
            name:'Paheli',
            ngo: 'Lorem',
            shortDesc: 'Lorem ipsum'
        },
        
    ]

    $scope.addItem = function(){
        var randomIndex = Math.floor(Math.random(0,1)* $scope.items.length)
        var newItem = {
            name:$scope.items[randomIndex].name,
            img:$scope.items[randomIndex].img
        }
        // add a new item;
        $scope.items.splice(0,0,newItem);

        // make sure ngRepeat is finished rendering
        $scope.$watch('$last',function(){
            fgDelegate.getFlow('demoGird').itemsChanged();
        });
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