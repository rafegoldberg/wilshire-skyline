!function(a) {
    "function" == typeof define && define.amd ? define([ "jquery" ], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(jQuery);
}(function(a) {
    var b = a.event.dispatch || a.event.handle, c = a.event.special, d = "D" + +new Date(), e = "D" + (+new Date() + 1);
    c.scrollstart = {
        setup: function(e) {
            var f, g = a.extend({
                latency: c.scrollstop.latency
            }, e), h = function(a) {
                var c = this, d = arguments;
                f ? clearTimeout(f) : (a.type = "scrollstart", b.apply(c, d)), f = setTimeout(function() {
                    f = null;
                }, g.latency);
            };
            a(this).bind("scroll", h).data(d, h);
        },
        teardown: function() {
            a(this).unbind("scroll", a(this).data(d));
        }
    }, c.scrollstop = {
        latency: 250,
        setup: function(d) {
            var f, g = a.extend({
                latency: c.scrollstop.latency
            }, d), h = function(a) {
                var c = this, d = arguments;
                f && clearTimeout(f), f = setTimeout(function() {
                    f = null, a.type = "scrollstop", b.apply(c, d);
                }, g.latency);
            };
            a(this).bind("scroll", h).data(e, h);
        },
        teardown: function() {
            a(this).unbind("scroll", a(this).data(e));
        }
    };
});