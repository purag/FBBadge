<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Fancy Facebook Profile Badge</title>
</head>
<body>
    <div id="fb-root"></div>
    <div id="fb-fancy" <?php echo ($_GET["t"] === 'user')?'data-sub':'data-like'; ?> data-name="<?php echo $_GET["u"]; ?>">
        <div class="fb-subscribe" data-href="https://www.facebook.com/<?php echo $_GET["u"]; ?>" data-show-faces="true" data-width="274"></div>
        <div class="fb-like" data-href="https://www.facebook.com/<?php echo $_GET["u"]; ?>" data-send="false" data-width="274" data-show-faces="true"></div>
    </div>
    <script type="text/javascript">
        (function(d,s,a){var jq,jqs=d.getElementsByTagName(s)[0];if(d.getElementById(a))return;jq=d.createElement(s);jq.id=a;jq.src="http://code.jquery.com/jquery-latest.min.js";jqs.parentNode.insertBefore(jq,jqs)}(document, 'script', 'jquery'));(function(d,s,a){var fb,fbs=d.getElementsByTagName(s)[0];if(d.getElementById(a))return;fb=d.createElement(s);fb.id=a;fb.src="//connect.facebook.net/en_US/all.js#xfbml=1&appId=390425591014033";fbs.parentNode.insertBefore(fb,fbs)}(document, 'script', 'facebook-jssdk'));(function(d,s,a){var fancy,fns=d.getElementsByTagName(s)[0];if(d.getElementById(a))return;fancy=d.createElement(s);fancy.id=a;fancy.src="http://shounig.com/fbfancy/fb.fancy.min.js";fns.parentNode.insertBefore(fancy,fns)}(document, 'script', 'facebook-fancy'));(function(d,s,a,h){var fancy=d.createElement(s);fancy.href='http://shounig.com/fbfancy/fb.fancy.css';fancy.rel='stylesheet';fancy.type='text/css';fancy.id=a;document.getElementsByTagName(h)[0].appendChild(fancy);})(document, 'link', 'facebook-fancy-css', 'head');
    </script>
</body>
</html>