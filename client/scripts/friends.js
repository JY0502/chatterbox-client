const friendList = [];

var Friends = {
  toggleStatus: function() {
    //$(this).text()  === username
    let username = $(this).text();
    if (username === undefined) {
      return;
    }
    let index = friendList.indexOf(username);
    // check if username is in frineList
    if (index > -1) {
      // we are goin to remove the name from the list
      // remove friend class from the chat tag
      friendList.splice(index, 1);
    } else {
    // otherwise we are going to add the name in the list
      // add friend class to the chat tag
      friendList.push(username);
    }

    //TODO

    if ($(this).parent().hasClass('friend')) {
      $(this).parent().removeClass('friend');
    } else {
      $(this).parent().addClass('friend');
    }
    //$(this).parent().css( 'background-color', 'red');
    //$(this).siblings('.message').addClass('friend');
  }

};