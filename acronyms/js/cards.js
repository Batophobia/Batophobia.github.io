var cards = {
	list: [
		{ side1: "3DES", side2: "Triple Data Encryption Standard" },
		{ side1: "AAA", side2: "Authentication, side2:Authorization, side2:and Accounting" },
		{ side1: "ABAC", side2: "Attribute-based Access Control" },
		{ side1: "ACL", side2: "Access Control List" },
		{ side1: "AD", side2: "Active Directory" },
		{ side1: "AES", side2: "Advanced Encryption Standard" },
		{ side1: "AES256", side2: "Advanced Encryption Standards 256bit" },
		{ side1: "AH", side2: "Authentication Header" },
		{ side1: "AI", side2: "Artificial Intelligence" },
		{ side1: "AIS", side2: "Automated Indicator Sharing" },
		{ side1: "ALE", side2: "Annualized Loss Expectancy" },
		{ side1: "AP", side2: "Access Point" },
		{ side1: "API", side2: "Application Programming Interface" },
		{ side1: "APT", side2: "Advanced Persistent Threat" },
		{ side1: "ARO", side2: "Annualized Rate of Occurrence" },
		{ side1: "ARP", side2: "Address Resolution Protocol" },
		{ side1: "ASLR", side2: "Address Space Layout Randomization" },
		{ side1: "ASP", side2: "Active Server Pages" },
		{ side1: "ATT&CK", side2: "Adversarial Tactics, side2:Techniques, side2:and Common Knowledge" },
		{ side1: "AUP", side2: "Acceptable Use Policy" },
		{ side1: "AV", side2: "Antivirus" },
		{ side1: "BASH", side2: "Bourne Again Shell" },
		{ side1: "BCP", side2: "Business Continuity Planning" },
		{ side1: "BGP", side2: "Border Gateway Protocol" },
		{ side1: "BIA", side2: "Business Impact Analysis" },
		{ side1: "BIOS", side2: "Basic Input/Output System" },
		{ side1: "BPA", side2: "Business Partnership Agreement " },
		{ side1: "BPDU", side2: "Bridge Protocol Data Unit" },
		{ side1: "BSSID", side2: "Basic Service Set Identifier" },
		{ side1: "BYOD", side2: "Bring Your Own Device" },
		{ side1: "CA", side2: "Certificate Authority" },
		{ side1: "CAPTCHA", side2: "Completely Automated Public Turing Test to Tell Computers and Humans Apart" },
		{ side1: "CAR", side2: "Corrective Action Report" },
		{ side1: "CASB", side2: "Cloud Access Security Broker" },
		{ side1: "CBC", side2: "Cipher Block Chaining" },
		{ side1: "CBT", side2: "Computer-based Training" },
		{ side1: "CCMP", side2: "Counter-Mode/CBC-MAC Protocol" },
		{ side1: "CCTV", side2: "Closed-Circuit Television" },
		{ side1: "CERT", side2: "Computer Emergency Response Team" },
		{ side1: "CFB", side2: "Cipher Feedback " },
		{ side1: "CHAP", side2: "Challenge-Handshake Authentication Protocol" },
		{ side1: "CIO", side2: "Chief Information Officer" },
		{ side1: "CIRT", side2: "Computer Incident Response Team" },
		{ side1: "CIS", side2: "Center for Internet Security" },
		{ side1: "CMS", side2: "Content Management System" },
		{ side1: "CN", side2: "Common Name" },
		{ side1: "COOP", side2: "Continuity of Operations Planning" },
		{ side1: "COPE", side2: "Corporate-owned Personally Enabled" },
		{ side1: "CP", side2: "Contingency Planning" },
		{ side1: "CRC", side2: "Cyclic Redundancy Check" },
		{ side1: "CRL", side2: "Certificate Revocation List" },
		{ side1: "CSA", side2: "Cloud Security Alliance" },
		{ side1: "CSIRT", side2: "Computer Security Incident Response Team" },
		{ side1: "CSO", side2: "Chief Security Officer" },
		{ side1: "CSP", side2: "Cloud Service Provider " },
		{ side1: "CSR", side2: "Certificate Signing Request " },
		{ side1: "CSRF", alts: ["XSRF"], side2: "Cross-Site Request Forgery " },
		{ side1: "CSU", side2: "Channel Service Unit" },
		{ side1: "CTM", side2: "Counter-Mode" },
		{ side1: "CTO", side2: "Chief Technology Officer" },
		{ side1: "CVE", side2: "Common Vulnerabilities and Exposures" },
		{ side1: "CVSS", side2: "Common Vulnerability Scoring System" },
		{ side1: "CYOD", side2: "Choose Your Own Device" },
		{ side1: "DAC", side2: "Discretionary Access Control" },
		{ side1: "DBA", side2: "Database Administrator " },
		{ side1: "DDoS", side2: "Distributed Denial-of-Service" },
		{ side1: "DEP", side2: "Data Execution Prevention" },
		{ side1: "DER", side2: "Distinguished Encoding Rules" },
		{ side1: "DES", side2: "Data Encryption Standard" },
		{ side1: "DHCP", side2: "Dynamic Host Configuration Protocol" },
		{ side1: "DHE", side2: "Diffie-Hellman Ephemeral" },
		{ side1: "DKIM", side2: "Domain Keys Identified Mail" },
		{ side1: "DLL", side2: "Dynamic-link Library" },
		{ side1: "DLP", side2: "Data Loss Prevention" },
		{ side1: "DMARC", side2: "Domain Message Authentication Reporting and Conformance" },
		{ side1: "DNAT", side2: "Destination Network Address Transaction " },
		{ side1: "DNS", side2: "Domain Name System" },
		{ side1: "DNSSEC", side2: "Domain Name System Security Extensions" },
		{ side1: "DoS", side2: "Denial-of-Service" },
		{ side1: "DPO", side2: "Data Protection Officer" },
		{ side1: "DRP", side2: "Disaster Recovery Plan" },
		{ side1: "DSA", side2: "Digital Signature Algorithm " },
		{ side1: "DSL", side2: "Digital Subscriber Line" },
		{ side1: "EAP", side2: "Extensible Authentication Protocol" },
		{ side1: "ECB", side2: "Electronic Code Book" },
		{ side1: "ECC", side2: "Elliptic-curve Cryptography" },
		{ side1: "ECDHE", side2: "Elliptic-curve Diffie-Hellman Ephemeral" },
		{ side1: "ECDSA", side2: "Elliptic-curve Digital Signature Algorithm " },
		{ side1: "EDR", side2: "Endpoint Detection and Response" },
		{ side1: "EFS", side2: "Encrypted File System" },
		{ side1: "EIP", side2: "Extended Instruction Pointer" },
		{ side1: "EOL", side2: "End of Life" },
		{ side1: "EOS", side2: "End of Service" },
		{ side1: "ERP", side2: "Enterprise Resource Planning" },
		{ side1: "ESN", side2: "Electronic Serial Number" },
		{ side1: "ESP", side2: "Encapsulating Security Payload" },
		{ side1: "ESSID", side2: "Extended Service Set Identifier" },
		{ side1: "FACL", side2: "File System Access Control List" },
		{ side1: "FDE", side2: "Full Disk Encryption" },
		{ side1: "FIM", side2: "File Integrity Monitoring" },
		{ side1: "FPGA", side2: "Field Programmable Gate Array" },
		{ side1: "FRR", side2: "False Rejection Rate" },
		{ side1: "FTP", side2: "File Transfer Protocol" },
		{ side1: "FTPS", side2: "Secured File Transfer Protocol" },
		{ side1: "GCM", side2: "Galois/Counter Mode " },
		{ side1: "GDPR", side2: "General Data Protection Regulation" },
		{ side1: "GPG", side2: "GNU Privacy Guard" },
		{ side1: "GPO", side2: "Group Policy Object" },
		{ side1: "GPS", side2: "Global Positioning System" },
		{ side1: "GPU", side2: "Graphics Processing Unit" },
		{ side1: "GRE", side2: "Generic Routing Encapsulation" },
		{ side1: "HA", side2: "High Availability" },
		{ side1: "HDD", side2: "Hard Disk Drive" },
		{ side1: "HIDS", side2: "Host-based Intrusion Detection System" },
		{ side1: "HIPS", side2: "Host-based Intrusion Prevention System" },
		{ side1: "HMAC", side2: "Hash-based Message Authentication Code" },
		{ side1: "HOTP", side2: "HMAC-based One-time Password" },
		{ side1: "HSM", side2: "Hardware Security Module" },
		{ side1: "HSMaaS", side2: "Hardware Security Module as a Service" },
		{ side1: "HTML", side2: "Hypertext Markup Language" },
		{ side1: "HTTP", side2: "Hypertext Transfer Protocol" },
		{ side1: "HTTPS", side2: "Hypertext Transfer Protocol Secure " },
		{ side1: "HVAC", side2: "Heating, side2:Ventilation, side2:Air Conditioning" },
		{ side1: "IaaS", side2: "Infrastructure as a Service" },
		{ side1: "IAM", side2: "Identity and Access Management" },
		{ side1: "ICMP", side2: "Internet Control Message Protocol" },
		{ side1: "ICS", side2: "Industrial Control Systems " },
		{ side1: "IDEA", side2: "International Data Encryption Algorithm" },
		{ side1: "IDF", side2: "Intermediate Distribution Frame" },
		{ side1: "IdP", side2: "Identity Provider " },
		{ side1: "IDS", side2: "Intrusion Detection System" },
		{ side1: "IEEE", side2: "Institute of Electrical and Electronics Engineers" },
		{ side1: "IKE", side2: "Internet Key Exchange" },
		{ side1: "IM", side2: "Instant Messaging" },
		{ side1: "IMAP4", side2: "Internet Message Access Protocol v4" },
		{ side1: "IoC", side2: "Indicators of Compromise" },
		{ side1: "IoT", side2: "Internet of Things" },
		{ side1: "IP", side2: "Internet Protocol" },
		{ side1: "IPS", side2: "Intrusion Prevention System" },
		{ side1: "IPSec", side2: "Internet Protocol Security" },
		{ side1: "IR", side2: "Incident Response" },
		{ side1: "IRC", side2: "Internet Relay Chat" },
		{ side1: "IRP", side2: "Incident Response Plan" },
		{ side1: "ISA", side2: "Interconnection Security Agreement" },
		{ side1: "ISFW", side2: "Internal Segmentation Firewall" },
		{ side1: "ISO", side2: "International Organization for Standardization" },
		{ side1: "ISP", side2: "Internet Service Provider" },
		{ side1: "ISSO", side2: "Information Systems Security Officer" },
		{ side1: "ITCP", side2: "IT Contingency Plan" },
		{ side1: "IV", side2: "Initialization Vector" },
		{ side1: "KDC", side2: "Key Distribution Center" },
		{ side1: "KEK", side2: "Key Encryption Key" },
		{ side1: "L2TP", side2: "Layer 2 Tunneling Protocol" },
		{ side1: "LAN", side2: "Local Area Network" },
		{ side1: "LDAP", side2: "Lightweight Directory Access Protocol" },
		{ side1: "LEAP", side2: "Lightweight Extensible Authentication Protocol" },
		{ side1: "MaaS", side2: "Monitoring as a Service" },
		{ side1: "MAC", side2: "Media Access Control" },
		{ side1: "MAM", side2: "Mobile Application Management" },
		{ side1: "MAN", side2: "Metropolitan Area Network" },
		{ side1: "MBR", side2: "Master Boot Record" },
		{ side1: "MD5", side2: "Message Digest 5" },
		{ side1: "MDF", side2: "Main Distribution Frame" },
		{ side1: "MDM", side2: "Mobile Device Management" },
		{ side1: "MFA", side2: "Multifactor Authentication" },
		{ side1: "MFD", side2: "Multifunction Device" },
		{ side1: "MFP", side2: "Multifunction Printer" },
		{ side1: "ML", side2: "Machine Learning " },
		{ side1: "MMS", side2: "Multimedia Message Service" },
		{ side1: "MOA", side2: "Memorandum of Agreement" },
		{ side1: "MOU", side2: "Memorandum of Understanding " },
		{ side1: "MPLS", side2: "Multiprotocol Label Switching" },
		{ side1: "MSA", side2: "Measurement Systems Analysis" },
		{ side1: "MS-CHAP", side2: "Microsoft Challenge-Handshake Authentication Protocol" },
		{ side1: "MSP", side2: "Managed Service Provider" },
		{ side1: "MSSP", side2: "Managed Security Service Provider" },
		{ side1: "MTBF", side2: "Mean Time Between Failures" },
		{ side1: "MTTF", side2: "Mean Time to Failure" },
		{ side1: "MTTR", side2: "Mean Time to Repair" },
		{ side1: "MTU", side2: "Maximum Transmission Unit" },
		{ side1: "NAC", side2: "Network Access Control" },
		{ side1: "NAS", side2: "Network-attached Storage" },
		{ side1: "NAT", side2: "Network Address Translation" },
		{ side1: "NDA", side2: "Non-disclosure Agreement" },
		{ side1: "NFC", side2: "Near-field Communication" },
		{ side1: "NFV", side2: "Network Function Virtualization" },
		{ side1: "NGFW", side2: "Next-generation Firewall" },
		{ side1: "NG-SWG", side2: "Next-generation Secure Web Gateway" },
		{ side1: "NIC", side2: "Network Interface Card" },
		{ side1: "NIDS", side2: "Network-based Intrusion Detection System" },
		{ side1: "NIPS", side2: "Network-based Intrusion Prevention System" },
		{ side1: "NIST", side2: "National Institute of Standards & Technology" },
		{ side1: "NOC", side2: "Network Operations Center" },
		{ side1: "NTFS", side2: "New Technology File System" },
		{ side1: "NTLM", side2: "New Technology LAN Manager" },
		{ side1: "NTP", side2: "Network Time Protocol" },
		{ side1: "OCSP", side2: "Online Certificate Status Protocol" },
		{ side1: "OID", side2: "Object Identifier" },
		{ side1: "OS", side2: "Operating System" },
		{ side1: "OSI", side2: "Open Systems Interconnection" },
		{ side1: "OSINT", side2: "Open-source Intelligence" },
		{ side1: "OSPF", side2: "Open Shortest Path First" },
		{ side1: "OT", side2: "Operational Technology" },
		{ side1: "OTA", side2: "Over-The-Air" },
		{ side1: "OTG", side2: "On-The-Go" },
		{ side1: "OVAL", side2: "Open Vulnerability and Assessment Language" },
		{ side1: "OWASP", side2: "Open Web Application Security Project" },
		{ side1: "P12", side2: "PKCS #12" },
		{ side1: "P2P", side2: "Peer-to-Peer" },
		{ side1: "PaaS", side2: "Platform as a Service" },
		{ side1: "PAC", side2: "Proxy Auto Configuration " },
		{ side1: "PAM", side2: "Privileged Access Management" },
		{ side1: "PAM", side2: "Pluggable Authentication Modules" },
		{ side1: "PAP", side2: "Password Authentication Protocol" },
		{ side1: "PAT", side2: "Port Address Translation" },
		{ side1: "PBKDF2", side2: "Password-based Key Derivation Function 2" },
		{ side1: "PBX", side2: "Private Branch Exchange" },
		{ side1: "PCAP", side2: "Packet Capture " },
		{ side1: "PCI-DSS", side2: "Payment Card Industry Data Security Standard" },
		{ side1: "PDU", side2: "Power Distribution Unit" },
		{ side1: "PE", side2: "Portable Executable" },
		{ side1: "PEAP", side2: "Protected Extensible Authentication Protocol" },
		{ side1: "PED", side2: "Portable Electronic Device" },
		{ side1: "PEM", side2: "Privacy Enhanced Mail" },
		{ side1: "PFS", side2: "Perfect Forward Secrecy " },
		{ side1: "PGP", side2: "Pretty Good Privacy" },
		{ side1: "PHI", side2: "Personal Health Information" },
		{ side1: "PII", side2: "Personally Identifiable Information" },
		{ side1: "PIN", side2: "Personal Identification Number" },
		{ side1: "PIV", side2: "Personal Identity Verification " },
		{ side1: "PKCS", side2: "Public Key Cryptography Standards" },
		{ side1: "PKI", side2: "Public Key Infrastructure" },
		{ side1: "PoC", side2: "Proof of Concept" },
		{ side1: "POP", side2: "Post Office Protocol" },
		{ side1: "POTS", side2: "Plain Old Telephone Service" },
		{ side1: "PPP", side2: "Point-to-Point Protocol" },
		{ side1: "PPTP", side2: "Point-to-Point Tunneling Protocol" },
		{ side1: "PSK", side2: "Preshared Key" },
		{ side1: "PTZ", side2: "Pan-Tilt-Zoom" },
		{ side1: "PUP", side2: "Potentially Unwanted Program" },
		{ side1: "PUP", side2: "Potentially Unwanted Program" },
		{ side1: "QA", side2: "Quality Assurance" },
		{ side1: "QoS", side2: "Quality of Service" },
		{ side1: "RA", side2: "Registration Authority" },
		{ side1: "RAD", side2: "Rapid Application Development" },
		{ side1: "RADIUS", side2: "Remote Authentication Dial-in User Service" },
		{ side1: "RAID", side2: "Redundant Array of Inexpensive Disks" },
		{ side1: "RAM", side2: "Random Access Memory" },
		{ side1: "RAS", side2: "Remote Access Server" },
		{ side1: "RAT", side2: "Remote Access Trojan" },
		{ side1: "RC4", side2: "Rivest Cipher version 4" },
		{ side1: "RCS", side2: "Rich Communication Services" },
		{ side1: "RFC", side2: "Request for Comments" },
		{ side1: "RFID", side2: "Radio Frequency Identification" },
		{ side1: "RIPEMD", side2: "RACE Integrity Primitives Evaluation Message Digest" },
		{ side1: "ROI", side2: "Return on Investment" },
		{ side1: "RPO", side2: "Recovery Point Objective" },
		{ side1: "RSA", side2: "Rivest, side2:Shamir, side2:& Adleman" },
		{ side1: "RTBH", side2: "Remotely Triggered Black Hole" },
		{ side1: "RTO", side2: "Recovery Time Objective" },
		{ side1: "RTOS", side2: "Real-time Operating System" },
		{ side1: "RTP", side2: "Real-time Transport Protocol" },
		{ side1: "S/MIME", side2: "Secure/Multipurpose Internet Mail Extensions" },
		{ side1: "SaaS", side2: "Software as a Service" },
		{ side1: "SAE", side2: "Simultaneous Authentication of Equals" },
		{ side1: "SAML", side2: "Security Assertions Markup Language" },
		{ side1: "SCADA", side2: "Supervisory Control and Data Acquisition" },
		{ side1: "SCAP", side2: "Security Content Automation Protocol" },
		{ side1: "SCEP", side2: "Simple Certificate Enrollment Protocol" },
		{ side1: "SDK", side2: "Software Development Kit" },
		{ side1: "SDLC", side2: "Software Development Life Cycle" },
		{ side1: "SDLM", side2: "Software Development Life-cycle Methodology" },
		{ side1: "SDN", side2: "Software-defined Networking" },
		{ side1: "SDP", side2: "Service Delivery Platform" },
		{ side1: "SDV", side2: "Software-defined Visibility" },
		{ side1: "SED", side2: "Self-Encrypting Drives" },
		{ side1: "SEH", side2: "Structured Exception Handling " },
		{ side1: "SFTP", side2: "SSH File Transfer Protocol " },
		{ side1: "SHA", side2: "Secure Hashing Algorithm" },
		{ side1: "SIEM", side2: "Security Information and Event Management" },
		{ side1: "SIM", side2: "Subscriber Identity Module" },
		{ side1: "SIP", side2: "Session Initiation Protocol" },
		{ side1: "SLA", side2: "Service-level Agreement" },
		{ side1: "SLE", side2: "Single Loss Expectancy" },
		{ side1: "SMB", side2: "Server Message Block" },
		{ side1: "SMS", side2: "Short Message Service" },
		{ side1: "SMTP", side2: "Simple Mail Transfer Protocol" },
		{ side1: "SMTPS", side2: "Simple Mail Transfer Protocol Secure" },
		{ side1: "SNMP", side2: "Simple Network Management Protocol" },
		{ side1: "SOAP", side2: "Simple Object Access Protocol" },
		{ side1: "SOAR", side2: "Security Orchestration, side2:Automation, side2:Response" },
		{ side1: "SoC", side2: "System on Chip" },
		{ side1: "SOC", side2: "Security Operations Center" },
		{ side1: "SPF", side2: "Sender Policy Framework" },
		{ side1: "SPIM", side2: "Spam over Instant Messaging" },
		{ side1: "SQL", side2: "Structured Query Language" },
		{ side1: "SQLi", side2: "SQL Injection" },
		{ side1: "SRTP", side2: "Secure Real-time Transport Protocol" },
		{ side1: "SSD", side2: "Solid State Drive" },
		{ side1: "SSH", side2: "Secure Shell" },
		{ side1: "SSID", side2: "Service Set Identifier" },
		{ side1: "SSL", side2: "Secure Sockets Layer" },
		{ side1: "SSO", side2: "Single Sign-on" },
		{ side1: "STIX", side2: "Structured Threat Information eXpression" },
		{ side1: "STP", side2: "Shielded Twisted Pair" },
		{ side1: "SWG", side2: "Secure Web Gateway" },
		{ side1: "TACACS+", side2: "Terminal Access Controller Access Control System" },
		{ side1: "TAXII", side2: "Trusted Automated eXchange of Intelligence Information" },
		{ side1: "TCP/IP", side2: "Transmission Control Protocol/Internet Protocol" },
		{ side1: "TGT", side2: "Ticket Granting Ticket" },
		{ side1: "TKIP", side2: "Temporal Key Integrity Protocol" },
		{ side1: "TLS", side2: "Transport Layer Security" },
		{ side1: "TOTP", side2: "Time-based One Time Password" },
		{ side1: "TPM", side2: "Trusted Platform Module" },
		{ side1: "TSIG", side2: "Transaction Signature" },
		{ side1: "TTP", side2: "Tactics, side2:Techniques, side2:and Procedures" },
		{ side1: "UAT", side2: "User Acceptance Testing" },
		{ side1: "UDP", side2: "User Datagram Protocol" },
		{ side1: "UEBA", side2: "User and Entity Behavior Analytics" },
		{ side1: "UEFI", side2: "Unified Extensible Firmware Interface" },
		{ side1: "UEM", side2: "Unified Endpoint Management" },
		{ side1: "UPS", side2: "Uninterruptible Power Supply" },
		{ side1: "URI", side2: "Uniform Resource Identifier" },
		{ side1: "URL", side2: "Universal Resource Locator" },
		{ side1: "USB", side2: "Universal Serial Bus" },
		{ side1: "USB", side2: "OTG USB On-The-Go" },
		{ side1: "UTM", side2: "Unified Threat Management" },
		{ side1: "UTP", side2: "Unshielded Twisted Pair" },
		{ side1: "VBA", side2: "Visual Basic for Applications" },
		{ side1: "VDE", side2: "Virtual Desktop Environment" },
		{ side1: "VDI", side2: "Virtual Desktop Infrastructure " },
		{ side1: "VLAN", side2: "Virtual Local Area Network" },
		{ side1: "VLSM", side2: "Variable-length Subnet Masking" },
		{ side1: "VM", side2: "Virtual Machine" },
		{ side1: "VoIP", side2: "Voice over IP" },
		{ side1: "VPC", side2: "Virtual Private Cloud" },
		{ side1: "VPN", side2: "Virtual Private Network" },
		{ side1: "VTC", side2: "Video Teleconferencing " },
		{ side1: "WAF", side2: "Web Application Firewall" },
		{ side1: "WAP", side2: "Wireless Access Point" },
		{ side1: "WEP", side2: "Wired Equivalent Privacy" },
		{ side1: "WIDS", side2: "Wireless Intrusion Detection System" },
		{ side1: "WIPS", side2: "Wireless Intrusion Prevention System" },
		{ side1: "WORM", side2: "Write Once Read Many" },
		{ side1: "WPA", side2: "WiFi Protected Access" },
		{ side1: "WPS", side2: "WiFi Protected Setup" },
		{ side1: "XaaS", side2: "Anything as a Service" },
		{ side1: "XML", side2: "Extensible Markup Language" },
		{ side1: "XOR", side2: "Exclusive OR" },
		{ side1: "XSRF", alts: ["CSRF"], side2: "Cross-site Request Forgery" },
		{ side1: "XSS", side2: "Cross-site Scripting" }
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
				if (this.curr.side1.toLowerCase() == user.toLowerCase()) {
					main.alrt(correctString(this.curr));
					return true;
				}
				break;
			case 2: // Word prompt
				user = parseInt(user);
				for (let p in this.curr.ports) {
					if (this.curr.ports[p] == user) {
						main.alrt(correctString(this.curr));
						return true;
					}
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