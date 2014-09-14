angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

.factory('Places', function() {

  var places = [
    {
      id: 0,
      name: "Uludag",
      city: "Bursa"
    },
    {
      id: 1,
      name: "Kartalkaya",
      city: "Bolu"
    },
    {
      id: 2,
      name: "Sarikamis",
      city: "Kars"
    },
    {
      id: 3,
      name: "Palandoken",
      city: "Erzurum"
    },
    {
      id: 4,
      name: "Ilgaz",
      city: "Ilgaz"
    },
    {
      id: 5,
      name: "Erciyes",
      city: "Kayseri"
    }
  ];

  return {
    all: function() {
      return places;
    },
    get: function(placeId) {
      return places[placeId];
    }
  }
})

.factory('News', function() {

  // Some fake testing data
  var news = [
    {
      id: 0,
      title: "TKF Websitesini Yeniliyor",
      date: "11.Eylul.2014",
      content: {
        image: ["http://placehold.it/300x200"],
        text: "Yaba daba duuuu"
      }
    },
    {
      id: 1,
      title: "Dunya Biathlon Konferansinda kapanis konusmasini Turkiye Yapti",
      date: "20.Agustos.2014",
      content: {
        image: ["http://placehold.it/300x200"],
        text: "Yaba daba duuuu"
      }
    },
    {
      id: 2,
      title: "Erzurumdaki Atlama Platformu 2015 sezonu icin hazirlaniyor",
      date: "17.Agustos.2014",
      content: {
        image: ["http://placehold.it/300x200"],
        text: "Yaba daba duuuu"
      }
    },
    {
      id: 3,
      title: "Ilgaz Tesislerinde Yeni Sezon Hareketli Gececek",
      date: "10.Agustos.2014",
      content: {
        image: ["http://placehold.it/300x200"],
        text: "Yaba daba duuuu"
      }
    },
    {
      id: 4,
      title: "TKF 2026ya Hazirlaniyor",
      date: "9.Agustos.2014",
      content: {
        image: ["http://placehold.it/300x200"],
        text: "Yaba daba duuuu"
      }
    }
  ];

  return {
    all: function() {
      return news;
    },
    get: function(newsId) {
      return news[newsId];
    }
  }
});
