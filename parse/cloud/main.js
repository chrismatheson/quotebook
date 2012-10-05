
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
	console.log("called hello function");
  response.success("Hello world!");
});


Parse.Cloud.define("random", function(request, response) {
  var Quotes = Parse.Collection.extend({
		initialize:function(){
			this.fetch({
				success: function(collection) {
					console.log('Data back from server');
				},
				error: function(collection, error) {
					console.error('The collection could not be retrieved.');
				}
			});
		},
		model: Quote
	});

	var Quote = Parse.Object.extend("Quotes",{
		defaults:{
			loc:'a location',
			meta:'some data',
			parts:[{"said":"something","who":"person"},{"said":"something else","who":"another person"}]
		}
	});
    
  response.success(new Quotes());
});