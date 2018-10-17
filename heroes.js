angular.module('Heroes', [])
.factory('postFactory', [function(){
  var o = {
    posts: [{hero: "Thanos", image: "Media/thanos.jpg", content: "Easy as pie? I prefer easy as snap...*snaps fingers*... Too soon?", likes: 54, loves: 67, laughs: 0, wows: 23, sads: 253, angrys: 9001},
            {hero: "Thor", image: "Media/thor.jpg", content: "@Hulk You’re big. I’ve fought bigger.", likes: 21, loves: 8, laughs: 43, wows: 2, sads: 0, angrys: 1},
            {hero: "Hawkeye", image: "Media/hawkeye.jpg", content: "Hey, look at me. It's your fault, it's everyone's fault, who cares. Are you up for this? Are you? Look, I just need to know, cause the city is flying. Okay, look, the city is flying, we're fighting an army of robots, and I have a bow and arrow. None of this makes sense. But I'm going back out there because it's my job. Okay? And I can't do my job and babysit. It doesn't matter what you did, or what you were. If you go out there, you fight, and you fight to kill. Stay in here, you're good, I'll send your brother to come find you, but if you step out that door, you are an Avenger. Alright, good chat. Yeah, the city is flying.", likes: 5, loves: 345, laughs: 0, wows: 45, sads: 12, angrys: 2},
            {hero: "Ant Man", image: "Media/ant_man.jpeg", content: "Sorry I'm late, I was saving the world. You know how it is.", likes: 1, loves: 0, laughs: 434, wows: 23, sads: 0, angrys: 0},
            {hero: "Black Panther", image: "Media/black_panther.png", content: "I never freeze.", likes: 10, loves: 0, laughs: 243, wows: 1, sads: 0, angrys: 0},
            {hero: "Black Widow", image: "Media/bwidow.jpg", content: "The truth is a matter of circumstance. It's not all things to all people all the time. And neither am I.", likes: 2, loves: 4, laughs: 0, wows: 35, sads: 0, angrys: 1},
            {hero: "Captain America", image: "Media/cap.jpg", content: "I am Steve Rogers.", likes: 32, loves: 0, laughs: 45, wows: 0, sads: 1, angrys: 0},
            {hero: "Dr. Strange", image: "Media/dr_strange.jpg", content: "There is no such thing as spirit! We are made of matter and nothing more. You’re just another tiny, momentary speck within an indifferent universe.", likes: 15, loves: 56, laughs: 0, wows: 12, sads: 2, angrys: 0},
            {hero: "Hulk", image: "Media/hulk.jpg", content: "You're making me angry. You wouldn't like me when I'm angry.", likes: 5, loves: 0, laughs: 0, wows: 0, sads: 2, angrys: 34}
            ],
    heroes: ['Thor', 'Thanos', 'Captain America', 'Iron Man', 
             'Hulk', 'Loki', 'Black Widow', 'Vision', 'Nick Fury', 
             'Dr. Strange', 'Black Panther', 'Hawkeye', 'Ant Man', 'Scarlet Witch'],
    images: [{hero: 'Thor', image: "Media/thor.jpg"}, {hero: 'Thanos', image: 'Media/thanos.jpg'}, {hero: 'Captain America', image: 'Media/cap.jpg'},
             {hero: 'Iron Man', image: "Media/tony.jpg"}, {hero: 'Hulk', image:'Media/hulk.jpg'}, {hero: 'Loki', image:'Media/loki.jpg'},
             {hero: 'Black Widow', image: 'Media/bwidow.jpg'}, {hero: 'Vision', image: 'Media/vision.jpg'}, {hero: 'Nick Fury', image: 'Media/nick_fury.jpg'}, 
             {hero: 'Dr. Strange', image: 'Media/dr_strange.jpg'}, {hero: 'Black Panther', image: 'Media/black_panther.png'}, {hero: 'Hawkeye', image: 'Media/hawkeye.jpg'}, 
             {hero: 'Ant Man', image: 'Media/ant_man.jpeg'}, {hero: 'Scarlet Witch', image: 'Media/scarlet_witch.jpg'}]
  };
  return o;
}])
.controller('MainCtrl', [
'$scope',
'postFactory',
function($scope, postFactory){
  $scope.test = 'Hello world!';
  
  $scope.formContent = {text: "", word: /^\s*\w*\s*$/};

  $scope.posts = postFactory.posts;
  
  $scope.heroes = postFactory.heroes;
  
  $scope.images = postFactory.images;
  
  $scope.currentPage = "Home"
  
  $scope.isHome = true;
  
  $scope.currentFilter = "likes";

  $scope.addPost = function(){
    console.log($scope.formContent);
    if($scope.formContent === '') { return; }
    var address = $scope.images.find(image => image.hero == $scope.currentPage);
    var post = {hero: $scope.currentPage, image: address.image, content: $scope.formContent.text, likes: 0, loves: 0, laughs: 0, wows: 0, sads: 0, angrys: 0}
    $scope.posts.push(post);
    $scope.formContent = '';
    postFactory.posts.push(post);
  };

  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };
  $scope.filterPosts = function(post){
    $scope.posts = postFactory.posts.filter(stored => stored.hero == post.hero);
    $scope.currentPage = post.hero
    $scope.isHome = false;
  }
  $scope.goHome = function(){
    $scope.posts = postFactory.posts;
    $scope.currentPage = "Home"
    $scope.isHome = true;
  }
  $scope.userPage = function(hero){
    $scope.posts = postFactory.posts.filter(post => post.hero == hero);
    $scope.currentPage = hero
    $scope.isHome = false;
  }
  
  $scope.upLikes = function(post){
    console.log(post);
    post.likes++
  }
  
  $scope.upLoves = function(post){
    post.loves++
  }
  
  $scope.upLaughs = function(post){
    post.laughs++
  }
  
  $scope.upWows = function(post){
    post.wows++
  }
  
  $scope.upSads = function(post){
    post.sads++
  }
  
  $scope.upAngrys = function(post){
    post.angrys++
  }
  
  $scope.changeFilter = function(type){
    console.log(type);
    $scope.currentFilter = type;
  }
}]);
