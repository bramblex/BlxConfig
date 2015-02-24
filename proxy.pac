
function FindProxyForURL(url, host) {
    // our local URLs from the domains below example.com don't need a proxy:
    //var PROXY = 'PROXY 127.0.0.1:16808';
    var PROXY = 'PROXY 127.0.0.1:8119';
    //var PROXY_SOCKS = 'PROXY 127.0.0.1:16809';

    var prefix = '^https?:\/\/[^\/]*';
    var suffix = '.(org|net|com|co\.jp|com\.hk|io|tv)/i';

    var white_list = [
        // Google
        /^https?:\/\/[^\/]*google[^\.\/]*\.(com|co\.jp|com\.hk)/i,
        /^https?:\/\/[^\/]*gstatic\.com/i,
        /^https?:\/\/[^\/]*chrome[^\.\/]*\.(com)/i,

        // Gmail
        /^https?:\/\/[^\/]*gmail\.com/i,

        // Youtube
        /^https?:\/\/[^\/]*youtube[^\.\/]*\.(com|co\.jp|com\.hk)/i,
        /^https?:\/\/[^\/]*ytimg[^\.\/]*\.(com|co\.jp|com\.hk)/i,
        /^https?:\/\/[^\/]*ggpht[^\.\/]*\.(com|co\.jp|com\.hk)/i,
        /^https?:\/\/[^\/]*doubleclick[^\.\/]*\.(net)/i,

        // Github
        /^https?:\/\/[^\/]*github[^\.\/]*\.(com|io)/i,

        // Wikipedia
        /^https?:\/\/[^\/]*wikipedia[^\.\/]*\.(org)/i,


        // Facebook
        /^https?:\/\/[^\/]*facebook[^\.\/]*\.(com)/i,

        // Facebook
        /^https?:\/\/[^\/]*twitter[^\.\/]*\.(com)/i,
        /^https?:\/\/t\.(co)/i,

        // Dropbox
        /^https?:\/\/[^\/]*dropbox[^\.\/]*\.(com)/i,

        // Source forge
        /^https?:\/\/[^\/]*sourceforge[^\.\/]*\.(net)/i,

        /^https?:\/\/[^\/]*wmtransfer[^\.\/]*\.(com)/i,

        /^https?:\/\/[^\/]*recaptcha[^\.\/]*\.(net)/i,

        /^https?:\/\/[^\/]redtube*[^\.\/]*\.(com|tv)/i,

        /pocoo.org/i,
    ];

    for (var i=0; i < white_list.length; i++){
        if (white_list[i].test(url))
            return PROXY;
    }
    //if (shExpMatch(url, 'https?://*.google.com*')){
        //return PROXY;
    //}
    //if (shExpMatch(url,'*.example.com/*'))                  {return 'DIRECT';}
    //if (shExpMatch(url, '*.example.com:*/*'))               {return 'DIRECT';}

    // URLs within this network are accessed through
    // port 8080 on fastproxy.example.com:
    //if (isInNet(host, '10.0.0.0',  '255.255.248.0'))    {
        //return 'PROXY fastproxy.example.com:8080';
    //}

    // All other requests go through port 8080 of proxy.example.com.
    // should that fail to respond, go directly to the WWW:

    //return PROXY;
    return 'DIRECT';
}
