var HomeView = Backbone.View.extend({
	render:function(){
		this.$el.html("<h1>Home Page</h1>"+
		"<a href='#first'>Go to FirstView</a>"+	
		"<a href='#jfakffalf'>Go to Oops! page</a>"
		);
	}
});

var FirstView = Backbone.View.extend({
	render:function(){
		this.$el.html("<h1>First Page</h1>"+
				"<a href='#'>Go to HomePage</a>"		
		);
	}
});

var NoRouteView = Backbone.View.extend({
	render:function(){
		this.$el.html("<h1>Oops, looks like you typed the wrong URL....</h1>"+
				"<a href='#'>Go to HomePage</a>"	
		);
	}
});

var view
var AppRouter = Backbone.Router.extend({
	
	routes:{
		"":"home",
		"first":"routeToFirst",
		"*default":"noRoute"
	},
	
	home:function(){
		console.log("home route");
		
		 view = new HomeView({el:"#content"});
		view.render();
	},
	
	routeToFirst:function(){
		console.log("first route");
		 view = new FirstView({el:"#content"});
		view.render();
	},
	
	noRoute:function(){
		console.log("no route");
		 view = new NoRouteView({el:"#content1"});
		view.render();
	}
});

var route = new AppRouter();

Backbone.history.start();