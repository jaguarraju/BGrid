$(function() {
	$.widget("custom.rbstable", {
		// default options
		options : {
			red : 255,
			green : 0,
			blue : 0,
			url: '',

			// Callbacks
			change : null,
			random : null
		},

		// The constructor
		_create : function() {
			this.element.addClass("table table-hover");
			this.options.url = 'http://trirand.com/blog/jqgrid/server.php?q=2&_search=false&nd=1558213944679&rows=10&page=1&sidx=name&sord=asc';
			/*
			 * this.changer = $( "<button>", { text: "change", "class":
			 * "custom-colorize-changer" }) .appendTo( this.element ) .button();
			 *  // Bind click events on the changer button to the random method
			 * this._on( this.changer, { // _on won't call random when widget is
			 * disabled click: "random" });
			 */
			this._refresh();
		},

		// Called when created, and later when changing options
		_refresh : function() {
			$.ajax({
				url: this.options.url,
				type: 'GET',
				success: function(){
					
				}
			});
alert(10);
			// Trigger a callback/event
			this._trigger("change");
		},

		// A public method to change the color to a random value
		// can be called directly via .colorize( "random" )
		random : function(event) {

		},

		// Events bound via _on are removed automatically
		// revert other modifications here
		_destroy : function() {
			// remove generated elements
			// this.changer.remove();

			this.element.removeClass("table table-hover");
		},

		// _setOptions is called with a hash of all options that are changing
		// always refresh when changing options
		_setOptions : function() {
			// _super and _superApply handle keeping the right this-context
			this._superApply(arguments);
			this._refresh();
		},

		// _setOption is called for each individual option that is changing
		_setOption : function(key, value) {
			// prevent invalid color values
			this._super(key, value);
		}
	});

	// Initialize with default options
	$("table.rbstable").rbstable();

});