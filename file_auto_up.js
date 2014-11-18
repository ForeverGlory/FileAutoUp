(function ($) {
  Drupal.behaviors.file_auto_up = {
    attach: function (context, settings) {
      $(".file-auto-up", context).each(function () {
        var $this = $(this);
        $(".form-file:file", $this).bind("change", function (e) {
          var files = e.target.files || e.dataTransfer.files;
          if (files && files.length) {
            $(".form-submit:submit", $this).trigger("mousedown");
          }
        }).trigger("change");
      });
    }
  };
})(jQuery);