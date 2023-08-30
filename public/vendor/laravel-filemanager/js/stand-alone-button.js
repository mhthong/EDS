(function( $ ){

  $.fn.filemanager = function(type, options) {
    type = type || 'file';

    this.on('click', function(e) {
      var route_prefix = (options && options.prefix) ? options.prefix : '/filemanager';
      var target_input = $('#' + $(this).data('input'));
      var target_preview = $('#' + $(this).data('preview'));
      var popupWidth = 600; // Kích thước rộng của cửa sổ popup
      var popupHeight = 400; // Kích thước cao của cửa sổ popup
      var left = (screen.width - popupWidth) / 2;
      var top = (screen.height - popupHeight) / 2;
      
      var popupWindow = window.open(route_prefix + '?type=' + type, 'FileManager', 'width=' + popupWidth + ',height=' + popupHeight + ',top=' + top + ',left=' + left);
      
      window.SetUrl = function (items) {
        var file_path = items.map(function (item) {
          return item.url;
        }).join(',');

        // set the value of the desired input to image url
        target_input.val('').val(file_path).trigger('change');

        // clear previous preview
        target_preview.html('');

        // set or change the preview image src
        items.forEach(function (item) {
          target_preview.append(
            $('<img>').css('height', '5rem').attr('src', item.thumb_url)
          );
        });

        // trigger change event
        target_preview.trigger('change');
      };
      return false;
    });
  }

})(jQuery);
