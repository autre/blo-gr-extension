
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

        form.focus().select();
    };
    var req = new XMLHttpRequest();

    req.open(
        'GET',
        'http://blo.gr/index.php?format=simple&action=shorturl&url=' + tab.url,
        true);
    req.onload = showShortened;
    req.send(null);
});
