jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(a, b, c, d, e) {
        return jQuery.easing[jQuery.easing.def](a, b, c, d, e);
    },
    easeInQuad: function(a, b, c, d, e) {
        return d * (b /= e) * b + c;
    },
    easeOutQuad: function(a, b, c, d, e) {
        return -d * (b /= e) * (b - 2) + c;
    },
    easeInOutQuad: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c;
    },
    easeInCubic: function(a, b, c, d, e) {
        return d * (b /= e) * b * b + c;
    },
    easeOutCubic: function(a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b + 1) + c;
    },
    easeInOutCubic: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c;
    },
    easeInQuart: function(a, b, c, d, e) {
        return d * (b /= e) * b * b * b + c;
    },
    easeOutQuart: function(a, b, c, d, e) {
        return -d * ((b = b / e - 1) * b * b * b - 1) + c;
    },
    easeInOutQuart: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c;
    },
    easeInQuint: function(a, b, c, d, e) {
        return d * (b /= e) * b * b * b * b + c;
    },
    easeOutQuint: function(a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b * b * b + 1) + c;
    },
    easeInOutQuint: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c;
    },
    easeInSine: function(a, b, c, d, e) {
        return -d * Math.cos(b / e * (Math.PI / 2)) + d + c;
    },
    easeOutSine: function(a, b, c, d, e) {
        return d * Math.sin(b / e * (Math.PI / 2)) + c;
    },
    easeInOutSine: function(a, b, c, d, e) {
        return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c;
    },
    easeInExpo: function(a, b, c, d, e) {
        return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c;
    },
    easeOutExpo: function(a, b, c, d, e) {
        return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c;
    },
    easeInOutExpo: function(a, b, c, d, e) {
        return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c;
    },
    easeInCirc: function(a, b, c, d, e) {
        return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c;
    },
    easeOutCirc: function(a, b, c, d, e) {
        return d * Math.sqrt(1 - (b = b / e - 1) * b) + c;
    },
    easeInOutCirc: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c;
    },
    easeInElastic: function(a, b, c, d, e) {
        var f = 1.70158, g = 0, h = d;
        if (0 == b) return c;
        if (1 == (b /= e)) return c + d;
        if (g || (g = .3 * e), h < Math.abs(d)) {
            h = d;
            var f = g / 4;
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g)) + c;
    },
    easeOutElastic: function(a, b, c, d, e) {
        var f = 1.70158, g = 0, h = d;
        if (0 == b) return c;
        if (1 == (b /= e)) return c + d;
        if (g || (g = .3 * e), h < Math.abs(d)) {
            h = d;
            var f = g / 4;
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return h * Math.pow(2, -10 * b) * Math.sin(2 * (b * e - f) * Math.PI / g) + d + c;
    },
    easeInOutElastic: function(a, b, c, d, e) {
        var f = 1.70158, g = 0, h = d;
        if (0 == b) return c;
        if (2 == (b /= e / 2)) return c + d;
        if (g || (g = .3 * e * 1.5), h < Math.abs(d)) {
            h = d;
            var f = g / 4;
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return 1 > b ? -.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) * .5 + d + c;
    },
    easeInBack: function(a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c;
    },
    easeOutBack: function(a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c;
    },
    easeInOutBack: function(a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c;
    },
    easeInBounce: function(a, b, c, d, e) {
        return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c;
    },
    easeOutBounce: function(a, b, c, d, e) {
        return (b /= e) < 1 / 2.75 ? 7.5625 * d * b * b + c : 2 / 2.75 > b ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : 2.5 / 2.75 > b ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c;
    },
    easeInOutBounce: function(a, b, c, d, e) {
        return e / 2 > b ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c;
    }
});!function(a, b) {
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
}(jQuery, this);!function(a) {
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
});!function(a, b, c) {
    function d(b, c) {
        this.bodyOverflowX, this.callbacks = {
            hide: [],
            show: []
        }, this.checkInterval = null, this.Content, this.$el = a(b), this.$elProxy, this.elProxyPosition, 
        this.enabled = !0, this.options = a.extend({}, i, c), this.mouseIsOverProxy = !1, 
        this.namespace = "tooltipster-" + Math.round(1e5 * Math.random()), this.Status = "hidden", 
        this.timerHide = null, this.timerShow = null, this.$tooltip, this.options.iconTheme = this.options.iconTheme.replace(".", ""), 
        this.options.theme = this.options.theme.replace(".", ""), this._init();
    }
    function e(b, c) {
        var d = !0;
        return a.each(b, function(a, e) {
            return "undefined" == typeof c[a] || b[a] !== c[a] ? (d = !1, !1) : void 0;
        }), d;
    }
    function f() {
        return !k && j;
    }
    function g() {
        var a = c.body || c.documentElement, b = a.style, d = "transition";
        if ("string" == typeof b[d]) return !0;
        v = [ "Moz", "Webkit", "Khtml", "O", "ms" ], d = d.charAt(0).toUpperCase() + d.substr(1);
        for (var e = 0; e < v.length; e++) if ("string" == typeof b[v[e] + d]) return !0;
        return !1;
    }
    var h = "tooltipster", i = {
        animation: "fade",
        arrow: !0,
        arrowColor: "",
        autoClose: !0,
        content: null,
        contentAsHTML: !1,
        contentCloning: !0,
        debug: !0,
        delay: 200,
        minWidth: 0,
        maxWidth: null,
        functionInit: function(a, b) {},
        functionBefore: function(a, b) {
            b();
        },
        functionReady: function(a, b) {},
        functionAfter: function(a) {},
        hideOnClick: !1,
        icon: "(?)",
        iconCloning: !0,
        iconDesktop: !1,
        iconTouch: !1,
        iconTheme: "tooltipster-icon",
        interactive: !1,
        interactiveTolerance: 350,
        multiple: !1,
        offsetX: 0,
        offsetY: 0,
        onlyOne: !1,
        position: "top",
        positionTracker: !1,
        positionTrackerCallback: function(a) {
            "hover" == this.option("trigger") && this.option("autoClose") && this.hide();
        },
        restoration: "current",
        speed: 350,
        timer: 0,
        theme: "tooltipster-default",
        touchDevices: !0,
        trigger: "hover",
        updateAnimation: !0
    };
    d.prototype = {
        _init: function() {
            var b = this;
            if (c.querySelector) {
                var d = null;
                void 0 === b.$el.data("tooltipster-initialTitle") && (d = b.$el.attr("title"), void 0 === d && (d = null), 
                b.$el.data("tooltipster-initialTitle", d)), null !== b.options.content ? b._content_set(b.options.content) : b._content_set(d);
                var e = b.options.functionInit.call(b.$el, b.$el, b.Content);
                "undefined" != typeof e && b._content_set(e), b.$el.removeAttr("title").addClass("tooltipstered"), 
                !j && b.options.iconDesktop || j && b.options.iconTouch ? ("string" == typeof b.options.icon ? (b.$elProxy = a('<span class="' + b.options.iconTheme + '"></span>'), 
                b.$elProxy.text(b.options.icon)) : b.options.iconCloning ? b.$elProxy = b.options.icon.clone(!0) : b.$elProxy = b.options.icon, 
                b.$elProxy.insertAfter(b.$el)) : b.$elProxy = b.$el, "hover" == b.options.trigger ? (b.$elProxy.on("mouseenter." + b.namespace, function() {
                    (!f() || b.options.touchDevices) && (b.mouseIsOverProxy = !0, b._show());
                }).on("mouseleave." + b.namespace, function() {
                    (!f() || b.options.touchDevices) && (b.mouseIsOverProxy = !1);
                }), j && b.options.touchDevices && b.$elProxy.on("touchstart." + b.namespace, function() {
                    b._showNow();
                })) : "click" == b.options.trigger && b.$elProxy.on("click." + b.namespace, function() {
                    (!f() || b.options.touchDevices) && b._show();
                });
            }
        },
        _show: function() {
            var a = this;
            "shown" != a.Status && "appearing" != a.Status && (a.options.delay ? a.timerShow = setTimeout(function() {
                ("click" == a.options.trigger || "hover" == a.options.trigger && a.mouseIsOverProxy) && a._showNow();
            }, a.options.delay) : a._showNow());
        },
        _showNow: function(c) {
            var d = this;
            d.options.functionBefore.call(d.$el, d.$el, function() {
                if (d.enabled && null !== d.Content) {
                    c && d.callbacks.show.push(c), d.callbacks.hide = [], clearTimeout(d.timerShow), 
                    d.timerShow = null, clearTimeout(d.timerHide), d.timerHide = null, d.options.onlyOne && a(".tooltipstered").not(d.$el).each(function(b, c) {
                        var d = a(c), e = d.data("tooltipster-ns");
                        a.each(e, function(a, b) {
                            var c = d.data(b), e = c.status(), f = c.option("autoClose");
                            "hidden" !== e && "disappearing" !== e && f && c.hide();
                        });
                    });
                    var e = function() {
                        d.Status = "shown", a.each(d.callbacks.show, function(a, b) {
                            b.call(d.$el);
                        }), d.callbacks.show = [];
                    };
                    if ("hidden" !== d.Status) {
                        var f = 0;
                        "disappearing" === d.Status ? (d.Status = "appearing", g() ? (d.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-" + d.options.animation + "-show"), 
                        d.options.speed > 0 && d.$tooltip.delay(d.options.speed), d.$tooltip.queue(e)) : d.$tooltip.stop().fadeIn(e)) : "shown" === d.Status && e();
                    } else {
                        d.Status = "appearing";
                        var f = d.options.speed;
                        d.bodyOverflowX = a("body").css("overflow-x"), a("body").css("overflow-x", "hidden");
                        var h = "tooltipster-" + d.options.animation, i = "-webkit-transition-duration: " + d.options.speed + "ms; -webkit-animation-duration: " + d.options.speed + "ms; -moz-transition-duration: " + d.options.speed + "ms; -moz-animation-duration: " + d.options.speed + "ms; -o-transition-duration: " + d.options.speed + "ms; -o-animation-duration: " + d.options.speed + "ms; -ms-transition-duration: " + d.options.speed + "ms; -ms-animation-duration: " + d.options.speed + "ms; transition-duration: " + d.options.speed + "ms; animation-duration: " + d.options.speed + "ms;", k = d.options.minWidth ? "min-width:" + Math.round(d.options.minWidth) + "px;" : "", l = d.options.maxWidth ? "max-width:" + Math.round(d.options.maxWidth) + "px;" : "", m = d.options.interactive ? "pointer-events: auto;" : "";
                        if (d.$tooltip = a('<div class="tooltipster-base ' + d.options.theme + '" style="' + k + " " + l + " " + m + " " + i + '"><div class="tooltipster-content"></div></div>'), 
                        g() && d.$tooltip.addClass(h), d._content_insert(), d.$tooltip.appendTo("body"), 
                        d.reposition(), d.options.functionReady.call(d.$el, d.$el, d.$tooltip), g() ? (d.$tooltip.addClass(h + "-show"), 
                        d.options.speed > 0 && d.$tooltip.delay(d.options.speed), d.$tooltip.queue(e)) : d.$tooltip.css("display", "none").fadeIn(d.options.speed, e), 
                        d._interval_set(), a(b).on("scroll." + d.namespace + " resize." + d.namespace, function() {
                            d.reposition();
                        }), d.options.autoClose) if (a("body").off("." + d.namespace), "hover" == d.options.trigger) {
                            if (j && setTimeout(function() {
                                a("body").on("touchstart." + d.namespace, function() {
                                    d.hide();
                                });
                            }, 0), d.options.interactive) {
                                j && d.$tooltip.on("touchstart." + d.namespace, function(a) {
                                    a.stopPropagation();
                                });
                                var n = null;
                                d.$elProxy.add(d.$tooltip).on("mouseleave." + d.namespace + "-autoClose", function() {
                                    clearTimeout(n), n = setTimeout(function() {
                                        d.hide();
                                    }, d.options.interactiveTolerance);
                                }).on("mouseenter." + d.namespace + "-autoClose", function() {
                                    clearTimeout(n);
                                });
                            } else d.$elProxy.on("mouseleave." + d.namespace + "-autoClose", function() {
                                d.hide();
                            });
                            d.options.hideOnClick && d.$elProxy.on("click." + d.namespace + "-autoClose", function() {
                                d.hide();
                            });
                        } else "click" == d.options.trigger && (setTimeout(function() {
                            a("body").on("click." + d.namespace + " touchstart." + d.namespace, function() {
                                d.hide();
                            });
                        }, 0), d.options.interactive && d.$tooltip.on("click." + d.namespace + " touchstart." + d.namespace, function(a) {
                            a.stopPropagation();
                        }));
                    }
                    d.options.timer > 0 && (d.timerHide = setTimeout(function() {
                        d.timerHide = null, d.hide();
                    }, d.options.timer + f));
                }
            });
        },
        _interval_set: function() {
            var b = this;
            b.checkInterval = setInterval(function() {
                if (0 === a("body").find(b.$el).length || 0 === a("body").find(b.$elProxy).length || "hidden" == b.Status || 0 === a("body").find(b.$tooltip).length) ("shown" == b.Status || "appearing" == b.Status) && b.hide(), 
                b._interval_cancel(); else if (b.options.positionTracker) {
                    var c = b._repositionInfo(b.$elProxy), d = !1;
                    e(c.dimension, b.elProxyPosition.dimension) && ("fixed" === b.$elProxy.css("position") ? e(c.position, b.elProxyPosition.position) && (d = !0) : e(c.offset, b.elProxyPosition.offset) && (d = !0)), 
                    d || (b.reposition(), b.options.positionTrackerCallback.call(b, b.$el));
                }
            }, 200);
        },
        _interval_cancel: function() {
            clearInterval(this.checkInterval), this.checkInterval = null;
        },
        _content_set: function(a) {
            "object" == typeof a && null !== a && this.options.contentCloning && (a = a.clone(!0)), 
            this.Content = a;
        },
        _content_insert: function() {
            var a = this, b = this.$tooltip.find(".tooltipster-content");
            "string" != typeof a.Content || a.options.contentAsHTML ? b.empty().append(a.Content) : b.text(a.Content);
        },
        _update: function(a) {
            var b = this;
            b._content_set(a), null !== b.Content ? "hidden" !== b.Status && (b._content_insert(), 
            b.reposition(), b.options.updateAnimation && (g() ? (b.$tooltip.css({
                width: "",
                "-webkit-transition": "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                "-moz-transition": "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                "-o-transition": "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                "-ms-transition": "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                transition: "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms"
            }).addClass("tooltipster-content-changing"), setTimeout(function() {
                "hidden" != b.Status && (b.$tooltip.removeClass("tooltipster-content-changing"), 
                setTimeout(function() {
                    "hidden" !== b.Status && b.$tooltip.css({
                        "-webkit-transition": b.options.speed + "ms",
                        "-moz-transition": b.options.speed + "ms",
                        "-o-transition": b.options.speed + "ms",
                        "-ms-transition": b.options.speed + "ms",
                        transition: b.options.speed + "ms"
                    });
                }, b.options.speed));
            }, b.options.speed)) : b.$tooltip.fadeTo(b.options.speed, .5, function() {
                "hidden" != b.Status && b.$tooltip.fadeTo(b.options.speed, 1);
            }))) : b.hide();
        },
        _repositionInfo: function(a) {
            return {
                dimension: {
                    height: a.outerHeight(!1),
                    width: a.outerWidth(!1)
                },
                offset: a.offset(),
                position: {
                    left: parseInt(a.css("left")),
                    top: parseInt(a.css("top"))
                }
            };
        },
        hide: function(c) {
            var d = this;
            c && d.callbacks.hide.push(c), d.callbacks.show = [], clearTimeout(d.timerShow), 
            d.timerShow = null, clearTimeout(d.timerHide), d.timerHide = null;
            var e = function() {
                a.each(d.callbacks.hide, function(a, b) {
                    b.call(d.$el);
                }), d.callbacks.hide = [];
            };
            if ("shown" == d.Status || "appearing" == d.Status) {
                d.Status = "disappearing";
                var f = function() {
                    d.Status = "hidden", "object" == typeof d.Content && null !== d.Content && d.Content.detach(), 
                    d.$tooltip.remove(), d.$tooltip = null, a(b).off("." + d.namespace), a("body").off("." + d.namespace).css("overflow-x", d.bodyOverflowX), 
                    a("body").off("." + d.namespace), d.$elProxy.off("." + d.namespace + "-autoClose"), 
                    d.options.functionAfter.call(d.$el, d.$el), e();
                };
                g() ? (d.$tooltip.clearQueue().removeClass("tooltipster-" + d.options.animation + "-show").addClass("tooltipster-dying"), 
                d.options.speed > 0 && d.$tooltip.delay(d.options.speed), d.$tooltip.queue(f)) : d.$tooltip.stop().fadeOut(d.options.speed, f);
            } else "hidden" == d.Status && e();
            return d;
        },
        show: function(a) {
            return this._showNow(a), this;
        },
        update: function(a) {
            return this.content(a);
        },
        content: function(a) {
            return "undefined" == typeof a ? this.Content : (this._update(a), this);
        },
        reposition: function() {
            function c() {
                var c = a(b).scrollLeft();
                0 > C - c && (f = C - c, C = c), C + i - c > g && (f = C - (g + c - i), C = g + c - i);
            }
            function d(c, d) {
                h.offset.top - a(b).scrollTop() - j - F - 12 < 0 && d.indexOf("top") > -1 && (H = c), 
                h.offset.top + h.dimension.height + j + 12 + F > a(b).scrollTop() + a(b).height() && d.indexOf("bottom") > -1 && (H = c, 
                E = h.offset.top - j - F - 12);
            }
            var e = this;
            if (0 !== a("body").find(e.$tooltip).length) {
                e.$tooltip.css("width", ""), e.elProxyPosition = e._repositionInfo(e.$elProxy);
                var f = null, g = a(b).width(), h = e.elProxyPosition, i = e.$tooltip.outerWidth(!1), j = (e.$tooltip.innerWidth() + 1, 
                e.$tooltip.outerHeight(!1));
                if (e.$elProxy.is("area")) {
                    var k = e.$elProxy.attr("shape"), l = e.$elProxy.parent().attr("name"), m = a('img[usemap="#' + l + '"]'), n = m.offset().left, o = m.offset().top, p = void 0 !== e.$elProxy.attr("coords") ? e.$elProxy.attr("coords").split(",") : void 0;
                    if ("circle" == k) {
                        var q = parseInt(p[0]), r = parseInt(p[1]), s = parseInt(p[2]);
                        h.dimension.height = 2 * s, h.dimension.width = 2 * s, h.offset.top = o + r - s, 
                        h.offset.left = n + q - s;
                    } else if ("rect" == k) {
                        var q = parseInt(p[0]), r = parseInt(p[1]), t = parseInt(p[2]), u = parseInt(p[3]);
                        h.dimension.height = u - r, h.dimension.width = t - q, h.offset.top = o + r, h.offset.left = n + q;
                    } else if ("poly" == k) {
                        for (var v = 0, w = 0, x = 0, y = 0, z = "even", A = 0; A < p.length; A++) {
                            var B = parseInt(p[A]);
                            "even" == z ? (B > x && (x = B, 0 === A && (v = x)), v > B && (v = B), z = "odd") : (B > y && (y = B, 
                            1 == A && (w = y)), w > B && (w = B), z = "even");
                        }
                        h.dimension.height = y - w, h.dimension.width = x - v, h.offset.top = o + w, h.offset.left = n + v;
                    } else h.dimension.height = m.outerHeight(!1), h.dimension.width = m.outerWidth(!1), 
                    h.offset.top = o, h.offset.left = n;
                }
                var C = 0, D = 0, E = 0, F = parseInt(e.options.offsetY), G = parseInt(e.options.offsetX), H = e.options.position;
                if ("top" == H) {
                    var I = h.offset.left + i - (h.offset.left + h.dimension.width);
                    C = h.offset.left + G - I / 2, E = h.offset.top - j - F - 12, c(), d("bottom", "top");
                }
                if ("top-left" == H && (C = h.offset.left + G, E = h.offset.top - j - F - 12, c(), 
                d("bottom-left", "top-left")), "top-right" == H && (C = h.offset.left + h.dimension.width + G - i, 
                E = h.offset.top - j - F - 12, c(), d("bottom-right", "top-right")), "bottom" == H) {
                    var I = h.offset.left + i - (h.offset.left + h.dimension.width);
                    C = h.offset.left - I / 2 + G, E = h.offset.top + h.dimension.height + F + 12, c(), 
                    d("top", "bottom");
                }
                if ("bottom-left" == H && (C = h.offset.left + G, E = h.offset.top + h.dimension.height + F + 12, 
                c(), d("top-left", "bottom-left")), "bottom-right" == H && (C = h.offset.left + h.dimension.width + G - i, 
                E = h.offset.top + h.dimension.height + F + 12, c(), d("top-right", "bottom-right")), 
                "left" == H) {
                    C = h.offset.left - G - i - 12, D = h.offset.left + G + h.dimension.width + 12;
                    var J = h.offset.top + j - (h.offset.top + h.dimension.height);
                    if (E = h.offset.top - J / 2 - F, 0 > C && D + i > g) {
                        var K = 2 * parseFloat(e.$tooltip.css("border-width")), L = i + C - K;
                        e.$tooltip.css("width", L + "px"), j = e.$tooltip.outerHeight(!1), C = h.offset.left - G - L - 12 - K, 
                        J = h.offset.top + j - (h.offset.top + h.dimension.height), E = h.offset.top - J / 2 - F;
                    } else 0 > C && (C = h.offset.left + G + h.dimension.width + 12, f = "left");
                }
                if ("right" == H) {
                    C = h.offset.left + G + h.dimension.width + 12, D = h.offset.left - G - i - 12;
                    var J = h.offset.top + j - (h.offset.top + h.dimension.height);
                    if (E = h.offset.top - J / 2 - F, C + i > g && 0 > D) {
                        var K = 2 * parseFloat(e.$tooltip.css("border-width")), L = g - C - K;
                        e.$tooltip.css("width", L + "px"), j = e.$tooltip.outerHeight(!1), J = h.offset.top + j - (h.offset.top + h.dimension.height), 
                        E = h.offset.top - J / 2 - F;
                    } else C + i > g && (C = h.offset.left - G - i - 12, f = "right");
                }
                if (e.options.arrow) {
                    var M = "tooltipster-arrow-" + H;
                    if (e.options.arrowColor.length < 1) var N = e.$tooltip.css("background-color"); else var N = e.options.arrowColor;
                    if (f ? "left" == f ? (M = "tooltipster-arrow-right", f = "") : "right" == f ? (M = "tooltipster-arrow-left", 
                    f = "") : f = "left:" + Math.round(f) + "px;" : f = "", "top" == H || "top-left" == H || "top-right" == H) var O = parseFloat(e.$tooltip.css("border-bottom-width")), P = e.$tooltip.css("border-bottom-color"); else if ("bottom" == H || "bottom-left" == H || "bottom-right" == H) var O = parseFloat(e.$tooltip.css("border-top-width")), P = e.$tooltip.css("border-top-color"); else if ("left" == H) var O = parseFloat(e.$tooltip.css("border-right-width")), P = e.$tooltip.css("border-right-color"); else if ("right" == H) var O = parseFloat(e.$tooltip.css("border-left-width")), P = e.$tooltip.css("border-left-color"); else var O = parseFloat(e.$tooltip.css("border-bottom-width")), P = e.$tooltip.css("border-bottom-color");
                    O > 1 && O++;
                    var Q = "";
                    if (0 !== O) {
                        var R = "", S = "border-color: " + P + ";";
                        -1 !== M.indexOf("bottom") ? R = "margin-top: -" + Math.round(O) + "px;" : -1 !== M.indexOf("top") ? R = "margin-bottom: -" + Math.round(O) + "px;" : -1 !== M.indexOf("left") ? R = "margin-right: -" + Math.round(O) + "px;" : -1 !== M.indexOf("right") && (R = "margin-left: -" + Math.round(O) + "px;"), 
                        Q = '<span class="tooltipster-arrow-border" style="' + R + " " + S + ';"></span>';
                    }
                    e.$tooltip.find(".tooltipster-arrow").remove();
                    var T = '<div class="' + M + ' tooltipster-arrow" style="' + f + '">' + Q + '<span style="border-color:' + N + ';"></span></div>';
                    e.$tooltip.append(T);
                }
                e.$tooltip.css({
                    top: Math.round(E) + "px",
                    left: Math.round(C) + "px"
                });
            }
            return e;
        },
        enable: function() {
            return this.enabled = !0, this;
        },
        disable: function() {
            return this.hide(), this.enabled = !1, this;
        },
        destroy: function() {
            var b = this;
            b.hide(), b.$el[0] !== b.$elProxy[0] && b.$elProxy.remove(), b.$el.removeData(b.namespace).off("." + b.namespace);
            var c = b.$el.data("tooltipster-ns");
            if (1 === c.length) {
                var d = null;
                "previous" === b.options.restoration ? d = b.$el.data("tooltipster-initialTitle") : "current" === b.options.restoration && (d = "string" == typeof b.Content ? b.Content : a("<div></div>").append(b.Content).html()), 
                d && b.$el.attr("title", d), b.$el.removeClass("tooltipstered").removeData("tooltipster-ns").removeData("tooltipster-initialTitle");
            } else c = a.grep(c, function(a, c) {
                return a !== b.namespace;
            }), b.$el.data("tooltipster-ns", c);
            return b;
        },
        elementIcon: function() {
            return this.$el[0] !== this.$elProxy[0] ? this.$elProxy[0] : void 0;
        },
        elementTooltip: function() {
            return this.$tooltip ? this.$tooltip[0] : void 0;
        },
        option: function(a, b) {
            return "undefined" == typeof b ? this.options[a] : (this.options[a] = b, this);
        },
        status: function() {
            return this.Status;
        }
    }, a.fn[h] = function() {
        var b = arguments;
        if (0 === this.length) {
            if ("string" == typeof b[0]) {
                var c = !0;
                switch (b[0]) {
                  case "setDefaults":
                    a.extend(i, b[1]);
                    break;

                  default:
                    c = !1;
                }
                return c ? !0 : this;
            }
            return this;
        }
        if ("string" == typeof b[0]) {
            var e = "#*$~&";
            return this.each(function() {
                var c = a(this).data("tooltipster-ns"), d = c ? a(this).data(c[0]) : null;
                if (!d) throw new Error("You called Tooltipster's \"" + b[0] + '" method on an uninitialized element');
                if ("function" != typeof d[b[0]]) throw new Error('Unknown method .tooltipster("' + b[0] + '")');
                var f = d[b[0]](b[1], b[2]);
                return f !== d ? (e = f, !1) : void 0;
            }), "#*$~&" !== e ? e : this;
        }
        var f = [], g = b[0] && "undefined" != typeof b[0].multiple, h = g && b[0].multiple || !g && i.multiple, j = b[0] && "undefined" != typeof b[0].debug, k = j && b[0].debug || !j && i.debug;
        return this.each(function() {
            var c = !1, e = a(this).data("tooltipster-ns"), g = null;
            e ? h ? c = !0 : k && console.log('Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.') : c = !0, 
            c && (g = new d(this, b[0]), e || (e = []), e.push(g.namespace), a(this).data("tooltipster-ns", e), 
            a(this).data(g.namespace, g)), f.push(g);
        }), h ? f : this;
    };
    var j = !!("ontouchstart" in b), k = !1;
    a("body").one("mousemove", function() {
        k = !0;
    });
}(jQuery, window, document);function closest(a, b) {
    for (var c = b[0], d = Math.abs(a - c), e = 0; e < b.length; e++) {
        var f = Math.abs(a - b[e]);
        d > f && (d = f, c = b[e]);
    }
    return c;
}jQuery.extend(jQuery.easing, {
    easeIn: function(a, b, c, d, e) {
        return jQuery.easing.easeInQuad(a, b, c, d, e);
    },
    easeOut: function(a, b, c, d, e) {
        return jQuery.easing.easeOutQuad(a, b, c, d, e);
    },
    easeInOut: function(a, b, c, d, e) {
        return jQuery.easing.easeInOutQuad(a, b, c, d, e);
    },
    expoin: function(a, b, c, d, e) {
        return jQuery.easing.easeInExpo(a, b, c, d, e);
    },
    expoout: function(a, b, c, d, e) {
        return jQuery.easing.easeOutExpo(a, b, c, d, e);
    },
    expoinout: function(a, b, c, d, e) {
        return jQuery.easing.easeInOutExpo(a, b, c, d, e);
    },
    bouncein: function(a, b, c, d, e) {
        return jQuery.easing.easeInBounce(a, b, c, d, e);
    },
    bounceout: function(a, b, c, d, e) {
        return jQuery.easing.easeOutBounce(a, b, c, d, e);
    },
    bounceinout: function(a, b, c, d, e) {
        return jQuery.easing.easeInOutBounce(a, b, c, d, e);
    },
    elasin: function(a, b, c, d, e) {
        return jQuery.easing.easeInElastic(a, b, c, d, e);
    },
    elasout: function(a, b, c, d, e) {
        return jQuery.easing.easeOutElastic(a, b, c, d, e);
    },
    elasinout: function(a, b, c, d, e) {
        return jQuery.easing.easeInOutElastic(a, b, c, d, e);
    },
    backin: function(a, b, c, d, e) {
        return jQuery.easing.easeInBack(a, b, c, d, e);
    },
    backout: function(a, b, c, d, e) {
        return jQuery.easing.easeOutBack(a, b, c, d, e);
    },
    backinout: function(a, b, c, d, e) {
        return jQuery.easing.easeInOutBack(a, b, c, d, e);
    }
});$.event.special.scrollstop.latency = 300;$(document).ready(function() {
    $(".tooltip").tooltipster({
        theme: "ws-tooltips"
    });
});var api_url = "api", template_class = ".overlayPanelBloc__", render_data_template = function(a) {
    var b = $("#" + $.bbq.getState("property")), c = $(a);
    return b.append(c), $(".overlayPanelBloc--close").click(function(a) {
        $(this).parent(".overlayPanelBloc").removeClass("open"), $(this).parent(".scrollerBloc--item").removeClass("scrollerBloc--item__open");
    }), b;
}, ajax_connect = function(a) {
    $.ajax({
        url: "api",
        type: "GET",
        data: a
    }).done(function(a) {
        console.log("response".response), $render_in = render_data_template(a.template), 
        console.log($render_in);
    }).fail(function(a) {
        console.warn(strip_tags(a.responseText.trim()), a.error());
    });
}, _api = function() {
    return state = $.bbq.getState(), render_if = $(template_class + state.pluck), console.log({
        "state.property": state.property,
        "state.pluck": state.pluck,
        render_if: render_if
    }), state.property && state.pluck && render_if.length <= 0 ? void ajax_connect(state) : (console.warn("data already loaded"), 
    !1);
};

$(window).bind("hashchange", _api);var panel_base_class = "overlayPanelBloc", panel_wrap_class = "scrollerBloc--item", $panel_toggles = $("." + panel_wrap_class + ' .action[href*="pluck="]'), overlayPanel_close = function(a) {
    a.parent("." + panel_wrap_class).removeClass(panel_wrap_class + "__open"), a.removeClass("open");
};

overlayPanel_render = function(a) {
    plucked = $.deparam(a.attr("href").split("#")[1]).pluck, $parent = a.closest("." + panel_wrap_class), 
    $panel = $parent.find("." + panel_base_class + "__" + plucked), $parent.addClass(panel_wrap_class + "__open"), 
    $panel.addClass("open"), console.log("js:overlayPanels", {
        addclass: "." + panel_base_class + "__open",
        plucked: plucked,
        parent: $parent,
        panel: $panel
    });
}, $panel_toggles.bind("click", function(a) {
    $self = $(this), $(window).one("haschange", overlayPanel_render($self));
}), $(window).on("haschange", function(a) {
    console.log("click:", event);
});var $scroller = $(".scrollerBloc"), $items = $scroller.children(".scrollerBloc--item"), scroll_speed = 250, scroll_stick = 138, scrolling = !1, scroll_last = 0, scroll_dir = 1;

scroll_init = !1;

var scroller_goto_item = function($item) {
    scrolling = "auto";
    var $item = "undefined" != typeof $item ? $item : scroller_item_at("center"), scrollTo = 0;
    return $scroller.animate({
        scrollLeft: function() {
            return widths = $item.prevAll().map(function() {
                return console.log($item), $item.outerWidth();
            }).toArray(), total = widths.length < 1 ? 0 : eval(widths.join("+")), view = $scroller.outerWidth(), 
            width = $item.outerWidth(), remains = view - width, scrollTo = total - remains / 2;
        }()
    }, scroll_speed, "easeInOut", function() {
        return scrolling = !1, !1;
    }), scrollTo;
}, scroller_item_at = function(a) {
    a = "undefined" != typeof a ? a : "center", a = function(a) {
        return "number" == typeof a ? a : "right" == a ? $scroller.outerWidth() : "left" == a ? 0 : $scroller.outerWidth() / 2;
    }(a);
    var b = {}, c = $items.map(function(a) {
        return offset = $(this).offset().left + $(this).width() / 2, b[offset] = $(this), 
        offset;
    });
    return $next_item = b[closest(a, c)], $next_item;
}, scroller_get_next_item = function(a) {
    if (!scrolling) return scroller_item_at();
    if (scroll_diff = Math.abs(scroll_last - $scroller.scrollLeft()), !scroll_diff >= scroll_stick) return scroller_item_at();
    var a = "undefined" != typeof a ? a : scroll_dir;
    return $cur = 1 == $items.filter(".current").length ? $items.filter(".current") : $items.first(), 
    $nxt = !1, $cur[0] !== scroller_item_at()[0] ? scroller_item_at() : (a >= 1 ? $nxt = 1 == $cur.next().length ? $cur.next() : !1 : $nxt = 1 == $cur.prev().length ? $cur.prev() : !1, 
    $nxt);
}, scroller_move_into_view = function() {
    var a = $scroller.offset().top, b = 1500, c = 35;
    $(window).scrollTop() > a + c && $.bbq.getState("property") && window.setTimeout(function() {
        $("html, body").stop().animate({
            scrollTop: a - c
        }, "250", "swing");
    }, b);
};

$(window).bind("hashchange", function(a) {
    $active = $("#" + $.bbq.getState("property")), $active.length >= 1 && (scroll_init = window.setTimeout(function() {
        scroller_goto_item($active);
    }, 2.5 * scroll_speed));
}), $items.click(function(a) {
    if (window.clearTimeout(scroll_init), $(this).hasClass("current")) {
        if (a.target !== $(this)[0]) return !0;
        $.bbq.removeState();
    } else $.bbq.pushState({
        property: $(this).attr("id")
    }, 2);
    return scroller_goto_item($(this)), $(this).siblings().removeClass("current"), $(this).toggleClass("current"), 
    !1;
}), $scroller.bind("scrollstart", function(a) {
    return window.clearTimeout(scroll_init), scrolling === !0 ? !1 : void ("auto" !== scrolling && (scroll_dir = scroll_last < $scroller.scrollLeft() ? 1 : -1, 
    scrolling = !0));
}).bind("scrollstop", function(a) {
    $next = scroller_get_next_item(), $next.siblings().removeClass("current"), $next.addClass("current"), 
    $.bbq.pushState({
        property: $next.attr("id")
    }, 2), "auto" !== scrolling && scroller_goto_item($next), scroll_last = $scroller.scrollLeft();
});$(document).ready(function() {
    $(window).hashchange();
});