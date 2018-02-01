var dom_viewport = $("#viewport");

// list of images to preload used in the animation
var image_list = [
	{id: 'background', url: 'svg/background.svg'},
	{id: 'beam', url: 'svg/beam.svg'},
	{id: 'spaceship', url: 'svg/spaceship.svg'},
	{id: 'snowball', url: 'svg/snowball.svg'},
	{id: 'scully', url: 'svg/scully.svg'},
	{id: 'mulder', url: 'svg/mulder.svg'}
];
// count how many images have been loaded so far
// until all are loaded, then the animation will start
var preload_image_cnt = 0;

// the set timeout waiting for an ongoing animation
var run_timeout = false

///////////////////////////////////////////////////////////////////////////////

$(function() {
	preloadImages();
});

///////////////////////////////////////////////////////////////////////////////

function run()
{
	reset();
	setTimer();
	runAnim();
}

function reset()
{
	stopAnimation();
	stopTimer();
	initItems();
}

///////////////////////////////////////////////////////////////////////////////

function preloadImages()
{
	var images = new Array()
	for (i = 0; i < image_list.length; i++)
	{
		images[i] = new Image();
		images[i].src = image_list[i].url;
		images[i].onload = function() {
			trackImageLoaded(images[i]);
		};
	}
}
function trackImageLoaded()
{
	preload_image_cnt++;
	console.log('Image loaded', preload_image_cnt)
	if (preload_image_cnt >= image_list.length)
	{
		firstRun();
	}
}

function firstRun()
{
	$("#loading").hide();
	reset();
	$("#viewport-container").show();
	$("#btn-container").show();
	run();
}

function setTimer()
{
	clearTimeout(run_timeout);
	$("#btn-run").prop("disabled",true);
	run_timeout = setTimeout(function() {
		$("#btn-run").prop("disabled",false);
	}, 6500);
}

function stopTimer()
{
	clearTimeout(run_timeout);
	$("#btn-run").prop("disabled", false);
}

function stopAnimation()
{
	$(".svgimg").velocity('stop', true);
}

function initItems()
{
	$("#snowball").css({
		left: "-15px",
		top: "100px"
	});
	$("#scully").css({
		bottom: "10px",
		left: "20px"
	});
	$("#mulder").css({
		bottom: "20px",
		left: "90px"
	});
	$("#spaceship").css({
		top: "-100px",
		left: "30px"
	});
	$("#beam").css({
		top: "60px",
		left: "75px",
		width: "50px",
		height: "0px"
	});
}

function runAnim()
{

	$("#scully")
	.velocity({
		left: "60px"
	},{
		duration: 1500, 
		easing: "linear"
	})
	.velocity({
		left: "60px"
	},{
		duration: 1500, 
		easing: "linear"
	})
	.velocity({
		left: "120px",
		bottom: "20px"
	},{
		duration: 1500, 
		easing: "linear"
	})
	.velocity({
		left: "320px",
		bottom: "5px"
	},{
		duration: 1500, 
		easing: "linear"
	});


	$("#mulder")
	.velocity({
		left: "130px"
	},{
		duration: 1000, 
		easing: "linear"
	})
	.velocity({
		left: "130px"
	},{
		duration: 2000, 
		easing: "linear"
	})
	.velocity({
		left: "190px",
		bottom: "20px"
	},{
		duration: 750, 
		easing: "linear"
	})
	.velocity({
		left: "390px",
		bottom: "10px"
	},{
		duration: 1750, 
		easing: "linear"
	});



	$("#snowball")
	.velocity({
		left: "-15px",
		top: "100px"
	},{
		duration: 500,
		easing: "linear"
	})
	.velocity({
		left: "92px",
		top: "155px"
	},{
		duration: 1000,
		easing: "ease"
	})
	.velocity({
		top: "100px"
	},{
		duration: 1000,
		easing: "ease-in"
	})
	.velocity({
		top: "110px",
		left: "362px"
	},{
		duration: 1750,
		easing: "ease-out"
	})
	.velocity({
		top: "70px"
	},{
		duration: 750,
		easing: "ease-in"
	})
	.velocity({
		left: "515px",
		top: "100px"
	},{
		duration: 500,
		easing: "linear"
	})
	.velocity({
		left: "515px",
		top: "100px"
	},{
		duration: 500,
		easing: "linear"
	});



	$("#spaceship")
	.velocity({
		top: "20px",
		left: "50px",
		height: "60px"
	},{
		duration: 1250, 
		easing: "ease-in"
	})
	.velocity({
		top: "10px"
	},{
		duration: 1250, 
		easing: "linear"
	})
	.velocity({
		top: "20px",
		left: "320px"
	},{
		duration: 1750, 
		easing: "ease-out"
	})
	.velocity({
		top: "5px",
	},{
		duration: 750, 
		easing: "ease-in"
	})
	.velocity({
		top: "-100px",
		left: "600px",
		height: "10px"
	},{
		duration: 1000, 
		easing: "ease-in"
	});


	$("#beam")
	.velocity({
		top: "60px",
		left: "75px",
		width: "50px",
		height: "0px"
	},{
		duration: 1250, 
		easing: "ease-in"
	})
	.velocity({
		height: "200px"
	},{
		duration: 1000, 
		easing: "ease-in"
	})
	.velocity({
		height: "200px"
	},{
		duration: 250, 
		easing: "ease-in"
	})
	.velocity({
		left: "345px",
		top: "50px"
	},{
		duration: 1750, 
		easing: "ease-out"
	})
	.velocity({
		width: "50px",
		height: "0px"
	},{
		duration: 750, 
		easing: "ease-in"
	});
}