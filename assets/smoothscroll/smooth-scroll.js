<!doctype html>
<html lang="de">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="keywords" content="intergalactica, inter galactica, discord, steamladder, namesteal">
	<meta name="subject" content="intergalactica">
	<meta name="description" content="Welcome to my site. It's just for all my socialmedia accounts. Feel free to add me on Steam & join my Discord.">
	<meta name="robots" content="index,follow">
	
	<meta name="author" content="Tobias Zeller">
	<meta name="url" content="https://intergalactica.xyz/">
	
	<meta name="designer" content="https://www.multopia.de/">
	<meta name="copyright" content="https://www.multopia.de/">
	
	<title>Intergalactica</title>
	<link rel="shortcut icon" type="image/x-icon" href="../../favicon.ico">
	<embed src="../sound.mp3" loop="true" hidden="true"></embed>
	
	<link rel="stylesheet" href="../../css/style.css" media="screen">
    <link rel="stylesheet" href="../../css/bootstrap.min.css">
	<link rel="stylesheet" href="../../css/all.css">
  </head>
  <body oncontextmenu="return false" onclick="OnClickBody();"> 
	<div id="particles-js"></div>
	<div id="header" class="col-md-12 text-center"> 
		
	</div>		
	<div id="content" class="col-md-12 text-center"> 
		<label id="lbl-content">INTERGALACTICA</label><br />
	
		<button id="steam" onclick="OnClickButton('https://steamcommunity.com/id/namesteal');" type="button" class="btn btn-default btn-circle btn-xl"><i class="fab fa-steam-symbol"></i></button>
		<button id="instagram" onclick="OnClickButton('https://www.instagram.com/namesteal/');" type="button" class="btn btn-default btn-circle btn-xl"><i class="fab fa-instagram"></i></button>	
		<button id="steamladder" onclick="OnClickButton('https://steamladder.com/profile/76561198841177505/');" type="button" class="btn btn-default btn-circle btn-xl"><i class="fas fa-stream"></i></button>
		<button id="discord" onclick="OnClickButton('https://discord.gg/GRnAyk9');" type="button" class="btn btn-default btn-circle btn-xl"><i class="fab fa-discord"></i></button>
		<button id="youtube" onclick="OnClickButton('https://www.youtube.com/channel/UCHoSVC_dyRIA_SOj0LlL7dg');" type="button" class="btn btn-default btn-circle btn-xl"><i class="fab fa-youtube"></i></button>
	</div>
	<div id="footer" class="col-md-12 text-center"> 
		<label id="lbl-footer">© Website by <a href="https://www.multopia.de/" target="_blank">www.Multopia.de</a> • <a href="../../imprint.html" target="_blank">Impressum</a> • <a href="../../privacypolicy.html" target="_blank">Datenschutzerklärung</a></label>
	</div>	
  </body>  
</html>

<script src="../../js/particles.js"></script>
<script src="../../js/app.js"></script>

<script>

	var StyleLayoutClicked = false;

	function OnClickBody() 
	{	
		if (StyleLayoutClicked == false) 
		{
			document.getElementById("particles-js").style.background = "white";
			document.getElementById("lbl-content").style.color = "#1a1a1a";
			document.getElementById("lbl-footer").style.color = "#1a1a1a";
			
			document.getElementById("steam").style.color = "#1a1a1a";
			document.getElementById("instagram").style.color = "#1a1a1a";
			document.getElementById("steamladder").style.color = "#1a1a1a";
			document.getElementById("discord").style.color = "#1a1a1a";
			document.getElementById("youtube").style.color = "#1a1a1a";
			
			StyleLayoutClicked = true;
		} 
		else 
		{
			document.getElementById("particles-js").style.background = "#1a1a1a";
			document.getElementById("lbl-content").style.color = "white";
			document.getElementById("lbl-footer").style.color = "white";
			
			document.getElementById("steam").style.color = "white";
			document.getElementById("instagram").style.color = "white";
			document.getElementById("steamladder").style.color = "white";
			document.getElementById("discord").style.color = "white";
			document.getElementById("youtube").style.color = "white";
			
			StyleLayoutClicked = false;
		}
	}

	function OnClickButton(url) 
	{
		window.open(url, '_blank');
	}

</script>