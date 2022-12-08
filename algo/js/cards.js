var cards = {
	list: [
		{ algo: "hashing", block: 512, size: [128], side1: "MD5" },
		{ algo: "hashing", block: 512, size: [160], side1: "SHA" },
		{ algo: "hashing", block: 512, size: [160], side1: "SHA-1" },
		{ algo: "hashing", block: 512, size: [256], side1: "SHA-2" },
		{ algo: "hashing", block: 512, size: [128, 160, 256, 320], side1: "RIPEMD" },
		{ algo: "hashing", block: 512, size: [128], side1: "HMAC" },
		{ algo: "encryption", block: 64, size: [56], symmetric: true, type: "block", side1: "DES" },
		{ algo: "encryption", block: 64, size: [112, 168], symmetric: true, type: "block", side1: "3DES", note: "3 rounds of encryption" },
		{ algo: "encryption", block: 64, size: [128], symmetric: true, type: "block", side1: "IDEA" },
		{ algo: "encryption", block: 64, size: [32, 448], symmetric: true, type: "block", side1: "Blowfish" },
		{ algo: "encryption", block: 128, size: [128, 192, 256], symmetric: true, type: "block", side1: "Twofish" },
		//{ algo: "encryption", block: 64, size: [80], symmetric: true, type: "block", side1: "Skipjack" },
		//{ algo: "encryption", block: 64, size: [128], symmetric: true, type: "block", side1: "RC2" },
		{ algo: "encryption", block: 1, size: [128], symmetric: true, type: "stream", side1: "RC4" },
		{ algo: "encryption", block: 128, size: [128, 192, 256], symmetric: true, type: "block", side1: "AES", note: "Current best" },
		//{ algo: "encryption", block: -1, size: [2048], symmetric: true, type: "block", side1: "RC5" },
		//{ algo: "encryption", block: -1, size: [], symmetric: true, type: "block", side1: "RC6" },
		{ algo: "encryption", size: [1024, 2048], symmetric: false, side1: "DH" },
		{ algo: "encryption", size: [1024, 4096], symmetric: false, side1: "RSA" },
		{ algo: "encryption", size: [256], symmetric: false, side1: "ECC", note: "Common for mobile / low computing" },
		{ algo: "encryption", size: [128, 512, 2048], symmetric: false, side1: "PGP" },
		//{ algo: "encryption", size: [], symmetric: false, side1: "DSA" },
	],

	curr: {},
	promptType: 0,
	idx: 0,

	getNext: function () {
		this.getRandom();
		$("#userInput").focus();
	},

	getRandom: function () {
		const num = this.list.length - 1;
		let rnd = batman(0, num);
		this.curr = this.list[rnd];

		$(".prompt").text(this.curr.side1);
	},

	checkAnswer: function () {
		let algo = $("#algoInput").val();
		let block = $("#blockInput").val();
		let key = $("#sizeInput").val();
		let type = $("#typeInput").val();
		let symmetric = $("#symmetricInput").val();

		if (this.curr.algo != algo) {
			main.alrt(`Incorrect algorithm.`);
			return false;
		}

		if (settings.options.askBlock) {
			if (this.curr.block && this.curr.block != block) {
				main.alrt(`Incorrect block size.`);
				return false;
			}
		}

		if (settings.options.askKey) {
			if (this.curr.size.filter(v => v == key).length < 1) {
				main.alrt(`Incorrect key size.`);
				return false;
			}
		}

		if (settings.options.askType) {
			if (this.curr.type && this.curr.type != type) {
				main.alrt(`Incorrect type.`);
				return false;
			}
		}

		if (settings.options.askSymmetric) {
			if (this.curr.symmetric && (this.curr.symmetric ? "1" : "0") != symmetric) {
				main.alrt(`Incorrect symmetry.`);
				return false;
			}
		}

		main.alrt(correctString(this.curr));
		return true;
	}
};

function correctString(obj) {
	msg = `${obj.side1} is a(n) `;
	if (obj.hasOwnProperty("symmetric"))
		msg += `${obj.symmetric ? "symmetric" : "asymmetric"} `;
	if (obj.type)
		msg += `${obj.type} `;
	msg += `${obj.algo} algorithm`;
	if (obj.size)
		msg += ` with key size(s) ${obj.size.join(', ')}`;
	if (obj.block)
		msg += ` and block size ${obj.block}`;

	return msg;
}

function batman(min, max) {
	return Math.floor(Math.random() * (max + 1)) + min;
}