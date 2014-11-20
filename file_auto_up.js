(function ($) {
    Drupal.behaviors.file_auto_up = {
        attach: function (context, settings) {
            if (jQuery.type(settings.file_auto_up) == 'array') {
                jQuery.each(settings.file_auto_up, function (key, value) {
                    $("#" + value + " :file", context).bind("change", function (e) {
                        var files = e.target.files || e.dataTransfer.files;
                        if (files && files.length) {
                            $(this).next(":submit").trigger("mousedown");
                        }
                    }).trigger("change");
                });
            }
        }
    };
})(jQuery);