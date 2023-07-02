(this["webpackJsonpinstall-demo"] = this["webpackJsonpinstall-demo"] || []).push([
    [0], {
        10: function(e, n, t) {},
        11: function(e, n, t) {},
        12: function(e, n, t) {
            "use strict";
            t.r(n);
            var o, i = t(0),
                c = t(1),
                r = t.n(c),
                a = t(3),
                s = t.n(a),
                l = (t(10), t(4));
            t(11);
            var d = function() {
                    var e = Object(c.useState)(!1),
                        n = Object(l.a)(e, 2),
                        t = n[0],
                        r = n[1];
                    return Object(c.useEffect)((function() {
                        window.addEventListener("beforeinstallprompt", (function(e) {
                            e.preventDefault(), o = e, r(!0)
                        })), window.addEventListener("appinstalled", (function() {
                            console.log("INSTALL: Success")
                        }))
                    }), []), Object(i.jsx)("div", {
                        className: "App",
                        children: Object(i.jsxs)("header", {
                            className: "App-header",
                            children: [Object(i.jsx)("h2", {
                                children: "Install Demo"
                            }), t && Object(i.jsx)("button", {
                                className: "install-button",
                                onClick: function(e) {
                                    r(!1), o.prompt(), o.userChoice.then((function(e) {
                                        "accepted" === e.outcome ? console.log("User accepted the install prompt") : console.log("User dismissed the install prompt")
                                    }))
                                },
                                children: "INSTALL ME"
                            }), Object(i.jsx)("p", {
                                children: Object(i.jsx)("a", {
                                    href: "https://github.com/adueck/pwa-install-demo",
                                    className: "App-link",
                                    children: "View source on GitHub"
                                })
                            })]
                        })
                    })
                },
                u = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

            function h(e, n) {
                navigator.serviceWorker.register(e).then((function(e) {
                    e.onupdatefound = function() {
                        var t = e.installing;
                        null != t && (t.onstatechange = function() {
                            "installed" === t.state && (navigator.serviceWorker.controller ? (console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."), n && n.onUpdate && n.onUpdate(e)) : (console.log("Content is cached for offline use."), n && n.onSuccess && n.onSuccess(e)))
                        })
                    }
                })).catch((function(e) {
                    console.error("Error during service worker registration:", e)
                }))
            }
            var f = function(e) {
                e && e instanceof Function && t.e(3).then(t.bind(null, 13)).then((function(n) {
                    var t = n.getCLS,
                        o = n.getFID,
                        i = n.getFCP,
                        c = n.getLCP,
                        r = n.getTTFB;
                    t(e), o(e), i(e), c(e), r(e)
                }))
            };
            s.a.render(Object(i.jsx)(r.a.StrictMode, {
                    children: Object(i.jsx)(d, {})
                }), document.getElementById("root")),
                function(e) {
                    if ("serviceWorker" in navigator) {
                        if (new URL("", window.location.href).origin !== window.location.origin) return;
                        window.addEventListener("load", (function() {
                            var n = "".concat("", "/service-worker.js");
                            u ? (! function(e, n) {
                                fetch(e, {
                                    headers: {
                                        "Service-Worker": "script"
                                    }
                                }).then((function(t) {
                                    var o = t.headers.get("content-type");
                                    404 === t.status || null != o && -1 === o.indexOf("javascript") ? navigator.serviceWorker.ready.then((function(e) {
                                        e.unregister().then((function() {
                                            window.location.reload()
                                        }))
                                    })) : h(e, n)
                                })).catch((function() {
                                    console.log("No internet connection found. App is running in offline mode.")
                                }))
                            }(n, e), navigator.serviceWorker.ready.then((function() {
                                console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")
                            }))) : h(n, e)
                        }))
                    }
                }(), f()
        }
    },
    [
        [12, 1, 2]
    ]
]);
//# sourceMappingURL=main.5162ca4d.chunk.js.map