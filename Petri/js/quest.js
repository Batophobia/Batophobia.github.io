var quest = {
	maze: [],
	plyrPos: { x: 0, y: 0 },

	init: function () {
		$("#btnQuest").show();
		$("#btnQuest").on('click', function () {
			$(".mainBarItem").hide();
			$(".quest").toggle();
		});

		$(".questDir").on('click', function () {
			quest.move($(this).attr('dir'))
		});

		this.initMaze(10, 10);
	},

	tick: function () {
		// TODO
	},

	initMaze: function (width, height) {
		$("#mazeGrid").html("");

		if (width < 2) width = 2;
		if (height < 2) height = 2;

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
						this.maze[0][height - 1] += 16;
						hasExit = true;
					}
					break;
				case 3:
					if (this.maze[0][height - 1] != -1) {
						this.maze[1][1] += 16;
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

		// DOWN (8)
		if (dirs[0] == "1") {
			$("#mazeCell" + x + "-" + (y - 1)).removeClass("hidden");
			$("#goDown").show()
		}
		// UP (4)
		if (dirs[1] == "1") {
			$("#mazeCell" + x + "-" + (y + 1)).removeClass("hidden");
			$("#goUp").show()
		}
		// RIGHT (2)
		if (dirs[2] == "1") {
			$("#mazeCell" + (x + 1) + "-" + y).removeClass("hidden");
			$("#goRight").show()
		}
		// LEFT (1)
		if (dirs[3] == "1") {
			$("#mazeCell" + (x - 1) + "-" + y).removeClass("hidden");
			$("#goLeft").show()
		}
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
				main.alrt("Completed Maze");
				this.initMaze(10, 10);
				break;
		}
		this.updatePlayerDisplay();
	},

	getDirections() {
		var tmp = this.maze[this.plyrPos.x][this.plyrPos.y].toString(2);
		while (tmp.length < 4)
			tmp = "0" + tmp;

		if (tmp.charAt(0) == "1")
			$("#goLeft").show();
		else
			$("#goLeft").hide();

		if (tmp.charAt(1) == "1")
			$("#goRight").show();
		else
			$("#goRight").hide();

		if (tmp.charAt(2) == "1")
			$("#goDown").show();
		else
			$("#goDown").hide();

		if (tmp.charAt(3) == "1")
			$("#goUp").show();
		else
			$("#goUp").hide();
	}
};