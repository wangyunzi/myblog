'use strict';

// back-to-top
$(document).ready((function (_this) {
  return function () {
    let bt
    bt = $('#back_to_top')
    if ($(document).width() > 480) {
      $(window).scroll(function () {
        let st
        st = $(window).scrollTop()
        if (st > 30) {
          return bt.css('display', 'block')
        } else {
          return bt.css('display', 'none')
        }
      })
      return bt.click(function () {
        $('body,html').animate({
          scrollTop: 0,
        }, 800)
        return false
      })
    }
  }
})(this))

// nav-toggle
$(document).ready((function (_this) {
  return function () {
    let nav,icon
    icon = $('#menu_icon')
    nav = $('#site_nav')
    icon.click(function () {
      nav.slideToggle(250)
    })
  }
})(this))


// 文件位置：~/blog/node_modules/marked/lib/marked.js图片说明文字

Renderer.prototype.image = function(href, title, text) {
  if (this.options.baseUrl && !originIndependentUrl.test(href)) {
    href = resolveUrl(this.options.baseUrl, href);
  }
  var out = '<img src="' + href + '" alt="' + text + '"';
  if (title) {
    out += '>' + '<i class="img-caption">' + '◎ ' + title + '</i';
  }
  out += this.options.xhtml ? '/>' : '>';
  return out;
};
