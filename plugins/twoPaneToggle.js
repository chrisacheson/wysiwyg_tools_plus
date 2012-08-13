(function ($) {
    Drupal.wysiwyg.plugins.twoPaneToggle = {
        invoke: function(data, settings, instanceId) {
            Drupal.wysiwyg.instances[instanceId].insert(
                '<div class="twoPaneToggle">'
                    + '<div class="twoPaneToggle-toc">200</div>'
                    + '<div class="twoPaneToggle-content">'
                    + '<div class="twoPaneToggle-contentInner">'
                    + '<h2>Content Item Header #1</h2>'
                    + '<p>'
                    + data.content
                    + '</p>'
                    + '</div></div></div>'
            );
        }
    }
}(jQuery));
