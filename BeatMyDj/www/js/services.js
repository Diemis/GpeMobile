angular.module('starter.services', ['ui.calendar'])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'DJ burn',
    lastText: 'Hello, DJ de 23 ans du 77',
    face: 'img/5.jpg',
    style: 'Dance, Deep, Disco,	Electro, Funk, House, Latino, Rock,	Années 80, Années 90'
  }, {
    id: 1,
    name: 'Flodijou',
    lastText: 'Bonjour à tous, je suis un Dj amateur ne faisant que des mixs de ma composition',
    face: 'img/7.jpg',
    style: 'Electro, House'
  }, {
    id: 2,
    name: 'Maxou',
    lastText: 'Dj à mes heures perdues, je peux faire de votre soirée un événement inoubliable',
    face: 'img/8.jpg',
    style: 'Disco,	Funk,	Années 80,	Années 90'
  }, {
    id: 3,
    name: 'Dj dime',
    lastText: 'Dj amateur, je fais votre soirée sur mesure',
    face: 'img/9.jpg',
    style: 'Electro,	House,	Années 80,	Années 90'
  }, {
    id: 4,
    name: 'Djtest',
    lastText: 'Nouveau Dj sur la plateforme, je rendrais vos soirées inoubliables !!',
    face: 'img/7.png',
    style: 'Dance,	Deep,	Electro,	House'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
