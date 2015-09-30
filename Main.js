//global variable
var game;
function main()
{
	window.addEventListener("keydown", function(e) {
    	player.Update(e.keyCode);
	});
	
	game = new Game();
	game.GameLoop();
}