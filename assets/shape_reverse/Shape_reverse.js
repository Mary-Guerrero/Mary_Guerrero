(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Shape_reverse_atlas_", frames: [[0,0,400,400],[402,0,400,400],[0,402,400,400],[402,402,400,400],[0,804,400,400],[402,804,400,400],[0,1206,400,400],[0,1608,400,400],[402,1206,400,400]]}
];


// symbols:



(lib.blk_rect = function() {
	this.initialize(ss["Shape_reverse_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blk_tri = function() {
	this.initialize(ss["Shape_reverse_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.blu_circle = function() {
	this.initialize(ss["Shape_reverse_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.blu_para = function() {
	this.initialize(ss["Shape_reverse_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.blu_tri = function() {
	this.initialize(ss["Shape_reverse_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.red_semi = function() {
	this.initialize(ss["Shape_reverse_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.red_sq = function() {
	this.initialize(ss["Shape_reverse_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.yel_doughnut = function() {
	this.initialize(ss["Shape_reverse_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.yel_line = function() {
	this.initialize(ss["Shape_reverse_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.yel_line_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.yel_line();
	this.instance.parent = this;
	this.instance.setTransform(212.15,0,0.5999,0.75,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.yel_line_1, new cjs.Rectangle(0,0,381.9,381.9), null);


(lib.yel_doughnut_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.yel_doughnut();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.yel_doughnut_1, new cjs.Rectangle(0,0,240,240), null);


(lib.red_sq_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.red_sq();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.red_sq_1, new cjs.Rectangle(0,0,300,300), null);


(lib.red_semi_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.red_semi();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.red_semi_1, new cjs.Rectangle(0,0,260,260), null);


(lib.blu_tri_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.blu_tri();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blu_tri_1, new cjs.Rectangle(0,0,400,400), null);


(lib.blu_para_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.blu_para();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blu_para_1, new cjs.Rectangle(0,0,400,400), null);


(lib.blu_circle_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.blu_circle();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blu_circle_1, new cjs.Rectangle(0,0,160,160), null);


(lib.blk_tri_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.blk_tri();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blk_tri_1, new cjs.Rectangle(0,0,240,240), null);


(lib.blk_rect_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.blk_rect();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blk_rect_1, new cjs.Rectangle(0,0,400,400), null);


// stage content:
(lib.Shape_reverse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// blu_circle
	this.instance = new lib.blu_circle_1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-150,1,1,0,0,0,80,80);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22).to({_off:false},0).wait(1).to({x:-110.7,y:-114.25},0).wait(1).to({x:-71.4,y:-78.55},0).wait(1).to({x:-32.1,y:-42.85},0).wait(1).to({x:7.15,y:-7.1},0).wait(1).to({x:46.45,y:28.6},0).wait(1).to({x:85.7,y:64.3},0).wait(1).to({x:125,y:100},0).wait(1).to({x:164.25,y:135.7},0).wait(1).to({x:203.55,y:171.4},0).wait(1).to({x:242.85,y:207.1},0).wait(1).to({x:282.1,y:242.85},0).wait(1).to({x:321.4,y:278.55},0).wait(1).to({x:360.7,y:314.25},0).wait(1).to({x:400,y:350},0).wait(1).to({x:375,y:370.8},0).wait(1).to({x:350,y:391.65},0).wait(1).to({x:325,y:412.5},0).wait(1).to({x:300,y:433.3},0).wait(1).to({x:275,y:454.15},0).wait(1).to({x:250,y:475},0).wait(1).to({x:225,y:495.8},0).wait(1).to({x:200,y:516.65},0).wait(1).to({x:175,y:537.5},0).wait(1).to({x:150,y:558.3},0).wait(1).to({x:125,y:579.15},0).wait(1).to({x:100,y:600},0).wait(53).to({x:120,y:583.3},0).wait(1).to({x:140,y:566.65},0).wait(1).to({x:160,y:550},0).wait(1).to({x:180,y:533.3},0).wait(1).to({x:200,y:516.65},0).wait(1).to({x:220,y:500},0).wait(1).to({x:240,y:483.3},0).wait(1).to({x:260,y:466.65},0).wait(1).to({x:280,y:450},0).wait(1).to({x:300,y:433.3},0).wait(1).to({x:320,y:416.65},0).wait(1).to({x:340,y:400},0).wait(1).to({x:360,y:383.3},0).wait(1).to({x:380,y:366.65},0).wait(1).to({x:400,y:350},0).wait(1).to({x:369.4,y:322.2},0).wait(1).to({x:338.85,y:294.4},0).wait(1).to({x:308.3,y:266.65},0).wait(1).to({x:277.75,y:238.85},0).wait(1).to({x:247.2,y:211.1},0).wait(1).to({x:216.65,y:183.3},0).wait(1).to({x:186.1,y:155.55},0).wait(1).to({x:155.55,y:127.75},0).wait(1).to({x:125,y:100},0).wait(1).to({x:94.4,y:72.25},0).wait(1).to({x:63.9,y:44.45},0).wait(1).to({x:33.35,y:16.7},0).wait(1).to({x:2.8,y:-11.1},0).wait(1).to({x:-27.75,y:-38.85},0).wait(1).to({x:-58.3,y:-66.65},0).wait(1).to({x:-88.85,y:-94.4},0).wait(1).to({x:-119.4,y:-122.2},0).wait(1).to({x:-150,y:-150},0).wait(67));

	// red_semi
	this.instance_1 = new lib.red_semi_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-253.9,350,1,1,0,0,0,130,130);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-235.6},0).wait(1).to({x:-217.3},0).wait(1).to({x:-199},0).wait(1).to({x:-180.7},0).wait(1).to({x:-162.4},0).wait(1).to({x:-144.1},0).wait(1).to({x:-125.8},0).wait(1).to({x:-107.5},0).wait(1).to({x:-89.2},0).wait(1).to({x:-70.9},0).wait(1).to({x:-52.6},0).wait(1).to({x:-34.35,y:349.95},0).wait(1).to({x:-16.4,y:346.1},0).wait(1).to({x:1.5,y:342.25},0).wait(1).to({x:19.35,y:338.4},0).wait(1).to({x:37.25,y:334.55},0).wait(1).to({x:55.15,y:330.7},0).wait(1).to({x:73.05,y:326.8},0).wait(1).to({x:90.9,y:322.95},0).wait(1).to({x:108.8,y:319.1},0).wait(1).to({x:126.7,y:315.25},0).wait(1).to({x:144.5,y:311.4},0).wait(1).to({x:162.4,y:307.55},0).wait(1).to({x:180.3,y:303.7},0).wait(1).to({x:198.2,y:299.8},0).wait(1).to({x:216.1,y:295.95},0).wait(1).to({x:234,y:292.1},0).wait(1).to({x:251.85,y:288.25},0).wait(1).to({x:269.75,y:284.4},0).wait(1).to({x:287.65,y:280.55},0).wait(1).to({x:300,y:283.95},0).wait(1).to({y:302.25},0).wait(1).to({y:320.55},0).wait(1).to({y:338.85},0).wait(1).to({y:357.15},0).wait(1).to({y:375.4},0).wait(1).to({y:393.75},0).wait(1).to({y:412},0).wait(1).to({y:430.35},0).wait(1).to({y:448.6},0).wait(1).to({y:466.9},0).wait(1).to({y:485.2},0).wait(1).to({y:503.55},0).wait(1).to({y:521.8},0).wait(1).to({y:540.1},0).wait(1).to({y:558.45},0).wait(1).to({x:307,y:569.75},0).wait(1).to({x:325.4},0).wait(1).to({x:343.7,y:569.7},0).wait(1).to({x:362},0).wait(1).to({x:380.3,y:569.65},0).wait(1).to({x:398.6},0).wait(1).to({x:416.9,y:569.6},0).wait(1).to({rotation:15.1288,x:435.2},0).wait(1).to({rotation:30.2576,x:453.5,y:569.55},0).wait(1).to({rotation:45.3864,x:471.75},0).wait(1).to({rotation:60.5152,x:490.1,y:569.5},0).wait(1).to({rotation:75.644,x:508.4},0).wait(1).to({rotation:90.7728,x:526.65,y:569.45},0).wait(1).to({x:545},0).wait(1).to({x:563.25,y:569.4},0).wait(1).to({x:581.55},0).wait(1).to({x:599.9,y:569.35},0).wait(1).to({x:618.15},0).wait(1).to({x:636.5,y:569.3},0).wait(1).to({x:654.8},0).wait(1).to({x:673.05,y:569.25},0).wait(1).to({x:691.4,y:569.2},0).wait(1).to({x:709.65},0).wait(1).to({x:728,y:569.15},0).wait(1).to({x:746.25},0).wait(1).to({rotation:68.2611,x:764.6,y:569.1},0).wait(1).to({rotation:45.7495,x:782.85,y:569.05},0).wait(1).to({rotation:23.2378,x:801.15},0).wait(1).to({rotation:0.7262,x:819.5},0).wait(1).to({rotation:0.7267,x:837.8,y:569},0).wait(1).to({rotation:0.7271,x:856.1},0).wait(1).to({rotation:0.7276,x:874.4,y:568.95},0).wait(1).to({rotation:0.7281,x:892.7},0).wait(1).to({rotation:0.7285,x:911,y:568.9},0).wait(1).to({rotation:0.729,x:929.3,y:568.85},0).wait(1).to({rotation:54.988,x:947.6},0).wait(1).to({rotation:72.603,x:965.85,y:568.8},0).wait(1).to({rotation:84.6739,x:984.15},0).wait(1).to({rotation:94.2652,x:1002.5},0).wait(1).to({rotation:102.5887,x:1021.05,y:568.7},0).wait(1).to({rotation:110.0915,x:1039.05,y:568.75},0).wait(1).to({rotation:116.9937,x:1057.35},0).wait(1).to({rotation:123.4167,x:1075.7,y:568.7},0).wait(1).to({rotation:129.4234,x:1094},0).wait(1).to({rotation:135,x:1112.3,y:568.75},0).wait(1).to({x:1130.6},0).wait(8).to({regX:129.8,regY:129.8,x:1130.65,y:568.8},0).wait(1).to({regX:130,regY:130,rotation:129.4235,x:1112.1},0).wait(1).to({rotation:123.4167,x:1093.8},0).wait(1).to({rotation:116.9937,x:1075.5,y:568.85},0).wait(1).to({rotation:110.0915,x:1057.2,y:568.9},0).wait(1).to({rotation:102.5887,x:1038.95,y:568.85},0).wait(1).to({rotation:94.2652,x:1020.9,y:568.95},0).wait(1).to({rotation:84.6739,x:1002.35,y:569},0).wait(1).to({rotation:72.603,x:984.15},0).wait(1).to({rotation:54.988,x:965.95,y:569.05},0).wait(1).to({rotation:0.729,x:947.85,y:569},0).wait(1).to({rotation:0.7285,x:929.55,y:569.05},0).wait(1).to({rotation:0.7281,x:911.25},0).wait(1).to({rotation:0.7276,x:892.95,y:569.1},0).wait(1).to({rotation:0.7271,x:874.65},0).wait(1).to({rotation:0.7267,x:856.35,y:569.15},0).wait(1).to({rotation:0.7262,x:838.05,y:569.2},0).wait(1).to({rotation:23.2378,x:819.65,y:569.25},0).wait(1).to({rotation:45.7495,x:801.3,y:569.3},0).wait(1).to({rotation:68.2611,x:782.9,y:569.35},0).wait(1).to({rotation:90.7728,x:764.45},0).wait(1).to({x:746.2},0).wait(1).to({x:727.85,y:569.4},0).wait(1).to({x:709.6},0).wait(1).to({x:691.25,y:569.45},0).wait(1).to({x:673},0).wait(1).to({x:654.7,y:569.5},0).wait(1).to({x:636.4},0).wait(1).to({x:618.1,y:569.55},0).wait(1).to({x:599.8},0).wait(1).to({x:581.5,y:569.6},0).wait(1).to({x:563.2},0).wait(1).to({x:544.9,y:569.65},0).wait(1).to({rotation:75.644,x:526.65,y:569.7},0).wait(1).to({rotation:60.5152,x:508.45,y:569.75},0).wait(1).to({rotation:45.3864,x:490.15},0).wait(1).to({rotation:30.2576,x:471.95,y:569.8},0).wait(1).to({rotation:15.1288,x:453.7},0).wait(1).to({rotation:0,x:435.45,y:569.75},0).wait(1).to({x:417.15},0).wait(1).to({x:398.85,y:569.8},0).wait(1).to({x:380.55},0).wait(1).to({x:362.25,y:569.85},0).wait(1).to({x:343.95,y:569.9},0).wait(1).to({x:325.65},0).wait(1).to({x:307.25,y:569.95},0).wait(1).to({x:300.15,y:558.65},0).wait(1).to({y:540.3},0).wait(1).to({y:522.05},0).wait(1).to({y:503.75},0).wait(1).to({y:485.45},0).wait(1).to({y:467.15},0).wait(1).to({y:448.8},0).wait(1).to({y:430.55},0).wait(1).to({y:412.25},0).wait(1).to({y:393.95},0).wait(1).to({y:375.65},0).wait(1).to({y:357.35},0).wait(1).to({y:339.05},0).wait(1).to({y:320.75},0).wait(1).to({y:302.45},0).wait(1).to({y:284.15},0).wait(1).to({x:287.9,y:280.7},0).wait(1).to({x:270,y:284.55},0).wait(1).to({x:252.1,y:288.4},0).wait(1).to({x:234.2,y:292.25},0).wait(1).to({x:216.35,y:296.1},0).wait(1).to({x:198.45,y:299.95},0).wait(1).to({x:180.55,y:303.85},0).wait(1).to({x:162.65,y:307.7},0).wait(1).to({x:144.75,y:311.55},0).wait(1).to({x:126.95,y:315.4},0).wait(1).to({x:109.05,y:319.25},0).wait(1).to({x:91.15,y:323.1},0).wait(1).to({x:73.3,y:326.95},0).wait(1).to({x:55.35,y:330.85},0).wait(1).to({x:37.5,y:334.7},0).wait(1).to({x:19.6,y:338.55},0).wait(1).to({x:1.7,y:342.4},0).wait(1).to({x:-16.2,y:346.25},0).wait(1).to({x:-34.15,y:350.15},0).wait(1).to({x:-52.35},0).wait(1).to({x:-70.65},0).wait(1).to({x:-88.95},0).wait(1).to({x:-107.25},0).wait(1).to({x:-125.55},0).wait(1).to({x:-143.85},0).wait(1).to({x:-162.15},0).wait(1).to({x:-180.45},0).wait(1).to({x:-198.75},0).wait(1).to({x:-217.05},0).wait(1).to({x:-235.35},0).wait(1).to({x:-253.7},0).wait(8));

	// red_squ
	this.instance_2 = new lib.red_sq_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(625,356,1,1,0,0,0,150,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(200));

	// blu_tri
	this.instance_3 = new lib.blu_tri_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(750,950,1,1,0,0,0,200,200);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(23).to({x:809.05,y:963.7},0).wait(1).to({rotation:1.6681,x:815.5,y:937},0).wait(1).to({rotation:3.3363,x:822,y:910.4},0).wait(1).to({rotation:5.0044,x:828.5,y:883.8},0).wait(1).to({rotation:6.6725,x:834.95,y:857.15},0).wait(1).to({rotation:8.3406,x:841.5,y:830.5},0).wait(1).to({rotation:10.0088,x:847.95,y:803.85},0).wait(1).to({rotation:11.6769,x:854.4,y:777.25},0).wait(1).to({rotation:13.345,x:860.95,y:750.6},0).wait(1).to({rotation:15.0132,x:867.4,y:723.95},0).wait(1).to({rotation:16.6813,x:873.95,y:697.35},0).wait(1).to({rotation:18.3494,x:880.45,y:670.7},0).wait(1).to({rotation:20.0175,x:886.9,y:644.05},0).wait(1).to({rotation:21.6857,x:893.4,y:617.45},0).wait(1).to({rotation:23.3538,x:899.85,y:590.8},0).wait(1).to({rotation:25.0219,x:906.35,y:564.2},0).wait(1).to({rotation:26.69,x:912.85,y:537.55},0).wait(1).to({rotation:28.3582,x:919.35,y:510.9},0).wait(1).to({rotation:30.0263,x:925.8,y:484.3},0).wait(1).to({rotation:31.6944,x:930.65,y:476.3},0).wait(1).to({rotation:33.3626,x:935.6,y:468.35},0).wait(1).to({rotation:35.0307,x:940.45,y:460.35},0).wait(1).to({rotation:36.6988,x:945.35,y:452.35},0).wait(1).to({rotation:38.3669,x:950.2,y:444.4},0).wait(1).to({rotation:40.0351,x:955.15,y:436.45},0).wait(1).to({rotation:41.7032,x:960,y:428.45},0).wait(1).to({x:964.9,y:420.5},0).wait(1).to({x:969.75,y:412.5},0).wait(1).to({x:974.65,y:404.55},0).wait(1).to({x:979.55,y:396.55},0).wait(1).to({x:984.4,y:388.6},0).wait(1).to({x:989.3,y:380.6},0).wait(1).to({x:994.2,y:372.65},0).wait(1).to({x:999.05,y:364.65},0).wait(1).to({x:1003.95,y:356.7},0).wait(1).to({x:1008.85,y:348.75},0).wait(1).to({x:1013.7,y:340.75},0).wait(1).to({x:1018.6,y:332.8},0).wait(1).to({x:1023.5,y:324.8},0).wait(1).to({x:1028.35,y:316.85},0).wait(1).to({x:1033.25,y:308.85},0).wait(1).to({x:1038.15,y:300.9},0).wait(1).to({x:1043,y:292.95},0).wait(1).to({x:1047.9,y:284.95},0).wait(1).to({x:1052.8,y:277.05},0).wait(1).to({x:1057.65,y:269.05},0).wait(1).to({x:1062.55,y:261.1},0).wait(1).to({x:1067.45,y:253.1},0).wait(1).to({x:1072.3,y:245.15},0).wait(1).to({x:1077.2,y:237.15},0).wait(1).to({x:1082.1,y:229.2},0).wait(1).to({x:1086.95,y:221.25},0).wait(1).to({x:1091.85,y:213.25},0).wait(1).to({x:1096.75,y:205.3},0).wait(1).to({x:1101.6,y:197.3},0).wait(1).to({x:1106.5,y:189.35},0).wait(1).to({x:1111.4,y:181.35},0).wait(1).to({x:1116.25,y:173.4},0).wait(1).to({x:1115.35,y:174.85},0).wait(1).to({x:1114.5,y:176.35},0).wait(1).to({x:1113.6,y:177.8},0).wait(1).to({x:1112.7,y:179.25},0).wait(1).to({x:1111.8,y:180.75},0).wait(1).to({x:1110.95,y:182.2},0).wait(1).to({x:1110.05,y:183.65},0).wait(1).to({x:1109.15,y:185.1},0).wait(1).to({x:1108.25,y:186.6},0).wait(1).to({x:1107.4,y:188.05},0).wait(1).to({x:1106.5,y:189.5},0).wait(1).to({x:1105.6,y:191},0).wait(1).to({x:1104.7,y:192.45},0).wait(1).to({x:1103.85,y:193.9},0).wait(1).to({x:1102.95,y:195.4},0).wait(1).to({x:1102.05,y:196.85},0).wait(1).to({x:1101.15,y:198.3},0).wait(1).to({x:1100.3,y:199.8},0).wait(1).to({x:1099.4,y:201.25},0).wait(1).to({x:1098.5,y:202.7},0).wait(1).to({x:1097.6,y:204.2},0).wait(1).to({x:1096.7,y:205.65},0).wait(1).to({x:1095.85,y:207.1},0).wait(1).to({x:1094.95,y:208.55},0).wait(1).to({x:1094.05,y:210.05},0).wait(1).to({x:1093.15,y:211.5},0).wait(1).to({x:1092.3,y:212.95},0).wait(1).to({x:1091.4,y:214.45},0).wait(1).to({x:1090.5,y:215.9},0).wait(1).to({regX:199.3,regY:199.8,scaleX:0.9984,scaleY:0.9984,rotation:41.6327,x:1090.55,y:215.85},0).wait(1).to({regX:200,regY:200,scaleX:1,scaleY:1,rotation:40.2652,x:1091.7,y:215.2},0).wait(1).to({rotation:38.8271,x:1092.45,y:213.95},0).wait(1).to({rotation:37.3891,x:1093.2,y:212.7},0).wait(1).to({rotation:35.951,x:1094,y:211.4},0).wait(1).to({rotation:34.513,x:1094.8,y:210.15},0).wait(1).to({rotation:33.075,x:1095.55,y:208.9},0).wait(1).to({rotation:31.6369,x:1096.35,y:207.65},0).wait(1).to({rotation:30.1989,x:1097.05,y:206.35},0).wait(1).to({rotation:28.7608,x:1097.85,y:205.15},0).wait(1).to({rotation:27.3228,x:1098.6,y:203.85},0).wait(1).to({rotation:25.8847,x:1099.4,y:202.6},0).wait(1).to({rotation:24.4467,x:1100.15,y:201.3},0).wait(1).to({rotation:23.0087,x:1100.95,y:200.05},0).wait(1).to({rotation:21.5706,x:1101.65,y:198.85},0).wait(1).to({rotation:20.1326,x:1102.45,y:197.55},0).wait(1).to({rotation:18.6945,x:1103.2,y:196.25},0).wait(1).to({rotation:17.2565,x:1103.95,y:195.05},0).wait(1).to({rotation:15.8185,x:1104.8,y:193.75},0).wait(1).to({rotation:14.3804,x:1105.55,y:192.5},0).wait(1).to({rotation:12.9424,x:1106.25,y:191.2},0).wait(1).to({rotation:11.5043,x:1107.05,y:190},0).wait(1).to({rotation:10.0663,x:1107.8,y:188.65},0).wait(1).to({rotation:8.6282,x:1108.6,y:187.45},0).wait(1).to({rotation:7.1902,x:1109.35,y:186.2},0).wait(1).to({rotation:5.7522,x:1110.1,y:184.9},0).wait(1).to({rotation:4.3141,x:1110.85,y:183.65},0).wait(1).to({rotation:2.8761,x:1111.6,y:182.4},0).wait(1).to({rotation:1.438,x:1112.4,y:181.1},0).wait(1).to({rotation:0,x:1113.15,y:179.85},0).wait(1).to({x:1113.9,y:178.6},0).wait(1).to({x:1114.65,y:177.35},0).wait(1).to({x:1115.4,y:176.1},0).wait(1).to({x:1116.15,y:174.85},0).wait(1).to({x:1116.95,y:173.6},0).wait(1).to({x:1111.8,y:182},0).wait(1).to({x:1106.65,y:190.4},0).wait(1).to({x:1101.5,y:198.8},0).wait(1).to({x:1096.35,y:207.15},0).wait(1).to({x:1091.2,y:215.55},0).wait(1).to({x:1086.05,y:223.95},0).wait(1).to({x:1080.9,y:232.35},0).wait(1).to({x:1075.75,y:240.75},0).wait(1).to({x:1070.6,y:249.15},0).wait(1).to({x:1065.45,y:257.55},0).wait(1).to({x:1060.3,y:265.95},0).wait(1).to({x:1055.15,y:274.35},0).wait(1).to({x:1050,y:282.75},0).wait(1).to({x:1044.85,y:291.15},0).wait(1).to({x:1039.7,y:299.55},0).wait(1).to({x:1034.55,y:307.95},0).wait(1).to({x:1029.4,y:316.35},0).wait(1).to({x:1024.25,y:324.75},0).wait(1).to({x:1019.15,y:333.2},0).wait(1).to({x:1014,y:341.6},0).wait(1).to({x:1008.85,y:350},0).wait(1).to({x:1003.7,y:358.4},0).wait(1).to({x:998.55,y:366.8},0).wait(1).to({x:993.4,y:375.2},0).wait(1).to({x:988.25,y:383.6},0).wait(1).to({x:983.1,y:392},0).wait(1).to({x:977.95,y:400.4},0).wait(1).to({x:972.8,y:408.8},0).wait(1).to({x:967.65,y:417.2},0).wait(1).to({x:962.5,y:425.6},0).wait(1).to({x:957.35,y:434},0).wait(1).to({x:952.2,y:442.4},0).wait(1).to({x:947.05,y:450.8},0).wait(1).to({x:941.9,y:459.2},0).wait(1).to({x:936.75,y:467.6},0).wait(1).to({x:931.6,y:476},0).wait(1).to({x:926.5,y:484.45},0).wait(1).to({x:920,y:511.05},0).wait(1).to({x:913.5,y:537.7},0).wait(1).to({x:907,y:564.35},0).wait(1).to({x:900.5,y:590.95},0).wait(1).to({x:894.05,y:617.6},0).wait(1).to({x:887.55,y:644.25},0).wait(1).to({x:881.05,y:670.85},0).wait(1).to({x:874.55,y:697.5},0).wait(1).to({x:868.1,y:724.15},0).wait(1).to({x:861.6,y:750.75},0).wait(1).to({x:855.1,y:777.4},0).wait(1).to({x:848.6,y:804.05},0).wait(1).to({x:842.1,y:830.65},0).wait(1).to({x:835.65,y:857.3},0).wait(1).to({x:829.15,y:883.95},0).wait(1).to({x:822.65,y:910.55},0).wait(1).to({x:816.15,y:937.2},0).wait(1).to({x:809.7,y:963.85},0).wait(1));

	// yel_dougnut
	this.instance_4 = new lib.yel_doughnut_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-260.2,70,1,1,0,0,0,119.8,120);
	this.instance_4.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(68).to({x:-150,y:400},0).wait(1).to({regX:120,rotation:-3.0974,x:-126.75,y:399.9},0).wait(1).to({rotation:-6.1947,x:-103.7,y:399.95},0).wait(1).to({rotation:-9.2921,x:-80.65,y:400},0).wait(1).to({rotation:-12.3895,x:-57.65,y:399.9},0).wait(1).to({rotation:-15.4868,x:-34.55},0).wait(1).to({rotation:-18.5842,x:-11.55},0).wait(1).to({rotation:-21.6816,x:11.5,y:399.85},0).wait(1).to({rotation:-24.7789,x:34.5,y:399.9},0).wait(1).to({rotation:-27.8763,x:57.5,y:399.85},0).wait(1).to({rotation:-30.9737,x:80.6,y:399.9},0).wait(1).to({rotation:-34.071,x:103.65,y:399.85},0).wait(1).to({rotation:-37.1684,x:126.65},0).wait(1).to({rotation:-40.2657,x:149.65},0).wait(1).to({rotation:-43.3631,x:172.7},0).wait(1).to({rotation:-46.4605,x:195.7,y:399.8},0).wait(1).to({rotation:-49.5578,x:218.75},0).wait(1).to({rotation:-52.6552,x:241.75},0).wait(1).to({rotation:-55.7526,x:264.8},0).wait(1).to({rotation:-58.8499,x:287.8},0).wait(1).to({rotation:-61.9473,x:310.85},0).wait(1).to({rotation:-65.0447,x:333.9},0).wait(1).to({rotation:-68.142,x:356.9,y:399.85},0).wait(1).to({rotation:-71.2394,x:379.9,y:399.8},0).wait(1).to({x:370.3,y:389.8},0).wait(1).to({x:360.7,y:379.8},0).wait(1).to({x:351.1,y:369.8},0).wait(1).to({x:341.5,y:359.8},0).wait(1).to({x:331.9,y:349.8},0).wait(1).to({x:322.3,y:339.8},0).wait(1).to({x:312.7,y:329.8},0).wait(1).to({x:303.1,y:319.8},0).wait(1).to({x:293.5,y:309.8},0).wait(1).to({x:283.9,y:299.8},0).wait(1).to({x:274.3,y:289.8},0).wait(1).to({x:264.65,y:279.8},0).wait(1).to({x:255.05,y:269.8},0).wait(1).to({x:245.45,y:259.8},0).wait(1).to({x:235.85,y:249.8},0).wait(1).to({x:226.25,y:239.8},0).wait(1).to({x:216.65,y:229.8},0).wait(1).to({x:207.05,y:219.8},0).wait(1).to({x:197.45,y:209.8},0).wait(1).to({x:187.85,y:199.8},0).wait(1).to({x:178.25,y:189.8},0).wait(1).to({x:168.65,y:179.8},0).wait(1).to({x:159.05,y:169.8},0).wait(1).to({x:149.5,y:159.8},0).wait(1).to({x:139.85,y:149.8},0).wait(3).to({regX:119.4,scaleX:0.999,scaleY:0.999,rotation:-71.2258,x:139.75,y:150},0).wait(1).to({regX:120,scaleX:1,scaleY:1,rotation:-69.314,x:146,y:155.7},0).wait(1).to({rotation:-67.3886,x:152.05,y:161.9},0).wait(1).to({rotation:-65.4632,x:158.05,y:168.2},0).wait(1).to({rotation:-63.5378,x:164,y:174.4},0).wait(1).to({rotation:-61.6125,x:170,y:180.7},0).wait(1).to({rotation:-59.6871,x:176.05,y:186.9},0).wait(1).to({rotation:-57.7617,x:182.05,y:193.2},0).wait(1).to({rotation:-55.8363,x:188.1,y:199.45},0).wait(1).to({rotation:-53.9109,x:194.1,y:205.75},0).wait(1).to({rotation:-51.9855,x:200.15,y:211.95},0).wait(1).to({rotation:-50.0601,x:206.15,y:218.25},0).wait(1).to({rotation:-48.1347,x:212.15,y:224.55},0).wait(1).to({rotation:-46.2093,x:218.2,y:230.8},0).wait(1).to({rotation:-44.284,x:224.2,y:237},0).wait(1).to({rotation:-42.3586,x:230.2,y:243.25},0).wait(1).to({rotation:-40.4332,x:236.3,y:249.55},0).wait(1).to({rotation:-38.5078,x:242.25,y:255.85},0).wait(1).to({rotation:-36.5824,x:248.25,y:262.1},0).wait(1).to({rotation:-34.657,x:254.3,y:268.35},0).wait(1).to({rotation:-32.7316,x:260.35,y:274.6},0).wait(1).to({rotation:-30.8062,x:266.3,y:280.85},0).wait(1).to({rotation:-28.8808,x:272.35,y:287.2},0).wait(1).to({rotation:-26.9554,x:278.35,y:293.4},0).wait(1).to({rotation:-25.0301,x:284.35,y:299.75},0).wait(1).to({rotation:-23.1047,x:290.35,y:305.9},0).wait(1).to({rotation:-21.1793,x:296.4,y:312.25},0).wait(1).to({rotation:-19.2539,x:302.4,y:318.5},0).wait(1).to({rotation:-17.3285,x:308.45,y:324.75},0).wait(1).to({rotation:-15.4031,x:314.4,y:331.05},0).wait(1).to({rotation:-13.4777,x:320.45,y:337.3},0).wait(1).to({rotation:-11.5523,x:326.45,y:343.55},0).wait(1).to({rotation:-9.6269,x:332.45,y:349.85},0).wait(1).to({rotation:-7.7016,x:338.45,y:356.05},0).wait(1).to({rotation:-5.7762,x:344.5,y:362.35},0).wait(1).to({rotation:-3.8508,x:350.5,y:368.7},0).wait(1).to({rotation:-1.9254,x:356.5,y:374.9},0).wait(1).to({rotation:0,x:362.5,y:381.2},0).wait(1).to({x:368.5,y:387.45},0).wait(1).to({x:374.5,y:393.7},0).wait(1).to({x:380.5,y:399.95},0).wait(1).to({x:366.2},0).wait(1).to({x:351.85},0).wait(1).to({x:337.55},0).wait(1).to({x:323.2},0).wait(1).to({x:308.9},0).wait(1).to({x:294.55},0).wait(1).to({x:280.25},0).wait(1).to({x:265.9},0).wait(1).to({x:251.6},0).wait(1).to({x:237.3},0).wait(1).to({x:222.95},0).wait(1).to({x:208.65},0).wait(1).to({x:194.3},0).wait(1).to({x:180},0).wait(1).to({x:165.65},0).wait(1).to({x:151.35},0).wait(1).to({x:137.05},0).wait(1).to({x:122.7},0).wait(1).to({x:108.45},0).wait(1).to({x:94.1},0).wait(1).to({x:79.8},0).wait(1).to({x:65.45},0).wait(1).to({x:51.15},0).wait(1).to({x:36.85},0).wait(1).to({x:22.5},0).wait(1).to({x:8.2},0).wait(1).to({x:-6.15},0).wait(1).to({x:-20.45},0).wait(1).to({x:-34.8},0).wait(1).to({x:-49.1},0).wait(1).to({x:-63.4},0).wait(1).to({x:-77.75},0).wait(1).to({x:-92.05},0).wait(1).to({x:-106.4},0).wait(1).to({x:-120.7},0).wait(1).to({x:-135.05},0).wait(1).to({x:-149.35},0).wait(4));

	// blu_para
	this.instance_5 = new lib.blu_para_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(350,-199.6,1,1,90.7414,0,0,205.3,204.4);
	this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(47).to({regX:203.3,regY:202.8,scaleX:0.9999,scaleY:0.9999,rotation:90.5596,x:350.05},0).wait(1).to({regX:200,regY:200,scaleX:1,scaleY:1,rotation:94.2661,x:353.05,y:-157.2},0).wait(1).to({rotation:97.7908,x:353.25,y:-111.65},0).wait(1).to({rotation:101.3156,x:353.4,y:-66.1},0).wait(1).to({rotation:104.8403,x:353.6,y:-20.55},0).wait(1).to({rotation:108.3651,x:353.7,y:25.05},0).wait(1).to({rotation:111.8899,x:353.8,y:70.65},0).wait(1).to({rotation:115.4146,x:353.85,y:116.2},0).wait(1).to({rotation:118.9394,x:354.05,y:161.85},0).wait(1).to({rotation:122.4641,y:207.5},0).wait(1).to({rotation:125.9889,x:354.15,y:253.1},0).wait(1).to({rotation:129.5137,x:351.65,y:260.65},0).wait(1).to({rotation:133.0384,x:349.25,y:268.15},0).wait(1).to({rotation:136.5632,x:346.75,y:275.75},0).wait(1).to({rotation:140.0879,x:344.25,y:283.3},0).wait(1).to({rotation:143.6127,x:341.7,y:290.85},0).wait(1).to({rotation:147.1374,x:339.2,y:298.35},0).wait(1).to({rotation:150.6622,x:336.65,y:305.95},0).wait(1).to({rotation:154.187,x:334.05,y:313.5},0).wait(1).to({rotation:157.7117,x:331.5,y:321.05},0).wait(1).to({rotation:161.2365,x:328.9,y:328.6},0).wait(1).to({rotation:164.7612,x:326.35,y:336.1},0).wait(1).to({rotation:168.286,x:323.65,y:343.6},0).wait(1).to({x:321.15,y:350.9},0).wait(1).to({x:318.65,y:358.2},0).wait(1).to({x:316.15,y:365.5},0).wait(1).to({x:313.65,y:372.75},0).wait(1).to({x:311.15,y:380.05},0).wait(1).to({x:308.65,y:387.35},0).wait(1).to({x:306.15,y:394.65},0).wait(1).to({x:303.65,y:401.9},0).wait(36).to({regX:203.5,regY:202.7,scaleX:0.9993,scaleY:0.9993,rotation:168.438,x:299.9,y:399.9},0).wait(1).to({regX:200,regY:200,scaleX:1,scaleY:1,rotation:165.7012,x:305.85,y:396.05},0).wait(1).to({rotation:163.1164,x:307.9,y:390.3},0).wait(1).to({rotation:160.5315,x:309.85,y:384.45},0).wait(1).to({rotation:157.9467,x:311.85,y:378.65},0).wait(1).to({rotation:155.3619,x:313.8,y:372.8},0).wait(1).to({rotation:152.7771,x:315.75,y:367.05},0).wait(1).to({rotation:150.1922,x:317.7,y:361.2},0).wait(1).to({rotation:147.6074,x:319.65,y:355.5},0).wait(1).to({rotation:145.0226,x:321.6,y:349.65},0).wait(1).to({rotation:142.4378,x:323.5,y:343.8},0).wait(1).to({rotation:139.8529,x:325.45,y:338.05},0).wait(1).to({rotation:137.2681,x:327.35,y:332.25},0).wait(1).to({rotation:134.6833,x:329.2,y:326.4},0).wait(1).to({rotation:132.0985,x:331.1,y:320.6},0).wait(1).to({rotation:129.5137,x:333,y:314.85},0).wait(1).to({rotation:126.9288,x:334.9,y:309.05},0).wait(1).to({rotation:124.344,x:336.7,y:303.25},0).wait(1).to({rotation:121.7592,x:338.6,y:297.45},0).wait(1).to({rotation:119.1744,x:340.45,y:291.65},0).wait(1).to({rotation:116.5895,x:342.3,y:285.9},0).wait(1).to({rotation:114.0047,x:344.15,y:280.1},0).wait(1).to({rotation:111.4199,x:345.9,y:274.3},0).wait(1).to({rotation:108.8351,x:347.75,y:268.55},0).wait(1).to({rotation:106.2502,x:349.6,y:262.8},0).wait(1).to({rotation:103.6654,x:351.35,y:257},0).wait(1).to({rotation:101.0806,x:353.15,y:251.2},0).wait(1).to({rotation:98.4958,x:353.05,y:216.2},0).wait(1).to({rotation:95.9109,x:352.9,y:181.2},0).wait(1).to({rotation:93.3261,x:352.75,y:146.2},0).wait(1).to({rotation:90.7413,x:352.6,y:111.2},0).wait(1).to({y:76.3},0).wait(1).to({y:41.4},0).wait(1).to({y:6.5},0).wait(1).to({y:-28.4},0).wait(1).to({y:-63.3},0).wait(1).to({y:-98.2},0).wait(1).to({y:-133.1},0).wait(1).to({y:-168},0).wait(1).to({y:-202.9},0).wait(48));

	// blk_tri
	this.instance_6 = new lib.blk_tri_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(78.1,977.7,1,1,0,0,0,120,120);
	this.instance_6.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({x:355,y:998.35},0).wait(43).to({x:357.2,y:945.9},0).wait(1).to({x:359.4,y:893.5},0).wait(1).to({x:361.65,y:841.05},0).wait(1).to({x:363.85,y:788.65},0).wait(1).to({x:366.1,y:736.2},0).wait(1).to({x:368.3,y:683.8},0).wait(1).to({x:370.55,y:631.35},0).wait(1).to({x:372.75,y:578.95},0).wait(1).to({x:375,y:526.55},0).wait(1).to({y:529.35},0).wait(1).to({y:532.2},0).wait(1).to({y:535.05},0).wait(1).to({y:537.9},0).wait(1).to({y:540.75},0).wait(1).to({y:543.6},0).wait(1).to({y:546.4},0).wait(1).to({y:549.25},0).wait(1).to({y:552.1},0).wait(1).to({y:554.95},0).wait(1).to({y:557.8},0).wait(1).to({y:560.65},0).wait(1).to({y:563.45},0).wait(1).to({y:566.3},0).wait(1).to({y:569.15},0).wait(1).to({y:572},0).wait(1).to({y:574.85},0).wait(1).to({y:577.7},0).wait(1).to({y:580.55},0).wait(38).to({y:578.2},0).wait(1).to({y:575.85},0).wait(1).to({y:573.5},0).wait(1).to({y:571.15},0).wait(1).to({y:568.8},0).wait(1).to({y:566.45},0).wait(1).to({y:564.1},0).wait(1).to({y:561.75},0).wait(1).to({y:559.4},0).wait(1).to({y:557.05},0).wait(1).to({y:554.7},0).wait(1).to({y:552.35},0).wait(1).to({y:550},0).wait(1).to({y:547.65},0).wait(1).to({y:545.3},0).wait(1).to({y:542.95},0).wait(1).to({y:540.6},0).wait(1).to({y:538.25},0).wait(1).to({y:535.9},0).wait(1).to({y:533.55},0).wait(1).to({y:531.2},0).wait(1).to({y:528.85},0).wait(1).to({y:526.55},0).wait(1).to({x:373.3,y:565.85},0).wait(1).to({x:371.65,y:605.15},0).wait(1).to({x:370,y:644.5},0).wait(1).to({x:368.3,y:683.8},0).wait(1).to({x:366.65,y:723.1},0).wait(1).to({x:365,y:762.45},0).wait(1).to({x:363.3,y:801.75},0).wait(1).to({x:361.65,y:841.05},0).wait(1).to({x:360,y:880.4},0).wait(1).to({x:358.3,y:919.7},0).wait(1).to({x:356.65,y:959},0).wait(1).to({x:355,y:998.35},0).wait(45));

	// yel_line
	this.instance_7 = new lib.yel_line_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(750.05,-100,1,1,76.7019,0,0,191,190.8);
	this.instance_7.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},13).wait(1).to({_off:false,regX:188,regY:187.8,scaleX:0.9985,scaleY:0.9985,rotation:76.7332,x:704.95},0).wait(1).to({regX:190.9,regY:190.9,scaleX:0.9992,scaleY:0.9992,rotation:76.7282,x:697.2,y:-80.05},0).wait(1).to({x:691.85,y:-63.65},0).wait(1).to({x:686.5,y:-47.25},0).wait(1).to({x:681.15,y:-30.8},0).wait(1).to({x:675.8,y:-14.4},0).wait(1).to({x:670.45,y:2},0).wait(1).to({x:665.1,y:18.4},0).wait(1).to({x:659.75,y:34.85},0).wait(1).to({x:654.4,y:51.25},0).wait(1).to({x:649.05,y:67.65},0).wait(1).to({x:643.7,y:84.05},0).wait(1).to({x:638.35,y:100.45},0).wait(1).to({x:633,y:116.9},0).wait(1).to({x:627.65,y:133.3},0).wait(72).to({regX:188.6,regY:187.8,scaleX:0.9985,scaleY:0.9985,rotation:76.7332,x:630.05,y:129.65},0).wait(1).to({regX:190.9,regY:190.9,scaleX:0.9992,scaleY:0.9992,rotation:76.7282,x:632.25,y:118.25},0).wait(1).to({x:636.9,y:103.9},0).wait(1).to({x:641.6,y:89.55},0).wait(1).to({x:646.25,y:75.2},0).wait(1).to({x:650.95,y:60.85},0).wait(1).to({x:655.65,y:46.45},0).wait(1).to({x:660.3,y:32.1},0).wait(1).to({x:665,y:17.75},0).wait(1).to({x:669.65,y:3.4},0).wait(1).to({x:674.35,y:-10.95},0).wait(1).to({x:679,y:-25.3},0).wait(1).to({x:683.7,y:-39.65},0).wait(1).to({x:688.4,y:-54},0).wait(1).to({x:693.05,y:-68.35},0).wait(1).to({x:697.75,y:-82.7},0).wait(1).to({x:702.4,y:-97.05},0).wait(84));

	// blk_rect
	this.instance_8 = new lib.blk_rect_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(542.75,907.95,0.9999,0.9999,130.6664,0,0,200.1,200);
	this.instance_8.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(16).to({regX:199.8,regY:199.1,scaleX:0.9983,scaleY:0.9983,rotation:130.6195,x:542.85,y:908},0).wait(1).to({regX:200,regY:200,scaleX:0.9999,scaleY:0.9999,rotation:130.666,x:564.2,y:880.9},0).wait(1).to({x:586.35,y:854.2},0).wait(1).to({x:608.55,y:827.55},0).wait(1).to({x:630.7,y:800.85},0).wait(1).to({x:652.9,y:774.2},0).wait(1).to({x:675.05,y:747.5},0).wait(1).to({x:697.25,y:720.85},0).wait(1).to({x:719.4,y:694.15},0).wait(1).to({x:741.6,y:667.5},0).wait(1).to({x:763.75,y:640.8},0).wait(1).to({x:785.95,y:614.15},0).wait(1).to({x:808.1,y:587.45},0).wait(1).to({x:830.3,y:560.8},0).wait(1).to({x:852.45,y:534.1},0).wait(70).to({regX:198.8,regY:198.7,scaleX:0.9983,scaleY:0.9983,rotation:130.6195,x:853.4,y:534.45},0).wait(1).to({regX:200,regY:200,scaleX:0.9999,scaleY:0.9999,rotation:130.666,x:833.35,y:556.5},0).wait(1).to({x:815.05,y:578.45},0).wait(1).to({x:796.8,y:600.4},0).wait(1).to({x:778.55,y:622.4},0).wait(1).to({x:760.3,y:644.35},0).wait(1).to({x:742,y:666.3},0).wait(1).to({x:723.75,y:688.3},0).wait(1).to({x:705.5,y:710.25},0).wait(1).to({x:687.2,y:732.25},0).wait(1).to({x:668.95,y:754.2},0).wait(1).to({x:650.7,y:776.15},0).wait(1).to({x:632.4,y:798.15},0).wait(1).to({x:614.15,y:820.1},0).wait(1).to({x:595.9,y:842.05},0).wait(1).to({x:577.65,y:864.05},0).wait(1).to({x:559.35,y:886},0).wait(1).to({x:541.1,y:907.95},0).wait(83));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(241.1,-54.9,1157.1000000000001,1255.8000000000002);
// library properties:
lib.properties = {
	id: 'F562F93290084726B4D458438D31DCA8',
	width: 1250,
	height: 711,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Shape_reverse_atlas_.png", id:"Shape_reverse_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F562F93290084726B4D458438D31DCA8'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;