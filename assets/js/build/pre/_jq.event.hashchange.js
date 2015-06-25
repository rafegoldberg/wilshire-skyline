!function(a, b) {
    "$:nomunge";
    function c(a) {
        return "string" == typeof a;
    }
    function d(a) {
        var b = w.call(arguments, 1);
        return function() {
            return a.apply(this, b.concat(w.call(arguments)));
        };
    }
    function e(a) {
        return a.replace(s, "$2");
    }
    function f(a) {
        return a.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/, "$1");
    }
    function g(b, d, e, f, g) {
        var h, i, l, n, o;
        return f !== j ? (l = e.match(b ? s : /^([^#?]*)\??([^#]*)(#?.*)/), o = l[3] || "", 
        2 === g && c(f) ? i = f.replace(b ? r : H, "") : (n = m(l[2]), f = c(f) ? m[b ? D : C](f) : f, 
        i = 2 === g ? f : 1 === g ? a.extend({}, f, n) : a.extend({}, n, f), i = k(i), b && (i = i.replace(t, x))), 
        h = l[1] + (b ? v : i || !l[1] ? "?" : "") + i + o) : h = d(e !== j ? e : location.href), 
        h;
    }
    function h(a, b, d) {
        return b === j || "boolean" == typeof b ? (d = b, b = y[a ? D : C]()) : b = c(b) ? b.replace(a ? r : H, "") : b, 
        m(b, d);
    }
    function i(b, d, e, f) {
        return c(e) || "object" == typeof e || (f = e, e = d, d = j), this.each(function() {
            var c = a(this), g = d || q()[(this.nodeName || "").toLowerCase()] || "", h = g && c.attr(g) || "";
            c.attr(g, y[b](h, e, f));
        });
    }
    var j, k, l, m, n, o, p, q, r, s, t, u, v, w = Array.prototype.slice, x = decodeURIComponent, y = a.param, z = a.bbq = a.bbq || {}, A = a.event.special, B = "hashchange", C = "querystring", D = "fragment", E = "elemUrlAttr", F = "href", G = "src", H = /^.*\?|#.*$/g, I = {};
    y[C] = d(g, 0, f), y[D] = l = d(g, 1, e), y.sorted = k = function(b, c) {
        var d = [], e = {};
        return a.each(y(b, c).split("&"), function(a, b) {
            var c = b.replace(/(?:%5B|=).*$/, ""), f = e[c];
            f || (f = e[c] = [], d.push(c)), f.push(b);
        }), a.map(d.sort(), function(a) {
            return e[a];
        }).join("&");
    }, l.noEscape = function(b) {
        b = b || "";
        var c = a.map(b.split(""), encodeURIComponent);
        t = new RegExp(c.join("|"), "g");
    }, l.noEscape(",/"), l.ajaxCrawlable = function(a) {
        return a !== j && (a ? (r = /^.*(?:#!|#)/, s = /^([^#]*)(?:#!|#)?(.*)$/, v = "#!") : (r = /^.*#/, 
        s = /^([^#]*)#?(.*)$/, v = "#"), u = !!a), u;
    }, l.ajaxCrawlable(0), a.deparam = m = function(b, c) {
        var d = {}, e = {
            "true": !0,
            "false": !1,
            "null": null
        };
        return a.each(b.replace(/\+/g, " ").split("&"), function(b, f) {
            var g, h = f.split("="), i = x(h[0]), k = d, l = 0, m = i.split("]["), n = m.length - 1;
            if (/\[/.test(m[0]) && /\]$/.test(m[n]) ? (m[n] = m[n].replace(/\]$/, ""), m = m.shift().split("[").concat(m), 
            n = m.length - 1) : n = 0, 2 === h.length) if (g = x(h[1]), c && (g = g && !isNaN(g) ? +g : "undefined" === g ? j : e[g] !== j ? e[g] : g), 
            n) for (;n >= l; l++) i = "" === m[l] ? k.length : m[l], k = k[i] = n > l ? k[i] || (m[l + 1] && isNaN(m[l + 1]) ? {} : []) : g; else a.isArray(d[i]) ? d[i].push(g) : d[i] !== j ? d[i] = [ d[i], g ] : d[i] = g; else i && (d[i] = c ? j : "");
        }), d;
    }, m[C] = d(h, 0), m[D] = n = d(h, 1), a[E] || (a[E] = function(b) {
        return a.extend(I, b);
    })({
        a: F,
        base: F,
        iframe: G,
        img: G,
        input: G,
        form: "action",
        link: F,
        script: G
    }), q = a[E], a.fn[C] = d(i, C), a.fn[D] = d(i, D), z.pushState = o = function(a, b) {
        c(a) && /^#/.test(a) && b === j && (b = 2);
        var d = a !== j, e = l(location.href, d ? a : {}, d ? b : 2);
        location.href = e;
    }, z.getState = p = function(a, b) {
        return a === j || "boolean" == typeof a ? n(a) : n(b)[a];
    }, z.removeState = function(b) {
        var c = {};
        b !== j && (c = p(), a.each(a.isArray(b) ? b : arguments, function(a, b) {
            delete c[b];
        })), o(c, 2);
    }, A[B] = a.extend(A[B], {
        add: function(b) {
            function c(a) {
                var b = a[D] = l();
                a.getState = function(a, c) {
                    return a === j || "boolean" == typeof a ? m(b, a) : m(b, c)[a];
                }, d.apply(this, arguments);
            }
            var d;
            return a.isFunction(b) ? (d = b, c) : (d = b.handler, void (b.handler = c));
        }
    });
}(jQuery, this), function(a, b, c) {
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
        i.start = function() {
            h || e();
        }, i.stop = function() {
            h && clearTimeout(h), h = c;
        };
        var o = navigator.userAgent.toLowerCase(), p = {
            msie: /msie/.test(o) && !/opera/.test(o)
        };
        return p.msie && !j && function() {
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