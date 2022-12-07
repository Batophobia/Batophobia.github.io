var cards = {
	list: [
		{ os: [], type: "forensic", side1: "Autopsy", side2: "aaaaaa" },
		{ os: [], type: "forensic", side1: "FTK imager", side2: "aaaaaa" },
		{ os: [], type: "forensic", side1: "WinHex", side2: "aaaaaa" },
		{ os: [], type: "forensic", side1: "Memdump", side2: "aaaaaa" },
		{ os: [], type: "forensic", side1: "dd", side2: "aaaaaa" },
		{ os: [], type: "packet", side1: "Wireshark", side2: "aaaaaa" },
		{ os: [], type: "packet", side1: "Tcpdump", side2: "aaaaaa" },
		{ os: [], type: "packet", side1: "Tcpreplay", side2: "aaaaaa" },
		{ os: [], type: "file", side1: "head", side2: "aaaaaa" },
		{ os: [], type: "file", side1: "tail", side2: "aaaaaa" },
		{ os: [], type: "file", side1: "cat", side2: "aaaaaa" },
		{ os: [], type: "file", side1: "grep", side2: "aaaaaa" },
		{ os: [], type: "file", side1: "chmod", side2: "aaaaaa" },
		{ os: [], type: "file", side1: "logger", side2: "aaaaaa" },
		{ os: [], type: "arp", side1: "route", side2: "aaaaaa" },
		{ os: [], type: "arp", side1: "curl", side2: "aaaaaa" },
		{ os: [], type: "arp", side1: "theHarvester", side2: "aaaaaa" },
		{ os: [], type: "arp", side1: "sn1per", side2: "aaaaaa" },
		{ os: [], type: "arp", side1: "scanless", side2: "aaaaaa" },
		{ os: [], type: "arp", side1: "dnsenum", side2: "aaaaaa" },
		{ os: [], type: "arp", side1: "Nessus", side2: "aaaaaa" },
		{ os: [], type: "arp", side1: "Cuckoo", side2: "aaaaaa" },
		{ os: ["Windows"], type: "network", side1: "tracert", side2: "network diagnostic command for displaying possible routes and measuring transit delays of packets" },
		{ os: ["Linux"], type: "network", side1: "traceroute", side2: "network diagnostic command for displaying possible routes and measuring transit delays of packets" },
		{ os: [], type: "network", side1: "nslookup", side2: "aaaaaa" },
		{ os: [], type: "network", side1: "dig", side2: "aaaaaa" },
		{ os: ["Linux"], type: "network", side1: "ip", side2: "aaaaaa" },
		{ os: ["Windows"], type: "network", side1: "ipconfig", side2: "aaaaaa" },
		{ os: ["Linux"], type: "network", side1: "ifconfig", side2: "aaaaaa" },
		{ os: [], type: "network", side1: "nmap", side2: "aaaaaa" },
		{ os: [], type: "network", side1: "ping", side2: "aaaaaa" },
		{ os: [], type: "network", side1: "pathping", side2: "aaaaaa" },
		{ os: [], type: "network", side1: "hping", side2: "aaaaaa" },
		{ os: [], type: "network", side1: "netstat", side2: "aaaaaa" },
		{ os: [], type: "network", side1: "netcat", side2: "aaaaaa" },
		{ os: [], type: "log", side1: "syslog", side2: "aaaaaa" },
		{ os: [], type: "log", side1: "rsyslog", side2: "aaaaaa" },
		{ os: [], type: "log", side1: "syslog-ng", side2: "aaaaaa" },
		{ os: [], type: "log", side1: "journalctl", side2: "aaaaaa" },
		{ os: [], type: "log", side1: "NXLog", side2: "aaaaaa" },
		{ os: [], type: "network", side1: "Netflow", side2: "aaaaaa" },
		{ os: [], type: "network", side1: "sFlow", side2: "aaaaaa" },
		{ os: [], type: "network", side1: "IPFIX", side2: "aaaaaa" },
	],

	curr: {},
	promptType: 0,
	idx: 0,

	getNext: function () {
		if (settings.options.randomize)
			this.getRandom();
		else
			this.getFollowing();
		$("#userInput").focus();
	},

	getRandom: function () {
		const num = this.list.length - 1;
		let rnd = batman(0, num);
		this.curr = this.list[rnd];

		rnd = batman(0, 10);
		if (!settings.options.useAcronyms && rnd < 5) rnd = 9;
		if (!settings.options.useWords && rnd >= 5) rnd = 1;

		if (rnd < 5) {
			this.promptType = 1;
			$(".prompt").text(this.curr.side1);
		} else {
			this.promptType = 2;
			$(".prompt").text(this.curr.side2);
		}
	},

	getFollowing: function () {
		if (!this.curr.side1) {
			this.idx = 0;
			this.promptType = 1;
		} else {
			this.idx++;
			if (this.idx >= this.list.length) {
				this.idx = 0;
				this.promptType++;
				if (this.promptType > 2) this.promptType = 1;
			}
		}

		if (!settings.options.useAcronyms && this.promptType == 1) this.promptType = 2;
		if (!settings.options.useWords && this.promptType == 2) this.promptType = 1;

		this.curr = this.list[this.idx];

		if (this.promptType == 1) {
			$(".prompt").text(this.curr.side1);
		} else {
			$(".prompt").text(this.curr.side2);
		}
	},

	checkAnswer: function () {
		let user = $("#userInput").val();

		switch (this.promptType) {
			case 1: // Acronym prompt
				if (this.curr.side2.replace(',', '').replace(/[-/]/g, ' ').replace('&', 'and').toLowerCase().trim() == user.toLowerCase().trim()) {
					main.alrt(correctString(this.curr));
					return true;
				}
				break;
			case 2: // Word prompt
				if (this.curr.side1.toLowerCase().trim() == user.toLowerCase().trim()) {
					main.alrt(correctString(this.curr));
					return true;
				}
				break;
		}
		main.alrt(`${user} is incorrect.`);
		return false;
	}
};

function correctString(obj) {
	return `Correct.  ${obj.side1} stands for ${obj.side2}`;
}

function batman(min, max) {
	return Math.floor(Math.random() * (max + 1)) + min;
}