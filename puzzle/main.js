var main = {
	init: function(){
		this.load();
  },
  locations: {
    town: { name: "Ruklo Town", dir: { east: "riverB" }, text: "THIS IS THE TOWN YOU STARTED IN.  THERE'S NOTHING LEFT TO HELP YOU ON OUR JOURNEY HERE." },
    riverT: { name: "Eddied Stream", dir: { south: "riverB" }, text: "AS YOU WALK UP TO THE BABBLING WATERS OF THE RIVER, YOU NOTICE A BEAR IN THE DISTANCE.  SEEMINGLY, IT'S DECIDED TO NEGLECT YOUR INTRUSION.  YOU PROBABLY COULD TURN AROUND WITHOUT CAUSING AN ISSUE." },
    riverB: { name: "Dark River", dir: { north: "riverT", south: "bridge", west: "town" }, text: "THE BREATHTAKING VIEW OF A WIDE RIVER GREETS YOU, THE SUNLIGHT SPARKLING OFF THE WATER.  SOME BIRDS ARE SINGING NEARBY AS YOU WATCH THE FISH SWIMMING IN THE DEEP WATERS." },
    bridge: { name: "Highland Bridge", dir: { north: "riverB", east: "plains" }, text: "YOU WALK UP TO A BRIDGE THAT CROSSES THE RIVER.  AS YOU BEGIN TO CROSS THE BRIDGE, A TROLL POPS OUT.  \"19 55 73 91 121\", IT SAYS.  \"WHAT ARE YOU TALKING ABOUT?\" YOU ASK. \"19 55 73 91 121\", IT REPEATS." },
    plains: { name: "Expansive Plain", dir: { north: "forestBL", west: "bridge", }, text: "BV NRQIMZOGU QA G QPBGGUF QABWUMF ECV QA. \"RW JA VT HIM GUD MMSZ, P UWC XWHPG, IZ CWGZCN TRLH, BVQ Q WO BUK AJLQRS. CCG NCX ERXS BTY ZVF ZRYH JV GNSSM!\" UK'G QWVTHJVT GH B 3 JL 3 MFJL, JOGQMEOBH BB NWNARRT \"UPR QSZ QF IZPKXCWTM, EOUIB QUKO...\"" },
    forestTL: { name: "Rounded Wood", dir: { south: "forestBL", east: "forestTR" }, text: "AMG CJHCKJF HJBS PX RZKHAHYGO WL P SZOMZEYHHM CZFIPSI ZI N UHQNPI GGLJ. JTN NM OFPOGR WHX VSZ APTJ PZF RCNWCGZQ XU NV. YJX HAFTPN NI FTW L WVI HSF DVLH, \"YNISO SDY NU C.\"" },
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
