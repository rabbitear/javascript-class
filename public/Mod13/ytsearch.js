// Helper function to display JavaScript value on HTML page.
myak = 'AIzaSyDihpaf2iGC3kUp28b-OAvBZr5VgRax7hs';

function showResponse(response) {
    // here I should use JSON.parse() it has two args the JSON formatted string
    // and a optional ''replacer'' function.
    // old code:
    //var responseString = JSON.stringify(response.items[0], '', 2);
    // WHAT NOW?
    // 1. I want the title and the thumbnail image.
    // 2. then I download the above image.
    var responeString = JSON.parse(response);
    document.getElementById('response').innerHTML += responseString;
}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded.
function onYouTubeApiLoad() {
    gapi.client.setApiKey(myak);
    search();
}

function search() {
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: 'animal',
    });
    
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    showResponse(response);
}

