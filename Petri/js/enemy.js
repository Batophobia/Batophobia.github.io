var enemy = {
	spcmn: [],
	minPercent: 5,
	maxPercent: 15,
	maxEnemy: 3,
	spawnDelaySeconds: 10,
	spawnTimer: 0,

	init: function () {
		this.spawnTimer = this.spawnDelaySeconds * 10;
	},

	tick: function () {
		this.spawnTimer--;
		if (this.spawnTimer < 0) {
			this.spawnTimer = this.spawnDelaySeconds * 10;
			if (this.spcmn.length >= this.maxEnemy) return;
			main.alrt("A new enemy has spawned");
			this.spawn();
		}
	},

	spawn: function () {
		if (this.spcmn.length >= this.maxEnemy) return;
		this.spcmn.push(jQuery.extend(true, {}, player.spcmn));
		var idx = this.spcmn.length - 1;
		this.spcmn[idx].dishLoc = idx;

		this.boostStats(idx);
		for (var i = this.spcmn[idx].stats.level; i > 0; i--)
			this.spcmn[idx].mutate();
	},

	boostStats: function (idx) {
		var percent = 1 + batman(this.minPercent, this.maxPercent) / 100;
		this.spcmn[idx].stats.level = Math.ceil(this.spcmn[idx].stats.level * percent);

		if (batman(0, 10) < 5)
			this.spcmn[idx].stats.intelligence = Math.ceil(this.spcmn[idx].stats.intelligence * percent);
		else
			this.spcmn[idx].stats.strength = Math.ceil(this.spcmn[idx].stats.strength * percent);

		if (batman(0, 10) < 5)
			this.spcmn[idx].stats.wisdom = Math.ceil(this.spcmn[idx].stats.wisdom * percent);
		else
			this.spcmn[idx].stats.dexterity = Math.ceil(this.spcmn[idx].stats.dexterity * percent);

		if (batman(0, 10) < 5)
			this.spcmn[idx].stats.constitution = Math.ceil(this.spcmn[idx].stats.constitution * percent);
		else
			this.spcmn[idx].stats.charisma = Math.ceil(this.spcmn[idx].stats.charisma * percent);
	}
};