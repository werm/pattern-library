  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML.replace(/(^\s+|\0)/gm, '');
  };

$.fn.xray = function() {
  this.each(function(){
    var source = $(this).html();
    $(this).append('<pre class="language-html"><code>' + escapeHtml(source) + '</code></pre>');
  });
};
