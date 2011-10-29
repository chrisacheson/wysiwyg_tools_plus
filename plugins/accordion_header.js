(function ($) {
	Drupal.wysiwyg.plugins.accordion_header = {
	  invoke: function(data,settings,instanceId) {
			Drupal.wysiwyg.instances[instanceId].insert('<h5 class="ready-accordion-header">' + data.content + '</h5>');
		},
	}
}(jQuery));