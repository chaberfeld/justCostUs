Purchases = new Mongo.Collection('purchases');

if (Meteor.isClient) {

  Meteor.startup(function () {
    Session.setDefault("templateName", "a00");
  // end Startup
  });

  Template.body.helpers({

    template_name: function() {
      return Session.get("templateName");
    }

  });

  Template.b00.events({
    'click .btn3': function() {
    Session.set("templateName", "a00");
    },
    'submit form': function(event) {   
    
      event.preventDefault();
      var price = event.target.price.value;
      var where = event.target.where.value;
      var detail = event.target.detail.value;
      Session.set("price",price);
      Session.set("where",where);
      Session.set("detail",detail);
      //console.log(price+" "+where+" "+detail);

      if (price != "" && where != "" && detail != "") {

        var searchArray = [  "(",
                            Session.get("catlong"),
                            ") paid $",
                            Session.get("price"),
                            " at ",
                            Session.get("where"),
                            " for ",
                            Session.get("detail")
                          ];

        var searchable = searchArray.join("");

        var townStateArray = [  Session.get("addressTown"), 
                                ", ",
                                Session.get("addressState") 
                            ];

        var townState = townStateArray.join("");




        Purchases.insert({
          createdAt: new Date(),
          townState: townState,
          user: "anon",
          searchable: searchable,
          cat: Session.get("cat"),
          addressFull: Session.get("addressFull"),
          lat: Session.get("lat"),
          lon: Session.get("lon"), 
          //town: Session.get("addressTown"), 
          //price: Session.get("price"),
          //where: Session.get("where"),
          //detail: Session.get("detail"),
        });

        Session.set("templateName", "a00");
      }
    }
  });

Template.a00.helpers({

    address: function() {
      return Session.get("addressFull");
    }

  });



  Template.b00.helpers({

    template_name: function() {
      return Session.get("templateName");
    },

    catlong: function() {
      return Session.get("catlong");
    },

    missing: function() {
      if (Session.get("price") == "" || Session.get("where") == "" || Session.get("detail") == "") {
        return "Something is missing";
      }
    },

    eg1: function() {
      var catEg = (Session.get("cat")+"eg1");
      return Session.get(catEg);
    },

    eg2: function() {
      var catEg = (Session.get("cat")+"eg2");
      return Session.get(catEg);
    },

    eg3: function() {
      var catEg = (Session.get("cat")+"eg3");
      return Session.get(catEg);
    },

  
  });

  Template.a00.events({
      'click .b01': function() {
        Session.set("cat", "b01");
        Session.set("catlong", "Food");
        Session.set("templateName", "b00");
        Session.set("b01eg1", "e.g. 3.99");
        Session.set("b01eg2", "e.g. S&S");
        Session.set("b01eg3", "e.g. gal milk");

    },
      'click .b02': function() {
        Session.set("cat", "b02");
        Session.set("catlong", "Drink");
        Session.set("templateName", "b00");
        Session.set("b02eg1", "e.g. 4");
        Session.set("b02eg2", "e.g. Starbucks");
        Session.set("b02eg3", "e.g. latte grande");
    },
      'click .b03': function() {
        Session.set("cat", "b03");
        Session.set("catlong", "Dining");
        Session.set("templateName", "b00");
        Session.set("b03eg1", "e.g. 9.95");
        Session.set("b03eg2", "e.g. Dinos");
        Session.set("b03eg3", "e.g. lobster roll");
    },
      'click .b04': function() {
        Session.set("cat", "b04");
        Session.set("catlong", "Cars");
        Session.set("templateName", "b00");
        Session.set("b04eg1", "e.g. 1700");
        Session.set("b04eg2", "e.g. Carmax");
        Session.set("b04eg3", "e.g. 2003 ford focus 110k mi");
    },
      'click .b05': function() {
        Session.set("cat", "b05");
        Session.set("catlong", "Fuel");
        Session.set("templateName", "b00");
        Session.set("b05eg1", "e.g. 3.35");
        Session.set("b05eg2", "e.g. Forbes");
        Session.set("b05eg3", "e.g. gas");
    },
      'click .b06': function() {
        Session.set("cat", "b06");
        Session.set("catlong", "Service");
        Session.set("templateName", "b00");
        Session.set("b06eg1", "e.g. 50/mo");
        Session.set("b06eg2", "e.g. danny 555-1234");
        Session.set("b06eg3", "e.g. snowplowing");
    },
      'click .b07': function() {
        Session.set("cat", "b07");
        Session.set("catlong", "Gadgets");
        Session.set("templateName", "b00");
        Session.set("b07eg1", "e.g. 400");
        Session.set("b07eg2", "e.g. Best Buy");
        Session.set("b07eg3", "e.g. iphone 7 64mb");
    },
      'click .b08': function() {
        Session.set("cat", "b08");
        Session.set("catlong", "Clothing");
        Session.set("templateName", "b00");
        Session.set("b08eg1", "e.g. 25");
        Session.set("b08eg2", "e.g. Bobs");
        Session.set("b08eg3", "e.g. levi jeans");
    },
      'click .b09': function() {
        Session.set("cat", "b09");
        Session.set("catlong", "Maj Aps");
        Session.set("templateName", "b00");
        Session.set("b09eg1", "e.g. 800");
        Session.set("b09eg2", "e.g. Lowes");
        Session.set("b09eg3", "e.g. GE refrigerator");
    },    
      'click .b10': function() {
        Session.set("cat", "b10");
        Session.set("catlong", "Repair");
        Session.set("templateName", "b00");
        Session.set("b10eg1", "e.g. 35");
        Session.set("b10eg2", "e.g. Mikes garage");
        Session.set("b10eg3", "e.g. oil change");
    },
      'click .b11': function() {
        Session.set("cat", "b11");
        Session.set("catlong", "Transport");
        Session.set("templateName", "b00");
        Session.set("b11eg1", "e.g. 120");
        Session.set("b11eg2", "e.g. CT limo");
        Session.set("b11eg3", "e.g. rnd trip JFK");
    },
      'click .b12': function() {
        Session.set("cat", "b12");
        Session.set("catlong", "Parts");
        Session.set("templateName", "b00");
        Session.set("b12eg1", "e.g. 9.50");
        Session.set("b12eg2", "e.g. Advance");
        Session.set("b12eg3", "e.g. wiper blades");
    },
      'click .b13': function() {
        Session.set("cat", "b13");
        Session.set("catlong", "Housing");
        Session.set("templateName", "b00");
        Session.set("b13eg1", "e.g. 1400/mo");
        Session.set("b13eg2", "e.g. 360 state");
        Session.set("b13eg3", "e.g. studio apt");
    },
      'click .b14': function() {
        Session.set("cat", "b14");
        Session.set("catlong", "Home");
        Session.set("templateName", "b00");
        Session.set("b14eg1", "e.g. 14.95");
        Session.set("b14eg2", "e.g. Home depot");
        Session.set("b14eg3", "e.g. 40lb grass seed");
    },
      'click .b15': function() {
        Session.set("cat", "b15");
        Session.set("catlong", "Exercise");
        Session.set("templateName", "b00");
        Session.set("b15eg1", "e.g. 300/yr");
        Session.set("b15eg2", "e.g. Golds gym");
        Session.set("b15eg3", "e.g. membership");
    },
      'click .b16': function() {
        Session.set("cat", "b16");
        Session.set("catlong", "Other");
        Session.set("templateName", "b00");
        Session.set("b16eg1", "e.g. 9");
        Session.set("b16eg2", "e.g. street vendor on York");
        Session.set("b16eg3", "e.g. flowers");
    },
    'submit form': function(event) {
        event.preventDefault();
        console.log("btn5");
        var searchWord = event.target.searchInp.value;
        if (searchWord != "") {
          Session.set("searchWord", searchWord);
          Session.set("templateName", "c00");
        }
      }

  });




  Template.c00.helpers( {
    'purchase': function() {
      //var myfield = "e";
      mysearch = Session.get("searchWord");
      var re = new RegExp(mysearch);
      console.log(re);
      return Purchases.find({ searchable:  { $regex: re, $options: "i"}}, {sort: {createdAt: -1}} );
    
    }
   

   // 'selectedClass': function(){
  //  var playerId = this._id;
   // var selectedPlayer = Session.get('selectedPlayer');
   // if(playerId == selectedPlayer){
    //  return "selected"
    //  }
   // }
  });

  Template.c00.events({
    'click .btn4': function() {
    Session.set("templateName", "a00");
    }
  });


// end Client -- Start Server
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

// end Server
}
// Distance filter for c00:
// Miles between user & reported price very approx =
// 70 * ( (lon2-lon1)^2 + (lat2-lat1)^2 )^1/2
// So calc distance, then only show if e.g. 30 miles or less
