//================= Config Start ======================

// proxy config
var rules = [];
var direct = 'DIRECT';
var defalut = direct;

// SSLEdge Proxy
rules.push({
  proxy: 'PROXY 127.0.0.1:8119',
  list: [
    'wordpress.com',

    //google
    'google.com',
    'google.co.jp',
    'gmail.com',
    'gstatic.com',
    'googleusercontent.com',
    'googleapis.com',
    'goo.gl',
    'googlecode.com',
    'google-analytics.com',
    'googlevideo.com',

    //youtube
    'youtube.com',
    'ytimg.com',
    'ggpht.com',

    //facebook
    'facebook.com',
    'facebook.net',
    'akamaihd.net',

    //wikipedia.org
    'wikipedia.org',

    // porn
    'redtube.com',

    // onedrive
    'live.com',
    'dropbox.com',
    'sourceforge.net',

    // github
    'github.com',
    'github.io',
    'githubusercontent.com',

    // disqus
    'disqus.com',

    // wordpress
    'w.org',

    'twitter.com',
    'twimg.com',

    // eurekavpt.com
    'eurekavpt.com',

    // teamviewer.com
    'teamviewer.com',

    // reddit.com
    'reddit.com',
    'redditstatic.com',
    'redditmedia.com',

    // pastie.org
    'pastie.org',
    'haskell.org',
    'npmjs.com',

    'pixnet.net',

    'cilibaba.net',

    'v2ex.com',
  ]
});

rules.push({
    proxy: 'PROXY 0.0.0.0:0',
    list: [
        //'zhihu.com',
        //'zhihu.com',
        //'v2ex.com',
        //'weibo.com',
        //'baidu.com',
    ],
});

//================= Config End ======================

// cache white list into a hash
var _rules = {};
rules.forEach(function(rule){
    var list = rule.list;
    var length = list.length;
    var proxy = rule.proxy;
    for (var i = 0; i < length; i++){
      _rules[list[i]] = proxy;
    }
});

// get the root domain from a url
var reg = /https?:\/\/[^\/]*?(\w+\.\w+)\/.*/i;
var getRootDomain = function getRootDomain(url){
  return url.match(reg)[1];
};

// interface for PAC
var FindProxyForURL = function FindProxyForURL(url, host) {
  return _rules[getRootDomain(url)] || defalut;
};
