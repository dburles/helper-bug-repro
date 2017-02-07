import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Animal = function (doc) {
  _.extend(this, doc);
};
_.extend(Animal.prototype, {
  makeNoise: function () {
    console.log(this.sound);
  }
});

testColl = new Mongo.Collection('test', {
	transform: function (doc) { return new Animal(doc); }
})

Meteor.startup(() => {

   testColl.remove({})

   var doc = {
	  "_id" : new Mongo.ObjectID("f2ff72d7aea28f135cc2af7a"),
   	"length" : 285113,
   	"md5" : "6aef61e386bc2f902dcc6720fc73878b",
   	"uploadDate" : new Date("2017-02-07T19:49:52.614Z"),
   	"chunkSize" : 2096128,
   	"filename" : "mercury-830.jpg",
   	"metadata" : {
   		"_auth" : {
   			"owner" : null
   		}
   	},
   	"aliases" : [ ],
   	"contentType" : "image/jpeg"
   }
   testColl.insert(doc)

   doc = {
   	"_id" : new Mongo.ObjectID("bbcd2c4efc15203695ff9f5c"),
   	"length" : 14203,
   	"md5" : "bdad9a616fa7940ce10e70e93a729c3d",
   	"uploadDate" : new Date("2017-02-07T19:49:52.641Z"),
   	"chunkSize" : 2096128,
   	"filename" : "Nerd_Dork_Geek_Venn_Diagram.jpg",
   	"metadata" : {
   		"_auth" : {
   			"owner" : null
   		}
   	},
   	"aliases" : [ ],
   	"contentType" : "image/jpeg"
   }
   testColl.insert(doc)

   doc = {
   	"_id" : new Mongo.ObjectID("5f803e9b0c0e53c94626ae2b"),
   	"length" : 133052,
   	"md5" : "6b46ca7972288f85d201ddabf0361b20",
   	"uploadDate" : new Date("2017-02-07T19:49:52.655Z"),
   	"chunkSize" : 2096128,
   	"filename" : "wholetown.JPG",
   	"metadata" : {
   		"_auth" : {
   			"owner" : null
   		}
   	},
   	"aliases" : [ ],
   	"contentType" : "image/jpeg"
   }
   testColl.insert(doc)

   // tests

   if (testColl.find().count() != 3)
      throw new Error("Initial document count is wrong")

   if (testColl.find(testColl.findOne()).count() != 1)
      throw new Error ("Initial find with document selector is wrong")

   // Add handler

  //  testColl.helpers({ foo: () => "bar" })

   // Rerun tests

   if (testColl.find().count() != 3)
      throw new Error ("Post-helper document count is wrong")

   if (testColl.find(testColl.findOne()).count() != 1)
      throw new Error ("Post-helper find with document selector is wrong")

});
