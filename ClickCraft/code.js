/*
	Look into 1366x768 Adventure mode
	
	Hotkeys?
		I for Iron Ignot
		C for Coal
		etc.
*/
var cnm="clkcrtsvfl";
var timer=0, sec=0, hr=0;
var blnAdv;
var intAlrtCntr=0;

var blocks, items, villagers, unlk, advMap, plyr, mpseed, mapCmplt;

function setInitial(){
	blocks=[
		[   0,0,0,'Air'],
		[   1,0,0,'Stone'],
		[   2,0,0,'Grass'],
		[   3,0,0,'Dirt'],
		[   4,0,0,'Cobblestone'],
		[   5,0,0,'Planks'],
		[   6,0,0,'Sapling'],
		[   7,0,0,'Bedrock'],
		[   8,0,0,'Water'],
		[   9,0,0,'Water (Source)'],
		[  10,0,0,'Lava'],
		[  11,0,0,'Lava (Source)'],
		[  12,0,0,'Sand'],
		[  13,0,0,'Gravel'],
		[  14,0,0,'Gold Ore'],
		[  15,0,0,'Iron Ore'],
		[  16,0,0,'Coal Ore'],
		[  17,0,0,'Wood'],
		[  18,0,0,'Leaves'],
		[  19,0,0,'Sponge'],
		[  20,0,0,'Glass'],
		[  21,0,0,'Lapis Lazuli Ore'],
		[  22,0,0,'Lapis Lazuli Block'],
		[  23,0,0,'Dispenser'],
		[  24,0,0,'Sandstone'],
		[  25,0,0,'Note Block'],
		[  26,0,0,'Bed'],
		[  27,0,0,'Powered Rail'],
		[  28,0,0,'Detector Rail'],
		[  29,0,0,'Sticky Piston'],
		[  30,0,0,'Cobweb'],
		[  31,0,0,'Tall Grass'],
		[  32,0,0,'Brush'],
		[  33,0,0,'Piston'],
		[  34,0,0,'Piston Extension'],
		[  35,0,0,'Wool'],
		[  36,0,0,'Placeholder'],
		[  37,0,0,'Dandelion'],
		[  38,0,0,'Poppy'],
		[  39,0,0,'Brown Mushroom'],
		[  40,0,0,'Red Mushroom'],
		[  41,0,0,'Block of Gold'],
		[  42,0,0,'Block of Iron'],
		[  43,0,0,'Double Stone Slab'],
		[  44,0,0,'Stone Slab'],
		[  45,0,0,'Bricks'],
		[  46,0,0,'TNT'],
		[  47,0,0,'Bookshelf'],
		[  48,0,0,'Mossy Stone'],
		[  49,0,0,'Obsidian'],
		[  50,0,0,'Torch'],
		[  51,0,0,'Fire'],
		[  52,0,0,'Monster Spawner'],
		[  53,0,0,'Wood Stairs'],
		[  54,0,0,'Chest'],
		[  55,0,0,'Redstone Wire'],
		[  56,0,0,'Diamond Ore'],
		[  57,0,0,'Block of Diamond'],
		[  58,0,0,'Crafting Table'],
		[  59,0,0,'Wheat'],
		[  60,0,0,'Farmland'],
		[  61,0,0,'Furnace'],
		[  62,0,0,'Furnace2'],
		[  63,0,0,'Sign'],
		[  64,0,0,'Wood Door'],
		[  65,0,0,'Ladder'],
		[  66,0,0,'Rail'],
		[  67,0,0,'Cobblestone Stairs'],
		[  68,0,0,'Sign2'],
		[  69,0,0,'Lever'],
		[  70,0,0,'Stone Pressure Plate'],
		[  71,0,0,'Iron Door'],
		[  72,0,0,'Wood Pressure Plate'],
		[  73,0,0,'Redstone Ore'],
		[  74,0,0,'Redstone2'],
		[  75,0,0,'Redstone Torch'],
		[  76,0,0,'Redstone Torch2'],
		[  77,0,0,'Stone Button'],
		[  78,0,0,'Light Snow'],
		[  79,0,0,'Ice'],
		[  80,0,0,'Snow'],
		[  81,0,0,'Cactus'],
		[  82,0,0,'Clay'],
		[  83,0,0,'Sugar Cane'],
		[  84,0,0,'Jukebox'],
		[  85,0,0,'Fence'],
		[  86,0,0,'Pumpkin'],
		[  87,0,0,'Netherrack'],
		[  88,0,0,'Soul Sand'],
		[  89,0,0,'Glowstone'],
		[  90,0,0,'Nether Portal'],
		[  91,0,0,'Jack-o-Lantern'],
		[  92,0,0,'Cake']
	];
	
	items=[
		[ 256,0,0,'Iron Shovel'],
		[ 257,0,0,'Iron Pickaxe'],
		[ 258,0,0,'Iron Axe'],
		[ 259,0,0,'Flint and Steel'],
		[ 260,0,0,'Apple'],
		[ 261,0,0,'Bow'],
		[ 262,0,0,'Arrow'],
		[ 263,0,0,'Coal'],
		[ 264,0,0,'Diamond'],
		[ 265,0,0,'Iron Ingot'],
		[ 266,0,0,'Gold Ingot'],
		[ 267,0,0,'Iron Sword'],
		[ 268,0,0,'Wooden Sword'],
		[ 269,0,0,'Wooden Shovel'],
		[ 270,0,0,'Wooden Pickaxe'],
		[ 271,0,0,'Wooden Axe'],
		[ 272,0,0,'Stone Sword'],
		[ 273,0,0,'Stone Shovel'],
		[ 274,0,0,'Stone Pickaxe'],
		[ 275,0,0,'Stone Axe'],
		[ 276,0,0,'Diamond Sword'],
		[ 277,0,0,'Diamond Shovel'],
		[ 278,0,0,'Diamond Pickaxe'],
		[ 279,0,0,'Diamond Axe'],
		[ 280,0,0,'Stick'],
		[ 281,0,0,'Bowl'],
		[ 282,0,0,'Mushroom Stew'],
		[ 283,0,0,'Golden Sword'],
		[ 284,0,0,'Golden Shovel'],
		[ 285,0,0,'Golden Pickaxe'],
		[ 286,0,0,'Golden Axe'],
		[ 287,0,0,'String'],
		[ 288,0,0,'Feather'],
		[ 289,0,0,'Gunpowder'],
		[ 290,0,0,'Wooden Hoe'],
		[ 291,0,0,'Stone Hoe'],
		[ 292,0,0,'Iron Hoe'],
		[ 293,0,0,'Diamond Hoe'],
		[ 294,0,0,'Gold Hoe'],
		[ 295,0,0,'Seeds'],
		[ 296,0,0,'Wheat'],
		[ 297,0,0,'Bread'],
		[ 298,0,0,'Leather Cap'],
		[ 299,0,0,'Leather Tunic'],
		[ 300,0,0,'Leather Pants'],
		[ 301,0,0,'Leather Boots'],
		[ 302,0,0,'Chain Helmet'],
		[ 303,0,0,'Chain Chestplate'],
		[ 304,0,0,'Chain Leggings'],
		[ 305,0,0,'Chain Boots'],
		[ 306,0,0,'Iron Helmet'],
		[ 307,0,0,'Iron Chestplate'],
		[ 308,0,0,'Iron Leggings'],
		[ 309,0,0,'Iron Boots'],
		[ 310,0,0,'Diamond Helmet'],
		[ 311,0,0,'Diamond Chestplate'],
		[ 312,0,0,'Diamond Leggings'],
		[ 313,0,0,'Diamond Boots'],
		[ 314,0,0,'Golden Helmet'],
		[ 315,0,0,'Golden Chestplate'],
		[ 316,0,0,'Golden Leggings'],
		[ 317,0,0,'Golden Boots'],
		[ 318,0,0,'Flint'],
		[ 319,0,0,'Raw Porkchop'],
		[ 320,0,0,'Cooked Porkchop'],
		[ 321,0,0,'Painting'],
		[ 322,0,0,'Golden Apple'],
		[ 323,0,0,'Sign'],
		[ 324,0,0,'Wooden Door'],
		[ 325,0,0,'Bucket'],
		[ 326,0,0,'Water Bucket'],
		[ 327,0,0,'Lava Bucket'],
		[ 328,0,0,'Minecart'],
		[ 329,0,0,'Saddle'],
		[ 330,0,0,'Iron Door'],
		[ 331,0,0,'Redstone'],
		[ 332,0,0,'Snowball'],
		[ 333,0,0,'Boat'],
		[ 334,0,0,'Leather'],
		[ 335,0,0,'Milk'],
		[ 336,0,0,'Brick'],
		[ 337,0,0,'Clay'],
		[ 338,0,0,'Sugar Cane'],
		[ 339,0,0,'Paper'],
		[ 340,0,0,'Book'],
		[ 341,0,0,'Slimeball'],
		[ 342,0,0,'Minecart with Chest'],
		[ 343,0,0,'Minecart with Furnace'],
		[ 344,0,0,'Egg'],
		[ 345,0,0,'Compass'],
		[ 346,0,0,'Fishing Rod'],
		[ 347,0,0,'Clock'],
		[ 348,0,0,'Glowstone Dust'],
		[ 349,0,0,'Raw Fish'],
		[ 350,0,0,'Cooked Fish'],
		[ 351,0,0,'Dye'],
		[ 352,0,0,'Bone'],
		[ 353,0,0,'Sugar']
];

unlk = [
	false,
	false,
	false,
	false
];

blnAdv=false;
advMap=[];
for(var j=0;j<50;j++){
	advMap[j]=[];
	for(var i=0;i<99;i++)
		advMap[j][i]=false;
}
plyr=[];
plyr.x=-1;
plyr.y=-1;
plyr.hp=20;

villagers = [ ];

mapCmplt = [ ];
}

function load(){
	setInitial();
	
	var svdata=getSave();
	mpseed=parseInt(getSeed());
	if(isNaN(mpseed))
		mpseed="";
	
	if(svdata!=undefined){
		var intAdd=0;
		svdata=svdata.split("_");
		
		for(i=0;i<unlk.length;i++){
			if(svdata[i]=="true")
				unlk[i]=true;
			
			if(i==2&&unlk[i]){
				$("#hirVil").show();
				$("#vils").html('<div style="text-align:center">--Villagers--</div>');
			}else if(i==3&&unlk[i]){
				$("#btnAdvnt").show();
			}
		}
		intAdd+=unlk.length;
		for(i=0;i<blocks.length;i++){
			blocks[i][1]=parseInt(svdata[i+intAdd].split("^")[0]);
			blocks[i][2]=parseInt(svdata[i+intAdd].split("^")[1]);
			
			if(blocks[i][2]>0){
				$("#inv"+i).html(blocks[i][3]+": "+blocks[i][1]);
				switch(i){
					case 5:
						if(blocks[i][2]>3)
							$("#mkTbl").show();
						break;
					case 17:
						if(blocks[i][2]>9)
							$("#get5").show();
						break;
					case 58:
						if(blocks[i][2]>0){
							$("#btnCrft").show();
							$("#get5").text("Make Planks");
						}
						break;
					case 61:
						if(blocks[i][2]>0)
							$("#btnFrn").show();
						break;
				}
			}
		}
		intAdd+=blocks.length;
		for(i=0;i<items.length;i++){
			items[i][1]=parseInt(svdata[i+intAdd].split("^")[0]);
			items[i][2]=parseInt(svdata[i+intAdd].split("^")[1]);
			
			if(items[i][2]>0){
				$("#inv"+(i+256)).html(items[i][3]+": "+items[i][1]);
			}
		}
		intAdd+=items.length;
		for(i=intAdd;i<svdata.length;i++){
			villagers.push([svdata[i].split("^")[0],parseInt(svdata[i].split("^")[1])]);
			$("#vils").append("<div id='vil"+(villagers.length-1)+"' onclick='assignJob("+(villagers.length-1)+")'>"+villagers[villagers.length-1][0]+"</div>");
		}
		
		$("#hirVil").html("Explore Village (x"+(40*Math.pow(2,villagers.length))+" Apple)");
	}
}

function getSave(){
	var i,x,y,arrCookies=document.cookie.split(";");
	for (i=0;i<arrCookies.length;i++)
	{
		x=arrCookies[i].substr(0,arrCookies[i].indexOf("="));
		y=arrCookies[i].substr(arrCookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");

		if (x==cnm){
			return unescape(y);
		}
	}
}

function setCookie(value){
	var exdays=365*4;
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=cnm + "=" + c_value;
}

function save(){
	var strSave="";
	for(i=0;i<unlk.length;i++){
		strSave=strSave+"_"+unlk[i];
	}
	for(i=0;i<blocks.length;i++){
		strSave=strSave+"_"+blocks[i][1]+"^"+blocks[i][2];
	}
	for(i=0;i<items.length;i++){
		strSave=strSave+"_"+items[i][1]+"^"+items[i][2];
	}
	for(i=0;i<villagers.length;i++){
		strSave=strSave+"_"+villagers[i][0]+"^"+villagers[i][1];
	}
	
	if(mpseed!=""){
		var exdays=365*4;
		var exdate=new Date();
		exdate.setDate(exdate.getDate() + exdays);
		
		var value="";
		for(i=0;i<advMap[0].length;i++){
			for(j=0;j<advMap.length;j+=5){
				var tmp=0;
				if(advMap[j][i])
					tmp+=1
				if(advMap[j+1][i])
					tmp+=2
				if(advMap[j+2][i])
					tmp+=4
				if(advMap[j+3][i])
					tmp+=8
				if(advMap[j+4][i])
					tmp+=16
				value=value+"_"+tmp;
			}
		}
		value=mpseed+value;
		var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
		document.cookie="clkcftmap=" + c_value;
	}
	
	strSave=strSave.substring(1);
	setCookie(strSave);
	alert("Game Saved");
}
var saveTimer=setInterval("save()",1000*30);

var tabl=[
	[0,0,0],
	[0,0,0],
	[0,0,0]
];

var frn=[0,0,0,0,0,0,0];

function alert(input){
	var strId="alert"+intAlrtCntr;
	$("#alertBox").append("<div id='"+strId+"'>"+input+"</div>");
	setTimeout(function() { $("#"+strId).fadeOut(1000, function(){ $(this).remove();}); },2000);
	intAlrtCntr++;
}

function ticker(){
	timer+=1;
	sec+=1;
	if(sec==60){
		hr+=1;
		sec=0;
	}
	
	var txtSuf="PM";
	if(hr<12)
		txtSuf="AM";
	if(hr==24)
		hr=0;
	
	var secPad="";
	if(sec<10)
		secPad="0";
	var txtHr=hr;
	if(hr==0)
		txtHr="12";
	if(txtHr>12)
		txtHr-=12;
	
	$(".clock").text(txtHr+":"+secPad+sec+" "+txtSuf);
	
	if(items[14][1]>0)
		mine(1,items[14][1]);
	if(items[15][1]>0)
		chop(1,items[15][1]);
	if(items[34][1]>0)
		farm(1,items[34][1]);
	if(items[13][1]>0)
		dig(1,items[13][1]);
	if(items[12][1]>0)
		fight(1,items[12][1]);

	if(items[18][1]>0)
		mine(2,items[18][1]);
	if(items[19][1]>0)
		chop(2,items[19][1]);
	if(items[34][1]>0)
		farm(2,items[34][1]);
	if(items[17][1]>0)
		dig(2,items[17][1]);
	if(items[16][1]>0)
		fight(2,items[16][1]);

	if(items[1][1]>0)
		mine(3,items[1][1]);
	if(items[2][1]>0)
		chop(3,items[2][1]);
	if(items[36][1]>0)
		farm(3,items[36][1]);
	if(items[0][1]>0)
		dig(3,items[0][1]);
	if(items[11][1]>0)
		fight(3,items[11][1]);

	if(items[29][1]>0)
		mine(4,items[29][1]);
	if(items[30][1]>0)
		chop(4,items[30][1]);
	if(items[38][1]>0)
		farm(4,items[38][1]);
	if(items[28][1]>0)
		dig(4,items[28][1]);
	if(items[27][1]>0)
		fight(4,items[27][1]);

	if(items[22][1]>0)
		mine(5,items[22][1]);
	if(items[23][1]>0)
		chop(5,items[23][1]);
	if(items[37][1]>0)
		farm(5,items[37][1]);
	if(items[21][1]>0)
		dig(5,items[21][1]);
	if(items[20][1]>0)
		fight(5,items[20][1]);
	
	fish();
	
	if(villagers.length>0)
		vilDo();
	
	smelting();
	
	if(items[4][2]>=40 && unlk[2]==false){
		unlock(3);
	}
}

function vilDo(){
	for(i=0;i<villagers.length;i++){
		var rndm=batman(0,100);
		switch(villagers[i][1]%10){
			case 0:
				if(rndm<50){
					makes(352,(villagers[i][1]));
				}else if(rndm<60){
					makes(287,(villagers[i][1]));
				}else if(rndm<70){
					makes(262,(villagers[i][1]));
				}else if(rndm<71){
					makes(289,(villagers[i][1]));
				}
				break;
			case 1:
				if(rndm<Math.floor(villagers[i][1]/10)){
					rndm=batman(0,100)
					if(rndm<5){
						makes(340,batman(0,1));
					}else if(rndm<10){
						makes(321,batman(0,1));
					}else if(rndm<12){
						makes(48,batman(0,1));
					}else if(rndm<14){
						makes(329,batman(0,1));
					}else if(rndm<16){
						makes(347,batman(0,1));
					}
				}
				break;
			case 2:
				if(rndm<50){
					if(blocks[4][1]>100+(villagers[i][1]-2)){
						blocks[4][1]-=(villagers[i][1]-2);
						makes(1,(villagers[i][1]-2));
					}
				}else if(rndm<75){
					if(blocks[15][1]>(villagers[i][1]-2)){
						blocks[15][1]-=(villagers[i][1]-2);
						makes(265,(villagers[i][1]-2));
					}
				}else if(rndm<90){
					if(blocks[14][1]>(villagers[i][1]-2)){
						blocks[14][1]-=(villagers[i][1]-2);
						makes(266, (villagers[i][1]-2));
					}
				}
				break;
			case 3:
				if(rndm<70){
					if(blocks[17][1]>100+(villagers[i][1]-3)){
						blocks[17][1]-=(villagers[i][1]-3);
						makes(5,(villagers[i][1]-3));
					}
				}else if(rndm<95){
					if(blocks[5][1]>100+(villagers[i][1]-3)){
						blocks[5][1]-=(villagers[i][1]-3);
						makes(280, (villagers[i][1]-3));
					}
				}else if(rndm<98){
					if((items[24][1]>800+(villagers[i][1]-3))&&(items[7][1]>100+(villagers[i][1]-3))){
						items[24][1]-=(villagers[i][1]-3);
						items[7][1]-=(villagers[i][1]-3);
						makes(50, (villagers[i][1]-3));
					}
				}else if(rndm<100){
					if(blocks[5][1]>100+(villagers[i][1]-3)){
						blocks[5][1]-=(villagers[i][1]-3);
						makes(281, (villagers[i][1]-3));
					}
				}
				break;
			case 4:
				if(rndm<25){
					if(items[40][1]>100+(villagers[i][1]-4)){
						items[40][1]-=(villagers[i][1]-4);
						makes(297,(villagers[i][1]-4));
					}
				}else if(rndm<50){
					if(items[82][1]>100+(villagers[i][1]-4)){
						items[82][1]-=(villagers[i][1]-4);
						makes(353,(villagers[i][1]-4));
					}
				}else if(rndm<70){
					if(items[63][1]>100+(villagers[i][1]-4)){
						items[63][1]-=(villagers[i][1]-4);
						makes(320, (villagers[i][1]-4));
					}
				}else if(rndm<90){
					if(items[93][1]>100+(villagers[i][1]-4)){
						items[93][1]-=(villagers[i][1]-4);
						makes(350, (villagers[i][1]-4));
					}
				}else if(rndm<91){
					if(blocks[39][1]>20+(villagers[i][1]-4)&&blocks[40][1]>20+(villagers[i][1]-4)){
						if(items[25][1]>20+(villagers[i][1]-4)){
							items[25][1]-=(villagers[i][1]-4);
							blocks[39][1]-=(villagers[i][1]-4);
							blocks[40][1]-=(villagers[i][1]-4);
							makes(282, (villagers[i][1]-4));
						}
					}
				}else{
					makes(344, (villagers[i][1]-4));
				}
				break;
		}
		invRefresh();
	}
}

function invRefresh(){
	for(var i=0;i<blocks.length;i++){
		if(blocks[i][2]>0)
			$("#inv"+i).html(blocks[i][3]+": "+blocks[i][1]);
	}
	
	for(var i=0;i<items.length;i++){
		if(items[i][2]>0)
			$("#inv"+(i+256)).html(items[i][3]+": "+items[i][1]);
	}
}

var prevAdd=0;
function addTo(input){
	if(input<256){
		if(blocks[input][1]>9 && $("#img"+input).html()!=""){
			$("#inv"+prevAdd).css("background-color","")
			$("#inv"+input).css("background-color","#999999")
			prevAdd=input;
		}
	}else{
		if(items[input-256][1]>9){
			$("#inv"+prevAdd).css("background-color","")
			$("#inv"+input).css("background-color","#999999")
			prevAdd=input;
		}
	}
}

function addIn(input){
	var col, row;
	row=input.split("_")[0]-1;
	col=input.split("_")[1]-1;
	
	if($("#"+input).html()==""){
		if(prevAdd!=0 && $("#img"+prevAdd).html()!=""){
			var img=$("#img"+prevAdd).html();
			$("#"+input).html(img);
			
			if(isNaN(col)){
				if(input=="in")
					frn[0]=prevAdd;
				else if(input=="fuel")
					frn[1]=prevAdd;
			}else
				tabl[row][col]=prevAdd;
			if(prevAdd<256){
				blocks[prevAdd][1]-=10;
				$("#inv"+prevAdd).html(blocks[prevAdd][3]+": "+blocks[prevAdd][1]);
				
				if(blocks[prevAdd][1]<10){
					$("#inv"+prevAdd).css("background-color","")
					prevAdd=0;
				}
			}else{
				var itemID=prevAdd-256;
				items[itemID][1]-=10;
				$("#inv"+prevAdd).html(items[itemID][3]+": "+items[itemID][1]);
				
				if(items[itemID][1]<10){
					$("#inv"+prevAdd).css("background-color","")
					prevAdd=0;
				}
			}
		}
	}else{
		$("#"+input).html("");
		
		if(isNaN(col)){
			if(input=="in")
				row=0;
			else if(input=="fuel")
				row=1;
				
			if(frn[row]<256){		
				blocks[frn[row]][1]+=10;
				$("#inv"+frn[row]).html(blocks[frn[row]][3]+": "+blocks[frn[row]][1]);
			}else{
				frn[row]-=256;
				items[frn[row]][1]+=10;
				$("#inv"+(frn[row]+256)).html(items[frn[row]][3]+": "+items[frn[row]][1]);
			}
			frn[row]=0;
		}else{
			if(tabl[row][col]<256){		
				blocks[tabl[row][col]][1]+=10;
				$("#inv"+tabl[row][col]).html(blocks[tabl[row][col]][3]+": "+blocks[tabl[row][col]][1]);
			}else{
				tabl[row][col]-=256;
				items[tabl[row][col]][1]+=10;
				$("#inv"+(tabl[row][col]+256)).html(items[tabl[row][col]][3]+": "+items[tabl[row][col]][1]);
			}
			tabl[row][col]=0;
		}
	}
}

function assignJob(input){
	var newJob=0;
	switch(prevAdd){
		case 268:
			newJob=10;
			break;
		case 269:
			newJob=11;
			break;
		case 270:
			newJob=12;
			break;
		case 271:
			newJob=13;
			break;
		case 290:
			newJob=14;
			break;
			
		case 272:
			newJob=20;
			break;
		case 273:
			newJob=21;
			break;
		case 274:
			newJob=22;
			break;
		case 275:
			newJob=23;
			break;
		case 291:
			newJob=24;
			break;
			
		case 267:
			newJob=30;
			break;
		case 256:
			newJob=31;
			break;
		case 257:
			newJob=32;
			break;
		case 258:
			newJob=33;
			break;
		case 292:
			newJob=34;
			break;
			
		case 283:
			newJob=40;
			break;
		case 284:
			newJob=41;
			break;
		case 285:
			newJob=42;
			break;
		case 286:
			newJob=43;
			break;
		case 294:
			newJob=44;
			break;
			
		case 276:
			newJob=50;
			break;
		case 277:
			newJob=51;
			break;
		case 278:
			newJob=52;
			break;
		case 279:
			newJob=53;
			break;
		case 293:
			newJob=54;
			break;
	}
	
	if(newJob!=0){
		var curName=villagers[input][0];
		if(curName.indexOf(" ")>0)
			curName=curName.split(" ")[2];
		villagers[input][1]=newJob;
		
		switch(newJob%10){
			case 0:
				villagers[input][0]="Fighter "+curName;
				break;
			case 1:
				villagers[input][0]="Explorer "+curName;
				break;
			case 2:
				villagers[input][0]="Blacksmith "+curName;
				break;
			case 3:
				villagers[input][0]="Builder "+curName;
				break;
			case 4:
				villagers[input][0]="Chef "+curName;
				break;
		}
		
		if(newJob<20)
			villagers[input][0]="Newbie "+villagers[input][0];
		else if(newJob<30)
			villagers[input][0]="Apprentice "+villagers[input][0];
		else if(newJob<40)
			villagers[input][0]="Experienced "+villagers[input][0];
		else if(newJob<50)
			villagers[input][0]="Master "+villagers[input][0];
		else if(newJob<60)
			villagers[input][0]="Supreme "+villagers[input][0];
		else
			villagers[input][0]="Cheating "+villagers[input][0];
		
		$("#vil"+input).text(villagers[input][0])
		
		items[prevAdd-256][1]-=10;
		
		$("#inv"+prevAdd).html(items[prevAdd-256][3]+": "+items[prevAdd-256][1]);
		if(items[prevAdd-256][1]<10){
			$("#inv"+prevAdd).css("background-color","")
			prevAdd=0;
		}
	}
}

function fish(){
	if(items[90][1]>0){
		if(batman(0,100)>90){
			makes(349,batman(0,1));
		}
	}
}

function farm(input, num){
  if(items[39][1]>input){
	switch(input){
		case 5:
			if(batman(0,100)>70-(num/2)){
				items[39][1]-=1;
				makes(296,batman(1,1 * num));
			}
			if(items[69][1]>0 && batman(0,100)>(95-num))
				makes(335,batman(0,1 * num));
		case 4:
			if(batman(0,100)>75-(num/2)){
				items[39][1]-=1;
				makes(296,batman(1,1 * num));
			}
			if(items[69][1]>0 && batman(0,100)>(98-num/2))
				makes(335,batman(0,1 * (num/3)));
		case 3:
			if(batman(0,100)>80-(num/2)){
				items[39][1]-=1;
				makes(296,batman(1,1 * num));
			}
			if(items[69][1]>0 && batman(0,100)>(99-num/4))
				makes(335,batman(0,1 * (num/5)));
		case 2:
			if(batman(0,100)>85-(num/2)){
				items[39][1]-=1;
				makes(296,batman(1,1 * num));
			}
			if(batman(0,100)>85-(num/2))
				makes(39,batman(0,1 * num));
			if(batman(0,100)>85-(num/2))
				makes(40,batman(0,1 * num));
		default:
			if(batman(0,100)>90-(num/2)){
				items[39][1]-=1;
				makes(296,batman(0,1 * num));
			}
			if(batman(0,100)>85-(num/2))
				makes(37,batman(0,1 * num));
			if(batman(0,100)>85-(num/2))
				makes(38,batman(0,1 * num));
			break;
	}
  }
}

function fight(input, num){
	switch(input){
		case 5:
			if(batman(0,100)>90-(num/2))
				makes(262,batman(0,1 * num));
			if(batman(0,100)>95-(num/2))
				makes(289,batman(0,1 * num));
		case 4:
			if(batman(0,100)>75-(num/2))
				makes(287,batman(0,1 * num));
		case 3:
			if(batman(0,100)>90-(num/2))
				makes(288,batman(0,1 * num));
			if(batman(0,100)>75-(num/2))
				makes(341,batman(0,1 * num));
		case 2:
			if(batman(0,100)>80-(num/2))
				makes(334,batman(0,1 * num));
			if(batman(0,100)>95-(num/2))
				makes(35,batman(0,1 * num));
		default:
			if(batman(0,100)>75-(num/2))
				makes(319,batman(0,1 * num));
			if(batman(0,100)>95-(num/2))
				makes(352,batman(0,1 * num));
			break;
	}
}

function dig(input, num){
	switch(input){
		case 5:
			makes(88,batman(1,2) * num);
			if(batman(0,100)>95-(num/2))
				makes(19,batman(0,1 * num));
		case 4:
			makes(24,batman(1,2) * num);
			if(batman(0,100)>75-(num/2))
				makes(337,batman(0,1 * num));
		case 3:
			makes(13,batman(1,2) * num);
			if(batman(0,100)>80-(num/2))
				makes(318,batman(0,1 * num));
		case 2:
			makes(12,batman(1,2) * num);
			if(batman(0,100)>75-(num/2))
				makes(332,batman(0,1 * num));
		default:
			makes(3,batman(1,2) * num);
			if(batman(0,100)>75-(num/2))
				makes(295,batman(0,1 * num));
			break;
	}
}

function chop(input, num){
	switch(input){
		case 5:
			makes(5,batman(1,2) * num);
			if(batman(0,100)>80-(num/2))
				makes(260,batman(1,1 * num));
		case 4:
			makes(5,batman(1,2) * num);
			if(batman(0,100)>90-(num/2))
				makes(6,batman(0,1 * num));
		case 3:
			makes(5,batman(1,2) * num);
			if(batman(0,100)>90-(num/2))
				makes(81,batman(0,1 * num));
		case 2:
			makes(17,batman(2,3) * num);
			if(batman(0,100)>90-(num/2))
				makes(338,batman(0,1 * num));
		default:
			makes(17,batman(0,1) * num);
			if(batman(0,100)>90-(num/2))
				makes(260,batman(0,1 * num));
			break;
	}
}

function mine(input, num){
	switch(input){
		case 5:
			makes(4,batman(2,3)*num);
			if(batman(0,100)>95-(num/2))
				makes(49,batman(0,1 * num));
			if(batman(0,100)>80-(num/2))
				makes(331,batman(0,1 * num));
		case 4:
			makes(4,batman(2,3)*num);
			if(batman(0,100)>98-(num/2))
				makes(264,batman(0,1 * num));
			if(batman(0,100)>90-(num/2))
				makes(331,batman(0,1 * num));
		case 3:
			makes(4,batman(2,3)*num);
			if(batman(0,100)>95-(num/2))
				makes(14,batman(0,1 * num));
			if(batman(0,100)>99-(num/2))
				makes(331,batman(0,1 * num));
		case 2:
			makes(4,batman(2,3)*num);
			if(batman(0,100)>90-(num/2))
				makes(15,batman(0,1 * num));
		default:
			makes(4,batman(0,1)*num);
			if(batman(0,100)>75-(num/2))
				makes(263,batman(0,1 * num));
			break;
	}
}

function batman(min, max){
	return Math.floor(Math.random() * (max+1)) + min;
}

function unlock(input){
	switch(input){
		case 1:
			if(blocks[5][1]>=4){
				blocks[5][1]-=4;
				$("#inv5").html("Planks: "+blocks[5][1]);
				make(58);
				$("#btnCrft").show();
				$("#get5").text("Make Planks");
				unlk[0]=true;
			}
			break;
		case 2:
			make(61);
			$("#btnFrn").show();
			unlk[1]=true;
			break;
		case 3:
			if(items[4][1]>=40){
				$("#hirVil").show();
				$("#vils").html('<div style="text-align:center">--Villagers--</div>');
				unlk[2]=true;
			}
			break;
		case 4:
		  if(!unlk[3]){
			if(items[11][1]>0){
				$("#btnAdvnt").show();
				unlk[3]=true;
			}else if(items[12][1]>0){
				$("#btnAdvnt").show();
				unlk[3]=true;
			}else if(items[16][1]>0){
				$("#btnAdvnt").show();
				unlk[3]=true;
			}else if(items[20][1]>0){
				$("#btnAdvnt").show();
				unlk[3]=true;
			}else if(items[27][1]>0){
				$("#btnAdvnt").show();
				unlk[3]=true;
			}
		  }
			break;
	}
}

function rndNam(){
	var output="";
	var vowl=["a","e","i","o","u"];
	var cons=["b","ch","d","f","g","h","k","l","m","n","p","r","s","sh","t","v","z"];
	
	var numLets=batman(3,5);
	for(i=0;i<=numLets;i++){
		if(i%2==0)
			output=output+cons[batman(0,16)];
		else
			output=output+vowl[batman(0,4)];
	}
	
	return output.charAt(0).toUpperCase() + output.slice(1);;
}

function addVil(){
	if(items[4][1]<40*Math.pow(2,villagers.length))
		alert("Not enough apples");
	else{
		items[4][1]-=40*Math.pow(2,villagers.length);
		$("#inv260").html("Apple: "+items[4][1]);
		
		var occ=0;
		villagers.push([rndNam(),occ]);
		
		$("#vils").append("<div id='vil"+(villagers.length-1)+"' onclick='assignJob("+(villagers.length-1)+")'>"+villagers[villagers.length-1][0]+"</div>");
		$("#hirVil").html("Explore Village (x"+(40*Math.pow(2,villagers.length))+" Apple)");
		alert("Recruited "+villagers[villagers.length-1][0]);
	}
}

function smelt(){
	var itm=0;
	
  if(frn[5]==0){
	
	if(frn[0]==0 || (frn[1]==0 && frn[3]==0)){
		alert("Invalid setup");
	}else{
		if(frn[2]==0){
			if(frn[3]==0){
				switch(frn[1]){
					case 5:
					case 17:
					case 25:
					case 47:
					case 53:
					case 54:
					case 58:
					case 72:
					case 84:
					case 85:
						frn[3]=2;
						frn[4]=2;
						break;
					case 6:
					case 268:
					case 269:
					case 270:
					case 271:
					case 280:
					case 290:
						frn[3]=1;
						frn[4]=1;
						break;
					case 263:
						frn[3]=8;
						frn[4]=8;
						break;
					case 327:
						frn[3]=100;
						frn[4]=100;
						break;
					default:
						alert("Invalid Fuel Source");
						break;
				}
			}
		
			if(frn[3]!=0){
				switch(frn[0]){
					case 4:
						itm=1;
						break;
					case 12:
						itm=20;
						break;
					case 14:
						itm=266;
						break;
					case 15:
						itm=265;
						break;
					case 319:
						itm=320;
						break;
					case 337:
						itm=336;
						break;
					case 349:
						itm=350;
						break;
				}
				
				if(itm==0)
					alert("Invalid item");
				else{
					frn[3]-=1;
					frn[2]=itm;
					$("#fuelPer").css("height",Math.floor((frn[3]/frn[4])*100)+"%");
					$("#frnPer").css("width","100%");
					frn[0]=0;
					$("#in").html("");
					
					if(frn[3]==frn[4]-1){
						$("#fuel").html("");
						frn[1]=0;
					}
					
					frn[5]=10;
					frn[6]=10;
				}
			}
		}
	}
  }
}

function smelting(){
	if(frn[5]!=0){
		frn[5]-=1;
		$("#frnPer").css("width",Math.floor((frn[5]/frn[6])*100)+"%");
		if(frn[5]==0){
			frn[6]=0;
			make(frn[2]);
			frn[2]=0;
			alert("Smelting Complete");
		}
	}
}

function craft(){
	var itm=0;
	
	if(check([[5,5,5],[0,280,0],[0,280,0]])){
		itm=270;
	}
	else if(check([[5,5,0],[5,280,0],[0,280,0]])){
		itm=271;
	}
	else if(check([[5,5,0],[0,280,0],[0,280,0]])){
		itm=290;
	}
	else if(check([[0,5,0],[0,280,0],[0,280,0]])){
		itm=269;
	}
	else if(check([[0,5,0],[0,5,0],[0,280,0]])){
		itm=268;
	}
	else if(check([[0,4,0],[0,4,0],[0,280,0]])){
		itm=272;
	}
	else if(check([[0,4,0],[0,280,0],[0,280,0]])){
		itm=273;
	}
	else if(check([[4,4,4],[0,280,0],[0,280,0]])){
		itm=274;
	}
	else if(check([[4,4,0],[4,280,0],[0,280,0]])){
		itm=275;
	}
	else if(check([[265,265,0],[0,280,0],[0,280,0]])){
		itm=292;
	}
	else if(check([[0,265,0],[0,265,0],[0,280,0]])){
		itm=267;
	}
	else if(check([[0,265,0],[0,280,0],[0,280,0]])){
		itm=256;
	}
	else if(check([[265,265,265],[0,280,0],[0,280,0]])){
		itm=257;
	}
	else if(check([[265,265,0],[265,280,0],[0,280,0]])){
		itm=258;
	}
	else if(check([[266,266,0],[0,280,0],[0,280,0]])){
		itm=294;
	}
	else if(check([[0,266,0],[0,280,0],[0,280,0]])){
		itm=284;
	}
	else if(check([[0,266,0],[0,266,0],[0,280,0]])){
		itm=283;
	}
	else if(check([[266,266,266],[0,280,0],[0,280,0]])){
		itm=285;
	}
	else if(check([[266,266,0],[266,280,0],[0,280,0]])){
		itm=286;
	}
	else if(check([[264,264,0],[0,280,0],[0,280,0]])){
		itm=293;
	}
	else if(check([[0,264,0],[0,280,0],[0,280,0]])){
		itm=277;
	}
	else if(check([[0,264,0],[0,264,0],[0,280,0]])){
		itm=276;
	}
	else if(check([[264,264,264],[0,280,0],[0,280,0]])){
		itm=278;
	}
	else if(check([[264,264,0],[264,280,0],[0,280,0]])){
		itm=279;
	}
	else if(check([[4,4,0],[0,280,0],[0,280,0]])){
		itm=291;
	}
	else if(check([[4,4,4],[4,0,4],[4,4,4]])){
		unlock(2);
		resetCraft();
	}
	else if(check([[287,280,0],[287,0,280],[287,280,0]])){
		itm=261;
	}
	else if(check([[280,0,280],[280,280,280],[280,0,280]])){
		itm=65;
	}
	else if(check([[5,0,0],[5,0,0],[0,0,0]])){
		itm=280;
	}
	else if(check([[0,0,0],[5,0,0],[5,0,0]])){
		itm=280;
	}
	else if(check([[0,5,0],[0,5,0],[0,0,0]])){
		itm=280;
	}
	else if(check([[0,0,0],[0,5,0],[0,5,0]])){
		itm=280;
	}
	else if(check([[0,0,5],[0,0,5],[0,0,0]])){
		itm=280;
	}
	else if(check([[0,0,0],[0,0,5],[0,0,5]])){
		itm=280;
	}
	else if(check([[0,0,0],[35,35,35],[5,5,5]])){
		itm=26;
	}
	else if(check([[35,35,35],[5,5,5],[0,0,0]])){
		itm=26;
	}
	else if(check([[265,0,265],[265,280,265],[265,0,265]])){
		itm=66;
	}
	else if(check([[0,0,0],[334,334,334],[334,0,334]])){
		itm=298;
	}
	else if(check([[334,334,334],[334,0,334],[0,0,0]])){
		itm=298;
	}
	else if(check([[334,0,334],[334,334,334],[334,334,334]])){
		itm=299;
	}
	else if(check([[334,334,334],[334,0,334],[334,0,334]])){
		itm=300;
	}
	else if(check([[0,0,0],[334,0,334],[334,0,334]])){
		itm=301;
	}
	else if(check([[334,0,334],[334,0,334],[0,0,0]])){
		itm=301;
	}
	else if(check([[0,0,0],[265,265,265],[265,0,265]])){
		itm=306;
	}
	else if(check([[265,265,265],[265,0,265],[0,0,0]])){
		itm=306;
	}
	else if(check([[265,0,265],[265,265,265],[265,265,265]])){
		itm=307;
	}
	else if(check([[265,265,265],[265,0,265],[265,0,265]])){
		itm=308;
	}
	else if(check([[0,0,0],[265,0,265],[265,0,265]])){
		itm=309;
	}
	else if(check([[265,0,265],[265,0,265],[0,0,0]])){
		itm=309;
	}
	else if(check([[0,0,0],[264,264,264],[264,0,264]])){
		itm=310;
	}
	else if(check([[264,264,264],[264,0,264],[0,0,0]])){
		itm=310;
	}
	else if(check([[264,0,264],[264,264,264],[264,264,264]])){
		itm=311;
	}
	else if(check([[264,264,264],[264,0,264],[264,0,264]])){
		itm=312;
	}
	else if(check([[0,0,0],[264,0,264],[264,0,264]])){
		itm=313;
	}
	else if(check([[264,0,264],[264,0,264],[0,0,0]])){
		itm=313;
	}
	else if(check([[0,0,0],[266,266,266],[266,0,266]])){
		itm=314;
	}
	else if(check([[266,266,266],[266,0,266],[0,0,0]])){
		itm=314;
	}
	else if(check([[266,0,266],[266,266,266],[266,266,266]])){
		itm=315;
	}
	else if(check([[266,266,266],[266,0,266],[266,0,266]])){
		itm=316;
	}
	else if(check([[0,0,0],[266,0,266],[266,0,266]])){
		itm=317;
	}
	else if(check([[266,0,266],[266,0,266],[0,0,0]])){
		itm=317;
	}
	else if(check([[338,0,0],[0,0,0],[0,0,0]])){
		itm=353;
	}
	else if(check([[0,338,0],[0,0,0],[0,0,0]])){
		itm=353;
	}
	else if(check([[0,0,338],[0,0,0],[0,0,0]])){
		itm=353;
	}
	else if(check([[0,0,0],[338,0,0],[0,0,0]])){
		itm=353;
	}
	else if(check([[0,0,0],[0,338,0],[0,0,0]])){
		itm=353;
	}
	else if(check([[0,0,0],[0,0,338],[0,0,0]])){
		itm=353;
	}
	else if(check([[0,0,0],[0,0,0],[338,0,0]])){
		itm=353;
	}
	else if(check([[0,0,0],[0,0,0],[0,338,0]])){
		itm=353;
	}
	else if(check([[0,0,0],[0,0,0],[0,0,338]])){
		itm=353;
	}
	else if(check([[0,265,0],[265,331,265],[0,265,0]])){
		itm=345;
	}
	else if(check([[0,266,0],[266,331,266],[0,266,0]])){
		itm=347;
	}
	else if(check([[339,339,0],[339,334,0],[0,0,0]])){
		itm=340;
	}
	else if(check([[0,339,339],[0,339,334],[0,0,0]])){
		itm=340;
	}
	else if(check([[0,0,0],[339,339,0],[339,334,0]])){
		itm=340;
	}
	else if(check([[0,0,0],[0,339,339],[0,339,334]])){
		itm=340;
	}
	else if(check([[338,338,338],[0,0,0],[0,0,0]])){
		itm=339;
	}
	else if(check([[0,0,0],[338,338,338],[0,0,0]])){
		itm=339;
	}
	else if(check([[0,0,0],[0,0,0],[338,338,338]])){
		itm=339;
	}
	else if(check([[0,0,0],[265,0,265],[265,265,265]])){
		itm=328;
	}
	else if(check([[265,0,265],[265,265,265],[0,0,0]])){
		itm=328;
	}
	else if(check([[0,0,280],[0,280,287],[280,0,287]])){
		itm=346;
	}
	else if(check([[318,0,0],[280,0,0],[288,0,0]])){
		itm=262;
	}
	else if(check([[0,318,0],[0,280,0],[0,288,0]])){
		itm=262;
	}
	else if(check([[0,0,318],[0,0,280],[0,0,288]])){
		itm=262;
	}
	else if(check([[0,280,287],[280,0,287],[0,280,287]])){
		itm=261;
	}
	else if(check([[335,335,335],[353,344,353],[296,296,296]])){
		itm=92;
	}
	else if(check([[0,0,0],[0,348,348],[0,348,348]])){
		itm=89;
	}
	else if(check([[0,0,0],[348,348,0],[348,348,0]])){
		itm=89;
	}
	else if(check([[0,348,348],[0,348,348],[0,0,0]])){
		itm=89;
	}
	else if(check([[348,348,0],[348,348,0],[0,0,0]])){
		itm=89;
	}
	else if(check([[280,280,280],[280,280,280],[0,0,0]])){
		itm=85;
	}
	else if(check([[0,0,0],[280,280,280],[280,280,280]])){
		itm=85;
	}
	else if(check([[80,80,80],[0,0,0],[0,0,0]])){
		itm=78;
	}
	else if(check([[0,0,0],[80,80,80],[0,0,0]])){
		itm=78;
	}
	else if(check([[0,0,0],[0,0,0],[80,80,80]])){
		itm=78;
	}
	else if(check([[332,332,0],[332,332,0],[0,0,0]])){
		itm=80;
	}
	else if(check([[0,332,332],[0,332,332],[0,0,0]])){
		itm=80;
	}
	else if(check([[0,0,0],[332,332,0],[332,332,0]])){
		itm=80;
	}
	else if(check([[0,0,0],[0,332,332],[0,332,332]])){
		itm=80;
	}
	else if(check([[0,265,265],[0,265,265],[0,265,265]])){
		itm=330;
	}
	else if(check([[265,265,0],[265,265,0],[265,265,0]])){
		itm=330;
	}
	else if(check([[0,0,86],[0,0,50],[0,0,0]])){
		itm=91;
	}
	else if(check([[0,86,0],[0,50,0],[0,0,0]])){
		itm=91;
	}
	else if(check([[86,0,0],[50,0,0],[0,0,0]])){
		itm=91;
	}
	else if(check([[0,0,0],[0,0,86],[0,0,50]])){
		itm=91;
	}
	else if(check([[0,0,0],[0,86,0],[0,50,0]])){
		itm=91;
	}
	else if(check([[0,0,0],[86,0,0],[50,0,0]])){
		itm=91;
	}
	else if(check([[0,0,263],[0,0,280],[0,0,0]])){
		itm=50;
	}
	else if(check([[0,263,0],[0,280,0],[0,0,0]])){
		itm=50;
	}
	else if(check([[263,0,0],[280,0,0],[0,0,0]])){
		itm=50;
	}
	else if(check([[0,0,0],[0,0,263],[0,0,280]])){
		itm=50;
	}
	else if(check([[0,0,0],[0,263,0],[0,280,0]])){
		itm=50;
	}
	else if(check([[0,0,0],[263,0,0],[280,0,0]])){
		itm=50;
	}
	else if(check([[0,0,0],[0,336,336],[0,336,336]])){
		itm=45;
	}
	else if(check([[0,0,0],[336,336,0],[336,336,0]])){
		itm=45;
	}
	else if(check([[0,336,336],[0,336,336],[0,0,0]])){
		itm=45;
	}
	else if(check([[336,336,0],[336,336,0],[0,0,0]])){
		itm=45;
	}
	else if(check([[41,41,41],[41,260,41],[41,41,41]])){
		itm=322;
	}
	else if(check([[0,0,39],[0,0,40],[0,0,281]])){
		itm=282;
	}
	else if(check([[39,0,0],[40,0,0],[281,0,0]])){
		itm=282;
	}
	else if(check([[0,39,0],[0,40,0],[0,281,0]])){
		itm=282;
	}
	else if(check([[0,0,40],[0,0,39],[0,0,281]])){
		itm=282;
	}
	else if(check([[40,0,0],[39,0,0],[281,0,0]])){
		itm=282;
	}
	else if(check([[0,40,0],[0,39,0],[0,281,0]])){
		itm=282;
	}
	else if(check([[0,39,40],[0,281,0],[0,0,0]])){
		itm=282;
	}
	else if(check([[0,40,39],[0,281,0],[0,0,0]])){
		itm=282;
	}
	else if(check([[0,0,0],[0,40,39],[0,281,0]])){
		itm=282;
	}
	else if(check([[0,0,0],[0,39,40],[0,281,0]])){
		itm=282;
	}
	else if(check([[40,39,0],[0,281,0],[0,0,0]])){
		itm=282;
	}
	else if(check([[39,40,0],[0,281,0],[0,0,0]])){
		itm=282;
	}
	else if(check([[0,0,0],[40,39,0],[0,281,0]])){
		itm=282;
	}
	else if(check([[0,0,0],[39,40,0],[0,281,0]])){
		itm=282;
	}
	else if(check([[280,280,280],[280,35,280],[280,280,280]])){
		itm=321;
	}
	else if(check([[0,0,0],[341,0,0],[33,0,0]])){
		itm=29;
	}
	else if(check([[0,0,0],[0,341,0],[0,33,0]])){
		itm=29;
	}
	else if(check([[0,0,0],[0,0,341],[0,0,33]])){
		itm=29;
	}
	else if(check([[341,0,0],[33,0,0],[0,0,0]])){
		itm=29;
	}
	else if(check([[0,341,0],[0,33,0],[0,0,0]])){
		itm=29;
	}
	else if(check([[0,0,341],[0,0,33],[0,0,0]])){
		itm=29;
	}
	else if(check([[5,0,5],[5,5,5],[0,0,0]])){
		itm=333;
	}
	else if(check([[0,0,0],[5,0,5],[5,5,5]])){
		itm=333;
	}
	else if(check([[5,0,5],[0,5,0],[0,0,0]])){
		itm=281;
	}
	else if(check([[0,0,0],[5,0,5],[0,5,0]])){
		itm=281;
	}
	else if(check([[289,12,289],[12,289,12],[289,12,289]])){
		itm=46;
	}
	else if(check([[12,12,0],[12,12,0],[0,0,0]])){
		itm=24;
	}
	else if(check([[0,12,12],[0,12,12],[0,0,0]])){
		itm=24;
	}
	else if(check([[0,0,0],[12,12,0],[12,12,0]])){
		itm=24;
	}
	else if(check([[0,0,0],[0,12,12],[0,12,12]])){
		itm=24;
	}
	else if(check([[0,0,4],[0,0,280],[0,0,0]])){
		itm=69;
	}
	else if(check([[0,4,0],[0,280,0],[0,0,0]])){
		itm=69;
	}
	else if(check([[4,0,0],[280,0,0],[0,0,0]])){
		itm=69;
	}
	else if(check([[0,0,0],[0,0,4],[0,0,280]])){
		itm=69;
	}
	else if(check([[0,0,0],[0,4,0],[0,280,0]])){
		itm=69;
	}
	else if(check([[0,0,0],[4,0,0],[280,0,0]])){
		itm=69;
	}
	else if(check([[0,0,4],[0,4,4],[4,4,4]])){
		itm=67;
	}
	else if(check([[4,4,4],[4,261,4],[4,331,4]])){
		itm=23;
	}
	else if(check([[1,0,0],[0,0,0],[0,0,0]])){
		itm=77;
	}
	else if(check([[0,1,0],[0,0,0],[0,0,0]])){
		itm=77;
	}
	else if(check([[0,0,1],[0,0,0],[0,0,0]])){
		itm=77;
	}
	else if(check([[0,0,0],[1,0,0],[0,0,0]])){
		itm=77;
	}
	else if(check([[0,0,0],[0,1,0],[0,0,0]])){
		itm=77;
	}
	else if(check([[0,0,0],[0,0,1],[0,0,0]])){
		itm=77;
	}
	else if(check([[0,0,0],[0,0,0],[1,0,0]])){
		itm=77;
	}
	else if(check([[0,0,0],[0,0,0],[0,1,0]])){
		itm=77;
	}
	else if(check([[0,0,0],[0,0,0],[0,0,1]])){
		itm=77;
	}
	else if(check([[0,0,0],[1,1,0],[0,0,0]])){
		itm=70;
	}
	else if(check([[0,0,0],[0,1,1],[0,0,0]])){
		itm=70;
	}
	else if(check([[1,1,0],[0,0,0],[0,0,0]])){
		itm=70;
	}
	else if(check([[0,1,1],[0,0,0],[0,0,0]])){
		itm=70;
	}
	else if(check([[0,0,0],[0,0,0],[0,1,1]])){
		itm=70;
	}
	else if(check([[0,0,0],[0,0,0],[1,1,0]])){
		itm=70;
	}
	else if(check([[0,0,0],[0,0,0],[1,1,1]])){
		itm=44;
	}
	else if(check([[0,0,0],[1,1,1],[0,0,0]])){
		itm=44;
	}
	else if(check([[1,1,1],[0,0,0],[0,0,0]])){
		itm=44;
	}
	else if(check([[265,0,265],[0,265,0],[0,0,0]])){
		itm=325;
	}
	else if(check([[0,0,0],[265,0,265],[0,265,0]])){
		itm=325;
	}
	else if(check([[0,0,0],[5,5,0],[5,5,0]])){
		itm=58;
	}
	else if(check([[5,5,0],[5,5,0],[0,0,0]])){
		itm=58;
	}
	else if(check([[0,0,0],[0,5,5],[0,5,5]])){
		itm=58;
	}
	else if(check([[0,5,5],[0,5,5],[0,0,0]])){
		itm=58;
	}
	else if(check([[0,5,5],[0,5,5],[0,5,5]])){
		itm=324;
	}
	else if(check([[5,5,0],[5,5,0],[5,5,0]])){
		itm=324;
	}
	else if(check([[5,5,5],[5,0,5],[5,5,5]])){
		itm=54;
	}
	else if(check([[5,5,5],[5,264,5],[5,5,5]])){
		itm=84;
	}
	else if(check([[5,5,5],[5,331,5],[5,5,5]])){
		itm=25;
	}
	else if(check([[0,0,5],[0,5,5],[5,5,5]])){
		itm=53;
	}
	else if(check([[5,5,5],[4,265,4],[4,331,4]])){
		itm=33;
	}
	else if(check([[5,5,5],[5,5,5],[0,280,0]])){
		itm=323;
	}
	else if(check([[5,5,5],[340,340,340],[5,5,5]])){
		itm=47;
	}
	else if(check([[17,0,0],[0,0,0],[0,0,0]])){
		makes(5,10);
		resetCraft();
	}
	else if(check([[17,0,0],[0,0,0],[0,0,0]])){
		makes(5,10);
		resetCraft();
	}
	else if(check([[0,17,0],[0,0,0],[0,0,0]])){
		makes(5,10);
		resetCraft();
	}
	else if(check([[0,0,17],[0,0,0],[0,0,0]])){
		makes(5,10);
		resetCraft();
	}
	else if(check([[0,0,0],[17,0,0],[0,0,0]])){
		makes(5,10);
		resetCraft();
	}
	else if(check([[0,0,0],[0,17,0],[0,0,0]])){
		makes(5,10);
		resetCraft();
	}
	else if(check([[0,0,0],[0,0,17],[0,0,0]])){
		makes(5,10);
		resetCraft();
	}
	else if(check([[0,0,0],[0,0,0],[17,0,0]])){
		makes(5,10);
		resetCraft();
	}
	else if(check([[0,0,0],[0,0,0],[0,17,0]])){
		makes(5,10);
		resetCraft();
	}
	else if(check([[0,0,0],[0,0,0],[0,0,17]])){
		makes(5,10);
		resetCraft();
	}
	else if(check([[5,5,0],[0,0,0],[0,0,0]])){
		itm=72;
	}
	else if(check([[0,5,5],[0,0,0],[0,0,0]])){
		itm=72;
	}
	else if(check([[0,0,0],[5,5,0],[0,0,0]])){
		itm=72;
	}
	else if(check([[0,0,0],[0,5,5],[0,0,0]])){
		itm=72;
	}
	else if(check([[0,0,0],[0,0,0],[5,5,0]])){
		itm=72;
	}
	else if(check([[0,0,0],[0,0,0],[0,5,5]])){
		itm=72;
	}
	
	if(itm!=0 && crftAgn){
		crftAgn=false;
		make(itm);
		resetCraft();
		
		switch(itm){
			case 280:
				makes(itm,3);
				break;
			case 267:
			case 268:
			case 272:
			case 276:
			case 283:
				unlock(4);
				break;
		}
		
		if(itm<256)
			alert("Made "+blocks[itm][3]);
		else
			alert("Made "+items[itm-256][3]);
	}
}

function check(input){
	var retVal=true;
	
	for(i=0;i<3;i++){
		for(j=0;j<3;j++){
			if(input[i][j]!=tabl[i][j])
				retVal=false;
		}
	}
	
	return retVal;
}

var crftAgn=true;
function resetCraft(){
	setTimeout("crftAgn=true;",500);
	
	var blnAgn=true, endX, endY;
	
	for(var i=1;i<4;i++){
	  if(blnAgn){
		for(var j=1;j<4;j++){
			var curItm=tabl[i-1][j-1];
			if(curItm!=0){
			 if(curItm<256){
			 	if(blocks[curItm][1]>10)
			 		blocks[curItm][1]-=10;
			 	else{
			 		blnAgn=false;
			 		endX=i;
			 		endY=j;
			 		break;
			 	}
			 }else{
			 	if(items[curItm-256][1]>10)
			 		items[curItm-256][1]-=10;
			 	else{
			 		blnAgn=false;
			 		endX=i;
			 		endY=j;
			 		break;
			 	}
			 }
			}
		}
	  }
	}
	
	if(!blnAgn){
		for(var i=1;i<4;i++){
			for(var j=1;j<4;j++){
				$("#"+i+"_"+j).html("");
				
				if(i<endX && j<endY){
					var curItm=tabl[i-1][j-1];
					if(curItm!=0){
					 if(curItm<256)
					 	blocks[curItm][1]+=10;
					 else
					 	items[curItm-256][1]+=10;
					}
				}
			}
		}
		tabl=[[0,0,0],[0,0,0],[0,0,0]];
	}
	
	invRefresh();
}

function retHom(){
	$("#home").show();
	$(".battle").hide();
	$(".interest").hide();
	$("#adv").hide();
	
	blnAdv=false;
	numTms=0;
	$(document).off("keydown");
}

function eat(input){
	switch(input){
		case 1:
			items[4][1]-=1;
			plyr.hp+=1;
			$("#inv260").html(items[4][3]+": "+items[4][1]);
			if(items[4][1]<1)
				$("#eat1").hide();
			break;
		case 2:
			plyr.hp+=2;
			items[41][1]-=1;
			$("#inv297").html(items[41][3]+": "+items[41][1]);
			if(items[41][1]<1)
				$("#eat2").hide();
			break;
		case 3:
			plyr.hp+=2;
			items[94][1]-=1;
			$("#inv350").html(items[94][3]+": "+items[94][1]);
			if(items[94][1]<1)
				$("#eat3").hide();
			break;
		case 4:
			plyr.hp+=3;
			items[64][1]-=1;
			$("#inv320").html(items[64][3]+": "+items[64][1]);
			if(items[64][1]<1)
				$("#eat4").hide();
			break;
		case 5:
			plyr.hp+=4;
			items[26][1]-=1;
			$("#inv282").html(items[26][3]+": "+items[26][1]);
			if(items[26][1]<1)
				$("#eat5").hide();
			break;
	}
	if(plyr.hp>20)
		plyr.hp=20;
	$("#plyrHealth").text("Player Health: "+plyr.hp);
}

function colChst(input){
	var numItm=0;
	var arrItm=[];
	
	switch(input){
		case 1:
			break;
		case 2:
			break;
		case 3:
			numItm=batman(1,3);
			arrItm=[256,257,258,260,262,265,266,267,268,269,270,271,272,273,274,275,281,290,291,292,291,298,299,300,301,334,339,340];
			break;
		default:
			break;
	}
	
	var msg="Collected:", tmp;
	for(var i=0;i<numItm;i++){
		tmp=arrItm[batman(0,arrItm.length-1)]
		make(tmp);
		if(tmp<256)
			msg=msg+"<br/>"+blocks[tmp][3];
		else
			msg=msg+"<br/>"+items[tmp-256][3];
	}
	
	alert(msg);
	blnAdv=true;
	$('.interest').hide();
	$('#plcPic').html("");
	$('#plcBtn').html("");
}

var blnBtl=false;
var intBtl=0;
var mzX, mzY, arrMz, mzWid, mxHgt;
function goPmd(input){
	interestIdx = 1;
	blnAdv=false;
	
	if(input==0){
		$(".btnX").hide();
		$("#plcNam").text("Labyrinth");
		$("#plcBtn").html("<div id='dtaNote'>You've fallen through a trap</div><br/><div><br/><span class='button' id='goWst' onclick='goPmd(1);'>Go West</span>&nbsp;<span class='button' id='goNth' onclick='goPmd(2);'>Go North</span>&nbsp;<span class='button' id='goEst' onclick='goPmd(3);'>Go East</span>&nbsp;<span class='button' id='goSth' onclick='goPmd(4);'>Go South</span></div><br/>");
		
		mzWid=Math.floor(Math.abs(Math.sin(mpseed+plyr.x+plyr.y)*5)+5);
		mzHgt=Math.floor(Math.abs(Math.sin(mpseed+plyr.x-plyr.y)*5)+5);
		
		arrMz=[];
		for(var i=0;i<mzWid;i++){
			arrMz[i]=[];
			for(var j=0;j<mzHgt;j++){
				arrMz[i][j]=0;
			}
		}
		
		mzX=Math.floor(mzWid/2);
		mzY=Math.floor(mzHgt/2);
		
		//genMaz(mzX, mzY);
		genMaz(0, mzHgt-1);
		
		var tmpExt=Math.floor(Math.abs(Math.sin(mpseed+plyr.x-plyr.y)*4));
		switch(tmpExt){
			case 1:
				if(arrMz[0][0]==-1){
					if(arrMz[mzWid-1][0]==-1){
						if(arrMz[0][mzHgt-1]==-1){
							if(arrMz[mzWid-1][mzHgt-1]!=-1)
								arrMz[mzWid-1][mzHgt-1]=99;
							else
								arrMz[1][1]=99;
						}
						else
							arrMz[0][mzHgt-1]=99;
					}
					else
						arrMz[mzWid-1][0]=99;
				}
				else
					arrMz[0][0]=99;
				break;
			case 2:
				if(arrMz[mzWid-1][0]==-1){
					if(arrMz[0][0]==-1){
						if(arrMz[0][mzHgt-1]==-1){
							if(arrMz[mzWid-1][mzHgt-1]!=-1)
								arrMz[mzWid-1][mzHgt-1]=99;
							else
								arrMz[mzWid-2][1]=99;
						}
						else
							arrMz[0][mzHgt-1]=99;
					}
					else
						arrMz[0][0]=99;
				}
				else
					arrMz[mzWid-1][0]=99;
				break;
			case 3:
				if(arrMz[0][mzHgt-1]==-1){
					if(arrMz[mzWid-1][0]==-1){
						if(arrMz[0][0]==-1){
							if(arrMz[mzWid-1][mzHgt-1]!=-1)
								arrMz[mzWid-1][mzHgt-1]=99;
							else
								arrMz[1][mzHgt-2]=99;
						}
						else
							arrMz[0][0]=99;
					}
					else
						arrMz[mzWid-1][0]=99;
				}
				else
					arrMz[0][mzHgt-1]=99;
				break;
			default:
				if(arrMz[mzWid-1][mzHgt-1]==-1){
					if(arrMz[mzWid-1][0]==-1){
						if(arrMz[0][0]==-1){
							if(arrMz[0][mzHgt-1]!=-1)
								arrMz[0][mzHgt-1]=99;
							else
								arrMz[mzWid-2][mzHgt-2]=99;
						}
						else
							arrMz[0][0]=99;
					}
					else
						arrMz[mzWid-1][0]=99;
				}
				else
					arrMz[mzWid-1][mzHgt-1]=99;
				break;
		}
	}else{
		switch(input){
			case 1:
				$("#dtaNote").text("Moved West");
				mzX--;
				break;
			case 2:
				$("#dtaNote").text("Moved North");
				mzY--;
				break;
			case 3:
				$("#dtaNote").text("Moved East");
				mzX++;
				break;
			case 4:
				$("#dtaNote").text("Moved South");
				mzY++;
				break;
		}
	}
	
	if(arrMz[mzX][mzY]==99){
		var tmpPic=$('#p99').html();
		$('#plcPic').html(tmpPic);
		$('#plcBtn').html("You found the exit<br/><br/><div class='button' id='colChst' onclick='colChst(3);'>Collect Treasure</div>");
	}
	
	var tmp=arrMz[mzX][mzY].toString(2);
	while(tmp.length<4)
		tmp="0"+tmp;
	
	if(tmp.charAt(0)=="1")
		$("#goWst").show();
	else
		$("#goWst").hide();
	
	if(tmp.charAt(1)=="1")
		$("#goEst").show();
	else
		$("#goEst").hide();
	
	if(tmp.charAt(2)=="1")
		$("#goSth").show();
	else
		$("#goSth").hide();
	
	if(tmp.charAt(3)=="1")
		$("#goNth").show();
	else
		$("#goNth").hide();
}

function genMaz(x, y){
	//Here be dragons
	var nbrs=[];
	if(x!=0){
		if(arrMz[x-1][y]==0)
			nbrs.push(8);
	}
	if(x!=mzWid-1){
		if(arrMz[x+1][y]==0)
			nbrs.push(4);
	}
	if(y!=0){
		if(arrMz[x][y-1]==0)
			nbrs.push(1);
	}
	if(y!=mzHgt-1){
		if(arrMz[x][y+1]==0)
			nbrs.push(2);
	}
	if(nbrs.length==0)
		return;
	
	var nxtCell=Math.floor(Math.abs(Math.sin(mpseed+4*x+3*y+plyr.y*2)*nbrs.length));
	
	arrMz[x][y]+=nbrs[nxtCell];
	switch(nbrs[nxtCell]){
		case 1:
			arrMz[x][y-1]+=2;
			genMaz(x,y-1);
			break;
		case 2:
			arrMz[x][y+1]+=1;
			genMaz(x,y+1);
			break;
		case 4:
			arrMz[x+1][y]+=8;
			genMaz(x+1,y);
			break;
		case 8:
			arrMz[x-1][y]+=4;
			genMaz(x-1,y);
			break;
	}
	genMaz(x,y);
}

function hideInterest(){
	switch(interestIdx){
		case 2: goAwy(); break;
		case 3: colChst(3); break;
		default:
			$("#plcPic").html("");
			$("#plcBtn").html("");
			$(".interest").hide();
			break;
	}
	interestIdx = -1;
}

var numTms=0;
function goDta(){
	interestIdx = 2;
	blnAdv=false;
	
	var base = Math.floor(Math.abs(Math.sin(mpseed+plyr.x+plyr.y)*10));
	
	var tmpPic=$("#p2b").html();
	$("#plcPic").html(tmpPic);
	$("#plcBtn").html("<div id='dtaNote'>You discover a Monster Spawner<br/></div><div><br/><span class='button' id='toBtl' onclick='spnr("+base+");'>To Battle</span>&nbsp;<span class='button' id='leave' onclick='goAwy();'>Leave</span></div><br/>");
}

function goCve(input){
	interestIdx = 3;
	intBtl=Math.floor(input/3);
	if(intBtl<=0){
		blnBtl=false;
		$('.interest').show();
		var tmpPic=$('#p99').html();
		$('#plcPic').html(tmpPic);
		$('#plcBtn').html("<div class='button' id='colChst' onclick='colChst(3);'>Collect Treasure</div>");
		return 0;
	}
	$('.interest').hide();
	blnAdv=false;
	blnBtl=true;
	var opp=batman(1,5);
	if(opp==5)
		opp=6;
	battle(opp);
}

function goTch(input){
	interestIdx = 4;
	blnAdv=false;
	var tmpPic=$("#p4b").html();
	$("#plcPic").html(tmpPic);
	
	input++;
	var btns="<div>You stumble upon a";
	switch(input){
		case 2:
			btns=btns+" second";
			break;
		case 3:
			btns=btns+" third";
			break;
		case 4:
			btns=btns+" fourth";
			break;
		default:
			btns=btns+"n";
			break;
	}
	btns=btns+" abandoned mineshaft.<br/></div><div><br/><span class='button' id='rideIt' onclick='rdCrt("+input+");'>Ride It</span>";
	
	if(input<4)
		btns=btns+"&nbsp;<span class='button' id='deeper' onclick='goTch("+input+");'>Keep Looking</span>";
	
	btns=btns+"</div><br/>";
	$("#plcBtn").html(btns);
}

function goThs(input){
	interestIdx = 6;
	alert("Great View");
	var tmpX=plyr.x, tmpY=plyr.y;
	tmpX-=(input/2);
	tmpY-=(input/2);
	var strY=tmpY, tmp;
	
	for(tmpX;tmpX<plyr.x+(input/2);tmpX++){
	  if(tmpX>=0&&tmpX<advMap[0].length){
		for(tmpY=strY;tmpY<plyr.y+(input/2);tmpY++){
		  if(tmpY>=0&&tmpY<advMap.length){
			if(tmpX==plyr.x&&tmpY==plyr.y){}
			else{
				tmp=getSqrHere(tmpX,tmpY);
				$("#R"+(tmpY+1)+"C"+(tmpX+1)).text(tmp);
				advMap[tmpY][tmpX]=true;
			}
		  }
		}
	  }
	}
	
	blnAdv=true;
	$('.interest').hide();
	$('#plcPic').html("");
	$('#plcBtn').html("");
}

function goOth(){
	interestIdx = 7;
	$('#plcPic').html("Placeholder for future content. . .");
	$('#plcBtn').html("");
}

var blnSpnr=false;
function spnr(input){
	$(".interest").hide();
	blnBtl=true;
	blnSpnr=true;
	
	switch(input){
		case 1:
		case 2:
		case 3:
			battle(2);
			break;
		case 4:
			battle(3);
			break;
		case 5:
		case 6:
			battle(4);
			break;
		default:
			battle(1);
			break;
	}
}

function goAwy(){
	alert("Defeated "+numTms);
	numTms=0;
	$("#plcPic").html("");
	$("#plcBtn").html("");
	$(".interest").hide();
	
	blnSpnr=false;
	blnBtl=false;
	blnAdv=true;
}

function rdCrt(input){
	$("#plcPic").html("");
	$("#plcBtn").html("");
	$(".interest").hide();
	
	$("#R"+(plyr.y+1)+"C"+(plyr.x+1)).text(prevSqr);
	
	var tmpX = Math.floor(Math.abs(Math.sin(mpseed+plyr.x+plyr.y*input)*99));
	var tmpY = Math.floor(Math.abs(Math.sin(mpseed+plyr.x*input+plyr.y)*49));
	
	if(tmpX==plyr.x)
		tmpX-=1;
	if(tmpX<0)
		tmpX=3;
	
	plyr.x=tmpX;
	plyr.y=tmpY;
	
	prevSqr=$("#R"+(plyr.y+1)+"C"+(plyr.x+1)).text();
	$("#R"+(plyr.y+1)+"C"+(plyr.x+1)).text("I");
	
	if(prevSqr=="")
		prevSqr=getSqr();
	
	items[72][1]-=1;
	blnAdv=true;
	alert("Rode Minecart");
}

var interestIdx = -1;
function explr(input){
	for(i=0;i<mapCmplt.length;i++){
		if(plyr.x==mapCmplt[i][0]&&plyr.y==mapCmplt[i][1]){
			alert("Already Explored");
			return false;
		}
	}
	var inX=plyr.x, inY=plyr.y;
	
	switch(input){
		case 1:
			if(items[5][1]<1){
				alert("Requires a Bow");
				return false;
			}
			goPmd(0);
			break;
		case 2:
			if(items[77][1]<1){
				alert("Requires a Boat");
				return false;
			}
			goDta();
			break;
		case 3:
			var numItm=Math.sin(mpseed+(inX*3)+inY)*10;
			numItm=Math.floor(Math.abs(numItm))+3;
			if(blocks[50][1]<numItm){
				alert("Requires "+numItm+" Torches");
				return false;
			}
			blocks[50][1]-=numItm;
			goCve(numItm);
			break;
		case 4:
			if(items[72][1]<1){
				alert("Requires a Minecart");
				return false;
			}
			goTch(0);
			break;
		case 5:
			var rndItm=[350,320,297,20,45,48,53,54,69,71,72,77,85,281,353];
			rndItm=rndItm[Math.floor(Math.abs(Math.sin(mpseed+(inX*3)+inY)*rndItm.length))];
			var numNeed=Math.floor(Math.abs(Math.sin(mpseed+inX+(inY*60))*10))+3;
			
			if(rndItm<256){
				if(blocks[rndItm][1]<numNeed){
					alert("Requires "+numNeed+" "+blocks[rndItm][3]);
					return false;
				}
			}else{
				if(items[rndItm-256][1]<numNeed){
					alert("Requires "+numNeed+" "+items[rndItm-256][3]);
					return false;
				}
			}
			
			var plrItm=rndItm;
			var numItm=Math.sin(mpseed+(inX*3)+inY)*1000;
			numItm=Math.floor(Math.abs(numItm));
			if(numItm<20){
				rndItm=6;
			}else if(numItm<30){
				rndItm=23;
			}else if(numItm<35){
				rndItm=25;
			}else if(numItm<60){
				rndItm=26;
			}else if(numItm<110){
				rndItm=37;
			}else if(numItm<160){
				rndItm=38;
			}else if(numItm<210){
				rndItm=39;
			}else if(numItm<260){
				rndItm=40;
			}else if(numItm<270){
				rndItm=47;
			}else if(numItm<320){
				rndItm=296;
			}else if(numItm<340){
				rndItm=63;
			}else if(numItm<490){
				rndItm=79;
			}else if(numItm<640){
				rndItm=80;
			}else if(numItm<650){
				rndItm=84;
			}else if(numItm<655){
				rndItm=86;
			}else if(numItm<700){
				rndItm=263;
			}else if(numItm<750){
				rndItm=287;
			}else if(numItm<800){
				rndItm=288;
			}else if(numItm<850){
				rndItm=295;
			}else if(numItm<860){
				rndItm=321;
			}else if(numItm<880){
				rndItm=326;
			}else if(numItm<885){
				rndItm=327;
			}else if(numItm<886){
				rndItm=329;
			}else if(numItm<990){
				rndItm=332;
			}else if(numItm<992){
				rndItm=335;
			}else if(numItm<997){
				rndItm=339;
			}else if(numItm<999){
				rndItm=340;
			}else{
				rndItm=344;
			}
			
			var tmpNam="", tmpNam2="";
			if(plrItm<256){
				blocks[plrItm][1]-=numNeed;
				tmpNam=blocks[plrItm][3];
			}else{
				items[plrItm-256][1]-=numNeed;
				tmpNam=items[plrItm-256][3];
			}
			
			if(rndItm<256)
				tmpNam2=blocks[rndItm][3];
			else
				tmpNam2=items[rndItm-256][3];
			
			make(rndItm);
			alert("Traded "+numNeed+" "+tmpNam+"<br/>For a "+tmpNam2);
			break;
		case 6:
			var numItm=Math.sin(mpseed+(inX*3)+inY)*3;
			numItm=(Math.floor(Math.abs(numItm))+3)*2;
			if(blocks[65][1]<numItm){
				alert("Requires "+numItm+" Ladders");
				return false;
			}
			blocks[65][1]-=numItm;
			goThs(numItm);
			break;
		case 7:
			if(blocks[46][1]<10){
				alert("Requires 10 TNT");
				return false;
			}
			blocks[46][1]-=10;
			goOth();
			break;
	}
	
	if(input!=4&&input!=2)
		mapCmplt.push([plyr.x,plyr.y]);
}

var attAgn=true;
function attackEnemy(){
	if(!attAgn)
		return 0;
	
	attAgn=false;
	
	if(batman(0,opnt.df*2)<2){
		if(items[20][1]>0){
			$("#btlAlert").append("<span id='btlInfoText'><br/>You attack for 5 damge.</span>");
			opnt.hp-=5;
		}else if(items[27][1]>0){
			$("#btlAlert").append("<span id='btlInfoText'><br/>You attack for 4 damge.</span>");
			opnt.hp-=4;
		}else if(items[11][1]>0){
			$("#btlAlert").append("<span id='btlInfoText'><br/>You attack for 3 damge.</span>");
			opnt.hp-=3;
		}else if(items[16][1]>0){
			$("#btlAlert").append("<span id='btlInfoText'><br/>You attack for 2 damge.</span>");
			opnt.hp-=2;
		}else if(items[12][1]>0){
			$("#btlAlert").append("<span id='btlInfoText'><br/>You attack for 1 damge.</span>");
			opnt.hp-=1;
		}
		setTimeout(function() { $("#btlInfoText").fadeOut(500, function(){ $(this).remove();}); },500);
		$("#enmyHealth").text("Enemy Health: "+opnt.hp);
	}else{
		$("#btlAlert").append("<span id='btlInfoText'><br/>Your attack misses.</span>");
		setTimeout(function() { $("#btlInfoText").fadeOut(500, function(){ $(this).remove();}); },500);
	}
	
	setTimeout("attAgn=true;",500);
	
	if(opnt.hp<=0){
		$(".battle").hide();
		alert("Enemy Defeated");
		opnt.id="";
		opnt.hp=0;
		opnt.at=0;
		opnt.df=0;
		opnt.nm="";
		clearTimeout(emyTimr);
		$("#btlAlert").html("");
		
		if(blnBtl){
			if(blnSpnr){
				numTms++;
				$(".interest").show();
			}else
				goCve(intBtl);
		}else
			blnAdv=true;
	}
}

function hitPlyr(){
	var pdef=0;
	
	if(items[54][1]>0){
		pdef+=1
	}else if(items[58][1]>0){
		pdef+=.75
	}else if(items[50][1]>0){
		pdef+=.5
	}else if(items[42][1]>0){
		pdef+=.25
	}
	
	if(items[55][1]>0){
		pdef+=4
	}else if(items[59][1]>0){
		pdef+=3
	}else if(items[51][1]>0){
		pdef+=2
	}else if(items[43][1]>0){
		pdef+=1
	}
	
	if(items[56][1]>0){
		pdef+=2
	}else if(items[60][1]>0){
		pdef+=1.5
	}else if(items[52][1]>0){
		pdef+=1
	}else if(items[44][1]>0){
		pdef+=.5
	}
	
	if(items[57][1]>0){
		pdef+=1
	}else if(items[61][1]>0){
		pdef+=.75
	}else if(items[53][1]>0){
		pdef+=.5
	}else if(items[45][1]>0){
		pdef+=.25
	}
	
	pdef=Math.floor(pdef/2);
	
	if(batman(0,pdef)<1){
		var dmg=(opnt.at-batman(0,pdef));
		if(dmg<0)
			dmg=0;
		plyr.hp-=dmg;
		$("#btlAlert").append("<span id='btlInfoText'><br/>"+opnt.nm+" attacks for "+dmg+".</span>");
		$("#plyrHealth").text("Player Health: "+plyr.hp);
	}else{
		$("#btlAlert").append("<span id='btlInfoText'><br/>"+opnt.nm+" misses.</span>");
	}
	if(blnSpnr)
		setTimeout(function() { $("#btlInfoText").fadeOut(50, function(){ $(this).remove();}); },150);
	else
		setTimeout(function() { $("#btlInfoText").fadeOut(500, function(){ $(this).remove();}); },750);
	
	if(plyr.hp<=0){
		var msg="You Died";
		clearTimeout(emyTimr);
		$("#btlAlert").html("");
		
		for(var i=0;i<blocks.length+items.length;i++){
			if(batman(0,10)==4){
				if(i<blocks.length){
					if(blocks[i][1]>0){
						var numLost=batman(0,Math.floor(blocks[i][1]/4)+1);
						if(numLost>0){
							blocks[i][1]-=numLost;
							$("#inv"+i).html(blocks[i][3]+": "+blocks[i][1]);
							msg=msg+"<br/>Lost "+numLost+" "+blocks[i][3];
						}
					}
				}else{
					if(items[i-blocks.length][1]>0){
						var numLost=batman(0,Math.floor(items[i-blocks.length][1]/4)+1);
						if(numLost>0){
							items[i-blocks.length][1]-=numLost;
							$("#inv"+i).html(items[i-blocks.length][3]+": "+items[i-blocks.length][1]);
							msg=msg+"<br/>Lost "+numLost+" "+items[i-blocks.length][3];
						}
					}
				}
			}
		}
		$("#alertBox").append("<div id='plyrDie'>"+msg+"</div>");
		setTimeout(function() { $("#plyrDie").fadeOut(2000, function(){ $(this).remove();}); },2000);
		
		plyr.x=21;
		plyr.y=8;
		prevSqr="H";
		
		retHom();
		return 0;
	}
	
	var intTmout=500*batman(1,4);
	if(blnSpnr)
		intTmout=Math.floor(intTmout/4);
	emyTimr=setTimeout("hitPlyr();",intTmout);
}

var opnt=[];
var emyTimr;
function battle(input){
	blnAdv=false;
	opnt.id=input;
	
	if(hr>6&&hr<=17&&!blnBtl)
		opnt.id+=100;
	
	switch(input){
		case 1:
			if(hr<=6||hr>17||blnBtl){
				opnt.hp=10;
				opnt.at=2;
				opnt.df=0;
				opnt.nm="Zombie";
			}else{
				opnt.hp=2;
				opnt.at=0;
				opnt.df=0;
				opnt.nm="Chicken";
			}
			break;
		case 2:
			if(hr<=6||hr>17||blnBtl){
				opnt.hp=10;
				opnt.at=1;
				opnt.df=2;
				opnt.nm="Skeleton";
			}else{
				opnt.hp=5;
				opnt.at=0;
				opnt.df=0;
				opnt.nm="Pig";
			}
			break;
		case 3:
			opnt.hp=10;
			opnt.at=10;
			opnt.df=0;
			opnt.nm="Creeper";
			break;
		case 4:
			if(hr<=6||hr>17||blnBtl){
				opnt.hp=8;
				opnt.at=1;
				opnt.df=1;
				opnt.nm="Spider";
			}else{
				opnt.hp=5;
				opnt.at=0;
				opnt.df=0;
				opnt.nm="Cow";
			}
			break;
		case 5:
			if(hr<=6||hr>17||blnBtl){
				opnt.hp=18;
				opnt.at=3;
				opnt.df=4;
				opnt.nm="Spider Jockey";
			}else{
				opnt.hp=4;
				opnt.at=0;
				opnt.df=0;
				opnt.nm="Sheep";
			}
			break;
		case 6:
			opnt.at=batman(1,3);
			opnt.hp=Math.pow(2,opnt.at);
			opnt.df=0;
			opnt.nm="Slime";
			break;
	}
	
	var tmpPic=$("#e"+opnt.id).html();
	$(".battle").show();
	$("#enmyName").text(opnt.nm);
	$("#enmyPic").html(tmpPic);
	$("#enmyHealth").text("Enemy Health: "+opnt.hp);
	
	var intTmout=500*batman(1,4);
	if(blnSpnr)
		intTmout=Math.floor(intTmout/4);
	emyTimr=setTimeout("hitPlyr();",intTmout);
}

var prevSqr="";
function adventure(input){
	if(!blnAdv)
		return false;
	
	if(input==0 && plyr.x<=0)
		return false;
	else if(input==1 && plyr.y<=0)
		return false;
	else if(input==2 && plyr.x>=advMap[0].length-1)
		return false;
	else if(input==3 && plyr.y>=advMap.length-1)
		return false;
	
	$("#R"+(plyr.y+1)+"C"+(plyr.x+1)).text(prevSqr);
	
	switch(input){
		case 0:
			plyr.x-=1;
			break;
		case 1:
			plyr.y-=1;
			break;
		case 2:
			plyr.x+=1;
			break;
		case 3:
			plyr.y+=1;
			break;
	}
	
	$("#advAct").hide();
	prevSqr=$("#R"+(plyr.y+1)+"C"+(plyr.x+1)).text();
	$("#R"+(plyr.y+1)+"C"+(plyr.x+1)).text("I");
	advMap[plyr.y][plyr.x]=true;
	
	if(prevSqr=="")
		prevSqr=getSqr();
	
	if(prevSqr=="H"){
		var tmpPic=$("#p0").html();
		$(".interest").show();
		$("#plcNam").text("Home");
		$("#plcPic").html(tmpPic);
		$("#plcBtn").html("<div class='button' id='explore' onclick='retHom();'>Go Home</div>");
		$("#advAct").show();
		return 0;
	}else if(prevSqr=="A"){
		var tmpPic=$("#p1").html();
		$(".interest").show();
		$("#plcNam").text("Pyramid");
		$("#plcPic").html(tmpPic);
		$("#plcBtn").html("<div class='button' id='explore' onclick='explr(1);'>Explore</div>");
		return 0;
	}else if(prevSqr=="Y"){
		var tmpPic=$("#p2").html();
		$(".interest").show();
		$("#plcNam").text("Delta");
		$("#plcPic").html(tmpPic);
		$("#plcBtn").html("<div class='button' id='explore' onclick='explr(2);'>Explore</div>");
		return 0;
	}else if(prevSqr=="O"){
		var tmpPic=$("#p3").html();
		$(".interest").show();
		$("#plcNam").text("Cave");
		$("#plcPic").html(tmpPic);
		$("#plcBtn").html("<div class='button' id='explore' onclick='explr(3);'>Explore</div>");
		return 0;
	}else if(prevSqr=="V"){
		var tmpPic=$("#p4").html();
		$(".interest").show();
		$("#plcNam").text("Trench");
		$("#plcPic").html(tmpPic);
		$("#plcBtn").html("<div class='button' id='explore' onclick='explr(4);'>Explore</div>");
		return 0;
	}else if(prevSqr=="Q"){
		var tmpPic=$("#p5").html();
		$(".interest").show();
		$("#plcNam").text("Igloo");
		$("#plcPic").html(tmpPic);
		$("#plcBtn").html("<div class='button' id='explore' onclick='explr(5);'>Explore</div>");
		return 0;
	}else if(prevSqr=="R"){
		var tmpPic=$("#p6").html();
		$(".interest").show();
		$("#plcNam").text("Treehouse");
		$("#plcPic").html(tmpPic);
		$("#plcBtn").html("<div class='button' id='explore' onclick='explr(6);'>Explore</div>");
		return 0;
	}else if(prevSqr=="?"){
		var tmpPic=$("#p7").html();
		$(".interest").show();
		$("#plcNam").text("The End");
		$("#plcPic").html(tmpPic);
		$("#plcBtn").html("<div class='button' id='explore' onclick='explr(7);'>Explore</div>");
		return 0;
	}else if(prevSqr=="I"){
		var tmpPic=$("#p8").html();
		$(".interest").show();
		$("#plcNam").text("???");
		$("#plcPic").html(tmpPic);
		$("#plcBtn").html("You come across a ghost of your former self.");
		prevSqr=getSqr();
		return 0;
	}else{
		$(".interest").hide();
		$("#plcBtn").html("");
		$("#advAct").hide();
	}
	
	tmpEnc=batman(0,100);
	if(tmpEnc>85){
		tmpEnc=batman(0,100);
		if(tmpEnc<25){
			battle(2);
		}else if(tmpEnc<50){
			battle(4);
		}else if(tmpEnc<83){
			battle(1);
		}else if(tmpEnc<90){
			battle(3);
		}else if(tmpEnc<97){
			battle(6);
		}else if(tmpEnc<98){
			battle(5);
		}
	}
}

function getSqr(){
	return getSqrHere(plyr.x,plyr.y);
}

function getSqrHere(inX, inY){
	if(inX==21 && inY==8)
		return "H";
	if(inX==Math.floor(Math.abs(Math.sin(mpseed)*10))+80){
		if(inY==Math.floor(Math.abs(Math.sin(mpseed*2)*10))+35)
			return "?";
	}
	
	var xar=Math.floor(inX/10), yar=Math.floor(inY/10);
	var retVal = Math.sin(mpseed+xar+yar*advMap[0].length)*10;
	retVal=Math.floor(Math.abs(retVal));
	var tmpRnd = Math.sin(mpseed+inX+inY*advMap[0].length)*1000;
	tmpRnd=Math.floor(tmpRnd);
	
	switch(retVal){
		case 9:
		case 1:
			if(tmpRnd>998){
				return "A";
			}else if(tmpRnd>750){
				return ",";
			}else{
				return ".";
			}
			break;
		case 8:
		case 2:
			if(tmpRnd>998){
				return "Y";
			}else if(tmpRnd>750){
				return "w";
			}else{
				return "v";
			}
			break;
		case 7:
		case 3:
			if(tmpRnd>998){
				return "O";
			}else if(tmpRnd>750){
				return "m";
			}else{
				return "n";
			}
			break;
		case 6:
		case 4:
			if(tmpRnd>998){
				return "V";
			}else if(tmpRnd>750){
				return "~";
			}else{
				return "-";
			}
			break;
		case 5:
			if(tmpRnd>998){
				return "Q";
			}else if(tmpRnd>750){
				return ";";
			}else{
				return ":";
			}
			break;
		default:
			if(tmpRnd>998){
				return "R";
			}else if(tmpRnd>750){
				return "p";
			}else{
				return "q";
			}
			break;
	}
}

function advMenu(){
	if(items[11][1]<1&&items[12][1]<1&&items[16][1]<1&&items[20][1]<1&&items[27][1]<1){
		alert("No Sword");
	}else{
		alert("Advernture Time");
		$("#lvlSeed").text(mpseed);
		
		$("#home").hide();
		$("#adv").show();
		
		$("#eat1").show();
		$("#eat2").show();
		$("#eat3").show();
		$("#eat4").show();
		$("#eat5").show();
		
		if(items[4][1]<1){
			$("#eat1").hide();
		}if(items[41][1]<1){
			$("#eat2").hide();
		}if(items[94][1]<1){
			$("#eat3").hide();
		}if(items[64][1]<1){
			$("#eat4").hide();
		}if(items[26][1]<1){
			$("#eat5").hide();
		}
		
		if(items[91][1]>0){
			$(".clock").show();
		}else{
			$(".clock").hide();
		}
		
		blnAdv=true;
		plyr.hp=20;
		$("#plyrHealth").text("Player Health: "+plyr.hp);
		
		if(prevSqr==""){
			prevSqr="H";
			plyr.x=21;
			plyr.y=8;
			advMap[8][21]=true;
			
			if(mpseed=="")
				mpseed=parseInt(makeSeed());
		}
		$("#R"+(plyr.y+1)+"C"+(plyr.x+1)).text("I");
		
		mapCmplt = [];
		
		$(document).keydown(function(e){
			switch(e.which) {
				case 37: 
					adventure(0);
					break;
				case 38: 
					adventure(1);
					break;
				case 39: 
					adventure(2);
					break;
				case 40: 
					adventure(3);
					break;
				default: return; 
			}
		});
	}
}

function getSeed(){
	var h,x,y,arrCookies=document.cookie.split(";");
	for (h=0;h<arrCookies.length;h++)
	{
		x=arrCookies[h].substr(0,arrCookies[h].indexOf("="));
		y=arrCookies[h].substr(arrCookies[h].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");

		if (x=="clkcftmap"){
			var tmp=unescape(y);
			tmp=tmp.split("_");
			mpseed=parseInt(tmp[0]);
			
			var counter=1;
			for(i=0;i<advMap[0].length;i++){
				for(j=0;j<advMap.length;j++){
					var tmpCod=parseInt(tmp[counter]);
					tmpCod=tmpCod.toString(2);
					while(tmpCod.length<5){
						tmpCod="0"+tmpCod;
					}
					advMap[j][i]=tmpCod.charAt(4-j%5);
					
					if(j%5==4)
						counter++;
					
					if(advMap[j][i]==1)
						advMap[j][i]=true;
					else
						advMap[j][i]=false;
					
					if(advMap[j][i]){
						$("#R"+(j+1)+"C"+(i+1)).text(getSqrHere(i, j));
					}
				}
			}
			return mpseed;
		}
	}
	return "";
}

function makeSeed(){
	var value="";
	do{
		value=value+batman(0,9);
	}while (value.length<10);
	
	
		var val2="";
		for(i=0;i<advMap[0].length;i++){
			for(j=0;j<advMap.length;j+=5){
				val2=val2+"_0";
			}
		}
		val2=value+val2;
		var exdays=365*4;
		var exdate=new Date();
		exdate.setDate(exdate.getDate() + exdays);
		var c_value=escape(val2) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
		document.cookie="clkcftmap=" + c_value;

	return value;
}

function craftMenu(){
	$(".smeltMenu").hide();
	$(".craftMenu").toggle();
}

function smeltMenu(){
	$(".craftMenu").hide();
	$(".smeltMenu").toggle();
}

function give(input){
	var canMake=true;
	if(input==5){
		var numNeed=10;
		if(blocks[58][1]>0)
			numNeed=1;
		
		if(blocks[17][1]<numNeed)
			canMake=false
		else{
			blocks[17][1]-=numNeed;
			$("#inv17").html("Wood: "+blocks[17][1]);
		}
	}
	
	if(canMake){
		make(input);
		
		if(input==17){
			if(blocks[input][1]==10){
				$("#get5").show();
			}
		}
		else if(input==5){
			if(blocks[input][1]==4){
				$("#mkTbl").show();
			}
		}
	}
}

function makes(input, num){
	if(num>0){
		if(input<256){
			blocks[input][1]+=num;
			blocks[input][2]+=num;
			$("#inv"+input).html(blocks[input][3]+": "+blocks[input][1]);
		}else{
			var itemID=input-256;
			items[itemID][1]+=num;
			items[itemID][2]+=num;
			$("#inv"+input).html(items[itemID][3]+": "+items[itemID][1]);
		}
	}
}

function make(input){
	if(input<256){
		blocks[input][1]+=1;
		blocks[input][2]+=1;
		$("#inv"+input).html(blocks[input][3]+": "+blocks[input][1]);
	}else{
		var itemID=input-256;
		items[itemID][1]+=1;
		items[itemID][2]+=1;
		$("#inv"+input).html(items[itemID][3]+": "+items[itemID][1]);
	}
}