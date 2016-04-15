'use strict';

$(document).ready(init);

function init() {
	$('.shell').click(clickShell);
}

var $selectedBlock = "";
var selectedBlockNum = 0;
function clickShell(event) {

	if ($selectedBlock.length) { 
		console.log("selected > 0");

		var $selectedShell = $(this).find('.towerBase');

		var numInTower = parseInt($selectedShell.first().text());
		selectedBlockNum = $selectedBlock[0].textContent;

		if (numInTower < parseInt(selectedBlockNum) ) {
			console.log("Do not move block!");
			return false;
		}

		$($selectedShell).prepend($selectedBlock);

		$selectedBlock = "";
		return false;
	}

	var $topBlock = $(this).find('.block').first();

	$($topBlock).addClass('selected');
	$selectedBlock = $($topBlock).detach();
}
