var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$button.off('click');
    this.$button.on('click', Rooms.add );
  },

  renderRoom: function(roomname) {
    var html = `<option value="${roomname}" ${roomname} </option>`;
    this.$select.append(html);
  }

};