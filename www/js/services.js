angular.module('starter.services', [])

.factory('Places', function() {

  var places = [
    {
      id: 0,
      name: "Uludag",
      city: "Bursa",
      distance: 122,
      coord:{
        lat: 40.069444,
        lng: 29.221389
      },
      image: [
        "http://placehold.it/300x200"
      ]
    },
    {
      id: 1,
      name: "Kartalkaya",
      city: "Bolu",
      distance: 154,
      coord:{
        lat: 40.695467,
        lng: 31.763187
      },
      image: [
        "http://placehold.it/300x200"
      ]
    },
    {
      id: 2,
      name: "Sarikamis",
      city: "Kars",
      distance: 1024,
      coord:{
        lat: 40.331921,
        lng: 42.595169
      },
      image: [
        "http://placehold.it/300x200"
      ]
    },
    {
      id: 3,
      name: "Palandoken",
      city: "Erzurum",
      distance: 1120,
      coord:{
        lat: 39.908611,
        lng: 41.276944
      },
      image: [
        "http://placehold.it/300x200"
      ]
    },
    {
      id: 4,
      name: "Ilgaz",
      city: "Ilgaz",
      distance: 345,
      coord:{
        lat: 40.924722,
            lng: 33.628333
      },
      image: [
        "http://placehold.it/300x200"
      ]
    },
    {
      id: 5,
      name: "Erciyes",
      city: "Kayseri",
      distance: 372,
      coord:{
        lat: 38.664407,
        lng: 35.468606
      },
      image: [
        "http://placehold.it/300x200"
      ]
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

.factory('Races', function(){
  var races = [
    {
      id:0,
      raceName: "Alp Disiplini 1. Etap",
      mName: "Uludag",
      cName: "Bursa",
      startDate: "1.Ocak.2014",
      endDate: "2.Ocak.2014",
      categories: [
        {
          id:0,
          catName: "Buyukler",
          sex: "Erkek",
          rDate: "2.Ocak.2014 12:00",
          rManager: "Metin Ozen",
          fedReporter: "Omer Anali",
          rSecretary: "Ismail Guldogan",
          headRef: [
            "Engin Ulukan",
            "Cemil Gungoren"
          ],
          electroHead:[
            "Refik Abay",
            "H. Ibrahim"
          ],
          race:[
            {
              rank: 1,
              fName: "Mustafa",
              lName: "Yildiz",
              point: 100,
              num: 4041,
              city: "Bursa",
              cName: "Bursa 16 Genclik Spor Kulubu",
              times: [
                "00:01:04.51"
              ],
              aTime:"00:01:04.51"
            },
            {
              rank: 2,
              fName: "Erdinc",
              lName: "Turksever",
              point: 80,
              num: 4042,
              city: "Erzurum",
              cName: "Dadaslar Spor Kulubu",
              times: [
                "00:01:04.54"
              ],
              aTime:"00:01:04.54"
            },
            {
              rank: 3,
              fName: "Ibrahim",
              lName: "Yildirim",
              point: 60,
              num: 4044,
              city: "Ilgaz",
              cName: "Yucedag Spor Kulubu",
              times: [
                "00:01:06.11"
              ],
              aTime:"00:01:06.11"
            },
            {
              rank: 4,
              fName: "Ali",
              lName: "Guzelciftci",
              point: 50,
              num: 4056,
              city: "Istanbul",
              cName: "Enka Spor Kulubu",
              times: [
                "00:01:08.01"
              ],
              aTime:"00:01:08.01"
            }
          ]
        },
        {
          id:1,
          catName: "Buyukler",
          sex: "Bayan",
          rDate: "2.Ocak.2014 14:00",
          rManager: "Metin Ozen",
          fedReporter: "Omer Anali",
          rSecretary: "Ismail Guldogan",
          headRef: [
            "Engin Ulukan",
            "Cemil Gungoren"
          ],
          electroHead:[
            "Refik Abay",
            "H. Ibrahim"
          ],
          race:[
            {
              rank: 1,
              fName: "Zehra",
              lName: "Yildirim",
              point: 100,
              num: 4041,
              city: "Bursa",
              cName: "Bursa 16 Genclik Spor Kulubu",
              times: [
                "00:01:04.51"
              ],
              aTime:"00:01:04.51"
            },
            {
              rank: 2,
              fName: "Ayse",
              lName: "Tuncer",
              point: 80,
              num: 4042,
              city: "Erzurum",
              cName: "Dadaslar Spor Kulubu",
              times: [
                "00:01:04.54"
              ],
              aTime:"00:01:04.54"
            },
            {
              rank: 3,
              fName: "Pelin",
              lName: "Aydin",
              point: 60,
              num: 4044,
              city: "Ilgaz",
              cName: "Yucedag Spor Kulubu",
              times: [
                "00:01:06.11"
              ],
              aTime:"00:01:06.11"
            },
            {
              rank: 4,
              fName: "Nur",
              lName: "Saffet",
              point: 50,
              num: 4056,
              city: "Istanbul",
              cName: "Enka Spor Kulubu",
              times: [
                "00:01:08.01"
              ],
              aTime:"00:01:08.01"
            }
          ]
        },
        {
          id:2,
          catName: "Yildiz",
          sex: "Erkek",
          rDate: "1.Ocak.2014 14:00",
          rManager: "Metin Ozen",
          fedReporter: "Omer Anali",
          rSecretary: "Ismail Guldogan",
          headRef: [
            "Engin Ulukan",
            "Cemil Gungoren"
          ],
          electroHead:[
            "Refik Abay",
            "H. Ibrahim"
          ],
          race:[
            {
              rank: 1,
              fName: "Zehra",
              lName: "Yildirim",
              point: 100,
              num: 4041,
              city: "Bursa",
              cName: "Bursa 16 Genclik Spor Kulubu",
              times: [
                "00:01:04.51"
              ],
              aTime:"00:01:04.51"
            },
            {
              rank: 2,
              fName: "Ayse",
              lName: "Tuncer",
              point: 80,
              num: 4042,
              city: "Erzurum",
              cName: "Dadaslar Spor Kulubu",
              times: [
                "00:01:04.54"
              ],
              aTime:"00:01:04.54"
            },
            {
              rank: 3,
              fName: "Pelin",
              lName: "Aydin",
              point: 60,
              num: 4044,
              city: "Ilgaz",
              cName: "Yucedag Spor Kulubu",
              times: [
                "00:01:06.11"
              ],
              aTime:"00:01:06.11"
            },
            {
              rank: 4,
              fName: "Nur",
              lName: "Saffet",
              point: 50,
              num: 4056,
              city: "Istanbul",
              cName: "Enka Spor Kulubu",
              times: [
                "00:01:08.01"
              ],
              aTime:"00:01:08.01"
            }
          ]
        },
        {
          id:3,
          catName: "Yildiz",
          sex: "Bayan",
          rDate: "1.Ocak.2014 12:00",
          rManager: "Metin Ozen",
          fedReporter: "Omer Anali",
          rSecretary: "Ismail Guldogan",
          headRef: [
            "Engin Ulukan",
            "Cemil Gungoren"
          ],
          electroHead:[
            "Refik Abay",
            "H. Ibrahim"
          ],
          race:[
            {
              rank: 1,
              fName: "Zehra",
              lName: "Yildirim",
              point: 100,
              num: 4041,
              city: "Bursa",
              cName: "Bursa 16 Genclik Spor Kulubu",
              times: [
                "00:01:04.51"
              ],
              aTime:"00:01:04.51"
            },
            {
              rank: 2,
              fName: "Ayse",
              lName: "Tuncer",
              point: 80,
              num: 4042,
              city: "Erzurum",
              cName: "Dadaslar Spor Kulubu",
              times: [
                "00:01:04.54"
              ],
              aTime:"00:01:04.54"
            },
            {
              rank: 3,
              fName: "Pelin",
              lName: "Aydin",
              point: 60,
              num: 4044,
              city: "Ilgaz",
              cName: "Yucedag Spor Kulubu",
              times: [
                "00:01:06.11"
              ],
              aTime:"00:01:06.11"
            },
            {
              rank: 4,
              fName: "Nur",
              lName: "Saffet",
              point: 50,
              num: 4056,
              city: "Istanbul",
              cName: "Enka Spor Kulubu",
              times: [
                "00:01:08.01"
              ],
              aTime:"00:01:08.01"
            }
          ]
        },
        {
          id:5,
          catName: "Minik",
          sex: "Erkek",
          rDate: "1.Ocak.2014 11:00",
          rManager: "Metin Ozen",
          fedReporter: "Omer Anali",
          rSecretary: "Ismail Guldogan",
          headRef: [
            "Engin Ulukan",
            "Cemil Gungoren"
          ],
          electroHead:[
            "Refik Abay",
            "H. Ibrahim"
          ],
          race:[
            {
              rank: 1,
              fName: "Zehra",
              lName: "Yildirim",
              point: 100,
              num: 4041,
              city: "Bursa",
              cName: "Bursa 16 Genclik Spor Kulubu",
              times: [
                "00:01:04.51"
              ],
              aTime:"00:01:04.51"
            },
            {
              rank: 2,
              fName: "Ayse",
              lName: "Tuncer",
              point: 80,
              num: 4042,
              city: "Erzurum",
              cName: "Dadaslar Spor Kulubu",
              times: [
                "00:01:04.54"
              ],
              aTime:"00:01:04.54"
            },
            {
              rank: 3,
              fName: "Pelin",
              lName: "Aydin",
              point: 60,
              num: 4044,
              city: "Ilgaz",
              cName: "Yucedag Spor Kulubu",
              times: [
                "00:01:06.11"
              ],
              aTime:"00:01:06.11"
            },
            {
              rank: 4,
              fName: "Nur",
              lName: "Saffet",
              point: 50,
              num: 4056,
              city: "Istanbul",
              cName: "Enka Spor Kulubu",
              times: [
                "00:01:08.01"
              ],
              aTime:"00:01:08.01"
            }
          ]
        },
        {
          id:5,
          catName: "Minik",
          sex: "Bayan",
          rDate: "1.Ocak.2014 10:00",
          rManager: "Metin Ozen",
          fedReporter: "Omer Anali",
          rSecretary: "Ismail Guldogan",
          headRef: [
            "Engin Ulukan",
            "Cemil Gungoren"
          ],
          electroHead:[
            "Refik Abay",
            "H. Ibrahim"
          ],
          race:[
            {
              rank: 1,
              fName: "Zehra",
              lName: "Yildirim",
              point: 100,
              num: 4041,
              city: "Bursa",
              cName: "Bursa 16 Genclik Spor Kulubu",
              times: [
                "00:01:04.51"
              ],
              aTime:"00:01:04.51"
            },
            {
              rank: 2,
              fName: "Ayse",
              lName: "Tuncer",
              point: 80,
              num: 4042,
              city: "Erzurum",
              cName: "Dadaslar Spor Kulubu",
              times: [
                "00:01:04.54"
              ],
              aTime:"00:01:04.54"
            },
            {
              rank: 3,
              fName: "Pelin",
              lName: "Aydin",
              point: 60,
              num: 4044,
              city: "Ilgaz",
              cName: "Yucedag Spor Kulubu",
              times: [
                "00:01:06.11"
              ],
              aTime:"00:01:06.11"
            },
            {
              rank: 4,
              fName: "Nur",
              lName: "Saffet",
              point: 50,
              num: 4056,
              city: "Istanbul",
              cName: "Enka Spor Kulubu",
              times: [
                "00:01:08.01"
              ],
              aTime:"00:01:08.01"
            }
          ]
        }
      ]
    }
  ];

  return {
    all: function() {
      return races;
    },
    getRace: function(raceId) {
      return races[raceId];
    },
    getRaceCategory: function(raceId,raceCatId) {
      return races[raceId].categories[raceCatId]
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
