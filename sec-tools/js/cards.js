var cards = {
	list: [
		{ openSource: true, os: ["Windows", "Linux"], type: "forensic", side1: "Autopsy", side2: "Digital forensics platform and graphical interface to The Sleuth Kit® and other digital forensics tools" },
		{ openSource: true, os: ["Windows"], type: "forensic", side1: "FTK imager", side2: "Data preview and imaging tool, quickly assess electronic evidence to determine if further analysis needed" },
		{ openSource: false, os: ["Windows"], type: "forensic", side1: "WinHex", side2: "Commercial disk editor and universal hexadecimal editor" },
		{ openSource: true, os: ["Linux"], type: "forensic", side1: "Memdump", side2: "Command line utility used to dump system memory" },
		{ openSource: true, os: ["Linux"], type: "forensic", side1: "dd", side2: "Command line utility used to copy disk images using a bit by bit" },
		{ openSource: true, os: ["Windows", "Linux"], type: "packet", side1: "Wireshark", side2: "Network analysis tool to capture network packets and display them at granular level, real-time or offline analysis" },
		{ openSource: true, os: ["Windows", "Linux"], type: "packet", side1: "Tcpdump", side2: "Command line utility to capture and analyze network traffic going through system" },
		{ openSource: true, os: ["Linux"], type: "packet", side1: "Tcpreplay", side2: "Suite of free open source utilities for editing / replaying previously captured network traffic" },
		{ openSource: true, os: ["Linux"], type: "file", side1: "head", side2: "Command-line utility for outputting the first [10] lines of a file" },
		{ openSource: true, os: ["Linux"], type: "file", side1: "tail", side2: "Command-line utility for outputting the last [10] lines of a file" },
		{ openSource: true, os: ["Windows", "Linux"], type: "file", side1: "cat", side2: "Command-line utility for outputting the contents of a file to the screen" },
		{ openSource: true, os: ["Linux"], type: "file", side1: "grep", side2: "Command-line utility for searching plain-text data sets for lines that match a regular expression or pattern" },
		{ openSource: true, os: ["Linux"], type: "file", side1: "chmod", side2: "Command-line utility used to change the access permissions" },
		{ openSource: true, os: ["Linux"], type: "file", side1: "logger", side2: "Easy way to add messages to the /var/log/syslog file from the command line or from other files" },
		{ openSource: false, os: ["Windows", "Linux"], type: "network", side1: "arp", side2: "Utility for viewing and modifying the local Address Resolution Protocol (ARP) cache" },
		{ openSource: false, os: ["Windows", "Linux"], type: "network", side1: "route", side2: "Utility that is used to view and manipulate the IP routing table on a host or server" },
		{ openSource: true, os: ["Windows", "Linux"], type: "network", side1: "curl", side2: "Command line tool to transfer data to or from a server" },
		{ openSource: true, os: ["Windows", "Linux"], type: "network", side1: "The Harvester", side2: "Python script that is used to gather email/subdomain/host/employee data/open ports/banners from public sources" },
		{ openSource: false, os: ["Linux"], type: "network", side1: "sn1per", side2: "Automated scanner used to enumerate and scan for vulnerabilities across a network" },
		{ openSource: true, os: ["Windows", "Linux"], type: "network", side1: "scanless", side2: "Utility used to create exploitation website that can perform Open port scans" },
		{ openSource: true, os: ["Linux"], type: "network", side1: "dnsenum", side2: "Utility used for DNS enumeration to locate all DNS servers/entries for given organization" },
		{ openSource: false, os: ["Windows", "Linux"], type: "network", side1: "Nessus", side2: "Vulnerability scanner that can remotely scan a computer or network" },
		{ openSource: true, os: ["Windows", "Linux"], type: "network", side1: "Cuckoo", side2: "Automating analysis of suspicious files" },
		{ openSource: true, os: ["Windows"], type: "network", side1: "tracert", side2: "network diagnostic command for displaying possible routes and measuring transit delays of packets" },
		{ openSource: true, os: ["Linux"], type: "network", side1: "traceroute", side2: "network diagnostic command for displaying possible routes and measuring transit delays of packets" },
		{ openSource: true, os: ["Windows"], type: "network", side1: "nslookup", side2: "Utility used to determine IP address associated with domain name, obtain mail server settings for domain, and other DNS info" },
		{ openSource: true, os: ["Linux"], type: "network", side1: "dig", side2: "Utility used to determine IP address associated with domain name, obtain mail server settings for domain, and other DNS info" },
		//{ openSource: true, os: ["Linux"], type: "network", side1: "ip", side2: "aaaaaa" },
		{ openSource: true, os: ["Windows"], type: "network", side1: "ipconfig", side2: "Displays all the network configurations of the currently connected network devices" },
		{ openSource: true, os: ["Linux"], type: "network", side1: "ifconfig", side2: "Displays all the network configurations of the currently connected network devices" },
		{ openSource: true, os: ["Windows", "Linux"], type: "network", side1: "nmap", side2: "Network scanner to discover hosts and services on network by sending packets and analyzing responses" },
		{ openSource: true, os: ["Windows", "Linux"], type: "network", side1: "ping", side2: "Utility used to determine if a host is reachable on an Internet Protocol network" },
		{ openSource: true, os: ["Windows"], type: "network", side1: "pathping", side2: "Utility used to determine if a host is reachable on an Internet Protocol network" },
		{ openSource: true, os: ["Windows", "Linux"], type: "network", side1: "hping", side2: "Packet generator and analyzer for the TCP/IP, used for auditing and testing firewalls" },
		{ openSource: true, os: ["Windows", "Linux"], type: "network", side1: "netstat", side2: "Display network connections for a number of network interface and network protocol statistics" },
		{ openSource: true, os: ["Windows", "Linux"], type: "network", side1: "netcat", side2: "Utility for reading/writing network connections using TCP/UDP, easily driven by other programs and scripts" },
		{ openSource: true, os: ["Linux"], type: "log", side1: "syslog", side2: "Logging data from different types of systems in central repository" },
		{ openSource: true, os: ["Linux"], type: "log", side1: "rsyslog", side2: "Logging data from different types of systems in central repository" },
		{ openSource: true, os: ["Linux"], type: "log", side1: "syslog-ng", side2: "Logging data from different types of systems in central repository" },
		{ openSource: true, os: ["Linux"], type: "log", side1: "journalctl", side2: "Command line utility used for querying and displaying logs from journald" },
		{ openSource: true, os: ["Windows", "Linux"], type: "log", side1: "NXLog", side2: "Log management tool, similar to rsyslog / syslog-ng" },
		{ openSource: false, os: ["Windows", "Linux"], type: "network", side1: "Netflow", side2: "Network protocol system [Cisco] collects active IP network traffic as it flows in or out of interface" },
		{ openSource: true, os: ["Windows", "Linux"], type: "network", side1: "sFlow", side2: "Export truncated packets, interface counters for purpose of network monitoring" },
		{ openSource: true, os: ["Windows", "Linux"], type: "network", side1: "IPFIX", side2: "Universal standard of export for IP flow information" },
		{ openSource: false, os: ["Windows", "Linux"], type: "exploitation", side1: "Metasploit", side2: "Offers information about software vulnerabilities and IDS signature development" },
		{ openSource: true, os: ["Windows", "Linux"], type: "exploitation", side1: "BeEF", side2: "Hook one or more browsers to launch various direct commands and further attacks" },
		{ openSource: true, os: ["Windows"], type: "exploitation", side1: "Cain & Abel", side2: "Password recovery tool" },
		{ openSource: true, os: ["Windows", "Linux"], type: "exploitation", side1: "Jack the Ripper", side2: "Password recovery tool" },
	],

	curr: {},
	promptType: 0,
	idx: 0,

	getNext: function () {
		if (settings.options.randomize)
			this.getRandom();
		else
			this.getFollowing();

		if (settings.options.useName) {
			$("#typeInput").focus();
		} else {
			$("#userInput").focus();
		}
	},

	getRandom: function () {
		const num = this.list.length - 1;
		let rnd = batman(0, num);

		this.setPrompt(rnd);
	},

	getFollowing: function () {
		if (!this.curr.side1) {
			this.idx = 0;
		} else {
			this.idx++;
			if (this.idx >= this.list.length) {
				this.idx = 0;
			}
		}

		this.setPrompt(this.idx);
	},

	setPrompt: function (idx) {
		this.idx = idx;
		this.curr = this.list[idx];

		if (settings.options.useName)
			$(".prompt").text(`${this.curr.side1}`);
		else
			$(".prompt").text(`${this.curr.side2} for ${this.curr.os.join(' and ')} that is ${this.curr.openSource ? "open-source" : "proprietary"}`);
	},

	checkAnswer: function () {
		if (settings.options.useName) return this.checkAnswers();

		let user = $("#userInput").val();

		if (this.curr.side1.toLowerCase().trim() == user.toLowerCase().trim()) {
			main.alrt(correctString(this.curr));
			return true;
		}

		main.alrt(`${user} is incorrect.`);
		return false;
	},

	checkAnswers: function () {
		let type = $("#typeInput").val();
		let os = $("#osInput").val();
		let openSource = $("#openSourceInput").val();

		if (this.curr.type != type) {
			main.alrt(`Incorrect type.`);
			return false;
		}
		if (this.curr.os.length > 1 && os != "both") {
			main.alrt(`Incorrect Operating System.`);
			return false;
		}
		if (this.curr.os.length == 1 && this.curr.os[0].toLowerCase() != os) {
			main.alrt(`Incorrect Operating System.`);
			return false;
		}
		if ((this.curr.openSource ? "1" : "0") != openSource) {
			main.alrt(`Incorrect Licensing.`);
			return false;
		}

		main.alrt(correctString(this.curr));
		return true;
	}
};

function correctString(obj) {
	return `Correct.  ${obj.side1} is a ${obj.side2} for ${obj.os.join(' and ')} that is ${obj.openSource ? "open-source" : "proprietary"}`;
}

function batman(min, max) {
	return Math.floor(Math.random() * (max + 1)) + min;
}