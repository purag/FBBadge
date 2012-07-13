#Fancy Facebook Profile Badge

###Created by Purag Moumdjian
Facebook: [http://facebook.com/purmou](http://facebook.com/purmou) <br>
Twitter: [http://twitter.com/purmou](http://twitter.com/purmou)
    
###Version 1.0
07.12.2012
    
###Introduction
Facebook provides plugins for both a Subscribe button and a Like button. While these plugins work and serve their purpose, they ultimately fail when it comes to prominent identification of the user you're subscribing to or the page you're liking. My plugin attempts to fix that problem by showcasing a user's/page's timeline cover and profile photo alongside either a subscribe button for users and a like button for pages. <br>
The files are currently hosted live on my server at [http://shounig.com/fbfancy](http://shounig.com/fbfancy).
    
###Process
You enter parameters into the url that index.php parses for the page type and username. These values are written into data- attributes in the page, which the JS grabs and uses in the JSON call to the Graph API. The information returned from the JSON call are set as variables and used to construct the badge.
  
###Files
- [`.htacces`](FBBadge/.htaccess) (78B)
 - Rewrites `/[t]/[u]` to `?t=[t]&u=[u]`. `[t]` is the page type (`user` or `page`) and `[u]` is the username.
- [`examples.html`](FBBadge/example.html) (1.04KB)
 - Demonstrates usage of the iframe to use this plugin.
- [`fb.fancy.css`](FBBadge/fb.fancy.css) (877B)
 - CSS for the badge.
- [`fb.fancy.js`](FBBadge/fb.fancy.js) (1.96KB)
 - Uncompressed JS/jQuery. (for developers)
- [`fb.fancy.min.js`](FBBadge/fb.fancy.min.js) (1.21KB)
 - Compressed JS/jQuery.
- [`fb.fancy.tut.js`](FBBadge/fb.fancy.tut.js) (4.14KB)
 - Uncompressed JS/jQuery with comments. (for developers)
- [`index.php`](FBBadge/index.php) (1.66KB)
 - The page that grabs the URL parameters and holds the badge container and like and subscribe buttons.
    
###Instructions
Use this iframe on any page:
    <code><iframe src="http://shounig.com/fbfancy/[t]/[u]" scrolling="no" frameborder="0" style="border:none;width:300px;height:215px;" allowTransparency="true"></iframe></code>
Replace [t] with either 'user' or 'page' depending on what you're making the badge for.<br>
Replace [u] with the username of the profile or page.<br>
And that's it!
    
###To-Do List
- Make a setup page where anyone can enter their username and get embed code for their badge.