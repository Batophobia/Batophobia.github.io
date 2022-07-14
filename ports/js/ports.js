var ports = {
	list: [
		{ ports: [21], tcp: 1, udp: 0, sec: -1, prots: ["FTP"], protocol: "FTP - File Transfer Protocol" },
		{ ports: [22], tcp: 1, udp: 1, prots: ["SSH", "SCP", "SFTP"], protocol: "SSH, SCP, SFTP - Secure SHell, Secure CoPy, Secure FTP" },
		{ ports: [23], tcp: 1, udp: 1, prots: ["Telnet"], protocol: "Telnet" },
		{ ports: [25], tcp: 1, udp: 0, sec: -1, prots: ["SMTP"], protocol: "SMTP - Simple Mail Transfer Protocol" },
		{ ports: [53], tcp: 1, udp: 1, prots: ["DNS"], protocol: "DNS - Domain Name Service" },
		{ ports: [69], tcp: 0, udp: 1, prots: ["TFTP"], protocol: "TFTP - Trivial File Transfer Protocol" },
		{ ports: [80], tcp: 1, udp: 0, prots: ["HTTP"], protocol: "HTTP - Hyper Text Transfer Protocol" },
		{ ports: [88], tcp: 1, udp: 1, prots: ["Kerberos"], protocol: "Kerberos" },
		{ ports: [110], tcp: 1, udp: 0, sec: -1, prots: ["POP3"], protocol: "POP3 - Post Office Protocol v3" },
		{ ports: [119], tcp: 1, udp: 0, prots: ["NNTP"], protocol: "NNTP - Network News Transfer Protocol" },
		{ ports: [135], tcp: 1, udp: 1, prots: ["RPC"], protocol: "RPC - Remote Procedure Call" },
		{ ports: [137, 138, 139], tcp: 1, udp: 1, prots: ["NetBIOS"], protocol: "NetBIOS" },
		//{ ports: [138], tcp: 1, udp: 1, prots: ["NetBIOS"], protocol: "NetBIOS" },
		//{ ports: [139], tcp: 1, udp: 1, prots: ["NetBIOS"], protocol: "NetBIOS" },
		{ ports: [143], tcp: 1, udp: 0, sec: -1, prots: ["IMAP"], protocol: "IMAP - Internet Message Access Protocol" },
		{ ports: [161], tcp: 0, udp: 1, prots: ["SNMP"], protocol: "SNMP - Simple Network Management Protocol" },
		{ ports: [162], tcp: 1, udp: 1, prots: ["SNMPTRAP"], protocol: "SNMPTRAP - Simple Network Management Protocol" },
		{ ports: [389], tcp: 1, udp: 1, sec: -1, prots: ["LDAP"], protocol: "LDAP - Lightweight Directory Access Protocol" },
		{ ports: [443], tcp: 1, udp: 0, prots: ["HTTPS"], protocol: "HTTPS - Hyper Text Transfer Protocol Secure" },
		{ ports: [445], tcp: 1, udp: 0, prots: ["SMB"], protocol: "SMB - Server Message Block" },
		{ ports: [465, 587], tcp: 1, udp: 0, sec: 1, prots: ["SMTP"], protocol: "SMTP with SSL/TLS - Simple Mail Transfer Protocol" },
		//{ ports: [587], tcp: 1, udp: 0, sec: 1, prots: ["SMTP"], protocol: "SMTP with SSL/TLS - Simple Mail Transfer Protocol" },
		{ ports: [514], tcp: 0, udp: 1, sec: -1, prots: ["Syslog"], protocol: "Syslog" },
		{ ports: [636], tcp: 1, udp: 1, sec: 1, prots: ["LDAP"], protocol: "LDAP SSL/TLS - Lightweight Directory Access Protocol" },
		{ ports: [860], tcp: 1, udp: 0, prots: ["iSCSI"], protocol: "iSCSI - Internet Small Computer Systems Interface" },
		{ ports: [989, 990], tcp: 1, udp: 0, sec: 1, prots: ["FTPS"], protocol: "FTPS - File Transfer Protocol Secure" },
		//{ ports: [990], tcp: 1, udp: 0, sec: 1, prots: ["FTPS"], protocol: "FTPS - File Transfer Protocol Secure" },
		{ ports: [993], tcp: 1, udp: 0, sec: 1, prots: ["IMAP4"], protocol: "IMAP4 with SSL/TLS - Internet Message Access Protocol" },
		{ ports: [995], tcp: 1, udp: 0, sec: 1, prots: ["POP3"], protocol: "POP3 (SSL/TLS) - Post Office Protocol v3" },
		{ ports: [1443], tcp: 1, udp: 0, prots: ["MSSQL", "MS-SQL-S"], protocol: "MS-SQL-S - Microsoft SQL Server" },
		{ ports: [1645], tcp: 0, udp: 1, prots: ["RADIUS"], protocol: "RADIUS (alt) - Remote Authentication Dial-In User Service authentication and authorization" },
		{ ports: [1646], tcp: 0, udp: 1, prots: ["RADIUS"], protocol: "RADIUS (alt) - Remote Authentication Dial-In User Service accounting" },
		{ ports: [1701], tcp: 0, udp: 1, prots: ["L2TP"], protocol: "L2TP - Layer 2 Tunnel Protocol" },
		{ ports: [1723], tcp: 1, udp: 1, prots: ["PPTP"], protocol: "PPTP - Point-to-Point Tunneling Protocol" },
		{ ports: [1812], tcp: 0, udp: 1, prots: ["RADIUS"], protocol: "RADIUS - Remote Authentication Dial-In User Service authentication and authorization" },
		{ ports: [1813], tcp: 0, udp: 1, prots: ["RADIUS"], protocol: "RADIUS - Remote Authentication Dial-In User Service accounting" },
		{ ports: [3225], tcp: 1, udp: 1, prots: ["FCIP"], protocol: "FCIP - Fibre Channel IP" },
		{ ports: [3260], tcp: 1, udp: 0, prots: ["iSCSI Target"], protocol: "iSCSI Target" },
		{ ports: [3389], tcp: 1, udp: 1, prots: ["RDP"], protocol: "RDP - Remote Desktop Protocol" },
		{ ports: [3868], tcp: 1, udp: 0, prots: ["Diameter"], protocol: "Diameter" },
		{ ports: [6514], tcp: 1, udp: 0, sec: 1, prots: ["Syslog"], protocol: "Syslog over TLS" },
	],

	curr: {},
	promptType: 0,

	getRandom: function () {
		const num = this.list.length - 1;
		let rnd = batman(0, num);
		this.curr = this.list[rnd];

		rnd = batman(0, 10);
		if (rnd < 5) {
			this.promptType = 1;
			rnd = batman(0, this.curr.ports.length - 1);
			$(".prompt").text(`Port: ${this.curr.ports[rnd]}`);
		} else {
			this.promptType = 2;
			$(".prompt").text(`Protocol: ${this.curr.protocol}`);
		}
	},

	checkAnswer: function () {
		let user = $("#userInput").val();
		console.log({ user, curr: this.curr, promptType: this.promptType });
		switch (this.promptType) {
			case 1: // Port prompt
				for (let p in this.curr.prots) {
					if (p.toLowerCase() == user.toLowerCase())
						return true;
				}
				break;
			case 2: // Protocol prompt
				user = parseInt(user);
				for (let p in this.curr.ports) {
					if (p == user)
						return true;
				}
				break;
		}
		return false;
	}
};

function batman(min, max) {
	return Math.floor(Math.random() * (max + 1)) + min;
}