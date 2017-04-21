var main = {
	init: function(){
		this.load();
  },
  locations: {
    town: { name: "Ruklo Town", dir: { east: "riverB" }, text: "This is the town you started in.  There's nothing left to help you on our journey here." },
    riverT: { name: "Eddied Stream", dir: { south: "riverB" }, text: "River 1" },
    riverB: { name: "Dark River", dir: { north: "riverT", south: "bridge", west: "town" }, text: "River 2" },
    bridge: { name: "Highland Bridge", dir: { north: "riverB", east: "plains" }, text: "Bridge" },
    plains: { name: "Expansive Plain", dir: { north: "forestBL", west: "bridge", }, text: "Plains" },
    forestTL: { name: "Red Forest", dir: {  }, text: "Forest 1" },
    forestTR: { name: "Rounded Wood", dir: {  }, text: "Forest 2" },
    forestBL: { name: "Inner Forest", dir: {  }, text: "Forest 3" },
    forestBR: { name: "Nice Cottage", dir: {  }, text: "Forest 4" },
    mountain: { name: "Grencidep Mountain", dir: {  }, text: "Mountain" },
  },
  current: "town",
  load: function(){
	  this.current="town";
    this.loadLocation();
  },
  loadLocation: function(){
    var key = $("#txeKey").val();
    $("#locName").text(this.locations[this.current].name);
    $("#locText").text( vigenere(this.locations[this.current].text, key) );
  },
  move: function(locName){
    this.current = locName;
    this.loadLocation();
  }
};
