// YOUR CODE HERE:
var app = {
  server : "https://api.parse.com/1/classes/chatterbox"
};

app.init = function(){

};


app.send = function(message){
  $.ajax({
    type: "POST",
    url: this.server,
    data: JSON.stringify(message),
    // dataType: "json",
    contentType: "text/plain",
    success: function(data){console.log(data)}
  });
};

app.fetch = function(data){
  $.ajax({
    type: "GET",
    url: this.server,
    data: data,
    contentType: "text/plain",
    success: function(data){console.log(data)}
  });
};

app.clearMessages = function(){
  $('#chats').children().remove();
}

app.addMessage = function(message){
  $('#chats').append("<div>" + message + "</div>");
}

app.addRoom = function(roomName){
  $('#roomSelect').append("<div>" + roomName + "</div>");
}
