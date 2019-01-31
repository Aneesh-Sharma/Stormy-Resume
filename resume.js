var w = window.innerWidth;
var h = window.innerHeight;
var bgColor = "#2ECCFA";
var text;
var direction="left";
var hero;
var cursors;
var base7 =19500+1400;
var platformLength = base7+2000;
var delay =0;
var cloud;
var intro;
var bird1,bird2,bird3;
var starting_point=150;
var game = new Phaser.Game(w,h,Phaser.CANVAS,'canvas',{preload:preload,create:create,update:update,render:render});

function preload(){

	text = game.add.text(w/2, h/2, "Loading...",{ font:"80px Roboto",fill: '#ffffff' });
	text.anchor.setTo(0.5,0.5);
	game.load.image('ground','assets/ground.jpg');
	game.load.image('grass','assets/grass.png');
	game.load.image('birds','assets/bird1.png');
	game.load.image('back','assets/back64.png');
	game.load.image('cloud','assets/cloud2.png');
	game.load.atlasJSONHash('aneesh','assets/man.png','assets/man.json');
	game.load.image('grass2','assets/grass2.png');
	game.load.image('intro','assets/intro.png');
	game.load.image('tree','assets/tree1.png');
	game.load.image('tree2','assets/tree2.png');
	
}

function create(){
	text.setText("");

	
	//Add birds
	bird1 = game.add.sprite(50,0,'birds');
	bird1.fixedToCamera = true;
	bird1.scale.setTo(0.06,0.06);
	game.add.tween(bird1.cameraOffset).to( { y:10 }, 2000, Phaser.Easing.Back.InOut, true, 0, 2000, true);
	
	bird2 = game.add.sprite(150,0,'birds');
	bird2.fixedToCamera = true;
	bird2.scale.setTo(0.05,0.05);
	game.add.tween(bird2.cameraOffset).to( { y:10 }, 2000, Phaser.Easing.Back.InOut, true, 0, 2000, true);
	
	bird3 = game.add.sprite(132,45,'birds');
	bird3.fixedToCamera = true;
	bird3.scale.setTo(0.05,0.05);
	game.add.tween(bird3.cameraOffset).to( { y:55 }, 2000, Phaser.Easing.Back.InOut, true, 0, 2000, true);
	

	//Add Clouds
	for(var i=w;i<20000;i+=800){
		cloud=game.add.sprite(i,h-680,'cloud');
		cloud.scale.setTo(0.4,0.3);
		cloud=game.add.sprite(i+380,h-700,'cloud');
		cloud.scale.setTo(0.4,0.3);
		i+= Math.floor((Math.random() * 700) + 1);
	}

	//Intro	
	var tree = game.add.sprite(800,h-700,'tree');
	tree.scale.setTo(0.4,0.4);
	tree = game.add.sprite(0,h-100-480,'tree2');
	tree = game.add.sprite(440,0,'tree2');
   // tree.scale.setTo(1.4,1.4);
	intro=game.add.sprite(200,h-100-408,'intro');
	
	//adding grass ground and sky
	game.stage.backgroundColor =bgColor;
	game.world.setBounds(0, 0,platformLength,h+800);
	var grass2 = game.add.tileSprite(0,h-150,platformLength*2,250,'grass2');
	grass2.scale.setTo(0.4,0.4);
	var ground = game.add.tileSprite(0,h-100,platformLength*2,2000,'ground');
	ground.scale.setTo(0.5,0.5);
	var grass = game.add.tileSprite(0,h-100,platformLength*2,50,'grass');
	grass.scale.setTo(0.5,0.5);

	//add buttons
	back_btn = game.add.button(10,h-94,'back');
	fwd_btn = game.add.button(w-10,h-94,'back');
	fwd_btn.scale.x *= -1;
	fwd_btn.fixedToCamera = true;
	back_btn.fixedToCamera = true;
	
	//add hero
	hero = game.add.sprite(100,-200,'aneesh');
	hero.animations.add('run');
	var entryTween = game.add.tween(hero);
	entryTween.to({x:starting_point,y:h-318},2000,Phaser.Easing.Bounce.Out, true);
	entryTween.start();

	cursors = game.input.keyboard.createCursorKeys();
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.physics.arcade.enable(hero);
	game.camera.follow(hero);
	game.camera.follow(hero,Phaser.Camera.FOLLOW_PLATFORMER);

	
}

function update(){

	if(forwardButtonPressed()){
		hero.x +=30;
	}
	else if(backButtonPressed()){
		hero.x -=30;
	}else{
		hero.animations.stop('run');
	}
	
	if(hero.x <=150&&direction=="left"){
		hero.x = 150;
	}
}

function render(){
	
	
}

function forwardButtonPressed(){
	
	var ptr = game.input.activePointer ;
	hero.animations.play('run',15,true);

	if((ptr.x>=w-150 && ptr.y>=h-150&&ptr.isDown)||cursors.right.isDown||scroll>0)
	{
		if(direction =="left"){
			direction= "right";
			hero.scale.setTo(1,1);	
		}
		return true;
	}
	else
	{
		return false;
	}

}

function backButtonPressed(){3
	var ptr = game.input.activePointer ;
	hero.animations.play('run',15,true); 
	if((ptr.x<=150 && ptr.y>=h-150&&ptr.isDown)||cursors.left.isDown||scroll<0)
	{
		if(direction =="right"){
			direction= "left";
			hero.scale.setTo(-1,1);
		}
		return true;
	}
	else		
		return false;
}