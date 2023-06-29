var main = {
	qrElement: "",
	qrText: "",
	genButton: "",
	saveButon: "",
	qrCode: "",
	hasUI: true,

	init: function () {
		this.qrElement = document.getElementById('qrCode');
		this.qrText = document.getElementById('qrText');
		this.genButton = document.getElementById('genCode');
		this.saveButon = document.getElementById('btnSave');
		this.hideButon = document.getElementById('btnHide');

		this.genButton.addEventListener('click', e => {
			main.genQR(e);
		});

		this.saveButon.addEventListener('click', e => {
			main.saveQR(e);
		});

		this.hideButon.addEventListener('click', e => {
			main.toggleUI(e);
		});
	},

	genQR: function (e) {
		this.qrElement.innerHTML = "";

		this.qrCode = new QRCode(this.qrElement, {
			text: this.qrText.value,
			width: 512,
			height: 512,
			colorDark: '#000',
			colorLight: '#fff',
			correctLevel: QRCode.CorrectLevel.H
		});

		this.saveButon.style.display = "inline-block";
	},

	saveQR: function (e) {
		const tmpElem = document.createElement('a');
		tmpElem.download = 'QR-Code.png';
		tmpElem.href = this.qrElement.querySelector('img').src;
		tmpElem.click();
		tmpElem.remove();
	},

	toggleUI: function (e) {
		Array.from(document.getElementsByClassName("ui")).forEach((elem) => elem.style.visibility = this.hasUI ? "hidden" : "");
		this.hideButon.innerText = this.hasUI ? ">>" : "<<";
		this.hasUI = !this.hasUI;
	}
};