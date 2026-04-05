import {
    t as e
} from "./rolldown-runtime.mGKE_U0z.mjs";
import {
    A as t,
    O as n,
    P as r,
    T as i,
    _ as a,
    b as o,
    c as s,
    j as c,
    l,
    s as u,
    u as d
} from "./react.BPnoSEhp.mjs";
import {
    C as f,
    H as p,
    U as m,
    W as h,
    a as g,
    r as _,
    t as v
} from "./motion.CagysqYP.mjs";
import {
    A as y,
    C as b,
    Ct as x,
    D as S,
    E as C,
    G as w,
    M as T,
    Q as E,
    R as D,
    S as O,
    St as ee,
    T as k,
    a as A,
    bt as j,
    d as M,
    ft as te,
    gt as N,
    ht as P,
    i as F,
    j as ne,
    l as re,
    lt as ie,
    m as I,
    n as L,
    o as R,
    ot as ae,
    pt as oe,
    rt as se,
    st as ce,
    v as z,
    y as B,
    yt as le,
    z as ue
} from "./framer.CxxLTuCb.mjs";
import {
    a as de,
    i as fe,
    n as pe,
    o as me,
    r as he,
    t as ge
} from "./uIGdgqB14.hNHb4dzf.mjs";
import {
    n as _e,
    t as ve
} from "./klu3wV4vw.DWeVqA-Y.mjs";
import {
    l as ye,
    u as be
} from "./zhRz_0Rq3.DAVBaZ3r.mjs";
import {
    n as xe,
    t as V
} from "./frly26fbY.umYM4CaP.mjs";
import {
    n as Se,
    t as Ce
} from "./Qx0K12vGA.B4i8ti_X.mjs";
import {
    i as we,
    t as H
} from "./LOAP8LaTY.BljoFbc_.mjs";
import {
    i as Te,
    n as Ee,
    r as De,
    t as Oe
} from "./wErrHXSPn.5C5e80xz.mjs";
import {
    i as ke,
    n as Ae,
    r as je,
    t as Me
} from "./zhRz_0Rq3.B1kLXPaH.mjs";
import {
    n as Ne,
    r as Pe
} from "./augiA20Il.Cl0aQmwD.mjs";

function Fe({
    text: e,
    type: t,
    font: i,
    color: a,
    htmlTag: o,
    opacity: {
        minOpacity: s,
        maxOpacity: c
    },
    style: u,
    appear: {
        start: d,
        end: f,
        transition: m
    }
}) {
    let h = n(null),
        {
            scrollYProgress: g
        } = p({
            target: h,
            offset: [`0 ${d}`, `0 ${f}`]
        }),
        _ = e.split(` `);
    return l(o, {
        ref: h,
        style: {
            ...u,
            textAlign: i.textAlign
        },
        children: _.map((e, n) => l(r, {
            children: l(t === `word` ? Le : Ie, {
                word: e,
                wordIndex: n,
                numberOfWords: _.length,
                scrollYProgress: g,
                minOpacity: s,
                maxOpacity: c,
                style: {
                    color: a,
                    fontWeight: `normal`,
                    ...i
                },
                transition: m
            })
        }, e + n))
    })
}
var Ie, Le, Re = e((() => {
    u(), w(), v(), i(), Ie = ({
        word: e,
        wordIndex: t,
        numberOfWords: n,
        scrollYProgress: r,
        minOpacity: i,
        maxOpacity: a,
        style: o,
        transition: s
    }) => {
        let c = t / n,
            u = c + 1 / n;
        return d(f.span, {
            style: o,
            children: [e.split(``).map((n, d) => {
                let p = c + d / e.length * (u - c),
                    g = c + (d + 1) / e.length * (u - c),
                    _ = h(m(r, s), [p, g], [i, a]);
                return l(f.span, {
                    style: {
                        opacity: _,
                        ...o
                    },
                    children: n
                }, `${t}-${d}`)
            }), t < n - 1 && ` `]
        }, e + t)
    }, Le = ({
        word: e,
        wordIndex: t,
        numberOfWords: n,
        scrollYProgress: r,
        minOpacity: i,
        maxOpacity: a,
        style: o,
        transition: s
    }) => {
        let c = t / n,
            l = c + 1 / n,
            u = h(m(r, s), [c, l], [i, a]);
        return d(f.span, {
            style: {
                opacity: u,
                ...o
            },
            children: [e, t < n - 1 && ` `]
        }, e + t)
    }, Fe.displayName = `Text Scroll Reveal`, S(Fe, {
        text: {
            title: `Text`,
            type: R.String,
            displayTextArea: !0,
            defaultValue: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        },
        htmlTag: {
            type: R.Enum,
            title: `Tag`,
            defaultValue: `h1`,
            options: [`h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `span`, `p`],
            optionTitles: [`h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `span`, `p`]
        },
        type: {
            title: `Type`,
            type: R.Enum,
            defaultValue: `word`,
            options: [`word`, `character`],
            optionTitles: [`Word`, `Character`]
        },
        font: {
            type: R.Font,
            title: `Font`,
            controls: `extended`
        },
        color: {
            title: `Color`,
            type: R.Color,
            defaultValue: `#000`
        },
        opacity: {
            title: `Opacity`,
            type: R.Object,
            controls: {
                minOpacity: {
                    title: `Min`,
                    type: R.Number,
                    defaultValue: .2,
                    min: 0,
                    max: 1,
                    step: .1,
                    displayStepper: !0
                },
                maxOpacity: {
                    title: `Max`,
                    type: R.Number,
                    defaultValue: 1,
                    min: 0,
                    max: 1,
                    step: .1,
                    displayStepper: !0
                }
            }
        },
        appear: {
            title: `Scroll Trigger`,
            type: R.Object,
            controls: {
                start: {
                    title: `Start`,
                    type: R.Enum,
                    defaultValue: `1`,
                    options: [`1`, `0.75`, `0.5`],
                    optionTitles: [`Bottom of Screen`, `3/4 Down Screen`, `Middle of Screen`]
                },
                end: {
                    title: `End`,
                    type: R.Enum,
                    defaultValue: `0`,
                    options: [`0`, `0.25`, `0.5`],
                    optionTitles: [`Top of Screen`, `1/4 Down Screen`, `Middle of Screen`]
                },
                transition: {
                    title: `Transition`,
                    type: R.Transition
                }
            },
            description: `Full tutorial on [NewOffset](https://newoffset.com)`
        }
    })
}));

function ze(e, ...t) {
    let n = {};
    return t?.forEach(t => t && Object.assign(n, e[t])), n
}
var Be, Ve, He, Ue, We, Ge, Ke, qe, Je, Ye, Xe, Ze = e((() => {
        u(), w(), v(), i(), Be = [`oiyEdWEcR`, `jMhVUkK17`, `HD_4aNnSZ`], Ve = `framer-0LIrz`, He = {
            HD_4aNnSZ: `framer-v-1xgrlm9`,
            jMhVUkK17: `framer-v-1rmae5x`,
            oiyEdWEcR: `framer-v-b6yenn`
        }, Ue = {
            bounce: .2,
            delay: 0,
            duration: .4,
            type: `spring`
        }, We = ({
            value: e,
            children: n
        }) => {
            let r = t(g),
                i = e ?? r.transition,
                a = c(() => ({
                    ...r,
                    transition: i
                }), [JSON.stringify(i)]);
            return l(g.Provider, {
                value: a,
                children: n
            })
        }, Ge = {
            L: `oiyEdWEcR`,
            M: `jMhVUkK17`,
            S: `HD_4aNnSZ`
        }, Ke = f.create(r), qe = ({
            height: e,
            id: t,
            title1: n,
            title2: r,
            title3: i,
            title4: a,
            width: o,
            ...s
        }) => ({
            ...s,
            F9s7G6Ce8: r ?? s.F9s7G6Ce8 ?? `Branding`,
            rpGEGECg1: a ?? s.rpGEGECg1 ?? `Web Design`,
            Ssp7h9ebx: n ?? s.Ssp7h9ebx ?? `Art Direction`,
            variant: Ge[s.variant] ?? s.variant ?? `oiyEdWEcR`,
            xxFoBYQ6z: i ?? s.xxFoBYQ6z ?? `Strategy`
        }), Je = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), Ye = j(a(function(e, t) {
            let i = n(null),
                a = t ?? i,
                s = o(),
                {
                    activeLocale: c,
                    setLocale: u
                } = te();
            se();
            let {
                style: p,
                className: m,
                layoutId: h,
                variant: g,
                Ssp7h9ebx: v,
                F9s7G6Ce8: x,
                xxFoBYQ6z: S,
                rpGEGECg1: C,
                ...w
            } = qe(e), {
                baseVariant: T,
                classNames: E,
                clearLoadingGesture: D,
                gestureHandlers: O,
                gestureVariant: ee,
                isLoading: k,
                setGestureState: A,
                setVariant: j,
                variants: M
            } = le({
                cycleOrder: Be,
                defaultVariant: `oiyEdWEcR`,
                ref: a,
                variant: g,
                variantClassNames: He
            }), N = Je(e, M), P = y(Ve);
            return l(_, {
                id: h ?? s,
                children: l(Ke, {
                    animate: M,
                    initial: !1,
                    children: l(We, {
                        value: Ue,
                        children: d(f.div, {
                            ...w,
                            ...O,
                            className: y(P, `framer-b6yenn`, m, E),
                            "data-framer-name": `L`,
                            layoutDependency: N,
                            layoutId: `oiyEdWEcR`,
                            ref: a,
                            style: {
                                backgroundColor: `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                ...p
                            },
                            ...ze({
                                HD_4aNnSZ: {
                                    "data-framer-name": `S`
                                },
                                jMhVUkK17: {
                                    "data-framer-name": `M`
                                }
                            }, T, ee),
                            children: [l(b, {
                                __fromCanvasComponent: !0,
                                children: l(r, {
                                    children: l(f.p, {
                                        dir: `auto`,
                                        style: {
                                            "--font-selector": `RlI7SW50ZXJEaXNwbGF5LVNlbWlCb2xk`,
                                            "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                            "--framer-font-weight": `600`,
                                            "--framer-letter-spacing": `0px`,
                                            "--framer-line-height": `24px`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)))`
                                        },
                                        children: `Art Direction`
                                    })
                                }),
                                className: `framer-umm8a8`,
                                "data-framer-name": `Text 1`,
                                fonts: [`FR;InterDisplay-SemiBold`],
                                layoutDependency: N,
                                layoutId: `FK2sjP7lL`,
                                style: {
                                    "--extracted-r6o4lv": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                    "--framer-paragraph-spacing": `0px`
                                },
                                text: v,
                                verticalAlignment: `top`,
                                withExternalLayout: !0
                            }), l(b, {
                                __fromCanvasComponent: !0,
                                children: l(r, {
                                    children: l(f.p, {
                                        dir: `auto`,
                                        style: {
                                            "--font-selector": `RlI7SW50ZXJEaXNwbGF5LVNlbWlCb2xk`,
                                            "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                            "--framer-font-weight": `600`,
                                            "--framer-letter-spacing": `0px`,
                                            "--framer-line-height": `24px`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)))`
                                        },
                                        children: `Branding`
                                    })
                                }),
                                className: `framer-sd4ivc`,
                                "data-framer-name": `Text 2`,
                                fonts: [`FR;InterDisplay-SemiBold`],
                                layoutDependency: N,
                                layoutId: `I3w7YdzH6`,
                                style: {
                                    "--extracted-r6o4lv": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                    "--framer-paragraph-spacing": `0px`
                                },
                                text: x,
                                verticalAlignment: `top`,
                                withExternalLayout: !0
                            }), l(b, {
                                __fromCanvasComponent: !0,
                                children: l(r, {
                                    children: l(f.p, {
                                        dir: `auto`,
                                        style: {
                                            "--font-selector": `RlI7SW50ZXJEaXNwbGF5LVNlbWlCb2xk`,
                                            "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                            "--framer-font-weight": `600`,
                                            "--framer-letter-spacing": `0px`,
                                            "--framer-line-height": `24px`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)))`
                                        },
                                        children: `Strategy`
                                    })
                                }),
                                className: `framer-qboosw`,
                                "data-framer-name": `Text 3`,
                                fonts: [`FR;InterDisplay-SemiBold`],
                                layoutDependency: N,
                                layoutId: `dW6_lZtC4`,
                                style: {
                                    "--extracted-r6o4lv": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                    "--framer-paragraph-spacing": `0px`
                                },
                                text: S,
                                verticalAlignment: `top`,
                                withExternalLayout: !0
                            }), l(b, {
                                __fromCanvasComponent: !0,
                                children: l(r, {
                                    children: l(f.p, {
                                        dir: `auto`,
                                        style: {
                                            "--font-selector": `RlI7SW50ZXJEaXNwbGF5LVNlbWlCb2xk`,
                                            "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                            "--framer-font-weight": `600`,
                                            "--framer-letter-spacing": `0px`,
                                            "--framer-line-height": `24px`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)))`
                                        },
                                        children: `Web Design`
                                    })
                                }),
                                className: `framer-13ybair`,
                                "data-framer-name": `Text 4`,
                                fonts: [`FR;InterDisplay-SemiBold`],
                                layoutDependency: N,
                                layoutId: `LLP8e1Oku`,
                                style: {
                                    "--extracted-r6o4lv": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                    "--framer-paragraph-spacing": `0px`
                                },
                                text: C,
                                verticalAlignment: `top`,
                                withExternalLayout: !0
                            })]
                        })
                    })
                })
            })
        }), [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-0LIrz.framer-ffi40c, .framer-0LIrz .framer-ffi40c { display: block; }`, `.framer-0LIrz.framer-b6yenn { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 300px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1440px; }`, `.framer-0LIrz .framer-umm8a8, .framer-0LIrz .framer-sd4ivc, .framer-0LIrz .framer-qboosw, .framer-0LIrz .framer-13ybair { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`], `framer-0LIrz`), Xe = Ye, Ye.displayName = `Banner`, Ye.defaultProps = {
            height: 24,
            width: 1440
        }, S(Ye, {
            variant: {
                options: [`oiyEdWEcR`, `jMhVUkK17`, `HD_4aNnSZ`],
                optionTitles: [`L`, `M`, `S`],
                title: `Variant`,
                type: R.Enum
            },
            Ssp7h9ebx: {
                defaultValue: `Art Direction`,
                displayTextArea: !1,
                title: `Title 1`,
                type: R.String
            },
            onSsp7h9ebxChange: {
                changes: `Ssp7h9ebx`,
                type: R.ChangeHandler
            },
            F9s7G6Ce8: {
                defaultValue: `Branding`,
                displayTextArea: !1,
                title: `Title 2`,
                type: R.String
            },
            onF9s7G6Ce8Change: {
                changes: `F9s7G6Ce8`,
                type: R.ChangeHandler
            },
            xxFoBYQ6z: {
                defaultValue: `Strategy`,
                displayTextArea: !1,
                title: `Title 3`,
                type: R.String
            },
            onxxFoBYQ6zChange: {
                changes: `xxFoBYQ6z`,
                type: R.ChangeHandler
            },
            rpGEGECg1: {
                defaultValue: `Web Design`,
                displayTextArea: !1,
                title: `Title 4`,
                type: R.String
            },
            onrpGEGECg1Change: {
                changes: `rpGEGECg1`,
                type: R.ChangeHandler
            }
        }), C(Ye, [{
            explicitInter: !0,
            fonts: [{
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/gazZKZuUEtvr9ULhdA4SprP0AZ0.woff2`,
                weight: `600`
            }, {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/pe8RoujoPxuTZhqoNzYqHX2MXA.woff2`,
                weight: `600`
            }, {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/teGhWnhH3bCqefKGsIsqFy3hK8.woff2`,
                weight: `600`
            }, {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/qQHxgTnEk6Czu1yW4xS82HQWFOk.woff2`,
                weight: `600`
            }, {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/MJ3N6lfN4iP5Um8rJGqLYl03tE.woff2`,
                weight: `600`
            }, {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/PfdOpgzFf7N2Uye9JX7xRKYTgSc.woff2`,
                weight: `600`
            }, {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/0SEEmmWc3vovhaai4RlRQSWRrz0.woff2`,
                weight: `600`
            }]
        }], {
            supportsExplicitInterCodegen: !0
        })
    })),
    Qe, $e, et, tt = e((() => {
        w(), ne.loadFonts([`FR;InterDisplay-Medium`, `FR;InterDisplay-Bold`, `FR;InterDisplay-BoldItalic`, `FR;InterDisplay-MediumItalic`]), Qe = [{
            explicitInter: !0,
            fonts: [{
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/ePuN3mCjzajIHnyCdvKBFiZkyY0.woff2`,
                weight: `500`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/V3j1L0o5vPFKe26Sw4HcpXCfHo.woff2`,
                weight: `500`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/F3kdpd2N0cToWV5huaZjjgM.woff2`,
                weight: `500`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/0iDmxkizU9goZoclqIqsV5rvETU.woff2`,
                weight: `500`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/r0mv3NegmA0akcQsNFotG32Las.woff2`,
                weight: `500`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/8yoV9pUxquX7VD7ZXlNYKQmkmk.woff2`,
                weight: `500`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/Ii21jnSJkulBKsHHXKlapi7fv9w.woff2`,
                weight: `500`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/I11LrmuBDQZweplJ62KkVsklU5Y.woff2`,
                weight: `700`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/UjFZPDy3qGuDktQM4q9CxhKfIa8.woff2`,
                weight: `700`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/8exwVHJy2DhJ4N5prYlVMrEKmQ.woff2`,
                weight: `700`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/UTeedEK21hO5jDxEUldzdScUqpg.woff2`,
                weight: `700`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/Ig8B8nzy11hzIWEIYnkg91sofjo.woff2`,
                weight: `700`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/n9CXKI3tsmCPeC6MCT9NziShSuQ.woff2`,
                weight: `700`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/qctQFoJqJ9aIbRSIp0AhCQpFxn8.woff2`,
                weight: `700`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `italic`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/fXvVh2JeZlehNcEhKHpHH0frSl0.woff2`,
                weight: `700`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `italic`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/7pScaNeb6M7n2HF2jKemDqzCIr4.woff2`,
                weight: `700`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `italic`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/qS4UjQYyATcVV9rODk0Zx9KhkY8.woff2`,
                weight: `700`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `italic`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/VfD2n20yM7v0hrUEBHEyafsmMBY.woff2`,
                weight: `700`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `italic`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/4oIO9fB59bn3cKFWz7piCj28z9s.woff2`,
                weight: `700`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `italic`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/TBccIZR9kIpkRce5i9ATfPp7a4.woff2`,
                weight: `700`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `italic`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/F5Lmfd3fCAu7TwiYbI4DLWw4ks.woff2`,
                weight: `700`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `italic`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/A5P4nkYCJlLQxGxaS1lzG8PNSc.woff2`,
                weight: `500`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `italic`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/vuPfygr1n1zYxscvWgGI8hRf3LE.woff2`,
                weight: `500`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `italic`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/jplzYzqFHXreyADwk9yrkQlWQ.woff2`,
                weight: `500`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `italic`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/sSIKP2TfVPvfK7YVENPE5H87A.woff2`,
                weight: `500`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `italic`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/gawbeo7iEJSRZ4kcrh6YRrU8o.woff2`,
                weight: `500`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `italic`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/xSzma7KIWAdctStaX171ey3lams.woff2`,
                weight: `500`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `italic`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/8E92vrr3j1gDqzepmeSbD2u0JxA.woff2`,
                weight: `500`
            }]
        }], $e = [`.framer-GUdCm .framer-styles-preset-14w8e6o:not(.rich-text-wrapper), .framer-GUdCm .framer-styles-preset-14w8e6o.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 19px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0px; --framer-line-height: 25.2px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`], et = `framer-GUdCm`
    })),
    nt, rt, it, at = e((() => {
        w(), ne.loadFonts([`FR;InterDisplay-SemiBold`, `FR;InterDisplay-Bold`, `FR;InterDisplay-BoldItalic`, `FR;InterDisplay-SemiBoldItalic`]), nt = [{
            explicitInter: !0,
            fonts: [{
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/gazZKZuUEtvr9ULhdA4SprP0AZ0.woff2`,
                weight: `600`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/pe8RoujoPxuTZhqoNzYqHX2MXA.woff2`,
                weight: `600`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/teGhWnhH3bCqefKGsIsqFy3hK8.woff2`,
                weight: `600`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/qQHxgTnEk6Czu1yW4xS82HQWFOk.woff2`,
                weight: `600`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/MJ3N6lfN4iP5Um8rJGqLYl03tE.woff2`,
                weight: `600`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/assets/dHHUz45rhM2KCQpj9zttNVlibk.woff2`,
                weight: `600`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/0SEEmmWc3vovhaai4RlRQSWRrz0.woff2`,
                weight: `600`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/I11LrmuBDQZweplJ62KkVsklU5Y.woff2`,
                weight: `700`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/UjFZPDy3qGuDktQM4q9CxhKfIa8.woff2`,
                weight: `700`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/8exwVHJy2DhJ4N5prYlVMrEKmQ.woff2`,
                weight: `700`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/UTeedEK21hO5jDxEUldzdScUqpg.woff2`,
                weight: `700`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/Ig8B8nzy11hzIWEIYnkg91sofjo.woff2`,
                weight: `700`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/n9CXKI3tsmCPeC6MCT9NziShSuQ.woff2`,
                weight: `700`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/qctQFoJqJ9aIbRSIp0AhCQpFxn8.woff2`,
                weight: `700`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `italic`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/fXvVh2JeZlehNcEhKHpHH0frSl0.woff2`,
                weight: `700`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `italic`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/7pScaNeb6M7n2HF2jKemDqzCIr4.woff2`,
                weight: `700`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `italic`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/qS4UjQYyATcVV9rODk0Zx9KhkY8.woff2`,
                weight: `700`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `italic`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/VfD2n20yM7v0hrUEBHEyafsmMBY.woff2`,
                weight: `700`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `italic`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/4oIO9fB59bn3cKFWz7piCj28z9s.woff2`,
                weight: `700`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `italic`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/TBccIZR9kIpkRce5i9ATfPp7a4.woff2`,
                weight: `700`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `italic`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/F5Lmfd3fCAu7TwiYbI4DLWw4ks.woff2`,
                weight: `700`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `italic`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/KKQXBq6BF0xEmVbrTnWxh3Yw.woff2`,
                weight: `600`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `italic`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/ugFYeIKZEJXDxI6Kh0YQUX6EK9I.woff2`,
                weight: `600`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `italic`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/DgDysCLt0HkIpWMu2uN5tivgQ.woff2`,
                weight: `600`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `italic`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/2yEyxokC6poTg3Uc5E2ogfVi6WE.woff2`,
                weight: `600`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `italic`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/wmHLUqO4QxLaADUScavxvknnBQ.woff2`,
                weight: `600`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `italic`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/08bCJfmvizuFi36VeazboYh54CQ.woff2`,
                weight: `600`
            }, {
                family: `Inter Display`,
                source: `framer`,
                style: `italic`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/DuYGXsyDXsSnxlZ8qzmcA4x3JiI.woff2`,
                weight: `600`
            }]
        }], rt = [`.framer-8YmoS .framer-styles-preset-8vm16z:not(.rich-text-wrapper), .framer-8YmoS .framer-styles-preset-8vm16z.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: 0.1px; --framer-line-height: 17px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`], it = `framer-8YmoS`
    }));

function ot(e, ...t) {
    let n = {};
    return t?.forEach(t => t && Object.assign(n, e[t])), n
}
var st, ct, lt, ut, dt, ft, pt, mt, ht, gt, U, _t = e((() => {
    u(), w(), v(), i(), tt(), at(), st = [`RDKzUs_Fz`, `cSNZa7lRK`, `LVXTmyQFQ`, `MkgJQUnPV`], ct = `framer-EhULR`, lt = {
        cSNZa7lRK: `framer-v-szcp6t`,
        LVXTmyQFQ: `framer-v-x3qdnr`,
        MkgJQUnPV: `framer-v-tnd4c0`,
        RDKzUs_Fz: `framer-v-g2q9aj`
    }, ut = {
        bounce: .2,
        delay: 0,
        duration: .4,
        type: `spring`
    }, dt = ({
        value: e,
        children: n
    }) => {
        let r = t(g),
            i = e ?? r.transition,
            a = c(() => ({
                ...r,
                transition: i
            }), [JSON.stringify(i)]);
        return l(g.Provider, {
            value: a,
            children: n
        })
    }, ft = f.create(r), pt = {
        "S Primary": `LVXTmyQFQ`,
        "S Secondary": `MkgJQUnPV`,
        "XL Primary": `RDKzUs_Fz`,
        "XL Secondary": `cSNZa7lRK`
    }, mt = ({
        bodyText: e,
        height: t,
        id: n,
        rollNo: r,
        service: i,
        width: a,
        ...o
    }) => ({
        ...o,
        bGkBZIVtS: e ?? o.bGkBZIVtS ?? `We guide every visual decision from start to finish, ensuring clarity, emotion, and impact across every touchpoint.`,
        mm2TadyHO: r ?? o.mm2TadyHO ?? `01`,
        Pbe6da3x3: i ?? o.Pbe6da3x3 ?? `Art Direction`,
        variant: pt[o.variant] ?? o.variant ?? `RDKzUs_Fz`
    }), ht = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), gt = j(a(function(e, t) {
        let i = n(null),
            a = t ?? i,
            s = o(),
            {
                activeLocale: c,
                setLocale: u
            } = te();
        se();
        let {
            style: p,
            className: m,
            layoutId: h,
            variant: g,
            mm2TadyHO: v,
            Pbe6da3x3: x,
            bGkBZIVtS: S,
            ...C
        } = mt(e), {
            baseVariant: w,
            classNames: T,
            clearLoadingGesture: E,
            gestureHandlers: D,
            gestureVariant: O,
            isLoading: ee,
            setGestureState: k,
            setVariant: A,
            variants: j
        } = le({
            cycleOrder: st,
            defaultVariant: `RDKzUs_Fz`,
            ref: a,
            variant: g,
            variantClassNames: lt
        }), M = ht(e, j), N = y(ct, it, et), P = () => ![`LVXTmyQFQ`, `MkgJQUnPV`].includes(w), F = () => !![`cSNZa7lRK`, `MkgJQUnPV`].includes(w);
        return l(_, {
            id: h ?? s,
            children: l(ft, {
                animate: j,
                initial: !1,
                children: l(dt, {
                    value: ut,
                    children: d(f.div, {
                        ...C,
                        ...D,
                        className: y(N, `framer-g2q9aj`, m, T),
                        "data-framer-name": `XL Primary`,
                        layoutDependency: M,
                        layoutId: `RDKzUs_Fz`,
                        ref: a,
                        style: {
                            ...p
                        },
                        ...ot({
                            cSNZa7lRK: {
                                "data-framer-name": `XL Secondary`
                            },
                            LVXTmyQFQ: {
                                "data-framer-name": `S Primary`
                            },
                            MkgJQUnPV: {
                                "data-framer-name": `S Secondary`
                            }
                        }, w, O),
                        children: [l(f.div, {
                            className: `framer-1it428z`,
                            "data-framer-name": `Line`,
                            layoutDependency: M,
                            layoutId: `DfkpTCT8T`,
                            style: {
                                backgroundColor: `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2))`
                            }
                        }), d(f.div, {
                            className: `framer-107pdi9`,
                            "data-framer-name": `Content`,
                            layoutDependency: M,
                            layoutId: `t5soOghr4`,
                            children: [d(f.div, {
                                className: `framer-l6wrfx`,
                                "data-framer-name": `Left`,
                                layoutDependency: M,
                                layoutId: `xll6TLkPf`,
                                children: [P() && l(f.div, {
                                    className: `framer-o0po6w`,
                                    "data-framer-name": `Roll No`,
                                    layoutDependency: M,
                                    layoutId: `Diwx5j1_P`,
                                    children: l(b, {
                                        __fromCanvasComponent: !0,
                                        children: l(r, {
                                            children: l(f.p, {
                                                className: `framer-styles-preset-8vm16z`,
                                                "data-styles-preset": `uDh9bONtj`,
                                                children: `01`
                                            })
                                        }),
                                        className: `framer-1uch2fs`,
                                        "data-framer-name": `Text`,
                                        fonts: [`Inter`],
                                        layoutDependency: M,
                                        layoutId: `r6sS4xMY3`,
                                        style: {
                                            "--framer-paragraph-spacing": `0px`
                                        },
                                        text: v,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0
                                    })
                                }), l(b, {
                                    __fromCanvasComponent: !0,
                                    children: l(r, {
                                        children: l(f.p, {
                                            className: `framer-styles-preset-14w8e6o`,
                                            "data-styles-preset": `FsS03h6Vk`,
                                            children: `Art Direction`
                                        })
                                    }),
                                    className: `framer-77ym80`,
                                    "data-framer-name": `Text`,
                                    fonts: [`Inter`],
                                    layoutDependency: M,
                                    layoutId: `jAR4zM27S`,
                                    style: {
                                        "--framer-paragraph-spacing": `0px`
                                    },
                                    text: x,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0
                                })]
                            }), l(f.div, {
                                className: `framer-1sfns59`,
                                "data-framer-name": `Body Text`,
                                layoutDependency: M,
                                layoutId: `UZNXli93y`,
                                children: l(b, {
                                    __fromCanvasComponent: !0,
                                    children: l(r, {
                                        children: l(f.p, {
                                            className: `framer-styles-preset-8vm16z`,
                                            "data-styles-preset": `uDh9bONtj`,
                                            style: {
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-af1df47b-ea84-448e-bdf0-a5ce0f875a59, rgb(153, 153, 153)))`
                                            },
                                            children: `We're all about taking a 360-degree approach, \u2028\u2028bringing all our services under the same umbrella to create communication.`
                                        })
                                    }),
                                    className: `framer-gz3nsm`,
                                    "data-framer-name": `Text`,
                                    fonts: [`Inter`],
                                    layoutDependency: M,
                                    layoutId: `BZxFxaL8h`,
                                    style: {
                                        "--extracted-r6o4lv": `var(--token-af1df47b-ea84-448e-bdf0-a5ce0f875a59, rgb(153, 153, 153))`,
                                        "--framer-paragraph-spacing": `0px`
                                    },
                                    text: S,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0
                                })
                            })]
                        }), F() && l(f.div, {
                            className: `framer-zhh7a`,
                            "data-framer-name": `Line`,
                            layoutDependency: M,
                            layoutId: `j860tEL7g`,
                            style: {
                                backgroundColor: `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2))`
                            }
                        })]
                    })
                })
            })
        })
    }), [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-EhULR.framer-10cw8ys, .framer-EhULR .framer-10cw8ys { display: block; }`, `.framer-EhULR.framer-g2q9aj { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 40px 0px; position: relative; width: 869px; }`, `.framer-EhULR .framer-1it428z, .framer-EhULR .framer-zhh7a { flex: none; height: 1px; overflow: hidden; position: relative; width: 100%; }`, `.framer-EhULR .framer-107pdi9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 227px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`, `.framer-EhULR .framer-l6wrfx { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 124px; height: min-content; justify-content: center; max-width: 300px; overflow: hidden; padding: 0px; position: relative; width: 1px; }`, `.framer-EhULR .framer-o0po6w { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 30px; overflow: hidden; padding: 3px 0px 0px 0px; position: relative; width: 1px; }`, `.framer-EhULR .framer-1uch2fs, .framer-EhULR .framer-gz3nsm { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`, `.framer-EhULR .framer-77ym80 { flex: 1 0 0px; height: auto; max-width: 312px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`, `.framer-EhULR .framer-1sfns59 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 320px; overflow: hidden; padding: 3px 0px 0px 0px; position: relative; width: 1px; }`, `.framer-EhULR.framer-v-szcp6t.framer-g2q9aj { padding: 0px; }`, `.framer-EhULR.framer-v-szcp6t .framer-1it428z, .framer-EhULR.framer-v-tnd4c0 .framer-1it428z { order: 0; }`, `.framer-EhULR.framer-v-szcp6t .framer-107pdi9 { order: 1; }`, `.framer-EhULR.framer-v-szcp6t .framer-zhh7a, .framer-EhULR.framer-v-tnd4c0 .framer-zhh7a { order: 2; }`, `.framer-EhULR.framer-v-x3qdnr.framer-g2q9aj { width: 390px; }`, `.framer-EhULR.framer-v-x3qdnr .framer-107pdi9 { gap: 40px; }`, `.framer-EhULR.framer-v-tnd4c0.framer-g2q9aj { padding: 0px; width: 390px; }`, `.framer-EhULR.framer-v-tnd4c0 .framer-107pdi9 { gap: 40px; order: 1; }`, ...rt, ...$e], `framer-EhULR`), U = gt, gt.displayName = `Service Card`, gt.defaultProps = {
        height: 135,
        width: 869
    }, S(gt, {
        variant: {
            options: [`RDKzUs_Fz`, `cSNZa7lRK`, `LVXTmyQFQ`, `MkgJQUnPV`],
            optionTitles: [`XL Primary`, `XL Secondary`, `S Primary`, `S Secondary`],
            title: `Variant`,
            type: R.Enum
        },
        mm2TadyHO: {
            defaultValue: `01`,
            displayTextArea: !1,
            title: `Roll No`,
            type: R.String
        },
        Pbe6da3x3: {
            defaultValue: `Art Direction`,
            displayTextArea: !1,
            title: `Service`,
            type: R.String
        },
        bGkBZIVtS: {
            defaultValue: `We guide every visual decision from start to finish, ensuring clarity, emotion, and impact across every touchpoint.`,
            displayTextArea: !0,
            title: `Body Text`,
            type: R.String
        }
    }), C(gt, [{
        explicitInter: !0,
        fonts: [{
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
            url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
            url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+1F00-1FFF`,
            url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0370-03FF`,
            url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
            url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
            url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
            url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
            weight: `400`
        }]
    }, ...ue(nt), ...ue(Qe)], {
        supportsExplicitInterCodegen: !0
    })
}));

function W(e, ...t) {
    let n = {};
    return t?.forEach(t => t && Object.assign(n, e[t])), n
}
var vt, yt, bt, xt, St, G, Ct, wt, Tt, Et, Dt, K, Ot, kt = e((() => {
    u(), w(), v(), i(), _t(), vt = D(U), yt = [`JRsPstmRO`, `p1eg3LXhB`, `CKSXr1zgZ`], bt = `framer-SfCw6`, xt = {
        CKSXr1zgZ: `framer-v-86lyw3`,
        JRsPstmRO: `framer-v-s9fnny`,
        p1eg3LXhB: `framer-v-1qexxet`
    }, St = {
        bounce: .2,
        delay: 0,
        duration: .4,
        type: `spring`
    }, G = (...e) => {
        for (let t of e)
            if (t && typeof t == `string`) return t
    }, Ct = ({
        value: e,
        children: n
    }) => {
        let r = t(g),
            i = e ?? r.transition,
            a = c(() => ({
                ...r,
                transition: i
            }), [JSON.stringify(i)]);
        return l(g.Provider, {
            value: a,
            children: n
        })
    }, wt = {
        Primary: `JRsPstmRO`,
        Secondary: `p1eg3LXhB`,
        Tertiary: `CKSXr1zgZ`
    }, Tt = f.create(r), Et = ({
        cursor1: e,
        cursor2: t,
        cursor3: n,
        cursor4: r,
        height: i,
        id: a,
        width: o,
        ...s
    }) => ({
        ...s,
        h2QFIa86Z: r ?? s.h2QFIa86Z,
        lVTXes8OT: e ?? s.lVTXes8OT,
        nM49zxtOZ: t ?? s.nM49zxtOZ,
        variant: wt[s.variant] ?? s.variant ?? `JRsPstmRO`,
        wNMx0LJLM: n ?? s.wNMx0LJLM
    }), Dt = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), K = j(a(function(e, t) {
        let r = n(null),
            i = t ?? r,
            a = o(),
            {
                activeLocale: s,
                setLocale: c
            } = te(),
            u = se(),
            {
                style: p,
                className: m,
                layoutId: h,
                variant: g,
                lVTXes8OT: v,
                nM49zxtOZ: b,
                wNMx0LJLM: x,
                h2QFIa86Z: S,
                ...C
            } = Et(e),
            {
                baseVariant: w,
                classNames: T,
                clearLoadingGesture: E,
                gestureHandlers: D,
                gestureVariant: O,
                isLoading: ee,
                setGestureState: A,
                setVariant: j,
                variants: M
            } = le({
                cycleOrder: yt,
                defaultVariant: `JRsPstmRO`,
                ref: i,
                variant: g,
                variantClassNames: xt
            }),
            N = Dt(e, M),
            P = y(bt);
        return l(_, {
            id: h ?? a,
            children: l(Tt, {
                animate: M,
                initial: !1,
                children: l(Ct, {
                    value: St,
                    children: d(f.div, {
                        ...C,
                        ...D,
                        className: y(P, `framer-s9fnny`, m, T),
                        "data-framer-name": `Primary`,
                        layoutDependency: N,
                        layoutId: `JRsPstmRO`,
                        ref: i,
                        style: {
                            ...p
                        },
                        ...W({
                            CKSXr1zgZ: {
                                "data-framer-name": `Tertiary`
                            },
                            p1eg3LXhB: {
                                "data-framer-name": `Secondary`
                            }
                        }, w, O),
                        children: [l(F, {
                            height: 135,
                            width: `calc(${u?.width||`100vw`} - 48px)`,
                            y: (u?.y || 0) + 0 + (((u?.height || 538) - 0 - 540) / 2 + 0 + 0),
                            ...W({
                                CKSXr1zgZ: {
                                    y: (u?.y || 0) + 0 + (((u?.height || 200) - 0 - 540) / 2 + 0 + 0)
                                },
                                p1eg3LXhB: {
                                    width: `calc(${u?.width||`100vw`} - 40px)`,
                                    y: (u?.y || 0) + 0 + (((u?.height || 490) - 0 - 540) / 2 + 0 + 0)
                                }
                            }, w, O),
                            children: l(k, {
                                className: `framer-24dgmc-container`,
                                "data-framer-cursor": v,
                                isModuleExternal: !0,
                                layoutDependency: N,
                                layoutId: `C0yN_Zb5T-container`,
                                nodeId: `C0yN_Zb5T`,
                                rendersWithMotion: !0,
                                scopeId: `TwujwltUT`,
                                ...W({
                                    CKSXr1zgZ: {
                                        "data-framer-cursor": void 0
                                    },
                                    p1eg3LXhB: {
                                        "data-framer-cursor": void 0
                                    }
                                }, w, O),
                                children: l(U, {
                                    bGkBZIVtS: `Develop cohesive brand systems, logos, and visual guidelines that communicate your values.`,
                                    height: `100%`,
                                    id: `C0yN_Zb5T`,
                                    layoutId: `C0yN_Zb5T`,
                                    mm2TadyHO: `01`,
                                    Pbe6da3x3: `Branding & Visual Identity`,
                                    style: {
                                        width: `100%`
                                    },
                                    variant: G(`RDKzUs_Fz`),
                                    width: `100%`,
                                    ...W({
                                        CKSXr1zgZ: {
                                            variant: G(`LVXTmyQFQ`)
                                        },
                                        p1eg3LXhB: {
                                            variant: G(`LVXTmyQFQ`)
                                        }
                                    }, w, O)
                                })
                            })
                        }), l(F, {
                            height: 135,
                            width: `calc(${u?.width||`100vw`} - 48px)`,
                            y: (u?.y || 0) + 0 + (((u?.height || 538) - 0 - 540) / 2 + 135 + 0),
                            ...W({
                                CKSXr1zgZ: {
                                    y: (u?.y || 0) + 0 + (((u?.height || 200) - 0 - 540) / 2 + 135 + 0)
                                },
                                p1eg3LXhB: {
                                    width: `calc(${u?.width||`100vw`} - 40px)`,
                                    y: (u?.y || 0) + 0 + (((u?.height || 490) - 0 - 540) / 2 + 135 + 0)
                                }
                            }, w, O),
                            children: l(k, {
                                className: `framer-zzi470-container`,
                                "data-framer-cursor": b,
                                isModuleExternal: !0,
                                layoutDependency: N,
                                layoutId: `rQtAe3TOl-container`,
                                nodeId: `rQtAe3TOl`,
                                rendersWithMotion: !0,
                                scopeId: `TwujwltUT`,
                                ...W({
                                    CKSXr1zgZ: {
                                        "data-framer-cursor": void 0
                                    },
                                    p1eg3LXhB: {
                                        "data-framer-cursor": void 0
                                    }
                                }, w, O),
                                children: l(U, {
                                    bGkBZIVtS: `Create impactful campaigns, social media graphics, and promotional materials that engage audiences.`,
                                    height: `100%`,
                                    id: `rQtAe3TOl`,
                                    layoutId: `rQtAe3TOl`,
                                    mm2TadyHO: `02`,
                                    Pbe6da3x3: `Marketing Design-Post, Video, Web`,
                                    style: {
                                        width: `100%`
                                    },
                                    variant: G(`RDKzUs_Fz`),
                                    width: `100%`,
                                    ...W({
                                        CKSXr1zgZ: {
                                            variant: G(`LVXTmyQFQ`)
                                        },
                                        p1eg3LXhB: {
                                            variant: G(`LVXTmyQFQ`)
                                        }
                                    }, w, O)
                                })
                            })
                        }), l(F, {
                            height: 135,
                            width: `calc(${u?.width||`100vw`} - 48px)`,
                            y: (u?.y || 0) + 0 + (((u?.height || 538) - 0 - 540) / 2 + 270 + 0),
                            ...W({
                                CKSXr1zgZ: {
                                    y: (u?.y || 0) + 0 + (((u?.height || 200) - 0 - 540) / 2 + 270 + 0)
                                },
                                p1eg3LXhB: {
                                    width: `calc(${u?.width||`100vw`} - 40px)`,
                                    y: (u?.y || 0) + 0 + (((u?.height || 490) - 0 - 540) / 2 + 270 + 0)
                                }
                            }, w, O),
                            children: l(k, {
                                className: `framer-1f9rgyi-container`,
                                "data-framer-cursor": x,
                                isModuleExternal: !0,
                                layoutDependency: N,
                                layoutId: `Jm11npLcM-container`,
                                nodeId: `Jm11npLcM`,
                                rendersWithMotion: !0,
                                scopeId: `TwujwltUT`,
                                ...W({
                                    CKSXr1zgZ: {
                                        "data-framer-cursor": void 0
                                    },
                                    p1eg3LXhB: {
                                        "data-framer-cursor": void 0
                                    }
                                }, w, O),
                                children: l(U, {
                                    bGkBZIVtS: `Deliver thoughtful packaging solutions that enhance product presence and appeal.`,
                                    height: `100%`,
                                    id: `Jm11npLcM`,
                                    layoutId: `Jm11npLcM`,
                                    mm2TadyHO: `03`,
                                    Pbe6da3x3: `Packaging & Product Design`,
                                    style: {
                                        width: `100%`
                                    },
                                    variant: G(`RDKzUs_Fz`),
                                    width: `100%`,
                                    ...W({
                                        CKSXr1zgZ: {
                                            variant: G(`LVXTmyQFQ`)
                                        },
                                        p1eg3LXhB: {
                                            variant: G(`LVXTmyQFQ`)
                                        }
                                    }, w, O)
                                })
                            })
                        }), l(F, {
                            height: 135,
                            width: `calc(${u?.width||`100vw`} - 48px)`,
                            y: (u?.y || 0) + 0 + (((u?.height || 538) - 0 - 540) / 2 + 405 + 0),
                            ...W({
                                CKSXr1zgZ: {
                                    y: (u?.y || 0) + 0 + (((u?.height || 200) - 0 - 540) / 2 + 405 + 0)
                                },
                                p1eg3LXhB: {
                                    width: `calc(${u?.width||`100vw`} - 40px)`,
                                    y: (u?.y || 0) + 0 + (((u?.height || 490) - 0 - 540) / 2 + 405 + 0)
                                }
                            }, w, O),
                            children: l(k, {
                                className: `framer-gby3kn-container`,
                                "data-framer-cursor": S,
                                isModuleExternal: !0,
                                layoutDependency: N,
                                layoutId: `nuAvDIhrp-container`,
                                nodeId: `nuAvDIhrp`,
                                rendersWithMotion: !0,
                                scopeId: `TwujwltUT`,
                                ...W({
                                    CKSXr1zgZ: {
                                        "data-framer-cursor": void 0
                                    },
                                    p1eg3LXhB: {
                                        "data-framer-cursor": void 0
                                    }
                                }, w, O),
                                children: l(U, {
                                    bGkBZIVtS: `Design user-centered interfaces and experiences that are intuitive, functional, and polished.`,
                                    height: `100%`,
                                    id: `nuAvDIhrp`,
                                    layoutId: `nuAvDIhrp`,
                                    mm2TadyHO: `04`,
                                    Pbe6da3x3: `UI/UX Design`,
                                    style: {
                                        width: `100%`
                                    },
                                    variant: G(`cSNZa7lRK`),
                                    width: `100%`,
                                    ...W({
                                        CKSXr1zgZ: {
                                            variant: G(`MkgJQUnPV`)
                                        },
                                        p1eg3LXhB: {
                                            variant: G(`MkgJQUnPV`)
                                        }
                                    }, w, O)
                                })
                            })
                        })]
                    })
                })
            })
        })
    }), [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-SfCw6.framer-vvif0w, .framer-SfCw6 .framer-vvif0w { display: block; }`, `.framer-SfCw6.framer-s9fnny { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 893px; }`, `.framer-SfCw6 .framer-24dgmc-container, .framer-SfCw6 .framer-zzi470-container, .framer-SfCw6 .framer-1f9rgyi-container, .framer-SfCw6 .framer-gby3kn-container { flex: none; height: auto; position: relative; width: 100%; }`, `.framer-SfCw6.framer-v-1qexxet.framer-s9fnny { padding: 0px 20px 0px 20px; }`], `framer-SfCw6`), Ot = K, K.displayName = `Service List`, K.defaultProps = {
        height: 538,
        width: 893
    }, S(K, {
        variant: {
            options: [`JRsPstmRO`, `p1eg3LXhB`, `CKSXr1zgZ`],
            optionTitles: [`Primary`, `Secondary`, `Tertiary`],
            title: `Variant`,
            type: R.Enum
        },
        lVTXes8OT: {
            title: `Cursor 1`,
            type: R.CustomCursor
        },
        nM49zxtOZ: {
            title: `Cursor 2`,
            type: R.CustomCursor
        },
        wNMx0LJLM: {
            title: `Cursor 3`,
            type: R.CustomCursor
        },
        h2QFIa86Z: {
            title: `Cursor 4`,
            type: R.CustomCursor
        }
    }), C(K, [{
        explicitInter: !0,
        fonts: []
    }, ...vt], {
        supportsExplicitInterCodegen: !0
    }), K.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([T(U, {}, t)]))
    }
}));

function At(e, ...t) {
    let n = {};
    return t?.forEach(t => t && Object.assign(n, e[t])), n
}
var jt, Mt, Nt, Pt, Ft, It, Lt, Rt, zt, Bt, q, Vt = e((() => {
    u(), w(), v(), i(), jt = [`Rm6YA58C0`, `ODR5qlVVL`, `F5ZecX2Gp`, `gkgzp8Iz1`], Mt = `framer-1BQda`, Nt = {
        F5ZecX2Gp: `framer-v-e0zxc`,
        gkgzp8Iz1: `framer-v-n7vvgp`,
        ODR5qlVVL: `framer-v-10x6daw`,
        Rm6YA58C0: `framer-v-197dz7f`
    }, Pt = {
        bounce: .2,
        delay: 0,
        duration: .4,
        type: `spring`
    }, Ft = ({
        value: e,
        children: n
    }) => {
        let r = t(g),
            i = e ?? r.transition,
            a = c(() => ({
                ...r,
                transition: i
            }), [JSON.stringify(i)]);
        return l(g.Provider, {
            value: a,
            children: n
        })
    }, It = {
        "S Primary": `F5ZecX2Gp`,
        "S Secondary": `gkgzp8Iz1`,
        "XL Primary": `Rm6YA58C0`,
        "XL Secondary": `ODR5qlVVL`
    }, Lt = f.create(r), Rt = ({
        bodyText: e,
        height: t,
        id: n,
        rollNo: r,
        service: i,
        width: a,
        ...o
    }) => ({
        ...o,
        bGkBZIVtS: e ?? o.bGkBZIVtS ?? `We guide every visual decision from start to finish, ensuring clarity, emotion, and impact across every touchpoint.`,
        mm2TadyHO: r ?? o.mm2TadyHO ?? `01`,
        Pbe6da3x3: i ?? o.Pbe6da3x3 ?? `Art Direction`,
        variant: It[o.variant] ?? o.variant ?? `Rm6YA58C0`
    }), zt = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), Bt = j(a(function(e, t) {
        let i = n(null),
            a = t ?? i,
            s = o(),
            {
                activeLocale: c,
                setLocale: u
            } = te();
        se();
        let {
            style: p,
            className: m,
            layoutId: h,
            variant: g,
            mm2TadyHO: v,
            Pbe6da3x3: x,
            bGkBZIVtS: S,
            ...C
        } = Rt(e), {
            baseVariant: w,
            classNames: T,
            clearLoadingGesture: E,
            gestureHandlers: D,
            gestureVariant: O,
            isLoading: ee,
            setGestureState: k,
            setVariant: A,
            variants: j
        } = le({
            cycleOrder: jt,
            defaultVariant: `Rm6YA58C0`,
            ref: a,
            variant: g,
            variantClassNames: Nt
        }), M = zt(e, j), N = y(Mt), P = () => ![`F5ZecX2Gp`, `gkgzp8Iz1`].includes(w), F = () => !![`ODR5qlVVL`, `gkgzp8Iz1`].includes(w);
        return l(_, {
            id: h ?? s,
            children: l(Lt, {
                animate: j,
                initial: !1,
                children: l(Ft, {
                    value: Pt,
                    children: d(f.div, {
                        ...C,
                        ...D,
                        className: y(N, `framer-197dz7f`, m, T),
                        "data-framer-name": `XL Primary`,
                        layoutDependency: M,
                        layoutId: `Rm6YA58C0`,
                        ref: a,
                        style: {
                            ...p
                        },
                        ...At({
                            F5ZecX2Gp: {
                                "data-framer-name": `S Primary`
                            },
                            gkgzp8Iz1: {
                                "data-framer-name": `S Secondary`
                            },
                            ODR5qlVVL: {
                                "data-framer-name": `XL Secondary`
                            }
                        }, w, O),
                        children: [l(f.div, {
                            className: `framer-p5e119`,
                            "data-framer-name": `Line`,
                            layoutDependency: M,
                            layoutId: `PBEkp7oH0`,
                            style: {
                                backgroundColor: `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2))`
                            }
                        }), d(f.div, {
                            className: `framer-m2n0t2`,
                            "data-framer-name": `Content`,
                            layoutDependency: M,
                            layoutId: `uMfrMQBfV`,
                            children: [d(f.div, {
                                className: `framer-p02mdb`,
                                "data-framer-name": `Left`,
                                layoutDependency: M,
                                layoutId: `KFbqt9r26`,
                                children: [P() && l(f.div, {
                                    className: `framer-1ec2xh6`,
                                    "data-framer-name": `Roll No`,
                                    layoutDependency: M,
                                    layoutId: `naXzHbFLJ`,
                                    children: l(b, {
                                        __fromCanvasComponent: !0,
                                        children: l(r, {
                                            children: l(f.p, {
                                                dir: `auto`,
                                                style: {
                                                    "--font-selector": `RlI7SW50ZXJEaXNwbGF5LVNlbWlCb2xk`,
                                                    "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                                    "--framer-font-size": `14px`,
                                                    "--framer-font-weight": `600`,
                                                    "--framer-letter-spacing": `0.1px`,
                                                    "--framer-line-height": `17px`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`
                                                },
                                                children: `01`
                                            })
                                        }),
                                        className: `framer-1cja8c3`,
                                        "data-framer-name": `Text`,
                                        fonts: [`FR;InterDisplay-SemiBold`],
                                        layoutDependency: M,
                                        layoutId: `HgtyzTqNQ`,
                                        style: {
                                            "--extracted-r6o4lv": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                            "--framer-paragraph-spacing": `0px`
                                        },
                                        text: v,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0
                                    })
                                }), l(b, {
                                    __fromCanvasComponent: !0,
                                    children: l(r, {
                                        children: l(f.p, {
                                            dir: `auto`,
                                            style: {
                                                "--font-selector": `RlI7SW50ZXJEaXNwbGF5LU1lZGl1bQ==`,
                                                "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                                "--framer-font-size": `19px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-letter-spacing": `0px`,
                                                "--framer-line-height": `25.2px`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`
                                            },
                                            children: `Art Direction`
                                        })
                                    }),
                                    className: `framer-psfgk9`,
                                    "data-framer-name": `Text`,
                                    fonts: [`FR;InterDisplay-Medium`],
                                    layoutDependency: M,
                                    layoutId: `AAbqu0d3m`,
                                    style: {
                                        "--extracted-r6o4lv": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                        "--framer-paragraph-spacing": `0px`
                                    },
                                    text: x,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0
                                })]
                            }), l(f.div, {
                                className: `framer-1he2qty`,
                                "data-framer-name": `Body Text`,
                                layoutDependency: M,
                                layoutId: `ylJ_2gsTn`,
                                children: l(b, {
                                    __fromCanvasComponent: !0,
                                    children: l(r, {
                                        children: l(f.p, {
                                            dir: `auto`,
                                            style: {
                                                "--font-selector": `RlI7SW50ZXJEaXNwbGF5LVNlbWlCb2xk`,
                                                "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                                "--framer-font-size": `14px`,
                                                "--framer-font-weight": `600`,
                                                "--framer-letter-spacing": `0.1px`,
                                                "--framer-line-height": `17px`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`
                                            },
                                            children: `We guide every visual decision from start to finish, ensuring clarity, emotion, and impact across every touchpoint.`
                                        })
                                    }),
                                    className: `framer-1yyqbh8`,
                                    "data-framer-name": `Text`,
                                    fonts: [`FR;InterDisplay-SemiBold`],
                                    layoutDependency: M,
                                    layoutId: `BNWFLhNnD`,
                                    style: {
                                        "--extracted-r6o4lv": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                        "--framer-paragraph-spacing": `0px`
                                    },
                                    text: S,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0
                                })
                            })]
                        }), F() && l(f.div, {
                            className: `framer-1w3gczr`,
                            "data-framer-name": `Line`,
                            layoutDependency: M,
                            layoutId: `IORr0r_JV`,
                            style: {
                                backgroundColor: `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2))`
                            }
                        })]
                    })
                })
            })
        })
    }), [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-1BQda.framer-13h2pjc, .framer-1BQda .framer-13h2pjc { display: block; }`, `.framer-1BQda.framer-197dz7f { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 40px 0px; position: relative; width: 869px; }`, `.framer-1BQda .framer-p5e119, .framer-1BQda .framer-1w3gczr { flex: none; height: 1px; overflow: hidden; position: relative; width: 100%; }`, `.framer-1BQda .framer-m2n0t2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 227px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`, `.framer-1BQda .framer-p02mdb { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 124px; height: min-content; justify-content: center; max-width: 300px; overflow: hidden; padding: 0px; position: relative; width: 1px; }`, `.framer-1BQda .framer-1ec2xh6 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 30px; overflow: hidden; padding: 3px 0px 0px 0px; position: relative; width: 1px; }`, `.framer-1BQda .framer-1cja8c3, .framer-1BQda .framer-1yyqbh8 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`, `.framer-1BQda .framer-psfgk9 { flex: 1 0 0px; height: auto; max-width: 312px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`, `.framer-1BQda .framer-1he2qty { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 320px; overflow: hidden; padding: 3px 0px 0px 0px; position: relative; width: 1px; }`, `.framer-1BQda.framer-v-10x6daw.framer-197dz7f { padding: 0px; }`, `.framer-1BQda.framer-v-10x6daw .framer-p5e119, .framer-1BQda.framer-v-n7vvgp .framer-p5e119 { order: 0; }`, `.framer-1BQda.framer-v-10x6daw .framer-m2n0t2 { order: 1; }`, `.framer-1BQda.framer-v-10x6daw .framer-1w3gczr, .framer-1BQda.framer-v-n7vvgp .framer-1w3gczr { order: 2; }`, `.framer-1BQda.framer-v-e0zxc.framer-197dz7f { width: 390px; }`, `.framer-1BQda.framer-v-e0zxc .framer-m2n0t2 { gap: 40px; }`, `.framer-1BQda.framer-v-n7vvgp.framer-197dz7f { padding: 0px; width: 390px; }`, `.framer-1BQda.framer-v-n7vvgp .framer-m2n0t2 { gap: 40px; order: 1; }`], `framer-1BQda`), q = Bt, Bt.displayName = `Service Card`, Bt.defaultProps = {
        height: 135,
        width: 869
    }, S(Bt, {
        variant: {
            options: [`Rm6YA58C0`, `ODR5qlVVL`, `F5ZecX2Gp`, `gkgzp8Iz1`],
            optionTitles: [`XL Primary`, `XL Secondary`, `S Primary`, `S Secondary`],
            title: `Variant`,
            type: R.Enum
        },
        mm2TadyHO: {
            defaultValue: `01`,
            displayTextArea: !1,
            title: `Roll No`,
            type: R.String
        },
        onmm2TadyHOChange: {
            changes: `mm2TadyHO`,
            type: R.ChangeHandler
        },
        Pbe6da3x3: {
            defaultValue: `Art Direction`,
            displayTextArea: !1,
            title: `Service`,
            type: R.String
        },
        onPbe6da3x3Change: {
            changes: `Pbe6da3x3`,
            type: R.ChangeHandler
        },
        bGkBZIVtS: {
            defaultValue: `We guide every visual decision from start to finish, ensuring clarity, emotion, and impact across every touchpoint.`,
            displayTextArea: !0,
            title: `Body Text`,
            type: R.String
        },
        onbGkBZIVtSChange: {
            changes: `bGkBZIVtS`,
            type: R.ChangeHandler
        }
    }), C(Bt, [{
        explicitInter: !0,
        fonts: [{
            cssFamilyName: `Inter Display`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter Display`,
            unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
            url: `https://framerusercontent.com/assets/gazZKZuUEtvr9ULhdA4SprP0AZ0.woff2`,
            weight: `600`
        }, {
            cssFamilyName: `Inter Display`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter Display`,
            unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
            url: `https://framerusercontent.com/assets/pe8RoujoPxuTZhqoNzYqHX2MXA.woff2`,
            weight: `600`
        }, {
            cssFamilyName: `Inter Display`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter Display`,
            unicodeRange: `U+1F00-1FFF`,
            url: `https://framerusercontent.com/assets/teGhWnhH3bCqefKGsIsqFy3hK8.woff2`,
            weight: `600`
        }, {
            cssFamilyName: `Inter Display`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter Display`,
            unicodeRange: `U+0370-03FF`,
            url: `https://framerusercontent.com/assets/qQHxgTnEk6Czu1yW4xS82HQWFOk.woff2`,
            weight: `600`
        }, {
            cssFamilyName: `Inter Display`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter Display`,
            unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
            url: `https://framerusercontent.com/assets/MJ3N6lfN4iP5Um8rJGqLYl03tE.woff2`,
            weight: `600`
        }, {
            cssFamilyName: `Inter Display`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter Display`,
            unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
            url: `https://framerusercontent.com/assets/PfdOpgzFf7N2Uye9JX7xRKYTgSc.woff2`,
            weight: `600`
        }, {
            cssFamilyName: `Inter Display`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter Display`,
            unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
            url: `https://framerusercontent.com/assets/0SEEmmWc3vovhaai4RlRQSWRrz0.woff2`,
            weight: `600`
        }, {
            cssFamilyName: `Inter Display`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter Display`,
            unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
            url: `https://framerusercontent.com/assets/ePuN3mCjzajIHnyCdvKBFiZkyY0.woff2`,
            weight: `500`
        }, {
            cssFamilyName: `Inter Display`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter Display`,
            unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
            url: `https://framerusercontent.com/assets/V3j1L0o5vPFKe26Sw4HcpXCfHo.woff2`,
            weight: `500`
        }, {
            cssFamilyName: `Inter Display`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter Display`,
            unicodeRange: `U+1F00-1FFF`,
            url: `https://framerusercontent.com/assets/F3kdpd2N0cToWV5huaZjjgM.woff2`,
            weight: `500`
        }, {
            cssFamilyName: `Inter Display`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter Display`,
            unicodeRange: `U+0370-03FF`,
            url: `https://framerusercontent.com/assets/0iDmxkizU9goZoclqIqsV5rvETU.woff2`,
            weight: `500`
        }, {
            cssFamilyName: `Inter Display`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter Display`,
            unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
            url: `https://framerusercontent.com/assets/r0mv3NegmA0akcQsNFotG32Las.woff2`,
            weight: `500`
        }, {
            cssFamilyName: `Inter Display`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter Display`,
            unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
            url: `/assets/iwWTDc49ENF2tCHbqlNARXw6Ug.woff2`,
            weight: `500`
        }, {
            cssFamilyName: `Inter Display`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter Display`,
            unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
            url: `https://framerusercontent.com/assets/Ii21jnSJkulBKsHHXKlapi7fv9w.woff2`,
            weight: `500`
        }]
    }], {
        supportsExplicitInterCodegen: !0
    })
}));

function J(e, ...t) {
    let n = {};
    return t?.forEach(t => t && Object.assign(n, e[t])), n
}
var Ht, Ut, Wt, Gt, Kt, Y, qt, Jt, Yt, Xt, Zt, X, Qt, $t = e((() => {
        u(), w(), v(), i(), Vt(), Ht = D(q), Ut = [`VYRd88cf5`, `UwjWU3nAO`, `kh6pJrX5p`], Wt = `framer-aHaMC`, Gt = {
            kh6pJrX5p: `framer-v-5uctq`,
            UwjWU3nAO: `framer-v-1fe0xwj`,
            VYRd88cf5: `framer-v-1lpl3`
        }, Kt = {
            bounce: .2,
            delay: 0,
            duration: .4,
            type: `spring`
        }, Y = (...e) => {
            for (let t of e)
                if (t && typeof t == `string`) return t
        }, qt = ({
            value: e,
            children: n
        }) => {
            let r = t(g),
                i = e ?? r.transition,
                a = c(() => ({
                    ...r,
                    transition: i
                }), [JSON.stringify(i)]);
            return l(g.Provider, {
                value: a,
                children: n
            })
        }, Jt = {
            Primary: `VYRd88cf5`,
            Secondary: `UwjWU3nAO`,
            Tertiary: `kh6pJrX5p`
        }, Yt = f.create(r), Xt = ({
            cursor1: e,
            cursor2: t,
            cursor3: n,
            cursor4: r,
            height: i,
            id: a,
            width: o,
            ...s
        }) => ({
            ...s,
            h2QFIa86Z: r ?? s.h2QFIa86Z,
            lVTXes8OT: e ?? s.lVTXes8OT,
            nM49zxtOZ: t ?? s.nM49zxtOZ,
            variant: Jt[s.variant] ?? s.variant ?? `VYRd88cf5`,
            wNMx0LJLM: n ?? s.wNMx0LJLM
        }), Zt = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), X = j(a(function(e, t) {
            let r = n(null),
                i = t ?? r,
                a = o(),
                {
                    activeLocale: s,
                    setLocale: c
                } = te(),
                u = se(),
                {
                    style: p,
                    className: m,
                    layoutId: h,
                    variant: g,
                    lVTXes8OT: v,
                    nM49zxtOZ: b,
                    wNMx0LJLM: x,
                    h2QFIa86Z: S,
                    ...C
                } = Xt(e),
                {
                    baseVariant: w,
                    classNames: T,
                    clearLoadingGesture: E,
                    gestureHandlers: D,
                    gestureVariant: O,
                    isLoading: ee,
                    setGestureState: A,
                    setVariant: j,
                    variants: M
                } = le({
                    cycleOrder: Ut,
                    defaultVariant: `VYRd88cf5`,
                    ref: i,
                    variant: g,
                    variantClassNames: Gt
                }),
                N = Zt(e, M),
                P = y(Wt);
            return l(_, {
                id: h ?? a,
                children: l(Yt, {
                    animate: M,
                    initial: !1,
                    children: l(qt, {
                        value: Kt,
                        children: d(f.div, {
                            ...C,
                            ...D,
                            className: y(P, `framer-1lpl3`, m, T),
                            "data-framer-name": `Primary`,
                            layoutDependency: N,
                            layoutId: `VYRd88cf5`,
                            ref: i,
                            style: {
                                ...p
                            },
                            ...J({
                                kh6pJrX5p: {
                                    "data-framer-name": `Tertiary`
                                },
                                UwjWU3nAO: {
                                    "data-framer-name": `Secondary`
                                }
                            }, w, O),
                            children: [l(F, {
                                height: 135,
                                width: `calc(${u?.width||`100vw`} - 48px)`,
                                y: (u?.y || 0) + 0 + (((u?.height || 538) - 0 - 540) / 2 + 0 + 0),
                                ...J({
                                    kh6pJrX5p: {
                                        y: (u?.y || 0) + 0 + (((u?.height || 200) - 0 - 540) / 2 + 0 + 0)
                                    },
                                    UwjWU3nAO: {
                                        width: `calc(${u?.width||`100vw`} - 40px)`,
                                        y: (u?.y || 0) + 0 + (((u?.height || 490) - 0 - 540) / 2 + 0 + 0)
                                    }
                                }, w, O),
                                children: l(k, {
                                    className: `framer-1h5c40z-container`,
                                    "data-framer-cursor": v,
                                    layoutDependency: N,
                                    layoutId: `tyj7WVBVV-container`,
                                    nodeId: `tyj7WVBVV`,
                                    rendersWithMotion: !0,
                                    scopeId: `dXTttPpGi`,
                                    ...J({
                                        kh6pJrX5p: {
                                            "data-framer-cursor": void 0
                                        },
                                        UwjWU3nAO: {
                                            "data-framer-cursor": void 0
                                        }
                                    }, w, O),
                                    children: l(q, {
                                        bGkBZIVtS: `Develop cohesive brand systems, logos, and visual guidelines that communicate your values.`,
                                        height: `100%`,
                                        id: `tyj7WVBVV`,
                                        layoutId: `tyj7WVBVV`,
                                        mm2TadyHO: `01`,
                                        Pbe6da3x3: `Branding & Visual Identity`,
                                        style: {
                                            width: `100%`
                                        },
                                        variant: Y(`Rm6YA58C0`),
                                        width: `100%`
                                    })
                                })
                            }), l(F, {
                                height: 135,
                                width: `calc(${u?.width||`100vw`} - 48px)`,
                                y: (u?.y || 0) + 0 + (((u?.height || 538) - 0 - 540) / 2 + 135 + 0),
                                ...J({
                                    kh6pJrX5p: {
                                        y: (u?.y || 0) + 0 + (((u?.height || 200) - 0 - 540) / 2 + 135 + 0)
                                    },
                                    UwjWU3nAO: {
                                        width: `calc(${u?.width||`100vw`} - 40px)`,
                                        y: (u?.y || 0) + 0 + (((u?.height || 490) - 0 - 540) / 2 + 135 + 0)
                                    }
                                }, w, O),
                                children: l(k, {
                                    className: `framer-18ihyzc-container`,
                                    "data-framer-cursor": b,
                                    layoutDependency: N,
                                    layoutId: `L0G1gsi2a-container`,
                                    nodeId: `L0G1gsi2a`,
                                    rendersWithMotion: !0,
                                    scopeId: `dXTttPpGi`,
                                    ...J({
                                        kh6pJrX5p: {
                                            "data-framer-cursor": void 0
                                        },
                                        UwjWU3nAO: {
                                            "data-framer-cursor": void 0
                                        }
                                    }, w, O),
                                    children: l(q, {
                                        bGkBZIVtS: `Create impactful campaigns, social media graphics, and promotional materials that engage audiences.`,
                                        height: `100%`,
                                        id: `L0G1gsi2a`,
                                        layoutId: `L0G1gsi2a`,
                                        mm2TadyHO: `02`,
                                        Pbe6da3x3: `Marketing Design-Post, Video, Web`,
                                        style: {
                                            width: `100%`
                                        },
                                        variant: Y(`Rm6YA58C0`),
                                        width: `100%`
                                    })
                                })
                            }), l(F, {
                                height: 135,
                                width: `calc(${u?.width||`100vw`} - 48px)`,
                                y: (u?.y || 0) + 0 + (((u?.height || 538) - 0 - 540) / 2 + 270 + 0),
                                ...J({
                                    kh6pJrX5p: {
                                        y: (u?.y || 0) + 0 + (((u?.height || 200) - 0 - 540) / 2 + 270 + 0)
                                    },
                                    UwjWU3nAO: {
                                        width: `calc(${u?.width||`100vw`} - 40px)`,
                                        y: (u?.y || 0) + 0 + (((u?.height || 490) - 0 - 540) / 2 + 270 + 0)
                                    }
                                }, w, O),
                                children: l(k, {
                                    className: `framer-1o8ptbf-container`,
                                    "data-framer-cursor": x,
                                    layoutDependency: N,
                                    layoutId: `zAdFG_a_P-container`,
                                    nodeId: `zAdFG_a_P`,
                                    rendersWithMotion: !0,
                                    scopeId: `dXTttPpGi`,
                                    ...J({
                                        kh6pJrX5p: {
                                            "data-framer-cursor": void 0
                                        },
                                        UwjWU3nAO: {
                                            "data-framer-cursor": void 0
                                        }
                                    }, w, O),
                                    children: l(q, {
                                        bGkBZIVtS: `Deliver thoughtful packaging solutions that enhance product presence and appeal.`,
                                        height: `100%`,
                                        id: `zAdFG_a_P`,
                                        layoutId: `zAdFG_a_P`,
                                        mm2TadyHO: `03`,
                                        Pbe6da3x3: `Packaging & Product Design`,
                                        style: {
                                            width: `100%`
                                        },
                                        variant: Y(`Rm6YA58C0`),
                                        width: `100%`
                                    })
                                })
                            }), l(F, {
                                height: 135,
                                width: `calc(${u?.width||`100vw`} - 48px)`,
                                y: (u?.y || 0) + 0 + (((u?.height || 538) - 0 - 540) / 2 + 405 + 0),
                                ...J({
                                    kh6pJrX5p: {
                                        y: (u?.y || 0) + 0 + (((u?.height || 200) - 0 - 540) / 2 + 405 + 0)
                                    },
                                    UwjWU3nAO: {
                                        width: `calc(${u?.width||`100vw`} - 40px)`,
                                        y: (u?.y || 0) + 0 + (((u?.height || 490) - 0 - 540) / 2 + 405 + 0)
                                    }
                                }, w, O),
                                children: l(k, {
                                    className: `framer-10whlxo-container`,
                                    "data-framer-cursor": S,
                                    layoutDependency: N,
                                    layoutId: `NJm2B_J2z-container`,
                                    nodeId: `NJm2B_J2z`,
                                    rendersWithMotion: !0,
                                    scopeId: `dXTttPpGi`,
                                    ...J({
                                        kh6pJrX5p: {
                                            "data-framer-cursor": void 0
                                        },
                                        UwjWU3nAO: {
                                            "data-framer-cursor": void 0
                                        }
                                    }, w, O),
                                    children: l(q, {
                                        bGkBZIVtS: `Design user-centered interfaces and experiences that are intuitive, functional, and polished.`,
                                        height: `100%`,
                                        id: `NJm2B_J2z`,
                                        layoutId: `NJm2B_J2z`,
                                        mm2TadyHO: `04`,
                                        Pbe6da3x3: `UI/UX Design`,
                                        style: {
                                            width: `100%`
                                        },
                                        variant: Y(`ODR5qlVVL`),
                                        width: `100%`,
                                        ...J({
                                            kh6pJrX5p: {
                                                variant: Y(`Rm6YA58C0`)
                                            },
                                            UwjWU3nAO: {
                                                variant: Y(`Rm6YA58C0`)
                                            }
                                        }, w, O)
                                    })
                                })
                            })]
                        })
                    })
                })
            })
        }), [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-aHaMC.framer-r8e6hv, .framer-aHaMC .framer-r8e6hv { display: block; }`, `.framer-aHaMC.framer-1lpl3 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 893px; }`, `.framer-aHaMC .framer-1h5c40z-container, .framer-aHaMC .framer-18ihyzc-container, .framer-aHaMC .framer-1o8ptbf-container, .framer-aHaMC .framer-10whlxo-container { flex: none; height: auto; position: relative; width: 100%; }`, `.framer-aHaMC.framer-v-1fe0xwj.framer-1lpl3 { padding: 0px 20px 0px 20px; }`], `framer-aHaMC`), Qt = X, X.displayName = `Service List`, X.defaultProps = {
            height: 538,
            width: 893
        }, S(X, {
            variant: {
                options: [`VYRd88cf5`, `UwjWU3nAO`, `kh6pJrX5p`],
                optionTitles: [`Primary`, `Secondary`, `Tertiary`],
                title: `Variant`,
                type: R.Enum
            },
            lVTXes8OT: {
                title: `Cursor 1`,
                type: R.CustomCursor
            },
            nM49zxtOZ: {
                title: `Cursor 2`,
                type: R.CustomCursor
            },
            wNMx0LJLM: {
                title: `Cursor 3`,
                type: R.CustomCursor
            },
            h2QFIa86Z: {
                title: `Cursor 4`,
                type: R.CustomCursor
            }
        }), C(X, [{
            explicitInter: !0,
            fonts: []
        }, ...Ht], {
            supportsExplicitInterCodegen: !0
        }), X.loader = {
            load: (e, t) => (t.locale, Promise.allSettled([T(q, {}, t)]))
        }
    })),
    en, tn, nn, rn, an, on, sn, cn, ln, un, dn, fn, pn, mn, hn, gn, _n, vn, yn, bn, xn, Z, Sn, Cn, Q, wn, Tn, En, Dn, On, kn, $, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn;
e((() => {
    u(), w(), v(), i(), Re(), Ze(), kt(), be(), me(), $t(), xe(), ve(), Se(), we(), fe(), Te(), ke(), Ne(), en = x(b), tn = D(V), nn = D(Fe), rn = D(_e), an = ee(b), on = D(Xe), sn = D(Ot), cn = D(Qt), ln = D(Ce), un = D(ye), dn = D(de), fn = {
        EYoQEjUf7: `(min-width: 810px) and (max-width: 1199.98px)`,
        WQLkyLRf1: `(min-width: 1200px)`,
        wwA4IuWSU: `(max-width: 809.98px)`
    }, pn = () => typeof document < `u`, mn = [], hn = `framer-SOeVu`, gn = {
        EYoQEjUf7: `framer-v-199udg2`,
        WQLkyLRf1: `framer-v-72rtr7`,
        wwA4IuWSU: `framer-v-1i90uf9`
    }, _n = (e, t, n) => e && t ? `position` : n, vn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: {
            damping: 80,
            delay: 0,
            mass: 1,
            stiffness: 400,
            type: `spring`
        },
        x: 0,
        y: 0
    }, yn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 1500
    }, bn = {
        opacity: .7,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: {
            damping: 60,
            delay: .75,
            mass: 1,
            stiffness: 400,
            type: `spring`
        },
        x: 0,
        y: 0
    }, xn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 100
    }, Z = e => typeof e == `object` && e && typeof e.src == `string` ? e : typeof e == `string` ? {
        src: e
    } : void 0, Sn = () => ({
        from: {
            alias: `uL1qKBuDM`,
            data: H,
            type: `Collection`
        },
        limit: {
            type: `LiteralValue`,
            value: 1
        },
        offset: {
            type: `LiteralValue`,
            value: 0
        },
        select: [{
            collection: `uL1qKBuDM`,
            name: `XZz1oIHnF`,
            type: `Identifier`
        }, {
            collection: `uL1qKBuDM`,
            name: `OSVMTRKwZ`,
            type: `Identifier`
        }, {
            collection: `uL1qKBuDM`,
            name: `hVe17yGcB`,
            type: `Identifier`
        }, {
            collection: `uL1qKBuDM`,
            name: `coEj19ie4`,
            type: `Identifier`
        }, {
            collection: `uL1qKBuDM`,
            name: `id`,
            type: `Identifier`
        }]
    }), Cn = () => ({
        from: {
            alias: `uL1qKBuDM`,
            data: H,
            type: `Collection`
        },
        offset: {
            type: `LiteralValue`,
            value: 0
        },
        select: [{
            collection: `uL1qKBuDM`,
            name: `XZz1oIHnF`,
            type: `Identifier`
        }, {
            collection: `uL1qKBuDM`,
            name: `OSVMTRKwZ`,
            type: `Identifier`
        }, {
            collection: `uL1qKBuDM`,
            name: `hVe17yGcB`,
            type: `Identifier`
        }, {
            collection: `uL1qKBuDM`,
            name: `coEj19ie4`,
            type: `Identifier`
        }, {
            collection: `uL1qKBuDM`,
            name: `id`,
            type: `Identifier`
        }]
    }), Q = ({
        query: e,
        pageSize: t,
        children: n
    }) => n(P(e)), wn = () => ({
        from: {
            alias: `EHGISkmIg`,
            data: H,
            type: `Collection`
        },
        limit: {
            type: `LiteralValue`,
            value: 1
        },
        offset: {
            type: `LiteralValue`,
            value: 1
        },
        select: [{
            collection: `EHGISkmIg`,
            name: `XZz1oIHnF`,
            type: `Identifier`
        }, {
            collection: `EHGISkmIg`,
            name: `OSVMTRKwZ`,
            type: `Identifier`
        }, {
            collection: `EHGISkmIg`,
            name: `hVe17yGcB`,
            type: `Identifier`
        }, {
            collection: `EHGISkmIg`,
            name: `coEj19ie4`,
            type: `Identifier`
        }, {
            collection: `EHGISkmIg`,
            name: `id`,
            type: `Identifier`
        }]
    }), Tn = () => ({
        from: {
            alias: `Dl0ZENmwP`,
            data: H,
            type: `Collection`
        },
        limit: {
            type: `LiteralValue`,
            value: 1
        },
        offset: {
            type: `LiteralValue`,
            value: 2
        },
        select: [{
            collection: `Dl0ZENmwP`,
            name: `XZz1oIHnF`,
            type: `Identifier`
        }, {
            collection: `Dl0ZENmwP`,
            name: `OSVMTRKwZ`,
            type: `Identifier`
        }, {
            collection: `Dl0ZENmwP`,
            name: `hVe17yGcB`,
            type: `Identifier`
        }, {
            collection: `Dl0ZENmwP`,
            name: `coEj19ie4`,
            type: `Identifier`
        }, {
            collection: `Dl0ZENmwP`,
            name: `id`,
            type: `Identifier`
        }]
    }), En = () => ({
        from: {
            alias: `ZdhLAwVML`,
            data: H,
            type: `Collection`
        },
        limit: {
            type: `LiteralValue`,
            value: 1
        },
        offset: {
            type: `LiteralValue`,
            value: 3
        },
        select: [{
            collection: `ZdhLAwVML`,
            name: `XZz1oIHnF`,
            type: `Identifier`
        }, {
            collection: `ZdhLAwVML`,
            name: `OSVMTRKwZ`,
            type: `Identifier`
        }, {
            collection: `ZdhLAwVML`,
            name: `hVe17yGcB`,
            type: `Identifier`
        }, {
            collection: `ZdhLAwVML`,
            name: `coEj19ie4`,
            type: `Identifier`
        }, {
            collection: `ZdhLAwVML`,
            name: `id`,
            type: `Identifier`
        }]
    }), Dn = () => ({
        from: {
            alias: `SXsXJtu2M`,
            data: H,
            type: `Collection`
        },
        limit: {
            type: `LiteralValue`,
            value: 1
        },
        offset: {
            type: `LiteralValue`,
            value: 4
        },
        select: [{
            collection: `SXsXJtu2M`,
            name: `XZz1oIHnF`,
            type: `Identifier`
        }, {
            collection: `SXsXJtu2M`,
            name: `OSVMTRKwZ`,
            type: `Identifier`
        }, {
            collection: `SXsXJtu2M`,
            name: `hVe17yGcB`,
            type: `Identifier`
        }, {
            collection: `SXsXJtu2M`,
            name: `coEj19ie4`,
            type: `Identifier`
        }, {
            collection: `SXsXJtu2M`,
            name: `id`,
            type: `Identifier`
        }]
    }), On = () => ({
        from: {
            alias: `tT31E2urJ`,
            data: H,
            type: `Collection`
        },
        limit: {
            type: `LiteralValue`,
            value: 1
        },
        offset: {
            type: `LiteralValue`,
            value: 5
        },
        select: [{
            collection: `tT31E2urJ`,
            name: `XZz1oIHnF`,
            type: `Identifier`
        }, {
            collection: `tT31E2urJ`,
            name: `OSVMTRKwZ`,
            type: `Identifier`
        }, {
            collection: `tT31E2urJ`,
            name: `hVe17yGcB`,
            type: `Identifier`
        }, {
            collection: `tT31E2urJ`,
            name: `coEj19ie4`,
            type: `Identifier`
        }, {
            collection: `tT31E2urJ`,
            name: `id`,
            type: `Identifier`
        }]
    }), kn = () => ({
        from: {
            alias: `MbdjZFcYP`,
            data: H,
            type: `Collection`
        },
        limit: {
            type: `LiteralValue`,
            value: 1
        },
        offset: {
            type: `LiteralValue`,
            value: 6
        },
        select: [{
            collection: `MbdjZFcYP`,
            name: `XZz1oIHnF`,
            type: `Identifier`
        }, {
            collection: `MbdjZFcYP`,
            name: `OSVMTRKwZ`,
            type: `Identifier`
        }, {
            collection: `MbdjZFcYP`,
            name: `hVe17yGcB`,
            type: `Identifier`
        }, {
            collection: `MbdjZFcYP`,
            name: `coEj19ie4`,
            type: `Identifier`
        }, {
            collection: `MbdjZFcYP`,
            name: `id`,
            type: `Identifier`
        }]
    }), $ = (...e) => {
        for (let t of e)
            if (t && typeof t == `string`) return t
    }, An = {
        Desktop: `WQLkyLRf1`,
        Phone: `wwA4IuWSU`,
        Tablet: `EYoQEjUf7`
    }, jn = ({
        value: e
    }) => ie() ? null : l(`style`, {
        dangerouslySetInnerHTML: {
            __html: e
        },
        "data-framer-html-style": ``
    }), Mn = ({
        height: e,
        id: t,
        width: n,
        ...r
    }) => ({
        ...r,
        variant: An[r.variant] ?? r.variant ?? `WQLkyLRf1`
    }), Nn = {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: `spring`
    }, Pn = {
        component: de,
        transition: Nn,
        variant: `c25M7LnKM`
    }, Fn = {
        component: de,
        transition: Nn,
        variant: `J7EXjWKd8`
    }, In = j(a(function(e, i) {
        let a = n(null),
            u = i ?? a,
            p = o(),
            {
                activeLocale: m,
                setLocale: h
            } = te(),
            v = se(),
            {
                style: x,
                className: S,
                layoutId: C,
                variant: w,
                ...T
            } = Mn(e);
        oe(c(() => Pe({}, m), [m]));
        let [E, D] = ce(w, fn, !1), ee = y(hn, Me, ge, Oe), k = t(re)?.isLayoutTemplate, j = _n(k, !!t(g)?.transition?.layout), P = () => pn() ? E !== `wwA4IuWSU` : !0, ne = () => !pn() || E === `wwA4IuWSU`, ie = () => pn() ? E !== `EYoQEjUf7` : !0, R = () => !pn() || E === `EYoQEjUf7`, le = N(`hzXU8z4Yn`), ue = n(null);
        return ae({
            "17cjziw": Pn,
            "1m1b97o": Fn
        }), l(re.Provider, {
            value: {
                activeVariantId: E,
                humanReadableVariantMap: An,
                primaryVariantId: `WQLkyLRf1`,
                variantClassNames: gn
            },
            children: d(_, {
                id: C ?? p,
                children: [l(jn, {
                    value: `html body { background: var(--token-42f80aff-dba9-4139-a7fa-d3b714fb3c4c, rgb(20, 20, 20)); }`
                }), d(f.div, {
                    ...T,
                    className: y(ee, `framer-72rtr7`, S),
                    ref: u,
                    style: {
                        ...x
                    },
                    children: [d(f.main, {
                        className: `framer-rtrxni`,
                        "data-framer-name": `Main`,
                        layout: j,
                        children: [l(`section`, {
                            className: `framer-yfnwk`,
                            "data-framer-name": `Section/Hero`,
                            children: d(`div`, {
                                className: `framer-1t1vvx`,
                                "data-framer-name": `Content contaienr`,
                                children: [d(`div`, {
                                    className: `framer-1xs976g`,
                                    "data-framer-name": `Content top`,
                                    children: [l(B, {
                                        breakpoint: E,
                                        overrides: {
                                            EYoQEjUf7: {
                                                viewBox: `0 0 948.5511985814007 203`
                                            },
                                            wwA4IuWSU: {
                                                viewBox: `0 0 948.5511985814007 203`
                                            }
                                        },
                                        children: l(en, {
                                            __fromCanvasComponent: !0,
                                            animate: vn,
                                            children: l(r, {
                                                children: l(`h1`, {
                                                    dir: `auto`,
                                                    style: {
                                                        "--font-selector": `R0Y7RnVubmVsIFNhbnMtNzAw`,
                                                        "--framer-font-family": `"Funnel Sans", "Funnel Sans Placeholder", sans-serif`,
                                                        "--framer-font-size": `227.28393905435956px`,
                                                        "--framer-font-weight": `700`,
                                                        "--framer-letter-spacing": `-0.06em`,
                                                        "--framer-line-height": `0.9em`,
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `var(--token-a144ca9a-12e3-46e4-b229-581c790c0a65, rgb(246, 244, 240))`,
                                                        "--framer-text-transform": `lowercase`
                                                    },
                                                    children: `Fiona Suen`
                                                })
                                            }),
                                            className: `framer-1e3u3ha`,
                                            "data-framer-appear-id": `1e3u3ha`,
                                            fonts: [`GF;Funnel Sans-700`],
                                            initial: yn,
                                            optimized: !0,
                                            verticalAlignment: `top`,
                                            viewBox: `0 0 1660 205`,
                                            withExternalLayout: !0
                                        })
                                    }), l(B, {
                                        breakpoint: E,
                                        overrides: {
                                            EYoQEjUf7: {
                                                children: l(r, {
                                                    children: l(`p`, {
                                                        className: `framer-styles-preset-ef5bnd`,
                                                        "data-styles-preset": `zhRz_0Rq3`,
                                                        dir: `auto`,
                                                        style: {
                                                            "--framer-text-alignment": `center`,
                                                            "--framer-text-color": `var(--token-a144ca9a-12e3-46e4-b229-581c790c0a65, rgb(246, 244, 240))`
                                                        },
                                                        children: `Brand & Graphic Designer based in Toronto, specializing in thoughtful brand identity, packaging, social media, and marketing design.`
                                                    })
                                                })
                                            },
                                            wwA4IuWSU: {
                                                children: l(r, {
                                                    children: l(`p`, {
                                                        className: `framer-styles-preset-ef5bnd`,
                                                        "data-styles-preset": `zhRz_0Rq3`,
                                                        dir: `auto`,
                                                        style: {
                                                            "--framer-text-color": `var(--token-a144ca9a-12e3-46e4-b229-581c790c0a65, rgb(246, 244, 240))`
                                                        },
                                                        children: `Brand & Graphic Designer based in Toronto, specializing in thoughtful brand identity, packaging, social media, and marketing design.`
                                                    })
                                                })
                                            }
                                        },
                                        children: l(en, {
                                            __fromCanvasComponent: !0,
                                            animate: bn,
                                            children: l(r, {
                                                children: l(`p`, {
                                                    className: `framer-styles-preset-ef5bnd`,
                                                    "data-styles-preset": `zhRz_0Rq3`,
                                                    dir: `auto`,
                                                    style: {
                                                        "--framer-text-alignment": `right`,
                                                        "--framer-text-color": `var(--token-a144ca9a-12e3-46e4-b229-581c790c0a65, rgb(246, 244, 240))`
                                                    },
                                                    children: `Brand & Graphic Designer based in Toronto, specializing in thoughtful brand identity, packaging, social media, and marketing design.`
                                                })
                                            }),
                                            className: `framer-zya4jv`,
                                            "data-framer-appear-id": `zya4jv`,
                                            fonts: [`Inter`],
                                            initial: xn,
                                            optimized: !0,
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0
                                        })
                                    })]
                                }), d(`div`, {
                                    className: `framer-374cc1`,
                                    "data-framer-name": `Projects`,
                                    children: [d(`div`, {
                                        className: `framer-1s76e64`,
                                        "data-framer-name": `First row`,
                                        children: [l(`div`, {
                                            className: `framer-1mrlvxt`,
                                            children: l(L, {
                                                children: l(B, {
                                                    breakpoint: E,
                                                    overrides: {
                                                        wwA4IuWSU: {
                                                            query: Cn()
                                                        }
                                                    },
                                                    children: l(Q, {
                                                        query: Sn(),
                                                        children: (e, t, n) => l(s, {
                                                            children: e?.map(({
                                                                coEj19ie4: e,
                                                                hVe17yGcB: t,
                                                                id: n,
                                                                OSVMTRKwZ: r,
                                                                XZz1oIHnF: i
                                                            }, a) => (i ??= ``, r ??= ``, t ??= ``, l(_, {
                                                                id: `uL1qKBuDM-${n}`,
                                                                children: l(z.Provider, {
                                                                    value: {
                                                                        XZz1oIHnF: i
                                                                    },
                                                                    children: l(I, {
                                                                        href: {
                                                                            pathVariables: {
                                                                                XZz1oIHnF: i
                                                                            },
                                                                            webPageId: `LJH7X8i5X`
                                                                        },
                                                                        motionChild: !0,
                                                                        nodeId: `x8hglH2pE`,
                                                                        openInNewTab: !1,
                                                                        scopeId: `augiA20Il`,
                                                                        children: l(f.a, {
                                                                            className: `framer-1a0sx0z framer-lux5qc`,
                                                                            children: l(B, {
                                                                                breakpoint: E,
                                                                                overrides: {
                                                                                    EYoQEjUf7: {
                                                                                        height: 440
                                                                                    },
                                                                                    wwA4IuWSU: {
                                                                                        height: 348,
                                                                                        width: `max(max(max(min(${v?.width||`100vw`} - 32px, 1660px), 1px), 50px), 1px)`
                                                                                    }
                                                                                },
                                                                                children: l(F, {
                                                                                    height: 576,
                                                                                    width: `max((min(${v?.width||`100vw`} - 56px, 1660px) - 24px) * 0.6296, 1px)`,
                                                                                    children: l(B, {
                                                                                        breakpoint: E,
                                                                                        overrides: {
                                                                                            wwA4IuWSU: {
                                                                                                "data-framer-cursor": void 0
                                                                                            }
                                                                                        },
                                                                                        children: l(A, {
                                                                                            className: `framer-pixyki-container`,
                                                                                            "data-framer-cursor": `17cjziw`,
                                                                                            nodeId: `ZxicQVnJF`,
                                                                                            scopeId: `augiA20Il`,
                                                                                            children: l(V, {
                                                                                                height: `100%`,
                                                                                                id: `ZxicQVnJF`,
                                                                                                layoutId: `ZxicQVnJF`,
                                                                                                SDj4JzOcn: Z(e),
                                                                                                style: {
                                                                                                    height: `100%`,
                                                                                                    width: `100%`
                                                                                                },
                                                                                                wHrHwjuXM: t,
                                                                                                width: `100%`,
                                                                                                XOrO4K9mc: r
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            }, n)))
                                                        })
                                                    })
                                                })
                                            })
                                        }), P() && l(`div`, {
                                            className: `framer-f4vvld hidden-1i90uf9`,
                                            children: l(L, {
                                                children: l(Q, {
                                                    query: wn(),
                                                    children: (e, t, n) => l(s, {
                                                        children: e?.map(({
                                                            coEj19ie4: e,
                                                            hVe17yGcB: t,
                                                            id: n,
                                                            OSVMTRKwZ: r,
                                                            XZz1oIHnF: i
                                                        }, a) => (i ??= ``, r ??= ``, t ??= ``, l(_, {
                                                            id: `EHGISkmIg-${n}`,
                                                            children: l(z.Provider, {
                                                                value: {
                                                                    XZz1oIHnF: i
                                                                },
                                                                children: l(I, {
                                                                    href: {
                                                                        pathVariables: {
                                                                            XZz1oIHnF: i
                                                                        },
                                                                        webPageId: `LJH7X8i5X`
                                                                    },
                                                                    motionChild: !0,
                                                                    nodeId: `ifu_uLVuY`,
                                                                    openInNewTab: !1,
                                                                    scopeId: `augiA20Il`,
                                                                    children: l(f.a, {
                                                                        className: `framer-locad7 framer-lux5qc`,
                                                                        children: l(B, {
                                                                            breakpoint: E,
                                                                            overrides: {
                                                                                EYoQEjUf7: {
                                                                                    height: 348
                                                                                }
                                                                            },
                                                                            children: l(F, {
                                                                                height: 424,
                                                                                width: `max((min(${v?.width||`100vw`} - 56px, 1660px) - 24px) / 2.7, 1px)`,
                                                                                children: l(A, {
                                                                                    className: `framer-jhzkn3-container`,
                                                                                    "data-framer-cursor": `17cjziw`,
                                                                                    nodeId: `CMVsIOPmn`,
                                                                                    scopeId: `augiA20Il`,
                                                                                    children: l(V, {
                                                                                        height: `100%`,
                                                                                        id: `CMVsIOPmn`,
                                                                                        layoutId: `CMVsIOPmn`,
                                                                                        SDj4JzOcn: Z(e),
                                                                                        style: {
                                                                                            height: `100%`,
                                                                                            width: `100%`
                                                                                        },
                                                                                        wHrHwjuXM: t,
                                                                                        width: `100%`,
                                                                                        XOrO4K9mc: r
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        }, n)))
                                                    })
                                                })
                                            })
                                        })]
                                    }), P() && d(`div`, {
                                        className: `framer-1ksnnat hidden-1i90uf9`,
                                        "data-framer-name": `Second row`,
                                        children: [l(`div`, {
                                            className: `framer-1bzrry2`,
                                            children: l(L, {
                                                children: l(Q, {
                                                    query: Tn(),
                                                    children: (e, t, n) => l(s, {
                                                        children: e?.map(({
                                                            coEj19ie4: e,
                                                            hVe17yGcB: t,
                                                            id: n,
                                                            OSVMTRKwZ: r,
                                                            XZz1oIHnF: i
                                                        }, a) => (i ??= ``, r ??= ``, t ??= ``, l(_, {
                                                            id: `Dl0ZENmwP-${n}`,
                                                            children: l(z.Provider, {
                                                                value: {
                                                                    XZz1oIHnF: i
                                                                },
                                                                children: l(I, {
                                                                    href: {
                                                                        pathVariables: {
                                                                            XZz1oIHnF: i
                                                                        },
                                                                        webPageId: `LJH7X8i5X`
                                                                    },
                                                                    motionChild: !0,
                                                                    nodeId: `DBVyU_dzB`,
                                                                    openInNewTab: !1,
                                                                    scopeId: `augiA20Il`,
                                                                    children: l(f.a, {
                                                                        className: `framer-iu9c5o framer-lux5qc`,
                                                                        children: l(B, {
                                                                            breakpoint: E,
                                                                            overrides: {
                                                                                EYoQEjUf7: {
                                                                                    height: 360
                                                                                }
                                                                            },
                                                                            children: l(F, {
                                                                                height: 444,
                                                                                width: `max((min(${v?.width||`100vw`} - 56px, 1660px) - 24px) / 2, 1px)`,
                                                                                children: l(A, {
                                                                                    className: `framer-17ai1cs-container`,
                                                                                    "data-framer-cursor": `17cjziw`,
                                                                                    nodeId: `bZH8G_W6U`,
                                                                                    scopeId: `augiA20Il`,
                                                                                    children: l(V, {
                                                                                        height: `100%`,
                                                                                        id: `bZH8G_W6U`,
                                                                                        layoutId: `bZH8G_W6U`,
                                                                                        SDj4JzOcn: Z(e),
                                                                                        style: {
                                                                                            height: `100%`,
                                                                                            width: `100%`
                                                                                        },
                                                                                        wHrHwjuXM: t,
                                                                                        width: `100%`,
                                                                                        XOrO4K9mc: r
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        }, n)))
                                                    })
                                                })
                                            })
                                        }), l(`div`, {
                                            className: `framer-fi8qa9`,
                                            children: l(L, {
                                                children: l(Q, {
                                                    query: En(),
                                                    children: (e, t, n) => l(s, {
                                                        children: e?.map(({
                                                            coEj19ie4: e,
                                                            hVe17yGcB: t,
                                                            id: n,
                                                            OSVMTRKwZ: r,
                                                            XZz1oIHnF: i
                                                        }, a) => (i ??= ``, r ??= ``, t ??= ``, l(_, {
                                                            id: `ZdhLAwVML-${n}`,
                                                            children: l(z.Provider, {
                                                                value: {
                                                                    XZz1oIHnF: i
                                                                },
                                                                children: l(I, {
                                                                    href: {
                                                                        pathVariables: {
                                                                            XZz1oIHnF: i
                                                                        },
                                                                        webPageId: `LJH7X8i5X`
                                                                    },
                                                                    motionChild: !0,
                                                                    nodeId: `J84rdbls4`,
                                                                    openInNewTab: !1,
                                                                    scopeId: `augiA20Il`,
                                                                    children: l(f.a, {
                                                                        className: `framer-l7uj78 framer-lux5qc`,
                                                                        children: l(B, {
                                                                            breakpoint: E,
                                                                            overrides: {
                                                                                EYoQEjUf7: {
                                                                                    height: 460
                                                                                }
                                                                            },
                                                                            children: l(F, {
                                                                                height: 576,
                                                                                width: `max((min(${v?.width||`100vw`} - 56px, 1660px) - 24px) / 2, 1px)`,
                                                                                children: l(A, {
                                                                                    className: `framer-cnkq1g-container`,
                                                                                    "data-framer-cursor": `17cjziw`,
                                                                                    nodeId: `yh4IMwJg9`,
                                                                                    scopeId: `augiA20Il`,
                                                                                    children: l(V, {
                                                                                        height: `100%`,
                                                                                        id: `yh4IMwJg9`,
                                                                                        layoutId: `yh4IMwJg9`,
                                                                                        SDj4JzOcn: Z(e),
                                                                                        style: {
                                                                                            height: `100%`,
                                                                                            width: `100%`
                                                                                        },
                                                                                        wHrHwjuXM: t,
                                                                                        width: `100%`,
                                                                                        XOrO4K9mc: r
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        }, n)))
                                                    })
                                                })
                                            })
                                        })]
                                    }), P() && d(`div`, {
                                        className: `framer-1u6lyjx hidden-1i90uf9`,
                                        "data-framer-name": `Third row`,
                                        children: [l(`div`, {
                                            className: `framer-1ktca6g`,
                                            children: l(L, {
                                                children: l(Q, {
                                                    query: Dn(),
                                                    children: (e, t, n) => l(s, {
                                                        children: e?.map(({
                                                            coEj19ie4: e,
                                                            hVe17yGcB: t,
                                                            id: n,
                                                            OSVMTRKwZ: r,
                                                            XZz1oIHnF: i
                                                        }, a) => (i ??= ``, r ??= ``, t ??= ``, l(_, {
                                                            id: `SXsXJtu2M-${n}`,
                                                            children: l(z.Provider, {
                                                                value: {
                                                                    XZz1oIHnF: i
                                                                },
                                                                children: l(I, {
                                                                    href: {
                                                                        pathVariables: {
                                                                            XZz1oIHnF: i
                                                                        },
                                                                        webPageId: `LJH7X8i5X`
                                                                    },
                                                                    motionChild: !0,
                                                                    nodeId: `P9CzXUyZt`,
                                                                    openInNewTab: !1,
                                                                    scopeId: `augiA20Il`,
                                                                    children: l(f.a, {
                                                                        className: `framer-z9w7yp framer-lux5qc`,
                                                                        children: l(B, {
                                                                            breakpoint: E,
                                                                            overrides: {
                                                                                EYoQEjUf7: {
                                                                                    height: 400
                                                                                }
                                                                            },
                                                                            children: l(F, {
                                                                                height: 576,
                                                                                width: `max((min(${v?.width||`100vw`} - 56px, 1660px) - 24px) / 2, 1px)`,
                                                                                children: l(A, {
                                                                                    className: `framer-av3v0l-container`,
                                                                                    "data-framer-cursor": `17cjziw`,
                                                                                    nodeId: `OwXkFfyaY`,
                                                                                    scopeId: `augiA20Il`,
                                                                                    children: l(V, {
                                                                                        height: `100%`,
                                                                                        id: `OwXkFfyaY`,
                                                                                        layoutId: `OwXkFfyaY`,
                                                                                        SDj4JzOcn: Z(e),
                                                                                        style: {
                                                                                            height: `100%`,
                                                                                            width: `100%`
                                                                                        },
                                                                                        wHrHwjuXM: t,
                                                                                        width: `100%`,
                                                                                        XOrO4K9mc: r
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        }, n)))
                                                    })
                                                })
                                            })
                                        }), l(`div`, {
                                            className: `framer-apwmix`,
                                            children: l(L, {
                                                children: l(Q, {
                                                    query: On(),
                                                    children: (e, t, n) => l(s, {
                                                        children: e?.map(({
                                                            coEj19ie4: e,
                                                            hVe17yGcB: t,
                                                            id: n,
                                                            OSVMTRKwZ: r,
                                                            XZz1oIHnF: i
                                                        }, a) => (i ??= ``, r ??= ``, t ??= ``, l(_, {
                                                            id: `tT31E2urJ-${n}`,
                                                            children: l(z.Provider, {
                                                                value: {
                                                                    XZz1oIHnF: i
                                                                },
                                                                children: l(I, {
                                                                    href: {
                                                                        pathVariables: {
                                                                            XZz1oIHnF: i
                                                                        },
                                                                        webPageId: `LJH7X8i5X`
                                                                    },
                                                                    motionChild: !0,
                                                                    nodeId: `jZHVUq7X1`,
                                                                    openInNewTab: !1,
                                                                    scopeId: `augiA20Il`,
                                                                    children: l(f.a, {
                                                                        className: `framer-x1hq6o framer-lux5qc`,
                                                                        children: l(B, {
                                                                            breakpoint: E,
                                                                            overrides: {
                                                                                EYoQEjUf7: {
                                                                                    height: 400
                                                                                }
                                                                            },
                                                                            children: l(F, {
                                                                                height: 576,
                                                                                width: `max((min(${v?.width||`100vw`} - 56px, 1660px) - 24px) / 2, 1px)`,
                                                                                children: l(A, {
                                                                                    className: `framer-wxxndk-container`,
                                                                                    "data-framer-cursor": `17cjziw`,
                                                                                    nodeId: `k5j1HFArt`,
                                                                                    scopeId: `augiA20Il`,
                                                                                    children: l(V, {
                                                                                        height: `100%`,
                                                                                        id: `k5j1HFArt`,
                                                                                        layoutId: `k5j1HFArt`,
                                                                                        SDj4JzOcn: Z(e),
                                                                                        style: {
                                                                                            height: `100%`,
                                                                                            width: `100%`
                                                                                        },
                                                                                        wHrHwjuXM: t,
                                                                                        width: `100%`,
                                                                                        XOrO4K9mc: r
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        }, n)))
                                                    })
                                                })
                                            })
                                        })]
                                    }), l(`div`, {
                                        className: `framer-1cqys0p`,
                                        "data-framer-name": `project7`,
                                        children: l(L, {
                                            children: l(Q, {
                                                query: kn(),
                                                children: (e, t, n) => l(s, {
                                                    children: e?.map(({
                                                        coEj19ie4: e,
                                                        hVe17yGcB: t,
                                                        id: n,
                                                        OSVMTRKwZ: r,
                                                        XZz1oIHnF: i
                                                    }, a) => (i ??= ``, r ??= ``, t ??= ``, l(_, {
                                                        id: `MbdjZFcYP-${n}`,
                                                        children: l(z.Provider, {
                                                            value: {
                                                                XZz1oIHnF: i
                                                            },
                                                            children: l(I, {
                                                                href: {
                                                                    pathVariables: {
                                                                        XZz1oIHnF: i
                                                                    },
                                                                    webPageId: `LJH7X8i5X`
                                                                },
                                                                motionChild: !0,
                                                                nodeId: `f9p8_fFtM`,
                                                                openInNewTab: !1,
                                                                scopeId: `augiA20Il`,
                                                                children: l(f.a, {
                                                                    className: `framer-1686vfi framer-lux5qc`,
                                                                    id: `${i}-1686vfi`,
                                                                    children: l(B, {
                                                                        breakpoint: E,
                                                                        overrides: {
                                                                            EYoQEjUf7: {
                                                                                height: 400
                                                                            },
                                                                            wwA4IuWSU: {
                                                                                height: 360,
                                                                                width: void 0
                                                                            }
                                                                        },
                                                                        children: l(F, {
                                                                            height: 584,
                                                                            width: `max(min(${v?.width||`100vw`} - 56px, 1660px), 1px)`,
                                                                            children: l(A, {
                                                                                className: `framer-tjru7y-container`,
                                                                                "data-framer-cursor": `1m1b97o`,
                                                                                id: `${i}-tjru7y`,
                                                                                nodeId: `ui5O1qyCl`,
                                                                                scopeId: `augiA20Il`,
                                                                                children: l(B, {
                                                                                    breakpoint: E,
                                                                                    overrides: {
                                                                                        EYoQEjUf7: {
                                                                                            style: {
                                                                                                height: `100%`,
                                                                                                width: `100%`
                                                                                            }
                                                                                        },
                                                                                        wwA4IuWSU: {
                                                                                            style: {
                                                                                                height: `100%`,
                                                                                                width: `100%`
                                                                                            }
                                                                                        }
                                                                                    },
                                                                                    children: l(V, {
                                                                                        height: `100%`,
                                                                                        id: `ui5O1qyCl`,
                                                                                        layoutId: `ui5O1qyCl`,
                                                                                        SDj4JzOcn: Z(e),
                                                                                        style: {
                                                                                            width: `100%`
                                                                                        },
                                                                                        wHrHwjuXM: t,
                                                                                        width: `100%`,
                                                                                        XOrO4K9mc: r
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    }, n)))
                                                })
                                            })
                                        })
                                    })]
                                })]
                            })
                        }), d(`section`, {
                            className: `framer-p25hjm`,
                            "data-framer-name": `Section/About me`,
                            children: [d(`div`, {
                                className: `framer-1qkqjzg`,
                                "data-framer-name": `Content container`,
                                children: [l(`div`, {
                                    className: `framer-6cl2lm`,
                                    "data-framer-name": `Content top`,
                                    children: l(F, {
                                        children: l(A, {
                                            className: `framer-1cerpkp-container`,
                                            isAuthoredByUser: !0,
                                            isModuleExternal: !0,
                                            nodeId: `BG4SKAqD9`,
                                            scopeId: `augiA20Il`,
                                            children: l(B, {
                                                breakpoint: E,
                                                overrides: {
                                                    EYoQEjUf7: {
                                                        font: {
                                                            fontFamily: `"Funnel Sans", "Funnel Sans Placeholder", sans-serif`,
                                                            fontSize: `52px`,
                                                            fontStyle: `normal`,
                                                            fontWeight: 500,
                                                            letterSpacing: `-0.06em`,
                                                            lineHeight: `1.1em`,
                                                            textAlign: `left`
                                                        }
                                                    },
                                                    wwA4IuWSU: {
                                                        font: {
                                                            fontFamily: `"Funnel Sans", "Funnel Sans Placeholder", sans-serif`,
                                                            fontSize: `24px`,
                                                            fontStyle: `normal`,
                                                            fontWeight: 500,
                                                            letterSpacing: `-0.05em`,
                                                            lineHeight: `1.1em`,
                                                            textAlign: `left`
                                                        }
                                                    }
                                                },
                                                children: l(Fe, {
                                                    appear: {
                                                        end: `0.25`,
                                                        start: `0.75`,
                                                        transition: {
                                                            bounce: .2,
                                                            delay: 0,
                                                            duration: .7,
                                                            type: `spring`
                                                        }
                                                    },
                                                    color: `var(--token-a144ca9a-12e3-46e4-b229-581c790c0a65, rgb(246, 244, 240))`,
                                                    font: {
                                                        fontFamily: `"Funnel Sans", "Funnel Sans Placeholder", sans-serif`,
                                                        fontSize: `72px`,
                                                        fontStyle: `normal`,
                                                        fontWeight: 500,
                                                        letterSpacing: `-0.05em`,
                                                        lineHeight: `1.1em`,
                                                        textAlign: `left`
                                                    },
                                                    height: `100%`,
                                                    htmlTag: `p`,
                                                    id: `BG4SKAqD9`,
                                                    layoutId: `BG4SKAqD9`,
                                                    opacity: {
                                                        maxOpacity: 1,
                                                        minOpacity: .4
                                                    },
                                                    style: {
                                                        width: `100%`
                                                    },
                                                    text: `4+ years™ of shaping identity systems that speak, marketing design that converts, and visual storytelling that elevates every touchpoint.`,
                                                    type: `word`,
                                                    width: `100%`
                                                })
                                            })
                                        })
                                    })
                                }), d(`div`, {
                                    className: `framer-1o2uo1f`,
                                    "data-framer-name": `Content bottom`,
                                    children: [l(B, {
                                        breakpoint: E,
                                        overrides: {
                                            EYoQEjUf7: {
                                                background: {
                                                    alt: `A thoughtful young person with dark hair gazes to the side, captured in soft black and white lighting.`,
                                                    fit: `fill`,
                                                    intrinsicHeight: 1447,
                                                    intrinsicWidth: 1444,
                                                    pixelHeight: 1447,
                                                    pixelWidth: 1444,
                                                    sizes: `max((min(${v?.width||`100vw`} - 56px, 1660px) - 48px) / 3, 50px)`,
                                                    src: `https://framerusercontent.com/images/7F31SiOqU1wjpYQRKWnZmZc4UO0.png?width=1444&height=1447`,
                                                    srcSet: `https://framerusercontent.com/images/7F31SiOqU1wjpYQRKWnZmZc4UO0.png?scale-down-to=1024&width=1444&height=1447 1021w,https://framerusercontent.com/images/7F31SiOqU1wjpYQRKWnZmZc4UO0.png?width=1444&height=1447 1444w`
                                                }
                                            },
                                            wwA4IuWSU: {
                                                background: {
                                                    alt: `A thoughtful young person with dark hair gazes to the side, captured in soft black and white lighting.`,
                                                    fit: `fill`,
                                                    intrinsicHeight: 1447,
                                                    intrinsicWidth: 1444,
                                                    pixelHeight: 1447,
                                                    pixelWidth: 1444,
                                                    positionX: `center`,
                                                    positionY: `top`,
                                                    sizes: `min(${v?.width||`100vw`} - 32px, 1660px)`,
                                                    src: `https://framerusercontent.com/images/7F31SiOqU1wjpYQRKWnZmZc4UO0.png?width=1444&height=1447`,
                                                    srcSet: `https://framerusercontent.com/images/7F31SiOqU1wjpYQRKWnZmZc4UO0.png?scale-down-to=1024&width=1444&height=1447 1021w,https://framerusercontent.com/images/7F31SiOqU1wjpYQRKWnZmZc4UO0.png?width=1444&height=1447 1444w`
                                                }
                                            }
                                        },
                                        children: l(M, {
                                            background: {
                                                alt: `A thoughtful young person with dark hair gazes to the side, captured in soft black and white lighting.`,
                                                fit: `fill`,
                                                intrinsicHeight: 1447,
                                                intrinsicWidth: 1444,
                                                pixelHeight: 1447,
                                                pixelWidth: 1444,
                                                sizes: `max((min(${v?.width||`100vw`} - 56px, 1660px) - 80px) / 3, 50px)`,
                                                src: `https://framerusercontent.com/images/7F31SiOqU1wjpYQRKWnZmZc4UO0.png?width=1444&height=1447`,
                                                srcSet: `https://framerusercontent.com/images/7F31SiOqU1wjpYQRKWnZmZc4UO0.png?scale-down-to=1024&width=1444&height=1447 1021w,https://framerusercontent.com/images/7F31SiOqU1wjpYQRKWnZmZc4UO0.png?width=1444&height=1447 1444w`
                                            },
                                            className: `framer-153zaw1`
                                        })
                                    }), d(`div`, {
                                        className: `framer-1xlfk9t`,
                                        "data-framer-name": `Column`,
                                        children: [d(`div`, {
                                            className: `framer-8eq26x`,
                                            "data-framer-name": `Text`,
                                            children: [l(b, {
                                                __fromCanvasComponent: !0,
                                                children: l(r, {
                                                    children: l(`p`, {
                                                        className: `framer-styles-preset-ogcnhc`,
                                                        "data-styles-preset": `uIGdgqB14`,
                                                        children: `I’m not just here to “make a logo.”`
                                                    })
                                                }),
                                                className: `framer-1ce7p9u`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0
                                            }), l(b, {
                                                __fromCanvasComponent: !0,
                                                children: l(r, {
                                                    children: l(`p`, {
                                                        className: `framer-styles-preset-10mptc2`,
                                                        "data-styles-preset": `wErrHXSPn`,
                                                        children: `I’m a creative partner who supports your brand as it grows. If you’re a startup or growing brand and you’re still finding your direction —\u2028\u2028you have ideas, but things feel a little unclear or inconsistent — I can help you gently bring everything into focus.`
                                                    })
                                                }),
                                                className: `framer-na8dy5`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0
                                            })]
                                        }), P() && l(O, {
                                            links: [{
                                                href: {
                                                    webPageId: `BoOypLBr5`
                                                },
                                                implicitPathVariables: void 0
                                            }, {
                                                href: {
                                                    webPageId: `BoOypLBr5`
                                                },
                                                implicitPathVariables: void 0
                                            }],
                                            children: e => l(F, {
                                                height: 43,
                                                children: l(A, {
                                                    className: `framer-13luhis-container hidden-1i90uf9`,
                                                    nodeId: `W_4ObKgPC`,
                                                    scopeId: `augiA20Il`,
                                                    children: l(B, {
                                                        breakpoint: E,
                                                        overrides: {
                                                            EYoQEjUf7: {
                                                                sQa2snWwX: e[1]
                                                            }
                                                        },
                                                        children: l(_e, {
                                                            height: `100%`,
                                                            id: `W_4ObKgPC`,
                                                            layoutId: `W_4ObKgPC`,
                                                            N0kOBruE3: `about me`,
                                                            sQa2snWwX: e[0],
                                                            width: `100%`
                                                        })
                                                    })
                                                })
                                            })
                                        })]
                                    }), d(`div`, {
                                        className: `framer-9t640p`,
                                        "data-framer-name": `Column `,
                                        children: [l(b, {
                                            __fromCanvasComponent: !0,
                                            children: l(r, {
                                                children: l(`p`, {
                                                    className: `framer-styles-preset-ogcnhc`,
                                                    "data-styles-preset": `uIGdgqB14`,
                                                    children: `What we’ll build together`
                                                })
                                            }),
                                            className: `framer-yne9eh`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0
                                        }), l(b, {
                                            __fromCanvasComponent: !0,
                                            children: l(r, {
                                                children: l(`p`, {
                                                    className: `framer-styles-preset-10mptc2`,
                                                    "data-styles-preset": `wErrHXSPn`,
                                                    children: ` A clear brand vibe + visual direction (so you feel confident moving forward)\u2028\u2028Consistent visuals across your logo, packaging, and social media\u2028\u2028A simple, flexible brand system you can grow with over time`
                                                })
                                            }),
                                            className: `framer-1t0llq7`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0
                                        })]
                                    })]
                                })]
                            }), ne() && l(O, {
                                links: [{
                                    href: {
                                        webPageId: `BoOypLBr5`
                                    },
                                    implicitPathVariables: void 0
                                }, {
                                    href: {
                                        webPageId: `BoOypLBr5`
                                    },
                                    implicitPathVariables: void 0
                                }],
                                children: e => l(B, {
                                    breakpoint: E,
                                    overrides: {
                                        wwA4IuWSU: {
                                            height: 43
                                        }
                                    },
                                    children: l(F, {
                                        children: l(A, {
                                            className: `framer-a49wpg-container hidden-72rtr7 hidden-199udg2`,
                                            nodeId: `zqNPIRbrm`,
                                            scopeId: `augiA20Il`,
                                            children: l(B, {
                                                breakpoint: E,
                                                overrides: {
                                                    wwA4IuWSU: {
                                                        sQa2snWwX: e[1]
                                                    }
                                                },
                                                children: l(_e, {
                                                    height: `100%`,
                                                    id: `zqNPIRbrm`,
                                                    layoutId: `zqNPIRbrm`,
                                                    N0kOBruE3: `about me`,
                                                    sQa2snWwX: e[0],
                                                    width: `100%`
                                                })
                                            })
                                        })
                                    })
                                })
                            }), d(`div`, {
                                className: `framer-xuku9u`,
                                "data-framer-name": `Content container`,
                                children: [d(`div`, {
                                    className: `framer-1tfszbz`,
                                    "data-framer-name": `Content bottom`,
                                    children: [l(`div`, {
                                        className: `framer-1jika3t`,
                                        "data-framer-name": `Column`,
                                        children: l(`div`, {
                                            className: `framer-1gyi63z`,
                                            "data-framer-name": `Text`
                                        })
                                    }), P() && l(`div`, {
                                        className: `framer-qqfokg hidden-1i90uf9`,
                                        "data-framer-name": `Column `
                                    }), ne() && d(`section`, {
                                        className: `framer-1kg7wyc hidden-72rtr7 hidden-199udg2`,
                                        "data-framer-name": `Services`,
                                        children: [d(`div`, {
                                            className: `framer-1i3dwrh`,
                                            "data-framer-name": `Heading`,
                                            children: [l(an, {
                                                __framer__spring: {
                                                    damping: 60,
                                                    delay: 0,
                                                    duration: .3,
                                                    ease: [.44, 0, .56, 1],
                                                    mass: 1,
                                                    stiffness: 350,
                                                    type: `spring`
                                                },
                                                __framer__styleTransformEffectEnabled: !0,
                                                __framer__transformTargets: [{
                                                    target: {
                                                        opacity: 0,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: 1,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: 0,
                                                        y: 140
                                                    }
                                                }, {
                                                    target: {
                                                        opacity: 1,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: 1,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: 0,
                                                        y: 0
                                                    }
                                                }],
                                                __framer__transformTrigger: `onInView`,
                                                __fromCanvasComponent: !0,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                children: l(r, {
                                                    children: l(`h1`, {
                                                        dir: `auto`,
                                                        style: {
                                                            "--font-selector": `RlI7SW50ZXJEaXNwbGF5LVNlbWlCb2xk`,
                                                            "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                                            "--framer-font-open-type-features": `'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on, 'ss07' on, 'salt' on`,
                                                            "--framer-font-size": `81px`,
                                                            "--framer-font-weight": `600`,
                                                            "--framer-letter-spacing": `-8px`,
                                                            "--framer-line-height": `168px`,
                                                            "--framer-text-alignment": `left`,
                                                            "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`
                                                        },
                                                        children: `Services`
                                                    })
                                                }),
                                                className: `framer-1nkzkkt`,
                                                "data-framer-name": `Text`,
                                                fonts: [`FR;InterDisplay-SemiBold`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0
                                            }), l(`div`, {
                                                className: `framer-6pt566`,
                                                "data-framer-name": `Number`
                                            })]
                                        }), l(B, {
                                            breakpoint: E,
                                            overrides: {
                                                wwA4IuWSU: {
                                                    width: `min(min(${v?.width||`100vw`} - 32px, 1660px), 1480px)`
                                                }
                                            },
                                            children: l(F, {
                                                height: 24,
                                                children: l(A, {
                                                    className: `framer-oy9gu3-container`,
                                                    isModuleExternal: !0,
                                                    nodeId: `SERYHvwle`,
                                                    scopeId: `augiA20Il`,
                                                    children: l(Xe, {
                                                        F9s7G6Ce8: `Structured`,
                                                        height: `100%`,
                                                        id: `SERYHvwle`,
                                                        layoutId: `SERYHvwle`,
                                                        rpGEGECg1: `Visual Language`,
                                                        Ssp7h9ebx: `Precise`,
                                                        style: {
                                                            width: `100%`
                                                        },
                                                        variant: $(`HD_4aNnSZ`),
                                                        width: `100%`,
                                                        xxFoBYQ6z: `Focused`
                                                    })
                                                })
                                            })
                                        }), l(B, {
                                            breakpoint: E,
                                            overrides: {
                                                wwA4IuWSU: {
                                                    width: `min(min(${v?.width||`100vw`} - 32px, 1660px), 1480px)`
                                                }
                                            },
                                            children: l(F, {
                                                height: 538,
                                                children: l(A, {
                                                    className: `framer-120tgd4-container`,
                                                    isModuleExternal: !0,
                                                    nodeId: `Dc3h3z1EK`,
                                                    scopeId: `augiA20Il`,
                                                    children: l(Ot, {
                                                        height: `100%`,
                                                        id: `Dc3h3z1EK`,
                                                        layoutId: `Dc3h3z1EK`,
                                                        style: {
                                                            width: `100%`
                                                        },
                                                        variant: $(`CKSXr1zgZ`),
                                                        width: `100%`
                                                    })
                                                })
                                            })
                                        })]
                                    }), ne() && l(B, {
                                        breakpoint: E,
                                        overrides: {
                                            wwA4IuWSU: {
                                                background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 319,
                                                    intrinsicWidth: 1852,
                                                    pixelHeight: 319,
                                                    pixelWidth: 1852,
                                                    sizes: `356px`,
                                                    src: `https://framerusercontent.com/images/pCgqT1R9fWy2D8OpLv8rXIrNVjg.png?width=1852&height=319`,
                                                    srcSet: `https://framerusercontent.com/images/pCgqT1R9fWy2D8OpLv8rXIrNVjg.png?scale-down-to=512&width=1852&height=319 512w,https://framerusercontent.com/images/pCgqT1R9fWy2D8OpLv8rXIrNVjg.png?scale-down-to=1024&width=1852&height=319 1024w,https://framerusercontent.com/images/pCgqT1R9fWy2D8OpLv8rXIrNVjg.png?width=1852&height=319 1852w`
                                                }
                                            }
                                        },
                                        children: l(M, {
                                            background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 319,
                                                intrinsicWidth: 1852,
                                                pixelHeight: 319,
                                                pixelWidth: 1852,
                                                src: `https://framerusercontent.com/images/pCgqT1R9fWy2D8OpLv8rXIrNVjg.png?width=1852&height=319`,
                                                srcSet: `https://framerusercontent.com/images/pCgqT1R9fWy2D8OpLv8rXIrNVjg.png?scale-down-to=512&width=1852&height=319 512w,https://framerusercontent.com/images/pCgqT1R9fWy2D8OpLv8rXIrNVjg.png?scale-down-to=1024&width=1852&height=319 1024w,https://framerusercontent.com/images/pCgqT1R9fWy2D8OpLv8rXIrNVjg.png?width=1852&height=319 1852w`
                                            },
                                            className: `framer-17kxzk5 hidden-72rtr7 hidden-199udg2`,
                                            "data-framer-name": `Image`,
                                            fitImageDimension: `height`
                                        })
                                    })]
                                }), P() && d(`section`, {
                                    className: `framer-ywystf hidden-1i90uf9`,
                                    "data-framer-name": `Services`,
                                    children: [ie() && d(`div`, {
                                        className: `framer-1shioqx hidden-199udg2`,
                                        "data-framer-name": `Heading`,
                                        children: [l(an, {
                                            __framer__spring: {
                                                damping: 60,
                                                delay: 0,
                                                duration: .3,
                                                ease: [.44, 0, .56, 1],
                                                mass: 1,
                                                stiffness: 350,
                                                type: `spring`
                                            },
                                            __framer__styleTransformEffectEnabled: !0,
                                            __framer__transformTargets: [{
                                                target: {
                                                    opacity: 0,
                                                    rotate: 0,
                                                    rotateX: 0,
                                                    rotateY: 0,
                                                    scale: 1,
                                                    skewX: 0,
                                                    skewY: 0,
                                                    x: 0,
                                                    y: 140
                                                }
                                            }, {
                                                target: {
                                                    opacity: 1,
                                                    rotate: 0,
                                                    rotateX: 0,
                                                    rotateY: 0,
                                                    scale: 1,
                                                    skewX: 0,
                                                    skewY: 0,
                                                    x: 0,
                                                    y: 0
                                                }
                                            }],
                                            __framer__transformTrigger: `onInView`,
                                            __fromCanvasComponent: !0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            children: l(r, {
                                                children: l(`h1`, {
                                                    dir: `auto`,
                                                    style: {
                                                        "--font-selector": `RlI7SW50ZXJEaXNwbGF5LVNlbWlCb2xk`,
                                                        "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                                        "--framer-font-open-type-features": `'ss03' on, 'ss04' on, 'ss07' on, 'salt' on, 'ss01' on, 'ss02' on`,
                                                        "--framer-font-size": `166px`,
                                                        "--framer-font-weight": `600`,
                                                        "--framer-letter-spacing": `-8px`,
                                                        "--framer-line-height": `168px`,
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `var(--token-a144ca9a-12e3-46e4-b229-581c790c0a65, rgb(236, 232, 223))`
                                                    },
                                                    children: `Services`
                                                })
                                            }),
                                            className: `framer-qfi1to`,
                                            "data-framer-name": `Text`,
                                            fonts: [`FR;InterDisplay-SemiBold`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0
                                        }), l(`div`, {
                                            className: `framer-z6tqd1`,
                                            "data-framer-name": `Number`
                                        }), l(M, {
                                            background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 319,
                                                intrinsicWidth: 1852,
                                                pixelHeight: 319,
                                                pixelWidth: 1852,
                                                src: `https://framerusercontent.com/images/pCgqT1R9fWy2D8OpLv8rXIrNVjg.png?width=1852&height=319`,
                                                srcSet: `https://framerusercontent.com/images/pCgqT1R9fWy2D8OpLv8rXIrNVjg.png?scale-down-to=512&width=1852&height=319 512w,https://framerusercontent.com/images/pCgqT1R9fWy2D8OpLv8rXIrNVjg.png?scale-down-to=1024&width=1852&height=319 1024w,https://framerusercontent.com/images/pCgqT1R9fWy2D8OpLv8rXIrNVjg.png?width=1852&height=319 1852w`
                                            },
                                            className: `framer-1v6ezc9`,
                                            "data-framer-name": `Image`,
                                            fitImageDimension: `height`
                                        })]
                                    }), ie() && l(F, {
                                        height: 24,
                                        width: `min(min(${v?.width||`100vw`} - 56px, 1660px), 1480px)`,
                                        children: l(A, {
                                            className: `framer-dlgb9u-container hidden-199udg2`,
                                            isModuleExternal: !0,
                                            nodeId: `efNFxisVk`,
                                            scopeId: `augiA20Il`,
                                            children: l(Xe, {
                                                F9s7G6Ce8: `Structured`,
                                                height: `100%`,
                                                id: `efNFxisVk`,
                                                layoutId: `efNFxisVk`,
                                                rpGEGECg1: `Visual Language`,
                                                Ssp7h9ebx: `Precise`,
                                                style: {
                                                    width: `100%`
                                                },
                                                variant: $(`oiyEdWEcR`),
                                                width: `100%`,
                                                xxFoBYQ6z: `Focused`
                                            })
                                        })
                                    }), ie() && l(F, {
                                        height: 538,
                                        width: `calc(min(min(${v?.width||`100vw`} - 56px, 1660px), 1480px) * 0.6836)`,
                                        children: l(A, {
                                            className: `framer-b48xgz-container hidden-199udg2`,
                                            nodeId: `PtpQBNC0J`,
                                            scopeId: `augiA20Il`,
                                            children: l(Qt, {
                                                height: `100%`,
                                                id: `PtpQBNC0J`,
                                                layoutId: `PtpQBNC0J`,
                                                style: {
                                                    width: `100%`
                                                },
                                                variant: $(`VYRd88cf5`),
                                                width: `100%`
                                            })
                                        })
                                    }), R() && d(`section`, {
                                        className: `framer-14nfq72 hidden-72rtr7`,
                                        "data-framer-name": `Services`,
                                        children: [d(`div`, {
                                            className: `framer-11gmowd`,
                                            "data-framer-name": `Heading`,
                                            children: [l(an, {
                                                __framer__spring: {
                                                    damping: 60,
                                                    delay: 0,
                                                    duration: .3,
                                                    ease: [.44, 0, .56, 1],
                                                    mass: 1,
                                                    stiffness: 350,
                                                    type: `spring`
                                                },
                                                __framer__styleTransformEffectEnabled: !0,
                                                __framer__transformTargets: [{
                                                    target: {
                                                        opacity: 0,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: 1,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: 0,
                                                        y: 140
                                                    }
                                                }, {
                                                    target: {
                                                        opacity: 1,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: 1,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: 0,
                                                        y: 0
                                                    }
                                                }],
                                                __framer__transformTrigger: `onInView`,
                                                __fromCanvasComponent: !0,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                children: l(r, {
                                                    children: l(`h1`, {
                                                        dir: `auto`,
                                                        style: {
                                                            "--font-selector": `RlI7SW50ZXJEaXNwbGF5LVNlbWlCb2xk`,
                                                            "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                                            "--framer-font-open-type-features": `'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on, 'ss07' on, 'salt' on`,
                                                            "--framer-font-size": `166px`,
                                                            "--framer-font-weight": `600`,
                                                            "--framer-letter-spacing": `-8px`,
                                                            "--framer-line-height": `168px`,
                                                            "--framer-text-alignment": `left`,
                                                            "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`
                                                        },
                                                        children: `Services`
                                                    })
                                                }),
                                                className: `framer-kbhnjx`,
                                                "data-framer-name": `Text`,
                                                fonts: [`FR;InterDisplay-SemiBold`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0
                                            }), l(`div`, {
                                                className: `framer-gkk0wx`,
                                                "data-framer-name": `Number`
                                            })]
                                        }), l(B, {
                                            breakpoint: E,
                                            overrides: {
                                                EYoQEjUf7: {
                                                    width: `min(min(${v?.width||`100vw`} - 56px, 1660px), 1480px)`
                                                }
                                            },
                                            children: l(F, {
                                                height: 24,
                                                children: l(A, {
                                                    className: `framer-tiz997-container`,
                                                    isModuleExternal: !0,
                                                    nodeId: `Tkn_GjA7p`,
                                                    scopeId: `augiA20Il`,
                                                    children: l(Xe, {
                                                        F9s7G6Ce8: `Structured`,
                                                        height: `100%`,
                                                        id: `Tkn_GjA7p`,
                                                        layoutId: `Tkn_GjA7p`,
                                                        rpGEGECg1: `Visual Language`,
                                                        Ssp7h9ebx: `Precise`,
                                                        style: {
                                                            width: `100%`
                                                        },
                                                        variant: $(`oiyEdWEcR`),
                                                        width: `100%`,
                                                        xxFoBYQ6z: `Focused`
                                                    })
                                                })
                                            })
                                        }), l(B, {
                                            breakpoint: E,
                                            overrides: {
                                                EYoQEjUf7: {
                                                    width: `min(min(${v?.width||`100vw`} - 56px, 1660px), 1480px)`
                                                }
                                            },
                                            children: l(F, {
                                                height: 538,
                                                children: l(A, {
                                                    className: `framer-1tch00b-container`,
                                                    nodeId: `AfK8nWqTy`,
                                                    scopeId: `augiA20Il`,
                                                    children: l(Qt, {
                                                        height: `100%`,
                                                        id: `AfK8nWqTy`,
                                                        layoutId: `AfK8nWqTy`,
                                                        style: {
                                                            width: `100%`
                                                        },
                                                        variant: $(`kh6pJrX5p`),
                                                        width: `100%`
                                                    })
                                                })
                                            })
                                        }), l(M, {
                                            background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 319,
                                                intrinsicWidth: 1852,
                                                pixelHeight: 319,
                                                pixelWidth: 1852,
                                                sizes: `370px`,
                                                src: `https://framerusercontent.com/images/pCgqT1R9fWy2D8OpLv8rXIrNVjg.png?width=1852&height=319`,
                                                srcSet: `https://framerusercontent.com/images/pCgqT1R9fWy2D8OpLv8rXIrNVjg.png?scale-down-to=512&width=1852&height=319 512w,https://framerusercontent.com/images/pCgqT1R9fWy2D8OpLv8rXIrNVjg.png?scale-down-to=1024&width=1852&height=319 1024w,https://framerusercontent.com/images/pCgqT1R9fWy2D8OpLv8rXIrNVjg.png?width=1852&height=319 1852w`
                                            },
                                            className: `framer-1bo82y3`,
                                            "data-framer-name": `Image`,
                                            fitImageDimension: `height`
                                        })]
                                    })]
                                })]
                            })]
                        }), l(`section`, {
                            className: `framer-1brgduy`,
                            "data-framer-name": `Section/Call to action`,
                            id: le,
                            ref: ue,
                            children: l(`div`, {
                                className: `framer-r1u79e`,
                                "data-framer-name": `Content container`,
                                children: l(B, {
                                    breakpoint: E,
                                    overrides: {
                                        wwA4IuWSU: {
                                            width: `min(${v?.width||`100vw`} - 32px, 1660px)`
                                        }
                                    },
                                    children: l(F, {
                                        height: 240,
                                        width: `min(max(${v?.width||`100vw`} - 56px, 1px), 1660px)`,
                                        children: l(A, {
                                            className: `framer-14148ln-container`,
                                            nodeId: `cXi1QBDNO`,
                                            scopeId: `augiA20Il`,
                                            children: l(B, {
                                                breakpoint: E,
                                                overrides: {
                                                    EYoQEjUf7: {
                                                        variant: $(`u8smF09TR`)
                                                    },
                                                    wwA4IuWSU: {
                                                        variant: $(`CH5eGg62m`)
                                                    }
                                                },
                                                children: l(Ce, {
                                                    EcTCStkvs: `mailto:fionaisdesigner@gmail.com`,
                                                    height: `100%`,
                                                    id: `cXi1QBDNO`,
                                                    layoutId: `cXi1QBDNO`,
                                                    style: {
                                                        width: `100%`
                                                    },
                                                    variant: $(`hltVLydmU`),
                                                    width: `100%`
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })]
                    }), l(F, {
                        children: l(A, {
                            className: `framer-1kl5wz7-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            layout: j,
                            nodeId: `HijQjJPLu`,
                            scopeId: `augiA20Il`,
                            children: l(ye, {
                                height: `100%`,
                                id: `HijQjJPLu`,
                                intensity: 16,
                                layoutId: `HijQjJPLu`,
                                width: `100%`
                            })
                        })
                    }), P() && l(O, {
                        links: [{
                            href: {
                                webPageId: `augiA20Il`
                            },
                            implicitPathVariables: void 0
                        }, {
                            href: {
                                webPageId: `augiA20Il`
                            },
                            implicitPathVariables: void 0
                        }],
                        children: e => l(F, {
                            height: 43,
                            y: 885,
                            children: l(A, {
                                className: `framer-f6r5z6-container hidden-1i90uf9`,
                                "data-framer-name": `(Delete this)`,
                                layout: j,
                                layoutScroll: !0,
                                name: `(Delete this)`,
                                nodeId: `s52Gcx0OY`,
                                scopeId: `augiA20Il`,
                                children: l(B, {
                                    breakpoint: E,
                                    overrides: {
                                        EYoQEjUf7: {
                                            sQa2snWwX: e[1]
                                        }
                                    },
                                    children: l(_e, {
                                        height: `100%`,
                                        id: `s52Gcx0OY`,
                                        layoutId: `s52Gcx0OY`,
                                        N0kOBruE3: `^`,
                                        name: `(Delete this)`,
                                        sQa2snWwX: e[0],
                                        width: `100%`
                                    })
                                })
                            })
                        })
                    })]
                }), l(`div`, {
                    id: `overlay`
                })]
            })
        })
    }), [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-SOeVu.framer-lux5qc, .framer-SOeVu .framer-lux5qc { display: block; }`, `.framer-SOeVu.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-42f80aff-dba9-4139-a7fa-d3b714fb3c4c, #141414); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`, `.framer-SOeVu .framer-rtrxni { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 7; }`, `.framer-SOeVu .framer-yfnwk { align-content: center; align-items: center; background-color: var(--token-42f80aff-dba9-4139-a7fa-d3b714fb3c4c, #141414); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 96px; height: min-content; justify-content: flex-start; min-height: 100vh; overflow: hidden; padding: 0px 28px 80px 28px; position: relative; width: 100%; }`, `.framer-SOeVu .framer-1t1vvx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 96px; height: min-content; justify-content: center; max-width: 1660px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`, `.framer-SOeVu .framer-1xs976g { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 64px 0px 0px 0px; position: relative; width: 100%; }`, `.framer-SOeVu .framer-1e3u3ha { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`, `.framer-SOeVu .framer-zya4jv { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 600px; opacity: 0.7; position: relative; white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`, `.framer-SOeVu .framer-374cc1 { align-content: center; align-items: center; background-color: var(--token-42f80aff-dba9-4139-a7fa-d3b714fb3c4c, #141414); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`, `.framer-SOeVu .framer-1s76e64, .framer-SOeVu .framer-1ksnnat, .framer-SOeVu .framer-1u6lyjx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`, `.framer-SOeVu .framer-1mrlvxt { align-content: flex-start; align-items: flex-start; display: flex; flex: 1.7 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 1px; }`, `.framer-SOeVu .framer-1a0sx0z, .framer-SOeVu .framer-locad7, .framer-SOeVu .framer-iu9c5o, .framer-SOeVu .framer-l7uj78, .framer-SOeVu .framer-z9w7yp, .framer-SOeVu .framer-x1hq6o, .framer-SOeVu .framer-1686vfi { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; text-decoration: none; width: 1px; }`, `.framer-SOeVu .framer-pixyki-container { aspect-ratio: 1.2239583333333333 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 576px); position: relative; width: 1px; }`, `.framer-SOeVu .framer-f4vvld { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 1px; }`, `.framer-SOeVu .framer-jhzkn3-container { aspect-ratio: 0.9787735849056604 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 423px); position: relative; width: 1px; }`, `.framer-SOeVu .framer-1bzrry2, .framer-SOeVu .framer-1ktca6g { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: 576px; justify-content: center; padding: 0px; position: relative; width: 1px; }`, `.framer-SOeVu .framer-17ai1cs-container { aspect-ratio: 1.2612612612612613 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 444px); position: relative; width: 1px; }`, `.framer-SOeVu .framer-fi8qa9, .framer-SOeVu .framer-apwmix { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 1px; }`, `.framer-SOeVu .framer-cnkq1g-container, .framer-SOeVu .framer-av3v0l-container, .framer-SOeVu .framer-wxxndk-container { aspect-ratio: 0.9722222222222222 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 576px); position: relative; width: 1px; }`, `.framer-SOeVu .framer-1cqys0p { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`, `.framer-SOeVu .framer-tjru7y-container, .framer-SOeVu .framer-1cerpkp-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`, `.framer-SOeVu .framer-p25hjm { align-content: center; align-items: center; background-color: var(--token-42f80aff-dba9-4139-a7fa-d3b714fb3c4c, #141414); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 72px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 28px 0px 28px; position: relative; width: 100%; }`, `.framer-SOeVu .framer-1qkqjzg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; max-width: 1660px; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-SOeVu .framer-6cl2lm { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`, `.framer-SOeVu .framer-1o2uo1f, .framer-SOeVu .framer-1tfszbz { display: grid; flex: none; gap: 24px 40px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-SOeVu .framer-153zaw1 { align-self: center; aspect-ratio: 0.9231770833333334 / 1; border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; flex: none; height: var(--framer-aspect-ratio-supported, 384px); justify-self: center; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`, `.framer-SOeVu .framer-1xlfk9t, .framer-SOeVu .framer-1jika3t { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: flex-start; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1fr; }`, `.framer-SOeVu .framer-8eq26x { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`, `.framer-SOeVu .framer-1ce7p9u { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; opacity: 0.7; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`, `.framer-SOeVu .framer-na8dy5, .framer-SOeVu .framer-1t0llq7 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`, `.framer-SOeVu .framer-13luhis-container, .framer-SOeVu .framer-a49wpg-container { flex: none; height: auto; position: relative; width: auto; }`, `.framer-SOeVu .framer-9t640p { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 301px; justify-content: center; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`, `.framer-SOeVu .framer-yne9eh { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; opacity: 0.7; position: relative; white-space: pre; width: auto; }`, `.framer-SOeVu .framer-xuku9u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 72px; height: min-content; justify-content: center; max-width: 1660px; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-SOeVu .framer-1gyi63z { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 19px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`, `.framer-SOeVu .framer-qqfokg { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; justify-self: start; min-height: 19px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`, `.framer-SOeVu .framer-1kg7wyc { align-content: flex-end; align-items: flex-end; align-self: start; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; justify-self: start; max-width: 1480px; overflow: hidden; padding: 0px; position: relative; width: 1fr; }`, `.framer-SOeVu .framer-1i3dwrh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 168px; justify-content: flex-start; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`, `.framer-SOeVu .framer-1nkzkkt { --framer-paragraph-spacing: 0px; flex: none; height: auto; mix-blend-mode: difference; position: relative; white-space: pre; width: auto; }`, `.framer-SOeVu .framer-6pt566, .framer-SOeVu .framer-z6tqd1, .framer-SOeVu .framer-gkk0wx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 50px; min-width: 55px; overflow: hidden; padding: 0px; position: relative; width: min-content; }`, `.framer-SOeVu .framer-oy9gu3-container, .framer-SOeVu .framer-120tgd4-container, .framer-SOeVu .framer-dlgb9u-container, .framer-SOeVu .framer-tiz997-container, .framer-SOeVu .framer-1tch00b-container, .framer-SOeVu .framer-14148ln-container { flex: none; height: auto; position: relative; width: 100%; }`, `.framer-SOeVu .framer-17kxzk5 { align-self: start; flex: none; height: auto; justify-self: start; overflow: visible; position: relative; width: 100%; }`, `.framer-SOeVu .framer-ywystf { align-content: flex-end; align-items: flex-end; background-color: var(--token-42f80aff-dba9-4139-a7fa-d3b714fb3c4c, #141414); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 31px; height: min-content; justify-content: center; max-width: 1480px; overflow: hidden; padding: 20px 0px 0px 0px; position: relative; width: 100%; }`, `.framer-SOeVu .framer-1shioqx, .framer-SOeVu .framer-11gmowd { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`, `.framer-SOeVu .framer-qfi1to { --framer-paragraph-spacing: 0px; flex: none; height: auto; mix-blend-mode: hard-light; position: relative; white-space: pre; width: auto; }`, `.framer-SOeVu .framer-1v6ezc9 { flex: 1 0 0px; height: auto; overflow: visible; position: relative; width: 1px; }`, `.framer-SOeVu .framer-b48xgz-container { flex: none; height: auto; position: relative; width: 68%; }`, `.framer-SOeVu .framer-14nfq72 { align-content: flex-end; align-items: flex-end; background-color: var(--token-f1811bb7-4096-4d8b-b753-725caaea347f, #1f1f1f); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1480px; overflow: hidden; padding: 0px; position: relative; width: 100%; }`, `.framer-SOeVu .framer-kbhnjx { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`, `.framer-SOeVu .framer-1bo82y3 { flex: none; height: auto; overflow: visible; position: relative; width: 370px; }`, `.framer-SOeVu .framer-1brgduy { align-content: center; align-items: center; background-color: var(--token-42f80aff-dba9-4139-a7fa-d3b714fb3c4c, #141414); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 72px; height: min-content; justify-content: center; overflow: hidden; padding: 280px 28px 280px 28px; position: relative; width: 100%; }`, `.framer-SOeVu .framer-r1u79e { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1660px; overflow: visible; padding: 0px; position: relative; width: 1px; }`, `.framer-SOeVu .framer-1kl5wz7-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }`, `.framer-SOeVu .framer-f6r5z6-container { bottom: 72px; flex: none; height: auto; position: fixed; right: 20px; width: auto; z-index: 9; }`, ...Ae, ...pe, ...Ee, `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-SOeVu.framer-72rtr7 { width: 810px; } .framer-SOeVu .framer-yfnwk, .framer-SOeVu .framer-14nfq72, .framer-SOeVu .framer-11gmowd { order: 0; } .framer-SOeVu .framer-1xs976g, .framer-SOeVu .framer-6cl2lm { align-content: center; align-items: center; } .framer-SOeVu .framer-zya4jv { max-width: 521px; } .framer-SOeVu .framer-374cc1 { gap: 32px; } .framer-SOeVu .framer-pixyki-container { aspect-ratio: 1.044318181818182 / 1; height: var(--framer-aspect-ratio-supported, 440px); } .framer-SOeVu .framer-jhzkn3-container { aspect-ratio: 0.7772988505747126 / 1; height: var(--framer-aspect-ratio-supported, 348px); } .framer-SOeVu .framer-1bzrry2, .framer-SOeVu .framer-1ktca6g { height: min-content; } .framer-SOeVu .framer-17ai1cs-container { aspect-ratio: unset; height: 360px; } .framer-SOeVu .framer-cnkq1g-container { aspect-ratio: 0.7934782608695652 / 1; height: var(--framer-aspect-ratio-supported, 460px); } .framer-SOeVu .framer-av3v0l-container, .framer-SOeVu .framer-wxxndk-container { aspect-ratio: 0.9125 / 1; height: var(--framer-aspect-ratio-supported, 400px); } .framer-SOeVu .framer-tjru7y-container { aspect-ratio: 0.9125 / 1; height: var(--framer-aspect-ratio-supported, 827px); } .framer-SOeVu .framer-p25hjm { order: 1; padding: 64px 28px 64px 28px; } .framer-SOeVu .framer-1o2uo1f { gap: 24px 24px; } .framer-SOeVu .framer-153zaw1 { aspect-ratio: 0.8920454545454546 / 1; height: var(--framer-aspect-ratio-supported, 264px); } .framer-SOeVu .framer-1tfszbz { gap: 24px 24px; order: 0; } .framer-SOeVu .framer-ywystf { order: 1; padding: 0px; } .framer-SOeVu .framer-tiz997-container { order: 2; } .framer-SOeVu .framer-1tch00b-container { order: 3; } .framer-SOeVu .framer-1bo82y3 { order: 1; } .framer-SOeVu .framer-1brgduy { order: 2; padding: 124px 28px 124px 28px; }}`, `@media (max-width: 809.98px) { .framer-SOeVu.framer-72rtr7 { width: 390px; } .framer-SOeVu .framer-yfnwk { padding: 0px 16px 48px 16px; } .framer-SOeVu .framer-1t1vvx { gap: 48px; } .framer-SOeVu .framer-1xs976g { align-content: flex-start; align-items: flex-start; padding: 96px 0px 0px 0px; } .framer-SOeVu .framer-374cc1 { gap: 32px; } .framer-SOeVu .framer-1mrlvxt { align-content: unset; align-items: unset; display: grid; flex: 1 0 0px; gap: 24px 24px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(1, minmax(50px, 1fr)); order: 0; } .framer-SOeVu .framer-1a0sx0z { align-self: start; flex: none; justify-self: start; width: 100%; } .framer-SOeVu .framer-pixyki-container { aspect-ratio: 1.028735632183908 / 1; height: var(--framer-aspect-ratio-supported, 348px); } .framer-SOeVu .framer-1686vfi { flex: none; width: min-content; } .framer-SOeVu .framer-tjru7y-container { aspect-ratio: 0.9944444444444445 / 1; height: var(--framer-aspect-ratio-supported, 1px); } .framer-SOeVu .framer-p25hjm { padding: 48px 16px 48px 16px; } .framer-SOeVu .framer-1qkqjzg, .framer-SOeVu .framer-xuku9u { align-content: flex-start; align-items: flex-start; gap: 56px; } .framer-SOeVu .framer-6cl2lm { order: 0; } .framer-SOeVu .framer-1o2uo1f { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 32px 32px; justify-content: flex-start; order: 1; } .framer-SOeVu .framer-153zaw1 { align-self: unset; aspect-ratio: unset; height: 360px; } .framer-SOeVu .framer-1xlfk9t { align-self: unset; width: 100%; } .framer-SOeVu .framer-9t640p { align-self: unset; height: min-content; } .framer-SOeVu .framer-1tfszbz { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 32px 32px; justify-content: flex-start; order: 0; } .framer-SOeVu .framer-1jika3t { align-self: unset; order: 0; width: 100%; } .framer-SOeVu .framer-1gyi63z { min-height: 231px; } .framer-SOeVu .framer-1kg7wyc { align-self: unset; order: 3; width: 100%; } .framer-SOeVu .framer-17kxzk5 { align-self: unset; order: 1; width: 356px; } .framer-SOeVu .framer-1brgduy { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 32px; justify-content: flex-start; padding: 48px 16px 48px 16px; } .framer-SOeVu .framer-r1u79e { flex: none; width: 100%; }}`], `framer-SOeVu`), Ln = In, In.displayName = `Home`, In.defaultProps = {
        height: 6153,
        width: 1200
    }, C(In, [{
        explicitInter: !0,
        fonts: [{
            cssFamilyName: `Funnel Sans`,
            source: `google`,
            style: `normal`,
            uiFamilyName: `Funnel Sans`,
            url: `/fonts/OpNfno8Dg9bX6Bsp3Wq69RB-VukSVv3aISFAcn6Ee29NnDyL7w.woff2`,
            weight: `700`
        }, {
            cssFamilyName: `Inter`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter`,
            unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
            url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
            weight: `400`
        }, {
            cssFamilyName: `Inter`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter`,
            unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
            url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
            weight: `400`
        }, {
            cssFamilyName: `Inter`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter`,
            unicodeRange: `U+1F00-1FFF`,
            url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
            weight: `400`
        }, {
            cssFamilyName: `Inter`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter`,
            unicodeRange: `U+0370-03FF`,
            url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
            weight: `400`
        }, {
            cssFamilyName: `Inter`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter`,
            unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
            url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
            weight: `400`
        }, {
            cssFamilyName: `Inter`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter`,
            unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
            url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
            weight: `400`
        }, {
            cssFamilyName: `Inter`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter`,
            unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
            url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
            weight: `400`
        }, {
            cssFamilyName: `Funnel Sans`,
            source: `google`,
            style: `normal`,
            uiFamilyName: `Funnel Sans`,
            url: `/fonts/OpNfno8Dg9bX6Bsp3Wq69RB-VukSVv3aISFAp3mEe29NnDyL7w.woff2`,
            weight: `500`
        }, {
            cssFamilyName: `Inter Display`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter Display`,
            unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
            url: `https://framerusercontent.com/assets/gazZKZuUEtvr9ULhdA4SprP0AZ0.woff2`,
            weight: `600`
        }, {
            cssFamilyName: `Inter Display`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter Display`,
            unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
            url: `https://framerusercontent.com/assets/pe8RoujoPxuTZhqoNzYqHX2MXA.woff2`,
            weight: `600`
        }, {
            cssFamilyName: `Inter Display`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter Display`,
            unicodeRange: `U+1F00-1FFF`,
            url: `https://framerusercontent.com/assets/teGhWnhH3bCqefKGsIsqFy3hK8.woff2`,
            weight: `600`
        }, {
            cssFamilyName: `Inter Display`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter Display`,
            unicodeRange: `U+0370-03FF`,
            url: `https://framerusercontent.com/assets/qQHxgTnEk6Czu1yW4xS82HQWFOk.woff2`,
            weight: `600`
        }, {
            cssFamilyName: `Inter Display`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter Display`,
            unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
            url: `https://framerusercontent.com/assets/MJ3N6lfN4iP5Um8rJGqLYl03tE.woff2`,
            weight: `600`
        }, {
            cssFamilyName: `Inter Display`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter Display`,
            unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
            url: `https://framerusercontent.com/assets/PfdOpgzFf7N2Uye9JX7xRKYTgSc.woff2`,
            weight: `600`
        }, {
            cssFamilyName: `Inter Display`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter Display`,
            unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
            url: `https://framerusercontent.com/assets/0SEEmmWc3vovhaai4RlRQSWRrz0.woff2`,
            weight: `600`
        }]
    }, ...tn, ...nn, ...rn, ...on, ...sn, ...cn, ...ln, ...un, ...dn, ...ue(je), ...ue(he), ...ue(De)], {
        supportsExplicitInterCodegen: !0
    }), In.loader = {
        load: (e, t) => {
            let n = t.locale,
                r = E.get(Sn(), n),
                i = E.get(Cn(), n),
                a = E.get(wn(), n),
                o = E.get(Tn(), n),
                s = E.get(En(), n),
                c = E.get(Dn(), n),
                l = E.get(On(), n),
                u = E.get(kn(), n);
            return Promise.allSettled([r.preload(), i.preload(), a.preload(), o.preload(), s.preload(), c.preload(), l.preload(), u.preload(), T(_e, {}, t), T(Xe, {}, t), T(Ot, {}, t), T(Qt, {}, t), T(Ce, {}, t), (async () => {
                let e = await r.readMaybeAsync() ?? [];
                return Promise.allSettled(e.flatMap(e => T(V, {}, t)))
            })(), (async () => {
                let e = await a.readMaybeAsync() ?? [];
                return Promise.allSettled(e.flatMap(e => T(V, {}, t)))
            })(), (async () => {
                let e = await o.readMaybeAsync() ?? [];
                return Promise.allSettled(e.flatMap(e => T(V, {}, t)))
            })(), (async () => {
                let e = await s.readMaybeAsync() ?? [];
                return Promise.allSettled(e.flatMap(e => T(V, {}, t)))
            })(), (async () => {
                let e = await c.readMaybeAsync() ?? [];
                return Promise.allSettled(e.flatMap(e => T(V, {}, t)))
            })(), (async () => {
                let e = await l.readMaybeAsync() ?? [];
                return Promise.allSettled(e.flatMap(e => T(V, {}, t)))
            })(), (async () => {
                let e = await u.readMaybeAsync() ?? [];
                return Promise.allSettled(e.flatMap(e => T(V, {}, t)))
            })()])
        }
    }, Rn = {
        exports: {
            default: {
                type: `reactComponent`,
                name: `FrameraugiA20Il`,
                slots: [],
                annotations: {
                    framerAutoSizeImages: `true`,
                    framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"EYoQEjUf7":{"layout":["fixed","auto"]},"wwA4IuWSU":{"layout":["fixed","auto"]}}}`,
                    framerComponentViewportWidth: `true`,
                    framerDisplayContentsDiv: `false`,
                    framerImmutableVariables: `true`,
                    framerResponsiveScreen: `true`,
                    framerAcceptsLayoutTemplate: `true`,
                    framerIntrinsicWidth: `1200`,
                    framerLayoutTemplateFlowEffect: `true`,
                    framerColorSyntax: `true`,
                    framerIntrinsicHeight: `6153`,
                    framerContractVersion: `1`,
                    framerScrollSections: `{"hzXU8z4Yn":{"pattern":":hzXU8z4Yn","name":"start-a-project"}}`
                }
            },
            queryParamNames: {
                type: `variable`,
                annotations: {
                    framerContractVersion: `1`
                }
            },
            Props: {
                type: `tsType`,
                annotations: {
                    framerContractVersion: `1`
                }
            },
            __FramerMetadata__: {
                type: `variable`
            }
        }
    }
}))();
export {
    Rn as __FramerMetadata__, Ln as
    default, mn as queryParamNames
};
//# sourceMappingURL=H3ZHfYRnwheZWfWNKnmcpojL_Ch-g70vEZZ-kv_IJfg.CRf_s7YI.mjs.map