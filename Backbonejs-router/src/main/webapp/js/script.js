var Model = Backbone.Model.extend({
	defaults:
	{
		title:"newTitle",
		author:"no author"
	}
})

var View = Backbone.View.extend({
	events:
	{
		"click button[type=submit]":"eventUpdate"
		
	},
	
	initialize:function()
	{
		this.listenTo(this.model, "change", this.render)
	},
	
	render:function()
	{
		var dataJson = this.model.toJSON()
		this.$el.html(
				"<h1>"+dataJson.title+"</h1>"+
				"<span>"+dataJson.author+"</span>"+
				"<hr>"+
				"<form>"+
				"<label>New Title</label>"+
				"<input class='title-input' placeholder='new title'>"+
				
				"<label>New author<label>"+
				"<input class='author-input' placeholder='new author'>"+
				"<button type='submit'>ApplyChanges</button>"+
				
				"</form>"
				)
	},
	
	eventUpdate:function(evt)
	{
		evt.preventDefault()
		
		var $title = $("input.title-input", this.$el)
		var $author = $("input.author-input", this.$el)
		
		this.model.set({
			"title":$title.val(),
			"author":$author.val()
			
		})
	},
})

var book = new Model()

var Fview = new View({
	el:"#book-view",
	model:book
})

Fview.render()