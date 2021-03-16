/**
 * @file
 * Replaced Drupal cores ajax throbber(s), see: https://www.drupal.org/node/2974681
 *
 */
(function ($, Drupal) {
  Drupal.theme.ajaxProgressThrobber = function () {
    return "<div class=\"ajax-spinner ajax-spinner--inline\"><span class=\"ajax-spinner__label\">" + Drupal.t('Loading&nbsp;&hellip;', {}, {
      context: "Loading text for Drupal cores Ajax throbber (inline)"
    }) + "</span></div>";
  };
  
  Drupal.theme.ajaxProgressIndicatorFullscreen = function () {
    let icon = '<svg xmlns="http:\/\/www.w3.org/2000/svg" width="0.7222in" height="0.5833in" viewBox="0 0 52 42"><defs><style>.a{fill:#256284;}.b{fill:#074051;}</style></defs><path class="a" d="M24.7037,31.1115l.0027-.001a13.8845,13.8845,0,0,1-3.6571-10.0138A16.391,16.391,0,0,1,25.1109,10.78a13.6893,13.6893,0,0,0-8.1358-4.1528c-5.8163.9973-10.292,7.0833-10.2922,14.4458h.0182C6.83,28.9959,12.1372,35.3715,18.67,35.3715c.1038,0,.2063-.0064.3094-.01l11.54.058A14.1023,14.1023,0,0,1,24.7037,31.1115Z"></path><path class="b" d="M33.6946,6.4812l-11.86.0595a15.6636,15.6636,0,0,1,6.0834,5.02l-.0048.001a15.4005,15.4005,0,0,1,3.1587,9.5A14.5634,14.5634,0,0,1,26.9951,31.42a12.7949,12.7949,0,0,0,11.0262,3.26c4.4746-2.1143,7.6486-7.4068,7.6486-13.6061C45.67,13.0147,40.3086,6.4812,33.6946,6.4812Z"></path></svg>';

    return "<div class=\"ajax-progress ajax-progress-fullscreen\"><span class=\"ajax-progress__label\">" + icon + "</span></div>";
  };
    // You can also customize only throbber message:
    // Drupal.theme.ajaxProgressMessage = message => '<div class="my-message">' + message + '</div>';
})(jQuery, Drupal);