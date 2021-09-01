import $ from "jquery";


$(function () {
  var current;
  var $section = $('.scrollify'); // 各スライド
  var $pager = $('.jsc-pager'); // ページャー枠

  $.scrollify({
    section: ".scrollify",
    setHeights: false,
    easing: "swing",
    scrollSpeed: 600,
    scrollbars: true,
    before:function(index, section) {
      pagerCurrent(index);
    },
    afterRender:function() {
      createPager(); // ページャーの作成
    }
  });


// ページャーに対応する順番にクラス名を付与
function pagerCurrent(index = 0) {
  var $li = $pager.find('li');
  $li.removeClass('is-current');
  $li.eq(index).addClass('is-current');
}

// ページャーの作成
function createPager() {
  $section.each(function(i, e){
    // ページ内リンク先の作成
    var sectionName = $(e).attr('data-section-name');
    // 最初のliにはクラスを付与
    var addClass = '';
    if (i === 0) {
        addClass = 'is-current';
    }
    // liのHTML作成
    var html = '';
    html += '<li class="' + addClass + '">';
    html += '<a href="#' + sectionName + '"></a>';
    html += '</li>';
    $pager.append(html);
  });

  pagerLink();
}

// ページャーでaタグをクリックされたらスクロールする
function pagerLink () {
  $pager.find('a').on('click', function() {
    $.scrollify.move($(this).attr("href"));
  });
 }
});

