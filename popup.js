
/**
 * Shortens the url of the current tab and
 * shows it to the user.
 */
chrome.tabs.getSelected(null, function(tab) {
    var form = document.getElementById('output');
    var showShortened = function() {
        var html = this.responseText;

        if (html.match(/value="([^"]+)"/)) {
            form.setAttribute('value', RegExp.$1)
        } else {
            form.setAttribute('value', 'parsing b0rked')
        }

        form.focus();
    };
    var req = new XMLHttpRequest();
    var url = encodeURIComponent(tab.url);

    req.open(
        'GET',
        'http://blo.gr/index.php?format=simple&action=shorturl&url=' + url,
        true);
    req.onload = showShortened;
    req.send(null);
});
