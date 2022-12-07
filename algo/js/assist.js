var assist = {
	words: ["Acceptable", "Acceptance", "Access", "Accounting", "Acquisition", "Action", "Active", "Address", "Adleman", "Administrator", "Advanced", "Adversarial", "Again", "Agreement", "Air", "Algorithm", "Alliance", "Analysis", "Analytics", "and", "Annualized", "Antivirus", "Anything", "Apart", "Application", "Applications", "Area", "Array", "Artificial", "as", "Assertions", "Assessment", "Assurance", "attached", "Attribute", "Authentication", "Authority", "Authorization", "Auto", "Automated", "Automation", "Availability",
		"based", "Basic", "Behavior", "Between", "bit", "Black", "Block", "Book", "Boot", "Border", "Bourne", "Branch", "Bridge", "Bring", "Broker", "Bus", "Business",
		"Capture", "Card", "CBC", "Center", "Certificate", "Chaining", "Challenge", "Channel", "Chat", "Check", "Chief", "Chip", "Choose", "Cipher", "Circuit", "Closed", "Cloud", "Code", "Comments", "Common", "Communication", "Completely", "Compromise", "Computer", "Computers", "Concept", "Conditioning", "Configuration", "Conformance", "Content", "Contingency", "Continuity", "Control", "Controller", "Corporate", "Corrective", "Counter", "Cross", "Cryptography", "curve", "Cycle", "cycle", "Cyclic",
		"Data", "Database", "Datagram", "defined", "Delivery", "Denial", "Derivation", "Desktop", "Destination", "Detection", "Development", "Device", "Dial", "Diffie", "Digest", "Digital", "Directory", "Disaster", "Discretionary", "Disk", "Disks", "Distinguished", "Distributed", "Distribution", "Domain", "Drive", "Drives", "Dynamic",
		"Electrical", "Electronic", "Electronics", "Elliptic", "Emergency", "Enabled", "Encapsulating", "Encapsulation", "Encoding", "Encrypted", "Encrypting", "Encryption", "End", "Endpoint", "Engineers", "Enhanced", "Enrollment", "Enterprise", "Entity", "Environment", "Ephemeral", "Equals", "Equivalent", "Evaluation", "Event", "Exception", "Exchange", "eXchange", "Exclusive", "Executable", "Execution", "Expectancy", "Exposures", "eXpression", "Extended", "Extensible", "Extensions",
		"Failure", "Failures", "False", "Feedback", "field", "Field", "File", "Firewall", "Firmware", "First", "for", "Forgery", "Forward", "Frame", "Framework", "Frequency", "Full", "Function",
		"Galois", "Gate", "Gateway", "General", "generation", "Generic", "Global", "GNU", "Go", "Good", "Granting", "Graphics", "Group", "Guard",
		"Handling", "Handshake", "Hard", "Hardware", "Hash", "Hashing", "Header", "Health", "Heating", "Hellman", "High", "HMAC", "Hole", "Host", "Humans", "Hypertext",
		"Identifiable", "Identification", "Identified", "Identifier", "Identity", "Impact", "in", "Incident", "Indicator", "Indicators", "Industrial", "Industry", "Inexpensive", "Information", "Infrastructure", "Initialization", "Initiation", "Injection", "Input", "Instant", "Institute", "Instruction", "Integrity", "Intelligence", "Interconnection", "Interface", "Intermediate", "Internal", "International", "Internet", "Intrusion", "Investment", "IP", "IT",
		"Key", "Keys", "Kit", "Knowledge",
		"Label", "LAN", "Language", "Layer", "Layout", "Learning", "length", "level", "Library", "Life", "Lightweight", "Line", "link", "List", "Local", "Locator", "Loss",
		"MAC", "Machine", "Mail", "Main", "Managed", "Management", "Manager", "Many", "Markup", "Masking", "Master", "Maximum", "Mean", "Measurement", "Media", "Memorandum", "Memory", "Message", "Messaging", "Methodology", "Metropolitan", "Microsoft", "Mobile", "Mode", "Module", "Modules", "Monitoring", "Multifactor", "Multifunction", "Multimedia", "Multiprotocol", "Multipurpose",
		"Name", "National", "Near", "Network", "Networking", "New", "Next", "NonDisclosure", "Number",
		"Object", "Objective", "Occurrence", "of", "Office", "Officer", "Old", "On", "on", "Once", "One", "Online", "Open", "Operating", "Operational", "Operations", "OR", "Orchestration", "Organization", "Output", "Over", "over", "Own", "owned",
		"Packet", "Pages", "Pair", "Pan", "Partnership", "Password", "Path", "Payload", "Payment", "Peer", "Perfect", "Persistent", "Personal", "Personally", "PKCS", "Plain", "Plan", "Planning", "Platform", "Pluggable", "Point", "Pointer", "Policy", "Port", "Portable", "Positioning", "Post", "Potentially", "Power", "Preshared", "Pretty", "Prevention", "Primitives", "Printer", "Privacy", "Private", "Privileged", "Procedures", "Processing", "Program", "Programmable", "Programming", "Project", "Proof", "Protected", "Protection", "Protocol", "Provider", "Proxy", "Public",
		"Quality",
		"Query",
		"RACE", "Radio", "Random", "Randomization", "Rapid", "Rate", "Read", "Real", "Record", "Recovery", "Redundancy", "Redundant", "Registration", "Regulation", "Rejection", "Relay", "Remote", "Remotely", "Repair", "Report", "Reporting", "Request", "Resolution", "Resource", "Response", "Return", "Revocation", "Rich", "Rivest", "Routing", "Rules",
		"Scoring", "Scripting", "Secrecy", "Secure", "Secured", "Security", "Segmentation", "Self", "Sender", "Serial", "Server", "Service", "Services", "Session", "Set", "Setup", "Shamir", "Sharing", "Shell", "Shielded", "Short", "Shortest", "Sign", "Signature", "Signing", "Simple", "Simultaneous", "Single", "site", "Site", "Sockets", "Software", "Solid", "source", "Space", "Spam", "SQL", "SSH", "Standard", "Standardization", "Standards", "State", "Status", "Storage", "Structured", "Subnet", "Subscriber", "Supervisory", "Supply", "Switching", "System", "Systems",
		"Tactics", "Team", "Techniques", "Technology", "Teleconferencing", "Telephone", "Television", "Tell", "Temporal", "Terminal", "Test", "Testing", "The", "Things", "Threat", "Ticket", "Tilt", "time", "Time", "to", "Training", "Transaction", "Transfer", "Translation", "Transmission", "Transport", "Triggered", "Triple", "Trojan", "Trusted", "Tunneling", "Turing", "Twisted",
		"Understanding", "Unified", "Uniform", "Uninterruptible", "Unit", "Universal", "Unshielded", "Unwanted", "USB", "Use", "User",
		"Variable", "Vector", "Ventilation", "Verification", "version", "Video", "Virtual", "Virtualization", "Visibility", "Visual", "Voice", "Vulnerabilities", "Vulnerability",
		"Web", "WiFi", "Wired", "Wireless", "Write",
		"Your",
		"Zoom"
	],

	init: function () {
		$("#userInput").on('input', function () {
			if (cards.promptType != 1) return; // Only suggest for word answers
			assist.offerSuggestion();
		});

		$('#suggestions').on('click', '.suggestion', function () {
			inpt = $("#userInput").val().split(' ');
			inpt[inpt.length - 1] = $(this).text();
			$("#userInput").val(inpt.join(" ") + " ");
			$("#suggestions").html("");
			$("#userInput").focus();
		});
	},

	offerSuggestion: function () {
		curWord = $("#userInput").val().split(" ");
		curWord = curWord[curWord.length - 1].toLowerCase();
		if (curWord == "") return;
		assist.displaySuggestions(assist.words.filter(w => w.toLowerCase().indexOf(curWord) == 0));
	},

	displaySuggestions: (suggestions) => {
		$("#suggestions").html("");
		for (i in suggestions) {
			$("#suggestions").append(`<div class='suggestion' idx='${i}'>${suggestions[i]}</div>`);
		}
	}
};