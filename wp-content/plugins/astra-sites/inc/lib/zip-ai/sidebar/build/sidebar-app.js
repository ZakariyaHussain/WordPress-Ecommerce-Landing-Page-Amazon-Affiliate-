! function() {
    var e = {
            679: function(e, t, n) {
                "use strict";
                var i = n(864),
                    r = {
                        childContextTypes: !0,
                        contextType: !0,
                        contextTypes: !0,
                        defaultProps: !0,
                        displayName: !0,
                        getDefaultProps: !0,
                        getDerivedStateFromError: !0,
                        getDerivedStateFromProps: !0,
                        mixins: !0,
                        propTypes: !0,
                        type: !0
                    },
                    a = {
                        name: !0,
                        length: !0,
                        prototype: !0,
                        caller: !0,
                        callee: !0,
                        arguments: !0,
                        arity: !0
                    },
                    o = {
                        $$typeof: !0,
                        compare: !0,
                        defaultProps: !0,
                        displayName: !0,
                        propTypes: !0,
                        type: !0
                    },
                    s = {};

                function l(e) {
                    return i.isMemo(e) ? o : s[e.$$typeof] || r
                }
                s[i.ForwardRef] = {
                    $$typeof: !0,
                    render: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0
                }, s[i.Memo] = o;
                var c = Object.defineProperty,
                    u = Object.getOwnPropertyNames,
                    d = Object.getOwnPropertySymbols,
                    p = Object.getOwnPropertyDescriptor,
                    f = Object.getPrototypeOf,
                    h = Object.prototype;
                e.exports = function e(t, n, i) {
                    if ("string" != typeof n) {
                        if (h) {
                            var r = f(n);
                            r && r !== h && e(t, r, i)
                        }
                        var o = u(n);
                        d && (o = o.concat(d(n)));
                        for (var s = l(t), m = l(n), g = 0; g < o.length; ++g) {
                            var v = o[g];
                            if (!(a[v] || i && i[v] || m && m[v] || s && s[v])) {
                                var b = p(n, v);
                                try {
                                    c(t, v, b)
                                } catch (e) {}
                            }
                        }
                    }
                    return t
                }
            },
            885: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.CASE_SENSITIVE_TAG_NAMES_MAP = t.CASE_SENSITIVE_TAG_NAMES = void 0, t.CASE_SENSITIVE_TAG_NAMES = ["animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "linearGradient", "radialGradient", "textPath"], t.CASE_SENSITIVE_TAG_NAMES_MAP = t.CASE_SENSITIVE_TAG_NAMES.reduce((function(e, t) {
                    return e[t.toLowerCase()] = t, e
                }), {})
            },
            276: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = "html",
                    i = "head",
                    r = "body",
                    a = /<([a-zA-Z]+[0-9]?)/,
                    o = /<head[^]*>/i,
                    s = /<body[^]*>/i,
                    l = function(e, t) {
                        throw new Error("This browser does not support `document.implementation.createHTMLDocument`")
                    },
                    c = function(e, t) {
                        throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")
                    },
                    u = "object" == typeof window && window.DOMParser;
                if ("function" == typeof u) {
                    var d = new u;
                    l = c = function(e, t) {
                        return t && (e = "<".concat(t, ">").concat(e, "</").concat(t, ">")), d.parseFromString(e, "text/html")
                    }
                }
                if ("object" == typeof document && document.implementation) {
                    var p = document.implementation.createHTMLDocument();
                    l = function(e, t) {
                        if (t) {
                            var n = p.documentElement.querySelector(t);
                            return n && (n.innerHTML = e), p
                        }
                        return p.documentElement.innerHTML = e, p
                    }
                }
                var f, h = "object" == typeof document && document.createElement("template");
                h && h.content && (f = function(e) {
                    return h.innerHTML = e, h.content.childNodes
                }), t.default = function(e) {
                    var t, u, d = e.match(a),
                        p = d && d[1] ? d[1].toLowerCase() : "";
                    switch (p) {
                        case n:
                            var h = c(e);
                            return o.test(e) || null === (t = null == (g = h.querySelector(i)) ? void 0 : g.parentNode) || void 0 === t || t.removeChild(g), s.test(e) || null === (u = null == (g = h.querySelector(r)) ? void 0 : g.parentNode) || void 0 === u || u.removeChild(g), h.querySelectorAll(n);
                        case i:
                        case r:
                            var m = l(e).querySelectorAll(p);
                            return s.test(e) && o.test(e) ? m[0].parentNode.childNodes : m;
                        default:
                            return f ? f(e) : (g = l(e, r).querySelector(r)).childNodes;
                            var g
                    }
                }
            },
            152: function(e, t, n) {
                "use strict";
                var i = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i(n(276)),
                    a = n(507),
                    o = /<(![a-zA-Z\s]+)>/;
                t.default = function(e) {
                    if ("string" != typeof e) throw new TypeError("First argument must be a string");
                    if (!e) return [];
                    var t = e.match(o),
                        n = t ? t[1] : void 0;
                    return (0, a.formatDOM)((0, r.default)(e), null, n)
                }
            },
            507: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.formatDOM = t.formatAttributes = void 0;
                var i = n(584),
                    r = n(885);

                function a(e) {
                    for (var t = {}, n = 0, i = e.length; n < i; n++) {
                        var r = e[n];
                        t[r.name] = r.value
                    }
                    return t
                }

                function o(e) {
                    return function(e) {
                        return r.CASE_SENSITIVE_TAG_NAMES_MAP[e]
                    }(e = e.toLowerCase()) || e
                }
                t.formatAttributes = a, t.formatDOM = function e(t, n, r) {
                    void 0 === n && (n = null);
                    for (var s, l = [], c = 0, u = t.length; c < u; c++) {
                        var d = t[c];
                        switch (d.nodeType) {
                            case 1:
                                var p = o(d.nodeName);
                                (s = new i.Element(p, a(d.attributes))).children = e("template" === p ? d.content.childNodes : d.childNodes, s);
                                break;
                            case 3:
                                s = new i.Text(d.nodeValue);
                                break;
                            case 8:
                                s = new i.Comment(d.nodeValue);
                                break;
                            default:
                                continue
                        }
                        var f = l[c - 1] || null;
                        f && (f.next = s), s.parent = n, s.prev = f, s.next = null, l.push(s)
                    }
                    return r && ((s = new i.ProcessingInstruction(r.substring(0, r.indexOf(" ")).toLowerCase(), r)).next = l[0] || null, s.parent = n, l.unshift(s), l[1] && (l[1].prev = l[0])), l
                }
            },
            953: function(e, t) {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.Doctype = t.CDATA = t.Tag = t.Style = t.Script = t.Comment = t.Directive = t.Text = t.Root = t.isTag = t.ElementType = void 0,
                    function(e) {
                        e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype"
                    }(n = t.ElementType || (t.ElementType = {})), t.isTag = function(e) {
                        return e.type === n.Tag || e.type === n.Script || e.type === n.Style
                    }, t.Root = n.Root, t.Text = n.Text, t.Directive = n.Directive, t.Comment = n.Comment, t.Script = n.Script, t.Style = n.Style, t.Tag = n.Tag, t.CDATA = n.CDATA, t.Doctype = n.Doctype
            },
            584: function(e, t, n) {
                "use strict";
                var i = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
                        void 0 === i && (i = n);
                        var r = Object.getOwnPropertyDescriptor(t, n);
                        r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                            enumerable: !0,
                            get: function() {
                                return t[n]
                            }
                        }), Object.defineProperty(e, i, r)
                    } : function(e, t, n, i) {
                        void 0 === i && (i = n), e[i] = t[n]
                    }),
                    r = this && this.__exportStar || function(e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || i(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.DomHandler = void 0;
                var a = n(953),
                    o = n(642);
                r(n(642), t);
                var s = {
                        withStartIndices: !1,
                        withEndIndices: !1,
                        xmlMode: !1
                    },
                    l = function() {
                        function e(e, t, n) {
                            this.dom = [], this.root = new o.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, "function" == typeof t && (n = t, t = s), "object" == typeof e && (t = e, e = void 0), this.callback = null != e ? e : null, this.options = null != t ? t : s, this.elementCB = null != n ? n : null
                        }
                        return e.prototype.onparserinit = function(e) {
                            this.parser = e
                        }, e.prototype.onreset = function() {
                            this.dom = [], this.root = new o.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null
                        }, e.prototype.onend = function() {
                            this.done || (this.done = !0, this.parser = null, this.handleCallback(null))
                        }, e.prototype.onerror = function(e) {
                            this.handleCallback(e)
                        }, e.prototype.onclosetag = function() {
                            this.lastNode = null;
                            var e = this.tagStack.pop();
                            this.options.withEndIndices && (e.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(e)
                        }, e.prototype.onopentag = function(e, t) {
                            var n = this.options.xmlMode ? a.ElementType.Tag : void 0,
                                i = new o.Element(e, t, void 0, n);
                            this.addNode(i), this.tagStack.push(i)
                        }, e.prototype.ontext = function(e) {
                            var t = this.lastNode;
                            if (t && t.type === a.ElementType.Text) t.data += e, this.options.withEndIndices && (t.endIndex = this.parser.endIndex);
                            else {
                                var n = new o.Text(e);
                                this.addNode(n), this.lastNode = n
                            }
                        }, e.prototype.oncomment = function(e) {
                            if (this.lastNode && this.lastNode.type === a.ElementType.Comment) this.lastNode.data += e;
                            else {
                                var t = new o.Comment(e);
                                this.addNode(t), this.lastNode = t
                            }
                        }, e.prototype.oncommentend = function() {
                            this.lastNode = null
                        }, e.prototype.oncdatastart = function() {
                            var e = new o.Text(""),
                                t = new o.CDATA([e]);
                            this.addNode(t), e.parent = t, this.lastNode = e
                        }, e.prototype.oncdataend = function() {
                            this.lastNode = null
                        }, e.prototype.onprocessinginstruction = function(e, t) {
                            var n = new o.ProcessingInstruction(e, t);
                            this.addNode(n)
                        }, e.prototype.handleCallback = function(e) {
                            if ("function" == typeof this.callback) this.callback(e, this.dom);
                            else if (e) throw e
                        }, e.prototype.addNode = function(e) {
                            var t = this.tagStack[this.tagStack.length - 1],
                                n = t.children[t.children.length - 1];
                            this.options.withStartIndices && (e.startIndex = this.parser.startIndex), this.options.withEndIndices && (e.endIndex = this.parser.endIndex), t.children.push(e), n && (e.prev = n, n.next = e), e.parent = t, this.lastNode = null
                        }, e
                    }();
                t.DomHandler = l, t.default = l
            },
            642: function(e, t, n) {
                "use strict";
                var i, r = this && this.__extends || (i = function(e, t) {
                        return i = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }, i(e, t)
                    }, function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                        function __() {
                            this.constructor = e
                        }
                        i(e, t), e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype, new __)
                    }),
                    a = this && this.__assign || function() {
                        return a = Object.assign || function(e) {
                            for (var t, n = 1, i = arguments.length; n < i; n++)
                                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            return e
                        }, a.apply(this, arguments)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.cloneNode = t.hasChildren = t.isDocument = t.isDirective = t.isComment = t.isText = t.isCDATA = t.isTag = t.Element = t.Document = t.CDATA = t.NodeWithChildren = t.ProcessingInstruction = t.Comment = t.Text = t.DataNode = t.Node = void 0;
                var o = n(953),
                    s = function() {
                        function e() {
                            this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null
                        }
                        return Object.defineProperty(e.prototype, "parentNode", {
                            get: function() {
                                return this.parent
                            },
                            set: function(e) {
                                this.parent = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "previousSibling", {
                            get: function() {
                                return this.prev
                            },
                            set: function(e) {
                                this.prev = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "nextSibling", {
                            get: function() {
                                return this.next
                            },
                            set: function(e) {
                                this.next = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.cloneNode = function(e) {
                            return void 0 === e && (e = !1), E(this, e)
                        }, e
                    }();
                t.Node = s;
                var l = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return n.data = t, n
                    }
                    return r(t, e), Object.defineProperty(t.prototype, "nodeValue", {
                        get: function() {
                            return this.data
                        },
                        set: function(e) {
                            this.data = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(s);
                t.DataNode = l;
                var c = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.type = o.ElementType.Text, t
                    }
                    return r(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 3
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(l);
                t.Text = c;
                var u = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.type = o.ElementType.Comment, t
                    }
                    return r(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 8
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(l);
                t.Comment = u;
                var d = function(e) {
                    function t(t, n) {
                        var i = e.call(this, n) || this;
                        return i.name = t, i.type = o.ElementType.Directive, i
                    }
                    return r(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 1
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(l);
                t.ProcessingInstruction = d;
                var p = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return n.children = t, n
                    }
                    return r(t, e), Object.defineProperty(t.prototype, "firstChild", {
                        get: function() {
                            var e;
                            return null !== (e = this.children[0]) && void 0 !== e ? e : null
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "lastChild", {
                        get: function() {
                            return this.children.length > 0 ? this.children[this.children.length - 1] : null
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "childNodes", {
                        get: function() {
                            return this.children
                        },
                        set: function(e) {
                            this.children = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(s);
                t.NodeWithChildren = p;
                var f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.type = o.ElementType.CDATA, t
                    }
                    return r(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 4
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(p);
                t.CDATA = f;
                var h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.type = o.ElementType.Root, t
                    }
                    return r(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 9
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(p);
                t.Document = h;
                var m = function(e) {
                    function t(t, n, i, r) {
                        void 0 === i && (i = []), void 0 === r && (r = "script" === t ? o.ElementType.Script : "style" === t ? o.ElementType.Style : o.ElementType.Tag);
                        var a = e.call(this, i) || this;
                        return a.name = t, a.attribs = n, a.type = r, a
                    }
                    return r(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 1
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "tagName", {
                        get: function() {
                            return this.name
                        },
                        set: function(e) {
                            this.name = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "attributes", {
                        get: function() {
                            var e = this;
                            return Object.keys(this.attribs).map((function(t) {
                                var n, i;
                                return {
                                    name: t,
                                    value: e.attribs[t],
                                    namespace: null === (n = e["x-attribsNamespace"]) || void 0 === n ? void 0 : n[t],
                                    prefix: null === (i = e["x-attribsPrefix"]) || void 0 === i ? void 0 : i[t]
                                }
                            }))
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(p);

                function g(e) {
                    return (0, o.isTag)(e)
                }

                function v(e) {
                    return e.type === o.ElementType.CDATA
                }

                function b(e) {
                    return e.type === o.ElementType.Text
                }

                function y(e) {
                    return e.type === o.ElementType.Comment
                }

                function C(e) {
                    return e.type === o.ElementType.Directive
                }

                function _(e) {
                    return e.type === o.ElementType.Root
                }

                function E(e, t) {
                    var n;
                    if (void 0 === t && (t = !1), b(e)) n = new c(e.data);
                    else if (y(e)) n = new u(e.data);
                    else if (g(e)) {
                        var i = t ? w(e.children) : [],
                            r = new m(e.name, a({}, e.attribs), i);
                        i.forEach((function(e) {
                            return e.parent = r
                        })), null != e.namespace && (r.namespace = e.namespace), e["x-attribsNamespace"] && (r["x-attribsNamespace"] = a({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (r["x-attribsPrefix"] = a({}, e["x-attribsPrefix"])), n = r
                    } else if (v(e)) {
                        i = t ? w(e.children) : [];
                        var o = new f(i);
                        i.forEach((function(e) {
                            return e.parent = o
                        })), n = o
                    } else if (_(e)) {
                        i = t ? w(e.children) : [];
                        var s = new h(i);
                        i.forEach((function(e) {
                            return e.parent = s
                        })), e["x-mode"] && (s["x-mode"] = e["x-mode"]), n = s
                    } else {
                        if (!C(e)) throw new Error("Not implemented yet: ".concat(e.type));
                        var l = new d(e.name, e.data);
                        null != e["x-name"] && (l["x-name"] = e["x-name"], l["x-publicId"] = e["x-publicId"], l["x-systemId"] = e["x-systemId"]), n = l
                    }
                    return n.startIndex = e.startIndex, n.endIndex = e.endIndex, null != e.sourceCodeLocation && (n.sourceCodeLocation = e.sourceCodeLocation), n
                }

                function w(e) {
                    for (var t = e.map((function(e) {
                            return E(e, !0)
                        })), n = 1; n < t.length; n++) t[n].prev = t[n - 1], t[n - 1].next = t[n];
                    return t
                }
                t.Element = m, t.isTag = g, t.isCDATA = v, t.isText = b, t.isComment = y, t.isDirective = C, t.isDocument = _, t.hasChildren = function(e) {
                    return Object.prototype.hasOwnProperty.call(e, "children")
                }, t.cloneNode = E
            },
            484: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = n(726),
                    r = n(606),
                    a = ["checked", "value"],
                    o = ["input", "select", "textarea"],
                    s = {
                        reset: !0,
                        submit: !0
                    };

                function l(e) {
                    return i.possibleStandardNames[e]
                }
                t.default = function(e, t) {
                    void 0 === e && (e = {});
                    var n = {},
                        c = Boolean(e.type && s[e.type]);
                    for (var u in e) {
                        var d = e[u];
                        if ((0, i.isCustomAttribute)(u)) n[u] = d;
                        else {
                            var p = u.toLowerCase(),
                                f = l(p);
                            if (f) {
                                var h = (0, i.getPropertyInfo)(f);
                                switch (a.includes(f) && o.includes(t) && !c && (f = l("default" + p)), n[f] = d, h && h.type) {
                                    case i.BOOLEAN:
                                        n[f] = !0;
                                        break;
                                    case i.OVERLOADED_BOOLEAN:
                                        "" === d && (n[f] = !0)
                                }
                            } else r.PRESERVE_CUSTOM_ATTRIBUTES && (n[u] = d)
                        }
                    }
                    return (0, r.setStyleProp)(e.style, n), n
                }
            },
            670: function(e, t, n) {
                "use strict";
                var i = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n(196),
                    a = i(n(484)),
                    o = n(606),
                    s = {
                        cloneElement: r.cloneElement,
                        createElement: r.createElement,
                        isValidElement: r.isValidElement
                    };

                function l(e) {
                    return o.PRESERVE_CUSTOM_ATTRIBUTES && "tag" === e.type && (0, o.isCustomComponent)(e.name, e.attribs)
                }
                t.default = function e(t, n) {
                    for (var i = [], r = "function" == typeof(null == n ? void 0 : n.replace), c = (null == n ? void 0 : n.transform) || o.returnFirstArg, u = (null == n ? void 0 : n.library) || s, d = u.cloneElement, p = u.createElement, f = u.isValidElement, h = t.length, m = 0; m < h; m++) {
                        var g = t[m];
                        if (r) {
                            var v = n.replace(g);
                            if (f(v)) {
                                h > 1 && (v = d(v, {
                                    key: v.key || m
                                })), i.push(c(v, g, m));
                                continue
                            }
                        }
                        if ("text" !== g.type) {
                            var b = g,
                                y = {};
                            l(b) ? ((0, o.setStyleProp)(b.attribs.style, b.attribs), y = b.attribs) : b.attribs && (y = (0, a.default)(b.attribs, b.name));
                            var C = void 0;
                            switch (g.type) {
                                case "script":
                                case "style":
                                    g.children[0] && (y.dangerouslySetInnerHTML = {
                                        __html: g.children[0].data
                                    });
                                    break;
                                case "tag":
                                    "textarea" === g.name && g.children[0] ? y.defaultValue = g.children[0].data : g.children && g.children.length && (C = e(g.children, n));
                                    break;
                                default:
                                    continue
                            }
                            h > 1 && (y.key = m), i.push(c(p(g.name, y, C), g, m))
                        } else {
                            var _ = !g.data.trim().length;
                            if (_ && g.parent && !(0, o.canTextBeChildOfNode)(g.parent)) continue;
                            if ((null == n ? void 0 : n.trim) && _) continue;
                            i.push(c(g.data, g, m))
                        }
                    }
                    return 1 === i.length ? i[0] : i
                }
            },
            426: function(e, t, n) {
                "use strict";
                var i = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.htmlToDOM = t.domToReact = t.attributesToProps = t.Text = t.ProcessingInstruction = t.Element = t.Comment = void 0;
                var r = i(n(152));
                t.htmlToDOM = r.default;
                var a = i(n(484));
                t.attributesToProps = a.default;
                var o = i(n(670));
                t.domToReact = o.default;
                var s = n(384);
                Object.defineProperty(t, "Comment", {
                    enumerable: !0,
                    get: function() {
                        return s.Comment
                    }
                }), Object.defineProperty(t, "Element", {
                    enumerable: !0,
                    get: function() {
                        return s.Element
                    }
                }), Object.defineProperty(t, "ProcessingInstruction", {
                    enumerable: !0,
                    get: function() {
                        return s.ProcessingInstruction
                    }
                }), Object.defineProperty(t, "Text", {
                    enumerable: !0,
                    get: function() {
                        return s.Text
                    }
                });
                var l = {
                    lowerCaseAttributeNames: !1
                };
                t.default = function(e, t) {
                    if ("string" != typeof e) throw new TypeError("First argument must be a string");
                    return e ? (0, o.default)((0, r.default)(e, (null == t ? void 0 : t.htmlparser2) || l), t) : []
                }
            },
            606: function(e, t, n) {
                "use strict";
                var i = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.returnFirstArg = t.canTextBeChildOfNode = t.ELEMENTS_WITH_NO_TEXT_CHILDREN = t.PRESERVE_CUSTOM_ATTRIBUTES = t.setStyleProp = t.isCustomComponent = void 0;
                var r = n(196),
                    a = i(n(476)),
                    o = new Set(["annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph"]);
                t.isCustomComponent = function(e, t) {
                    return e.includes("-") ? !o.has(e) : Boolean(t && "string" == typeof t.is)
                };
                var s = {
                    reactCompat: !0
                };
                t.setStyleProp = function(e, t) {
                    if ("string" == typeof e)
                        if (e.trim()) try {
                            t.style = (0, a.default)(e, s)
                        } catch (e) {
                            t.style = {}
                        } else t.style = {}
                }, t.PRESERVE_CUSTOM_ATTRIBUTES = Number(r.version.split(".")[0]) >= 16, t.ELEMENTS_WITH_NO_TEXT_CHILDREN = new Set(["tr", "tbody", "thead", "tfoot", "colgroup", "table", "head", "html", "frameset"]), t.canTextBeChildOfNode = function(e) {
                    return !t.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(e.name)
                }, t.returnFirstArg = function(e) {
                    return e
                }
            },
            908: function(e, t) {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.Doctype = t.CDATA = t.Tag = t.Style = t.Script = t.Comment = t.Directive = t.Text = t.Root = t.isTag = t.ElementType = void 0,
                    function(e) {
                        e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype"
                    }(n = t.ElementType || (t.ElementType = {})), t.isTag = function(e) {
                        return e.type === n.Tag || e.type === n.Script || e.type === n.Style
                    }, t.Root = n.Root, t.Text = n.Text, t.Directive = n.Directive, t.Comment = n.Comment, t.Script = n.Script, t.Style = n.Style, t.Tag = n.Tag, t.CDATA = n.CDATA, t.Doctype = n.Doctype
            },
            384: function(e, t, n) {
                "use strict";
                var i = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
                        void 0 === i && (i = n);
                        var r = Object.getOwnPropertyDescriptor(t, n);
                        r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                            enumerable: !0,
                            get: function() {
                                return t[n]
                            }
                        }), Object.defineProperty(e, i, r)
                    } : function(e, t, n, i) {
                        void 0 === i && (i = n), e[i] = t[n]
                    }),
                    r = this && this.__exportStar || function(e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || i(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.DomHandler = void 0;
                var a = n(908),
                    o = n(79);
                r(n(79), t);
                var s = {
                        withStartIndices: !1,
                        withEndIndices: !1,
                        xmlMode: !1
                    },
                    l = function() {
                        function e(e, t, n) {
                            this.dom = [], this.root = new o.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, "function" == typeof t && (n = t, t = s), "object" == typeof e && (t = e, e = void 0), this.callback = null != e ? e : null, this.options = null != t ? t : s, this.elementCB = null != n ? n : null
                        }
                        return e.prototype.onparserinit = function(e) {
                            this.parser = e
                        }, e.prototype.onreset = function() {
                            this.dom = [], this.root = new o.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null
                        }, e.prototype.onend = function() {
                            this.done || (this.done = !0, this.parser = null, this.handleCallback(null))
                        }, e.prototype.onerror = function(e) {
                            this.handleCallback(e)
                        }, e.prototype.onclosetag = function() {
                            this.lastNode = null;
                            var e = this.tagStack.pop();
                            this.options.withEndIndices && (e.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(e)
                        }, e.prototype.onopentag = function(e, t) {
                            var n = this.options.xmlMode ? a.ElementType.Tag : void 0,
                                i = new o.Element(e, t, void 0, n);
                            this.addNode(i), this.tagStack.push(i)
                        }, e.prototype.ontext = function(e) {
                            var t = this.lastNode;
                            if (t && t.type === a.ElementType.Text) t.data += e, this.options.withEndIndices && (t.endIndex = this.parser.endIndex);
                            else {
                                var n = new o.Text(e);
                                this.addNode(n), this.lastNode = n
                            }
                        }, e.prototype.oncomment = function(e) {
                            if (this.lastNode && this.lastNode.type === a.ElementType.Comment) this.lastNode.data += e;
                            else {
                                var t = new o.Comment(e);
                                this.addNode(t), this.lastNode = t
                            }
                        }, e.prototype.oncommentend = function() {
                            this.lastNode = null
                        }, e.prototype.oncdatastart = function() {
                            var e = new o.Text(""),
                                t = new o.CDATA([e]);
                            this.addNode(t), e.parent = t, this.lastNode = e
                        }, e.prototype.oncdataend = function() {
                            this.lastNode = null
                        }, e.prototype.onprocessinginstruction = function(e, t) {
                            var n = new o.ProcessingInstruction(e, t);
                            this.addNode(n)
                        }, e.prototype.handleCallback = function(e) {
                            if ("function" == typeof this.callback) this.callback(e, this.dom);
                            else if (e) throw e
                        }, e.prototype.addNode = function(e) {
                            var t = this.tagStack[this.tagStack.length - 1],
                                n = t.children[t.children.length - 1];
                            this.options.withStartIndices && (e.startIndex = this.parser.startIndex), this.options.withEndIndices && (e.endIndex = this.parser.endIndex), t.children.push(e), n && (e.prev = n, n.next = e), e.parent = t, this.lastNode = null
                        }, e
                    }();
                t.DomHandler = l, t.default = l
            },
            79: function(e, t, n) {
                "use strict";
                var i, r = this && this.__extends || (i = function(e, t) {
                        return i = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }, i(e, t)
                    }, function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                        function __() {
                            this.constructor = e
                        }
                        i(e, t), e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype, new __)
                    }),
                    a = this && this.__assign || function() {
                        return a = Object.assign || function(e) {
                            for (var t, n = 1, i = arguments.length; n < i; n++)
                                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            return e
                        }, a.apply(this, arguments)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.cloneNode = t.hasChildren = t.isDocument = t.isDirective = t.isComment = t.isText = t.isCDATA = t.isTag = t.Element = t.Document = t.CDATA = t.NodeWithChildren = t.ProcessingInstruction = t.Comment = t.Text = t.DataNode = t.Node = void 0;
                var o = n(908),
                    s = function() {
                        function e() {
                            this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null
                        }
                        return Object.defineProperty(e.prototype, "parentNode", {
                            get: function() {
                                return this.parent
                            },
                            set: function(e) {
                                this.parent = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "previousSibling", {
                            get: function() {
                                return this.prev
                            },
                            set: function(e) {
                                this.prev = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "nextSibling", {
                            get: function() {
                                return this.next
                            },
                            set: function(e) {
                                this.next = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.cloneNode = function(e) {
                            return void 0 === e && (e = !1), E(this, e)
                        }, e
                    }();
                t.Node = s;
                var l = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return n.data = t, n
                    }
                    return r(t, e), Object.defineProperty(t.prototype, "nodeValue", {
                        get: function() {
                            return this.data
                        },
                        set: function(e) {
                            this.data = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(s);
                t.DataNode = l;
                var c = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.type = o.ElementType.Text, t
                    }
                    return r(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 3
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(l);
                t.Text = c;
                var u = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.type = o.ElementType.Comment, t
                    }
                    return r(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 8
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(l);
                t.Comment = u;
                var d = function(e) {
                    function t(t, n) {
                        var i = e.call(this, n) || this;
                        return i.name = t, i.type = o.ElementType.Directive, i
                    }
                    return r(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 1
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(l);
                t.ProcessingInstruction = d;
                var p = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return n.children = t, n
                    }
                    return r(t, e), Object.defineProperty(t.prototype, "firstChild", {
                        get: function() {
                            var e;
                            return null !== (e = this.children[0]) && void 0 !== e ? e : null
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "lastChild", {
                        get: function() {
                            return this.children.length > 0 ? this.children[this.children.length - 1] : null
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "childNodes", {
                        get: function() {
                            return this.children
                        },
                        set: function(e) {
                            this.children = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(s);
                t.NodeWithChildren = p;
                var f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.type = o.ElementType.CDATA, t
                    }
                    return r(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 4
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(p);
                t.CDATA = f;
                var h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.type = o.ElementType.Root, t
                    }
                    return r(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 9
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(p);
                t.Document = h;
                var m = function(e) {
                    function t(t, n, i, r) {
                        void 0 === i && (i = []), void 0 === r && (r = "script" === t ? o.ElementType.Script : "style" === t ? o.ElementType.Style : o.ElementType.Tag);
                        var a = e.call(this, i) || this;
                        return a.name = t, a.attribs = n, a.type = r, a
                    }
                    return r(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 1
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "tagName", {
                        get: function() {
                            return this.name
                        },
                        set: function(e) {
                            this.name = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "attributes", {
                        get: function() {
                            var e = this;
                            return Object.keys(this.attribs).map((function(t) {
                                var n, i;
                                return {
                                    name: t,
                                    value: e.attribs[t],
                                    namespace: null === (n = e["x-attribsNamespace"]) || void 0 === n ? void 0 : n[t],
                                    prefix: null === (i = e["x-attribsPrefix"]) || void 0 === i ? void 0 : i[t]
                                }
                            }))
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(p);

                function g(e) {
                    return (0, o.isTag)(e)
                }

                function v(e) {
                    return e.type === o.ElementType.CDATA
                }

                function b(e) {
                    return e.type === o.ElementType.Text
                }

                function y(e) {
                    return e.type === o.ElementType.Comment
                }

                function C(e) {
                    return e.type === o.ElementType.Directive
                }

                function _(e) {
                    return e.type === o.ElementType.Root
                }

                function E(e, t) {
                    var n;
                    if (void 0 === t && (t = !1), b(e)) n = new c(e.data);
                    else if (y(e)) n = new u(e.data);
                    else if (g(e)) {
                        var i = t ? w(e.children) : [],
                            r = new m(e.name, a({}, e.attribs), i);
                        i.forEach((function(e) {
                            return e.parent = r
                        })), null != e.namespace && (r.namespace = e.namespace), e["x-attribsNamespace"] && (r["x-attribsNamespace"] = a({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (r["x-attribsPrefix"] = a({}, e["x-attribsPrefix"])), n = r
                    } else if (v(e)) {
                        i = t ? w(e.children) : [];
                        var o = new f(i);
                        i.forEach((function(e) {
                            return e.parent = o
                        })), n = o
                    } else if (_(e)) {
                        i = t ? w(e.children) : [];
                        var s = new h(i);
                        i.forEach((function(e) {
                            return e.parent = s
                        })), e["x-mode"] && (s["x-mode"] = e["x-mode"]), n = s
                    } else {
                        if (!C(e)) throw new Error("Not implemented yet: ".concat(e.type));
                        var l = new d(e.name, e.data);
                        null != e["x-name"] && (l["x-name"] = e["x-name"], l["x-publicId"] = e["x-publicId"], l["x-systemId"] = e["x-systemId"]), n = l
                    }
                    return n.startIndex = e.startIndex, n.endIndex = e.endIndex, null != e.sourceCodeLocation && (n.sourceCodeLocation = e.sourceCodeLocation), n
                }

                function w(e) {
                    for (var t = e.map((function(e) {
                            return E(e, !0)
                        })), n = 1; n < t.length; n++) t[n].prev = t[n - 1], t[n - 1].next = t[n];
                    return t
                }
                t.Element = m, t.isTag = g, t.isCDATA = v, t.isText = b, t.isComment = y, t.isDirective = C, t.isDocument = _, t.hasChildren = function(e) {
                    return Object.prototype.hasOwnProperty.call(e, "children")
                }, t.cloneNode = E
            },
            139: function(e) {
                var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
                    n = /\n/g,
                    i = /^\s*/,
                    r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
                    a = /^:\s*/,
                    o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
                    s = /^[;\s]*/,
                    l = /^\s+|\s+$/g,
                    c = "";

                function u(e) {
                    return e ? e.replace(l, c) : c
                }
                e.exports = function(e, l) {
                    if ("string" != typeof e) throw new TypeError("First argument must be a string");
                    if (!e) return [];
                    l = l || {};
                    var d = 1,
                        p = 1;

                    function f(e) {
                        var t = e.match(n);
                        t && (d += t.length);
                        var i = e.lastIndexOf("\n");
                        p = ~i ? e.length - i : p + e.length
                    }

                    function h() {
                        var e = {
                            line: d,
                            column: p
                        };
                        return function(t) {
                            return t.position = new m(e), y(), t
                        }
                    }

                    function m(e) {
                        this.start = e, this.end = {
                            line: d,
                            column: p
                        }, this.source = l.source
                    }
                    m.prototype.content = e;
                    var g = [];

                    function v(t) {
                        var n = new Error(l.source + ":" + d + ":" + p + ": " + t);
                        if (n.reason = t, n.filename = l.source, n.line = d, n.column = p, n.source = e, !l.silent) throw n;
                        g.push(n)
                    }

                    function b(t) {
                        var n = t.exec(e);
                        if (n) {
                            var i = n[0];
                            return f(i), e = e.slice(i.length), n
                        }
                    }

                    function y() {
                        b(i)
                    }

                    function C(e) {
                        var t;
                        for (e = e || []; t = _();) !1 !== t && e.push(t);
                        return e
                    }

                    function _() {
                        var t = h();
                        if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
                            for (var n = 2; c != e.charAt(n) && ("*" != e.charAt(n) || "/" != e.charAt(n + 1));) ++n;
                            if (n += 2, c === e.charAt(n - 1)) return v("End of comment missing");
                            var i = e.slice(2, n - 2);
                            return p += 2, f(i), e = e.slice(n), p += 2, t({
                                type: "comment",
                                comment: i
                            })
                        }
                    }

                    function E() {
                        var e = h(),
                            n = b(r);
                        if (n) {
                            if (_(), !b(a)) return v("property missing ':'");
                            var i = b(o),
                                l = e({
                                    type: "declaration",
                                    property: u(n[0].replace(t, c)),
                                    value: i ? u(i[0].replace(t, c)) : c
                                });
                            return b(s), l
                        }
                    }
                    return y(),
                        function() {
                            var e, t = [];
                            for (C(t); e = E();) !1 !== e && (t.push(e), C(t));
                            return t
                        }()
                }
            },
            921: function(e, t) {
                "use strict";
                var n = "function" == typeof Symbol && Symbol.for,
                    i = n ? Symbol.for("react.element") : 60103,
                    r = n ? Symbol.for("react.portal") : 60106,
                    a = n ? Symbol.for("react.fragment") : 60107,
                    o = n ? Symbol.for("react.strict_mode") : 60108,
                    s = n ? Symbol.for("react.profiler") : 60114,
                    l = n ? Symbol.for("react.provider") : 60109,
                    c = n ? Symbol.for("react.context") : 60110,
                    u = n ? Symbol.for("react.async_mode") : 60111,
                    d = n ? Symbol.for("react.concurrent_mode") : 60111,
                    p = n ? Symbol.for("react.forward_ref") : 60112,
                    f = n ? Symbol.for("react.suspense") : 60113,
                    h = n ? Symbol.for("react.suspense_list") : 60120,
                    m = n ? Symbol.for("react.memo") : 60115,
                    g = n ? Symbol.for("react.lazy") : 60116,
                    v = n ? Symbol.for("react.block") : 60121,
                    b = n ? Symbol.for("react.fundamental") : 60117,
                    y = n ? Symbol.for("react.responder") : 60118,
                    C = n ? Symbol.for("react.scope") : 60119;

                function _(e) {
                    if ("object" == typeof e && null !== e) {
                        var t = e.$$typeof;
                        switch (t) {
                            case i:
                                switch (e = e.type) {
                                    case u:
                                    case d:
                                    case a:
                                    case s:
                                    case o:
                                    case f:
                                        return e;
                                    default:
                                        switch (e = e && e.$$typeof) {
                                            case c:
                                            case p:
                                            case g:
                                            case m:
                                            case l:
                                                return e;
                                            default:
                                                return t
                                        }
                                }
                            case r:
                                return t
                        }
                    }
                }

                function E(e) {
                    return _(e) === d
                }
                t.AsyncMode = u, t.ConcurrentMode = d, t.ContextConsumer = c, t.ContextProvider = l, t.Element = i, t.ForwardRef = p, t.Fragment = a, t.Lazy = g, t.Memo = m, t.Portal = r, t.Profiler = s, t.StrictMode = o, t.Suspense = f, t.isAsyncMode = function(e) {
                    return E(e) || _(e) === u
                }, t.isConcurrentMode = E, t.isContextConsumer = function(e) {
                    return _(e) === c
                }, t.isContextProvider = function(e) {
                    return _(e) === l
                }, t.isElement = function(e) {
                    return "object" == typeof e && null !== e && e.$$typeof === i
                }, t.isForwardRef = function(e) {
                    return _(e) === p
                }, t.isFragment = function(e) {
                    return _(e) === a
                }, t.isLazy = function(e) {
                    return _(e) === g
                }, t.isMemo = function(e) {
                    return _(e) === m
                }, t.isPortal = function(e) {
                    return _(e) === r
                }, t.isProfiler = function(e) {
                    return _(e) === s
                }, t.isStrictMode = function(e) {
                    return _(e) === o
                }, t.isSuspense = function(e) {
                    return _(e) === f
                }, t.isValidElementType = function(e) {
                    return "string" == typeof e || "function" == typeof e || e === a || e === d || e === s || e === o || e === f || e === h || "object" == typeof e && null !== e && (e.$$typeof === g || e.$$typeof === m || e.$$typeof === l || e.$$typeof === c || e.$$typeof === p || e.$$typeof === b || e.$$typeof === y || e.$$typeof === C || e.$$typeof === v)
                }, t.typeOf = _
            },
            864: function(e, t, n) {
                "use strict";
                e.exports = n(921)
            },
            726: function(e, t, n) {
                "use strict";

                function i(e, t, n, i, r, a, o) {
                    this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = i, this.attributeNamespace = r, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o
                }
                const r = {};
                ["children", "dangerouslySetInnerHTML", "defaultValue", "defaultChecked", "innerHTML", "suppressContentEditableWarning", "suppressHydrationWarning", "style"].forEach((e => {
                    r[e] = new i(e, 0, !1, e, null, !1, !1)
                })), [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"]
                ].forEach((([e, t]) => {
                    r[e] = new i(e, 1, !1, t, null, !1, !1)
                })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((e => {
                    r[e] = new i(e, 2, !1, e.toLowerCase(), null, !1, !1)
                })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((e => {
                    r[e] = new i(e, 2, !1, e, null, !1, !1)
                })), ["allowFullScreen", "async", "autoFocus", "autoPlay", "controls", "default", "defer", "disabled", "disablePictureInPicture", "disableRemotePlayback", "formNoValidate", "hidden", "loop", "noModule", "noValidate", "open", "playsInline", "readOnly", "required", "reversed", "scoped", "seamless", "itemScope"].forEach((e => {
                    r[e] = new i(e, 3, !1, e.toLowerCase(), null, !1, !1)
                })), ["checked", "multiple", "muted", "selected"].forEach((e => {
                    r[e] = new i(e, 3, !0, e, null, !1, !1)
                })), ["capture", "download"].forEach((e => {
                    r[e] = new i(e, 4, !1, e, null, !1, !1)
                })), ["cols", "rows", "size", "span"].forEach((e => {
                    r[e] = new i(e, 6, !1, e, null, !1, !1)
                })), ["rowSpan", "start"].forEach((e => {
                    r[e] = new i(e, 5, !1, e.toLowerCase(), null, !1, !1)
                }));
                const a = /[\-\:]([a-z])/g,
                    o = e => e[1].toUpperCase();
                ["accent-height", "alignment-baseline", "arabic-form", "baseline-shift", "cap-height", "clip-path", "clip-rule", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "dominant-baseline", "enable-background", "fill-opacity", "fill-rule", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-name", "glyph-orientation-horizontal", "glyph-orientation-vertical", "horiz-adv-x", "horiz-origin-x", "image-rendering", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "overline-position", "overline-thickness", "paint-order", "panose-1", "pointer-events", "rendering-intent", "shape-rendering", "stop-color", "stop-opacity", "strikethrough-position", "strikethrough-thickness", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-anchor", "text-decoration", "text-rendering", "underline-position", "underline-thickness", "unicode-bidi", "unicode-range", "units-per-em", "v-alphabetic", "v-hanging", "v-ideographic", "v-mathematical", "vector-effect", "vert-adv-y", "vert-origin-x", "vert-origin-y", "word-spacing", "writing-mode", "xmlns:xlink", "x-height"].forEach((e => {
                    const t = e.replace(a, o);
                    r[t] = new i(t, 1, !1, e, null, !1, !1)
                })), ["xlink:actuate", "xlink:arcrole", "xlink:role", "xlink:show", "xlink:title", "xlink:type"].forEach((e => {
                    const t = e.replace(a, o);
                    r[t] = new i(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
                })), ["xml:base", "xml:lang", "xml:space"].forEach((e => {
                    const t = e.replace(a, o);
                    r[t] = new i(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
                })), ["tabIndex", "crossOrigin"].forEach((e => {
                    r[e] = new i(e, 1, !1, e.toLowerCase(), null, !1, !1)
                })), r.xlinkHref = new i("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((e => {
                    r[e] = new i(e, 1, !1, e.toLowerCase(), null, !0, !0)
                }));
                const {
                    CAMELCASE: s,
                    SAME: l,
                    possibleStandardNames: c
                } = n(229), u = RegExp.prototype.test.bind(new RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")), d = Object.keys(c).reduce(((e, t) => {
                    const n = c[t];
                    return n === l ? e[t] = t : n === s ? e[t.toLowerCase()] = t : e[t] = n, e
                }), {});
                t.BOOLEAN = 3, t.BOOLEANISH_STRING = 2, t.NUMERIC = 5, t.OVERLOADED_BOOLEAN = 4, t.POSITIVE_NUMERIC = 6, t.RESERVED = 0, t.STRING = 1, t.getPropertyInfo = function(e) {
                    return r.hasOwnProperty(e) ? r[e] : null
                }, t.isCustomAttribute = u, t.possibleStandardNames = d
            },
            229: function(e, t) {
                t.SAME = 0, t.CAMELCASE = 1, t.possibleStandardNames = {
                    accept: 0,
                    acceptCharset: 1,
                    "accept-charset": "acceptCharset",
                    accessKey: 1,
                    action: 0,
                    allowFullScreen: 1,
                    alt: 0,
                    as: 0,
                    async: 0,
                    autoCapitalize: 1,
                    autoComplete: 1,
                    autoCorrect: 1,
                    autoFocus: 1,
                    autoPlay: 1,
                    autoSave: 1,
                    capture: 0,
                    cellPadding: 1,
                    cellSpacing: 1,
                    challenge: 0,
                    charSet: 1,
                    checked: 0,
                    children: 0,
                    cite: 0,
                    class: "className",
                    classID: 1,
                    className: 1,
                    cols: 0,
                    colSpan: 1,
                    content: 0,
                    contentEditable: 1,
                    contextMenu: 1,
                    controls: 0,
                    controlsList: 1,
                    coords: 0,
                    crossOrigin: 1,
                    dangerouslySetInnerHTML: 1,
                    data: 0,
                    dateTime: 1,
                    default: 0,
                    defaultChecked: 1,
                    defaultValue: 1,
                    defer: 0,
                    dir: 0,
                    disabled: 0,
                    disablePictureInPicture: 1,
                    disableRemotePlayback: 1,
                    download: 0,
                    draggable: 0,
                    encType: 1,
                    enterKeyHint: 1,
                    for: "htmlFor",
                    form: 0,
                    formMethod: 1,
                    formAction: 1,
                    formEncType: 1,
                    formNoValidate: 1,
                    formTarget: 1,
                    frameBorder: 1,
                    headers: 0,
                    height: 0,
                    hidden: 0,
                    high: 0,
                    href: 0,
                    hrefLang: 1,
                    htmlFor: 1,
                    httpEquiv: 1,
                    "http-equiv": "httpEquiv",
                    icon: 0,
                    id: 0,
                    innerHTML: 1,
                    inputMode: 1,
                    integrity: 0,
                    is: 0,
                    itemID: 1,
                    itemProp: 1,
                    itemRef: 1,
                    itemScope: 1,
                    itemType: 1,
                    keyParams: 1,
                    keyType: 1,
                    kind: 0,
                    label: 0,
                    lang: 0,
                    list: 0,
                    loop: 0,
                    low: 0,
                    manifest: 0,
                    marginWidth: 1,
                    marginHeight: 1,
                    max: 0,
                    maxLength: 1,
                    media: 0,
                    mediaGroup: 1,
                    method: 0,
                    min: 0,
                    minLength: 1,
                    multiple: 0,
                    muted: 0,
                    name: 0,
                    noModule: 1,
                    nonce: 0,
                    noValidate: 1,
                    open: 0,
                    optimum: 0,
                    pattern: 0,
                    placeholder: 0,
                    playsInline: 1,
                    poster: 0,
                    preload: 0,
                    profile: 0,
                    radioGroup: 1,
                    readOnly: 1,
                    referrerPolicy: 1,
                    rel: 0,
                    required: 0,
                    reversed: 0,
                    role: 0,
                    rows: 0,
                    rowSpan: 1,
                    sandbox: 0,
                    scope: 0,
                    scoped: 0,
                    scrolling: 0,
                    seamless: 0,
                    selected: 0,
                    shape: 0,
                    size: 0,
                    sizes: 0,
                    span: 0,
                    spellCheck: 1,
                    src: 0,
                    srcDoc: 1,
                    srcLang: 1,
                    srcSet: 1,
                    start: 0,
                    step: 0,
                    style: 0,
                    summary: 0,
                    tabIndex: 1,
                    target: 0,
                    title: 0,
                    type: 0,
                    useMap: 1,
                    value: 0,
                    width: 0,
                    wmode: 0,
                    wrap: 0,
                    about: 0,
                    accentHeight: 1,
                    "accent-height": "accentHeight",
                    accumulate: 0,
                    additive: 0,
                    alignmentBaseline: 1,
                    "alignment-baseline": "alignmentBaseline",
                    allowReorder: 1,
                    alphabetic: 0,
                    amplitude: 0,
                    arabicForm: 1,
                    "arabic-form": "arabicForm",
                    ascent: 0,
                    attributeName: 1,
                    attributeType: 1,
                    autoReverse: 1,
                    azimuth: 0,
                    baseFrequency: 1,
                    baselineShift: 1,
                    "baseline-shift": "baselineShift",
                    baseProfile: 1,
                    bbox: 0,
                    begin: 0,
                    bias: 0,
                    by: 0,
                    calcMode: 1,
                    capHeight: 1,
                    "cap-height": "capHeight",
                    clip: 0,
                    clipPath: 1,
                    "clip-path": "clipPath",
                    clipPathUnits: 1,
                    clipRule: 1,
                    "clip-rule": "clipRule",
                    color: 0,
                    colorInterpolation: 1,
                    "color-interpolation": "colorInterpolation",
                    colorInterpolationFilters: 1,
                    "color-interpolation-filters": "colorInterpolationFilters",
                    colorProfile: 1,
                    "color-profile": "colorProfile",
                    colorRendering: 1,
                    "color-rendering": "colorRendering",
                    contentScriptType: 1,
                    contentStyleType: 1,
                    cursor: 0,
                    cx: 0,
                    cy: 0,
                    d: 0,
                    datatype: 0,
                    decelerate: 0,
                    descent: 0,
                    diffuseConstant: 1,
                    direction: 0,
                    display: 0,
                    divisor: 0,
                    dominantBaseline: 1,
                    "dominant-baseline": "dominantBaseline",
                    dur: 0,
                    dx: 0,
                    dy: 0,
                    edgeMode: 1,
                    elevation: 0,
                    enableBackground: 1,
                    "enable-background": "enableBackground",
                    end: 0,
                    exponent: 0,
                    externalResourcesRequired: 1,
                    fill: 0,
                    fillOpacity: 1,
                    "fill-opacity": "fillOpacity",
                    fillRule: 1,
                    "fill-rule": "fillRule",
                    filter: 0,
                    filterRes: 1,
                    filterUnits: 1,
                    floodOpacity: 1,
                    "flood-opacity": "floodOpacity",
                    floodColor: 1,
                    "flood-color": "floodColor",
                    focusable: 0,
                    fontFamily: 1,
                    "font-family": "fontFamily",
                    fontSize: 1,
                    "font-size": "fontSize",
                    fontSizeAdjust: 1,
                    "font-size-adjust": "fontSizeAdjust",
                    fontStretch: 1,
                    "font-stretch": "fontStretch",
                    fontStyle: 1,
                    "font-style": "fontStyle",
                    fontVariant: 1,
                    "font-variant": "fontVariant",
                    fontWeight: 1,
                    "font-weight": "fontWeight",
                    format: 0,
                    from: 0,
                    fx: 0,
                    fy: 0,
                    g1: 0,
                    g2: 0,
                    glyphName: 1,
                    "glyph-name": "glyphName",
                    glyphOrientationHorizontal: 1,
                    "glyph-orientation-horizontal": "glyphOrientationHorizontal",
                    glyphOrientationVertical: 1,
                    "glyph-orientation-vertical": "glyphOrientationVertical",
                    glyphRef: 1,
                    gradientTransform: 1,
                    gradientUnits: 1,
                    hanging: 0,
                    horizAdvX: 1,
                    "horiz-adv-x": "horizAdvX",
                    horizOriginX: 1,
                    "horiz-origin-x": "horizOriginX",
                    ideographic: 0,
                    imageRendering: 1,
                    "image-rendering": "imageRendering",
                    in2: 0,
                    in: 0,
                    inlist: 0,
                    intercept: 0,
                    k1: 0,
                    k2: 0,
                    k3: 0,
                    k4: 0,
                    k: 0,
                    kernelMatrix: 1,
                    kernelUnitLength: 1,
                    kerning: 0,
                    keyPoints: 1,
                    keySplines: 1,
                    keyTimes: 1,
                    lengthAdjust: 1,
                    letterSpacing: 1,
                    "letter-spacing": "letterSpacing",
                    lightingColor: 1,
                    "lighting-color": "lightingColor",
                    limitingConeAngle: 1,
                    local: 0,
                    markerEnd: 1,
                    "marker-end": "markerEnd",
                    markerHeight: 1,
                    markerMid: 1,
                    "marker-mid": "markerMid",
                    markerStart: 1,
                    "marker-start": "markerStart",
                    markerUnits: 1,
                    markerWidth: 1,
                    mask: 0,
                    maskContentUnits: 1,
                    maskUnits: 1,
                    mathematical: 0,
                    mode: 0,
                    numOctaves: 1,
                    offset: 0,
                    opacity: 0,
                    operator: 0,
                    order: 0,
                    orient: 0,
                    orientation: 0,
                    origin: 0,
                    overflow: 0,
                    overlinePosition: 1,
                    "overline-position": "overlinePosition",
                    overlineThickness: 1,
                    "overline-thickness": "overlineThickness",
                    paintOrder: 1,
                    "paint-order": "paintOrder",
                    panose1: 0,
                    "panose-1": "panose1",
                    pathLength: 1,
                    patternContentUnits: 1,
                    patternTransform: 1,
                    patternUnits: 1,
                    pointerEvents: 1,
                    "pointer-events": "pointerEvents",
                    points: 0,
                    pointsAtX: 1,
                    pointsAtY: 1,
                    pointsAtZ: 1,
                    prefix: 0,
                    preserveAlpha: 1,
                    preserveAspectRatio: 1,
                    primitiveUnits: 1,
                    property: 0,
                    r: 0,
                    radius: 0,
                    refX: 1,
                    refY: 1,
                    renderingIntent: 1,
                    "rendering-intent": "renderingIntent",
                    repeatCount: 1,
                    repeatDur: 1,
                    requiredExtensions: 1,
                    requiredFeatures: 1,
                    resource: 0,
                    restart: 0,
                    result: 0,
                    results: 0,
                    rotate: 0,
                    rx: 0,
                    ry: 0,
                    scale: 0,
                    security: 0,
                    seed: 0,
                    shapeRendering: 1,
                    "shape-rendering": "shapeRendering",
                    slope: 0,
                    spacing: 0,
                    specularConstant: 1,
                    specularExponent: 1,
                    speed: 0,
                    spreadMethod: 1,
                    startOffset: 1,
                    stdDeviation: 1,
                    stemh: 0,
                    stemv: 0,
                    stitchTiles: 1,
                    stopColor: 1,
                    "stop-color": "stopColor",
                    stopOpacity: 1,
                    "stop-opacity": "stopOpacity",
                    strikethroughPosition: 1,
                    "strikethrough-position": "strikethroughPosition",
                    strikethroughThickness: 1,
                    "strikethrough-thickness": "strikethroughThickness",
                    string: 0,
                    stroke: 0,
                    strokeDasharray: 1,
                    "stroke-dasharray": "strokeDasharray",
                    strokeDashoffset: 1,
                    "stroke-dashoffset": "strokeDashoffset",
                    strokeLinecap: 1,
                    "stroke-linecap": "strokeLinecap",
                    strokeLinejoin: 1,
                    "stroke-linejoin": "strokeLinejoin",
                    strokeMiterlimit: 1,
                    "stroke-miterlimit": "strokeMiterlimit",
                    strokeWidth: 1,
                    "stroke-width": "strokeWidth",
                    strokeOpacity: 1,
                    "stroke-opacity": "strokeOpacity",
                    suppressContentEditableWarning: 1,
                    suppressHydrationWarning: 1,
                    surfaceScale: 1,
                    systemLanguage: 1,
                    tableValues: 1,
                    targetX: 1,
                    targetY: 1,
                    textAnchor: 1,
                    "text-anchor": "textAnchor",
                    textDecoration: 1,
                    "text-decoration": "textDecoration",
                    textLength: 1,
                    textRendering: 1,
                    "text-rendering": "textRendering",
                    to: 0,
                    transform: 0,
                    typeof: 0,
                    u1: 0,
                    u2: 0,
                    underlinePosition: 1,
                    "underline-position": "underlinePosition",
                    underlineThickness: 1,
                    "underline-thickness": "underlineThickness",
                    unicode: 0,
                    unicodeBidi: 1,
                    "unicode-bidi": "unicodeBidi",
                    unicodeRange: 1,
                    "unicode-range": "unicodeRange",
                    unitsPerEm: 1,
                    "units-per-em": "unitsPerEm",
                    unselectable: 0,
                    vAlphabetic: 1,
                    "v-alphabetic": "vAlphabetic",
                    values: 0,
                    vectorEffect: 1,
                    "vector-effect": "vectorEffect",
                    version: 0,
                    vertAdvY: 1,
                    "vert-adv-y": "vertAdvY",
                    vertOriginX: 1,
                    "vert-origin-x": "vertOriginX",
                    vertOriginY: 1,
                    "vert-origin-y": "vertOriginY",
                    vHanging: 1,
                    "v-hanging": "vHanging",
                    vIdeographic: 1,
                    "v-ideographic": "vIdeographic",
                    viewBox: 1,
                    viewTarget: 1,
                    visibility: 0,
                    vMathematical: 1,
                    "v-mathematical": "vMathematical",
                    vocab: 0,
                    widths: 0,
                    wordSpacing: 1,
                    "word-spacing": "wordSpacing",
                    writingMode: 1,
                    "writing-mode": "writingMode",
                    x1: 0,
                    x2: 0,
                    x: 0,
                    xChannelSelector: 1,
                    xHeight: 1,
                    "x-height": "xHeight",
                    xlinkActuate: 1,
                    "xlink:actuate": "xlinkActuate",
                    xlinkArcrole: 1,
                    "xlink:arcrole": "xlinkArcrole",
                    xlinkHref: 1,
                    "xlink:href": "xlinkHref",
                    xlinkRole: 1,
                    "xlink:role": "xlinkRole",
                    xlinkShow: 1,
                    "xlink:show": "xlinkShow",
                    xlinkTitle: 1,
                    "xlink:title": "xlinkTitle",
                    xlinkType: 1,
                    "xlink:type": "xlinkType",
                    xmlBase: 1,
                    "xml:base": "xmlBase",
                    xmlLang: 1,
                    "xml:lang": "xmlLang",
                    xmlns: 0,
                    "xml:space": "xmlSpace",
                    xmlnsXlink: 1,
                    "xmlns:xlink": "xmlnsXlink",
                    xmlSpace: 1,
                    y1: 0,
                    y2: 0,
                    y: 0,
                    yChannelSelector: 1,
                    z: 0,
                    zoomAndPan: 1
                }
            },
            476: function(e, t, n) {
                "use strict";
                var i = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i(n(174)),
                    a = n(678);
                t.default = function(e, t) {
                    var n = {};
                    return e && "string" == typeof e ? ((0, r.default)(e, (function(e, i) {
                        e && i && (n[(0, a.camelCase)(e, t)] = i)
                    })), n) : n
                }
            },
            678: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.camelCase = void 0;
                var n = /^--[a-zA-Z0-9-]+$/,
                    i = /-([a-z])/g,
                    r = /^[^-]+$/,
                    a = /^-(webkit|moz|ms|o|khtml)-/,
                    o = /^-(ms)-/,
                    s = function(e, t) {
                        return t.toUpperCase()
                    },
                    l = function(e, t) {
                        return "".concat(t, "-")
                    };
                t.camelCase = function(e, t) {
                    return void 0 === t && (t = {}),
                        function(e) {
                            return !e || r.test(e) || n.test(e)
                        }(e) ? e : (e = e.toLowerCase(), (e = t.reactCompat ? e.replace(o, l) : e.replace(a, l)).replace(i, s))
                }
            },
            174: function(e, t, n) {
                "use strict";
                var i = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i(n(139));
                t.default = function(e, t) {
                    var n = null;
                    if (!e || "string" != typeof e) return n;
                    var i = (0, r.default)(e),
                        a = "function" == typeof t;
                    return i.forEach((function(e) {
                        if ("declaration" === e.type) {
                            var i = e.property,
                                r = e.value;
                            a ? t(i, r, e) : r && ((n = n || {})[i] = r)
                        }
                    })), n
                }
            },
            196: function(e) {
                "use strict";
                e.exports = window.React
            }
        },
        t = {};

    function n(i) {
        var r = t[i];
        if (void 0 !== r) return r.exports;
        var a = t[i] = {
            exports: {}
        };
        return e[i].call(a.exports, a, a.exports, n), a.exports
    }
    n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, {
                a: t
            }), t
        }, n.d = function(e, t) {
            for (var i in t) n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, {
                enumerable: !0,
                get: t[i]
            })
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function() {
            "use strict";
            var e = window.wp.element,
                t = window.wp.data,
                i = window.wp.plugins,
                r = window.wp.blockEditor,
                a = window.wp.components;
            const o = 72,
                s = 32,
                l = 24,
                c = 16,
                u = 1.2,
                d = 1,
                p = "currentColor",
                f = "none",
                h = "#fff",
                m = {
                    stroke: p,
                    strokeWidth: 1.4,
                    fill: f,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                },
                g = {
                    fill: p,
                    stroke: f
                },
                v = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: l,
                        height: l,
                        viewBox: "0 0 24 24",
                        fill: f,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M9.8132 15.9038L9 18.75L8.1868 15.9038C7.75968 14.4089 6.59112 13.2403 5.09619 12.8132L2.25 12L5.09619 11.1868C6.59113 10.7597 7.75968 9.59112 8.1868 8.09619L9 5.25L9.8132 8.09619C10.2403 9.59113 11.4089 10.7597 12.9038 11.1868L15.75 12L12.9038 12.8132C11.4089 13.2403 10.2403 14.4089 9.8132 15.9038Z",
                        ...m,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M16.8942 20.5673L16.5 21.75L16.1058 20.5673C15.8818 19.8954 15.3546 19.3682 14.6827 19.1442L13.5 18.75L14.6827 18.3558C15.3546 18.1318 15.8818 17.6046 16.1058 16.9327L16.5 15.75L16.8942 16.9327C17.1182 17.6046 17.6454 18.1318 18.3173 18.3558L19.5 18.75L18.3173 19.1442C17.6454 19.3682 17.1182 19.8954 16.8942 20.5673Z",
                        ...m,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M18.2589 8.71454L18 9.75L17.7411 8.71454C17.4388 7.50533 16.4947 6.56117 15.2855 6.25887L14.25 6L15.2855 5.74113C16.4947 5.43883 17.4388 4.49467 17.7411 3.28546L18 2.25L18.2589 3.28546C18.5612 4.49467 19.5053 5.43883 20.7145 5.74113L21.75 6L20.7145 6.25887C19.5053 6.56117 18.5612 7.50532 18.2589 8.71454Z",
                        ...m,
                        ...n
                    }))
                },
                b = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: o,
                        height: l,
                        viewBox: "0 0 78 24",
                        fill: f,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M9.8132 15.9038L9 18.75L8.1868 15.9038C7.75968 14.4089 6.59112 13.2403 5.09619 12.8132L2.25 12L5.09619 11.1868C6.59113 10.7597 7.75968 9.59112 8.1868 8.09619L9 5.25L9.8132 8.09619C10.2403 9.59113 11.4089 10.7597 12.9038 11.1868L15.75 12L12.9038 12.8132C11.4089 13.2403 10.2403 14.4089 9.8132 15.9038Z",
                        ...m,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M16.8942 20.5673L16.5 21.75L16.1058 20.5673C15.8818 19.8954 15.3546 19.3682 14.6827 19.1442L13.5 18.75L14.6827 18.3558C15.3546 18.1318 15.8818 17.6046 16.1058 16.9327L16.5 15.75L16.8942 16.9327C17.1182 17.6046 17.6454 18.1318 18.3173 18.3558L19.5 18.75L18.3173 19.1442C17.6454 19.3682 17.1182 19.8954 16.8942 20.5673Z",
                        ...m,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M18.2589 8.71454L18 9.75L17.7411 8.71454C17.4388 7.50533 16.4947 6.56117 15.2855 6.25887L14.25 6L15.2855 5.74113C16.4947 5.43883 17.4388 4.49467 17.7411 3.28546L18 2.25L18.2589 3.28546C18.5612 4.49467 19.5053 5.43883 20.7145 5.74113L21.75 6L20.7145 6.25887C19.5053 6.56117 18.5612 7.50532 18.2589 8.71454Z",
                        ...m,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M31.8864 18H30.4091L34.6818 6.36364H36.1364L40.4091 18H38.9318L35.4545 8.20455H35.3636L31.8864 18ZM32.4318 13.4545H38.3864V14.7045H32.4318V13.4545ZM48.2216 11.2273L47.017 11.5682C46.9413 11.3674 46.8295 11.1723 46.6818 10.983C46.5379 10.7898 46.3409 10.6307 46.0909 10.5057C45.8409 10.3807 45.5208 10.3182 45.1307 10.3182C44.5966 10.3182 44.1515 10.4413 43.7955 10.6875C43.4432 10.9299 43.267 11.2386 43.267 11.6136C43.267 11.947 43.3883 12.2102 43.6307 12.4034C43.8731 12.5966 44.2519 12.7576 44.767 12.8864L46.0625 13.2045C46.8428 13.3939 47.4242 13.6837 47.8068 14.0739C48.1894 14.4602 48.3807 14.9583 48.3807 15.5682C48.3807 16.0682 48.2367 16.5152 47.9489 16.9091C47.6648 17.303 47.267 17.6136 46.7557 17.8409C46.2443 18.0682 45.6496 18.1818 44.9716 18.1818C44.0814 18.1818 43.3447 17.9886 42.7614 17.6023C42.178 17.2159 41.8087 16.6515 41.6534 15.9091L42.9261 15.5909C43.0473 16.0606 43.2765 16.4129 43.6136 16.6477C43.9545 16.8826 44.3996 17 44.9489 17C45.5739 17 46.0701 16.8674 46.4375 16.6023C46.8087 16.3333 46.9943 16.0114 46.9943 15.6364C46.9943 15.3333 46.8883 15.0795 46.6761 14.875C46.464 14.6667 46.1383 14.5114 45.6989 14.4091L44.2443 14.0682C43.4451 13.8788 42.858 13.5852 42.483 13.1875C42.1117 12.786 41.9261 12.2841 41.9261 11.6818C41.9261 11.1894 42.0644 10.7538 42.3409 10.375C42.6212 9.99621 43.0019 9.69886 43.483 9.48295C43.9678 9.26705 44.517 9.15909 45.1307 9.15909C45.9943 9.15909 46.6723 9.34848 47.1648 9.72727C47.661 10.1061 48.0133 10.6061 48.2216 11.2273ZM51.6491 14.8182L51.6264 13.1591H51.8991L55.7173 9.27273H57.3764L53.3082 13.3864H53.1946L51.6491 14.8182ZM50.3991 18V6.36364H51.7401V18H50.3991ZM55.9446 18L52.5355 13.6818L53.4901 12.75L57.6491 18H55.9446ZM64.2614 18H62.7841L67.0568 6.36364H68.5114L72.7841 18H71.3068L67.8295 8.20455H67.7386L64.2614 18ZM64.8068 13.4545H70.7614V14.7045H64.8068V13.4545ZM76.0057 6.36364V18H74.5966V6.36364H76.0057Z",
                        ...g,
                        ...n
                    }))
                },
                y = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 24 24",
                        fill: f,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M4.5 12.75l6 6 9-13.5",
                        ...m,
                        strokeWidth: u,
                        ...n
                    }))
                },
                C = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 16 16",
                        fill: f,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M7.56635 2.55746C7.52322 2.69734 7.5 2.84596 7.5 3C7.5 3.27614 7.72386 3.5 8 3.5H11C11.2761 3.5 11.5 3.27614 11.5 3C11.5 2.84596 11.4768 2.69734 11.4337 2.55746M7.56635 2.55746C7.75517 1.94505 8.32561 1.5 9 1.5H10C10.6744 1.5 11.2448 1.94505 11.4337 2.55746M7.56635 2.55746C7.31591 2.57239 7.06625 2.59019 6.81739 2.61085C6.06333 2.67344 5.5 3.31549 5.5 4.07215V5.5M11.4337 2.55746C11.6841 2.57239 11.9338 2.59019 12.1826 2.61085C12.9367 2.67344 13.5 3.31549 13.5 4.07214V11C13.5 11.8284 12.8284 12.5 12 12.5H10.5M5.5 5.5H3.25C2.83579 5.5 2.5 5.83579 2.5 6.25V13.75C2.5 14.1642 2.83579 14.5 3.25 14.5H9.75C10.1642 14.5 10.5 14.1642 10.5 13.75V12.5M5.5 5.5H9.75C10.1642 5.5 10.5 5.83579 10.5 6.25V12.5M5 10.5L6 11.5L8 9",
                        ...m,
                        strokeWidth: u,
                        ...n
                    }))
                },
                _ = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 24 24",
                        fill: f,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
                        ...m,
                        strokeWidth: u,
                        ...n
                    }))
                },
                E = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 24 24",
                        fill: f,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75",
                        ...m,
                        strokeWidth: u,
                        ...n
                    }))
                },
                w = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 16 16",
                        fill: f,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M7.36484 2.23437H3.36484C2.03936 2.23437 0.964844 3.30889 0.964844 4.63437V12.6344C0.964844 13.9599 2.03936 15.0344 3.36484 15.0344H11.3648C12.6903 15.0344 13.7648 13.9599 13.7648 12.6344L13.7648 8.63441M4.96484 11.0344L7.8755 10.4479C8.03002 10.4168 8.1719 10.3407 8.28332 10.2292L14.7991 3.70982C15.1115 3.39725 15.1113 2.8906 14.7986 2.57829L13.4184 1.19957C13.1058 0.887393 12.5994 0.887605 12.2871 1.20005L5.77069 7.72008C5.65948 7.83135 5.58354 7.97294 5.55238 8.12714L4.96484 11.0344Z",
                        ...m,
                        strokeWidth: u,
                        ...n
                    }))
                },
                x = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: l,
                        height: l,
                        viewBox: "0 0 20 20",
                        fill: f,
                        ...t
                    }, (0, e.createElement)("g", {
                        clipPath: "url(#zip_ai_svg_clip0_4606_13338)"
                    }, (0, e.createElement)("path", {
                        d: "M10.0013 6.66675V10.0001M10.0013 13.3334H10.0096M18.3346 10.0001C18.3346 14.6025 14.6037 18.3334 10.0013 18.3334C5.39893 18.3334 1.66797 14.6025 1.66797 10.0001C1.66797 5.39771 5.39893 1.66675 10.0013 1.66675C14.6037 1.66675 18.3346 5.39771 18.3346 10.0001Z",
                        ...m,
                        ...n
                    })), (0, e.createElement)("defs", {}, (0, e.createElement)("clipPath", {
                        id: "zip_ai_svg_clip0_4606_13338"
                    }, (0, e.createElement)("rect", {
                        width: 20,
                        height: 20,
                        fill: h
                    }))))
                },
                k = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: l,
                        height: l,
                        viewBox: "0 0 19 18",
                        fill: f,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M14.918 2.25H4.41797C3.58954 2.25 2.91797 2.92157 2.91797 3.75V14.25C2.91797 15.0784 3.58954 15.75 4.41797 15.75H14.918C15.7464 15.75 16.418 15.0784 16.418 14.25V3.75C16.418 2.92157 15.7464 2.25 14.918 2.25Z",
                        ...m,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M7.41797 2.25V15.75",
                        ...m,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M11.168 6.75L13.418 9L11.168 11.25",
                        ...m,
                        ...n
                    }))
                },
                S = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 18 18",
                        fill: f,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M15.75 1.5V6H11.25",
                        ...m,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M15.7516 9.75011C15.5923 11.2546 14.9323 12.6619 13.8774 13.7463C12.8225 14.8307 11.4338 15.5293 9.93435 15.7299C8.43486 15.9306 6.91143 15.6217 5.60853 14.8528C4.30562 14.0839 3.29878 12.8997 2.74957 11.49C2.20035 10.0804 2.14061 8.52708 2.57993 7.07942C3.01925 5.63175 3.93216 4.37364 5.17216 3.50696C6.41217 2.64029 7.90737 2.2153 9.41784 2.30019C10.9283 2.38509 12.3665 2.97494 13.5016 3.97511L15.7516 6.00011",
                        ...m,
                        ...n
                    }))
                },
                O = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 16 16",
                        fill: f,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M10.6807 6.23235H14.0091V6.23117M1.98828 13.0963V9.76791M1.98828 9.76791L5.31671 9.76791M1.98828 9.76791L4.10888 11.8899C4.76923 12.5515 5.60726 13.0534 6.5751 13.3127C9.50916 14.0989 12.525 12.3577 13.3112 9.42365M2.68601 6.57664C3.47219 3.64258 6.48804 1.90137 9.42211 2.68755C10.3899 2.94688 11.228 3.44883 11.8883 4.11042L14.0091 6.23117M14.0091 2.90395V6.23117",
                        ...m,
                        strokeWidth: u,
                        ...n
                    }))
                },
                M = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 14 14",
                        fill: f,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M2.1875 2.1875V4.8125M2.1875 2.1875H4.8125M2.1875 2.1875L5.25 5.25M2.1875 11.8125V9.1875M2.1875 11.8125H4.8125M2.1875 11.8125L5.25 8.75M11.8125 2.1875L9.1875 2.1875M11.8125 2.1875V4.8125M11.8125 2.1875L8.75 5.25M11.8125 11.8125H9.1875M11.8125 11.8125V9.1875M11.8125 11.8125L8.75 8.75",
                        ...m,
                        strokeWidth: u,
                        ...n
                    }))
                },
                L = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 16 16",
                        fill: f,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M6 6L6 3M6 6L3 6M6 6L2.5 2.5M6 10L6 13M6 10L3 10M6 10L2.5 13.5M10 6H13M10 6V3M10 6L13.5 2.5M10 10H13M10 10L10 13M10 10L13.5 13.5",
                        ...m,
                        strokeWidth: u,
                        ...n
                    }))
                },
                T = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return {
                        left: (0, e.createElement)("svg", {
                            width: c,
                            height: c,
                            viewBox: "0 0 16 16",
                            fill: f,
                            ...t
                        }, (0, e.createElement)("path", {
                            d: "M9.06 4L10 4.94L6.94667 8L10 11.06L9.06 12L5.06 8L9.06 4Z",
                            ...m,
                            strokeWidth: u,
                            ...n
                        })),
                        right: (0, e.createElement)("svg", {
                            width: c,
                            height: c,
                            viewBox: "0 0 16 16",
                            fill: f,
                            ...t
                        }, (0, e.createElement)("path", {
                            d: "M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z",
                            ...m,
                            strokeWidth: u,
                            ...n
                        }))
                    }
                },
                z = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 16 16",
                        fill: f,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M10.1213 10.1213C9.84276 10.3999 9.51204 10.6209 9.14806 10.7717C8.78408 10.9224 8.39397 11 8 11C7.60603 11 7.21592 10.9224 6.85194 10.7717C6.48796 10.6209 6.15724 10.3999 5.87867 10.1213M14 8C14 8.78793 13.8448 9.56815 13.5433 10.2961C13.2417 11.0241 12.7998 11.6855 12.2426 12.2426C11.6855 12.7998 11.0241 13.2417 10.2961 13.5433C9.56815 13.8448 8.78793 14 8 14C7.21207 14 6.43185 13.8448 5.7039 13.5433C4.97595 13.2417 4.31451 12.7998 3.75736 12.2426C3.20021 11.6855 2.75825 11.0241 2.45672 10.2961C2.15519 9.56815 2 8.78793 2 8C2 6.4087 2.63214 4.88258 3.75736 3.75736C4.88258 2.63214 6.4087 2 8 2C9.5913 2 11.1174 2.63214 12.2426 3.75736C13.3679 4.88258 14 6.4087 14 8ZM6.5 6.5C6.5 6.776 6.388 7 6.25 7C6.112 7 6 6.776 6 6.5C6 6.224 6.112 6 6.25 6C6.388 6 6.5 6.224 6.5 6.5ZM6.25 6.5H6.25533V6.51H6.25V6.5ZM10 6.5C10 6.776 9.888 7 9.75 7C9.612 7 9.5 6.776 9.5 6.5C9.5 6.224 9.612 6 9.75 6C9.888 6 10 6.224 10 6.5ZM9.75 6.5H9.75533V6.51H9.75V6.5Z",
                        ...m,
                        strokeWidth: u,
                        ...n
                    }))
                },
                I = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 16 16",
                        fill: f,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M7 14L10.5 6.5L14 14M8 12H13M2 3.74733C3.32693 3.58221 4.66283 3.49961 6 3.5M6 3.5C6.74667 3.5 7.48867 3.52533 8.22267 3.576M6 3.5V2M8.22267 3.576C7.45067 7.10533 5.12667 10.0533 2 11.668M8.22267 3.576C8.82 3.61667 9.41267 3.674 10 3.74733M6.94067 9.41067C5.84731 8.29908 4.98076 6.98533 4.38933 5.54267",
                        ...m,
                        strokeWidth: u,
                        ...n
                    }))
                },
                P = e => e.filter(Boolean).join(" "),
                A = async e => {
                    if (window.navigator.clipboard && window.isSecureContext) await window.navigator.clipboard.writeText(e);
                    else {
                        const t = document.createElement("textarea");
                        t.value = e, t.style.position = "absolute", t.style.left = "-999999px", t.style.opacity = "0", document.body.prepend(t), t.select();
                        try {
                            document.execCommand("copy")
                        } catch (e) {
                            console.error(e)
                        } finally {
                            t.remove()
                        }
                    }
                };
            var R = window.wp.richText,
                V = window.wp.i18n,
                N = window.wp.apiFetch,
                D = n.n(N);
            const H = async e => {
                    const {
                        userCommand: t,
                        previousMessages: n,
                        useSystemMessage: i
                    } = e, r = [];
                    n ? .length && n.forEach((e => {
                        r.push({
                            role: e.role,
                            content: e.message
                        })
                    })), r.push({
                        role: "user",
                        content: t
                    });
                    const a = {
                        message_array: r,
                        use_system_message: i
                    };
                    return D()({
                        path: "zip_ai/generate",
                        method: "POST",
                        data: a
                    })
                },
                F = {
                    color: "#64748b"
                },
                j = (0, e.createContext)({
                    chatLog: [],
                    setChatLog: null,
                    isOpen: !1,
                    setIsOpen: null,
                    isRichText: !1,
                    updateContent: null,
                    currentText: ""
                }),
                B = (0, e.createElement)("div", {
                    className: "zip-ai-sidebar__chat-loader"
                }, (0, e.createElement)("div", {
                    className: "zip-ai-sidebar__chat-loader--dot dot-1"
                }), (0, e.createElement)("div", {
                    className: "zip-ai-sidebar__chat-loader--dot dot-2"
                }), (0, e.createElement)("div", {
                    className: "zip-ai-sidebar__chat-loader--dot dot-3"
                })),
                U = (e, t) => e ? .filter((e => "ai" === e.from || "content" === e.from)) ? .pop() ? .message || t,
                $ = (e, t, n) => {
                    let i;
                    switch (t) {
                        case "progress":
                            i = e ? .progress;
                            break;
                        case "success":
                            i = e ? .success, setTimeout((() => {
                                n("default")
                            }), 750);
                            break;
                        default:
                            i = e.default
                    }
                    return i
                },
                W = t => {
                    const {
                        message: n
                    } = t, [i, r] = (0, e.useState)("default");
                    if (!n) return null;
                    const a = n.split("\n"),
                        o = a.shift(),
                        s = a.join("\n").trim(),
                        l = {
                            default: E(F),
                            progress: _(F),
                            success: y(F)
                        };
                    return (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-bubble--code-block"
                    }, (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-bubble--code-block-title"
                    }, o, (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-bubble--code-block-actions"
                    }, (0, e.createElement)("button", {
                        className: "zip-ai-sidebar__chat-bubble--code-block-button",
                        onClick: async () => {
                            try {
                                r("progress"), await A(s), r("success")
                            } catch (e) {
                                console.error(e), r("default")
                            }
                        }
                    }, $(l, i, r)))), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-bubble--code-block-content"
                    }, (0, e.createElement)("code", null, s)))
                };
            var Z = t => {
                const {
                    chatBubble: n,
                    updateContent: i,
                    closeModal: r,
                    setGenerating: a,
                    regeneratingId: o,
                    setRegeneratingId: s,
                    aiResponseError: l,
                    setAiResponseError: c,
                    setUserInput: u = null,
                    setRefreshFilters: d = null,
                    editCheck: p = null,
                    setEditCheck: f = null
                } = t, {
                    chatLog: h,
                    setChatLog: m
                } = (0, e.useContext)(j), [g, v] = (0, e.useState)(0), [b, C] = (0, e.useState)("default"), [x, k] = (0, e.useState)({
                    enabled: !1,
                    value: n ? .message
                }), S = n ? .variations ? .length && n.variations.length > 1, [M, L] = (0, e.useState)(null), z = e => L(e), I = () => L(null);
                (0, e.useEffect)((() => {
                    !o && "ai" === n ? .from && S && v(n.variations.length - 1)
                }), [o]), (0, e.useEffect)((() => {
                    "ai" === n ? .from && n ? .id && S && (h[n.id].message = n.variations[g], m([...h]))
                }), [g]), (0, e.useEffect)((() => {
                    "ai" === n ? .from && n ? .variations && n ? .id && n.id !== h ? .length - 1 && (h[n.id] && (h[n.id].variations = []), m([...h]))
                }), [h ? .length]);
                let R, N, D = n ? .action;
                const H = l ? n ? .id === h ? .length - 2 : n ? .id === h ? .length - 1;
                switch (n ? .from) {
                    case "content":
                        R = (0, V.__)("Content:", "zip-ai");
                        break;
                    case "user":
                        R = (0, V.__)("You:", "zip-ai"), N = p ? void 0 : [{
                            label: (0, V.__)("Edit", "zip-ai"),
                            icon: w(F),
                            execute: () => {
                                null !== f && (f(!0), L(null)), x.enabled = !0, k({ ...x
                                })
                            }
                        }];
                        break;
                    case "ai":
                        if (R = (0, V.__)("AI Assistant:", "zip-ai"), !n ? .variations ? .length && n ? .message && H && (n.variations = [n ? .message]), N = [], D = {
                                execute: async () => {
                                    if (null !== i) i(n ? .message);
                                    else try {
                                        await A(n ? .message)
                                    } catch {}
                                    r()
                                },
                                label: null !== i ? (0, V.__)("Use This", "zip-ai") : (0, V.__)("Copy & Close", "zip-ai")
                            }, N.push({
                                label: (0, V.__)("Copy", "zip-ai"),
                                multiIcons: {
                                    default: E(F),
                                    progress: _(F),
                                    success: y(F)
                                },
                                execute: async () => {
                                    try {
                                        C("progress"), await A(n ? .message), C("success")
                                    } catch (e) {
                                        console.error(e), C("default")
                                    }
                                }
                            }), !H || !n ? .variations ? .length) break;
                        N.push({
                            label: (0, V.__)("Regenerate", "zip-ai"),
                            icon: O(F),
                            execute: () => {
                                q({
                                    chatBubble: n,
                                    regenerationCommand: "Rephrase the last assistant message, ensuring that it abides by the last user command.",
                                    setGenerating: a,
                                    setRegeneratingId: s,
                                    setAiResponseError: c,
                                    chatLog: h,
                                    setChatLog: m
                                })
                            }
                        })
                }
                const U = () => (0, e.createElement)(e.Fragment, null, (R || N) && (0, e.createElement)("div", {
                    className: "zip-ai-sidebar__chat-bubble--header"
                }, R && (0, e.createElement)("h3", {
                    className: "zip-ai-sidebar__chat-bubble--user"
                }, R), N && (0, e.createElement)("div", {
                    className: P(["zip-ai-sidebar__chat-bubble--interaction", "user" === n ? .from && "zip-ai-sidebar__chat-bubble--interaction-on-hover"])
                }, "user" === n ? .from && N.map(((t, i) => {
                    var r;
                    return (0, e.createElement)("button", {
                        className: "zip-ai-sidebar__chat-bubble--shortcut",
                        key: i,
                        onClick: () => t ? .execute(),
                        disabled: n.id === o,
                        onMouseEnter: () => z(i),
                        onMouseLeave: I
                    }, null !== (r = "user" === n ? .from && t ? .multiIcons) && void 0 !== r ? r : t ? .icon, M === i && (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-bubble--interaction--tooltip components-popover components-popover is-positioned"
                    }, (0, e.createElement)("div", {
                        className: "components-popover__content"
                    }, t ? .label)))
                })))), "user" === n ? .from && x ? .enabled ? (() => {
                    const t = () => {
                            if (null === u || null === d) return k({
                                enabled: !1,
                                value: n ? .message
                            }), void(null !== f && f(!1));
                            const e = 0 === n.id,
                                t = e ? void 0 : x.value,
                                i = e ? x.value : h[n.id - 1] ? .message || "",
                                r = h.slice(0, n.id);
                            G({
                                textContent: i,
                                textCommand: t,
                                setGenerating: a,
                                setText: u,
                                setRefreshFilters: d,
                                setAiResponseError: c,
                                chatLog: r,
                                fallbackChatlog: h,
                                setChatLog: m
                            }), x.enabled = !1, k({ ...x
                            }), null !== f && f(!1)
                        },
                        i = e => "" === e ? .value ? .trim();
                    return (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-editor"
                    }, (0, e.createElement)("input", {
                        className: P(["zip-ai-sidebar__chat-editor--input", i(x) && "zip-ai-sidebar__chat-editor--input-error"]),
                        type: "text",
                        value: x.value,
                        onChange: e => {
                            x.value = e.target.value, k({ ...x
                            })
                        },
                        onKeyDown: e => {
                            "Enter" !== e.key || i(e.target) || (x.value = e.target.value, k({ ...x
                            }), t())
                        }
                    }), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-editor--actions"
                    }, (0, e.createElement)("button", {
                        className: "zip-ai-sidebar__chat-editor--action-primary",
                        onClick: () => {
                            t()
                        },
                        disabled: i(x)
                    }, (0, V.__)("Update", "zip-ai")), (0, e.createElement)("button", {
                        onClick: () => {
                            k({
                                enabled: !1,
                                value: n ? .message
                            }), f(!1)
                        }
                    }, (0, V.__)("Cancel", "zip-ai"))), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-editor--info"
                    }, (0, V.__)("Note: All subsequent messages will be deleted after you update.", "zip-ai")))
                })() : (0, e.createElement)(e.Fragment, null, n ? .type || n.id !== o ? (0, e.createElement)(e.Fragment, null, (0, e.createElement)("p", {
                    className: "zip-ai-sidebar__chat-bubble--message"
                }, "ai" === n ? .from ? (t => {
                    if (!t) return null;
                    const n = t => {
                            if (!t.includes("`")) return t;
                            const n = [];
                            return t.split("`").forEach(((t, i) => {
                                0 == i % 2 ? n.push(t) : n.push((0, e.createElement)("span", {
                                    className: "zip-ai-sidebar__chat-bubble--code"
                                }, t))
                            })), n
                        },
                        i = t.split("```");
                    if (1 === i.length) return n(t);
                    const r = [];
                    return i.forEach(((t, i) => {
                        0 == i % 2 && r.push(n(t)), 1 == i % 2 && r.push((0, e.createElement)(W, {
                            message: t
                        }))
                    })), r
                })(n ? .message) : n ? .message), D && (0, e.createElement)("div", {
                    className: "zip-ai-sidebar__chat-bubble--footer"
                }, (0, e.createElement)("div", {
                    className: "zip-ai-sidebar__chat-bubble--wrapper"
                }, (0, e.createElement)("button", {
                    className: "zip-ai-sidebar__chat-bubble--action",
                    onClick: () => {
                        D ? .execute()
                    }
                }, D ? .label || (0, V.__)("Click Here", "zip-ai")), N && (0, e.createElement)("div", {
                    className: P(["zip-ai-sidebar__chat-bubble--interaction"])
                }, N.map(((t, i) => (0, e.createElement)("button", {
                    className: "zip-ai-sidebar__chat-bubble--shortcut",
                    key: i,
                    onClick: () => t ? .execute(),
                    disabled: n.id === o,
                    onMouseEnter: () => z(i),
                    onMouseLeave: I
                }, "ai" === n ? .from && t ? .multiIcons ? $(t.multiIcons, b, C) : t ? .icon, M === i && (0, e.createElement)("div", {
                    className: "zip-ai-sidebar__chat-bubble--interaction--tooltip components-popover components-popover is-positioned"
                }, (0, e.createElement)("div", {
                    className: "components-popover__content"
                }, t ? .label))))))), H && S ? (0, e.createElement)("div", {
                    className: "zip-ai-sidebar__chat-bubble--pagination"
                }, (0, e.createElement)("button", {
                    onClick: () => {
                        v(g - 1)
                    },
                    disabled: 0 === g
                }, T(F).left), (0, e.createElement)("span", null, (0, V.sprintf)(
                    // translators: %1$d is the current page, %2$d is the total number of pages.
                    (0, V.__)("%1$d / %2$d", "zip-ai"), g + 1, n.variations.length)), (0, e.createElement)("button", {
                    onClick: () => {
                        v(g + 1)
                    },
                    disabled: g === n.variations.length - 1
                }, T(F).right)) : (0, e.createElement)(e.Fragment, null))) : B));
                return (0, e.createElement)("div", {
                    className: P(["zip-ai-sidebar__chat-bubble", n ? .type && `zip-ai-sidebar__chat-bubble--type-${n.type}`, n ? .icon && "zip-ai-sidebar__chat-bubble--has-icon"])
                }, n ? .icon ? (0, e.createElement)(e.Fragment, null, (0, e.createElement)("div", {
                    className: "zip-ai-sidebar__chat-bubble--icon-wrapper"
                }, n.icon), (0, e.createElement)("div", {
                    className: "zip-ai-sidebar__chat-bubble--icon-content"
                }, U())) : U())
            };
            const G = e => {
                    const {
                        startingText: t = "",
                        textContent: n,
                        textCommand: i,
                        setGenerating: r,
                        setText: a,
                        setRefreshFilters: o,
                        setAiResponseError: s,
                        chatLog: l,
                        setChatLog: c,
                        fallbackChatlog: u = null,
                        oneClickCommand: d = null,
                        setValidForSaving: p = null,
                        useSystemMessage: f = !0
                    } = e, h = u || l || [];
                    let m = l ? .length ? l[l.length - 1].id + 1 : 0,
                        g = [...l, {
                            id: m,
                            from: "user",
                            message: d || (l ? .length || t ? i : n)
                        }];
                    ++m, r(!0), s(""), c([...g]);
                    const v = 0 === m ? [] : (e => {
                        const t = [];
                        return e.forEach((e => {
                            t.push({
                                role: "ai" === e.from ? "assistant" : "user",
                                message: e.message
                            })
                        })), t
                    })(h);
                    H({
                        userCommand: i || n,
                        previousMessages: v,
                        useSystemMessage: f
                    }).then((e => {
                        const t = e.data;
                        r(!1), e.success ? (t.message.startsWith('"') && t.message.endsWith('"') && (t.message = t.message.slice(1, -1)), g = [...g, {
                            id: m,
                            from: "ai",
                            message: t.message.trim()
                        }], a(""), c([...g]), "function" == typeof p && p(!0)) : (s(t.message), c([...h])), o(!0)
                    })).catch((() => {
                        r(!1)
                    })), o(!0)
                },
                q = e => {
                    const {
                        chatBubble: t,
                        regenerationCommand: n,
                        setGenerating: i,
                        setRegeneratingId: r,
                        setAiResponseError: a,
                        chatLog: o,
                        setChatLog: s
                    } = e, l = [];
                    o[t.id - 2] ? .message && l.push({
                        role: "assistant",
                        message: o[t.id - 2].message
                    }), l.push({
                        role: "user",
                        message: o[t.id - 1].message
                    }, {
                        role: "assistant",
                        message: t.variations[0]
                    }), t ? .variations ? .length && t.variations.length > 1 && t.variations.forEach(((e, t) => {
                        0 !== t && l.push({
                            role: "user",
                            message: n
                        }, {
                            role: "assistant",
                            message: e
                        })
                    })), r(t.id), i(!0), a(""), H({
                        userCommand: n,
                        previousMessages: l,
                        useSystemMessage: !1
                    }).then((e => {
                        const n = e.data;
                        i(!1), r(null), e.success ? (n.message.startsWith('"') && n.message.endsWith('"') && (n.message = n.message.slice(1, -1)), o.forEach(((e, i) => {
                            t.id === e.id && (o[i].message = n.message.trim(), o[i].variations.push(n.message.trim()), s([...o]))
                        }))) : a(n.message)
                    })).catch((() => {
                        i(!1), r(null)
                    }))
                };
            var Y = n(426),
                X = Y.default || Y,
                K = t => {
                    const {
                        chatLogId: n,
                        isAuthorized: i,
                        generationRef: r,
                        currentText: a,
                        userInput: o,
                        setUserInput: s,
                        setRefreshFilters: l,
                        generating: u,
                        setGenerating: d,
                        setAiResponseError: p,
                        validForSaving: h,
                        setValidForSaving: g
                    } = t, {
                        chatLog: b,
                        setChatLog: y
                    } = (0, e.useContext)(j);
                    let C = zip_ai_react ? .collab_product_details;
                    "object" == typeof C && null !== C || (C = {});
                    const {
                        ai_assistant_authorized_disable_url: _,
                        ai_assistant_unauthorized_disable_url: E
                    } = C, w = () => {
                        let e, t;
                        b ? .length || a ? (e = U(b, a), t = o) : e = o, G({
                            startingText: a,
                            textContent: e,
                            textCommand: t,
                            setGenerating: d,
                            setText: s,
                            setRefreshFilters: l,
                            setAiResponseError: p,
                            chatLog: b,
                            setChatLog: y,
                            setValidForSaving: g
                        })
                    };
                    return (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__input-prompt"
                    }, (0, e.createElement)("textarea", {
                        className: "zip-ai-sidebar__input-prompt--text",
                        onChange: e => {
                            s(e.target ? .value || "")
                        },
                        onKeyDown: e => {
                            "Enter" !== e.key || e.shiftKey || (e.preventDefault(), "" !== o.trim() && w())
                        },
                        rows: "3",
                        ref: r,
                        value: o,
                        disabled: u || !i,
                        placeholder: u ? (0, V.__)("Generating…", "zip-ai") : b ? .length || "" === a ? (0, V.__)("How can I help you?", "zip-ai") : a
                    }), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__input-prompt--disclaimer"
                    }, i && _ || !i && E ? X((0, V.sprintf)(
                        // Translators: %1$s is the opening link tag, %2$s is the closing link tag.
                        (0, V.__)("AI Assistant can make mistakes. Want to %1$sdisable it?%2$s", "zip-ai"), `<a href="${i?_:E}" target="_blank">`, "</a>")) : (0, V.__)("AI Assistant can make mistakes.", "zip-ai")), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__input-prompt--footer"
                    }, (0, e.createElement)("button", {
                        className: "zip-ai-sidebar__input-prompt--button",
                        onClick: () => w(),
                        disabled: "" === o.trim() || u || !i
                    }, v({
                        width: 16,
                        height: 16,
                        color: "#fff"
                    }), (0, V.__)("Write for me", "zip-ai")), h && (0, e.createElement)("button", {
                        className: "zip-ai-sidebar__input-prompt--button secondary-variant",
                        onClick: () => {
                            localStorage.removeItem(`zipAiPreservedChatlog${n}`), g(!1), y(a ? [{
                                id: 0,
                                from: "content",
                                message: a
                            }] : []), l(!0)
                        },
                        disabled: u
                    }, function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return (0, e.createElement)("svg", {
                            width: c,
                            height: c,
                            viewBox: "0 0 16 16",
                            fill: f,
                            ...t
                        }, (0, e.createElement)("path", {
                            d: "M4 12L12 4M4 4L12 12",
                            ...m,
                            ...n
                        }))
                    }({
                        color: "#fff"
                    }), (0, V.__)("Clear Chat", "zip-ai"))))
                };
            const J = {
                    color: "#64748b"
                },
                Q = (e, t, n) => {
                    t(e), n ? .current ? .focus()
                },
                ee = [{
                    value: "Arabic",
                    label: (0, V.__)("Arabic", "zip-ai")
                }, {
                    value: "Azerbaijani",
                    label: (0, V.__)("Azerbaijani", "zip-ai")
                }, {
                    value: "Bengali",
                    label: (0, V.__)("Bengali", "zip-ai")
                }, {
                    value: "Belarusian",
                    label: (0, V.__)("Belarusian", "zip-ai")
                }, {
                    value: "Bulgarian",
                    label: (0, V.__)("Bulgarian", "zip-ai")
                }, {
                    value: "Chinese",
                    label: (0, V.__)("Chinese (Simplified)", "zip-ai")
                }, {
                    value: "Croatian",
                    label: (0, V.__)("Croatian", "zip-ai")
                }, {
                    value: "Czech",
                    label: (0, V.__)("Czech", "zip-ai")
                }, {
                    value: "Danish",
                    label: (0, V.__)("Danish", "zip-ai")
                }, {
                    value: "Dutch",
                    label: (0, V.__)("Dutch", "zip-ai")
                }, {
                    value: "English",
                    label: (0, V.__)("English", "zip-ai")
                }, {
                    value: "Estonian",
                    label: (0, V.__)("Estonian", "zip-ai")
                }, {
                    value: "Finnish",
                    label: (0, V.__)("Finnish", "zip-ai")
                }, {
                    value: "Filipino",
                    label: (0, V.__)("Filipino", "zip-ai")
                }, {
                    value: "French",
                    label: (0, V.__)("French", "zip-ai")
                }, {
                    value: "Georgian",
                    label: (0, V.__)("Georgian", "zip-ai")
                }, {
                    value: "German",
                    label: (0, V.__)("German", "zip-ai")
                }, {
                    value: "Greek",
                    label: (0, V.__)("Greek", "zip-ai")
                }, {
                    value: "Hebrew",
                    label: (0, V.__)("Hebrew", "zip-ai")
                }, {
                    value: "Hindi",
                    label: (0, V.__)("Hindi", "zip-ai")
                }, {
                    value: "Hungarian",
                    label: (0, V.__)("Hungarian", "zip-ai")
                }, {
                    value: "Indonesian",
                    label: (0, V.__)("Indonesian", "zip-ai")
                }, {
                    value: "Italian",
                    label: (0, V.__)("Italian", "zip-ai")
                }, {
                    value: "Japanese",
                    label: (0, V.__)("Japanese", "zip-ai")
                }, {
                    value: "Kazakh",
                    label: (0, V.__)("Kazakh", "zip-ai")
                }, {
                    value: "Korean",
                    label: (0, V.__)("Korean", "zip-ai")
                }, {
                    value: "Latvian",
                    label: (0, V.__)("Latvian", "zip-ai")
                }, {
                    value: "Lithuanian",
                    label: (0, V.__)("Lithuanian", "zip-ai")
                }, {
                    value: "Macedonian",
                    label: (0, V.__)("Macedonian", "zip-ai")
                }, {
                    value: "Malay",
                    label: (0, V.__)("Malay", "zip-ai")
                }, {
                    value: "Norwegian",
                    label: (0, V.__)("Norwegian", "zip-ai")
                }, {
                    value: "Polish",
                    label: (0, V.__)("Polish", "zip-ai")
                }, {
                    value: "Portuguese",
                    label: (0, V.__)("Portuguese", "zip-ai")
                }, {
                    value: "Romanian",
                    label: (0, V.__)("Romanian", "zip-ai")
                }, {
                    value: "Russian",
                    label: (0, V.__)("Russian", "zip-ai")
                }, {
                    value: "Serbian",
                    label: (0, V.__)("Serbian", "zip-ai")
                }, {
                    value: "Slovak",
                    label: (0, V.__)("Slovak", "zip-ai")
                }, {
                    value: "Slovenian",
                    label: (0, V.__)("Slovenian", "zip-ai")
                }, {
                    value: "Spanish",
                    label: (0, V.__)("Spanish", "zip-ai")
                }, {
                    value: "Swahili",
                    label: (0, V.__)("Swahili", "zip-ai")
                }, {
                    value: "Swedish",
                    label: (0, V.__)("Swedish", "zip-ai")
                }, {
                    value: "Thai",
                    label: (0, V.__)("Thai", "zip-ai")
                }, {
                    value: "Turkish",
                    label: (0, V.__)("Turkish", "zip-ai")
                }, {
                    value: "Ukrainian",
                    label: (0, V.__)("Ukrainian", "zip-ai")
                }, {
                    value: "Urdu",
                    label: (0, V.__)("Urdu", "zip-ai")
                }, {
                    value: "Vietnamese",
                    label: (0, V.__)("Vietnamese", "zip-ai")
                }],
                te = [{
                    value: "friendly",
                    label: (0, V.__)("Friendly", "zip-ai")
                }, {
                    value: "formal",
                    label: (0, V.__)("Formal", "zip-ai")
                }, {
                    value: "casual",
                    label: (0, V.__)("Casual", "zip-ai")
                }, {
                    value: "professional",
                    label: (0, V.__)("Professional", "zip-ai")
                }, {
                    value: "informative",
                    label: (0, V.__)("Informative", "zip-ai")
                }, {
                    value: "playful",
                    label: (0, V.__)("Playful", "zip-ai")
                }, {
                    value: "serious",
                    label: (0, V.__)("Serious", "zip-ai")
                }, {
                    value: "humorous",
                    label: (0, V.__)("Humorous", "zip-ai")
                }, {
                    value: "polite",
                    label: (0, V.__)("Polite", "zip-ai")
                }, {
                    value: "emotional",
                    label: (0, V.__)("Emotional", "zip-ai")
                }],
                ne = e => {
                    e({
                        textCommand: "Fix the grammar and any spelling mistakes in the last message.",
                        oneClickCommand: (0, V.__)("Fix any grammatical mistakes.", "zip-ai"),
                        useSystemMessage: !1
                    })
                },
                ie = e => {
                    e({
                        textCommand: "Rewrite it by making it 5 to 10 words longer - and keep it in the same language as the last message.",
                        oneClickCommand: (0, V.__)("Make it longer.", "zip-ai"),
                        useSystemMessage: !1
                    })
                },
                re = e => {
                    e({
                        textCommand: "Make it shorter - and keep it in the same language as the last message.",
                        oneClickCommand: (0, V.__)("Make it shorter.", "zip-ai"),
                        useSystemMessage: !1
                    })
                },
                ae = (e, t) => {
                    t({
                        textCommand: `Rewrite in a ${e.value} tone - keep it in the same language, and keep it the exact same length.`
                            /* translators: %s: tone name */
                            ,
                        oneClickCommand: (0, V.sprintf)((0, V.__)("Change tone to %s.", "zip-ai"), e.label),
                        useSystemMessage: !1
                    })
                },
                oe = e => {
                    e({
                        textCommand: "Rewrite the text to convey the same meaning in different words, maintaining the original language and similar length.",
                        oneClickCommand: (0, V.__)("Rephrase", "zip-ai"),
                        useSystemMessage: !1
                    })
                };

            function se(e) {
                return se = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, se(e)
            }

            function le(e) {
                var t = function(e, t) {
                    if ("object" !== se(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var i = n.call(e, "string");
                        if ("object" !== se(i)) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(e);
                return "symbol" === se(t) ? t : String(t)
            }

            function ce(e, t, n) {
                return (t = le(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function ue(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function de(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ue(Object(n), !0).forEach((function(t) {
                        ce(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ue(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function pe() {
                return pe = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                }, pe.apply(this, arguments)
            }
            var fe = n(196),
                he = function() {
                    function e(e) {
                        var t = this;
                        this._insertTag = function(e) {
                            var n;
                            n = 0 === t.tags.length ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling, t.container.insertBefore(e, n), t.tags.push(e)
                        }, this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.insertionPoint = e.insertionPoint, this.before = null
                    }
                    var t = e.prototype;
                    return t.hydrate = function(e) {
                        e.forEach(this._insertTag)
                    }, t.insert = function(e) {
                        this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(function(e) {
                            var t = document.createElement("style");
                            return t.setAttribute("data-emotion", e.key), void 0 !== e.nonce && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t
                        }(this));
                        var t = this.tags[this.tags.length - 1];
                        if (this.isSpeedy) {
                            var n = function(e) {
                                if (e.sheet) return e.sheet;
                                for (var t = 0; t < document.styleSheets.length; t++)
                                    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                            }(t);
                            try {
                                n.insertRule(e, n.cssRules.length)
                            } catch (e) {}
                        } else t.appendChild(document.createTextNode(e));
                        this.ctr++
                    }, t.flush = function() {
                        this.tags.forEach((function(e) {
                            return e.parentNode && e.parentNode.removeChild(e)
                        })), this.tags = [], this.ctr = 0
                    }, e
                }(),
                me = Math.abs,
                ge = String.fromCharCode,
                ve = Object.assign;

            function be(e) {
                return e.trim()
            }

            function ye(e, t, n) {
                return e.replace(t, n)
            }

            function Ce(e, t) {
                return e.indexOf(t)
            }

            function _e(e, t) {
                return 0 | e.charCodeAt(t)
            }

            function Ee(e, t, n) {
                return e.slice(t, n)
            }

            function we(e) {
                return e.length
            }

            function xe(e) {
                return e.length
            }

            function ke(e, t) {
                return t.push(e), e
            }
            var Se = 1,
                Oe = 1,
                Me = 0,
                Le = 0,
                Te = 0,
                ze = "";

            function Ie(e, t, n, i, r, a, o) {
                return {
                    value: e,
                    root: t,
                    parent: n,
                    type: i,
                    props: r,
                    children: a,
                    line: Se,
                    column: Oe,
                    length: o,
                    return: ""
                }
            }

            function Pe(e, t) {
                return ve(Ie("", null, null, "", null, null, 0), e, {
                    length: -e.length
                }, t)
            }

            function Ae() {
                return Te = Le > 0 ? _e(ze, --Le) : 0, Oe--, 10 === Te && (Oe = 1, Se--), Te
            }

            function Re() {
                return Te = Le < Me ? _e(ze, Le++) : 0, Oe++, 10 === Te && (Oe = 1, Se++), Te
            }

            function Ve() {
                return _e(ze, Le)
            }

            function Ne() {
                return Le
            }

            function De(e, t) {
                return Ee(ze, e, t)
            }

            function He(e) {
                switch (e) {
                    case 0:
                    case 9:
                    case 10:
                    case 13:
                    case 32:
                        return 5;
                    case 33:
                    case 43:
                    case 44:
                    case 47:
                    case 62:
                    case 64:
                    case 126:
                    case 59:
                    case 123:
                    case 125:
                        return 4;
                    case 58:
                        return 3;
                    case 34:
                    case 39:
                    case 40:
                    case 91:
                        return 2;
                    case 41:
                    case 93:
                        return 1
                }
                return 0
            }

            function Fe(e) {
                return Se = Oe = 1, Me = we(ze = e), Le = 0, []
            }

            function je(e) {
                return ze = "", e
            }

            function Be(e) {
                return be(De(Le - 1, We(91 === e ? e + 2 : 40 === e ? e + 1 : e)))
            }

            function Ue(e) {
                for (;
                    (Te = Ve()) && Te < 33;) Re();
                return He(e) > 2 || He(Te) > 3 ? "" : " "
            }

            function $e(e, t) {
                for (; --t && Re() && !(Te < 48 || Te > 102 || Te > 57 && Te < 65 || Te > 70 && Te < 97););
                return De(e, Ne() + (t < 6 && 32 == Ve() && 32 == Re()))
            }

            function We(e) {
                for (; Re();) switch (Te) {
                    case e:
                        return Le;
                    case 34:
                    case 39:
                        34 !== e && 39 !== e && We(Te);
                        break;
                    case 40:
                        41 === e && We(e);
                        break;
                    case 92:
                        Re()
                }
                return Le
            }

            function Ze(e, t) {
                for (; Re() && e + Te !== 57 && (e + Te !== 84 || 47 !== Ve()););
                return "/*" + De(t, Le - 1) + "*" + ge(47 === e ? e : Re())
            }

            function Ge(e) {
                for (; !He(Ve());) Re();
                return De(e, Le)
            }
            var qe = "-ms-",
                Ye = "-moz-",
                Xe = "-webkit-",
                Ke = "comm",
                Je = "rule",
                Qe = "decl",
                et = "@keyframes";

            function tt(e, t) {
                for (var n = "", i = xe(e), r = 0; r < i; r++) n += t(e[r], r, e, t) || "";
                return n
            }

            function nt(e, t, n, i) {
                switch (e.type) {
                    case "@layer":
                        if (e.children.length) break;
                    case "@import":
                    case Qe:
                        return e.return = e.return || e.value;
                    case Ke:
                        return "";
                    case et:
                        return e.return = e.value + "{" + tt(e.children, i) + "}";
                    case Je:
                        e.value = e.props.join(",")
                }
                return we(n = tt(e.children, i)) ? e.return = e.value + "{" + n + "}" : ""
            }

            function it(e) {
                return je(rt("", null, null, null, [""], e = Fe(e), 0, [0], e))
            }

            function rt(e, t, n, i, r, a, o, s, l) {
                for (var c = 0, u = 0, d = o, p = 0, f = 0, h = 0, m = 1, g = 1, v = 1, b = 0, y = "", C = r, _ = a, E = i, w = y; g;) switch (h = b, b = Re()) {
                    case 40:
                        if (108 != h && 58 == _e(w, d - 1)) {
                            -1 != Ce(w += ye(Be(b), "&", "&\f"), "&\f") && (v = -1);
                            break
                        }
                    case 34:
                    case 39:
                    case 91:
                        w += Be(b);
                        break;
                    case 9:
                    case 10:
                    case 13:
                    case 32:
                        w += Ue(h);
                        break;
                    case 92:
                        w += $e(Ne() - 1, 7);
                        continue;
                    case 47:
                        switch (Ve()) {
                            case 42:
                            case 47:
                                ke(ot(Ze(Re(), Ne()), t, n), l);
                                break;
                            default:
                                w += "/"
                        }
                        break;
                    case 123 * m:
                        s[c++] = we(w) * v;
                    case 125 * m:
                    case 59:
                    case 0:
                        switch (b) {
                            case 0:
                            case 125:
                                g = 0;
                            case 59 + u:
                                -1 == v && (w = ye(w, /\f/g, "")), f > 0 && we(w) - d && ke(f > 32 ? st(w + ";", i, n, d - 1) : st(ye(w, " ", "") + ";", i, n, d - 2), l);
                                break;
                            case 59:
                                w += ";";
                            default:
                                if (ke(E = at(w, t, n, c, u, r, s, y, C = [], _ = [], d), a), 123 === b)
                                    if (0 === u) rt(w, t, E, E, C, a, d, s, _);
                                    else switch (99 === p && 110 === _e(w, 3) ? 100 : p) {
                                        case 100:
                                        case 108:
                                        case 109:
                                        case 115:
                                            rt(e, E, E, i && ke(at(e, E, E, 0, 0, r, s, y, r, C = [], d), _), r, _, d, s, i ? C : _);
                                            break;
                                        default:
                                            rt(w, E, E, E, [""], _, 0, s, _)
                                    }
                        }
                        c = u = f = 0, m = v = 1, y = w = "", d = o;
                        break;
                    case 58:
                        d = 1 + we(w), f = h;
                    default:
                        if (m < 1)
                            if (123 == b) --m;
                            else if (125 == b && 0 == m++ && 125 == Ae()) continue;
                        switch (w += ge(b), b * m) {
                            case 38:
                                v = u > 0 ? 1 : (w += "\f", -1);
                                break;
                            case 44:
                                s[c++] = (we(w) - 1) * v, v = 1;
                                break;
                            case 64:
                                45 === Ve() && (w += Be(Re())), p = Ve(), u = d = we(y = w += Ge(Ne())), b++;
                                break;
                            case 45:
                                45 === h && 2 == we(w) && (m = 0)
                        }
                }
                return a
            }

            function at(e, t, n, i, r, a, o, s, l, c, u) {
                for (var d = r - 1, p = 0 === r ? a : [""], f = xe(p), h = 0, m = 0, g = 0; h < i; ++h)
                    for (var v = 0, b = Ee(e, d + 1, d = me(m = o[h])), y = e; v < f; ++v)(y = be(m > 0 ? p[v] + " " + b : ye(b, /&\f/g, p[v]))) && (l[g++] = y);
                return Ie(e, t, n, 0 === r ? Je : s, l, c, u)
            }

            function ot(e, t, n) {
                return Ie(e, t, n, Ke, ge(Te), Ee(e, 2, -2), 0)
            }

            function st(e, t, n, i) {
                return Ie(e, t, n, Qe, Ee(e, 0, i), Ee(e, i + 1, -1), i)
            }
            var lt = function(e, t, n) {
                    for (var i = 0, r = 0; i = r, r = Ve(), 38 === i && 12 === r && (t[n] = 1), !He(r);) Re();
                    return De(e, Le)
                },
                ct = new WeakMap,
                ut = function(e) {
                    if ("rule" === e.type && e.parent && !(e.length < 1)) {
                        for (var t = e.value, n = e.parent, i = e.column === n.column && e.line === n.line;
                            "rule" !== n.type;)
                            if (!(n = n.parent)) return;
                        if ((1 !== e.props.length || 58 === t.charCodeAt(0) || ct.get(n)) && !i) {
                            ct.set(e, !0);
                            for (var r = [], a = function(e, t) {
                                    return je(function(e, t) {
                                        var n = -1,
                                            i = 44;
                                        do {
                                            switch (He(i)) {
                                                case 0:
                                                    38 === i && 12 === Ve() && (t[n] = 1), e[n] += lt(Le - 1, t, n);
                                                    break;
                                                case 2:
                                                    e[n] += Be(i);
                                                    break;
                                                case 4:
                                                    if (44 === i) {
                                                        e[++n] = 58 === Ve() ? "&\f" : "", t[n] = e[n].length;
                                                        break
                                                    }
                                                default:
                                                    e[n] += ge(i)
                                            }
                                        } while (i = Re());
                                        return e
                                    }(Fe(e), t))
                                }(t, r), o = n.props, s = 0, l = 0; s < a.length; s++)
                                for (var c = 0; c < o.length; c++, l++) e.props[l] = r[s] ? a[s].replace(/&\f/g, o[c]) : o[c] + " " + a[s]
                        }
                    }
                },
                dt = function(e) {
                    if ("decl" === e.type) {
                        var t = e.value;
                        108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && (e.return = "", e.value = "")
                    }
                };

            function pt(e, t) {
                switch (function(e, t) {
                    return 45 ^ _e(e, 0) ? (((t << 2 ^ _e(e, 0)) << 2 ^ _e(e, 1)) << 2 ^ _e(e, 2)) << 2 ^ _e(e, 3) : 0
                }(e, t)) {
                    case 5103:
                        return Xe + "print-" + e + e;
                    case 5737:
                    case 4201:
                    case 3177:
                    case 3433:
                    case 1641:
                    case 4457:
                    case 2921:
                    case 5572:
                    case 6356:
                    case 5844:
                    case 3191:
                    case 6645:
                    case 3005:
                    case 6391:
                    case 5879:
                    case 5623:
                    case 6135:
                    case 4599:
                    case 4855:
                    case 4215:
                    case 6389:
                    case 5109:
                    case 5365:
                    case 5621:
                    case 3829:
                        return Xe + e + e;
                    case 5349:
                    case 4246:
                    case 4810:
                    case 6968:
                    case 2756:
                        return Xe + e + Ye + e + qe + e + e;
                    case 6828:
                    case 4268:
                        return Xe + e + qe + e + e;
                    case 6165:
                        return Xe + e + qe + "flex-" + e + e;
                    case 5187:
                        return Xe + e + ye(e, /(\w+).+(:[^]+)/, Xe + "box-$1$2" + qe + "flex-$1$2") + e;
                    case 5443:
                        return Xe + e + qe + "flex-item-" + ye(e, /flex-|-self/, "") + e;
                    case 4675:
                        return Xe + e + qe + "flex-line-pack" + ye(e, /align-content|flex-|-self/, "") + e;
                    case 5548:
                        return Xe + e + qe + ye(e, "shrink", "negative") + e;
                    case 5292:
                        return Xe + e + qe + ye(e, "basis", "preferred-size") + e;
                    case 6060:
                        return Xe + "box-" + ye(e, "-grow", "") + Xe + e + qe + ye(e, "grow", "positive") + e;
                    case 4554:
                        return Xe + ye(e, /([^-])(transform)/g, "$1" + Xe + "$2") + e;
                    case 6187:
                        return ye(ye(ye(e, /(zoom-|grab)/, Xe + "$1"), /(image-set)/, Xe + "$1"), e, "") + e;
                    case 5495:
                    case 3959:
                        return ye(e, /(image-set\([^]*)/, Xe + "$1$`$1");
                    case 4968:
                        return ye(ye(e, /(.+:)(flex-)?(.*)/, Xe + "box-pack:$3" + qe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Xe + e + e;
                    case 4095:
                    case 3583:
                    case 4068:
                    case 2532:
                        return ye(e, /(.+)-inline(.+)/, Xe + "$1$2") + e;
                    case 8116:
                    case 7059:
                    case 5753:
                    case 5535:
                    case 5445:
                    case 5701:
                    case 4933:
                    case 4677:
                    case 5533:
                    case 5789:
                    case 5021:
                    case 4765:
                        if (we(e) - 1 - t > 6) switch (_e(e, t + 1)) {
                            case 109:
                                if (45 !== _e(e, t + 4)) break;
                            case 102:
                                return ye(e, /(.+:)(.+)-([^]+)/, "$1" + Xe + "$2-$3$1" + Ye + (108 == _e(e, t + 3) ? "$3" : "$2-$3")) + e;
                            case 115:
                                return ~Ce(e, "stretch") ? pt(ye(e, "stretch", "fill-available"), t) + e : e
                        }
                        break;
                    case 4949:
                        if (115 !== _e(e, t + 1)) break;
                    case 6444:
                        switch (_e(e, we(e) - 3 - (~Ce(e, "!important") && 10))) {
                            case 107:
                                return ye(e, ":", ":" + Xe) + e;
                            case 101:
                                return ye(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Xe + (45 === _e(e, 14) ? "inline-" : "") + "box$3$1" + Xe + "$2$3$1" + qe + "$2box$3") + e
                        }
                        break;
                    case 5936:
                        switch (_e(e, t + 11)) {
                            case 114:
                                return Xe + e + qe + ye(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
                            case 108:
                                return Xe + e + qe + ye(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
                            case 45:
                                return Xe + e + qe + ye(e, /[svh]\w+-[tblr]{2}/, "lr") + e
                        }
                        return Xe + e + qe + e + e
                }
                return e
            }
            var ft = [function(e, t, n, i) {
                    if (e.length > -1 && !e.return) switch (e.type) {
                        case Qe:
                            e.return = pt(e.value, e.length);
                            break;
                        case et:
                            return tt([Pe(e, {
                                value: ye(e.value, "@", "@" + Xe)
                            })], i);
                        case Je:
                            if (e.length) return function(e, t) {
                                return e.map(t).join("")
                            }(e.props, (function(t) {
                                switch (function(e, t) {
                                    return (e = t.exec(e)) ? e[0] : e
                                }(t, /(::plac\w+|:read-\w+)/)) {
                                    case ":read-only":
                                    case ":read-write":
                                        return tt([Pe(e, {
                                            props: [ye(t, /:(read-\w+)/, ":-moz-$1")]
                                        })], i);
                                    case "::placeholder":
                                        return tt([Pe(e, {
                                            props: [ye(t, /:(plac\w+)/, ":" + Xe + "input-$1")]
                                        }), Pe(e, {
                                            props: [ye(t, /:(plac\w+)/, ":-moz-$1")]
                                        }), Pe(e, {
                                            props: [ye(t, /:(plac\w+)/, qe + "input-$1")]
                                        })], i)
                                }
                                return ""
                            }))
                    }
                }],
                ht = function(e) {
                    var t = e.key;
                    if ("css" === t) {
                        var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
                        Array.prototype.forEach.call(n, (function(e) {
                            -1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), e.setAttribute("data-s", ""))
                        }))
                    }
                    var i, r, a = e.stylisPlugins || ft,
                        o = {},
                        s = [];
                    i = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), (function(e) {
                        for (var t = e.getAttribute("data-emotion").split(" "), n = 1; n < t.length; n++) o[t[n]] = !0;
                        s.push(e)
                    }));
                    var l, c, u, d, p = [nt, (d = function(e) {
                            l.insert(e)
                        }, function(e) {
                            e.root || (e = e.return) && d(e)
                        })],
                        f = (c = [ut, dt].concat(a, p), u = xe(c), function(e, t, n, i) {
                            for (var r = "", a = 0; a < u; a++) r += c[a](e, t, n, i) || "";
                            return r
                        });
                    r = function(e, t, n, i) {
                        l = n, tt(it(e ? e + "{" + t.styles + "}" : t.styles), f), i && (h.inserted[t.name] = !0)
                    };
                    var h = {
                        key: t,
                        sheet: new he({
                            key: t,
                            container: i,
                            nonce: e.nonce,
                            speedy: e.speedy,
                            prepend: e.prepend,
                            insertionPoint: e.insertionPoint
                        }),
                        nonce: e.nonce,
                        inserted: o,
                        registered: {},
                        insert: r
                    };
                    return h.sheet.hydrate(s), h
                },
                mt = function(e, t, n) {
                    var i = e.key + "-" + t.name;
                    !1 === n && void 0 === e.registered[i] && (e.registered[i] = t.styles)
                },
                gt = {
                    animationIterationCount: 1,
                    aspectRatio: 1,
                    borderImageOutset: 1,
                    borderImageSlice: 1,
                    borderImageWidth: 1,
                    boxFlex: 1,
                    boxFlexGroup: 1,
                    boxOrdinalGroup: 1,
                    columnCount: 1,
                    columns: 1,
                    flex: 1,
                    flexGrow: 1,
                    flexPositive: 1,
                    flexShrink: 1,
                    flexNegative: 1,
                    flexOrder: 1,
                    gridRow: 1,
                    gridRowEnd: 1,
                    gridRowSpan: 1,
                    gridRowStart: 1,
                    gridColumn: 1,
                    gridColumnEnd: 1,
                    gridColumnSpan: 1,
                    gridColumnStart: 1,
                    msGridRow: 1,
                    msGridRowSpan: 1,
                    msGridColumn: 1,
                    msGridColumnSpan: 1,
                    fontWeight: 1,
                    lineHeight: 1,
                    opacity: 1,
                    order: 1,
                    orphans: 1,
                    tabSize: 1,
                    widows: 1,
                    zIndex: 1,
                    zoom: 1,
                    WebkitLineClamp: 1,
                    fillOpacity: 1,
                    floodOpacity: 1,
                    stopOpacity: 1,
                    strokeDasharray: 1,
                    strokeDashoffset: 1,
                    strokeMiterlimit: 1,
                    strokeOpacity: 1,
                    strokeWidth: 1
                };

            function vt(e) {
                var t = Object.create(null);
                return function(n) {
                    return void 0 === t[n] && (t[n] = e(n)), t[n]
                }
            }
            var bt = /[A-Z]|^ms/g,
                yt = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
                Ct = function(e) {
                    return 45 === e.charCodeAt(1)
                },
                _t = function(e) {
                    return null != e && "boolean" != typeof e
                },
                Et = vt((function(e) {
                    return Ct(e) ? e : e.replace(bt, "-$&").toLowerCase()
                })),
                wt = function(e, t) {
                    switch (e) {
                        case "animation":
                        case "animationName":
                            if ("string" == typeof t) return t.replace(yt, (function(e, t, n) {
                                return kt = {
                                    name: t,
                                    styles: n,
                                    next: kt
                                }, t
                            }))
                    }
                    return 1 === gt[e] || Ct(e) || "number" != typeof t || 0 === t ? t : t + "px"
                };

            function xt(e, t, n) {
                if (null == n) return "";
                if (void 0 !== n.__emotion_styles) return n;
                switch (typeof n) {
                    case "boolean":
                        return "";
                    case "object":
                        if (1 === n.anim) return kt = {
                            name: n.name,
                            styles: n.styles,
                            next: kt
                        }, n.name;
                        if (void 0 !== n.styles) {
                            var i = n.next;
                            if (void 0 !== i)
                                for (; void 0 !== i;) kt = {
                                    name: i.name,
                                    styles: i.styles,
                                    next: kt
                                }, i = i.next;
                            return n.styles + ";"
                        }
                        return function(e, t, n) {
                            var i = "";
                            if (Array.isArray(n))
                                for (var r = 0; r < n.length; r++) i += xt(e, t, n[r]) + ";";
                            else
                                for (var a in n) {
                                    var o = n[a];
                                    if ("object" != typeof o) null != t && void 0 !== t[o] ? i += a + "{" + t[o] + "}" : _t(o) && (i += Et(a) + ":" + wt(a, o) + ";");
                                    else if (!Array.isArray(o) || "string" != typeof o[0] || null != t && void 0 !== t[o[0]]) {
                                        var s = xt(e, t, o);
                                        switch (a) {
                                            case "animation":
                                            case "animationName":
                                                i += Et(a) + ":" + s + ";";
                                                break;
                                            default:
                                                i += a + "{" + s + "}"
                                        }
                                    } else
                                        for (var l = 0; l < o.length; l++) _t(o[l]) && (i += Et(a) + ":" + wt(a, o[l]) + ";")
                                }
                            return i
                        }(e, t, n);
                    case "function":
                        if (void 0 !== e) {
                            var r = kt,
                                a = n(e);
                            return kt = r, xt(e, t, a)
                        }
                }
                if (null == t) return n;
                var o = t[n];
                return void 0 !== o ? o : n
            }
            var kt, St = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
                Ot = function(e, t, n) {
                    if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
                    var i = !0,
                        r = "";
                    kt = void 0;
                    var a = e[0];
                    null == a || void 0 === a.raw ? (i = !1, r += xt(n, t, a)) : r += a[0];
                    for (var o = 1; o < e.length; o++) r += xt(n, t, e[o]), i && (r += a[o]);
                    St.lastIndex = 0;
                    for (var s, l = ""; null !== (s = St.exec(r));) l += "-" + s[1];
                    var c = function(e) {
                        for (var t, n = 0, i = 0, r = e.length; r >= 4; ++i, r -= 4) t = 1540483477 * (65535 & (t = 255 & e.charCodeAt(i) | (255 & e.charCodeAt(++i)) << 8 | (255 & e.charCodeAt(++i)) << 16 | (255 & e.charCodeAt(++i)) << 24)) + (59797 * (t >>> 16) << 16), n = 1540483477 * (65535 & (t ^= t >>> 24)) + (59797 * (t >>> 16) << 16) ^ 1540483477 * (65535 & n) + (59797 * (n >>> 16) << 16);
                        switch (r) {
                            case 3:
                                n ^= (255 & e.charCodeAt(i + 2)) << 16;
                            case 2:
                                n ^= (255 & e.charCodeAt(i + 1)) << 8;
                            case 1:
                                n = 1540483477 * (65535 & (n ^= 255 & e.charCodeAt(i))) + (59797 * (n >>> 16) << 16)
                        }
                        return (((n = 1540483477 * (65535 & (n ^= n >>> 13)) + (59797 * (n >>> 16) << 16)) ^ n >>> 15) >>> 0).toString(36)
                    }(r) + l;
                    return {
                        name: c,
                        styles: r,
                        next: kt
                    }
                },
                Mt = !!fe.useInsertionEffect && fe.useInsertionEffect,
                Lt = Mt || function(e) {
                    return e()
                },
                Tt = (Mt || fe.useLayoutEffect, {}.hasOwnProperty),
                zt = fe.createContext("undefined" != typeof HTMLElement ? ht({
                    key: "css"
                }) : null);
            zt.Provider;
            var It = function(e) {
                    return (0, fe.forwardRef)((function(t, n) {
                        var i = (0, fe.useContext)(zt);
                        return e(t, i, n)
                    }))
                },
                Pt = fe.createContext({}),
                At = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
                Rt = function(e) {
                    var t = e.cache,
                        n = e.serialized,
                        i = e.isStringTag;
                    return mt(t, n, i), Lt((function() {
                        return function(e, t, n) {
                            mt(e, t, n);
                            var i = e.key + "-" + t.name;
                            if (void 0 === e.inserted[t.name]) {
                                var r = t;
                                do {
                                    e.insert(t === r ? "." + i : "", r, e.sheet, !0), r = r.next
                                } while (void 0 !== r)
                            }
                        }(t, n, i)
                    })), null
                },
                Vt = It((function(e, t, n) {
                    var i = e.css;
                    "string" == typeof i && void 0 !== t.registered[i] && (i = t.registered[i]);
                    var r = e[At],
                        a = [i],
                        o = "";
                    "string" == typeof e.className ? o = function(e, t, n) {
                        var i = "";
                        return n.split(" ").forEach((function(n) {
                            void 0 !== e[n] ? t.push(e[n] + ";") : i += n + " "
                        })), i
                    }(t.registered, a, e.className) : null != e.className && (o = e.className + " ");
                    var s = Ot(a, void 0, fe.useContext(Pt));
                    o += t.key + "-" + s.name;
                    var l = {};
                    for (var c in e) Tt.call(e, c) && "css" !== c && c !== At && (l[c] = e[c]);
                    return l.ref = n, l.className = o, fe.createElement(fe.Fragment, null, fe.createElement(Rt, {
                        cache: t,
                        serialized: s,
                        isStringTag: "string" == typeof r
                    }), fe.createElement(r, l))
                })),
                Nt = Vt,
                Dt = (n(679), function(e, t) {
                    var n = arguments;
                    if (null == t || !Tt.call(t, "css")) return fe.createElement.apply(void 0, n);
                    var i = n.length,
                        r = new Array(i);
                    r[0] = Nt, r[1] = function(e, t) {
                        var n = {};
                        for (var i in t) Tt.call(t, i) && (n[i] = t[i]);
                        return n[At] = e, n
                    }(e, t);
                    for (var a = 2; a < i; a++) r[a] = n[a];
                    return fe.createElement.apply(null, r)
                });

            function Ht() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return Ot(t)
            }

            function Ft(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                return i
            }

            function jt(e, t) {
                if (e) {
                    if ("string" == typeof e) return Ft(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ft(e, t) : void 0
                }
            }

            function Bt(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var i, r, a, o, s = [],
                            l = !0,
                            c = !1;
                        try {
                            if (a = (n = n.call(e)).next, 0 === t) {
                                if (Object(n) !== n) return;
                                l = !1
                            } else
                                for (; !(l = (i = a.call(n)).done) && (s.push(i.value), s.length !== t); l = !0);
                        } catch (e) {
                            c = !0, r = e
                        } finally {
                            try {
                                if (!l && null != n.return && (o = n.return(), Object(o) !== o)) return
                            } finally {
                                if (c) throw r
                            }
                        }
                        return s
                    }
                }(e, t) || jt(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ut(e, t) {
                if (null == e) return {};
                var n, i, r = function(e, t) {
                    if (null == e) return {};
                    var n, i, r = {},
                        a = Object.keys(e);
                    for (i = 0; i < a.length; i++) n = a[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < a.length; i++) n = a[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }
            var $t = window.ReactDOM;
            const Wt = Math.min,
                Zt = Math.max,
                Gt = Math.round,
                qt = Math.floor,
                Yt = e => ({
                    x: e,
                    y: e
                });

            function Xt(e) {
                return Qt(e) ? (e.nodeName || "").toLowerCase() : "#document"
            }

            function Kt(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function Jt(e) {
                var t;
                return null == (t = (Qt(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
            }

            function Qt(e) {
                return e instanceof Node || e instanceof Kt(e).Node
            }

            function en(e) {
                return e instanceof Element || e instanceof Kt(e).Element
            }

            function tn(e) {
                return e instanceof HTMLElement || e instanceof Kt(e).HTMLElement
            }

            function nn(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof Kt(e).ShadowRoot)
            }

            function rn(e) {
                const {
                    overflow: t,
                    overflowX: n,
                    overflowY: i,
                    display: r
                } = an(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !["inline", "contents"].includes(r)
            }

            function an(e) {
                return Kt(e).getComputedStyle(e)
            }

            function on(e) {
                const t = function(e) {
                    if ("html" === Xt(e)) return e;
                    const t = e.assignedSlot || e.parentNode || nn(e) && e.host || Jt(e);
                    return nn(t) ? t.host : t
                }(e);
                return function(e) {
                    return ["html", "body", "#document"].includes(Xt(e))
                }(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : tn(t) && rn(t) ? t : on(t)
            }

            function sn(e, t, n) {
                var i;
                void 0 === t && (t = []), void 0 === n && (n = !0);
                const r = on(e),
                    a = r === (null == (i = e.ownerDocument) ? void 0 : i.body),
                    o = Kt(r);
                return a ? t.concat(o, o.visualViewport || [], rn(r) ? r : [], o.frameElement && n ? sn(o.frameElement) : []) : t.concat(r, sn(r, [], n))
            }

            function ln(e) {
                return en(e) ? e : e.contextElement
            }

            function cn(e) {
                const t = ln(e);
                if (!tn(t)) return Yt(1);
                const n = t.getBoundingClientRect(),
                    {
                        width: i,
                        height: r,
                        $: a
                    } = function(e) {
                        const t = an(e);
                        let n = parseFloat(t.width) || 0,
                            i = parseFloat(t.height) || 0;
                        const r = tn(e),
                            a = r ? e.offsetWidth : n,
                            o = r ? e.offsetHeight : i,
                            s = Gt(n) !== a || Gt(i) !== o;
                        return s && (n = a, i = o), {
                            width: n,
                            height: i,
                            $: s
                        }
                    }(t);
                let o = (a ? Gt(n.width) : n.width) / i,
                    s = (a ? Gt(n.height) : n.height) / r;
                return o && Number.isFinite(o) || (o = 1), s && Number.isFinite(s) || (s = 1), {
                    x: o,
                    y: s
                }
            }
            const un = Yt(0);

            function dn(e) {
                const t = Kt(e);
                return "undefined" != typeof CSS && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none") && t.visualViewport ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop
                } : un
            }

            function pn(e, t, n, i) {
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                const r = e.getBoundingClientRect(),
                    a = ln(e);
                let o = Yt(1);
                t && (i ? en(i) && (o = cn(i)) : o = cn(e));
                const s = function(e, t, n) {
                    return void 0 === t && (t = !1), !(!n || t && n !== Kt(e)) && t
                }(a, n, i) ? dn(a) : Yt(0);
                let l = (r.left + s.x) / o.x,
                    c = (r.top + s.y) / o.y,
                    u = r.width / o.x,
                    d = r.height / o.y;
                if (a) {
                    const e = Kt(a),
                        t = i && en(i) ? Kt(i) : i;
                    let n = e.frameElement;
                    for (; n && i && t !== e;) {
                        const e = cn(n),
                            t = n.getBoundingClientRect(),
                            i = an(n),
                            r = t.left + (n.clientLeft + parseFloat(i.paddingLeft)) * e.x,
                            a = t.top + (n.clientTop + parseFloat(i.paddingTop)) * e.y;
                        l *= e.x, c *= e.y, u *= e.x, d *= e.y, l += r, c += a, n = Kt(n).frameElement
                    }
                }
                return p = {
                    width: u,
                    height: d,
                    x: l,
                    y: c
                }, { ...p,
                    top: p.y,
                    left: p.x,
                    right: p.x + p.width,
                    bottom: p.y + p.height
                };
                var p
            }
            var fn = fe.useLayoutEffect,
                hn = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"],
                mn = function() {};

            function gn(e, t) {
                return t ? "-" === t[0] ? e + t : e + "__" + t : e
            }

            function vn(e, t) {
                for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++) i[r - 2] = arguments[r];
                var a = [].concat(i);
                if (t && e)
                    for (var o in t) t.hasOwnProperty(o) && t[o] && a.push("".concat(gn(e, o)));
                return a.filter((function(e) {
                    return e
                })).map((function(e) {
                    return String(e).trim()
                })).join(" ")
            }
            var bn = function(e) {
                    return t = e, Array.isArray(t) ? e.filter(Boolean) : "object" === se(e) && null !== e ? [e] : [];
                    var t
                },
                yn = function(e) {
                    return e.className, e.clearValue, e.cx, e.getStyles, e.getClassNames, e.getValue, e.hasValue, e.isMulti, e.isRtl, e.options, e.selectOption, e.selectProps, e.setValue, e.theme, de({}, Ut(e, hn))
                },
                Cn = function(e, t, n) {
                    var i = e.cx,
                        r = e.getStyles,
                        a = e.getClassNames,
                        o = e.className;
                    return {
                        css: r(t, e),
                        className: i(null != n ? n : {}, a(t, e), o)
                    }
                };

            function En(e) {
                return [document.documentElement, document.body, window].indexOf(e) > -1
            }

            function wn(e) {
                return En(e) ? window.pageYOffset : e.scrollTop
            }

            function xn(e, t) {
                En(e) ? window.scrollTo(0, t) : e.scrollTop = t
            }

            function kn(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200,
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : mn,
                    r = wn(e),
                    a = t - r,
                    o = 0;
                ! function t() {
                    var s, l = a * ((s = (s = o += 10) / n - 1) * s * s + 1) + r;
                    xn(e, l), o < n ? window.requestAnimationFrame(t) : i(e)
                }()
            }

            function Sn(e, t) {
                var n = e.getBoundingClientRect(),
                    i = t.getBoundingClientRect(),
                    r = t.offsetHeight / 3;
                i.bottom + r > n.bottom ? xn(e, Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + r, e.scrollHeight)) : i.top - r < n.top && xn(e, Math.max(t.offsetTop - r, 0))
            }

            function On() {
                try {
                    return document.createEvent("TouchEvent"), !0
                } catch (e) {
                    return !1
                }
            }
            var Mn = !1,
                Ln = {
                    get passive() {
                        return Mn = !0
                    }
                },
                Tn = "undefined" != typeof window ? window : {};
            Tn.addEventListener && Tn.removeEventListener && (Tn.addEventListener("p", mn, Ln), Tn.removeEventListener("p", mn, !1));
            var zn = Mn;

            function In(e) {
                return null != e
            }

            function Pn(e, t, n) {
                return e ? t : n
            }
            var An = ["children", "innerProps"],
                Rn = ["children", "innerProps"];
            var Vn, Nn, Dn, Hn = function(e) {
                    return "auto" === e ? "bottom" : e
                },
                Fn = (0, fe.createContext)(null),
                jn = function(e) {
                    var t = e.children,
                        n = e.minMenuHeight,
                        i = e.maxMenuHeight,
                        r = e.menuPlacement,
                        a = e.menuPosition,
                        o = e.menuShouldScrollIntoView,
                        s = e.theme,
                        l = ((0, fe.useContext)(Fn) || {}).setPortalPlacement,
                        c = (0, fe.useRef)(null),
                        u = Bt((0, fe.useState)(i), 2),
                        d = u[0],
                        p = u[1],
                        f = Bt((0, fe.useState)(null), 2),
                        h = f[0],
                        m = f[1],
                        g = s.spacing.controlHeight;
                    return fn((function() {
                        var e = c.current;
                        if (e) {
                            var t = "fixed" === a,
                                s = function(e) {
                                    var t = e.maxHeight,
                                        n = e.menuEl,
                                        i = e.minHeight,
                                        r = e.placement,
                                        a = e.shouldScroll,
                                        o = e.isFixedPosition,
                                        s = e.controlHeight,
                                        l = function(e) {
                                            var t = getComputedStyle(e),
                                                n = "absolute" === t.position,
                                                i = /(auto|scroll)/;
                                            if ("fixed" === t.position) return document.documentElement;
                                            for (var r = e; r = r.parentElement;)
                                                if (t = getComputedStyle(r), (!n || "static" !== t.position) && i.test(t.overflow + t.overflowY + t.overflowX)) return r;
                                            return document.documentElement
                                        }(n),
                                        c = {
                                            placement: "bottom",
                                            maxHeight: t
                                        };
                                    if (!n || !n.offsetParent) return c;
                                    var u, d = l.getBoundingClientRect().height,
                                        p = n.getBoundingClientRect(),
                                        f = p.bottom,
                                        h = p.height,
                                        m = p.top,
                                        g = n.offsetParent.getBoundingClientRect().top,
                                        v = o || En(u = l) ? window.innerHeight : u.clientHeight,
                                        b = wn(l),
                                        y = parseInt(getComputedStyle(n).marginBottom, 10),
                                        C = parseInt(getComputedStyle(n).marginTop, 10),
                                        _ = g - C,
                                        E = v - m,
                                        w = _ + b,
                                        x = d - b - m,
                                        k = f - v + b + y,
                                        S = b + m - C,
                                        O = 160;
                                    switch (r) {
                                        case "auto":
                                        case "bottom":
                                            if (E >= h) return {
                                                placement: "bottom",
                                                maxHeight: t
                                            };
                                            if (x >= h && !o) return a && kn(l, k, O), {
                                                placement: "bottom",
                                                maxHeight: t
                                            };
                                            if (!o && x >= i || o && E >= i) return a && kn(l, k, O), {
                                                placement: "bottom",
                                                maxHeight: o ? E - y : x - y
                                            };
                                            if ("auto" === r || o) {
                                                var M = t,
                                                    L = o ? _ : w;
                                                return L >= i && (M = Math.min(L - y - s, t)), {
                                                    placement: "top",
                                                    maxHeight: M
                                                }
                                            }
                                            if ("bottom" === r) return a && xn(l, k), {
                                                placement: "bottom",
                                                maxHeight: t
                                            };
                                            break;
                                        case "top":
                                            if (_ >= h) return {
                                                placement: "top",
                                                maxHeight: t
                                            };
                                            if (w >= h && !o) return a && kn(l, S, O), {
                                                placement: "top",
                                                maxHeight: t
                                            };
                                            if (!o && w >= i || o && _ >= i) {
                                                var T = t;
                                                return (!o && w >= i || o && _ >= i) && (T = o ? _ - C : w - C), a && kn(l, S, O), {
                                                    placement: "top",
                                                    maxHeight: T
                                                }
                                            }
                                            return {
                                                placement: "bottom",
                                                maxHeight: t
                                            };
                                        default:
                                            throw new Error('Invalid placement provided "'.concat(r, '".'))
                                    }
                                    return c
                                }({
                                    maxHeight: i,
                                    menuEl: e,
                                    minHeight: n,
                                    placement: r,
                                    shouldScroll: o && !t,
                                    isFixedPosition: t,
                                    controlHeight: g
                                });
                            p(s.maxHeight), m(s.placement), null == l || l(s.placement)
                        }
                    }), [i, r, a, o, n, l, g]), t({
                        ref: c,
                        placerProps: de(de({}, e), {}, {
                            placement: h || Hn(r),
                            maxHeight: d
                        })
                    })
                },
                Bn = function(e, t) {
                    var n = e.theme,
                        i = n.spacing.baseUnit,
                        r = n.colors;
                    return de({
                        textAlign: "center"
                    }, t ? {} : {
                        color: r.neutral40,
                        padding: "".concat(2 * i, "px ").concat(3 * i, "px")
                    })
                },
                Un = Bn,
                $n = Bn,
                Wn = ["size"],
                Zn = ["innerProps", "isRtl", "size"],
                Gn = {
                    name: "8mmkcg",
                    styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
                },
                qn = function(e) {
                    var t = e.size,
                        n = Ut(e, Wn);
                    return Dt("svg", pe({
                        height: t,
                        width: t,
                        viewBox: "0 0 20 20",
                        "aria-hidden": "true",
                        focusable: "false",
                        css: Gn
                    }, n))
                },
                Yn = function(e) {
                    return Dt(qn, pe({
                        size: 20
                    }, e), Dt("path", {
                        d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
                    }))
                },
                Xn = function(e) {
                    return Dt(qn, pe({
                        size: 20
                    }, e), Dt("path", {
                        d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
                    }))
                },
                Kn = function(e, t) {
                    var n = e.isFocused,
                        i = e.theme,
                        r = i.spacing.baseUnit,
                        a = i.colors;
                    return de({
                        label: "indicatorContainer",
                        display: "flex",
                        transition: "color 150ms"
                    }, t ? {} : {
                        color: n ? a.neutral60 : a.neutral20,
                        padding: 2 * r,
                        ":hover": {
                            color: n ? a.neutral80 : a.neutral40
                        }
                    })
                },
                Jn = Kn,
                Qn = Kn,
                ei = function() {
                    var e = Ht.apply(void 0, arguments),
                        t = "animation-" + e.name;
                    return {
                        name: t,
                        styles: "@keyframes " + t + "{" + e.styles + "}",
                        anim: 1,
                        toString: function() {
                            return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
                        }
                    }
                }(Vn || (Nn = ["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"], Dn || (Dn = Nn.slice(0)), Vn = Object.freeze(Object.defineProperties(Nn, {
                    raw: {
                        value: Object.freeze(Dn)
                    }
                })))),
                ti = function(e) {
                    var t = e.delay,
                        n = e.offset;
                    return Dt("span", {
                        css: Ht({
                            animation: "".concat(ei, " 1s ease-in-out ").concat(t, "ms infinite;"),
                            backgroundColor: "currentColor",
                            borderRadius: "1em",
                            display: "inline-block",
                            marginLeft: n ? "1em" : void 0,
                            height: "1em",
                            verticalAlign: "top",
                            width: "1em"
                        }, "", "")
                    })
                },
                ni = ["data"],
                ii = ["innerRef", "isDisabled", "isHidden", "inputClassName"],
                ri = {
                    gridArea: "1 / 2",
                    font: "inherit",
                    minWidth: "2px",
                    border: 0,
                    margin: 0,
                    outline: 0,
                    padding: 0
                },
                ai = {
                    flex: "1 1 auto",
                    display: "inline-grid",
                    gridArea: "1 / 1 / 2 / 3",
                    gridTemplateColumns: "0 min-content",
                    "&:after": de({
                        content: 'attr(data-value) " "',
                        visibility: "hidden",
                        whiteSpace: "pre"
                    }, ri)
                },
                oi = function(e) {
                    return de({
                        label: "input",
                        color: "inherit",
                        background: 0,
                        opacity: e ? 0 : 1,
                        width: "100%"
                    }, ri)
                },
                si = function(e) {
                    var t = e.children,
                        n = e.innerProps;
                    return Dt("div", n, t)
                },
                li = {
                    ClearIndicator: function(e) {
                        var t = e.children,
                            n = e.innerProps;
                        return Dt("div", pe({}, Cn(e, "clearIndicator", {
                            indicator: !0,
                            "clear-indicator": !0
                        }), n), t || Dt(Yn, null))
                    },
                    Control: function(e) {
                        var t = e.children,
                            n = e.isDisabled,
                            i = e.isFocused,
                            r = e.innerRef,
                            a = e.innerProps,
                            o = e.menuIsOpen;
                        return Dt("div", pe({
                            ref: r
                        }, Cn(e, "control", {
                            control: !0,
                            "control--is-disabled": n,
                            "control--is-focused": i,
                            "control--menu-is-open": o
                        }), a, {
                            "aria-disabled": n || void 0
                        }), t)
                    },
                    DropdownIndicator: function(e) {
                        var t = e.children,
                            n = e.innerProps;
                        return Dt("div", pe({}, Cn(e, "dropdownIndicator", {
                            indicator: !0,
                            "dropdown-indicator": !0
                        }), n), t || Dt(Xn, null))
                    },
                    DownChevron: Xn,
                    CrossIcon: Yn,
                    Group: function(e) {
                        var t = e.children,
                            n = e.cx,
                            i = e.getStyles,
                            r = e.getClassNames,
                            a = e.Heading,
                            o = e.headingProps,
                            s = e.innerProps,
                            l = e.label,
                            c = e.theme,
                            u = e.selectProps;
                        return Dt("div", pe({}, Cn(e, "group", {
                            group: !0
                        }), s), Dt(a, pe({}, o, {
                            selectProps: u,
                            theme: c,
                            getStyles: i,
                            getClassNames: r,
                            cx: n
                        }), l), Dt("div", null, t))
                    },
                    GroupHeading: function(e) {
                        var t = yn(e);
                        t.data;
                        var n = Ut(t, ni);
                        return Dt("div", pe({}, Cn(e, "groupHeading", {
                            "group-heading": !0
                        }), n))
                    },
                    IndicatorsContainer: function(e) {
                        var t = e.children,
                            n = e.innerProps;
                        return Dt("div", pe({}, Cn(e, "indicatorsContainer", {
                            indicators: !0
                        }), n), t)
                    },
                    IndicatorSeparator: function(e) {
                        var t = e.innerProps;
                        return Dt("span", pe({}, t, Cn(e, "indicatorSeparator", {
                            "indicator-separator": !0
                        })))
                    },
                    Input: function(e) {
                        var t = e.cx,
                            n = e.value,
                            i = yn(e),
                            r = i.innerRef,
                            a = i.isDisabled,
                            o = i.isHidden,
                            s = i.inputClassName,
                            l = Ut(i, ii);
                        return Dt("div", pe({}, Cn(e, "input", {
                            "input-container": !0
                        }), {
                            "data-value": n || ""
                        }), Dt("input", pe({
                            className: t({
                                input: !0
                            }, s),
                            ref: r,
                            style: oi(o),
                            disabled: a
                        }, l)))
                    },
                    LoadingIndicator: function(e) {
                        var t = e.innerProps,
                            n = e.isRtl,
                            i = e.size,
                            r = void 0 === i ? 4 : i,
                            a = Ut(e, Zn);
                        return Dt("div", pe({}, Cn(de(de({}, a), {}, {
                            innerProps: t,
                            isRtl: n,
                            size: r
                        }), "loadingIndicator", {
                            indicator: !0,
                            "loading-indicator": !0
                        }), t), Dt(ti, {
                            delay: 0,
                            offset: n
                        }), Dt(ti, {
                            delay: 160,
                            offset: !0
                        }), Dt(ti, {
                            delay: 320,
                            offset: !n
                        }))
                    },
                    Menu: function(e) {
                        var t = e.children,
                            n = e.innerRef,
                            i = e.innerProps;
                        return Dt("div", pe({}, Cn(e, "menu", {
                            menu: !0
                        }), {
                            ref: n
                        }, i), t)
                    },
                    MenuList: function(e) {
                        var t = e.children,
                            n = e.innerProps,
                            i = e.innerRef,
                            r = e.isMulti;
                        return Dt("div", pe({}, Cn(e, "menuList", {
                            "menu-list": !0,
                            "menu-list--is-multi": r
                        }), {
                            ref: i
                        }, n), t)
                    },
                    MenuPortal: function(e) {
                        var t = e.appendTo,
                            n = e.children,
                            i = e.controlElement,
                            r = e.innerProps,
                            a = e.menuPlacement,
                            o = e.menuPosition,
                            s = (0, fe.useRef)(null),
                            l = (0, fe.useRef)(null),
                            c = Bt((0, fe.useState)(Hn(a)), 2),
                            u = c[0],
                            d = c[1],
                            p = (0, fe.useMemo)((function() {
                                return {
                                    setPortalPlacement: d
                                }
                            }), []),
                            f = Bt((0, fe.useState)(null), 2),
                            h = f[0],
                            m = f[1],
                            g = (0, fe.useCallback)((function() {
                                if (i) {
                                    var e = function(e) {
                                            var t = e.getBoundingClientRect();
                                            return {
                                                bottom: t.bottom,
                                                height: t.height,
                                                left: t.left,
                                                right: t.right,
                                                top: t.top,
                                                width: t.width
                                            }
                                        }(i),
                                        t = "fixed" === o ? 0 : window.pageYOffset,
                                        n = e[u] + t;
                                    n === (null == h ? void 0 : h.offset) && e.left === (null == h ? void 0 : h.rect.left) && e.width === (null == h ? void 0 : h.rect.width) || m({
                                        offset: n,
                                        rect: e
                                    })
                                }
                            }), [i, o, u, null == h ? void 0 : h.offset, null == h ? void 0 : h.rect.left, null == h ? void 0 : h.rect.width]);
                        fn((function() {
                            g()
                        }), [g]);
                        var v = (0, fe.useCallback)((function() {
                            "function" == typeof l.current && (l.current(), l.current = null), i && s.current && (l.current = function(e, t, n, i) {
                                void 0 === i && (i = {});
                                const {
                                    ancestorScroll: r = !0,
                                    ancestorResize: a = !0,
                                    elementResize: o = "function" == typeof ResizeObserver,
                                    layoutShift: s = "function" == typeof IntersectionObserver,
                                    animationFrame: l = !1
                                } = i, c = ln(e), u = r || a ? [...c ? sn(c) : [], ...sn(t)] : [];
                                u.forEach((e => {
                                    r && e.addEventListener("scroll", n, {
                                        passive: !0
                                    }), a && e.addEventListener("resize", n)
                                }));
                                const d = c && s ? function(e, t) {
                                    let n, i = null;
                                    const r = Jt(e);

                                    function a() {
                                        clearTimeout(n), i && i.disconnect(), i = null
                                    }
                                    return function o(s, l) {
                                        void 0 === s && (s = !1), void 0 === l && (l = 1), a();
                                        const {
                                            left: c,
                                            top: u,
                                            width: d,
                                            height: p
                                        } = e.getBoundingClientRect();
                                        if (s || t(), !d || !p) return;
                                        const f = {
                                            rootMargin: -qt(u) + "px " + -qt(r.clientWidth - (c + d)) + "px " + -qt(r.clientHeight - (u + p)) + "px " + -qt(c) + "px",
                                            threshold: Zt(0, Wt(1, l)) || 1
                                        };
                                        let h = !0;

                                        function m(e) {
                                            const t = e[0].intersectionRatio;
                                            if (t !== l) {
                                                if (!h) return o();
                                                t ? o(!1, t) : n = setTimeout((() => {
                                                    o(!1, 1e-7)
                                                }), 100)
                                            }
                                            h = !1
                                        }
                                        try {
                                            i = new IntersectionObserver(m, { ...f,
                                                root: r.ownerDocument
                                            })
                                        } catch (e) {
                                            i = new IntersectionObserver(m, f)
                                        }
                                        i.observe(e)
                                    }(!0), a
                                }(c, n) : null;
                                let p, f = -1,
                                    h = null;
                                o && (h = new ResizeObserver((e => {
                                    let [i] = e;
                                    i && i.target === c && h && (h.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame((() => {
                                        h && h.observe(t)
                                    }))), n()
                                })), c && !l && h.observe(c), h.observe(t));
                                let m = l ? pn(e) : null;
                                return l && function t() {
                                    const i = pn(e);
                                    !m || i.x === m.x && i.y === m.y && i.width === m.width && i.height === m.height || n(), m = i, p = requestAnimationFrame(t)
                                }(), n(), () => {
                                    u.forEach((e => {
                                        r && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n)
                                    })), d && d(), h && h.disconnect(), h = null, l && cancelAnimationFrame(p)
                                }
                            }(i, s.current, g, {
                                elementResize: "ResizeObserver" in window
                            }))
                        }), [i, g]);
                        fn((function() {
                            v()
                        }), [v]);
                        var b = (0, fe.useCallback)((function(e) {
                            s.current = e, v()
                        }), [v]);
                        if (!t && "fixed" !== o || !h) return null;
                        var y = Dt("div", pe({
                            ref: b
                        }, Cn(de(de({}, e), {}, {
                            offset: h.offset,
                            position: o,
                            rect: h.rect
                        }), "menuPortal", {
                            "menu-portal": !0
                        }), r), n);
                        return Dt(Fn.Provider, {
                            value: p
                        }, t ? (0, $t.createPortal)(y, t) : y)
                    },
                    LoadingMessage: function(e) {
                        var t = e.children,
                            n = void 0 === t ? "Loading..." : t,
                            i = e.innerProps,
                            r = Ut(e, Rn);
                        return Dt("div", pe({}, Cn(de(de({}, r), {}, {
                            children: n,
                            innerProps: i
                        }), "loadingMessage", {
                            "menu-notice": !0,
                            "menu-notice--loading": !0
                        }), i), n)
                    },
                    NoOptionsMessage: function(e) {
                        var t = e.children,
                            n = void 0 === t ? "No options" : t,
                            i = e.innerProps,
                            r = Ut(e, An);
                        return Dt("div", pe({}, Cn(de(de({}, r), {}, {
                            children: n,
                            innerProps: i
                        }), "noOptionsMessage", {
                            "menu-notice": !0,
                            "menu-notice--no-options": !0
                        }), i), n)
                    },
                    MultiValue: function(e) {
                        var t = e.children,
                            n = e.components,
                            i = e.data,
                            r = e.innerProps,
                            a = e.isDisabled,
                            o = e.removeProps,
                            s = e.selectProps,
                            l = n.Container,
                            c = n.Label,
                            u = n.Remove;
                        return Dt(l, {
                            data: i,
                            innerProps: de(de({}, Cn(e, "multiValue", {
                                "multi-value": !0,
                                "multi-value--is-disabled": a
                            })), r),
                            selectProps: s
                        }, Dt(c, {
                            data: i,
                            innerProps: de({}, Cn(e, "multiValueLabel", {
                                "multi-value__label": !0
                            })),
                            selectProps: s
                        }, t), Dt(u, {
                            data: i,
                            innerProps: de(de({}, Cn(e, "multiValueRemove", {
                                "multi-value__remove": !0
                            })), {}, {
                                "aria-label": "Remove ".concat(t || "option")
                            }, o),
                            selectProps: s
                        }))
                    },
                    MultiValueContainer: si,
                    MultiValueLabel: si,
                    MultiValueRemove: function(e) {
                        var t = e.children,
                            n = e.innerProps;
                        return Dt("div", pe({
                            role: "button"
                        }, n), t || Dt(Yn, {
                            size: 14
                        }))
                    },
                    Option: function(e) {
                        var t = e.children,
                            n = e.isDisabled,
                            i = e.isFocused,
                            r = e.isSelected,
                            a = e.innerRef,
                            o = e.innerProps;
                        return Dt("div", pe({}, Cn(e, "option", {
                            option: !0,
                            "option--is-disabled": n,
                            "option--is-focused": i,
                            "option--is-selected": r
                        }), {
                            ref: a,
                            "aria-disabled": n
                        }, o), t)
                    },
                    Placeholder: function(e) {
                        var t = e.children,
                            n = e.innerProps;
                        return Dt("div", pe({}, Cn(e, "placeholder", {
                            placeholder: !0
                        }), n), t)
                    },
                    SelectContainer: function(e) {
                        var t = e.children,
                            n = e.innerProps,
                            i = e.isDisabled,
                            r = e.isRtl;
                        return Dt("div", pe({}, Cn(e, "container", {
                            "--is-disabled": i,
                            "--is-rtl": r
                        }), n), t)
                    },
                    SingleValue: function(e) {
                        var t = e.children,
                            n = e.isDisabled,
                            i = e.innerProps;
                        return Dt("div", pe({}, Cn(e, "singleValue", {
                            "single-value": !0,
                            "single-value--is-disabled": n
                        }), i), t)
                    },
                    ValueContainer: function(e) {
                        var t = e.children,
                            n = e.innerProps,
                            i = e.isMulti,
                            r = e.hasValue;
                        return Dt("div", pe({}, Cn(e, "valueContainer", {
                            "value-container": !0,
                            "value-container--is-multi": i,
                            "value-container--has-value": r
                        }), n), t)
                    }
                },
                ci = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];

            function ui(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, le(i.key), i)
                }
            }

            function di(e, t) {
                return di = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, di(e, t)
            }

            function pi(e) {
                return pi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, pi(e)
            }

            function fi(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, i = pi(e);
                    if (t) {
                        var r = pi(this).constructor;
                        n = Reflect.construct(i, arguments, r)
                    } else n = i.apply(this, arguments);
                    return function(e, t) {
                        if (t && ("object" === se(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(e)
                    }(this, n)
                }
            }

            function hi(e) {
                return function(e) {
                    if (Array.isArray(e)) return Ft(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || jt(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var mi = Number.isNaN || function(e) {
                return "number" == typeof e && e != e
            };

            function gi(e, t) {
                if (e.length !== t.length) return !1;
                for (var n = 0; n < e.length; n++)
                    if (!((i = e[n]) === (r = t[n]) || mi(i) && mi(r))) return !1;
                var i, r;
                return !0
            }
            for (var vi = {
                    name: "7pg0cj-a11yText",
                    styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
                }, bi = function(e) {
                    return Dt("span", pe({
                        css: vi
                    }, e))
                }, yi = {
                    guidance: function(e) {
                        var t = e.isSearchable,
                            n = e.isMulti,
                            i = e.isDisabled,
                            r = e.tabSelectsValue;
                        switch (e.context) {
                            case "menu":
                                return "Use Up and Down to choose options".concat(i ? "" : ", press Enter to select the currently focused option", ", press Escape to exit the menu").concat(r ? ", press Tab to select the option and exit the menu" : "", ".");
                            case "input":
                                return "".concat(e["aria-label"] || "Select", " is focused ").concat(t ? ",type to refine list" : "", ", press Down to open the menu, ").concat(n ? " press left to focus selected values" : "");
                            case "value":
                                return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
                            default:
                                return ""
                        }
                    },
                    onChange: function(e) {
                        var t = e.action,
                            n = e.label,
                            i = void 0 === n ? "" : n,
                            r = e.labels,
                            a = e.isDisabled;
                        switch (t) {
                            case "deselect-option":
                            case "pop-value":
                            case "remove-value":
                                return "option ".concat(i, ", deselected.");
                            case "clear":
                                return "All selected options have been cleared.";
                            case "initial-input-focus":
                                return "option".concat(r.length > 1 ? "s" : "", " ").concat(r.join(","), ", selected.");
                            case "select-option":
                                return "option ".concat(i, a ? " is disabled. Select another option." : ", selected.");
                            default:
                                return ""
                        }
                    },
                    onFocus: function(e) {
                        var t = e.context,
                            n = e.focused,
                            i = e.options,
                            r = e.label,
                            a = void 0 === r ? "" : r,
                            o = e.selectValue,
                            s = e.isDisabled,
                            l = e.isSelected,
                            c = function(e, t) {
                                return e && e.length ? "".concat(e.indexOf(t) + 1, " of ").concat(e.length) : ""
                            };
                        if ("value" === t && o) return "value ".concat(a, " focused, ").concat(c(o, n), ".");
                        if ("menu" === t) {
                            var u = s ? " disabled" : "",
                                d = "".concat(l ? "selected" : "focused").concat(u);
                            return "option ".concat(a, " ").concat(d, ", ").concat(c(i, n), ".")
                        }
                        return ""
                    },
                    onFilter: function(e) {
                        var t = e.inputValue,
                            n = e.resultsMessage;
                        return "".concat(n).concat(t ? " for search term " + t : "", ".")
                    }
                }, Ci = function(e) {
                    var t = e.ariaSelection,
                        n = e.focusedOption,
                        i = e.focusedValue,
                        r = e.focusableOptions,
                        a = e.isFocused,
                        o = e.selectValue,
                        s = e.selectProps,
                        l = e.id,
                        c = s.ariaLiveMessages,
                        u = s.getOptionLabel,
                        d = s.inputValue,
                        p = s.isMulti,
                        f = s.isOptionDisabled,
                        h = s.isSearchable,
                        m = s.menuIsOpen,
                        g = s.options,
                        v = s.screenReaderStatus,
                        b = s.tabSelectsValue,
                        y = s["aria-label"],
                        C = s["aria-live"],
                        _ = (0, fe.useMemo)((function() {
                            return de(de({}, yi), c || {})
                        }), [c]),
                        E = (0, fe.useMemo)((function() {
                            var e, n = "";
                            if (t && _.onChange) {
                                var i = t.option,
                                    r = t.options,
                                    a = t.removedValue,
                                    s = t.removedValues,
                                    l = t.value,
                                    c = a || i || (e = l, Array.isArray(e) ? null : e),
                                    d = c ? u(c) : "",
                                    p = r || s || void 0,
                                    h = p ? p.map(u) : [],
                                    m = de({
                                        isDisabled: c && f(c, o),
                                        label: d,
                                        labels: h
                                    }, t);
                                n = _.onChange(m)
                            }
                            return n
                        }), [t, _, f, o, u]),
                        w = (0, fe.useMemo)((function() {
                            var e = "",
                                t = n || i,
                                a = !!(n && o && o.includes(n));
                            if (t && _.onFocus) {
                                var s = {
                                    focused: t,
                                    label: u(t),
                                    isDisabled: f(t, o),
                                    isSelected: a,
                                    options: r,
                                    context: t === n ? "menu" : "value",
                                    selectValue: o
                                };
                                e = _.onFocus(s)
                            }
                            return e
                        }), [n, i, u, f, _, r, o]),
                        x = (0, fe.useMemo)((function() {
                            var e = "";
                            if (m && g.length && _.onFilter) {
                                var t = v({
                                    count: r.length
                                });
                                e = _.onFilter({
                                    inputValue: d,
                                    resultsMessage: t
                                })
                            }
                            return e
                        }), [r, d, m, _, g, v]),
                        k = (0, fe.useMemo)((function() {
                            var e = "";
                            if (_.guidance) {
                                var t = i ? "value" : m ? "menu" : "input";
                                e = _.guidance({
                                    "aria-label": y,
                                    context: t,
                                    isDisabled: n && f(n, o),
                                    isMulti: p,
                                    isSearchable: h,
                                    tabSelectsValue: b
                                })
                            }
                            return e
                        }), [y, n, i, p, f, h, m, _, o, b]),
                        S = "".concat(w, " ").concat(x, " ").concat(k),
                        O = Dt(fe.Fragment, null, Dt("span", {
                            id: "aria-selection"
                        }, E), Dt("span", {
                            id: "aria-context"
                        }, S)),
                        M = "initial-input-focus" === (null == t ? void 0 : t.action);
                    return Dt(fe.Fragment, null, Dt(bi, {
                        id: l
                    }, M && O), Dt(bi, {
                        "aria-live": C,
                        "aria-atomic": "false",
                        "aria-relevant": "additions text"
                    }, a && !M && O))
                }, _i = [{
                    base: "A",
                    letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
                }, {
                    base: "AA",
                    letters: "Ꜳ"
                }, {
                    base: "AE",
                    letters: "ÆǼǢ"
                }, {
                    base: "AO",
                    letters: "Ꜵ"
                }, {
                    base: "AU",
                    letters: "Ꜷ"
                }, {
                    base: "AV",
                    letters: "ꜸꜺ"
                }, {
                    base: "AY",
                    letters: "Ꜽ"
                }, {
                    base: "B",
                    letters: "BⒷＢḂḄḆɃƂƁ"
                }, {
                    base: "C",
                    letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
                }, {
                    base: "D",
                    letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
                }, {
                    base: "DZ",
                    letters: "ǱǄ"
                }, {
                    base: "Dz",
                    letters: "ǲǅ"
                }, {
                    base: "E",
                    letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
                }, {
                    base: "F",
                    letters: "FⒻＦḞƑꝻ"
                }, {
                    base: "G",
                    letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
                }, {
                    base: "H",
                    letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
                }, {
                    base: "I",
                    letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
                }, {
                    base: "J",
                    letters: "JⒿＪĴɈ"
                }, {
                    base: "K",
                    letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
                }, {
                    base: "L",
                    letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
                }, {
                    base: "LJ",
                    letters: "Ǉ"
                }, {
                    base: "Lj",
                    letters: "ǈ"
                }, {
                    base: "M",
                    letters: "MⓂＭḾṀṂⱮƜ"
                }, {
                    base: "N",
                    letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
                }, {
                    base: "NJ",
                    letters: "Ǌ"
                }, {
                    base: "Nj",
                    letters: "ǋ"
                }, {
                    base: "O",
                    letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
                }, {
                    base: "OI",
                    letters: "Ƣ"
                }, {
                    base: "OO",
                    letters: "Ꝏ"
                }, {
                    base: "OU",
                    letters: "Ȣ"
                }, {
                    base: "P",
                    letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
                }, {
                    base: "Q",
                    letters: "QⓆＱꝖꝘɊ"
                }, {
                    base: "R",
                    letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
                }, {
                    base: "S",
                    letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
                }, {
                    base: "T",
                    letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
                }, {
                    base: "TZ",
                    letters: "Ꜩ"
                }, {
                    base: "U",
                    letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
                }, {
                    base: "V",
                    letters: "VⓋＶṼṾƲꝞɅ"
                }, {
                    base: "VY",
                    letters: "Ꝡ"
                }, {
                    base: "W",
                    letters: "WⓌＷẀẂŴẆẄẈⱲ"
                }, {
                    base: "X",
                    letters: "XⓍＸẊẌ"
                }, {
                    base: "Y",
                    letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
                }, {
                    base: "Z",
                    letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
                }, {
                    base: "a",
                    letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
                }, {
                    base: "aa",
                    letters: "ꜳ"
                }, {
                    base: "ae",
                    letters: "æǽǣ"
                }, {
                    base: "ao",
                    letters: "ꜵ"
                }, {
                    base: "au",
                    letters: "ꜷ"
                }, {
                    base: "av",
                    letters: "ꜹꜻ"
                }, {
                    base: "ay",
                    letters: "ꜽ"
                }, {
                    base: "b",
                    letters: "bⓑｂḃḅḇƀƃɓ"
                }, {
                    base: "c",
                    letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
                }, {
                    base: "d",
                    letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
                }, {
                    base: "dz",
                    letters: "ǳǆ"
                }, {
                    base: "e",
                    letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
                }, {
                    base: "f",
                    letters: "fⓕｆḟƒꝼ"
                }, {
                    base: "g",
                    letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
                }, {
                    base: "h",
                    letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
                }, {
                    base: "hv",
                    letters: "ƕ"
                }, {
                    base: "i",
                    letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
                }, {
                    base: "j",
                    letters: "jⓙｊĵǰɉ"
                }, {
                    base: "k",
                    letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
                }, {
                    base: "l",
                    letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
                }, {
                    base: "lj",
                    letters: "ǉ"
                }, {
                    base: "m",
                    letters: "mⓜｍḿṁṃɱɯ"
                }, {
                    base: "n",
                    letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
                }, {
                    base: "nj",
                    letters: "ǌ"
                }, {
                    base: "o",
                    letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
                }, {
                    base: "oi",
                    letters: "ƣ"
                }, {
                    base: "ou",
                    letters: "ȣ"
                }, {
                    base: "oo",
                    letters: "ꝏ"
                }, {
                    base: "p",
                    letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
                }, {
                    base: "q",
                    letters: "qⓠｑɋꝗꝙ"
                }, {
                    base: "r",
                    letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
                }, {
                    base: "s",
                    letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
                }, {
                    base: "t",
                    letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
                }, {
                    base: "tz",
                    letters: "ꜩ"
                }, {
                    base: "u",
                    letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
                }, {
                    base: "v",
                    letters: "vⓥｖṽṿʋꝟʌ"
                }, {
                    base: "vy",
                    letters: "ꝡ"
                }, {
                    base: "w",
                    letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
                }, {
                    base: "x",
                    letters: "xⓧｘẋẍ"
                }, {
                    base: "y",
                    letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
                }, {
                    base: "z",
                    letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
                }], Ei = new RegExp("[" + _i.map((function(e) {
                    return e.letters
                })).join("") + "]", "g"), wi = {}, xi = 0; xi < _i.length; xi++)
                for (var ki = _i[xi], Si = 0; Si < ki.letters.length; Si++) wi[ki.letters[Si]] = ki.base;
            var Oi = function(e) {
                    return e.replace(Ei, (function(e) {
                        return wi[e]
                    }))
                },
                Mi = function(e, t) {
                    void 0 === t && (t = gi);
                    var n = null;

                    function i() {
                        for (var i = [], r = 0; r < arguments.length; r++) i[r] = arguments[r];
                        if (n && n.lastThis === this && t(i, n.lastArgs)) return n.lastResult;
                        var a = e.apply(this, i);
                        return n = {
                            lastResult: a,
                            lastArgs: i,
                            lastThis: this
                        }, a
                    }
                    return i.clear = function() {
                        n = null
                    }, i
                }(Oi),
                Li = function(e) {
                    return e.replace(/^\s+|\s+$/g, "")
                },
                Ti = function(e) {
                    return "".concat(e.label, " ").concat(e.value)
                },
                zi = ["innerRef"];

            function Ii(e) {
                var t = e.innerRef,
                    n = function(e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                        var r = Object.entries(e).filter((function(e) {
                            var t = Bt(e, 1)[0];
                            return !n.includes(t)
                        }));
                        return r.reduce((function(e, t) {
                            var n = Bt(t, 2),
                                i = n[0],
                                r = n[1];
                            return e[i] = r, e
                        }), {})
                    }(Ut(e, zi), "onExited", "in", "enter", "exit", "appear");
                return Dt("input", pe({
                    ref: t
                }, n, {
                    css: Ht({
                        label: "dummyInput",
                        background: 0,
                        border: 0,
                        caretColor: "transparent",
                        fontSize: "inherit",
                        gridArea: "1 / 1 / 2 / 3",
                        outline: 0,
                        padding: 0,
                        width: 1,
                        color: "transparent",
                        left: -100,
                        opacity: 0,
                        position: "relative",
                        transform: "scale(.01)"
                    }, "", "")
                }))
            }
            var Pi = ["boxSizing", "height", "overflow", "paddingRight", "position"],
                Ai = {
                    boxSizing: "border-box",
                    overflow: "hidden",
                    position: "relative",
                    height: "100%"
                };

            function Ri(e) {
                e.preventDefault()
            }

            function Vi(e) {
                e.stopPropagation()
            }

            function Ni() {
                var e = this.scrollTop,
                    t = this.scrollHeight,
                    n = e + this.offsetHeight;
                0 === e ? this.scrollTop = 1 : n === t && (this.scrollTop = e - 1)
            }

            function Di() {
                return "ontouchstart" in window || navigator.maxTouchPoints
            }
            var Hi = !("undefined" == typeof window || !window.document || !window.document.createElement),
                Fi = 0,
                ji = {
                    capture: !1,
                    passive: !1
                },
                Bi = function(e) {
                    var t = e.target;
                    return t.ownerDocument.activeElement && t.ownerDocument.activeElement.blur()
                },
                Ui = {
                    name: "1kfdb0e",
                    styles: "position:fixed;left:0;bottom:0;right:0;top:0"
                };

            function $i(e) {
                var t = e.children,
                    n = e.lockEnabled,
                    i = e.captureEnabled,
                    r = function(e) {
                        var t = e.isEnabled,
                            n = e.onBottomArrive,
                            i = e.onBottomLeave,
                            r = e.onTopArrive,
                            a = e.onTopLeave,
                            o = (0, fe.useRef)(!1),
                            s = (0, fe.useRef)(!1),
                            l = (0, fe.useRef)(0),
                            c = (0, fe.useRef)(null),
                            u = (0, fe.useCallback)((function(e, t) {
                                if (null !== c.current) {
                                    var l = c.current,
                                        u = l.scrollTop,
                                        d = l.scrollHeight,
                                        p = l.clientHeight,
                                        f = c.current,
                                        h = t > 0,
                                        m = d - p - u,
                                        g = !1;
                                    m > t && o.current && (i && i(e), o.current = !1), h && s.current && (a && a(e), s.current = !1), h && t > m ? (n && !o.current && n(e), f.scrollTop = d, g = !0, o.current = !0) : !h && -t > u && (r && !s.current && r(e), f.scrollTop = 0, g = !0, s.current = !0), g && function(e) {
                                        e.cancelable && e.preventDefault(), e.stopPropagation()
                                    }(e)
                                }
                            }), [n, i, r, a]),
                            d = (0, fe.useCallback)((function(e) {
                                u(e, e.deltaY)
                            }), [u]),
                            p = (0, fe.useCallback)((function(e) {
                                l.current = e.changedTouches[0].clientY
                            }), []),
                            f = (0, fe.useCallback)((function(e) {
                                var t = l.current - e.changedTouches[0].clientY;
                                u(e, t)
                            }), [u]),
                            h = (0, fe.useCallback)((function(e) {
                                if (e) {
                                    var t = !!zn && {
                                        passive: !1
                                    };
                                    e.addEventListener("wheel", d, t), e.addEventListener("touchstart", p, t), e.addEventListener("touchmove", f, t)
                                }
                            }), [f, p, d]),
                            m = (0, fe.useCallback)((function(e) {
                                e && (e.removeEventListener("wheel", d, !1), e.removeEventListener("touchstart", p, !1), e.removeEventListener("touchmove", f, !1))
                            }), [f, p, d]);
                        return (0, fe.useEffect)((function() {
                                if (t) {
                                    var e = c.current;
                                    return h(e),
                                        function() {
                                            m(e)
                                        }
                                }
                            }), [t, h, m]),
                            function(e) {
                                c.current = e
                            }
                    }({
                        isEnabled: void 0 === i || i,
                        onBottomArrive: e.onBottomArrive,
                        onBottomLeave: e.onBottomLeave,
                        onTopArrive: e.onTopArrive,
                        onTopLeave: e.onTopLeave
                    }),
                    a = function(e) {
                        var t = e.isEnabled,
                            n = e.accountForScrollbars,
                            i = void 0 === n || n,
                            r = (0, fe.useRef)({}),
                            a = (0, fe.useRef)(null),
                            o = (0, fe.useCallback)((function(e) {
                                if (Hi) {
                                    var t = document.body,
                                        n = t && t.style;
                                    if (i && Pi.forEach((function(e) {
                                            var t = n && n[e];
                                            r.current[e] = t
                                        })), i && Fi < 1) {
                                        var a = parseInt(r.current.paddingRight, 10) || 0,
                                            o = document.body ? document.body.clientWidth : 0,
                                            s = window.innerWidth - o + a || 0;
                                        Object.keys(Ai).forEach((function(e) {
                                            var t = Ai[e];
                                            n && (n[e] = t)
                                        })), n && (n.paddingRight = "".concat(s, "px"))
                                    }
                                    t && Di() && (t.addEventListener("touchmove", Ri, ji), e && (e.addEventListener("touchstart", Ni, ji), e.addEventListener("touchmove", Vi, ji))), Fi += 1
                                }
                            }), [i]),
                            s = (0, fe.useCallback)((function(e) {
                                if (Hi) {
                                    var t = document.body,
                                        n = t && t.style;
                                    Fi = Math.max(Fi - 1, 0), i && Fi < 1 && Pi.forEach((function(e) {
                                        var t = r.current[e];
                                        n && (n[e] = t)
                                    })), t && Di() && (t.removeEventListener("touchmove", Ri, ji), e && (e.removeEventListener("touchstart", Ni, ji), e.removeEventListener("touchmove", Vi, ji)))
                                }
                            }), [i]);
                        return (0, fe.useEffect)((function() {
                                if (t) {
                                    var e = a.current;
                                    return o(e),
                                        function() {
                                            s(e)
                                        }
                                }
                            }), [t, o, s]),
                            function(e) {
                                a.current = e
                            }
                    }({
                        isEnabled: n
                    });
                return Dt(fe.Fragment, null, n && Dt("div", {
                    onClick: Bi,
                    css: Ui
                }), t((function(e) {
                    r(e), a(e)
                })))
            }
            var Wi = {
                    name: "1a0ro4n-requiredInput",
                    styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
                },
                Zi = function(e) {
                    var t = e.name,
                        n = e.onFocus;
                    return Dt("input", {
                        required: !0,
                        name: t,
                        tabIndex: -1,
                        "aria-hidden": "true",
                        onFocus: n,
                        css: Wi,
                        value: "",
                        onChange: function() {}
                    })
                },
                Gi = {
                    clearIndicator: Qn,
                    container: function(e) {
                        var t = e.isDisabled;
                        return {
                            label: "container",
                            direction: e.isRtl ? "rtl" : void 0,
                            pointerEvents: t ? "none" : void 0,
                            position: "relative"
                        }
                    },
                    control: function(e, t) {
                        var n = e.isDisabled,
                            i = e.isFocused,
                            r = e.theme,
                            a = r.colors,
                            o = r.borderRadius;
                        return de({
                            label: "control",
                            alignItems: "center",
                            cursor: "default",
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            minHeight: r.spacing.controlHeight,
                            outline: "0 !important",
                            position: "relative",
                            transition: "all 100ms"
                        }, t ? {} : {
                            backgroundColor: n ? a.neutral5 : a.neutral0,
                            borderColor: n ? a.neutral10 : i ? a.primary : a.neutral20,
                            borderRadius: o,
                            borderStyle: "solid",
                            borderWidth: 1,
                            boxShadow: i ? "0 0 0 1px ".concat(a.primary) : void 0,
                            "&:hover": {
                                borderColor: i ? a.primary : a.neutral30
                            }
                        })
                    },
                    dropdownIndicator: Jn,
                    group: function(e, t) {
                        var n = e.theme.spacing;
                        return t ? {} : {
                            paddingBottom: 2 * n.baseUnit,
                            paddingTop: 2 * n.baseUnit
                        }
                    },
                    groupHeading: function(e, t) {
                        var n = e.theme,
                            i = n.colors,
                            r = n.spacing;
                        return de({
                            label: "group",
                            cursor: "default",
                            display: "block"
                        }, t ? {} : {
                            color: i.neutral40,
                            fontSize: "75%",
                            fontWeight: 500,
                            marginBottom: "0.25em",
                            paddingLeft: 3 * r.baseUnit,
                            paddingRight: 3 * r.baseUnit,
                            textTransform: "uppercase"
                        })
                    },
                    indicatorsContainer: function() {
                        return {
                            alignItems: "center",
                            alignSelf: "stretch",
                            display: "flex",
                            flexShrink: 0
                        }
                    },
                    indicatorSeparator: function(e, t) {
                        var n = e.isDisabled,
                            i = e.theme,
                            r = i.spacing.baseUnit,
                            a = i.colors;
                        return de({
                            label: "indicatorSeparator",
                            alignSelf: "stretch",
                            width: 1
                        }, t ? {} : {
                            backgroundColor: n ? a.neutral10 : a.neutral20,
                            marginBottom: 2 * r,
                            marginTop: 2 * r
                        })
                    },
                    input: function(e, t) {
                        var n = e.isDisabled,
                            i = e.value,
                            r = e.theme,
                            a = r.spacing,
                            o = r.colors;
                        return de(de({
                            visibility: n ? "hidden" : "visible",
                            transform: i ? "translateZ(0)" : ""
                        }, ai), t ? {} : {
                            margin: a.baseUnit / 2,
                            paddingBottom: a.baseUnit / 2,
                            paddingTop: a.baseUnit / 2,
                            color: o.neutral80
                        })
                    },
                    loadingIndicator: function(e, t) {
                        var n = e.isFocused,
                            i = e.size,
                            r = e.theme,
                            a = r.colors,
                            o = r.spacing.baseUnit;
                        return de({
                            label: "loadingIndicator",
                            display: "flex",
                            transition: "color 150ms",
                            alignSelf: "center",
                            fontSize: i,
                            lineHeight: 1,
                            marginRight: i,
                            textAlign: "center",
                            verticalAlign: "middle"
                        }, t ? {} : {
                            color: n ? a.neutral60 : a.neutral20,
                            padding: 2 * o
                        })
                    },
                    loadingMessage: $n,
                    menu: function(e, t) {
                        var n, i = e.placement,
                            r = e.theme,
                            a = r.borderRadius,
                            o = r.spacing,
                            s = r.colors;
                        return de((ce(n = {
                            label: "menu"
                        }, function(e) {
                            return e ? {
                                bottom: "top",
                                top: "bottom"
                            }[e] : "bottom"
                        }(i), "100%"), ce(n, "position", "absolute"), ce(n, "width", "100%"), ce(n, "zIndex", 1), n), t ? {} : {
                            backgroundColor: s.neutral0,
                            borderRadius: a,
                            boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
                            marginBottom: o.menuGutter,
                            marginTop: o.menuGutter
                        })
                    },
                    menuList: function(e, t) {
                        var n = e.maxHeight,
                            i = e.theme.spacing.baseUnit;
                        return de({
                            maxHeight: n,
                            overflowY: "auto",
                            position: "relative",
                            WebkitOverflowScrolling: "touch"
                        }, t ? {} : {
                            paddingBottom: i,
                            paddingTop: i
                        })
                    },
                    menuPortal: function(e) {
                        var t = e.rect,
                            n = e.offset,
                            i = e.position;
                        return {
                            left: t.left,
                            position: i,
                            top: n,
                            width: t.width,
                            zIndex: 1
                        }
                    },
                    multiValue: function(e, t) {
                        var n = e.theme,
                            i = n.spacing,
                            r = n.borderRadius,
                            a = n.colors;
                        return de({
                            label: "multiValue",
                            display: "flex",
                            minWidth: 0
                        }, t ? {} : {
                            backgroundColor: a.neutral10,
                            borderRadius: r / 2,
                            margin: i.baseUnit / 2
                        })
                    },
                    multiValueLabel: function(e, t) {
                        var n = e.theme,
                            i = n.borderRadius,
                            r = n.colors,
                            a = e.cropWithEllipsis;
                        return de({
                            overflow: "hidden",
                            textOverflow: a || void 0 === a ? "ellipsis" : void 0,
                            whiteSpace: "nowrap"
                        }, t ? {} : {
                            borderRadius: i / 2,
                            color: r.neutral80,
                            fontSize: "85%",
                            padding: 3,
                            paddingLeft: 6
                        })
                    },
                    multiValueRemove: function(e, t) {
                        var n = e.theme,
                            i = n.spacing,
                            r = n.borderRadius,
                            a = n.colors,
                            o = e.isFocused;
                        return de({
                            alignItems: "center",
                            display: "flex"
                        }, t ? {} : {
                            borderRadius: r / 2,
                            backgroundColor: o ? a.dangerLight : void 0,
                            paddingLeft: i.baseUnit,
                            paddingRight: i.baseUnit,
                            ":hover": {
                                backgroundColor: a.dangerLight,
                                color: a.danger
                            }
                        })
                    },
                    noOptionsMessage: Un,
                    option: function(e, t) {
                        var n = e.isDisabled,
                            i = e.isFocused,
                            r = e.isSelected,
                            a = e.theme,
                            o = a.spacing,
                            s = a.colors;
                        return de({
                            label: "option",
                            cursor: "default",
                            display: "block",
                            fontSize: "inherit",
                            width: "100%",
                            userSelect: "none",
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                        }, t ? {} : {
                            backgroundColor: r ? s.primary : i ? s.primary25 : "transparent",
                            color: n ? s.neutral20 : r ? s.neutral0 : "inherit",
                            padding: "".concat(2 * o.baseUnit, "px ").concat(3 * o.baseUnit, "px"),
                            ":active": {
                                backgroundColor: n ? void 0 : r ? s.primary : s.primary50
                            }
                        })
                    },
                    placeholder: function(e, t) {
                        var n = e.theme,
                            i = n.spacing,
                            r = n.colors;
                        return de({
                            label: "placeholder",
                            gridArea: "1 / 1 / 2 / 3"
                        }, t ? {} : {
                            color: r.neutral50,
                            marginLeft: i.baseUnit / 2,
                            marginRight: i.baseUnit / 2
                        })
                    },
                    singleValue: function(e, t) {
                        var n = e.isDisabled,
                            i = e.theme,
                            r = i.spacing,
                            a = i.colors;
                        return de({
                            label: "singleValue",
                            gridArea: "1 / 1 / 2 / 3",
                            maxWidth: "100%",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                        }, t ? {} : {
                            color: n ? a.neutral40 : a.neutral80,
                            marginLeft: r.baseUnit / 2,
                            marginRight: r.baseUnit / 2
                        })
                    },
                    valueContainer: function(e, t) {
                        var n = e.theme.spacing,
                            i = e.isMulti,
                            r = e.hasValue,
                            a = e.selectProps.controlShouldRenderValue;
                        return de({
                            alignItems: "center",
                            display: i && r && a ? "flex" : "grid",
                            flex: 1,
                            flexWrap: "wrap",
                            WebkitOverflowScrolling: "touch",
                            position: "relative",
                            overflow: "hidden"
                        }, t ? {} : {
                            padding: "".concat(n.baseUnit / 2, "px ").concat(2 * n.baseUnit, "px")
                        })
                    }
                },
                qi = {
                    borderRadius: 4,
                    colors: {
                        primary: "#2684FF",
                        primary75: "#4C9AFF",
                        primary50: "#B2D4FF",
                        primary25: "#DEEBFF",
                        danger: "#DE350B",
                        dangerLight: "#FFBDAD",
                        neutral0: "hsl(0, 0%, 100%)",
                        neutral5: "hsl(0, 0%, 95%)",
                        neutral10: "hsl(0, 0%, 90%)",
                        neutral20: "hsl(0, 0%, 80%)",
                        neutral30: "hsl(0, 0%, 70%)",
                        neutral40: "hsl(0, 0%, 60%)",
                        neutral50: "hsl(0, 0%, 50%)",
                        neutral60: "hsl(0, 0%, 40%)",
                        neutral70: "hsl(0, 0%, 30%)",
                        neutral80: "hsl(0, 0%, 20%)",
                        neutral90: "hsl(0, 0%, 10%)"
                    },
                    spacing: {
                        baseUnit: 4,
                        controlHeight: 38,
                        menuGutter: 8
                    }
                },
                Yi = {
                    "aria-live": "polite",
                    backspaceRemovesValue: !0,
                    blurInputOnSelect: On(),
                    captureMenuScroll: !On(),
                    classNames: {},
                    closeMenuOnSelect: !0,
                    closeMenuOnScroll: !1,
                    components: {},
                    controlShouldRenderValue: !0,
                    escapeClearsValue: !1,
                    filterOption: function(e, t) {
                        if (e.data.__isNew__) return !0;
                        var n = de({
                                ignoreCase: !0,
                                ignoreAccents: !0,
                                stringify: Ti,
                                trim: !0,
                                matchFrom: "any"
                            }, undefined),
                            i = n.ignoreCase,
                            r = n.ignoreAccents,
                            a = n.stringify,
                            o = n.trim,
                            s = n.matchFrom,
                            l = o ? Li(t) : t,
                            c = o ? Li(a(e)) : a(e);
                        return i && (l = l.toLowerCase(), c = c.toLowerCase()), r && (l = Mi(l), c = Oi(c)), "start" === s ? c.substr(0, l.length) === l : c.indexOf(l) > -1
                    },
                    formatGroupLabel: function(e) {
                        return e.label
                    },
                    getOptionLabel: function(e) {
                        return e.label
                    },
                    getOptionValue: function(e) {
                        return e.value
                    },
                    isDisabled: !1,
                    isLoading: !1,
                    isMulti: !1,
                    isRtl: !1,
                    isSearchable: !0,
                    isOptionDisabled: function(e) {
                        return !!e.isDisabled
                    },
                    loadingMessage: function() {
                        return "Loading..."
                    },
                    maxMenuHeight: 300,
                    minMenuHeight: 140,
                    menuIsOpen: !1,
                    menuPlacement: "bottom",
                    menuPosition: "absolute",
                    menuShouldBlockScroll: !1,
                    menuShouldScrollIntoView: ! function() {
                        try {
                            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                        } catch (e) {
                            return !1
                        }
                    }(),
                    noOptionsMessage: function() {
                        return "No options"
                    },
                    openMenuOnFocus: !1,
                    openMenuOnClick: !0,
                    options: [],
                    pageSize: 5,
                    placeholder: "Select...",
                    screenReaderStatus: function(e) {
                        var t = e.count;
                        return "".concat(t, " result").concat(1 !== t ? "s" : "", " available")
                    },
                    styles: {},
                    tabIndex: 0,
                    tabSelectsValue: !0,
                    unstyled: !1
                };

            function Xi(e, t, n, i) {
                return {
                    type: "option",
                    data: t,
                    isDisabled: nr(e, t, n),
                    isSelected: ir(e, t, n),
                    label: er(e, t),
                    value: tr(e, t),
                    index: i
                }
            }

            function Ki(e, t) {
                return e.options.map((function(n, i) {
                    if ("options" in n) {
                        var r = n.options.map((function(n, i) {
                            return Xi(e, n, t, i)
                        })).filter((function(t) {
                            return Qi(e, t)
                        }));
                        return r.length > 0 ? {
                            type: "group",
                            data: n,
                            options: r,
                            index: i
                        } : void 0
                    }
                    var a = Xi(e, n, t, i);
                    return Qi(e, a) ? a : void 0
                })).filter(In)
            }

            function Ji(e) {
                return e.reduce((function(e, t) {
                    return "group" === t.type ? e.push.apply(e, hi(t.options.map((function(e) {
                        return e.data
                    })))) : e.push(t.data), e
                }), [])
            }

            function Qi(e, t) {
                var n = e.inputValue,
                    i = void 0 === n ? "" : n,
                    r = t.data,
                    a = t.isSelected,
                    o = t.label,
                    s = t.value;
                return (!ar(e) || !a) && rr(e, {
                    label: o,
                    value: s,
                    data: r
                }, i)
            }
            var er = function(e, t) {
                    return e.getOptionLabel(t)
                },
                tr = function(e, t) {
                    return e.getOptionValue(t)
                };

            function nr(e, t, n) {
                return "function" == typeof e.isOptionDisabled && e.isOptionDisabled(t, n)
            }

            function ir(e, t, n) {
                if (n.indexOf(t) > -1) return !0;
                if ("function" == typeof e.isOptionSelected) return e.isOptionSelected(t, n);
                var i = tr(e, t);
                return n.some((function(t) {
                    return tr(e, t) === i
                }))
            }

            function rr(e, t, n) {
                return !e.filterOption || e.filterOption(t, n)
            }
            var ar = function(e) {
                    var t = e.hideSelectedOptions,
                        n = e.isMulti;
                    return void 0 === t ? n : t
                },
                or = 1,
                sr = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && di(e, t)
                    }(a, e);
                    var t, n, i, r = fi(a);

                    function a(e) {
                        var t;
                        if (function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, a), (t = r.call(this, e)).state = {
                                ariaSelection: null,
                                focusedOption: null,
                                focusedValue: null,
                                inputIsHidden: !1,
                                isFocused: !1,
                                selectValue: [],
                                clearFocusValueOnUpdate: !1,
                                prevWasFocused: !1,
                                inputIsHiddenAfterUpdate: void 0,
                                prevProps: void 0
                            }, t.blockOptionHover = !1, t.isComposing = !1, t.commonProps = void 0, t.initialTouchX = 0, t.initialTouchY = 0, t.instancePrefix = "", t.openAfterFocus = !1, t.scrollToFocusedOptionOnUpdate = !1, t.userIsDragging = void 0, t.controlRef = null, t.getControlRef = function(e) {
                                t.controlRef = e
                            }, t.focusedOptionRef = null, t.getFocusedOptionRef = function(e) {
                                t.focusedOptionRef = e
                            }, t.menuListRef = null, t.getMenuListRef = function(e) {
                                t.menuListRef = e
                            }, t.inputRef = null, t.getInputRef = function(e) {
                                t.inputRef = e
                            }, t.focus = t.focusInput, t.blur = t.blurInput, t.onChange = function(e, n) {
                                var i = t.props,
                                    r = i.onChange,
                                    a = i.name;
                                n.name = a, t.ariaOnChange(e, n), r(e, n)
                            }, t.setValue = function(e, n, i) {
                                var r = t.props,
                                    a = r.closeMenuOnSelect,
                                    o = r.isMulti,
                                    s = r.inputValue;
                                t.onInputChange("", {
                                    action: "set-value",
                                    prevInputValue: s
                                }), a && (t.setState({
                                    inputIsHiddenAfterUpdate: !o
                                }), t.onMenuClose()), t.setState({
                                    clearFocusValueOnUpdate: !0
                                }), t.onChange(e, {
                                    action: n,
                                    option: i
                                })
                            }, t.selectOption = function(e) {
                                var n = t.props,
                                    i = n.blurInputOnSelect,
                                    r = n.isMulti,
                                    a = n.name,
                                    o = t.state.selectValue,
                                    s = r && t.isOptionSelected(e, o),
                                    l = t.isOptionDisabled(e, o);
                                if (s) {
                                    var c = t.getOptionValue(e);
                                    t.setValue(o.filter((function(e) {
                                        return t.getOptionValue(e) !== c
                                    })), "deselect-option", e)
                                } else {
                                    if (l) return void t.ariaOnChange(e, {
                                        action: "select-option",
                                        option: e,
                                        name: a
                                    });
                                    r ? t.setValue([].concat(hi(o), [e]), "select-option", e) : t.setValue(e, "select-option")
                                }
                                i && t.blurInput()
                            }, t.removeValue = function(e) {
                                var n = t.props.isMulti,
                                    i = t.state.selectValue,
                                    r = t.getOptionValue(e),
                                    a = i.filter((function(e) {
                                        return t.getOptionValue(e) !== r
                                    })),
                                    o = Pn(n, a, a[0] || null);
                                t.onChange(o, {
                                    action: "remove-value",
                                    removedValue: e
                                }), t.focusInput()
                            }, t.clearValue = function() {
                                var e = t.state.selectValue;
                                t.onChange(Pn(t.props.isMulti, [], null), {
                                    action: "clear",
                                    removedValues: e
                                })
                            }, t.popValue = function() {
                                var e = t.props.isMulti,
                                    n = t.state.selectValue,
                                    i = n[n.length - 1],
                                    r = n.slice(0, n.length - 1),
                                    a = Pn(e, r, r[0] || null);
                                t.onChange(a, {
                                    action: "pop-value",
                                    removedValue: i
                                })
                            }, t.getValue = function() {
                                return t.state.selectValue
                            }, t.cx = function() {
                                for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                                return vn.apply(void 0, [t.props.classNamePrefix].concat(n))
                            }, t.getOptionLabel = function(e) {
                                return er(t.props, e)
                            }, t.getOptionValue = function(e) {
                                return tr(t.props, e)
                            }, t.getStyles = function(e, n) {
                                var i = t.props.unstyled,
                                    r = Gi[e](n, i);
                                r.boxSizing = "border-box";
                                var a = t.props.styles[e];
                                return a ? a(r, n) : r
                            }, t.getClassNames = function(e, n) {
                                var i, r;
                                return null === (i = (r = t.props.classNames)[e]) || void 0 === i ? void 0 : i.call(r, n)
                            }, t.getElementId = function(e) {
                                return "".concat(t.instancePrefix, "-").concat(e)
                            }, t.getComponents = function() {
                                return e = t.props, de(de({}, li), e.components);
                                var e
                            }, t.buildCategorizedOptions = function() {
                                return Ki(t.props, t.state.selectValue)
                            }, t.getCategorizedOptions = function() {
                                return t.props.menuIsOpen ? t.buildCategorizedOptions() : []
                            }, t.buildFocusableOptions = function() {
                                return Ji(t.buildCategorizedOptions())
                            }, t.getFocusableOptions = function() {
                                return t.props.menuIsOpen ? t.buildFocusableOptions() : []
                            }, t.ariaOnChange = function(e, n) {
                                t.setState({
                                    ariaSelection: de({
                                        value: e
                                    }, n)
                                })
                            }, t.onMenuMouseDown = function(e) {
                                0 === e.button && (e.stopPropagation(), e.preventDefault(), t.focusInput())
                            }, t.onMenuMouseMove = function(e) {
                                t.blockOptionHover = !1
                            }, t.onControlMouseDown = function(e) {
                                if (!e.defaultPrevented) {
                                    var n = t.props.openMenuOnClick;
                                    t.state.isFocused ? t.props.menuIsOpen ? "INPUT" !== e.target.tagName && "TEXTAREA" !== e.target.tagName && t.onMenuClose() : n && t.openMenu("first") : (n && (t.openAfterFocus = !0), t.focusInput()), "INPUT" !== e.target.tagName && "TEXTAREA" !== e.target.tagName && e.preventDefault()
                                }
                            }, t.onDropdownIndicatorMouseDown = function(e) {
                                if (!(e && "mousedown" === e.type && 0 !== e.button || t.props.isDisabled)) {
                                    var n = t.props,
                                        i = n.isMulti,
                                        r = n.menuIsOpen;
                                    t.focusInput(), r ? (t.setState({
                                        inputIsHiddenAfterUpdate: !i
                                    }), t.onMenuClose()) : t.openMenu("first"), e.preventDefault()
                                }
                            }, t.onClearIndicatorMouseDown = function(e) {
                                e && "mousedown" === e.type && 0 !== e.button || (t.clearValue(), e.preventDefault(), t.openAfterFocus = !1, "touchend" === e.type ? t.focusInput() : setTimeout((function() {
                                    return t.focusInput()
                                })))
                            }, t.onScroll = function(e) {
                                "boolean" == typeof t.props.closeMenuOnScroll ? e.target instanceof HTMLElement && En(e.target) && t.props.onMenuClose() : "function" == typeof t.props.closeMenuOnScroll && t.props.closeMenuOnScroll(e) && t.props.onMenuClose()
                            }, t.onCompositionStart = function() {
                                t.isComposing = !0
                            }, t.onCompositionEnd = function() {
                                t.isComposing = !1
                            }, t.onTouchStart = function(e) {
                                var n = e.touches,
                                    i = n && n.item(0);
                                i && (t.initialTouchX = i.clientX, t.initialTouchY = i.clientY, t.userIsDragging = !1)
                            }, t.onTouchMove = function(e) {
                                var n = e.touches,
                                    i = n && n.item(0);
                                if (i) {
                                    var r = Math.abs(i.clientX - t.initialTouchX),
                                        a = Math.abs(i.clientY - t.initialTouchY);
                                    t.userIsDragging = r > 5 || a > 5
                                }
                            }, t.onTouchEnd = function(e) {
                                t.userIsDragging || (t.controlRef && !t.controlRef.contains(e.target) && t.menuListRef && !t.menuListRef.contains(e.target) && t.blurInput(), t.initialTouchX = 0, t.initialTouchY = 0)
                            }, t.onControlTouchEnd = function(e) {
                                t.userIsDragging || t.onControlMouseDown(e)
                            }, t.onClearIndicatorTouchEnd = function(e) {
                                t.userIsDragging || t.onClearIndicatorMouseDown(e)
                            }, t.onDropdownIndicatorTouchEnd = function(e) {
                                t.userIsDragging || t.onDropdownIndicatorMouseDown(e)
                            }, t.handleInputChange = function(e) {
                                var n = t.props.inputValue,
                                    i = e.currentTarget.value;
                                t.setState({
                                    inputIsHiddenAfterUpdate: !1
                                }), t.onInputChange(i, {
                                    action: "input-change",
                                    prevInputValue: n
                                }), t.props.menuIsOpen || t.onMenuOpen()
                            }, t.onInputFocus = function(e) {
                                t.props.onFocus && t.props.onFocus(e), t.setState({
                                    inputIsHiddenAfterUpdate: !1,
                                    isFocused: !0
                                }), (t.openAfterFocus || t.props.openMenuOnFocus) && t.openMenu("first"), t.openAfterFocus = !1
                            }, t.onInputBlur = function(e) {
                                var n = t.props.inputValue;
                                t.menuListRef && t.menuListRef.contains(document.activeElement) ? t.inputRef.focus() : (t.props.onBlur && t.props.onBlur(e), t.onInputChange("", {
                                    action: "input-blur",
                                    prevInputValue: n
                                }), t.onMenuClose(), t.setState({
                                    focusedValue: null,
                                    isFocused: !1
                                }))
                            }, t.onOptionHover = function(e) {
                                t.blockOptionHover || t.state.focusedOption === e || t.setState({
                                    focusedOption: e
                                })
                            }, t.shouldHideSelectedOptions = function() {
                                return ar(t.props)
                            }, t.onValueInputFocus = function(e) {
                                e.preventDefault(), e.stopPropagation(), t.focus()
                            }, t.onKeyDown = function(e) {
                                var n = t.props,
                                    i = n.isMulti,
                                    r = n.backspaceRemovesValue,
                                    a = n.escapeClearsValue,
                                    o = n.inputValue,
                                    s = n.isClearable,
                                    l = n.isDisabled,
                                    c = n.menuIsOpen,
                                    u = n.onKeyDown,
                                    d = n.tabSelectsValue,
                                    p = n.openMenuOnFocus,
                                    f = t.state,
                                    h = f.focusedOption,
                                    m = f.focusedValue,
                                    g = f.selectValue;
                                if (!(l || "function" == typeof u && (u(e), e.defaultPrevented))) {
                                    switch (t.blockOptionHover = !0, e.key) {
                                        case "ArrowLeft":
                                            if (!i || o) return;
                                            t.focusValue("previous");
                                            break;
                                        case "ArrowRight":
                                            if (!i || o) return;
                                            t.focusValue("next");
                                            break;
                                        case "Delete":
                                        case "Backspace":
                                            if (o) return;
                                            if (m) t.removeValue(m);
                                            else {
                                                if (!r) return;
                                                i ? t.popValue() : s && t.clearValue()
                                            }
                                            break;
                                        case "Tab":
                                            if (t.isComposing) return;
                                            if (e.shiftKey || !c || !d || !h || p && t.isOptionSelected(h, g)) return;
                                            t.selectOption(h);
                                            break;
                                        case "Enter":
                                            if (229 === e.keyCode) break;
                                            if (c) {
                                                if (!h) return;
                                                if (t.isComposing) return;
                                                t.selectOption(h);
                                                break
                                            }
                                            return;
                                        case "Escape":
                                            c ? (t.setState({
                                                inputIsHiddenAfterUpdate: !1
                                            }), t.onInputChange("", {
                                                action: "menu-close",
                                                prevInputValue: o
                                            }), t.onMenuClose()) : s && a && t.clearValue();
                                            break;
                                        case " ":
                                            if (o) return;
                                            if (!c) {
                                                t.openMenu("first");
                                                break
                                            }
                                            if (!h) return;
                                            t.selectOption(h);
                                            break;
                                        case "ArrowUp":
                                            c ? t.focusOption("up") : t.openMenu("last");
                                            break;
                                        case "ArrowDown":
                                            c ? t.focusOption("down") : t.openMenu("first");
                                            break;
                                        case "PageUp":
                                            if (!c) return;
                                            t.focusOption("pageup");
                                            break;
                                        case "PageDown":
                                            if (!c) return;
                                            t.focusOption("pagedown");
                                            break;
                                        case "Home":
                                            if (!c) return;
                                            t.focusOption("first");
                                            break;
                                        case "End":
                                            if (!c) return;
                                            t.focusOption("last");
                                            break;
                                        default:
                                            return
                                    }
                                    e.preventDefault()
                                }
                            }, t.instancePrefix = "react-select-" + (t.props.instanceId || ++or), t.state.selectValue = bn(e.value), e.menuIsOpen && t.state.selectValue.length) {
                            var n = t.buildFocusableOptions(),
                                i = n.indexOf(t.state.selectValue[0]);
                            t.state.focusedOption = n[i]
                        }
                        return t
                    }
                    return t = a, n = [{
                        key: "componentDidMount",
                        value: function() {
                            this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && Sn(this.menuListRef, this.focusedOptionRef)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = this.props,
                                n = t.isDisabled,
                                i = t.menuIsOpen,
                                r = this.state.isFocused;
                            (r && !n && e.isDisabled || r && i && !e.menuIsOpen) && this.focusInput(), r && n && !e.isDisabled ? this.setState({
                                isFocused: !1
                            }, this.onMenuClose) : r || n || !e.isDisabled || this.inputRef !== document.activeElement || this.setState({
                                isFocused: !0
                            }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (Sn(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener("scroll", this.onScroll, !0)
                        }
                    }, {
                        key: "onMenuOpen",
                        value: function() {
                            this.props.onMenuOpen()
                        }
                    }, {
                        key: "onMenuClose",
                        value: function() {
                            this.onInputChange("", {
                                action: "menu-close",
                                prevInputValue: this.props.inputValue
                            }), this.props.onMenuClose()
                        }
                    }, {
                        key: "onInputChange",
                        value: function(e, t) {
                            this.props.onInputChange(e, t)
                        }
                    }, {
                        key: "focusInput",
                        value: function() {
                            this.inputRef && this.inputRef.focus()
                        }
                    }, {
                        key: "blurInput",
                        value: function() {
                            this.inputRef && this.inputRef.blur()
                        }
                    }, {
                        key: "openMenu",
                        value: function(e) {
                            var t = this,
                                n = this.state,
                                i = n.selectValue,
                                r = n.isFocused,
                                a = this.buildFocusableOptions(),
                                o = "first" === e ? 0 : a.length - 1;
                            if (!this.props.isMulti) {
                                var s = a.indexOf(i[0]);
                                s > -1 && (o = s)
                            }
                            this.scrollToFocusedOptionOnUpdate = !(r && this.menuListRef), this.setState({
                                inputIsHiddenAfterUpdate: !1,
                                focusedValue: null,
                                focusedOption: a[o]
                            }, (function() {
                                return t.onMenuOpen()
                            }))
                        }
                    }, {
                        key: "focusValue",
                        value: function(e) {
                            var t = this.state,
                                n = t.selectValue,
                                i = t.focusedValue;
                            if (this.props.isMulti) {
                                this.setState({
                                    focusedOption: null
                                });
                                var r = n.indexOf(i);
                                i || (r = -1);
                                var a = n.length - 1,
                                    o = -1;
                                if (n.length) {
                                    switch (e) {
                                        case "previous":
                                            o = 0 === r ? 0 : -1 === r ? a : r - 1;
                                            break;
                                        case "next":
                                            r > -1 && r < a && (o = r + 1)
                                    }
                                    this.setState({
                                        inputIsHidden: -1 !== o,
                                        focusedValue: n[o]
                                    })
                                }
                            }
                        }
                    }, {
                        key: "focusOption",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "first",
                                t = this.props.pageSize,
                                n = this.state.focusedOption,
                                i = this.getFocusableOptions();
                            if (i.length) {
                                var r = 0,
                                    a = i.indexOf(n);
                                n || (a = -1), "up" === e ? r = a > 0 ? a - 1 : i.length - 1 : "down" === e ? r = (a + 1) % i.length : "pageup" === e ? (r = a - t) < 0 && (r = 0) : "pagedown" === e ? (r = a + t) > i.length - 1 && (r = i.length - 1) : "last" === e && (r = i.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
                                    focusedOption: i[r],
                                    focusedValue: null
                                })
                            }
                        }
                    }, {
                        key: "getTheme",
                        value: function() {
                            return this.props.theme ? "function" == typeof this.props.theme ? this.props.theme(qi) : de(de({}, qi), this.props.theme) : qi
                        }
                    }, {
                        key: "getCommonProps",
                        value: function() {
                            var e = this.clearValue,
                                t = this.cx,
                                n = this.getStyles,
                                i = this.getClassNames,
                                r = this.getValue,
                                a = this.selectOption,
                                o = this.setValue,
                                s = this.props,
                                l = s.isMulti,
                                c = s.isRtl,
                                u = s.options;
                            return {
                                clearValue: e,
                                cx: t,
                                getStyles: n,
                                getClassNames: i,
                                getValue: r,
                                hasValue: this.hasValue(),
                                isMulti: l,
                                isRtl: c,
                                options: u,
                                selectOption: a,
                                selectProps: s,
                                setValue: o,
                                theme: this.getTheme()
                            }
                        }
                    }, {
                        key: "hasValue",
                        value: function() {
                            return this.state.selectValue.length > 0
                        }
                    }, {
                        key: "hasOptions",
                        value: function() {
                            return !!this.getFocusableOptions().length
                        }
                    }, {
                        key: "isClearable",
                        value: function() {
                            var e = this.props,
                                t = e.isClearable,
                                n = e.isMulti;
                            return void 0 === t ? n : t
                        }
                    }, {
                        key: "isOptionDisabled",
                        value: function(e, t) {
                            return nr(this.props, e, t)
                        }
                    }, {
                        key: "isOptionSelected",
                        value: function(e, t) {
                            return ir(this.props, e, t)
                        }
                    }, {
                        key: "filterOption",
                        value: function(e, t) {
                            return rr(this.props, e, t)
                        }
                    }, {
                        key: "formatOptionLabel",
                        value: function(e, t) {
                            if ("function" == typeof this.props.formatOptionLabel) {
                                var n = this.props.inputValue,
                                    i = this.state.selectValue;
                                return this.props.formatOptionLabel(e, {
                                    context: t,
                                    inputValue: n,
                                    selectValue: i
                                })
                            }
                            return this.getOptionLabel(e)
                        }
                    }, {
                        key: "formatGroupLabel",
                        value: function(e) {
                            return this.props.formatGroupLabel(e)
                        }
                    }, {
                        key: "startListeningComposition",
                        value: function() {
                            document && document.addEventListener && (document.addEventListener("compositionstart", this.onCompositionStart, !1), document.addEventListener("compositionend", this.onCompositionEnd, !1))
                        }
                    }, {
                        key: "stopListeningComposition",
                        value: function() {
                            document && document.removeEventListener && (document.removeEventListener("compositionstart", this.onCompositionStart), document.removeEventListener("compositionend", this.onCompositionEnd))
                        }
                    }, {
                        key: "startListeningToTouch",
                        value: function() {
                            document && document.addEventListener && (document.addEventListener("touchstart", this.onTouchStart, !1), document.addEventListener("touchmove", this.onTouchMove, !1), document.addEventListener("touchend", this.onTouchEnd, !1))
                        }
                    }, {
                        key: "stopListeningToTouch",
                        value: function() {
                            document && document.removeEventListener && (document.removeEventListener("touchstart", this.onTouchStart), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd))
                        }
                    }, {
                        key: "renderInput",
                        value: function() {
                            var e = this.props,
                                t = e.isDisabled,
                                n = e.isSearchable,
                                i = e.inputId,
                                r = e.inputValue,
                                a = e.tabIndex,
                                o = e.form,
                                s = e.menuIsOpen,
                                l = e.required,
                                c = this.getComponents().Input,
                                u = this.state,
                                d = u.inputIsHidden,
                                p = u.ariaSelection,
                                f = this.commonProps,
                                h = i || this.getElementId("input"),
                                m = de(de(de({
                                    "aria-autocomplete": "list",
                                    "aria-expanded": s,
                                    "aria-haspopup": !0,
                                    "aria-errormessage": this.props["aria-errormessage"],
                                    "aria-invalid": this.props["aria-invalid"],
                                    "aria-label": this.props["aria-label"],
                                    "aria-labelledby": this.props["aria-labelledby"],
                                    "aria-required": l,
                                    role: "combobox"
                                }, s && {
                                    "aria-controls": this.getElementId("listbox"),
                                    "aria-owns": this.getElementId("listbox")
                                }), !n && {
                                    "aria-readonly": !0
                                }), this.hasValue() ? "initial-input-focus" === (null == p ? void 0 : p.action) && {
                                    "aria-describedby": this.getElementId("live-region")
                                } : {
                                    "aria-describedby": this.getElementId("placeholder")
                                });
                            return n ? fe.createElement(c, pe({}, f, {
                                autoCapitalize: "none",
                                autoComplete: "off",
                                autoCorrect: "off",
                                id: h,
                                innerRef: this.getInputRef,
                                isDisabled: t,
                                isHidden: d,
                                onBlur: this.onInputBlur,
                                onChange: this.handleInputChange,
                                onFocus: this.onInputFocus,
                                spellCheck: "false",
                                tabIndex: a,
                                form: o,
                                type: "text",
                                value: r
                            }, m)) : fe.createElement(Ii, pe({
                                id: h,
                                innerRef: this.getInputRef,
                                onBlur: this.onInputBlur,
                                onChange: mn,
                                onFocus: this.onInputFocus,
                                disabled: t,
                                tabIndex: a,
                                inputMode: "none",
                                form: o,
                                value: ""
                            }, m))
                        }
                    }, {
                        key: "renderPlaceholderOrValue",
                        value: function() {
                            var e = this,
                                t = this.getComponents(),
                                n = t.MultiValue,
                                i = t.MultiValueContainer,
                                r = t.MultiValueLabel,
                                a = t.MultiValueRemove,
                                o = t.SingleValue,
                                s = t.Placeholder,
                                l = this.commonProps,
                                c = this.props,
                                u = c.controlShouldRenderValue,
                                d = c.isDisabled,
                                p = c.isMulti,
                                f = c.inputValue,
                                h = c.placeholder,
                                m = this.state,
                                g = m.selectValue,
                                v = m.focusedValue,
                                b = m.isFocused;
                            if (!this.hasValue() || !u) return f ? null : fe.createElement(s, pe({}, l, {
                                key: "placeholder",
                                isDisabled: d,
                                isFocused: b,
                                innerProps: {
                                    id: this.getElementId("placeholder")
                                }
                            }), h);
                            if (p) return g.map((function(t, o) {
                                var s = t === v,
                                    c = "".concat(e.getOptionLabel(t), "-").concat(e.getOptionValue(t));
                                return fe.createElement(n, pe({}, l, {
                                    components: {
                                        Container: i,
                                        Label: r,
                                        Remove: a
                                    },
                                    isFocused: s,
                                    isDisabled: d,
                                    key: c,
                                    index: o,
                                    removeProps: {
                                        onClick: function() {
                                            return e.removeValue(t)
                                        },
                                        onTouchEnd: function() {
                                            return e.removeValue(t)
                                        },
                                        onMouseDown: function(e) {
                                            e.preventDefault()
                                        }
                                    },
                                    data: t
                                }), e.formatOptionLabel(t, "value"))
                            }));
                            if (f) return null;
                            var y = g[0];
                            return fe.createElement(o, pe({}, l, {
                                data: y,
                                isDisabled: d
                            }), this.formatOptionLabel(y, "value"))
                        }
                    }, {
                        key: "renderClearIndicator",
                        value: function() {
                            var e = this.getComponents().ClearIndicator,
                                t = this.commonProps,
                                n = this.props,
                                i = n.isDisabled,
                                r = n.isLoading,
                                a = this.state.isFocused;
                            if (!this.isClearable() || !e || i || !this.hasValue() || r) return null;
                            var o = {
                                onMouseDown: this.onClearIndicatorMouseDown,
                                onTouchEnd: this.onClearIndicatorTouchEnd,
                                "aria-hidden": "true"
                            };
                            return fe.createElement(e, pe({}, t, {
                                innerProps: o,
                                isFocused: a
                            }))
                        }
                    }, {
                        key: "renderLoadingIndicator",
                        value: function() {
                            var e = this.getComponents().LoadingIndicator,
                                t = this.commonProps,
                                n = this.props,
                                i = n.isDisabled,
                                r = n.isLoading,
                                a = this.state.isFocused;
                            return e && r ? fe.createElement(e, pe({}, t, {
                                innerProps: {
                                    "aria-hidden": "true"
                                },
                                isDisabled: i,
                                isFocused: a
                            })) : null
                        }
                    }, {
                        key: "renderIndicatorSeparator",
                        value: function() {
                            var e = this.getComponents(),
                                t = e.DropdownIndicator,
                                n = e.IndicatorSeparator;
                            if (!t || !n) return null;
                            var i = this.commonProps,
                                r = this.props.isDisabled,
                                a = this.state.isFocused;
                            return fe.createElement(n, pe({}, i, {
                                isDisabled: r,
                                isFocused: a
                            }))
                        }
                    }, {
                        key: "renderDropdownIndicator",
                        value: function() {
                            var e = this.getComponents().DropdownIndicator;
                            if (!e) return null;
                            var t = this.commonProps,
                                n = this.props.isDisabled,
                                i = this.state.isFocused,
                                r = {
                                    onMouseDown: this.onDropdownIndicatorMouseDown,
                                    onTouchEnd: this.onDropdownIndicatorTouchEnd,
                                    "aria-hidden": "true"
                                };
                            return fe.createElement(e, pe({}, t, {
                                innerProps: r,
                                isDisabled: n,
                                isFocused: i
                            }))
                        }
                    }, {
                        key: "renderMenu",
                        value: function() {
                            var e = this,
                                t = this.getComponents(),
                                n = t.Group,
                                i = t.GroupHeading,
                                r = t.Menu,
                                a = t.MenuList,
                                o = t.MenuPortal,
                                s = t.LoadingMessage,
                                l = t.NoOptionsMessage,
                                c = t.Option,
                                u = this.commonProps,
                                d = this.state.focusedOption,
                                p = this.props,
                                f = p.captureMenuScroll,
                                h = p.inputValue,
                                m = p.isLoading,
                                g = p.loadingMessage,
                                v = p.minMenuHeight,
                                b = p.maxMenuHeight,
                                y = p.menuIsOpen,
                                C = p.menuPlacement,
                                _ = p.menuPosition,
                                E = p.menuPortalTarget,
                                w = p.menuShouldBlockScroll,
                                x = p.menuShouldScrollIntoView,
                                k = p.noOptionsMessage,
                                S = p.onMenuScrollToTop,
                                O = p.onMenuScrollToBottom;
                            if (!y) return null;
                            var M, L = function(t, n) {
                                var i = t.type,
                                    r = t.data,
                                    a = t.isDisabled,
                                    o = t.isSelected,
                                    s = t.label,
                                    l = t.value,
                                    p = d === r,
                                    f = a ? void 0 : function() {
                                        return e.onOptionHover(r)
                                    },
                                    h = a ? void 0 : function() {
                                        return e.selectOption(r)
                                    },
                                    m = "".concat(e.getElementId("option"), "-").concat(n),
                                    g = {
                                        id: m,
                                        onClick: h,
                                        onMouseMove: f,
                                        onMouseOver: f,
                                        tabIndex: -1
                                    };
                                return fe.createElement(c, pe({}, u, {
                                    innerProps: g,
                                    data: r,
                                    isDisabled: a,
                                    isSelected: o,
                                    key: m,
                                    label: s,
                                    type: i,
                                    value: l,
                                    isFocused: p,
                                    innerRef: p ? e.getFocusedOptionRef : void 0
                                }), e.formatOptionLabel(t.data, "menu"))
                            };
                            if (this.hasOptions()) M = this.getCategorizedOptions().map((function(t) {
                                if ("group" === t.type) {
                                    var r = t.data,
                                        a = t.options,
                                        o = t.index,
                                        s = "".concat(e.getElementId("group"), "-").concat(o),
                                        l = "".concat(s, "-heading");
                                    return fe.createElement(n, pe({}, u, {
                                        key: s,
                                        data: r,
                                        options: a,
                                        Heading: i,
                                        headingProps: {
                                            id: l,
                                            data: t.data
                                        },
                                        label: e.formatGroupLabel(t.data)
                                    }), t.options.map((function(e) {
                                        return L(e, "".concat(o, "-").concat(e.index))
                                    })))
                                }
                                if ("option" === t.type) return L(t, "".concat(t.index))
                            }));
                            else if (m) {
                                var T = g({
                                    inputValue: h
                                });
                                if (null === T) return null;
                                M = fe.createElement(s, u, T)
                            } else {
                                var z = k({
                                    inputValue: h
                                });
                                if (null === z) return null;
                                M = fe.createElement(l, u, z)
                            }
                            var I = {
                                    minMenuHeight: v,
                                    maxMenuHeight: b,
                                    menuPlacement: C,
                                    menuPosition: _,
                                    menuShouldScrollIntoView: x
                                },
                                P = fe.createElement(jn, pe({}, u, I), (function(t) {
                                    var n = t.ref,
                                        i = t.placerProps,
                                        o = i.placement,
                                        s = i.maxHeight;
                                    return fe.createElement(r, pe({}, u, I, {
                                        innerRef: n,
                                        innerProps: {
                                            onMouseDown: e.onMenuMouseDown,
                                            onMouseMove: e.onMenuMouseMove,
                                            id: e.getElementId("listbox")
                                        },
                                        isLoading: m,
                                        placement: o
                                    }), fe.createElement($i, {
                                        captureEnabled: f,
                                        onTopArrive: S,
                                        onBottomArrive: O,
                                        lockEnabled: w
                                    }, (function(t) {
                                        return fe.createElement(a, pe({}, u, {
                                            innerRef: function(n) {
                                                e.getMenuListRef(n), t(n)
                                            },
                                            isLoading: m,
                                            maxHeight: s,
                                            focusedOption: d
                                        }), M)
                                    })))
                                }));
                            return E || "fixed" === _ ? fe.createElement(o, pe({}, u, {
                                appendTo: E,
                                controlElement: this.controlRef,
                                menuPlacement: C,
                                menuPosition: _
                            }), P) : P
                        }
                    }, {
                        key: "renderFormField",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.delimiter,
                                i = t.isDisabled,
                                r = t.isMulti,
                                a = t.name,
                                o = t.required,
                                s = this.state.selectValue;
                            if (o && !this.hasValue() && !i) return fe.createElement(Zi, {
                                name: a,
                                onFocus: this.onValueInputFocus
                            });
                            if (a && !i) {
                                if (r) {
                                    if (n) {
                                        var l = s.map((function(t) {
                                            return e.getOptionValue(t)
                                        })).join(n);
                                        return fe.createElement("input", {
                                            name: a,
                                            type: "hidden",
                                            value: l
                                        })
                                    }
                                    var c = s.length > 0 ? s.map((function(t, n) {
                                        return fe.createElement("input", {
                                            key: "i-".concat(n),
                                            name: a,
                                            type: "hidden",
                                            value: e.getOptionValue(t)
                                        })
                                    })) : fe.createElement("input", {
                                        name: a,
                                        type: "hidden",
                                        value: ""
                                    });
                                    return fe.createElement("div", null, c)
                                }
                                var u = s[0] ? this.getOptionValue(s[0]) : "";
                                return fe.createElement("input", {
                                    name: a,
                                    type: "hidden",
                                    value: u
                                })
                            }
                        }
                    }, {
                        key: "renderLiveRegion",
                        value: function() {
                            var e = this.commonProps,
                                t = this.state,
                                n = t.ariaSelection,
                                i = t.focusedOption,
                                r = t.focusedValue,
                                a = t.isFocused,
                                o = t.selectValue,
                                s = this.getFocusableOptions();
                            return fe.createElement(Ci, pe({}, e, {
                                id: this.getElementId("live-region"),
                                ariaSelection: n,
                                focusedOption: i,
                                focusedValue: r,
                                isFocused: a,
                                selectValue: o,
                                focusableOptions: s
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.getComponents(),
                                t = e.Control,
                                n = e.IndicatorsContainer,
                                i = e.SelectContainer,
                                r = e.ValueContainer,
                                a = this.props,
                                o = a.className,
                                s = a.id,
                                l = a.isDisabled,
                                c = a.menuIsOpen,
                                u = this.state.isFocused,
                                d = this.commonProps = this.getCommonProps();
                            return fe.createElement(i, pe({}, d, {
                                className: o,
                                innerProps: {
                                    id: s,
                                    onKeyDown: this.onKeyDown
                                },
                                isDisabled: l,
                                isFocused: u
                            }), this.renderLiveRegion(), fe.createElement(t, pe({}, d, {
                                innerRef: this.getControlRef,
                                innerProps: {
                                    onMouseDown: this.onControlMouseDown,
                                    onTouchEnd: this.onControlTouchEnd
                                },
                                isDisabled: l,
                                isFocused: u,
                                menuIsOpen: c
                            }), fe.createElement(r, pe({}, d, {
                                isDisabled: l
                            }), this.renderPlaceholderOrValue(), this.renderInput()), fe.createElement(n, pe({}, d, {
                                isDisabled: l
                            }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField())
                        }
                    }], i = [{
                        key: "getDerivedStateFromProps",
                        value: function(e, t) {
                            var n = t.prevProps,
                                i = t.clearFocusValueOnUpdate,
                                r = t.inputIsHiddenAfterUpdate,
                                a = t.ariaSelection,
                                o = t.isFocused,
                                s = t.prevWasFocused,
                                l = e.options,
                                c = e.value,
                                u = e.menuIsOpen,
                                d = e.inputValue,
                                p = e.isMulti,
                                f = bn(c),
                                h = {};
                            if (n && (c !== n.value || l !== n.options || u !== n.menuIsOpen || d !== n.inputValue)) {
                                var m = u ? function(e, t) {
                                        return Ji(Ki(e, t))
                                    }(e, f) : [],
                                    g = i ? function(e, t) {
                                        var n = e.focusedValue,
                                            i = e.selectValue.indexOf(n);
                                        if (i > -1) {
                                            if (t.indexOf(n) > -1) return n;
                                            if (i < t.length) return t[i]
                                        }
                                        return null
                                    }(t, f) : null,
                                    v = function(e, t) {
                                        var n = e.focusedOption;
                                        return n && t.indexOf(n) > -1 ? n : t[0]
                                    }(t, m);
                                h = {
                                    selectValue: f,
                                    focusedOption: v,
                                    focusedValue: g,
                                    clearFocusValueOnUpdate: !1
                                }
                            }
                            var b = null != r && e !== n ? {
                                    inputIsHidden: r,
                                    inputIsHiddenAfterUpdate: void 0
                                } : {},
                                y = a,
                                C = o && s;
                            return o && !C && (y = {
                                value: Pn(p, f, f[0] || null),
                                options: f,
                                action: "initial-input-focus"
                            }, C = !s), "initial-input-focus" === (null == a ? void 0 : a.action) && (y = null), de(de(de({}, h), b), {}, {
                                prevProps: e,
                                ariaSelection: y,
                                prevWasFocused: C
                            })
                        }
                    }], n && ui(t.prototype, n), i && ui(t, i), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), a
                }(fe.Component);
            sr.defaultProps = Yi;
            var lr = (0, fe.forwardRef)((function(e, t) {
                    var n = function(e) {
                        var t = e.defaultInputValue,
                            n = void 0 === t ? "" : t,
                            i = e.defaultMenuIsOpen,
                            r = void 0 !== i && i,
                            a = e.defaultValue,
                            o = void 0 === a ? null : a,
                            s = e.inputValue,
                            l = e.menuIsOpen,
                            c = e.onChange,
                            u = e.onInputChange,
                            d = e.onMenuClose,
                            p = e.onMenuOpen,
                            f = e.value,
                            h = Ut(e, ci),
                            m = Bt((0, fe.useState)(void 0 !== s ? s : n), 2),
                            g = m[0],
                            v = m[1],
                            b = Bt((0, fe.useState)(void 0 !== l ? l : r), 2),
                            y = b[0],
                            C = b[1],
                            _ = Bt((0, fe.useState)(void 0 !== f ? f : o), 2),
                            E = _[0],
                            w = _[1],
                            x = (0, fe.useCallback)((function(e, t) {
                                "function" == typeof c && c(e, t), w(e)
                            }), [c]),
                            k = (0, fe.useCallback)((function(e, t) {
                                var n;
                                "function" == typeof u && (n = u(e, t)), v(void 0 !== n ? n : e)
                            }), [u]),
                            S = (0, fe.useCallback)((function() {
                                "function" == typeof p && p(), C(!0)
                            }), [p]),
                            O = (0, fe.useCallback)((function() {
                                "function" == typeof d && d(), C(!1)
                            }), [d]),
                            M = void 0 !== s ? s : g,
                            L = void 0 !== l ? l : y,
                            T = void 0 !== f ? f : E;
                        return de(de({}, h), {}, {
                            inputValue: M,
                            menuIsOpen: L,
                            onChange: x,
                            onInputChange: k,
                            onMenuClose: O,
                            onMenuOpen: S,
                            value: T
                        })
                    }(e);
                    return fe.createElement(sr, pe({
                        ref: t
                    }, n))
                })),
                cr = lr,
                ur = t => {
                    const {
                        filter: {
                            icon: n = null,
                            feature: i,
                            clickEvent: r = null,
                            classNames: a = [],
                            disabled: o = !1,
                            options: s = []
                        },
                        type: l = "button"
                    } = t, [c, u] = (0, e.useState)(null), d = () => null;
                    return "select" === l ? (() => {
                        const t = "#e2e8f0",
                            a = "#aaa",
                            l = "#50575e",
                            p = {
                                fontFamily: "Inter",
                                fontSize: "0.75rem",
                                fontWeight: "400",
                                lineHeight: "1rem"
                            },
                            f = {
                                container: e => ({ ...e,
                                    maxWidth: "100%"
                                }),
                                control: (e, n) => {
                                    let {
                                        isDisabled: i
                                    } = n;
                                    return { ...e,
                                        ...p,
                                        minHeight: "30px",
                                        height: "30px",
                                        cursor: i ? "progress" : "pointer",
                                        opacity: i ? "0.5" : "1",
                                        backgroundColor: "#fff",
                                        color: l,
                                        border: `1px solid ${t}`,
                                        borderRadius: "100px",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "6px",
                                        boxShadow: "none",
                                        "&:hover": {
                                            borderColor: a
                                        }
                                    }
                                },
                                valueContainer: e => ({ ...e,
                                    height: "30px",
                                    padding: "0 8px",
                                    display: "flex",
                                    gap: "6px",
                                    overflow: "hidden"
                                }),
                                input: e => ({ ...e,
                                    height: "30px",
                                    padding: 0,
                                    margin: 0
                                }),
                                placeholder: e => ({ ...e,
                                    ...p,
                                    color: l,
                                    margin: 0
                                }),
                                singleValue: e => ({ ...e,
                                    maxWidth: "100px"
                                }),
                                indicatorsContainer: e => ({ ...e,
                                    height: "30px"
                                }),
                                option: e => ({ ...e,
                                    ...p
                                })
                            };
                        return (0, e.createElement)("div", {
                            className: "zip-ai-sidebar__filters--select-div"
                        }, (0, e.createElement)(cr, {
                            placeholder: i,
                            options: s,
                            value: c,
                            onChange: e => (e => {
                                r(e), u(null)
                            })(e),
                            isDisabled: o,
                            isSearchable: !0,
                            isMulti: !1,
                            isOpen: !0,
                            menuPlacement: "top",
                            components: {
                                ValueContainer: t => {
                                    let {
                                        children: i,
                                        ...r
                                    } = t;
                                    return li.ValueContainer && (0, e.createElement)(li.ValueContainer, r, !!i && n, i)
                                },
                                IndicatorSeparator: d
                            },
                            styles: f,
                            classNamePrefix: "zip-ai-select"
                        }))
                    })() : (0, e.createElement)("button", {
                        className: P(["zip-ai-sidebar__filters--label", ...a]),
                        onClick: r,
                        disabled: o
                    }, n, i)
                },
                dr = t => {
                    const {
                        generationRef: n,
                        currentText: i,
                        setUserInput: r,
                        refreshFilters: a,
                        setRefreshFilters: o,
                        generating: s,
                        setGenerating: l,
                        setAiResponseError: c,
                        setValidForSaving: u,
                        autoRun: d,
                        setAutoRun: p
                    } = t, {
                        chatLog: f,
                        setChatLog: h
                    } = (0, e.useContext)(j), [m, g] = (0, e.useState)(!1), v = e => {
                        let {
                            textCommand: t,
                            oneClickCommand: n,
                            useSystemMessage: a
                        } = e;
                        const s = U(f, i);
                        G({
                            textContent: s,
                            textCommand: t,
                            setGenerating: l,
                            setText: r,
                            setRefreshFilters: o,
                            setAiResponseError: c,
                            chatLog: f,
                            setChatLog: h,
                            oneClickCommand: n,
                            setValidForSaving: u,
                            useSystemMessage: a
                        })
                    }, b = ((e, t) => ({
                        title: (0, V.__)("Draft with AI", "zip-ai"),
                        filters: [{
                            feature: (0, V.__)("Write an attractive heading about…", "zip-ai"),
                            clickEvent: () => {
                                Q((0, V.__)("Write an attractive heading about ", "zip-ai"), e, t)
                            }
                        }, {
                            feature: (0, V.__)("Write a sub-heading for…", "zip-ai"),
                            clickEvent: () => {
                                Q((0, V.__)("Write a sub-heading for ", "zip-ai"), e, t)
                            }
                        }]
                    }))(r, n), y = (e => ({
                        filters: [{
                            icon: C(J),
                            feature: (0, V.__)("Fix Grammar", "zip-ai"),
                            clickEvent: () => ne(e)
                        }, {
                            icon: M({
                                width: 14,
                                height: 14,
                                ...J
                            }),
                            feature: (0, V.__)("Make Longer", "zip-ai"),
                            clickEvent: () => ie(e)
                        }, {
                            icon: L(J),
                            feature: (0, V.__)("Make Shorter", "zip-ai"),
                            clickEvent: () => re(e)
                        }]
                    }))(v), _ = (e => ({
                        filters: [{
                            icon: S(J),
                            feature: (0, V.__)("Rephrase", "zip-ai"),
                            clickEvent: () => oe(e)
                        }, {
                            icon: z(J),
                            feature: (0, V.__)("Tone", "zip-ai"),
                            options: te,
                            clickEvent: t => ae(t, e)
                        }, {
                            icon: I(J),
                            feature: (0, V.__)("Translate", "zip-ai"),
                            options: ee,
                            clickEvent: t => ((e, t) => {
                                t({
                                    textCommand: `Translate to ${e.value}.`
                                        /* translators: %s: language name */
                                        ,
                                    oneClickCommand: (0, V.sprintf)((0, V.__)("Translate to %s.", "zip-ai"), e.label),
                                    useSystemMessage: !1
                                })
                            })(t, e)
                        }]
                    }))(v), E = zip_ai_react ? .zip_ai_assistant_options ? .last_used ? .changeTone || void 0, [w, x] = (0, e.useState)(i || f ? .length ? y : b), k = navigator ? .clipboard && !f ? .length && {
                        feature: (0, V.__)("Paste from clipboard", "zip-ai"),
                        clickEvent: async () => {
                            l(!0);
                            const e = await navigator.clipboard.readText().then((e => e)).catch((() => ""));
                            e && (f.push({
                                id: 0,
                                from: "content",
                                message: e
                            }), h([...f]), o(!0)), l(!1)
                        }
                    }, [O, T] = (0, e.useState)(i || f ? .length ? _ : []);
                    return (0, e.useEffect)((() => {
                        a && (o(!1), x(i || f ? .length ? y : b), T(i || f ? .length ? _ : []))
                    }), [a]), (0, e.useEffect)((() => {
                        if (d && "not_set" !== d && !m) {
                            switch (f.push({
                                id: f ? .length ? f[f.length - 1].id + 1 : 0,
                                from: "content",
                                message: i
                            }), h([...f]), d) {
                                case "fix_grammar":
                                    ne(v);
                                    break;
                                case "rephrase":
                                    oe(v);
                                    break;
                                case "make_shorter":
                                    re(v);
                                    break;
                                case "make_longer":
                                    ie(v);
                                    break;
                                case "change_tone":
                                    ae(E, v)
                            }
                            p("not_set"), g(!0)
                        }
                    }), [d]), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__filters"
                    }, (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__filters--section"
                    }, w.filters.map(((t, n) => (0, e.createElement)(ur, {
                        key: n,
                        filter: { ...t,
                            disabled: s
                        }
                    }))), k && (0, e.createElement)(ur, {
                        filter: { ...k,
                            disabled: s
                        }
                    })), O ? .filters ? .length > 0 && (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__filters--section"
                    }, O.filters.map(((t, n) => (0, e.createElement)(ur, {
                        type: "Rephrase" === t.feature ? "button" : "select",
                        key: n,
                        filter: { ...t,
                            disabled: s
                        }
                    })))))
                },
                pr = t => {
                    const {
                        setIsAuthorized: n
                    } = t, i = "disconnected" === zip_ai_react ? .current_status ? (0, V.__)("Reconnect and Continue Using AI Features", "zip-ai") : (0, V.__)("Get Started with 1000 Free Monthly Credits", "zip-ai"), r = "disconnected" === zip_ai_react ? .current_status ? (0, V.__)("Reconnecting…", "zip-ai") : (0, V.__)("Getting Started…", "zip-ai"), a = (zip_ai_react, (0, V.sprintf)(
                        // Translators: %1$s is the opening link tag, %2$s is the closing link tag.
                        (0, V.__)("Get started from %1$shere%2$s.", "zip-ai"), '<a class="zip-ai-sidebar__chat-window--placeholder-link" href="javascript:void(0);">', "</a>")), [o, c] = (0, e.useState)(i), [u, v] = (0, e.useState)((0, V.__)("The possibilities are endless!", "zip-ai"));
                    let b = zip_ai_react ? .collab_product_details;
                    "object" == typeof b && null !== b || (b = {
                        product_primary_color: "#007cba"
                    });
                    const {
                        product_name: y,
                        product_logo: C,
                        product_primary_color: _,
                        ai_assistant_learn_more_url: E
                    } = b;
                    return (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window"
                    }, (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder"
                    }, (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-logos"
                    }, C && (0, e.createElement)(e.Fragment, null, X(C), (0, e.createElement)("svg", {
                        width: "13",
                        height: "12",
                        viewBox: "0 0 13 12",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, (0, e.createElement)("path", {
                        d: "M12.3125 5.75C12.3125 6.24219 11.9023 6.65234 11.4375 6.65234H7.5V10.5898C7.5 11.0547 7.08984 11.4375 6.625 11.4375C6.13281 11.4375 5.75 11.0547 5.75 10.5898V6.65234H1.8125C1.32031 6.65234 0.9375 6.24219 0.9375 5.75C0.9375 5.28516 1.32031 4.90234 1.8125 4.90234H5.75V0.964844C5.75 0.472656 6.13281 0.0625 6.625 0.0625C7.08984 0.0625 7.5 0.472656 7.5 0.964844V4.90234H11.4375C11.9023 4.875 12.3125 5.28516 12.3125 5.75Z",
                        fill: "#555d66"
                    }))), function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return (0, e.createElement)("svg", {
                            width: s,
                            height: s,
                            viewBox: "0 0 30 30",
                            fill: f,
                            ...t
                        }, (0, e.createElement)("path", {
                            d: "M5 0C2.23858 0 0 2.23858 0 5V25C0 27.7614 2.23858 30 5 30H25C27.7614 30 30 27.7614 30 25V5C30 2.23858 27.7614 0 25 0H5ZM26.1432 10.7265C26.1459 10.7262 26.1487 10.7259 26.1514 10.7256L26.1349 10.7269C26.1377 10.7267 26.1405 10.7266 26.1432 10.7265ZM26.1432 10.7265C21.9125 11.174 19.2481 11.1414 18.4509 11.1007C18.3687 11.1071 18.3417 10.9723 18.4048 10.9331C20.7044 9.21451 21.5524 7.98503 21.7865 7.59037C21.8319 7.53551 21.776 7.45429 21.7102 7.45939C20.6151 7.42458 13.7358 7.29097 9.63266 7.95161C6.00268 8.5242 3.84948 11.2753 3.86235 14.851C3.87523 18.4266 6.09129 21.3863 9.29387 22.1304C17.4168 23.9986 22.9334 18.0944 23.8439 17.0311C23.9057 16.975 23.8485 16.8768 23.7649 16.8661L19.5924 16.8476C19.4937 16.8553 19.4654 16.7035 19.5615 16.6618C24.5276 14.3256 25.9654 11.5273 26.2442 10.8553C26.2709 10.7871 26.2208 10.7249 26.1432 10.7265Z",
                            ...g,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            ...n
                        }))
                    }({
                        width: 32,
                        height: 32,
                        color: "#ff580e"
                    })), (0, e.createElement)("h3", {
                        className: "zip-ai-sidebar__chat-window--placeholder-heading"
                    }, y ? (0, V.sprintf)( /* translators: %s: Plugin Name */
                        (0, V.__)("Build 10x Faster with %s AI", "zip-ai"), y) : (0, V.__)("Build 10x Faster with ZipWP", "zip-ai")), (0, e.createElement)("p", {
                        className: "zip-ai-sidebar__chat-window--placeholder-subheading"
                    }, y ? (0, V.sprintf)( /* translators: %s: Plugin Name */
                        (0, V.__)("%s offers AI features powered by ZipWP to help you build your website 10 times faster.", "zip-ai"), y) : (0, V.__)("ZipWP offers AI features to help you build your website 10 times faster.", "zip-ai")), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid"
                    }, (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item"
                    }, function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return (0, e.createElement)("svg", {
                            width: l,
                            height: l,
                            viewBox: "0 0 20 20",
                            fill: f,
                            ...t
                        }, (0, e.createElement)("g", {
                            clipPath: "url(#zip_ai_translucent_set_translate_clip)"
                        }, (0, e.createElement)("mask", {
                            id: "zip_ai_translucent_set_translate_mask",
                            style: {
                                maskType: "luminance"
                            },
                            maskUnits: "userSpaceOnUse",
                            x: 0,
                            y: 0,
                            width: 20,
                            height: 20
                        }, (0, e.createElement)("path", {
                            d: "M20 0H0V20H20V0Z",
                            fill: f
                        })), (0, e.createElement)("g", {
                            mask: "url(#zip_ai_translucent_set_translate_mask)"
                        }, (0, e.createElement)("path", {
                            d: "M17.0894 9.95182e-08H2.86902C2.10845 0.0011001 1.37934 0.303724 0.841531 0.841531C0.303724 1.37934 0.00109989 2.10845 0 2.86902V17.131C0.00109989 17.8915 0.303724 18.6207 0.841531 19.1584C1.37934 19.6963 2.10845 19.9989 2.86902 20H17.131C17.8916 19.9989 18.6207 19.6963 19.1584 19.1584C19.6962 18.6207 19.9989 17.8915 20 17.131V2.84407C19.9826 2.08372 19.6683 1.36038 19.1243 0.828843C18.5804 0.297306 17.8499 -0.00019865 17.0894 9.95182e-08Z",
                            ...g,
                            fill: h
                        })), (0, e.createElement)("path", {
                            d: "M15.2118 6.56641H9.524L10.3498 13.3547L8.85156 15.1588L9.096 15.5257H15.2118L15.6702 15.1588V6.99453L15.2118 6.56641Z",
                            ...g,
                            fillOpacity: .25
                        }), (0, e.createElement)("path", {
                            d: "M8.60323 10.2789C8.58423 10.1838 7.92954 6.91022 7.90873 6.80647C7.87635 6.64416 7.73379 6.52734 7.56829 6.52734H6.87379C6.70829 6.52734 6.56573 6.64416 6.53329 6.80647C6.51223 6.91197 5.85685 10.1888 5.83884 10.2788C5.80123 10.467 5.9232 10.6498 6.11124 10.6875C6.29929 10.7251 6.48223 10.6031 6.51985 10.415L6.74179 9.30528H7.70029L7.92223 10.4151C7.95985 10.6032 8.14292 10.7251 8.33085 10.6875C8.51885 10.6498 8.64085 10.467 8.60323 10.2789ZM6.88067 8.61078L7.15848 7.22184H7.2836L7.56142 8.61078H6.88067Z",
                            ...g
                        }), (0, e.createElement)("path", {
                            d: "M14.1681 9.30583H13.1264V8.95858C13.1264 8.76683 12.9709 8.61133 12.7792 8.61133C12.5874 8.61133 12.4319 8.76683 12.4319 8.95858V9.30583H11.3902C11.1984 9.30583 11.043 9.46127 11.043 9.65308C11.043 9.84483 11.1984 10.0003 11.3902 10.0003H11.4742C11.6721 10.6395 11.97 11.1301 12.2978 11.5233C12.031 11.7673 11.761 11.9675 11.5205 12.1598C11.3708 12.2796 11.3465 12.4981 11.4663 12.6479C11.5862 12.7977 11.8047 12.8218 11.9543 12.7021C12.1962 12.5086 12.486 12.2936 12.7792 12.0246C13.0725 12.2938 13.3628 12.5092 13.604 12.7021C13.7537 12.8219 13.9722 12.7976 14.092 12.6479C14.2118 12.4981 14.1875 12.2796 14.0378 12.1598C13.7979 11.9679 13.5276 11.7676 13.2605 11.5233C13.5883 11.1301 13.8862 10.6395 14.0841 10.0003H14.1681C14.3599 10.0003 14.5153 9.84483 14.5153 9.65308C14.5153 9.46127 14.3599 9.30583 14.1681 9.30583ZM12.7792 11.013C12.5575 10.7347 12.3581 10.4026 12.2078 9.99802H13.3505C13.2002 10.4026 13.0008 10.7347 12.7792 11.013Z",
                            ...g
                        }), (0, e.createElement)("path", {
                            d: "M14.885 6.18079H9.87539L9.72657 4.98671C9.66151 4.46651 9.21714 4.07422 8.69289 4.07422H5.11594C4.54153 4.07422 4.07422 4.54153 4.07422 5.11593V12.7784C4.07422 13.3527 4.54153 13.82 5.11594 13.82H8.04395L8.19089 15.0142C8.25576 15.5333 8.70014 15.9267 9.22458 15.9267H14.885C15.4593 15.9267 15.9266 15.4594 15.9266 14.8849V7.22254C15.9266 6.6481 15.4593 6.18079 14.885 6.18079ZM5.11594 13.1256C4.92447 13.1256 4.7687 12.9698 4.7687 12.7784V5.11593C4.7687 4.92447 4.92447 4.76869 5.11594 4.76869H8.69289C8.86764 4.76869 9.01576 4.89944 9.03745 5.07274C9.08776 5.47637 9.99132 12.7252 10.0413 13.1256H5.11594ZM8.8597 14.7634L8.74364 13.82H9.67526L8.8597 14.7634ZM15.2321 14.8849C15.2321 15.0764 15.0764 15.2322 14.885 15.2322H9.37251L10.6944 13.7031C10.7621 13.6267 10.7924 13.5254 10.7784 13.4247L9.96195 6.87529H14.885C15.0764 6.87529 15.2321 7.03104 15.2321 7.22254V14.8849Z",
                            ...g
                        })), (0, e.createElement)("defs", {}, (0, e.createElement)("clipPath", {
                            id: "zip_ai_translucent_set_translate_clip"
                        }, (0, e.createElement)("rect", {
                            width: 20,
                            height: 20,
                            fill: h
                        }))))
                    }({
                        width: 32,
                        height: 32,
                        color: _
                    }), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item-heading"
                    }, (0, V.__)("Translate Your Pages", "zip-ai"))), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item"
                    }, function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return (0, e.createElement)("svg", {
                            width: l,
                            height: l,
                            viewBox: "0 0 20 20",
                            fill: "none",
                            ...t
                        }, (0, e.createElement)("g", {
                            clipPath: "url(#zip_ai_translucent_set_pencil_clip)"
                        }, (0, e.createElement)("mask", {
                            id: "zip_ai_translucent_set_pencil_mask",
                            style: {
                                maskType: "luminance"
                            },
                            maskUnits: "userSpaceOnUse",
                            x: 0,
                            y: 0,
                            width: 20,
                            height: 20
                        }, (0, e.createElement)("path", {
                            d: "M20 0H0V20H20V0Z",
                            fill: h
                        })), (0, e.createElement)("g", {
                            mask: "url(#zip_ai_translucent_set_pencil_mask)"
                        }, (0, e.createElement)("path", {
                            d: "M17.0894 9.94679e-08H2.86902C2.10845 0.00109999 1.37934 0.303724 0.841531 0.841531C0.303724 1.37934 0.00109989 2.10845 0 2.86902V17.131C0.00109989 17.8916 0.303724 18.6207 0.841531 19.1584C1.37934 19.6962 2.10845 19.9989 2.86902 20H17.131C17.8916 19.9989 18.6207 19.6962 19.1584 19.1584C19.6962 18.6207 19.9989 17.8916 20 17.131V2.84407C19.9826 2.08372 19.6683 1.36038 19.1243 0.828844C18.5804 0.297305 17.8499 -0.0001986 17.0894 9.94679e-08Z",
                            fill: f
                        })), (0, e.createElement)("path", {
                            d: "M10.8966 6.22266L5.72334 11.3959C5.59051 11.5288 5.52409 11.5952 5.48042 11.6768C5.43676 11.7583 5.41833 11.8505 5.38149 12.0347L4.77038 15.0903C4.7288 15.2982 4.70801 15.4021 4.76714 15.4612C4.82627 15.5203 4.93021 15.4995 5.13809 15.458L8.19368 14.8468C8.37787 14.81 8.46999 14.7916 8.55156 14.7479C8.63318 14.7043 8.69962 14.6378 8.83243 14.505L14.0057 9.33172L10.8966 6.22266Z",
                            ...g,
                            fillOpacity: .25
                        }), (0, e.createElement)("path", {
                            d: "M8.34623 14.6906C8.22654 14.7584 8.09511 14.791 7.95842 14.825C7.94836 14.8275 7.93823 14.83 7.92811 14.8326L5.67534 15.3958L5.6602 15.3995C5.65418 15.401 5.64809 15.4026 5.64196 15.4041C5.54567 15.4282 5.43676 15.4555 5.3441 15.4646C5.24089 15.4747 5.05387 15.4738 4.90307 15.323C4.75227 15.1721 4.75134 14.9851 4.76144 14.882C4.7705 14.7893 4.79779 14.6803 4.82193 14.5841C4.82346 14.5779 4.82499 14.5718 4.82649 14.5658L5.39347 12.2979C5.396 12.2878 5.39851 12.2777 5.40101 12.2676C5.43499 12.1309 5.46765 11.9995 5.5354 11.8798C5.60315 11.7601 5.69905 11.6645 5.79882 11.565C5.80616 11.5577 5.81353 11.5503 5.82091 11.543L11.6877 5.67624L11.7044 5.65948C11.8984 5.46552 12.0697 5.29411 12.2265 5.17453C12.3964 5.04491 12.5923 4.94141 12.8367 4.94141C13.0811 4.94141 13.277 5.04491 13.4469 5.17453C13.6037 5.2941 13.775 5.46551 13.969 5.65947L13.9857 5.67624L14.5498 6.24029L14.5665 6.25708C14.7605 6.45096 14.9319 6.62239 15.0515 6.77908C15.1811 6.94896 15.2846 7.14496 15.2846 7.38933C15.2846 7.63377 15.1811 7.82971 15.0515 7.99958C14.9319 8.15633 14.7605 8.32771 14.5665 8.52164L14.5498 8.53839L8.68304 14.4051C8.67567 14.4125 8.66829 14.4199 8.66098 14.4272C8.56154 14.527 8.46586 14.6229 8.34623 14.6906ZM8.34623 14.6906L8.16148 14.3643",
                            ...m,
                            strokeWidth: d
                        }), (0, e.createElement)("path", {
                            d: "M10.8945 6.22266L14.0037 9.33173",
                            ...m,
                            strokeWidth: d
                        })), (0, e.createElement)("defs", {}, (0, e.createElement)("clipPath", {
                            id: "zip_ai_translucent_set_pencil_clip"
                        }, (0, e.createElement)("rect", {
                            width: 20,
                            height: 20,
                            fill: h
                        }))))
                    }({
                        width: 32,
                        height: 32,
                        color: _
                    }), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item-heading"
                    }, (0, V.__)("Write Content for Pages", "zip-ai"))), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item"
                    }, function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return (0, e.createElement)("svg", {
                            width: l,
                            height: l,
                            viewBox: "0 0 20 20",
                            fill: f,
                            ...t
                        }, (0, e.createElement)("g", {
                            clipPath: "url(#zip_ai_translucent_set_code_clip)"
                        }, (0, e.createElement)("mask", {
                            id: "zip_ai_translucent_set_code_mask",
                            style: {
                                maskType: "luminance"
                            },
                            maskUnits: "userSpaceOnUse",
                            x: 0,
                            y: 0,
                            width: 20,
                            height: 20
                        }, (0, e.createElement)("path", {
                            d: "M20 0H0V20H20V0Z",
                            fill: h
                        })), (0, e.createElement)("g", {
                            mask: "url(#zip_ai_translucent_set_code_mask)"
                        }, (0, e.createElement)("path", {
                            d: "M17.0894 9.94679e-08H2.86902C2.10845 0.00109999 1.37934 0.303724 0.841531 0.841531C0.303724 1.37934 0.00109989 2.10845 0 2.86902V17.131C0.00109989 17.8916 0.303724 18.6207 0.841531 19.1584C1.37934 19.6962 2.10845 19.9989 2.86902 20H17.131C17.8916 19.9989 18.6207 19.6962 19.1584 19.1584C19.6962 18.6207 19.9989 17.8916 20 17.131V2.84407C19.9826 2.08372 19.6683 1.36038 19.1243 0.828844C18.5804 0.297305 17.8499 -0.0001986 17.0894 9.94679e-08Z",
                            fill: f
                        })), (0, e.createElement)("path", {
                            d: "M7.10807 7.05957L3.66406 9.86632L7.10807 12.6731",
                            ...m,
                            strokeWidth: d
                        }), (0, e.createElement)("path", {
                            d: "M12.8945 12.6731L16.3385 9.86632L12.8945 7.05957",
                            ...m,
                            strokeWidth: d
                        }), (0, e.createElement)("path", {
                            d: "M11.07 5.93262L8.92969 14.0682",
                            ...m,
                            strokeWidth: d
                        })), (0, e.createElement)("defs", {}, (0, e.createElement)("clipPath", {
                            id: "zip_ai_translucent_set_code_clip"
                        }, (0, e.createElement)("rect", {
                            width: 20,
                            height: 20,
                            fill: h
                        }))))
                    }({
                        width: 32,
                        height: 32,
                        color: _
                    }), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item-heading"
                    }, (0, V.__)("Generate Custom Code", "zip-ai"))), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item"
                    }, function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return (0, e.createElement)("svg", {
                            width: l,
                            height: l,
                            viewBox: "0 0 20 20",
                            fill: f,
                            ...t
                        }, (0, e.createElement)("path", {
                            d: "M9.64707 4.57713L9.64707 4.57713L9.64911 4.57618C9.86656 4.47461 10.11 4.47461 10.3275 4.57618L10.3274 4.57618L10.3295 4.57713L15.4525 6.94209C15.4714 6.95246 15.4861 6.9665 15.4945 6.97869C15.4977 6.98334 15.4993 6.98653 15.4999 6.98825C15.4995 7.00094 15.4961 7.01005 15.4901 7.01903C15.4829 7.02978 15.4704 7.04221 15.4525 7.05205L10.3295 9.41701L10.3295 9.417L10.3275 9.41795C10.11 9.51953 9.86656 9.51953 9.64911 9.41795L9.64707 9.41701L4.52488 7.05241C4.51721 7.04796 4.51352 7.04351 4.51089 7.03912C4.50777 7.03393 4.5 7.01825 4.5 6.98534C4.5 6.97323 4.50311 6.96473 4.50697 6.95851C4.51044 6.9529 4.51595 6.94688 4.52487 6.94173L9.64707 4.57713Z",
                            ...m,
                            strokeWidth: d,
                            fill: p,
                            fillOpacity: .25
                        }), (0, e.createElement)("path", {
                            d: "M15.6719 9.49569C15.8594 9.58953 16 9.77721 16 9.98836C16 10.223 15.8594 10.4106 15.6719 10.5045L10.5391 12.874C10.1875 13.0382 9.78906 13.0382 9.4375 12.874L4.30469 10.5045C4.11719 10.4106 4 10.223 4 9.98836C4 9.77721 4.11719 9.58953 4.30469 9.49569L5.57031 8.90918L9.13281 10.5514C9.67188 10.8095 10.3047 10.8095 10.8438 10.5514L14.4062 8.90918L15.6719 9.49569Z",
                            ...g,
                            fillOpacity: .25
                        }), (0, e.createElement)("path", {
                            d: "M14.4062 11.9121L10.8438 13.5543C10.3047 13.8124 9.67188 13.8124 9.13281 13.5543L5.57031 11.9121L4.30469 12.4986C4.11719 12.5925 4 12.7801 4 12.9913C4 13.2259 4.11719 13.4136 4.30469 13.5074L9.4375 15.8769C9.78906 16.0411 10.1875 16.0411 10.5391 15.8769L15.6719 13.5074C15.8594 13.4136 16 13.2259 16 12.9913C16 12.7801 15.8594 12.5925 15.6719 12.4986L14.4062 11.9121Z",
                            ...g,
                            fillOpacity: .25
                        }))
                    }({
                        width: 32,
                        height: 32,
                        color: _
                    }), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item-heading"
                    }, (0, V.__)("Customize Templates", "zip-ai"))), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item"
                    }, function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return (0, e.createElement)("svg", {
                            width: l,
                            height: l,
                            viewBox: "0 0 20 20",
                            fill: f,
                            ...t
                        }, (0, e.createElement)("g", {
                            clipPath: "url(#zip_ai_translucent_set_description_clip)"
                        }, (0, e.createElement)("mask", {
                            id: "zip_ai_translucent_set_description_mask",
                            style: {
                                maskType: "luminance"
                            },
                            maskUnits: "userSpaceOnUse",
                            x: 0,
                            y: 0,
                            width: 20,
                            height: 20
                        }, (0, e.createElement)("path", {
                            d: "M20 0H0V20H20V0Z",
                            fill: h
                        })), (0, e.createElement)("g", {
                            mask: "url(#zip_ai_translucent_set_description_mask)"
                        }, (0, e.createElement)("path", {
                            d: "M17.0894 9.95182e-08H2.86902C2.10845 0.0011001 1.37934 0.303724 0.841531 0.841531C0.303724 1.37934 0.00109989 2.10845 0 2.86902V17.131C0.00109989 17.8915 0.303724 18.6207 0.841531 19.1584C1.37934 19.6963 2.10845 19.9989 2.86902 20H17.131C17.8916 19.9989 18.6207 19.6963 19.1584 19.1584C19.6962 18.6207 19.9989 17.8915 20 17.131V2.84407C19.9826 2.08372 19.6683 1.36038 19.1243 0.828843C18.5804 0.297306 17.8499 -0.00019865 17.0894 9.95182e-08Z",
                            fill: f
                        })), (0, e.createElement)("path", {
                            d: "M15.6076 12.8594H4.39062",
                            ...m,
                            strokeWidth: d
                        }), (0, e.createElement)("path", {
                            d: "M15.6076 14.8594H4.39062",
                            ...m,
                            strokeWidth: d
                        }), (0, e.createElement)("path", {
                            d: "M13.5742 16.8594H6.42578",
                            ...m,
                            strokeWidth: d
                        }), (0, e.createElement)("path", {
                            d: "M7.00476 4.83761H6.31051C6.28332 4.83761 6.26969 4.83761 6.25838 4.83551C6.20757 4.82605 6.16781 4.78629 6.15836 4.73548C6.15625 4.72414 6.15625 4.71054 6.15625 4.68334C6.15625 4.41135 6.15625 4.27535 6.17733 4.16202C6.27188 3.65383 6.66944 3.25624 7.17763 3.16171C7.29094 3.14063 7.42694 3.14062 7.69894 3.14062H12.25C12.5219 3.14062 12.6579 3.14063 12.7713 3.16171C13.2795 3.25624 13.6771 3.65383 13.7716 4.16202C13.7927 4.27535 13.7927 4.41135 13.7927 4.68334C13.7927 4.71054 13.7927 4.72414 13.7906 4.73548C13.7811 4.78629 13.7414 4.82605 13.6906 4.83551C13.6792 4.83761 13.6656 4.83761 13.6384 4.83761H12.9442V7.42855C12.9442 8.60711 12.9442 9.19636 12.5781 9.56249C12.2119 9.92855 11.6227 9.92855 10.4442 9.92855H9.50476C8.32626 9.92855 7.73694 9.92855 7.37088 9.56249C7.00476 9.19636 7.00476 8.60711 7.00476 7.42855V4.83761Z",
                            ...g,
                            fillOpacity: .25
                        }), (0, e.createElement)("path", {
                            d: "M7.00476 4.83761V7.42855C7.00476 8.60711 7.00476 9.19636 7.37088 9.56249C7.73694 9.92855 8.32626 9.92855 9.50476 9.92855H10.4442C11.6227 9.92855 12.2119 9.92855 12.5781 9.56249C12.9442 9.19636 12.9442 8.60711 12.9442 7.42855V4.83761M7.00476 4.83761H12.9442M7.00476 4.83761H6.31051C6.28332 4.83761 6.26969 4.83761 6.25838 4.83551C6.20757 4.82605 6.16781 4.78629 6.15836 4.73548C6.15625 4.72414 6.15625 4.71054 6.15625 4.68334C6.15625 4.41135 6.15625 4.27535 6.17733 4.16202C6.27188 3.65383 6.66944 3.25624 7.17763 3.16171C7.29094 3.14063 7.42694 3.14062 7.69894 3.14062H12.25C12.5219 3.14062 12.6579 3.14063 12.7713 3.16171C13.2795 3.25624 13.6771 3.65383 13.7716 4.16202C13.7927 4.27535 13.7927 4.41135 13.7927 4.68334C13.7927 4.71054 13.7927 4.72414 13.7906 4.73548C13.7811 4.78629 13.7414 4.82605 13.6906 4.83551C13.6792 4.83761 13.6656 4.83761 13.6384 4.83761H12.9442",
                            ...m,
                            strokeWidth: d
                        }), (0, e.createElement)("path", {
                            d: "M9.125 8.23145H10.822",
                            ...m,
                            strokeWidth: d
                        })), (0, e.createElement)("defs", {}, (0, e.createElement)("clipPath", {
                            id: "zip_ai_translucent_set_description_clip"
                        }, (0, e.createElement)("rect", {
                            width: 20,
                            height: 20,
                            fill: h
                        }))))
                    }({
                        width: 32,
                        height: 32,
                        color: _
                    }), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item-heading"
                    }, (0, V.__)("Craft Product Descriptions", "zip-ai"))), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item"
                    }, function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return (0, e.createElement)("svg", {
                            width: 20,
                            height: 20,
                            viewBox: "0 0 20 20",
                            fill: f,
                            ...t
                        }, (0, e.createElement)("g", {
                            clipPath: "url(#zip_ai_translucent_set_chat_bubble_clip)"
                        }, (0, e.createElement)("mask", {
                            id: "zip_ai_translucent_set_chat_bubble_mask",
                            style: {
                                maskType: "luminance"
                            },
                            maskUnits: "userSpaceOnUse",
                            x: 0,
                            y: 0,
                            width: 20,
                            height: 20
                        }, (0, e.createElement)("path", {
                            d: "M20 0H0V20H20V0Z",
                            fill: h
                        })), (0, e.createElement)("g", {
                            mask: "url(#zip_ai_translucent_set_chat_bubble_mask)"
                        }, (0, e.createElement)("path", {
                            d: "M17.0894 9.95178e-08H2.86902C2.10845 0.0011001 1.37934 0.303726 0.841531 0.841532C0.303724 1.37934 0.00109989 2.10845 0 2.86902V17.131C0.00109989 17.8916 0.303724 18.6207 0.841531 19.1584C1.37934 19.6963 2.10845 19.9989 2.86902 20H17.131C17.8916 19.9989 18.6207 19.6963 19.1584 19.1584C19.6962 18.6207 19.9989 17.8916 20 17.131V2.84408C19.9826 2.08373 19.6683 1.36038 19.1243 0.828844C18.5804 0.297307 17.8499 -0.00019865 17.0894 9.95178e-08Z",
                            fill: f
                        })), (0, e.createElement)("path", {
                            d: "M4.41797 12.358V6.41956L6.88217 4.40285L13.1931 4.21387L15.4984 6.41956V11.6964L14.5535 13.1324L12.5885 14.1053H10.8124L8.16704 15.6643L7.57623 15.2486L7.78911 14.1053H7.57623L6.01714 13.6527L4.41797 12.358Z",
                            ...g,
                            fillOpacity: .25
                        }), (0, e.createElement)("path", {
                            d: "M10.0022 8.344H7.5135C7.25581 8.344 7.04688 8.14281 7.04688 7.89463C7.04688 7.6465 7.25581 7.44531 7.5135 7.44531H10.0022C10.2599 7.44531 10.4689 7.6465 10.4689 7.89463C10.4689 8.14281 10.2599 8.344 10.0022 8.344Z",
                            ...g
                        }), (0, e.createElement)("path", {
                            d: "M7.04688 10.2912C7.04688 10.043 7.25581 9.8418 7.5135 9.8418H12.491C12.7487 9.8418 12.9576 10.043 12.9576 10.2912C12.9576 10.5394 12.7487 10.7405 12.491 10.7405H7.5135C7.25581 10.7405 7.04688 10.5394 7.04688 10.2912Z",
                            ...g
                        }), (0, e.createElement)("path", {
                            d: "M9.35681 3.84961H10.643C11.4964 3.84961 12.1655 3.84961 12.7033 3.89192C13.2509 3.935 13.7033 4.02419 14.1128 4.2251C14.786 4.55539 15.3333 5.08242 15.6763 5.73065C15.8849 6.12496 15.9775 6.56058 16.0223 7.08796C16.0662 7.60577 16.0662 8.25015 16.0662 9.07196V10.7236C16.0662 10.8773 16.0662 10.9709 16.0622 11.0524C15.9749 12.827 14.5006 14.2467 12.6578 14.3307C12.5731 14.3346 12.4662 14.3346 12.2888 14.3346H12.2711L12.2242 14.3346C11.6847 14.3379 11.1591 14.5001 10.7181 14.7995L10.6874 14.8204L9.06312 15.9377C8.12706 16.5815 6.897 15.6517 7.32419 14.6232C7.38162 14.485 7.27594 14.3346 7.12131 14.3346H6.74688C5.19315 14.3346 3.93359 13.1216 3.93359 11.6255V9.07196C3.93359 8.25015 3.93359 7.60577 3.97753 7.08796C4.02226 6.56058 4.11488 6.12496 4.32352 5.73065C4.66651 5.08242 5.21381 4.55539 5.88697 4.2251C6.29644 4.02419 6.74888 3.935 7.29644 3.89192C7.83425 3.84961 8.50338 3.84961 9.35681 3.84961ZM7.37244 4.78765C6.88256 4.82619 6.56669 4.90026 6.31069 5.02586C5.81312 5.26998 5.40859 5.65953 5.15507 6.13865C5.02465 6.38515 4.94772 6.68933 4.9077 7.16108C4.86723 7.63808 4.86687 8.24577 4.86687 9.09208V11.6255C4.86687 12.6253 5.70858 13.4358 6.74688 13.4358H7.12131C7.93619 13.4358 8.49337 14.2284 8.19075 14.957C8.10969 15.1521 8.34306 15.3285 8.52069 15.2064L10.1804 14.0648C10.7772 13.6599 11.4882 13.4404 12.2183 13.4359L12.2711 13.4358C12.4713 13.4358 12.5541 13.4358 12.6137 13.433C13.9757 13.3709 15.0654 12.3216 15.1299 11.01C15.1328 10.9524 15.1329 10.8818 15.1329 10.709V9.09208C15.1329 8.24577 15.1326 7.63808 15.0921 7.16108C15.052 6.68933 14.9751 6.38515 14.8447 6.13865C14.5912 5.65953 14.1866 5.26998 13.6891 5.02586C13.4331 4.90026 13.1172 4.82619 12.6273 4.78765C12.132 4.74867 11.5009 4.74832 10.6221 4.74832H9.37769C8.49888 4.74832 7.86781 4.74867 7.37244 4.78765Z",
                            ...g,
                            fillRule: "evenodd",
                            clipRule: "evenodd"
                        })), (0, e.createElement)("defs", {}, (0, e.createElement)("clipPath", {
                            id: "zip_ai_translucent_set_chat_bubble_clip"
                        }, (0, e.createElement)("rect", {
                            width: 20,
                            height: 20,
                            fill: h
                        }))))
                    }({
                        width: 32,
                        height: 32,
                        color: _
                    }), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item-heading"
                    }, (0, V.__)("Engage with Comments", "zip-ai")))), (0, e.createElement)("p", {
                        className: "zip-ai-sidebar__chat-window--placeholder-padded-content"
                    }, u), (0, e.createElement)("button", {
                        className: "zip-ai-sidebar__chat-window--placeholder-button",
                        onClick: e => {
                            e.preventDefault();
                            const t = e.target;
                            t.disabled = !0;
                            const o = (screen.width - 480) / 2,
                                s = (screen.height - 720) / 2,
                                l = window.open(zip_ai_react.auth_middleware, "ZipAiAuthorization", `width=480,height=720,top=${s},left=${o},scrollbars=0`),
                                u = new FormData;
                            u.append("action", "verify_zip_ai_authenticity"), u.append("nonce", zip_ai_react.ajax_nonce);
                            let d = 0;
                            c(r), v(X(a, {
                                replace: e => {
                                    const {
                                        name: t
                                    } = e;
                                    return "a" === t && (e.attribs.onClick = () => l.focus()), e
                                }
                            }));
                            const p = setInterval((() => {
                                (l.closed || 300 === d) && (l.closed || l.close(), clearInterval(p), c(i), v((0, V.__)("Something went wrong, please try again.", "zip-ai")), t.disabled = !1), fetch(zip_ai_react.ajax_url, {
                                    method: "POST",
                                    credentials: "same-origin",
                                    body: u
                                }).then((e => e.json())).then((e => {
                                    e ? .success && e ? .data ? .is_authorized && (l.close(), localStorage.setItem("zipAiAuthorizationStatus", !0), n(!0), c((0, V.__)("Get Ready!", "zip-ai")), v((0, V.__)("The possibilities are endless!", "zip-ai")), t.disabled = !1, clearInterval(p))
                                })), d++
                            }), 500)
                        }
                    }, o), E && (0, e.createElement)("a", {
                        className: "zip-ai-sidebar__chat-window--placeholder-subheading zip-ai-sidebar__chat-window--placeholder-link",
                        href: E,
                        target: "_blank",
                        rel: "noreferrer"
                    }, (0, V.__)("Learn more", "zip-ai"))))
                },
                fr = t => {
                    const {
                        generating: n,
                        updateContent: i,
                        closeModal: r,
                        aiResponseError: a,
                        setGenerating: o,
                        setAiResponseError: s,
                        setUserInput: l,
                        setRefreshFilters: c
                    } = t, {
                        chatLog: u,
                        setChatLog: d
                    } = (0, e.useContext)(j), [p, f] = (0, e.useState)(null), [h, m] = (0, e.useState)(!1), g = (0, e.useRef)(null);
                    return (0, e.useEffect)((() => {
                        g ? .current && (g.current.scrollTop = g.current ? .scrollHeight)
                    }), [g ? .current ? .lastChild, u]), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window",
                        ref: g
                    }, u ? .length || a ? (0, e.createElement)(e.Fragment, null, u ? .length > 0 && u.map(((t, n) => (0, e.createElement)(Z, {
                        key: n,
                        chatBubble: t,
                        updateContent: i,
                        closeModal: r,
                        setGenerating: o,
                        regeneratingId: p,
                        setRegeneratingId: f,
                        aiResponseError: a,
                        setAiResponseError: s,
                        setUserInput: l,
                        setRefreshFilters: c,
                        editCheck: h,
                        setEditCheck: m
                    }))), n && !p && B, a && (() => {
                        const t = {
                            type: "error",
                            icon: x(),
                            message: a,
                            action: {
                                execute: () => {
                                    const e = u.filter((e => "error" !== e.from));
                                    s(""), d(e)
                                },
                                label: (0, V.__)("Dismiss", "zip-ai")
                            }
                        };
                        return (0, e.createElement)(Z, {
                            chatBubble: t
                        })
                    })()) : (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder"
                    }, v({
                        width: 48,
                        height: 48,
                        color: "#007cba"
                    }), (0, e.createElement)("h3", {
                        className: "zip-ai-sidebar__chat-window--placeholder-heading"
                    }, (0, V.__)("Hi there! I'm here to assist you.", "zip-ai")), (0, e.createElement)("p", {
                        className: "zip-ai-sidebar__chat-window--placeholder-subheading"
                    }, (0, V.__)("Choose a prompt bellow or write on your own. Ask me about what you need.", "zip-ai"))))
                },
                hr = n => {
                    const {
                        chatLogId: i,
                        setIsOpen: r,
                        setAdminIsOpen: a,
                        isSidebar: o = !1,
                        updateContent: s,
                        currentText: l = "",
                        autoRun: c,
                        setAutoRun: u
                    } = n, d = (0, e.useRef)(null), p = (0, e.useRef)(null), f = (0, e.useRef)(null), h = JSON.parse(localStorage.getItem(`zipAiPreservedChatlog${i}`)) || [], m = JSON.parse(localStorage.getItem("zipAiAuthorizationStatus")) || zip_ai_react ? .is_authorized || !1, [g, v] = (0, e.useState)(h), [b, y] = (0, e.useState)(m), [C, _] = (0, e.useState)(""), [E, w] = (0, e.useState)(""), [x, k] = (0, e.useState)(!1), [S, O] = (0, e.useState)(!1), [M, L] = (0, e.useState)(h.length > 0);
                    (0, e.useEffect)((() => {
                        const e = g ? .length ? {
                            from: g[g.length - 1] ? .from,
                            message: g[g.length - 1] ? .message
                        } : null;
                        l && "content" !== e ? .from && l !== e ? .message && (g.push({
                            id: g ? .length ? g[g.length - 1].id + 1 : 0,
                            from: "content",
                            message: l
                        }), v([...g]))
                    }), []), (0, e.useEffect)((() => {
                        f ? .current && f.current ? .focus()
                    }), [f, S]);
                    const T = () => {
                        d ? .current.classList.add("close-it"), p ? .current.classList.add("close-it"), setTimeout((() => {
                            if ("content" === g[g.length - 1] ? .from && (g.pop(), v([...g])), M) {
                                const e = (e => e.map(((e, t) => ({ ...e,
                                    id: t
                                }))))(g.slice(-20));
                                localStorage.setItem(`zipAiPreservedChatlog${i}`, JSON.stringify(e)), v(e)
                            }
                            o && (0, t.dispatch)("core/edit-post").closeGeneralSidebar("zip-ai-page-settings-panel"), r(!1), a && a(!1)
                        }), 150)
                    };
                    return (0, e.createElement)(j.Provider, {
                        value: {
                            chatLog: g,
                            setChatLog: v
                        }
                    }, (0, e.createElement)("div", {
                        className: "zip-ai-sidebar-overlay",
                        ref: d,
                        onClick: e => {
                            if (e.target === d ? .current) return T()
                        },
                        onKeyDown: e => {
                            if ("Escape" === e.key) return T()
                        },
                        role: "button",
                        tabIndex: "0"
                    }, (0, e.createElement)("div", {
                        className: "zip-ai-sidebar",
                        ref: p
                    }, (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__header"
                    }, (0, e.createElement)("h2", {
                        className: "zip-ai-sidebar__header--title"
                    }, (0, V.__)("AI Assistant", "zip-ai")), (0, e.createElement)("button", {
                        className: "zip-ai-sidebar__header--close",
                        onClick: () => T()
                    }, (0, e.createElement)("span", {
                        className: "dashicons dashicons-arrow-right-alt"
                    }))), b ? (0, e.createElement)(e.Fragment, null, (0, e.createElement)(fr, {
                        generating: S,
                        updateContent: s,
                        closeModal: T,
                        aiResponseError: C,
                        setGenerating: O,
                        setAiResponseError: _,
                        setUserInput: w,
                        setRefreshFilters: k
                    }), (0, e.createElement)(dr, {
                        generationRef: f,
                        currentText: l,
                        userInput: E,
                        setUserInput: w,
                        refreshFilters: x,
                        setRefreshFilters: k,
                        generating: S,
                        setGenerating: O,
                        setAiResponseError: _,
                        setValidForSaving: L,
                        autoRun: c,
                        setAutoRun: u
                    }), (0, e.createElement)(K, {
                        chatLogId: i,
                        isAuthorized: b,
                        generationRef: f,
                        currentText: l,
                        userInput: E,
                        setUserInput: w,
                        setRefreshFilters: k,
                        generating: S,
                        setGenerating: O,
                        setAiResponseError: _,
                        validForSaving: M,
                        setValidForSaving: L
                    })) : (0, e.createElement)(pr, {
                        setIsAuthorized: y,
                        closeModal: T
                    }))))
                };
            const mr = document.querySelector("#zip-ai-sidebar"),
                gr = document.querySelector("#zip-ai-sidebar-admin-trigger"),
                vr = document.querySelector("#wp-admin-bar-zip-ai-assistant"),
                br = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4294967295;
                    return Math.floor(Math.random() * (t - e + 1)) + e
                }(),
                yr = {
                    fill: "#000"
                },
                Cr = t => {
                    const {
                        onChange: n,
                        value: i = {
                            text: ""
                        },
                        isRichText: o = !0,
                        isAdmin: s = !1,
                        setAdminIsOpen: l = null
                    } = t, [c, u] = (0, e.useState)(!1), [d, p] = (0, e.useState)(!1), [f, h] = (0, e.useState)("not_set"), m = (0, e.useRef)(null), [g, v] = (0, e.useState)(!1);
                    (0, e.useEffect)((() => {
                        o && !s || _()
                    }), []), (0, e.useEffect)((() => {
                        if (c && (document.body.style.overflow = "hidden"), o && !s && !c && d) {
                            const e = { ...i
                            };
                            n(e), p(!1)
                        }
                        const t = setTimeout((() => {
                            var t;
                            c && (m.current = null !== (t = m.current) && void 0 !== t ? t : (0, e.createRoot)(s ? gr : mr), m.current ? .render((0, e.createElement)(hr, {
                                chatLogId: br,
                                setIsOpen: u,
                                setAdminIsOpen: l,
                                isSidebar: !o && !s,
                                updateContent: o && !s ? y : null,
                                currentText: E(i.text),
                                autoRun: f,
                                setAutoRun: h
                            })))
                        }));
                        return () => {
                            document.body.style.overflow = "", clearTimeout(t);
                            const e = m.current;
                            m.current = void 0, setTimeout((() => {
                                e ? .unmount()
                            }))
                        }
                    }), [c]);
                    const y = e => {
                            let t = { ...i
                            };
                            t = (0, R.replace)(i, i.text, e), t.start = 0, t.end = 0, n(t)
                        },
                        _ = e => {
                            u(!0), "" !== E(i.text) && e && "open" !== e && "not_set" !== e && h(e), v(!1)
                        },
                        E = e => {
                            if (s && !o) return document.getSelection().toString().trim().replace(/\n$/, "") || "";
                            if (!o) return "";
                            if (["Your Attractive Heading", "Engage Your Visitors"].includes(e)) return "";
                            const t = { ...i
                            };
                            return 0 === t.start && t.end === t.text.length || d || (n(t), p(!0)), e
                        },
                        w = zip_ai_react ? .zip_ai_assistant_options ? .last_used ? .changeTone || void 0;
                    return o ? (0, e.createElement)(r.BlockControls, null, (0, e.createElement)(a.Toolbar, {
                        className: "zip-ai-toolbar",
                        label: "Zip AI"
                    }, (0, e.createElement)(a.ToolbarButton, {
                        onClick: () => v(!g),
                        icon: b(),
                        label: (0, V.__)("AI Assistant", "zip-ai")
                    }), g && (0, e.createElement)((() => (0, e.createElement)(e.Fragment, null, (0, e.createElement)(a.Popover, {
                        position: "bottom center",
                        focusOnMount: "container",
                        className: "zip-ai-popover"
                    }, (0, e.createElement)(a.MenuItem, {
                        iconPosition: "left",
                        icon: C(yr),
                        onClick: () => _("fix_grammar")
                    }, (0, V.__)("Fix Grammar", "zip-ai")), (0, e.createElement)(a.MenuItem, {
                        iconPosition: "left",
                        icon: S(yr),
                        onClick: () => _("rephrase")
                    }, (0, V.__)("Rephrase", "zip-ai")), (0, e.createElement)(a.MenuItem, {
                        iconPosition: "left",
                        icon: L(yr),
                        onClick: () => _("make_shorter")
                    }, (0, V.__)("Make Shorter", "zip-ai")), (0, e.createElement)(a.MenuItem, {
                        iconPosition: "left",
                        icon: M(yr),
                        onClick: () => _("make_longer")
                    }, (0, V.__)("Make Longer", "zip-ai")), void 0 !== w && (0, e.createElement)(a.MenuItem, {
                        iconPosition: "left",
                        icon: z(yr),
                        onClick: () => _("change_tone")
                    }, (0, V.sprintf)( /* translators: %s: lastUsedTone label */
                        (0, V.__)("Change Tone to %s", "zip-ai"), w.label)), (0, e.createElement)(a.MenuItem, {
                        iconPosition: "left",
                        icon: k(yr),
                        onClick: () => _("open")
                    }, (0, V.__)("Something Else", "zip-ai"))))), null))) : null
                },
                _r = () => {
                    const t = "widgets" !== zip_ai_react.is_widgets_page ? window ? .wp ? .editPost : null;
                    if (!t || !t ? .PluginSidebar || !t ? .PluginSidebarMoreMenuItem) return null;
                    const n = t.PluginSidebar,
                        i = t.PluginSidebarMoreMenuItem;
                    return "function" != typeof i || "function" != typeof n ? null : (0, e.createElement)(e.Fragment, null, (0, e.createElement)(i, {
                        target: "zip-ai-page-settings-panel",
                        icon: v()
                    }, (0, V.__)("AI Assistant", "zip-ai")), (0, e.createElement)(n, {
                        isPinnable: !0,
                        icon: v(),
                        name: "zip-ai-page-settings-panel",
                        title: (0, V.__)("AI Assistant", "zip-ai"),
                        className: "zip-ai-sidebar"
                    }, (0, e.createElement)(Cr, {
                        isRichText: !1
                    })))
                },
                Er = () => {
                    const [t, n] = (0, e.useState)(!1);
                    return (0, e.useEffect)((() => {
                        vr.addEventListener("click", (e => {
                            e.preventDefault(), n(!0)
                        }))
                    }), []), t ? (0, e.createElement)(Cr, {
                        isRichText: !1,
                        isAdmin: !0,
                        setAdminIsOpen: n
                    }) : null
                };
            if (zip_ai_react ? .is_ai_assistant_enabled) {
                zip_ai_react ? .is_customize_preview || (0, R.registerFormatType)("zipai/chat", {
                    tagName: "span",
                    className: "zip-ai-highlighted",
                    edit: Cr,
                    title: (0, V.__)("AI Assistant", "zip-ai")
                }), (0, t.select)("core/editor") && (0, i.registerPlugin)("zip-ai-page-level-settings", {
                    render: _r
                }), gr && vr && (0, e.createRoot)(gr).render((0, e.createElement)(Er, null));
                const n = () => {
                    localStorage.removeItem(`zipAiPreservedChatlog${br}`)
                };
                window.addEventListener("beforeunload", n)
            }
        }()
}();