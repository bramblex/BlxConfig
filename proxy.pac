
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
        'github',

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
        'twimg',

        // Redtube
        'redtube',
        'redtubefiles',
        'sex8',

        // v2ex
        'v2ex',

        // linkedin
        'linkedin',

        // atlassian
        'atlassian',

        // yourepeat
        'yourepeat',

        // blog
        'blogspot',
        'blogger',
        'blogblog',

        // vpngate
        'vpngate',
        'softether',
        'fqrouter',
        'amazonaws',

        // vpngate
        'creaders',

        // 60video.com
        '60video',

        // wp
        'wp',
        'gravatar',
        'choorucode',

        // brew
        //'bintray',

        'github',
        'stackoverflow',

        // Tor
        'torproject',

        'angularjs',

        '5digits',

        'lodash',
        //'*steam*',
        'python',

        'optimizely',

        'ithome',

        // univercity
        'sjsu',
    ]

    for (var i=white_list.length - 1; i >= 0; i--){
        var r = RegExp(prefix + white_list[i] + suffix, 'i');
        if (r.test(url)){
            return PROXY;
        }
    }

    return 'DIRECT';
}
