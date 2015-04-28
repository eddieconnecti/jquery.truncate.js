/** 
 * jQuery Truncate
 * Copyright 2015 Kai Feldmaier (kai.feldmaier@gmail.com)
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */
( function( $ ) {
					 
	var TruncatePlugin = function( element, options )
	{
		var __e = $(element);
		var __o = this;
					
		/**
		 * @private
		 * Settings NS 
		 */
		var __s = $.extend({
						max: 100,
						collapsed: true,
						toggleBtnTitle: function(collapsed, total, max) 
						{
							return collapsed ? (total-max)+' more...' : 'hide '+(total-max);
						}
					}, options || {} );
					
		/**
		 * @private
		 * Class Variables NS 
		 */
		var __c = {
			collapsed: false,
			toggleBtn: null,
			type: null,
			TYPE_LIST: 'list',
			TYPE_TEXT: 'text',
			text: null
		};

		/**
		 * Toggle between full and toggled display
		 * @param animate (Boolean)
		 */
		this.toggle = function(animate)
		{
			__c.collapsed = !__c.collapsed;
			__o.applyCollapse(animate);
		};

		/**
		 * Set full or toggled display
		 * @param animate (Boolean)
		 */
		this.applyCollapse = function(animate)
		{
			if (__c.collapsed)
			{
				switch (__c.type)
				{
					case __c.TYPE_LIST:
						if (animate)
						{
							__e.find('li:not(.truncate-toggle):gt('+__s.max+')').each(function(index) {
							    $(this).delay(5*index).fadeOut(3);
							});
						} else {
							__e.find('li:not(.truncate-toggle):gt('+__s.max+')').hide();
						}
					  	break;
					 case __c.TYPE_TEXT:
						if (animate)
						{
							$({count:__c.text.length}).animate({count:__s.max}, {
							    duration: 1000,
							    step: function() {
							        __e.find('span:not(.truncate-toggle)').first().text( __c.text.substring(0, Math.round(this.count)) );
							    }
							});
						} else {
							__e.find('span:not(.truncate-toggle)').first().text(__c.text.substring(0, __s.max));
						}
					  	break;
				}
				__c.toggleBtn.find('a').html(__o.getTitle());
			} else {
				__c.toggleBtn.find('a').html(__o.getTitle());
				switch (__c.type)
				{
					case __c.TYPE_LIST:
						if (animate)
						{
							__e.find('li:not(.truncate-toggle):gt('+__s.max+')').each(function(index) {
							    $(this).delay(10*index).fadeIn(10);
							});
						} else {
							__e.find('li:not(.truncate-toggle):gt('+__s.max+')').show();
						}
					  	break;
					 case __c.TYPE_TEXT:
						if (animate)
						{
							$({count:__s.max}).animate({count:__c.text.length}, {
							    duration: 1000,
							    step: function() {
							        __e.find('span:not(.truncate-toggle)').first().text( __c.text.substring(0, Math.round(this.count)) );
							    }
							});
						} else {
							__e.find('span:not(.truncate-toggle)').first().text(__c.text);
						}
					  	break;
				}
			}
		};

		/**
		 * Create a title string which is displayed as a link at the end of the
		 * list/string 
		 */
		this.getTitle = function()
		{
			var total = 0;
			switch (__c.type)
			{
				case __c.TYPE_LIST:
					total = __e.find('li:not(.truncate-toggle)').length;
				  	break;
				 case __c.TYPE_TEXT:
					total = __e.text().length;
				  	break;
			}
			return __s.toggleBtnTitle(__c.collapsed, total, __s.max);
		};
		
		/**
		 *  Constructor
		 */
		var __construct = function()
		{

			__c.type = __e.is("ul") ? __c.TYPE_LIST : __e.find("span").length ? __c.TYPE_TEXT : null;

			switch (__c.type)
			{
				case __c.TYPE_LIST:
					__c.toggleBtn = $('<li class="truncate-toggle"><a href="#">more...</a></li>');
					__c.collapsed = __s.collapsed;
					__e.append(__c.toggleBtn);
					__c.toggleBtn.on('click', function(event){
						event.preventDefault();
						event.stopPropagation();
						__o.toggle(true);
					});
					__o.applyCollapse();
				  	break;
				 case __c.TYPE_TEXT:
				 	__c.text = __e.find("span").first().text();
					__c.toggleBtn = $('<span class="truncate-toggle"><a href="#">...</a></span>');
					__c.collapsed = __s.collapsed;
					__e.append(__c.toggleBtn);
					__c.toggleBtn.on('click', function(event){
						event.preventDefault();
						event.stopPropagation();
						__o.toggle(true);
					});
					__o.applyCollapse();
				  	break;
				default:
					throw('Element '+__e.prop('tagName')+' is not supported!');
				  	break;
			}
		}
		
		/**
		 * @private
		 */
		var __privateMethod = function()
		{
			__debug( '__privateMethod() called!' );
		};
		
		/**
		 *  @private
		 */
		var __debug = function ( $obj ) 
		{
			if ( window.console && window.console.log )
				window.console.log(arguments);
		};
		
		__construct();

	};

	$.fn.truncate = function (options)
	{
		return this.each(function()
		{
			var e = $(this);
			if (e.data('truncatePlugin')) 
				return;
			var truncatePlugin = new TruncatePlugin(this, options);
			e.data('truncatePlugin', truncatePlugin);
		});
	};
	
})( jQuery );
