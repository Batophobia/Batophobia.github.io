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
    forestTL: { name: "Rounded Wood", dir: { south: "forestBL", east: "forestTR" }, text: "AMG CJHCKJF HJBS PX RZKHAHYGO WL P SZOMZEYHHM CZFIPSI ZI N UHQNPI GGLJ.  JTN NM OFPOGR WHX VSZ APTJ PZF.  ADR XVLMRH HY AZP N QPY CYY FPFX, \"TTBUI MTT TN E.\"" },
    forestTR: { name: "Inner Forest", dir: { south: "forestBR", west: "forestTL", east: "mountain" }, text: "KJGA DA IOJ KYIRG MTTPNG, NVZ UEPZQSJ WAJA P ZRCWG CDUI.  CY JYS DTOLI GTSQU JJH WLW PLHR XZ NOL VAS VKHPMF P ZJCE.  VF NVZ IPO HE AT NPVIT, ZMG VDASSD UFBTTZYU \"OJJC MTT TN Q.\"" },
    forestBL: { name: "Red Forest", dir: { south: "plains", north: "forestTL", east: "forestBR" }, text: "HY VSZ RCAWCYXR IV YJP ABGLXV, JJH PYJ OPO ON HS QWY ZPU BKEC N CHRGEVT IOFV CZNSZ JF.  PY UTSUHFGYN VKHPMF IOJ COQVRL, \"ZR QJE XZ Z.\"" },
    forestBR: { name: "Nice Cabin", dir: { north: "forestTR", west: "forestBL" }, text: "ZYWXWYXUL KYOB P ZRCWG PALFTTIT, NVZ PZOVRL F ELWVC.  AMG XVVAITZ CZNSZ T.E.  LIQ IOJTP DF P ZNIY JITY YJP YBDY YJLO ETHIU \"WZSI MTT TN Y.\"" },
    mountain: { name: "Grencidep Mountain", dir: { west: "forestTR" }, text: "CH IUZEE FG A UUPH DCV CFUTAHA UXTED FG SGGY DQNZPEU CAPCOLKREZPN.  AHMLGP, RWC BLGHA WKP NLCM, AJY 23 LRWEVO WSAEYM ZLEY L EVMTYL LQ PRNY.  UHW HOPEPID, WSOE FYIW EF CZHHL, ULH: 7 4 13 0 20 6 21 15 13 13 0 4 10 23 10 1 8 24 3 17 12 19 0" },
  },
  current: "town",
  load: function(){
    this.current="town";
	  this.loadLocation();
  },
  loadLocation: function(){
    var key = $("#txeKey").val();
    $("#locName").text(this.locations[this.current].name);
    $("#locText").text( vigenere(this.locations[this.current].text, $("#txtKey").val() ) );
    
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
