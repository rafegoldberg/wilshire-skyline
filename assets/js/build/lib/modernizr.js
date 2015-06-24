window.Modernizr = function(a, b, c) {
    function d(a) {
        s.cssText = a;
    }
    function e(a, b) {
        return typeof a === b;
    }
    function f(a, b) {
        return !!~("" + a).indexOf(b);
    }
    function g(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!f(e, "-") && s[e] !== c) return "pfx" == b ? e : !0;
        }
        return !1;
    }
    function h(a, b, d) {
        for (var f in a) {
            var g = b[a[f]];
            if (g !== c) return d === !1 ? a[f] : e(g, "function") ? g.bind(d || b) : g;
        }
        return !1;
    }
    function i(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1), f = (a + " " + x.join(d + " ") + d).split(" ");
        return e(b, "string") || e(b, "undefined") ? g(f, b) : (f = (a + " " + y.join(d + " ") + d).split(" "), 
        h(f, b, c));
    }
    function j() {
        n.input = function(c) {
            for (var d = 0, e = c.length; e > d; d++) C[c[d]] = !!(c[d] in t);
            return C.list && (C.list = !(!b.createElement("datalist") || !a.HTMLDataListElement)), 
            C;
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), 
        n.inputtypes = function(a) {
            for (var d, e, f, g = 0, h = a.length; h > g; g++) t.setAttribute("type", e = a[g]), 
            d = "text" !== t.type, d && (t.value = u, t.style.cssText = "position:absolute;visibility:hidden;", 
            /^range$/.test(e) && t.style.WebkitAppearance !== c ? (p.appendChild(t), f = b.defaultView, 
            d = f.getComputedStyle && "textfield" !== f.getComputedStyle(t, null).WebkitAppearance && 0 !== t.offsetHeight, 
            p.removeChild(t)) : /^(search|tel)$/.test(e) || (d = /^(url|email)$/.test(e) ? t.checkValidity && t.checkValidity() === !1 : t.value != u)), 
            B[a[g]] = !!d;
            return B;
        }("search tel url email datetime date month week time datetime-local number range color".split(" "));
    }
    var k, l, m = "2.8.3", n = {}, o = !0, p = b.documentElement, q = "modernizr", r = b.createElement(q), s = r.style, t = b.createElement("input"), u = ":)", v = ({}.toString, 
    " -webkit- -moz- -o- -ms- ".split(" ")), w = "Webkit Moz O ms", x = w.split(" "), y = w.toLowerCase().split(" "), z = {
        svg: "http://www.w3.org/2000/svg"
    }, A = {}, B = {}, C = {}, D = [], E = D.slice, F = function(a, c, d, e) {
        var f, g, h, i, j = b.createElement("div"), k = b.body, l = k || b.createElement("body");
        if (parseInt(d, 10)) for (;d--; ) h = b.createElement("div"), h.id = e ? e[d] : q + (d + 1), 
        j.appendChild(h);
        return f = [ "&#173;", '<style id="s', q, '">', a, "</style>" ].join(""), j.id = q, 
        (k ? j : l).innerHTML += f, l.appendChild(j), k || (l.style.background = "", l.style.overflow = "hidden", 
        i = p.style.overflow, p.style.overflow = "hidden", p.appendChild(l)), g = c(j, a), 
        k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), p.style.overflow = i), 
        !!g;
    }, G = function() {
        function a(a, f) {
            f = f || b.createElement(d[a] || "div"), a = "on" + a;
            var g = a in f;
            return g || (f.setAttribute || (f = b.createElement("div")), f.setAttribute && f.removeAttribute && (f.setAttribute(a, ""), 
            g = e(f[a], "function"), e(f[a], "undefined") || (f[a] = c), f.removeAttribute(a))), 
            f = null, g;
        }
        var d = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return a;
    }(), H = {}.hasOwnProperty;
    l = e(H, "undefined") || e(H.call, "undefined") ? function(a, b) {
        return b in a && e(a.constructor.prototype[b], "undefined");
    } : function(a, b) {
        return H.call(a, b);
    }, Function.prototype.bind || (Function.prototype.bind = function(a) {
        var b = this;
        if ("function" != typeof b) throw new TypeError();
        var c = E.call(arguments, 1), d = function() {
            if (this instanceof d) {
                var e = function() {};
                e.prototype = b.prototype;
                var f = new e(), g = b.apply(f, c.concat(E.call(arguments)));
                return Object(g) === g ? g : f;
            }
            return b.apply(a, c.concat(E.call(arguments)));
        };
        return d;
    }), A.flexbox = function() {
        return i("flexWrap");
    }, A.flexboxlegacy = function() {
        return i("boxDirection");
    }, A.touch = function() {
        var c;
        return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : F([ "@media (", v.join("touch-enabled),("), q, ")", "{#modernizr{top:9px;position:absolute}}" ].join(""), function(a) {
            c = 9 === a.offsetTop;
        }), c;
    }, A.hashchange = function() {
        return G("hashchange", a) && (b.documentMode === c || b.documentMode > 7);
    }, A.hsla = function() {
        return d("background-color:hsla(120,40%,100%,.5)"), f(s.backgroundColor, "rgba") || f(s.backgroundColor, "hsla");
    }, A.multiplebgs = function() {
        return d("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(s.background);
    }, A.borderimage = function() {
        return i("borderImage");
    }, A.csscolumns = function() {
        return i("columnCount");
    }, A.cssreflections = function() {
        return i("boxReflect");
    }, A.csstransforms3d = function() {
        var a = !!i("perspective");
        return a && "webkitPerspective" in p.style && F("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
            a = 9 === b.offsetLeft && 3 === b.offsetHeight;
        }), a;
    }, A.video = function() {
        var a = b.createElement("video"), c = !1;
        try {
            (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), 
            c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""));
        } catch (d) {}
        return c;
    }, A.audio = function() {
        var a = b.createElement("audio"), c = !1;
        try {
            (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), 
            c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), 
            c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""));
        } catch (d) {}
        return c;
    }, A.svg = function() {
        return !!b.createElementNS && !!b.createElementNS(z.svg, "svg").createSVGRect;
    }, A.inlinesvg = function() {
        var a = b.createElement("div");
        return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == z.svg;
    };
    for (var I in A) l(A, I) && (k = I.toLowerCase(), n[k] = A[I](), D.push((n[k] ? "" : "no-") + k));
    return n.input || j(), n.addTest = function(a, b) {
        if ("object" == typeof a) for (var d in a) l(a, d) && n.addTest(d, a[d]); else {
            if (a = a.toLowerCase(), n[a] !== c) return n;
            b = "function" == typeof b ? b() : b, "undefined" != typeof o && o && (p.className += " mdnz_" + (b ? "" : "no-") + a), 
            n[a] = b;
        }
        return n;
    }, d(""), r = t = null, function(a, b) {
        function c(a, b) {
            var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild);
        }
        function d() {
            var a = s.elements;
            return "string" == typeof a ? a.split(" ") : a;
        }
        function e(a) {
            var b = r[a[p]];
            return b || (b = {}, q++, a[p] = q, r[q] = b), b;
        }
        function f(a, c, d) {
            if (c || (c = b), k) return c.createElement(a);
            d || (d = e(c));
            var f;
            return f = d.cache[a] ? d.cache[a].cloneNode() : o.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), 
            !f.canHaveChildren || n.test(a) || f.tagUrn ? f : d.frag.appendChild(f);
        }
        function g(a, c) {
            if (a || (a = b), k) return a.createDocumentFragment();
            c = c || e(a);
            for (var f = c.frag.cloneNode(), g = 0, h = d(), i = h.length; i > g; g++) f.createElement(h[g]);
            return f;
        }
        function h(a, b) {
            b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, 
            b.frag = b.createFrag()), a.createElement = function(c) {
                return s.shivMethods ? f(c, a, b) : b.createElem(c);
            }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/[\w\-]+/g, function(a) {
                return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';
            }) + ");return n}")(s, b.frag);
        }
        function i(a) {
            a || (a = b);
            var d = e(a);
            return !s.shivCSS || j || d.hasCSS || (d.hasCSS = !!c(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), 
            k || h(a, d), a;
        }
        var j, k, l = "3.7.0", m = a.html5 || {}, n = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, o = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, p = "_html5shiv", q = 0, r = {};
        !function() {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>", j = "hidden" in a, k = 1 == a.childNodes.length || function() {
                    b.createElement("a");
                    var a = b.createDocumentFragment();
                    return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement;
                }();
            } catch (c) {
                j = !0, k = !0;
            }
        }();
        var s = {
            elements: m.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: l,
            shivCSS: m.shivCSS !== !1,
            supportsUnknownElements: k,
            shivMethods: m.shivMethods !== !1,
            type: "default",
            shivDocument: i,
            createElement: f,
            createDocumentFragment: g
        };
        a.html5 = s, i(b);
    }(this, b), n._version = m, n._prefixes = v, n._domPrefixes = y, n._cssomPrefixes = x, 
    n.hasEvent = G, n.testProp = function(a) {
        return g([ a ]);
    }, n.testAllProps = i, n.testStyles = F, p.className = p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (o ? " mdnz_js mdnz_" + D.join(" mdnz_") : ""), 
    n;
}(this, this.document), function(a, b, c) {
    function d(a) {
        return "[object Function]" == q.call(a);
    }
    function e(a) {
        return "string" == typeof a;
    }
    function f() {}
    function g(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a;
    }
    function h() {
        var a = r.shift();
        s = 1, a ? a.t ? o(function() {
            ("c" == a.t ? m.injectCss : m.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
        }, 0) : (a(), h()) : s = 0;
    }
    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!n && g(l.readyState) && (t.r = n = 1, !s && h(), l.onload = l.onreadystatechange = null, 
            b)) {
                "img" != a && o(function() {
                    v.removeChild(l);
                }, 50);
                for (var d in A[c]) A[c].hasOwnProperty(d) && A[c][d].onload();
            }
        }
        var j = j || m.errorTimeout, l = b.createElement(a), n = 0, q = 0, t = {
            t: d,
            s: c,
            e: f,
            a: i,
            x: j
        };
        1 === A[c] && (q = 1, A[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), 
        l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
            k.call(this, q);
        }, r.splice(e, 0, t), "img" != a && (q || 2 === A[c] ? (v.insertBefore(l, u ? null : p), 
        o(k, j)) : A[c].push(l));
    }
    function j(a, b, c, d, f) {
        return s = 0, b = b || "j", e(a) ? i("c" == b ? x : w, a, b, this.i++, c, d, f) : (r.splice(this.i++, 0, a), 
        1 == r.length && h()), this;
    }
    function k() {
        var a = m;
        return a.loader = {
            load: j,
            i: 0
        }, a;
    }
    var l, m, n = b.documentElement, o = a.setTimeout, p = b.getElementsByTagName("script")[0], q = {}.toString, r = [], s = 0, t = "MozAppearance" in n.style, u = t && !!b.createRange().compareNode, v = u ? n : p.parentNode, n = a.opera && "[object Opera]" == q.call(a.opera), n = !!b.attachEvent && !n, w = t ? "object" : n ? "script" : "img", x = n ? "script" : w, y = Array.isArray || function(a) {
        return "[object Array]" == q.call(a);
    }, z = [], A = {}, B = {
        timeout: function(a, b) {
            return b.length && (a.timeout = b[0]), a;
        }
    };
    m = function(a) {
        function b(a) {
            var b, c, d, a = a.split("!"), e = z.length, f = a.pop(), g = a.length, f = {
                url: f,
                origUrl: f,
                prefixes: a
            };
            for (c = 0; g > c; c++) d = a[c].split("="), (b = B[d.shift()]) && (f = b(f, d));
            for (c = 0; e > c; c++) f = z[c](f);
            return f;
        }
        function g(a, e, f, g, h) {
            var i = b(a), j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), 
            i.instead ? i.instead(a, e, f, g, h) : (A[i.url] ? i.noexec = !0 : A[i.url] = 1, 
            f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), 
            (d(e) || d(j)) && f.load(function() {
                k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), A[i.url] = 2;
            })));
        }
        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a)) c || (l = function() {
                        var a = [].slice.call(arguments);
                        m.apply(this, a), n();
                    }), g(a, l, b, 0, j); else if (Object(a) === a) for (i in h = function() {
                        var b, c = 0;
                        for (b in a) a.hasOwnProperty(b) && c++;
                        return c;
                    }(), a) a.hasOwnProperty(i) && (!c && !--h && (d(l) ? l = function() {
                        var a = [].slice.call(arguments);
                        m.apply(this, a), n();
                    } : l[i] = function(a) {
                        return function() {
                            var b = [].slice.call(arguments);
                            a && a.apply(this, b), n();
                        };
                    }(m[i])), g(a[i], l, b, i, j));
                } else !c && n();
            }
            var h, i, j = !!a.test, k = a.load || a.both, l = a.callback || f, m = l, n = a.complete || f;
            c(j ? a.yep : a.nope, !!k), k && c(k);
        }
        var i, j, l = this.yepnope.loader;
        if (e(a)) g(a, 0, l, 0); else if (y(a)) for (i = 0; i < a.length; i++) j = a[i], 
        e(j) ? g(j, 0, l, 0) : y(j) ? m(j) : Object(j) === j && h(j, l); else Object(a) === a && h(a, l);
    }, m.addPrefix = function(a, b) {
        B[a] = b;
    }, m.addFilter = function(a) {
        z.push(a);
    }, m.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", 
    b.addEventListener("DOMContentLoaded", l = function() {
        b.removeEventListener("DOMContentLoaded", l, 0), b.readyState = "complete";
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
        var k, l, n = b.createElement("script"), e = e || m.errorTimeout;
        n.src = a;
        for (l in d) n.setAttribute(l, d[l]);
        c = j ? h : c || f, n.onreadystatechange = n.onload = function() {
            !k && g(n.readyState) && (k = 1, c(), n.onload = n.onreadystatechange = null);
        }, o(function() {
            k || (k = 1, c(1));
        }, e), i ? n.onload() : p.parentNode.insertBefore(n, p);
    }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
        var j, e = b.createElement("link"), c = i ? h : c || f;
        e.href = a, e.rel = "stylesheet", e.type = "text/css";
        for (j in d) e.setAttribute(j, d[j]);
        g || (p.parentNode.insertBefore(e, p), o(c, 0));
    };
}(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0));
};