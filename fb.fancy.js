/*
  == Fancy Facebook Profile Badge ==
  Created by Purag Moumdjian
    Facebook: http://facebook.com/purmou
    Twitter: http://twitter.com/purmou
  Version 1.0
    07.12.2012
  == UNCOMPRESSED ==
*/
var fancy = $("#fb-fancy"),
    p = fancy.data("name");
$.getJSON("https://graph.facebook.com/" + p + "?fields=cover,picture,id,name,profile", function(v) {
    var cover = v["cover"]["source"],
        offset = 315 / 851 * v["cover"]["offset_y"],
        picture = 'https://graph.facebook.com/' + p + '/picture?type=large',
        url = 'http://facebook.com/' + v["id"],
        plc = $("<img>").attr('src', picture).appendTo(fancy),
        name = v["name"],
        plcw = plc.width(),
        plch = plc.height(),
        wh = function(t) {
            return (t === 'w') ? ((plcw > plch) ? '' : '55px') : ((plcw > plch) ? '55px' : '')
        };
    plc.remove();
    fancy.prepend(
        $("<div>").append(
            $("<a>").append(
                $("<img>").attr({
                    'class': 'fancy-cover-img',
                    'src': cover,
                    'alt': ''
                })
                .css("margin-top", "-" + offset.toString() + "px")
            )
            .attr("href", url)
        ).attr("class", "fancy-cover"),
        $("<div>").append(
            $("<a>").append(
                $("<img>").attr("src", "https://graph.facebook.com/" + p + "/picture?type=large")
                    .css({
                        'width': wh('w'),
                        'height': wh('h')
                    })
            ).attr({
                'href': url,
                'class': 'fancy-pic-link'
            })
        ).attr("class", "fancy-pic"),
        $("<div>").append(
            $("<a>")
                .text(name)
                .attr({
                    'href': url,
                    'class': 'fancy-username-link'
                })
        ).attr("class", "fancy-username")
    );
});