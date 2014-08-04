// YOUR CODE HERE:
var app = {
  server : "https://api.parse.com/1/classes/chatterbox"
};

app.init = function(){};


app.send = function(message){
  $.ajax({
    type: "POST",
    url: this.server,
    data: JSON.stringify(message),
    success: console.log("YES"),
    dataType: JSON
  });
};

app.fetch = function(data){
  $.ajax({
    type: "GET",
    url: this.server,
    data: data,
    success: console.log('got it', data),
    dataType: JSON
  });
};

app.clearMessages = function(){
  $('#chats').children().empty();
}
