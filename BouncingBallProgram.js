(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"BouncingBallProgram_atlas_1", frames: [[259,0,242,80],[0,0,257,80]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.click_text = function() {
	this.initialize(ss["BouncingBallProgram_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.touch_text = function() {
	this.initialize(ss["BouncingBallProgram_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.touch = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.touch_text();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.touch, new cjs.Rectangle(0,0,257,80), null);


(lib.ground = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EhNkAAAMCbJAAA");
	this.shape.setTransform(496.45,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EhN/ACrIAAlVMCb/AAAIAAFVg");
	this.shape_1.setTransform(499.225,17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ground, new cjs.Rectangle(-1,-1,999.5,35.2), null);


(lib.click = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.click_text();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.click, new cjs.Rectangle(0,0,242,80), null);


(lib.ball = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("AhbBcQgmgmAAg2QAAg1AmgmQAmgmA1AAQA2AAAmAmQAmAmAAA1QAAA2gmAmQgmAmg2AAQg1AAgmgmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ball, new cjs.Rectangle(-13,-13,26,26), null);


// stage content:
(lib.BouncingBallProgram = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		//console.log(stage);
		//console.log(this);
		
		//this.touch.alpha = 0;
		
		let touchEnabled = false;
		
		let ground = this.ground;
		let ball = new lib.ball(0, 0, -1, 0);
		ball.alpha = 0;
		ball.scale *= Math.random() * 1.5 + .5;
		ball.children[0].graphics._fill.style = "#" + Math.floor(Math.random() * 16777215).toString(16);
		this.addChild(ball);
		
		let _this = this;
		
		let gravity = 1000;
		let friction = 300;
		
		//console.log(ball);
		
		
		
		let ballVelocities = [];
		let ballBounces = [];
		let balls = [];
		
		stage.canvas.addEventListener("touchstart", function (e) {
			//console.log("touch");
			//console.log(e);
			touchEnabled = true;
			//_this.touch.alpha = 1;
			//_this.click.alpha = 0;
			if (e.touches[0].clientY < ground.y && ball != null) {
				let rad = Math.random() * Math.PI;
				let velX = Math.cos(rad) * -500;
				let velY = Math.sin(rad) * -500;
		
				ball.x = e.touches[0].clientX;
		
				if (ball.x < ball.nominalBounds.width * ball.scale / 2) {
					ball.x = ball.nominalBounds.width * ball.scale / 2;
				} else if (ball.x > stage.canvas.clientWidth - ball.nominalBounds.width * ball.scale / 2) {
					ball.x = stage.canvas.clientWidth - ball.nominalBounds.width * ball.scale / 2;
				}
		
				ball.y = e.touches[0].clientY;
				ball.alpha = 1;
				balls.push(ball);
				ballVelocities.push({
					x: velX,
					y: velY
				});
		
				ballBounces.push(Math.random() * .25 + .55);
		
				ball = new lib.ball(0, 0, -1, 0);
				ball.x = stage.mouseX;
				ball.y = stage.mouseY;
				ball.alpha = 0;
		
				ball.scale *= Math.random() * 1.5 + .5;
		
				ball.children[0].graphics._fill.style = "#" + Math.floor(Math.random() * 16777215).toString(16);
		
				_this.addChild(ball);
			}
		})
		
		stage.canvas.addEventListener("mousemove", function (e) {
			if (!touchEnabled) {
				ball.alpha = 1;
				ball.x = e.clientX;
				ball.y = e.clientY;
			}
		});
		
		stage.canvas.addEventListener("click", function (e) {
			if (!touchEnabled) {
		
				//console.log("click");
				//console.log(e);
				//_this.touch.alpha = 0;
				//_this.click.alpha = 1;
				if (stage.mouseY < ground.y && ball != null) {
					let rad = Math.random() * Math.PI;
					let velX = Math.cos(rad) * -500;
					let velY = Math.sin(rad) * -500;
		
					ball.x = e.clientX;
					if (ball.x < ball.nominalBounds.width * ball.scale / 2) {
						ball.x = ball.nominalBounds.width * ball.scale / 2 + 5;
					} else if (ball.x > stage.canvas.clientWidth - ball.nominalBounds.width * ball.scale / 2) {
						ball.x = stage.canvas.clientWidth - 5 - ball.nominalBounds.width * ball.scale / 2;
					}
					ball.y = e.clientY;
					balls.push(ball);
					ballVelocities.push({
						x: velX,
						y: velY
					});
		
					ballBounces.push(Math.random() * .25 + .55);
		
					ball = new lib.ball(0, 0, -1, 0);
					ball.x = e.clientX;
					ball.y = e.clientY;
		
					ball.scale *= Math.random() * 1.5 + .5;
		
					ball.children[0].graphics._fill.style = "#" + Math.floor(Math.random() * 16777215).toString(16);
		
					_this.addChild(ball);
				}
			}
		});
		
		
		let oldTime = 0;
		function update(time) {
			time *= .001;
			let deltaTime = time - oldTime;
			oldTime = time;
			if(touchEnabled){
				ball.alpha = 0;
			}else{
				ball.alpha = 1;
			}
		
			//	if (ball) {
			//		ball.x = stage.mouseX;
			//		ball.y = stage.mouseY;
			//	}
		
			for (let i = 0; i < balls.length; i++) {
		
		
				balls[i].x += ballVelocities[i].x * deltaTime;
				balls[i].y += ballVelocities[i].y * deltaTime;
		
				if (balls[i].x - (balls[i].nominalBounds.width * balls[i].scale / 2) <= 0) {
					ballVelocities[i].x = Math.abs(ballVelocities[i].x);
				} else if (balls[i].x + (balls[i].nominalBounds.width * balls[i].scale / 2) >= stage.canvas.clientWidth) {
					ballVelocities[i].x = -Math.abs(ballVelocities[i].x);
				}
		
				if (ballVelocities[i].y > 0 && balls[i].y + (balls[i].nominalBounds.height * balls[i].scale / 2) >= ground.y) {
					ballVelocities[i].y = ballVelocities[i].y * -ballBounces[i];
		
					if (Math.abs(ballVelocities[i].y) <= 10) {
						ballVelocities[i].y = 0;
					}
				} else if (ballVelocities[i].y == 0 && balls[i].y + (balls[i].nominalBounds.height * balls[i].scale / 2) >= ground.y) {
					if (ballVelocities[i].x > 0) {
						ballVelocities[i].x -= friction * deltaTime;
						if (ballVelocities[i].x < 0) {
							ballVelocities[i].x = 0
						}
					} else if (ballVelocities[i].x < 0) {
						ballVelocities[i].x += friction * deltaTime;
						if (ballVelocities[i].x > 0) {
							ballVelocities[i].x = 0
						}
					}
				} else if (balls[i].y + (balls[i].nominalBounds.height * balls[i].scale / 2) < ground.y) {
					ballVelocities[i].y += gravity * deltaTime;
				}
			}
		
			requestAnimationFrame(update);
		}
		
		requestAnimationFrame(update);
		//console.log(this.ground);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_3
	this.click = new lib.click();
	this.click.name = "click";
	this.click.setTransform(400,80,1,1,0,0,0,121,40);

	this.timeline.addTween(cjs.Tween.get(this.click).wait(1));

	// Layer_1
	this.ground = new lib.ground();
	this.ground.name = "ground";
	this.ground.setTransform(415.45,539,1,1,0,0,0,496.4,0);

	this.timeline.addTween(cjs.Tween.get(this.ground).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(318.6,340,598.9,233.20000000000005);
// library properties:
lib.properties = {
	id: 'BA76AC323F59FF44B82046D00DC7B398',
	width: 800,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BouncingBallProgram_atlas_1.png?1643932633763", id:"BouncingBallProgram_atlas_1"}
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
an.compositions['BA76AC323F59FF44B82046D00DC7B398'] = {
	getStage: function() { return exportRoot.stage; },
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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;