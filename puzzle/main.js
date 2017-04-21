var main = {
	init: function(){
		this.load();
  },
  locations: {
    town: { name: "Ruklo Town", dir: { east: "riverB" }, text: "This is the town you started in.  There's nothing left to help you on our journey here." },
    riverT: { name: "Eddied Stream", dir: { south: "riverB" }, text: "As you walk up to the babbling waters of the river, you notice a bear in the distance.  Seemingly, it's decided to neglect your intrusion.  You probably could turn around without causing an issue." },
    riverB: { name: "Dark River", dir: { north: "riverT", south: "bridge", west: "town" }, text: "The breathtaking view of a wide river greets you, the sunlight sparkling off the water.  Some birds are singing nearby as you watch the fish swimming in the deep waters." },
    bridge: { name: "Highland Bridge", dir: { north: "riverB", east: "plains" }, text: "You walk up to a bridge that crosses the river.  As you begin to cross the bridge, a troll pops out.  \"19 55 73 91 121\", it says.  \"What are you talking about?\" you ask. \"19 55 73 91 121\", it repeats." },
    plains: { name: "Expansive Plain", dir: { north: "forestBL", west: "bridge", }, text: "BV NRQIMZOGU QA G QPBGGUF QABWUMF ECV QA. \"RW JA VT HIM GUD MMSZ, P UWC XWHPG, IZ CWGZCN TRLH, BVQ Q WO BUK AJLQRS.  CCG NCX ERXS BTY ZVF ZRYH JV GNSSM!\"  UK'G QWVTHJVT GH B 3 JL 3 MFJL, JOGQMEOBH BB NWNARRT \"UPR QSZ QF IZPKXCWTM...\"" },
    forestTL: { name: "Red Forest", dir: { south: "plains" }, text: "Forest 1" },
    forestTR: { name: "Rounded Wood", dir: {  }, text: "Forest 2" },
    forestBL: { name: "Inner Forest", dir: {  }, text: "Forest 3" },
    forestBR: { name: "Nice Cabin", dir: {  }, text: "Forest 4" },
    mountain: { name: "Grencidep Mountain", dir: {  }, text: "Mountain" },
  },
  current: "town",
  load: function(){
    this.current("town");
	  this.loadLocation();
  },
  loadLocation: function(){
    var key = $("#txeKey").val();
    $("#locName").text(this.locations[this.current].name);
    $("#locText").text( vigenere(this.locations[this.current].text, key) );
    
    $("#dirButtons button").hide();
    for(var direction in this.locations[this.current].dir){
      $("#"+direction+"Btn").show();
    }
  },
  move: function(direction){
    if(this.locations[this.current].dir[direction]==null)
      return false;
    this.current = this.locations[this.current].dir[direction];
    this.loadLocation();
  }
};

$(document).on("click","#dirButtons button", function(e){
	main.move($(this).attr("dir"));
});
