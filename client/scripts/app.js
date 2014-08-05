// YOUR CODE HERE:
var app = {
  server : "https://api.parse.com/1/classes/chatterbox",
};

app.init = function(){
  this.fetch();
};


app.send = function(message){
  $.ajax({
    type: "POST",
    url: this.server,
    data: JSON.stringify(message),
    contentType: "text/plain",
    success: function(){console.log("sent!")}
  });
};

app.fetch = function(data){
  $.ajax({
    type: "GET",
    url: "https://api.parse.com/1/classes/chatterbox?order=-createdAt",
    data: data,
    contentType: "text/plain",
    success: function(data){
      _.each( data.results, function(message){
        console.log(message);
        app.addMessage(message);
      });
    }
  });
};

app.clearMessages = function(){
  $('#chats').children().remove();
}

app.addMessage = function(message){
  if(message.text && message.text[0] !== '<'){
    if(!message.username){
      message.username = "Guest";
    }
    $('#chats').append("<div>" + message.username + ": " + message.text + "</div>");
  }
}

app.addRoom = function(roomName){
  $('#roomSelect').append("<div><a href='#chats' class=" + roomName + '>'+ roomName+ '</a></div>' );
}
