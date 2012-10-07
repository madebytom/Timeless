	/* MOBILE COLLAPSE MENU */
(function($) {
  $.fn.collapsable = function(options) {
    // iterate and reformat each matched element
    return this.each(function() {
      // cache this:
      var obj = $(this);
      var tree = obj.next('.navigation');
      obj.click(function(){
        if( obj.is(':visible') ){tree.slideToggle('fast');}
      });
      $(window).resize(function(){
        if ( $(window).width() >= 560 ){tree.slideDown('fast');};
      });
    });
  };
})(jQuery);