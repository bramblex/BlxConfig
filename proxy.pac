
function FindProxyForURL(url, host) {
    // our local URLs from the domains below example.com don't need a proxy:
    //var PROXY = 'PROXY 127.0.0.1:16808';
    //var PROXY_SOCKS = 'PROXY 127.0.0.1:16809';
    var PROXY = 'PROXY 127.0.0.1:8119';

    var prefix = '^https?:\/\/[^\/]*'
    var suffix = '\\..*$'
    var white_list = [
        // Google
        'google[^.\/]*',
        'gstatic',
        'chrome',
        'gmail',

        // Flask documents
        'pocoo',

        // Git
        'githubusercontent',
        // Source forge
        'sourceforge',
        // Dropbox
        'dropbox',

        // Youtube
        'youtube',
        'ytimg',
        'ggpht',
        'doubleclick',

        // Wikipedia
        'wikipedia',

        // Facebook
        'facebook',

        // Twitter
        'twitter',

        // Redtube
        'redtube',

    ]

    for (var i=white_list.length - 1; i >= 0; i--){
        var r = RegExp(prefix + white_list[i] + suffix, 'i');
        if (r.test(url)){
            return PROXY;
        }
    }

    return 'DIRECT';
}
