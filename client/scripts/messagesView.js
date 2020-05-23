var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    this.$chats.off('click');
    this.$chats.on('click', '.username', Friends.toggleStatus);
  },

  render: function() {
    _.each(Messages, (message) => {
      var msg = MessageView.render(message);
      this.$chats.append(msg);
    });
  },

  renderMessage: function(message) {
    var msg = MessageView.render(message);
    this.$chats.append(msg);
  }
};
