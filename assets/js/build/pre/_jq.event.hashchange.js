!function(a, b, c) {
    "$:nomunge";
    function d(a) {
        return a = a || location.href, "#" + a.replace(/^[^#]*#?(.*)$/, "$1");
    }
    var e, f = "hashchange", g = document, h = a.event.special, i = g.documentMode, j = "on" + f in b && (i === c || i > 7);
    a.fn[f] = function(a) {
        return a ? this.bind(f, a) : this.trigger(f);
    }, a.fn[f].delay = 50, h[f] = a.extend(h[f], {
        setup: function() {
            return j ? !1 : void a(e.start);
        },
        teardown: function() {
            return j ? !1 : void a(e.stop);
        }
    }), e = function() {
        function e() {
            var c = d(), g = n(k);
            c !== k ? (m(k = c, g), a(b).trigger(f)) : g !== k && (location.href = location.href.replace(/#.*/, "") + g), 
            h = setTimeout(e, a.fn[f].delay);
        }
        var h, i = {}, k = d(), l = function(a) {
            return a;
        }, m = l, n = l;
        return i.start = function() {
            h || e();
        }, i.stop = function() {
            h && clearTimeout(h), h = c;
        }, navigator.userAgent.match(/msie [6]/i) && !j && function() {
            var b, c;
            i.start = function() {
                b || (c = a.fn[f].src, c = c && c + d(), b = a('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
                    c || m(d()), e();
                }).attr("src", c || "javascript:0").insertAfter("body")[0].contentWindow, g.onpropertychange = function() {
                    try {
                        "title" === event.propertyName && (b.document.title = g.title);
                    } catch (a) {}
                });
            }, i.stop = l, n = function() {
                return d(b.location.href);
            }, m = function(c, d) {
                var e = b.document, h = a.fn[f].domain;
                c !== d && (e.title = g.title, e.open(), h && e.write('<script>document.domain="' + h + '"</script>'), 
                e.close(), b.location.hash = c);
            };
        }(), i;
    }();
}(jQuery, this);