(function ($) {
    Drupal.behaviors.file_auto_up = {
        attach: function (context, settings) {
            if (jQuery.type(settings.file_auto_up) == 'array') {
                jQuery.each(settings.file_auto_up, function (key, value) {
                    $("#" + value + "-upload", context).bind("change", function (e) {
                        var files = e.target.files || e.dataTransfer.files;
                        if (files && files.length) {
                            $("#" + value + "-upload-button", context).trigger("mousedown");
                        }
                    }).trigger("change");
                });
            }
        }
    };
})(jQuery);