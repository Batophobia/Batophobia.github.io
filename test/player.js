var player;
var videoIDs = [];
var playlist = "PLpWh_jngQAnG9J4Qlnbj0oXnfY2foglpf";
var apiKey = "AIzaSyBgKLdKkDMulKrVUE3S5KDvX-jxx3E5q0s"
// Callback for when the YouTube iFrame player is ready
function onYouTubeIframeAPIReady() {
  getList();
};

// Event Handlers 
function onError(error){
  // Update errors on page
  console.log("Error!");
};
function onApiChange(event){
  // Update currently availbe APIs
  console.log("API Change!");
};
function onPlayerReady(){
  // Update page after player is ready
  updateAll();
  player.playVideo();
}

function onPlayerStateChange(event){
  // Get current state
  // Video has ended
  switch (event.data) {
    case YT.PlayerState.ENDED:
      updateAll() // set status for state, ...
      clearIntervals() // clear all intervals
      player.loadVideoById(randomVideo());
      break;
    case YT.PlayerState.PLAYING:
      updateAll() // set status for state, ...
      setIntervals() // set intervals for ...
      break;
    case YT.PlayerState.PAUSED:
      updateAll() // set status for state, ...
      clearIntervals() // clear all intervals
      break;
    case YT.PlayerState.BUFFERING:
      updateAll() // set status for state, ...
      clearIntervals() // clear all intervals
      break;
    case YT.PlayerState.CUED:
      updateAll() // set status for state, ...
      clearIntervals() // clear all intervals
      break;
    default:
      updateAll() // set status for state, ...
      clearIntervals() // clear all intervals
      break;

  }
};

// Update HTML nodes on the page
// with most recent values from
// the YouTube iFrame API
function update(node){
  switch (node){
    // Update player reported changes
    case "duration":
      document.getElementById("duration").innerHTML = player.getDuration()+"s";
      break;
    case "url":
      var url = player.getVideoUrl();
      document.getElementById("url").innerHTML = "<a href=\""+url+"\" target=\"_blank\">"+url+"</a>";
      break;
    case "embedCode":
      var embedCode = player.getVideoEmbedCode();
      var index = Math.ceil(embedCode.length/3);
      var fmtEmbedCode = [embedCode.slice(0, index), "\n", embedCode.slice(index, index*2),"\n", embedCode.slice(index*2)].join('');
      document.getElementById("embedCode").innerText = fmtEmbedCode
      break;
    case "percentLoaded":
      document.getElementById("percentLoaded").innerHTML = player.getVideoLoadedFraction()*100+"%"
      break;
    case "title":
      document.getElementById("title").innerHTML = player.getVideoData()["title"]
      break;
    case "author":
      document.getElementById("author").innerHTML = player.getVideoData()["author"]
      break;
  }
};
// Updates all HTML nodes
function updateAll(){
  for (var node in nodeList){
    update(nodeList[node]);
  }
};
// Array to track all HTML nodes
var nodeList = [
  "duration",
  "url",
  "embedCode",
  "percentLoaded",
  "title",
  "author"
];

// Controls interval handlers to update page contens
// Array to track intervals
var activeIntervals = [];
function setIntervals(){
  // Sets invertval funtions to actively update page content
  activeIntervals[0] = setInterval(function(){update("percentLoaded")}, 500);
};
function clearIntervals(){
  // Clears existing intervals to actively update page content
  for (var interval in activeIntervals){
    clearInterval(interval);
  }
};

function getList(nextPage){
  $.get("https://www.googleapis.com/youtube/v3/playlistItems",
    {
      part: "snippet",
      maxResults: 50,
      playlistId: playlist,
      key: apiKey,
      pageToken: nextPage
    }, function(retData){
      for(i=0;i<retData.items.length;i++){
        videoIDs.push(retData.items[i].snippet.resourceId.videoId);
      }
    
      if(retData.nextPageToken===undefined){
        var tmpId = randomVideo();
        player = new YT.Player('player', {
          // Set Player height and width
          height: '39',
          width: '64',
          // Set the id of the video to be played
          videoId: tmpId,
          // Setup event handelers
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'onError': onError,
            'onApiChange': onApiChange,
          }
        });
        
        return;
      }
      getList(retData.nextPageToken);
    }
  );
};

function randomVideo(){
  return videoIDs[Math.floor(Math.random() * videoIDs.length)];
};
