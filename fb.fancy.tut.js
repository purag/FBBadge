/*
  == Fancy Facebook Profile Badge ==
  Created by Purag Moumdjian
    Facebook: http://facebook.com/purmou
    Twitter: http://twitter.com/purmou
  Version 1.0
    07.12.2012
    
  == UNCOMPRESSED WITH COMMENTS ==
*/

// select badge container and assign it to the variable 'fancy'
var fancy = $("#fb-fancy"),
    
// assign the value of the data-name attribute to the variable 'p'
    p = fancy.data("name");

// make the JSON call to http://graph.facebook.com with name from earlier and certain attributes
$.getJSON("https://graph.facebook.com/" + p + "?fields=cover,picture,id,name,profile", function(v) {
    
    // set cover photo src
    var cover = v["cover"]["source"],
        
    // set cover photo y-offset
        offset = 315 / 851 * v["cover"]["offset_y"],
        
    // set profile photo url (large)
        picture = 'https://graph.facebook.com/' + p + '/picture?type=large',
        
    // set profile/page url
        url = 'http://facebook.com/' + v["id"],
    
    // create profile photo and append it temporarily to the badge container (to get dimensions)
        plc = $("<img>").attr('src', picture).appendTo(fancy),
    
    // set username
        name = v["name"],
        
    // get width of profile image (full size)
        plcw = plc.width(),
        
    // get height of profile image (full size)
        plch = plc.height(),
        
    // create a function that determines whether to set the height or width at 55px (this makes sure it fits the box)
        wh = function(t) {
            return (t === 'w') ? ((plcw > plch) ? '' : '55px') : ((plcw > plch) ? '55px' : '')
        };
            
    // remove the appended profile photo
    plc.remove();
            
    // begin prepending elements to the badge container
    fancy.prepend(
        
        // prepend a div
        $("<div>").append(
            
            // and append a link to that div
            $("<a>").append(
                
                // and append an image to that link and set attributes
                $("<img>").attr({
                    'class': 'fancy-cover-img',
                    'src': cover,
                    'alt': ''
                })
                
                // also set the image's margin-top (this accounts for the offset on the actual profile)
                .css("margin-top", "-" + offset.toString() + "px")
            )
            
            // set the href of the link to the user's or page's profile
            .attr("href", url)
            
        // set the class of the outer div
        ).attr("class", "fancy-cover"),
        
        // prepend a second div
        $("<div>").append(
            
            // append another link to that div
            $("<a>").append(
                
                // and another image to that link and set attributes
                $("<img>").attr("src", "https://graph.facebook.com/" + p + "/picture?type=large")
                
                    // also set profile photo's width and height using function that determines which to set expicitly
                    .css({
                        'width': wh('w'),
                        'height': wh('h')
                    })
                
            // set the href and class attributes of the containing link
            ).attr({
                'href': url,
                'class': 'fancy-pic-link'
            })
            
        // set the class of the outer div
        ).attr("class", "fancy-pic"),
        
        // prepend one final div
        $("<div>").append(
            
            // append a link to that
            $("<a>")
            
                // set the text of the link to the username
                .text(name)
            
                // set the href and class attribute of the link
                .attr({
                    'href': url,
                    'class': 'fancy-username-link'
                })
            
        // set the class of the outer div
        ).attr("class", "fancy-username")
    
    // close the .prepend()
    );
            
// close the JSON call
});