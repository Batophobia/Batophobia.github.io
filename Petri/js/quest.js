var quest = {
	maze: [],
	plyrPos: { x: 0, y: 0 },
	enemies: [],
	maxSize: 10,
	numEnemy: 4,
	minPercent: 0,
	maxPercent: 10,
	encounterIdx: -1,
	tickDelaySeconds: 1,
	enemyDelay: 0,
	playerDelay: 0,

	init: function () {
		$("#btnQuest").show();
		$("#btnQuest").on('click', function () {
			if (quest.maze.length < 1)
				quest.initMaze(10, 10);
			$(".mainBarItem").hide();
			$(".quest").toggle();
		});

		$(".questDir").on('click', function () {
			if ($(this).is(":visible"))
				quest.move($(this).attr('dir'))
		});

		$(document).keydown(function (e) {
			if (this.encounterIdx < 0) return;
			switch (e.which) {
				case 37: // LEFT
					$("#goLeft").click();
					break;
				case 38: // UP
					$("#goUp").click();
					break;
				case 39: // RIGHT
					$("#goRight").click();
					break;
				case 40: // DOWN
					$("#goDown").click();
					break;
				default: return;
			}
		});
	},

	tick: function () {
		if (this.encounterIdx >= 0) {
			this.enemyDelay--;
			this.playerDelay--;
			if (this.playerDelay < 0) {
				this.doAttack(player.getActiveSpcmn(), this.enemies[this.encounterIdx].spcmn);
				this.setPlayerDelay();

				if (this.enemies[this.encounterIdx].spcmn.curHP <= 0) {
					main.alrt("Defeated enemy")
					player.boost(this.enemies[this.encounterIdx].spcmn);
					this.enemies.splice(this.encounterIdx);
					this.endEncounter();
					return;
				}
			}

			if (this.enemyDelay < 0) {
				this.doAttack(this.enemies[this.encounterIdx].spcmn, player.getActiveSpcmn());
				this.setEnemyDelay();

				if (player.getActiveSpcmn().curHP <= 0) {
					main.alrt("Defeated by enemy")
					store.addPellet(this.enemies[this.encounterIdx].spcmn.stats);
					this.endEncounter();
					return;
				}
			}
			this.updateHpVisuals();
		}
	},

	doAttack: function (attacker, defender) {
		var str = attacker.getStat("str");
		var int = attacker.getStat("int");

		var attType = batman(0, str + int);
		if (attType > str)
			defender.takeDamage(int, "magic");
		else
			defender.takeDamage(str, "str");
	},

	sizeFormula: function () {
		return 1 + 3 * this.maxSize / Math.sqrt(this.maxSize + player.getStat("wis"));
	},

	initMaze: function (width, height) {
		this.maze = [];
		this.encounterIdx = -1;
		var tmpSize = this.sizeFormula();
		height = Math.floor(tmpSize);
		width = Math.round(tmpSize);

		$("#mazeGrid").html("");

		if (width < 3) width = 3;
		if (height < 3) height = 3;

		for (var x = 0; x < width; x++) {
			this.maze[x] = [];
			for (var y = 0; y < height; y++) {
				this.maze[x][y] = 0;
			}
		}

		for (var y = height - 1; y >= 0; y--) {
			$("#mazeGrid").append("<tr id='mazeRow" + y + "'></tr>");
			for (var x = 0; x < width; x++) {
				$("#mazeRow" + y).append("<td class='hidden bLeft bRgiht bTop bBottom' id='mazeCell" + x + "-" + y + "'></td>");
			}
		}

		this.plyrPos.x = Math.floor(width / 2);
		this.plyrPos.y = Math.floor(height / 2);

		this.genMaze(0, height - 1);
		this.makeExit();
		this.addEnemies();
		this.drawWalls();
	},

	genMaze: function (x, y) {
		//Here be dragons
		var dirs = [];

		// LEFT
		if (x != 0 && this.maze[x - 1][y] == 0)
			dirs.push(1);

		// RIGHT
		if (x != this.maze.length - 1 && this.maze[x + 1][y] == 0)
			dirs.push(2);

		// UP
		if (y != this.maze[0].length - 1 && this.maze[x][y + 1] == 0)
			dirs.push(4);

		// DOWN
		if (y != 0 && this.maze[x][y - 1] == 0)
			dirs.push(8);


		if (dirs.length == 0)
			return;

		var nxtCell = batman(0, dirs.length - 1);
		this.maze[x][y] += dirs[nxtCell];

		switch (dirs[nxtCell]) {
			case 1: // LEFT
				this.maze[x - 1][y] += 2;
				this.genMaze(x - 1, y);
				break;
			case 2: // RIGHT
				this.maze[x + 1][y] += 1;
				this.genMaze(x + 1, y);
				break;
			case 4: // UP
				this.maze[x][y + 1] += 8;
				this.genMaze(x, y + 1);
				break;
			case 8: // DOWN
				this.maze[x][y - 1] += 4;
				this.genMaze(x, y - 1);
				break;
		}
		this.genMaze(x, y);
	},

	makeExit: function () {
		let width = this.maze.length;
		let height = this.maze[0].length;

		var tmpExt = batman(0, 3);
		var hasExit = false;
		while (!hasExit) {
			tmpExt = (tmpExt + 1) % 4
			switch (tmpExt) {
				case 1:
					if (this.maze[0][0] != -1) {
						this.maze[0][0] += 16;
						hasExit = true;
					}
					break;
				case 2:
					if (this.maze[width - 1][0] != -1) {
						this.maze[width - 1][0] += 16;
						hasExit = true;
					}
					break;
				case 3:
					if (this.maze[0][height - 1] != -1) {
						this.maze[0][height - 1] += 16;
						hasExit = true;
					}
					break;
				default:
					if (this.maze[width - 1][height - 1] != -1) {
						this.maze[width - 1][height - 1] += 16;
						hasExit = true;
					}
			}
		}
	},

	drawWalls: function () {
		for (var x = 0; x < this.maze.length; x++) {
			for (var y = 0; y < this.maze[0].length; y++) {
				var dirs = this.maze[x][y].toString(2);
				while (dirs.length < 4)
					dirs = "0" + dirs;

				if (dirs.length > 4) { // EXIT
					$("#mazeCell" + x + "-" + y).addClass("bExit");
					dirs = dirs.substr(1);
				}

				// DOWN (8)
				if (dirs[0] == "1")
					$("#mazeCell" + x + "-" + y).removeClass("bBottom");
				// UP (4)
				if (dirs[1] == "1")
					$("#mazeCell" + x + "-" + y).removeClass("bTop");
				// RIGHT (2)
				if (dirs[2] == "1")
					$("#mazeCell" + x + "-" + y).removeClass("bRight");
				// LEFT (1)
				if (dirs[3] == "1")
					$("#mazeCell" + x + "-" + y).removeClass("bLeft");
			}
		}
		this.updatePlayerDisplay();
	},

	addEnemies: function () {
		// Clear old enemies
		this.enemies = [];

		// Determine columns to put in
		var enemyX = [];
		for (var i = 0; i < this.numEnemy; i++) {
			var tmp = batman(0, this.maze.length - i - 1);
			while (enemyX.indexOf(tmp) > -1) {
				tmp = (tmp + 1) % this.maze.length;
			}
			enemyX.push(tmp);
		}

		for (var i = 0; i < enemyX.length; i++) {
			// Clone from template
			var newSpcmn = jQuery.extend(true, {}, specimen);

			// Determine level based on player
			var percent = 1;
			if (batman(0, 10) > 5)
				percent += batman(this.minPercent, this.maxPercent) / 100;
			else
				percent -= batman(this.minPercent, this.maxPercent) / 100;
			newSpcmn.stats.level *= percent;

			// Randomly level up
			for (var j = newSpcmn.stats.level; j > 0; j--) {
				newSpcmn.mutate();
				this.randomlyBoostStat(newSpcmn);
			}

			var yVal = batman(0, this.maze.length - 1);
			if (yVal == this.plyrPos.y)
				yVal++;

			// Add new enemy to list
			this.enemies.push({
				x: enemyX[i],
				y: yVal,
				spcmn: newSpcmn
			});
		}

		this.updateEnemyDisplay();
	},

	randomlyBoostStat: function (curEnemy) {
		switch (batman(0, 6)) {
			case 0: curEnemy.stats.intelligence++; break;
			case 1: curEnemy.stats.strength++; break;
			case 2: curEnemy.stats.wisdom++; break;
			case 3: curEnemy.stats.dexterity++; break;
			case 4: curEnemy.stats.charisma++; break;
			default: curEnemy.stats.constitution++; break;
		}
	},

	updateEnemyDisplay: function () {
		$(".bEnemy").text("");
		$(".bEnemy").removeClass("bEnemy");
		for (var i = 0; i < this.enemies.length; i++) {
			$("#mazeCell" + this.enemies[i].x + "-" + this.enemies[i].y).addClass("bEnemy");
			$("#mazeCell" + this.enemies[i].x + "-" + this.enemies[i].y).text("@");
		}
	},

	updatePlayerDisplay: function () {
		$(".bPlayer").addClass("visited");
		$(".bPlayer").removeClass("bPlayer");
		$("#mazeCell" + this.plyrPos.x + "-" + this.plyrPos.y).addClass("bPlayer");
		$(".questDir").hide()

		var x = this.plyrPos.x;
		var y = this.plyrPos.y;

		var dirs = this.maze[x][y].toString(2);
		while (dirs.length < 4)
			dirs = "0" + dirs;

		if (dirs.length > 4) { // EXIT
			$("#mazeCell" + x + "-" + y).addClass("bExit");
			$("#goExit").show()
			dirs = dirs.substr(1);
		}

		var hasEnemy = $(".bPlayer").hasClass('bEnemy');
		// DOWN (8)
		if (dirs[0] == "1" && (!hasEnemy || !$(`#mazeCell${this.plyrPos.x}-${this.plyrPos.y - 1}`).hasClass("hidden"))) {
			$("#mazeCell" + x + "-" + (y - 1)).removeClass("hidden");
			$("#goDown").show()
		}
		// UP (4)
		if (dirs[1] == "1" && (!hasEnemy || !$(`#mazeCell${this.plyrPos.x}-${this.plyrPos.y + 1}`).hasClass("hidden"))) {
			$("#mazeCell" + x + "-" + (y + 1)).removeClass("hidden");
			$("#goUp").show()
		}
		// RIGHT (2)
		if (dirs[2] == "1" && (!hasEnemy || !$(`#mazeCell${this.plyrPos.x + 1}-${this.plyrPos.y}`).hasClass("hidden"))) {
			$("#mazeCell" + (x + 1) + "-" + y).removeClass("hidden");
			$("#goRight").show()
		}
		// LEFT (1)
		if (dirs[3] == "1" && (!hasEnemy || !$(`#mazeCell${this.plyrPos.x - 1}-${this.plyrPos.y}`).hasClass("hidden"))) {
			$("#mazeCell" + (x - 1) + "-" + y).removeClass("hidden");
			$("#goLeft").show()
		}
	},

	updateHpVisuals: function () {
		$("#enemyHP-T").css("width", this.enemies[this.encounterIdx].spcmn.getPercentHP() + "%")
		$("#playerHP").css("width", player.getActiveSpcmn().getPercentHP() + "%")
	},

	move: function (input) {
		switch (input) {
			case "L":
				this.plyrPos.x--;
				break;
			case "R":
				this.plyrPos.x++;
				break;
			case "U":
				this.plyrPos.y++;
				break;
			case "D":
				this.plyrPos.y--;
				break;
			case "E":
				this.completeMaze();
				break;
		}
		this.updatePlayerDisplay();

		for (var i = 0; i < this.enemies.length; i++) {
			if (this.plyrPos.x == this.enemies[i].x
				&& this.plyrPos.y == this.enemies[i].y)
				this.startEncounter(i);
		}
	},

	setEnemyDelay: function (idx) {
		if (this.encounterIdx < 0) return;
		this.enemyDelay = this.delayFormula(this.enemies[this.encounterIdx].spcmn.getStat("dex"));
	},

	setPlayerDelay: function () {
		this.playerDelay = this.delayFormula(player.getStat("dex"));
	},

	delayFormula: function (input) {
		return this.tickDelaySeconds * 500 / (input + 50);
	},

	startEncounter: function (idx) {
		this.encounterIdx = idx;
		this.setEnemyDelay();
		this.setPlayerDelay();

		player.getActiveSpcmn().updateHP();
		this.enemies[idx].spcmn.updateHP();
		this.updateHpVisuals();
		$(".specimenWrapper").hide();
		$("#questEncounter").show();

		$('#enemySpecimenT').text(this.enemies[idx].spcmn.getVisual());
		$('#enemyTop').show();

		//$('#enemySpecimenL').text(this.getVisual());
		//$('#enemyLeft').show();
		//$('#enemySpecimenR').text(this.getVisual());
		//$('#enemyRight').show();

		$('#playerSpecimen').text(player.getVisual());
		$('#playerBattle').show();

		/* Brains v Brawn */
		// * intelligence: Fewer magic enemies
		// * strength: Fewer physical enemies
		/* Consideration vs Reflex*/
		// * wisdom: Smaller dungeon size
		// * dexterity: Faster attacks
		/* Structure vs Charm */
		// * constitution: HP / Resistances
		// - charisma: Cheaper store / More money per tick

		$(".questDir").hide();
	},

	endEncounter: function () {
		this.encounterIdx = -1;
		this.updateEnemyDisplay();
		$("#questEncounter").hide();
		this.setEnemyDelay();
		this.setPlayerDelay();
		this.updatePlayerDisplay();
	},

	completeMaze: function () {
		main.alrt("Completed Maze");
		this.initMaze(10, 10);
		player.levelUp();
	},
};