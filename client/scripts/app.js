// YOUR CODE HERE:
var app = {
  server : "https://api.parse.com/1/classes/chatterbox",
  messages: []
};

app.init = function(){
  this.fetch();
  //console.log(messages.responseText);
  // _.each( , function(message){
  //   console.log(message, "yes");
  //   return this.addMessage(message.text);
  // } );

};


app.send = function(message){
  $.ajax({
    type: "POST",
    url: this.server,
    data: JSON.stringify(message),
    contentType: "text/plain"
    // success: function(data){console.log(data)}
  });
};

app.fetch = function(data){
  $.ajax({
    type: "GET",
    url: this.server,
    data: data,
    contentType: "text/plain",
    success: function(data){
      _.each( data.results, function(message){
        console.log(message);
        app.addMessage(message.text);
      });
    }
  });
};

app.clearMessages = function(){
  $('#chats').children().remove();
}

app.addMessage = function(message){
  if(message && message[0] !== '<'){
    $('#chats').append("<div>" + message + "</div>");
  }
}

app.addRoom = function(roomName){
  $('#roomSelect').append("<div>" + roomName + "</div>");
}
