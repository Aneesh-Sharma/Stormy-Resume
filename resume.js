var w = window.innerWidth;
var h = window.innerHeight;
var bgColor = "#2ECCFA";
var text;
var direction="left";
var hero;
var cursors;
var base7 =16923;
var platformLength = base7+2000;
var delay =0;
var cloud;
var evil,fight,evilTween;
var intro;
var inst_text;
var level;
var stone;
var hospital;
var rocket12,rocket10,platform,spaceShip;
var bird1,bird2,bird3;
var tnt,tntPress=false;
var evil_killed=false;
var mushroom,isBig=true;
var moving_coin,moving_coin1,moving_coin2,moving_coin3;
var box,box2,box3,box4,box5,box6,box7,box8;
var boom,boom2,boom3,boom4,boom5,boom6,boom7,boom8;
var cpp,android,react,html,css,js,python,spring;
var starting_point=150;
var owlChatter_url="https://owlchatter.ml";
var burger_url="https://aneeshburger.tk";
var maths_url="https://www.youtube.com/channel/UCk2LItw7-RzhihHWlMW8agg";
var game = new Phaser.Game(w,h,Phaser.CANVAS,'canvas',{preload:preload,create:create,update:update,render:render});

function preload(){

	text = game.add.text(w/2, h/2, "                    Loading...\n\n Best view in Landscape Mode",{ font:"80px Roboto",fill: '#ffffff' });
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
	game.load.image('stone','assets/stone.png');
	game.load.image('level','assets/level.png');
	game.load.image('hospital','assets/hospital.png');
	game.load.image('baby','assets/baby.png');
	game.load.image('hometown','assets/hometown.png');
	game.load.image('table','assets/table.png');
	game.load.image('school','assets/school.png');
	game.load.image('schoolRoom','assets/classRoom.png');
	game.load.image('teacher','assets/teacher1.png');
	game.load.image('rocket12','assets/rocket1.png');
	game.load.image('rocket10','assets/rocket10.png');
	game.load.image('platform','assets/platform.jpg');
	game.load.image('nasa','assets/nasa.png');
	game.load.image('mars','assets/mars1.png');
	game.load.image('jupiter','assets/jupiter2.png');
	game.load.image('ufo','assets/ufo1.png');
	game.load.image('dtu','assets/dtu.png');
	game.load.image('spaceShip','assets/spaceShip1.png');
	game.load.image('no1','assets/no1.png');
	game.load.image('tntc','assets/tntc.png');
	game.load.image('tnto','assets/tnto.png');
	game.load.image('box','assets/box.png');
	game.load.image('boom','assets/boom.png');
	game.load.image('cpp','assets/cpp_logo.png');
	game.load.image('android','assets/android.png');
	game.load.image('react','assets/react.png');
	game.load.image('html','assets/html.png');
	game.load.image('css','assets/css.png');
	game.load.image('js','assets/js.png');
	game.load.image('python','assets/python.png');
	game.load.image('spring','assets/spring.png');
	game.load.spritesheet('explode', 'assets/explode.png', 128, 128);
	game.load.image('chicken','assets/chicken.png');
	game.load.image('woodenboard','assets/woodenboard.png');
	game.load.image('amazon','assets/amazon.png');
	game.load.image('dtuLogo','assets/dtuLogo.png');
	game.load.image('fence','assets/fence.png');
	game.load.image('farmHouse','assets/farmHouse.png');
	game.load.image('mill','assets/mill.png');
	game.load.image('farmtree','assets/farmtree.png');
	game.load.image('haypile','assets/haypile.png');
	game.load.image('evil','assets/evil.png');
	game.load.image('fight','assets/fight.png');
	//game.load.image('sheep','assets/sheep.png');
	game.load.image('cow','assets/cow.png');
	//game.load.image('elephant','assets/elephant.png');
	game.load.atlasJSONHash('coin_moving','assets/coin-sprite.png','assets/coin-sprite-map.json');
	game.load.image('alexa','assets/alexaIntern.png');
	game.load.image('maths','assets/maths.png');
	game.load.image('owlChatter','assets/owlChatter.png');
	game.load.image('play','assets/play.png');
	game.load.image('burger','assets/burger.png');
	game.load.image('chatTracker','assets/chatTracker.png');
	game.load.image('clone','assets/clone.png');
	game.load.image('mathsAnxiety','assets/mathsAnxiety.png');
	game.load.image('cook','assets/cook.png');
	game.load.image('tv','assets/tv.png');
	game.load.image('mushroom','assets/mushroom.png');
	game.load.image('pipe','assets/pipe.png');
	game.load.image('thanx','assets/thanx.png');
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
	
    //befor cloud
    var mill=game.add.sprite(560+9400,h-553,'mill');
    mill.scale.setTo(1,1);

	//Add Clouds
	for(var i=w;i<20000;i+=800){
		if(i>=4000 && i<=6500){
			
		}else{
			cloud=game.add.sprite(i,h-680,'cloud');
			cloud.scale.setTo(0.4,0.3);
			cloud=game.add.sprite(i+380,h-700,'cloud');
			cloud.scale.setTo(0.4,0.3);
			i+= Math.floor((Math.random() * 700) + 1);
		}
		
	}

	//Intro	
	var tree = game.add.sprite(440,h-750,'tree');
	tree.scale.setTo(0.5,0.5);
	tree = game.add.sprite(0,h-100-480,'tree2');
	tree = game.add.sprite(1000,h-100-480,'tree2');
	stone = game.add.sprite(0,h-100-105,'stone');
	stone.scale.setTo(0.4,0.4);
	intro=game.add.sprite(200,h-100-408,'intro');

	//Adding level boards

	level=game.add.sprite(1500,h-350,'level');
	game.add.text(1550,h-340,"Level 1",{font:"25px Arial Black",fill:"#efe4b0"});
	game.add.text(1550,h-270,"About > >",{fill:" #efe4b0"});
	stone = game.add.sprite(1500,h-100-105,'stone');
	stone.scale.setTo(0.4,0.4);

	level=game.add.sprite(6900,h-350,'level');
	game.add.text(6950,h-340,"Level 2",{font:"25px Arial Black",fill:"#efe4b0"});
	game.add.text(6950,h-270,"Skills > >",{fill:" #efe4b0"});
	stone = game.add.sprite(6900,h-100-105,'stone');
	stone.scale.setTo(0.4,0.4);

	level=game.add.sprite(8900,h-350,'level');
	game.add.text(8950,h-340,"Level 3",{font:"25px Arial Black",fill:"#efe4b0"});
	game.add.text(8910,h-270,"Experience > >",{fill:" #efe4b0"});
	stone = game.add.sprite(8900,h-100-105,'stone');
	stone.scale.setTo(0.4,0.4);

	level=game.add.sprite(10900,h-350,'level');
	game.add.text(10950,h-340,"Level 4",{font:"25px Arial Black",fill:"#efe4b0"});
	game.add.text(10930,h-270,"Projects > >",{fill:" #efe4b0"});
	stone = game.add.sprite(10900,h-100-105,'stone');
	stone.scale.setTo(0.4,0.4);

	level=game.add.sprite(15300+60,h-350,'level');
	game.add.text(15350+60,h-340,"Level 5",{font:"25px Arial Black",fill:"#efe4b0"});
	game.add.text(15310+60,h-295,"      Some\n   Highlights",{fill:" #efe4b0"});
	stone = game.add.sprite(15300+60,h-100-105,'stone');
	stone.scale.setTo(0.4,0.4);

	//level 1
	var baby = game.add.sprite(2177,h-340,'baby');
	baby.scale.setTo(0.2,0.2);
	hospital = game.add.sprite(1800,h-478,'hospital');
	hospital.scale.setTo(0.8,0.8);

	var hometown = game.add.sprite(2500,h-100-197,'hometown');
	var table = game.add.sprite(2500,h-100-19,'table');
	table.scale.setTo(1.5,1);

	var nasa=game.add.sprite(4100,h-250,'nasa');
	nasa.scale.setTo(0.5,0.5);
	var mars=game.add.sprite(4300,h-600,'mars');
	mars.scale.setTo(0.8,0.8);
	var jupiter=game.add.sprite(4800,h-700,'jupiter');
	jupiter.scale.setTo(0.8,0.8);
	var no1=game.add.sprite(5020,h-415,'no1');
	no1.scale.setTo(0.3,0.3);
	rocket10=game.add.sprite(4600,h-1400,'rocket10');
	rocket12=game.add.sprite(5270,h-1400,'rocket12');
	rocket12.scale.setTo(1,0.6);

	var ufo=game.add.sprite(5550,h-490,'ufo');
	ufo.scale.setTo(1.2,1.2);
	spaceShip=game.add.sprite(6500,h-1400,'spaceShip');
	
	//level 2

	cow=game.add.sprite(0+7300,h-305,'cow');
	cow.scale.setTo(0.7,0.7);
	cow=game.add.sprite(200+7300,h-275,'cow');
	cow.scale.setTo(0.6,0.6);
	// sheep=game.add.sprite(1180+7300,h-300,'sheep');
	// sheep.scale.setTo(0.3,0.3);
	// elephant=game.add.sprite(550+7300,h-450,'elephant');
	// elephant.scale.setTo(0.5,0.5);

	fence=game.add.sprite(9100-2000,h-305,'fence');
	fence.scale.setTo(0.4,0.4);
	fence=game.add.sprite(220+9100-2000,h-305,'fence');
	fence.scale.setTo(0.4,0.4);
	fence=game.add.sprite(440+9100-2000,h-305,'fence');
	fence.scale.setTo(0.4,0.4);
	fence=game.add.sprite(660+9099-2000,h-305,'fence');
	fence.scale.setTo(0.4,0.4);
	fence=game.add.sprite(880+9100-2000,h-305,'fence');
	fence.scale.setTo(0.4,0.4);
	fence=game.add.sprite(880+220+9100-2000,h-305,'fence');
	fence.scale.setTo(0.4,0.4);
	fence=game.add.sprite(880+440+9100-2000,h-305,'fence');
	fence.scale.setTo(0.4,0.4);
	fence=game.add.sprite(880+660+9100-2000,h-305,'fence');
	fence.scale.setTo(0.4,0.4);
	
	cpp=game.add.sprite(7210,h-100,'cpp');
	cpp.scale.setTo(0.175,0.175);
	box=game.add.sprite(7160,h-279,'box');
	box.scale.setTo(0.175,0.175);
	boom=game.add.sprite(7245,h-390,'boom');
	boom.scale.setTo(0.175,0.175);

	android=game.add.sprite(7210+200,h-100,'android');
	android.scale.setTo(0.6,0.6);
	box2=game.add.sprite(7160+200,h-279,'box');
	box2.scale.setTo(0.175,0.175);
	boom2=game.add.sprite(7245+200,h-390,'boom');
	boom2.scale.setTo(0.175,0.175);

	react=game.add.sprite(7210+400,h-100,'react');
	react.scale.setTo(0.5,0.5);
	box3=game.add.sprite(7160+400,h-279,'box');
	box3.scale.setTo(0.175,0.175);
	boom3=game.add.sprite(7245+400,h-390,'boom');
	boom3.scale.setTo(0.175,0.175);

	html=game.add.sprite(7210+600,h-100,'html');
	html.scale.setTo(0.9,0.9);
	box4=game.add.sprite(7160+600,h-279,'box');
	box4.scale.setTo(0.175,0.175);
	boom4=game.add.sprite(7245+600,h-390,'boom');
	boom4.scale.setTo(0.175,0.175);

	css=game.add.sprite(7210+800,h-100,'css');
	css.scale.setTo(0.9,0.9);
	box5=game.add.sprite(7160+800,h-279,'box');
	box5.scale.setTo(0.175,0.175);
	boom5=game.add.sprite(7245+800,h-390,'boom');
	boom5.scale.setTo(0.175,0.175);

	js=game.add.sprite(7210+1000,h-100,'js');
	//js.scale.setTo(0.9,0.9);
	box6=game.add.sprite(7160+1000,h-279,'box');
	box6.scale.setTo(0.175,0.175);
	boom6=game.add.sprite(7245+1000,h-390,'boom');
	boom6.scale.setTo(0.175,0.175);

	python=game.add.sprite(7210+1100,h-100,'python');
	python.scale.setTo(0.9,0.9);
	box7=game.add.sprite(7160+1200,h-279,'box');
	box7.scale.setTo(0.175,0.175);
	boom7=game.add.sprite(7245+1200,h-390,'boom');
	boom7.scale.setTo(0.175,0.175);

	spring=game.add.sprite(7210+1350,h-100,'spring');
	spring.scale.setTo(0.38,0.38);
	box8=game.add.sprite(7160+1400,h-279,'box');
	box8.scale.setTo(0.175,0.175);
	boom8=game.add.sprite(7245+1400,h-390,'boom');
	boom8.scale.setTo(0.175,0.175);

	//level 3
	var farmHouse=game.add.sprite(100+9400,h-577,'farmHouse');
	farmHouse.scale.setTo(0.35,0.25);
	var farmtree=game.add.sprite(9400,h-447,'farmtree');
	farmtree.scale.setTo(1.2,1.2);
	var haypile=game.add.sprite(550+9400,h-207,'haypile');
	haypile.scale.setTo(0.1,0.1);
	
	var fence=game.add.sprite(9100,h-305,'fence');
	fence.scale.setTo(0.4,0.4);
	fence=game.add.sprite(220+9100,h-305,'fence');
	fence.scale.setTo(0.4,0.4);
	fence=game.add.sprite(440+9100,h-305,'fence');
	fence.scale.setTo(0.4,0.4);
	fence=game.add.sprite(660+9100,h-305,'fence');
	fence.scale.setTo(0.4,0.4);
	fence=game.add.sprite(880+9100,h-305,'fence');
	fence.scale.setTo(0.4,0.4);
	fence=game.add.sprite(880+220+9100,h-305,'fence');
	fence.scale.setTo(0.4,0.4);
	fence=game.add.sprite(880+440+9100,h-305,'fence');
	fence.scale.setTo(0.4,0.4);
	fence=game.add.sprite(880+660+9100,h-305,'fence');
	fence.scale.setTo(0.4,0.4);

	//level 4
	var maths=game.add.sprite(11200,h-332,'maths');
	maths.scale.setTo(1,1);
	game.add.text(11200,h-379,"         Developed Website for \nMathematics Department of DTU",{font:"25px Arial Black",fill:"white"});
	var alexa=game.add.sprite(11900,h-435,'alexa');
	alexa.scale.setTo(0.7,0.7);
	var owlChatter=game.add.sprite(500+12200,h-450,'owlChatter');
	owlChatter.scale.setTo(0.5,0.5);
	var button_owl = game.add.button(850+12200,h-390,'play',openOwlChatter, this);
	button_owl.scale.setTo(0.15,0.15);
	var burger=game.add.sprite(400+13000,h-480,'burger');
	burger.scale.setTo(0.7,0.7);
	var button_burger = game.add.button(750+13000,h-390,'play',openBurger, this);
	button_burger.scale.setTo(0.15,0.15);
	var chatTracker=game.add.sprite(400+13700,h-480,'chatTracker');
	chatTracker.scale.setTo(0.76,0.76);
	var clone=game.add.sprite(400+14300,h-430,'clone');
	clone.scale.setTo(0.76,0.76);

	//level 5
	var mathsAnxiety=game.add.sprite(15700,h-420,'mathsAnxiety');
	mathsAnxiety.scale.setTo(0.76,0.76);
	var button_maths = game.add.button(15844,h-438,'play',openMaths, this);
	button_maths.scale.setTo(0.15,0.15);
	var cook=game.add.sprite(16770,h-511,'cook');
	cook.scale.setTo(0.82,0.82);
	var tv=game.add.sprite(17310,h-477,'tv');
	tv.scale.setTo(0.65,0.65);
	

	//adding grass ground and sky
	game.stage.backgroundColor =bgColor;
	game.world.setBounds(0, 0,platformLength,h+800);
	var grass2 = game.add.tileSprite(0,h-150,platformLength*2,250,'grass2');
	grass2.scale.setTo(0.4,0.4);
	evil=game.add.sprite(9650,h-363,'evil');
	evil.scale.setTo(0.9,0.9);
	game.physics.arcade.enable(evil);
	evilTween=game.add.tween(evil).to( { x:9600}, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 2000, true);

	var ground = game.add.tileSprite(0,h-100,platformLength*2,2000,'ground');
	ground.scale.setTo(0.5,0.5);
	var grass = game.add.tileSprite(0,h-100,platformLength*2,50,'grass');
	grass.scale.setTo(0.5,0.5);

    //after grass
    //level 1
    var schoolRoom = game.add.sprite(3500,h-240,'schoolRoom');
    schoolRoom.scale.setTo(0.55,0.3);
    platform=game.add.sprite(4600-65,h-130,'platform');
    platform.scale.setTo(0.7,0.5);
    game.add.text(4600+45-65,h-130,"Mars Mission",{font:"25px Arial Black",fill:"#efe4b0"});
    platform=game.add.sprite(5270-37,h-130,'platform');
    game.add.text(5270+31-37,h-130,"Jupiter Mission",{font:"25px Arial Black",fill:"#efe4b0"});
    platform.scale.setTo(0.7,0.5);
    platform=game.add.sprite(6550,h-130,'platform');
    game.add.text(6550+31,h-130,"University Marks",{font:"25px Arial Black",fill:"#efe4b0"});
    platform.scale.setTo(0.7,0.5);
    var teacher = game.add.sprite(3720,h-220,'teacher');
    teacher.scale.setTo(0.4,0.4);

    //level 2

    //level 3
    var woodenboard=game.add.sprite(400+8850,h-360,'woodenboard');
    woodenboard.scale.setTo(0.5,0.6);
    var chicken=game.add.sprite(400+8850,h-600,'chicken');
    chicken.scale.setTo(0.5,0.5);
    var dtuLogo=game.add.sprite(500+8850,h-305,'dtuLogo');
    dtuLogo.scale.setTo(0.45,0.45);
    game.add.text(600+8850,h-230,"Delhi",{font:"20px Arial Black",fill:"black"});
    game.add.text(480+8850,h-205,"June-July 2017",{font:"20px Arial",fill:"red"});
    game.add.text(440+8850,h-185,"\n     Web Developer \n            Intern",{font:"20px Arial black",fill:"red"});

    var woodenboard=game.add.sprite(9900+400,h-360,'woodenboard');
    woodenboard.scale.setTo(0.5,0.6);
    var chicken=game.add.sprite(9900+400,h-600,'chicken');
    chicken.scale.setTo(0.5,0.5);
    var amazon=game.add.sprite(350+9900,h-337,'amazon');
    amazon.scale.setTo(0.5,0.5);
    game.add.text(550+9900,h-230,"Hyderabad",{font:"20px Arial Black",fill:"black"});
    game.add.text(470+9900,h-205,"June-July 2018",{font:"20px Arial",fill:"red"});
    game.add.text(440+9900,h-185,"\nSoftware Developer \n            Intern",{font:"20px Arial black",fill:"red"});

    //level 4
    moving_coin = game.add.sprite(610+10100,h-165,'coin_moving');
    moving_coin.scale.setTo(2,2);
    moving_coin.animations.add('run');
    moving_coin.animations.play('run',20,true);

    moving_coin1 = game.add.sprite(530+10100,h-165,'coin_moving');
    moving_coin1.scale.setTo(2,2);
    moving_coin1.animations.add('run');
    moving_coin1.animations.play('run',20,true);

    moving_coin2 = game.add.sprite(690+10100,h-165,'coin_moving');
    moving_coin2.scale.setTo(2,2);
    moving_coin2.animations.add('run');
    moving_coin2.animations.play('run',20,true);

    moving_coin3 = game.add.sprite(770+10100,h-165,'coin_moving');
    moving_coin3.scale.setTo(2,2);
    moving_coin3.animations.add('run');
    moving_coin3.animations.play('run',20,true);

    //level 5

    inst_text = game.add.text(290,h-50,"       Use  Arrow Keys  OR << Screen Buttons >> ",{font:"30px Arial black",fill:"white"});
	//add hero
	hero = game.add.sprite(100,-200,'aneesh');
	hero.animations.add('run');
	var entryTween = game.add.tween(hero);
	entryTween.to({x:starting_point,y:h-318},2000,Phaser.Easing.Bounce.Out, true);
	entryTween.start();

    //after hero
    var school = game.add.sprite(3400,h-100-440,'school');
    var dtu=game.add.sprite(6070,h-100-250,'dtu');
    dtu.scale.setTo(1.3,1.3);
    game.add.text(6140,h-400,"    Joined B.Tech\nSoftware Engineering",{font:"25px Arial Black",fill:"white"});

    tnt=game.add.sprite(7900,h-214,'tnto');
    tnt.scale.setTo(0.25,0.25);

    fight=game.add.sprite(400,h-580,'fight');
    fight.scale.setTo(0,0);
    game.physics.arcade.enable(fight);

    cursors = game.input.keyboard.createCursorKeys();
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.enable(hero);
    game.camera.follow(hero);
    game.camera.follow(hero,Phaser.Camera.FOLLOW_PLATFORMER);

    //thanx
    mushroom=game.add.sprite(760+17010,h-207,'mushroom');
    mushroom.scale.setTo(0.45,0.45);
    var pipe=game.add.sprite(310+17810,h-247,'pipe');
    pipe.scale.setTo(0.55,0.45);
    var thanx=game.add.sprite(650+17810,h-607,'thanx');
    thanx.scale.setTo(0.7,0.7);

    //add buttons
    back_btn = game.add.button(10,h-94,'back');
    fwd_btn = game.add.button(w-10,h-94,'back');
    fwd_btn.scale.x *= -1;
    fwd_btn.fixedToCamera = true;
    back_btn.fixedToCamera = true;

}

function update(){

	if(hero.x>4200&&hero.x<=4250){
		moveRocketDown();
	}
	if(hero.x>7900&&hero.x<=7950){
		tntPressed();
	}

	if(hero.x>4800&&hero.x<=4840){
		moveRocket2Down();
	}

	if(hero.x>6070&&hero.x<=6100){
		moveShipDown();
	}

	if(forwardButtonPressed()){
		inst_text.setText("");
		hero.x +=25;
	}
	else if(backButtonPressed()){
		hero.x -=25;
	}else{
		hero.animations.stop('run');
	}
	
	if(hero.x <=150&&direction=="left"){
		hero.x = 150;
	}

	if(hero.x >=640+17810){
		hero.x = 640+17810;
	}

	zombieFight();
	collectCoin();
	eatMushroom();
}

function render(){
	
	
}

function eatMushroom(){
	if(isBig&&mushroom.x-hero.x<50){
		mushroom.destroy();
		isBig=false;
		hero.scale.setTo(0.6,0.6);
		hero.reset(hero.x,h-227);
	}
}

function openMaths(){
	var win = window.open(maths_url);
	win.focus();
}

function openOwlChatter(){
	var win = window.open(owlChatter_url);
	win.focus();
}

function openBurger(){
	var win = window.open(burger_url);
	win.focus();
}

function collectCoin(){
	if(moving_coin.x-hero.x<50){
		moving_coin.scale.setTo(0,0);
	}
	if(moving_coin2.x-hero.x<50){
		moving_coin2.scale.setTo(0,0);
	}
	if(moving_coin3.x-hero.x<50){
		moving_coin3.scale.setTo(0,0);
	}
	if(moving_coin1.x-hero.x<50){
		moving_coin1.scale.setTo(0,0);
	}
}

function zombieFight(){
	if(Math.abs(evil.x - hero.x)<=100&&!evil_killed){
		evil.body.velocity.x = 0;

		evil.scale.setTo(1,-1);
		evil.body.y = h+30;

		fight.scale.setTo(0.4,0.4);
		fight.body.x = evil.x-160;
		evilTween.stop();
		if(evil_killed==false){
			hero.x+=60;
			evil_killed =true;
		}
	}
	if(Math.abs(evil.x - hero.x)>100&&evil_killed){
		fight.scale.setTo(0,0);
	}
	
	
}

function tntPressed(){
	tnt.kill();
	tnt=game.add.sprite(7900,h-196,'tntc');
	tnt.scale.setTo(0.25,0.25);
	
	if(!tntPress){
		var explosion = game.add.sprite(7160, h-400,'explode');
		var cppTween = game.add.tween(cpp);
		cppTween.to({y:h-455},100);
		cppTween.start();
		explosion.scale.setTo(2.0,2.0);
		explosion.animations.add('explode');
		explosion.animations.play('explode', 60, false, true);
		box.kill();
		boom.kill();

		var explosion2 = game.add.sprite(7160+200, h-400,'explode');
		var androidTween = game.add.tween(android);
		androidTween.to({y:h-455},100);
		androidTween.start();
		explosion2.scale.setTo(2.0,2.0);
		explosion2.animations.add('explode');
		explosion2.animations.play('explode', 60, false, true);		
		box2.kill();
		boom2.kill();

		var explosion3 = game.add.sprite(7160+400, h-400,'explode');
		var reactTween = game.add.tween(react);
		reactTween.to({y:h-455},100);
		reactTween.start();
		explosion3.scale.setTo(2.0,2.0);
		explosion3.animations.add('explode');
		explosion3.animations.play('explode', 60, false, true);		
		box3.kill();
		boom3.kill();

		var explosion4 = game.add.sprite(7160+600, h-400,'explode');
		var htmlTween = game.add.tween(html);
		htmlTween.to({y:h-455},100);
		htmlTween.start();
		explosion4.scale.setTo(2.0,2.0);
		explosion4.animations.add('explode');
		explosion4.animations.play('explode', 60, false, true);		
		box4.kill();
		boom4.kill();

		var explosion5 = game.add.sprite(7160+800, h-400,'explode');
		var cssTween = game.add.tween(css);
		cssTween.to({y:h-455},100);
		cssTween.start();
		explosion5.scale.setTo(2.0,2.0);
		explosion5.animations.add('explode');
		explosion5.animations.play('explode', 60, false, true);		
		box5.kill();
		boom5.kill();

		var explosion6 = game.add.sprite(7160+1000, h-400,'explode');
		var jsTween = game.add.tween(js);
		jsTween.to({y:h-455},100);
		jsTween.start();
		explosion6.scale.setTo(2.0,2.0);
		explosion6.animations.add('explode');
		explosion6.animations.play('explode', 60, false, true);		
		box6.kill();
		boom6.kill();

		var explosion7 = game.add.sprite(7160+1200, h-400,'explode');
		var pythonTween = game.add.tween(python);
		pythonTween.to({y:h-435},100);
		pythonTween.start();
		explosion7.scale.setTo(2.0,2.0);
		explosion7.animations.add('explode');
		explosion7.animations.play('explode', 60, false, true);		
		box7.kill();
		boom7.kill();

		var explosion8 = game.add.sprite(7160+1400, h-400,'explode');
		var sprinngTween = game.add.tween(spring);
		sprinngTween.to({y:h-455},100);
		sprinngTween.start();
		explosion8.scale.setTo(2.0,2.0);
		explosion8.animations.add('explode');
		explosion8.animations.play('explode', 60, false, true);		
		box8.kill();
		boom8.kill();
	}
	tntPress=true;
}

function moveRocketDown(){
	var rocket10Tween = game.add.tween(rocket10);
	rocket10Tween.to({y:h-555},1500);
	rocket10Tween.start();
}

function moveRocket2Down(){
	var rocket12Tween = game.add.tween(rocket12);
	rocket12Tween.to({y:h-655},1800);
	rocket12Tween.start();
}
function moveShipDown(){
	var spaceShipTween = game.add.tween(spaceShip);
	spaceShipTween.to({y:h-608},1800);
	spaceShipTween.start();
}

function forwardButtonPressed(){
	
	var ptr = game.input.activePointer ;
	hero.animations.play('run',15,true);

	if((ptr.x>=w-150 && ptr.y>=h-150&&ptr.isDown)||cursors.right.isDown||scroll>0)
	{
		if(direction =="left"){
			direction= "right";
			if(isBig){
				hero.scale.setTo(1,1);	
			}else{
				hero.scale.setTo(0.6,0.6);		
			}
			
		}
		return true;
	}
	else
	{
		return false;
	}

}

function backButtonPressed(){
	var ptr = game.input.activePointer ;
	hero.animations.play('run',15,true); 
	if((ptr.x<=150 && ptr.y>=h-150&&ptr.isDown)||cursors.left.isDown||scroll<0)
	{
		if(direction =="right"){
			direction= "left";
			if(isBig){
				hero.scale.setTo(-1,1);
			}else{
				hero.scale.setTo(-0.6,0.6);
			}
			
		}
		return true;
	}
	else		
		return false;
}
