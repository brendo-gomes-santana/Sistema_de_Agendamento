"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb2, mod) => function __require() {
  return mod || (0, cb2[__getOwnPropNames(cb2)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/@prisma/client/runtime/library.js
var require_library = __commonJS({
  "node_modules/@prisma/client/runtime/library.js"(exports, module) {
    "use strict";
    var cp = Object.create;
    var lr = Object.defineProperty;
    var pp = Object.getOwnPropertyDescriptor;
    var fp = Object.getOwnPropertyNames;
    var dp = Object.getPrototypeOf;
    var mp = Object.prototype.hasOwnProperty;
    var a = (e, t) => lr(e, "name", { value: t, configurable: true });
    var F = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
    var mn = (e, t) => {
      for (var r in t)
        lr(e, r, { get: t[r], enumerable: true });
    };
    var hs = (e, t, r, n) => {
      if (t && typeof t == "object" || typeof t == "function")
        for (let i of fp(t))
          !mp.call(e, i) && i !== r && lr(e, i, { get: () => t[i], enumerable: !(n = pp(t, i)) || n.enumerable });
      return e;
    };
    var O = (e, t, r) => (r = e != null ? cp(dp(e)) : {}, hs(t || !e || !e.__esModule ? lr(r, "default", { value: e, enumerable: true }) : r, e));
    var gp = (e) => hs(lr({}, "__esModule", { value: true }), e);
    var ys = F((ay, gn) => {
      var hp = function() {
        var e = String.fromCharCode, t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", n = {};
        function i(s, l) {
          if (!n[s]) {
            n[s] = {};
            for (var u = 0; u < s.length; u++)
              n[s][s.charAt(u)] = u;
          }
          return n[s][l];
        }
        a(i, "getBaseValue");
        var o = { compressToBase64: function(s) {
          if (s == null)
            return "";
          var l = o._compress(s, 6, function(u) {
            return t.charAt(u);
          });
          switch (l.length % 4) {
            default:
            case 0:
              return l;
            case 1:
              return l + "===";
            case 2:
              return l + "==";
            case 3:
              return l + "=";
          }
        }, decompressFromBase64: function(s) {
          return s == null ? "" : s == "" ? null : o._decompress(s.length, 32, function(l) {
            return i(t, s.charAt(l));
          });
        }, compressToUTF16: function(s) {
          return s == null ? "" : o._compress(s, 15, function(l) {
            return e(l + 32);
          }) + " ";
        }, decompressFromUTF16: function(s) {
          return s == null ? "" : s == "" ? null : o._decompress(s.length, 16384, function(l) {
            return s.charCodeAt(l) - 32;
          });
        }, compressToUint8Array: function(s) {
          for (var l = o.compress(s), u = new Uint8Array(l.length * 2), c = 0, p = l.length; c < p; c++) {
            var f = l.charCodeAt(c);
            u[c * 2] = f >>> 8, u[c * 2 + 1] = f % 256;
          }
          return u;
        }, decompressFromUint8Array: function(s) {
          if (s == null)
            return o.decompress(s);
          for (var l = new Array(s.length / 2), u = 0, c = l.length; u < c; u++)
            l[u] = s[u * 2] * 256 + s[u * 2 + 1];
          var p = [];
          return l.forEach(function(f) {
            p.push(e(f));
          }), o.decompress(p.join(""));
        }, compressToEncodedURIComponent: function(s) {
          return s == null ? "" : o._compress(s, 6, function(l) {
            return r.charAt(l);
          });
        }, decompressFromEncodedURIComponent: function(s) {
          return s == null ? "" : s == "" ? null : (s = s.replace(/ /g, "+"), o._decompress(s.length, 32, function(l) {
            return i(r, s.charAt(l));
          }));
        }, compress: function(s) {
          return o._compress(s, 16, function(l) {
            return e(l);
          });
        }, _compress: function(s, l, u) {
          if (s == null)
            return "";
          var c, p, f = {}, d = {}, m = "", h = "", g = "", b = 2, y = 3, x = 2, E = [], w = 0, T = 0, C;
          for (C = 0; C < s.length; C += 1)
            if (m = s.charAt(C), Object.prototype.hasOwnProperty.call(f, m) || (f[m] = y++, d[m] = true), h = g + m, Object.prototype.hasOwnProperty.call(f, h))
              g = h;
            else {
              if (Object.prototype.hasOwnProperty.call(d, g)) {
                if (g.charCodeAt(0) < 256) {
                  for (c = 0; c < x; c++)
                    w = w << 1, T == l - 1 ? (T = 0, E.push(u(w)), w = 0) : T++;
                  for (p = g.charCodeAt(0), c = 0; c < 8; c++)
                    w = w << 1 | p & 1, T == l - 1 ? (T = 0, E.push(u(w)), w = 0) : T++, p = p >> 1;
                } else {
                  for (p = 1, c = 0; c < x; c++)
                    w = w << 1 | p, T == l - 1 ? (T = 0, E.push(u(w)), w = 0) : T++, p = 0;
                  for (p = g.charCodeAt(0), c = 0; c < 16; c++)
                    w = w << 1 | p & 1, T == l - 1 ? (T = 0, E.push(u(w)), w = 0) : T++, p = p >> 1;
                }
                b--, b == 0 && (b = Math.pow(2, x), x++), delete d[g];
              } else
                for (p = f[g], c = 0; c < x; c++)
                  w = w << 1 | p & 1, T == l - 1 ? (T = 0, E.push(u(w)), w = 0) : T++, p = p >> 1;
              b--, b == 0 && (b = Math.pow(2, x), x++), f[h] = y++, g = String(m);
            }
          if (g !== "") {
            if (Object.prototype.hasOwnProperty.call(d, g)) {
              if (g.charCodeAt(0) < 256) {
                for (c = 0; c < x; c++)
                  w = w << 1, T == l - 1 ? (T = 0, E.push(u(w)), w = 0) : T++;
                for (p = g.charCodeAt(0), c = 0; c < 8; c++)
                  w = w << 1 | p & 1, T == l - 1 ? (T = 0, E.push(u(w)), w = 0) : T++, p = p >> 1;
              } else {
                for (p = 1, c = 0; c < x; c++)
                  w = w << 1 | p, T == l - 1 ? (T = 0, E.push(u(w)), w = 0) : T++, p = 0;
                for (p = g.charCodeAt(0), c = 0; c < 16; c++)
                  w = w << 1 | p & 1, T == l - 1 ? (T = 0, E.push(u(w)), w = 0) : T++, p = p >> 1;
              }
              b--, b == 0 && (b = Math.pow(2, x), x++), delete d[g];
            } else
              for (p = f[g], c = 0; c < x; c++)
                w = w << 1 | p & 1, T == l - 1 ? (T = 0, E.push(u(w)), w = 0) : T++, p = p >> 1;
            b--, b == 0 && (b = Math.pow(2, x), x++);
          }
          for (p = 2, c = 0; c < x; c++)
            w = w << 1 | p & 1, T == l - 1 ? (T = 0, E.push(u(w)), w = 0) : T++, p = p >> 1;
          for (; ; )
            if (w = w << 1, T == l - 1) {
              E.push(u(w));
              break;
            } else
              T++;
          return E.join("");
        }, decompress: function(s) {
          return s == null ? "" : s == "" ? null : o._decompress(s.length, 32768, function(l) {
            return s.charCodeAt(l);
          });
        }, _decompress: function(s, l, u) {
          var c = [], p, f = 4, d = 4, m = 3, h = "", g = [], b, y, x, E, w, T, C, S = { val: u(0), position: l, index: 1 };
          for (b = 0; b < 3; b += 1)
            c[b] = b;
          for (x = 0, w = Math.pow(2, 2), T = 1; T != w; )
            E = S.val & S.position, S.position >>= 1, S.position == 0 && (S.position = l, S.val = u(S.index++)), x |= (E > 0 ? 1 : 0) * T, T <<= 1;
          switch (p = x) {
            case 0:
              for (x = 0, w = Math.pow(2, 8), T = 1; T != w; )
                E = S.val & S.position, S.position >>= 1, S.position == 0 && (S.position = l, S.val = u(S.index++)), x |= (E > 0 ? 1 : 0) * T, T <<= 1;
              C = e(x);
              break;
            case 1:
              for (x = 0, w = Math.pow(2, 16), T = 1; T != w; )
                E = S.val & S.position, S.position >>= 1, S.position == 0 && (S.position = l, S.val = u(S.index++)), x |= (E > 0 ? 1 : 0) * T, T <<= 1;
              C = e(x);
              break;
            case 2:
              return "";
          }
          for (c[3] = C, y = C, g.push(C); ; ) {
            if (S.index > s)
              return "";
            for (x = 0, w = Math.pow(2, m), T = 1; T != w; )
              E = S.val & S.position, S.position >>= 1, S.position == 0 && (S.position = l, S.val = u(S.index++)), x |= (E > 0 ? 1 : 0) * T, T <<= 1;
            switch (C = x) {
              case 0:
                for (x = 0, w = Math.pow(2, 8), T = 1; T != w; )
                  E = S.val & S.position, S.position >>= 1, S.position == 0 && (S.position = l, S.val = u(S.index++)), x |= (E > 0 ? 1 : 0) * T, T <<= 1;
                c[d++] = e(x), C = d - 1, f--;
                break;
              case 1:
                for (x = 0, w = Math.pow(2, 16), T = 1; T != w; )
                  E = S.val & S.position, S.position >>= 1, S.position == 0 && (S.position = l, S.val = u(S.index++)), x |= (E > 0 ? 1 : 0) * T, T <<= 1;
                c[d++] = e(x), C = d - 1, f--;
                break;
              case 2:
                return g.join("");
            }
            if (f == 0 && (f = Math.pow(2, m), m++), c[C])
              h = c[C];
            else if (C === d)
              h = y + y.charAt(0);
            else
              return null;
            g.push(h), c[d++] = y + h.charAt(0), f--, y = h, f == 0 && (f = Math.pow(2, m), m++);
          }
        } };
        return o;
      }();
      typeof gn < "u" && gn != null && (gn.exports = hp);
    });
    var As = F((Ey, Ts) => {
      "use strict";
      Ts.exports = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] };
    });
    var ji = F((wy, Ps) => {
      var ur = As(), Ss = {};
      for (let e of Object.keys(ur))
        Ss[ur[e]] = e;
      var P = { rgb: { channels: 3, labels: "rgb" }, hsl: { channels: 3, labels: "hsl" }, hsv: { channels: 3, labels: "hsv" }, hwb: { channels: 3, labels: "hwb" }, cmyk: { channels: 4, labels: "cmyk" }, xyz: { channels: 3, labels: "xyz" }, lab: { channels: 3, labels: "lab" }, lch: { channels: 3, labels: "lch" }, hex: { channels: 1, labels: ["hex"] }, keyword: { channels: 1, labels: ["keyword"] }, ansi16: { channels: 1, labels: ["ansi16"] }, ansi256: { channels: 1, labels: ["ansi256"] }, hcg: { channels: 3, labels: ["h", "c", "g"] }, apple: { channels: 3, labels: ["r16", "g16", "b16"] }, gray: { channels: 1, labels: ["gray"] } };
      Ps.exports = P;
      for (let e of Object.keys(P)) {
        if (!("channels" in P[e]))
          throw new Error("missing channels property: " + e);
        if (!("labels" in P[e]))
          throw new Error("missing channel labels property: " + e);
        if (P[e].labels.length !== P[e].channels)
          throw new Error("channel and label counts mismatch: " + e);
        let { channels: t, labels: r } = P[e];
        delete P[e].channels, delete P[e].labels, Object.defineProperty(P[e], "channels", { value: t }), Object.defineProperty(P[e], "labels", { value: r });
      }
      P.rgb.hsl = function(e) {
        let t = e[0] / 255, r = e[1] / 255, n = e[2] / 255, i = Math.min(t, r, n), o = Math.max(t, r, n), s = o - i, l, u;
        o === i ? l = 0 : t === o ? l = (r - n) / s : r === o ? l = 2 + (n - t) / s : n === o && (l = 4 + (t - r) / s), l = Math.min(l * 60, 360), l < 0 && (l += 360);
        let c = (i + o) / 2;
        return o === i ? u = 0 : c <= 0.5 ? u = s / (o + i) : u = s / (2 - o - i), [l, u * 100, c * 100];
      };
      P.rgb.hsv = function(e) {
        let t, r, n, i, o, s = e[0] / 255, l = e[1] / 255, u = e[2] / 255, c = Math.max(s, l, u), p = c - Math.min(s, l, u), f = a(function(d) {
          return (c - d) / 6 / p + 1 / 2;
        }, "diffc");
        return p === 0 ? (i = 0, o = 0) : (o = p / c, t = f(s), r = f(l), n = f(u), s === c ? i = n - r : l === c ? i = 1 / 3 + t - n : u === c && (i = 2 / 3 + r - t), i < 0 ? i += 1 : i > 1 && (i -= 1)), [i * 360, o * 100, c * 100];
      };
      P.rgb.hwb = function(e) {
        let t = e[0], r = e[1], n = e[2], i = P.rgb.hsl(e)[0], o = 1 / 255 * Math.min(t, Math.min(r, n));
        return n = 1 - 1 / 255 * Math.max(t, Math.max(r, n)), [i, o * 100, n * 100];
      };
      P.rgb.cmyk = function(e) {
        let t = e[0] / 255, r = e[1] / 255, n = e[2] / 255, i = Math.min(1 - t, 1 - r, 1 - n), o = (1 - t - i) / (1 - i) || 0, s = (1 - r - i) / (1 - i) || 0, l = (1 - n - i) / (1 - i) || 0;
        return [o * 100, s * 100, l * 100, i * 100];
      };
      function yp(e, t) {
        return (e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2 + (e[2] - t[2]) ** 2;
      }
      a(yp, "comparativeDistance");
      P.rgb.keyword = function(e) {
        let t = Ss[e];
        if (t)
          return t;
        let r = 1 / 0, n;
        for (let i of Object.keys(ur)) {
          let o = ur[i], s = yp(e, o);
          s < r && (r = s, n = i);
        }
        return n;
      };
      P.keyword.rgb = function(e) {
        return ur[e];
      };
      P.rgb.xyz = function(e) {
        let t = e[0] / 255, r = e[1] / 255, n = e[2] / 255;
        t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92, r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92, n = n > 0.04045 ? ((n + 0.055) / 1.055) ** 2.4 : n / 12.92;
        let i = t * 0.4124 + r * 0.3576 + n * 0.1805, o = t * 0.2126 + r * 0.7152 + n * 0.0722, s = t * 0.0193 + r * 0.1192 + n * 0.9505;
        return [i * 100, o * 100, s * 100];
      };
      P.rgb.lab = function(e) {
        let t = P.rgb.xyz(e), r = t[0], n = t[1], i = t[2];
        r /= 95.047, n /= 100, i /= 108.883, r = r > 8856e-6 ? r ** (1 / 3) : 7.787 * r + 16 / 116, n = n > 8856e-6 ? n ** (1 / 3) : 7.787 * n + 16 / 116, i = i > 8856e-6 ? i ** (1 / 3) : 7.787 * i + 16 / 116;
        let o = 116 * n - 16, s = 500 * (r - n), l = 200 * (n - i);
        return [o, s, l];
      };
      P.hsl.rgb = function(e) {
        let t = e[0] / 360, r = e[1] / 100, n = e[2] / 100, i, o, s;
        if (r === 0)
          return s = n * 255, [s, s, s];
        n < 0.5 ? i = n * (1 + r) : i = n + r - n * r;
        let l = 2 * n - i, u = [0, 0, 0];
        for (let c = 0; c < 3; c++)
          o = t + 1 / 3 * -(c - 1), o < 0 && o++, o > 1 && o--, 6 * o < 1 ? s = l + (i - l) * 6 * o : 2 * o < 1 ? s = i : 3 * o < 2 ? s = l + (i - l) * (2 / 3 - o) * 6 : s = l, u[c] = s * 255;
        return u;
      };
      P.hsl.hsv = function(e) {
        let t = e[0], r = e[1] / 100, n = e[2] / 100, i = r, o = Math.max(n, 0.01);
        n *= 2, r *= n <= 1 ? n : 2 - n, i *= o <= 1 ? o : 2 - o;
        let s = (n + r) / 2, l = n === 0 ? 2 * i / (o + i) : 2 * r / (n + r);
        return [t, l * 100, s * 100];
      };
      P.hsv.rgb = function(e) {
        let t = e[0] / 60, r = e[1] / 100, n = e[2] / 100, i = Math.floor(t) % 6, o = t - Math.floor(t), s = 255 * n * (1 - r), l = 255 * n * (1 - r * o), u = 255 * n * (1 - r * (1 - o));
        switch (n *= 255, i) {
          case 0:
            return [n, u, s];
          case 1:
            return [l, n, s];
          case 2:
            return [s, n, u];
          case 3:
            return [s, l, n];
          case 4:
            return [u, s, n];
          case 5:
            return [n, s, l];
        }
      };
      P.hsv.hsl = function(e) {
        let t = e[0], r = e[1] / 100, n = e[2] / 100, i = Math.max(n, 0.01), o, s;
        s = (2 - r) * n;
        let l = (2 - r) * i;
        return o = r * i, o /= l <= 1 ? l : 2 - l, o = o || 0, s /= 2, [t, o * 100, s * 100];
      };
      P.hwb.rgb = function(e) {
        let t = e[0] / 360, r = e[1] / 100, n = e[2] / 100, i = r + n, o;
        i > 1 && (r /= i, n /= i);
        let s = Math.floor(6 * t), l = 1 - n;
        o = 6 * t - s, (s & 1) !== 0 && (o = 1 - o);
        let u = r + o * (l - r), c, p, f;
        switch (s) {
          default:
          case 6:
          case 0:
            c = l, p = u, f = r;
            break;
          case 1:
            c = u, p = l, f = r;
            break;
          case 2:
            c = r, p = l, f = u;
            break;
          case 3:
            c = r, p = u, f = l;
            break;
          case 4:
            c = u, p = r, f = l;
            break;
          case 5:
            c = l, p = r, f = u;
            break;
        }
        return [c * 255, p * 255, f * 255];
      };
      P.cmyk.rgb = function(e) {
        let t = e[0] / 100, r = e[1] / 100, n = e[2] / 100, i = e[3] / 100, o = 1 - Math.min(1, t * (1 - i) + i), s = 1 - Math.min(1, r * (1 - i) + i), l = 1 - Math.min(1, n * (1 - i) + i);
        return [o * 255, s * 255, l * 255];
      };
      P.xyz.rgb = function(e) {
        let t = e[0] / 100, r = e[1] / 100, n = e[2] / 100, i, o, s;
        return i = t * 3.2406 + r * -1.5372 + n * -0.4986, o = t * -0.9689 + r * 1.8758 + n * 0.0415, s = t * 0.0557 + r * -0.204 + n * 1.057, i = i > 31308e-7 ? 1.055 * i ** (1 / 2.4) - 0.055 : i * 12.92, o = o > 31308e-7 ? 1.055 * o ** (1 / 2.4) - 0.055 : o * 12.92, s = s > 31308e-7 ? 1.055 * s ** (1 / 2.4) - 0.055 : s * 12.92, i = Math.min(Math.max(0, i), 1), o = Math.min(Math.max(0, o), 1), s = Math.min(Math.max(0, s), 1), [i * 255, o * 255, s * 255];
      };
      P.xyz.lab = function(e) {
        let t = e[0], r = e[1], n = e[2];
        t /= 95.047, r /= 100, n /= 108.883, t = t > 8856e-6 ? t ** (1 / 3) : 7.787 * t + 16 / 116, r = r > 8856e-6 ? r ** (1 / 3) : 7.787 * r + 16 / 116, n = n > 8856e-6 ? n ** (1 / 3) : 7.787 * n + 16 / 116;
        let i = 116 * r - 16, o = 500 * (t - r), s = 200 * (r - n);
        return [i, o, s];
      };
      P.lab.xyz = function(e) {
        let t = e[0], r = e[1], n = e[2], i, o, s;
        o = (t + 16) / 116, i = r / 500 + o, s = o - n / 200;
        let l = o ** 3, u = i ** 3, c = s ** 3;
        return o = l > 8856e-6 ? l : (o - 16 / 116) / 7.787, i = u > 8856e-6 ? u : (i - 16 / 116) / 7.787, s = c > 8856e-6 ? c : (s - 16 / 116) / 7.787, i *= 95.047, o *= 100, s *= 108.883, [i, o, s];
      };
      P.lab.lch = function(e) {
        let t = e[0], r = e[1], n = e[2], i;
        i = Math.atan2(n, r) * 360 / 2 / Math.PI, i < 0 && (i += 360);
        let s = Math.sqrt(r * r + n * n);
        return [t, s, i];
      };
      P.lch.lab = function(e) {
        let t = e[0], r = e[1], i = e[2] / 360 * 2 * Math.PI, o = r * Math.cos(i), s = r * Math.sin(i);
        return [t, o, s];
      };
      P.rgb.ansi16 = function(e, t = null) {
        let [r, n, i] = e, o = t === null ? P.rgb.hsv(e)[2] : t;
        if (o = Math.round(o / 50), o === 0)
          return 30;
        let s = 30 + (Math.round(i / 255) << 2 | Math.round(n / 255) << 1 | Math.round(r / 255));
        return o === 2 && (s += 60), s;
      };
      P.hsv.ansi16 = function(e) {
        return P.rgb.ansi16(P.hsv.rgb(e), e[2]);
      };
      P.rgb.ansi256 = function(e) {
        let t = e[0], r = e[1], n = e[2];
        return t === r && r === n ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(r / 255 * 5) + Math.round(n / 255 * 5);
      };
      P.ansi16.rgb = function(e) {
        let t = e % 10;
        if (t === 0 || t === 7)
          return e > 50 && (t += 3.5), t = t / 10.5 * 255, [t, t, t];
        let r = (~~(e > 50) + 1) * 0.5, n = (t & 1) * r * 255, i = (t >> 1 & 1) * r * 255, o = (t >> 2 & 1) * r * 255;
        return [n, i, o];
      };
      P.ansi256.rgb = function(e) {
        if (e >= 232) {
          let o = (e - 232) * 10 + 8;
          return [o, o, o];
        }
        e -= 16;
        let t, r = Math.floor(e / 36) / 5 * 255, n = Math.floor((t = e % 36) / 6) / 5 * 255, i = t % 6 / 5 * 255;
        return [r, n, i];
      };
      P.rgb.hex = function(e) {
        let r = (((Math.round(e[0]) & 255) << 16) + ((Math.round(e[1]) & 255) << 8) + (Math.round(e[2]) & 255)).toString(16).toUpperCase();
        return "000000".substring(r.length) + r;
      };
      P.hex.rgb = function(e) {
        let t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
        if (!t)
          return [0, 0, 0];
        let r = t[0];
        t[0].length === 3 && (r = r.split("").map((l) => l + l).join(""));
        let n = parseInt(r, 16), i = n >> 16 & 255, o = n >> 8 & 255, s = n & 255;
        return [i, o, s];
      };
      P.rgb.hcg = function(e) {
        let t = e[0] / 255, r = e[1] / 255, n = e[2] / 255, i = Math.max(Math.max(t, r), n), o = Math.min(Math.min(t, r), n), s = i - o, l, u;
        return s < 1 ? l = o / (1 - s) : l = 0, s <= 0 ? u = 0 : i === t ? u = (r - n) / s % 6 : i === r ? u = 2 + (n - t) / s : u = 4 + (t - r) / s, u /= 6, u %= 1, [u * 360, s * 100, l * 100];
      };
      P.hsl.hcg = function(e) {
        let t = e[1] / 100, r = e[2] / 100, n = r < 0.5 ? 2 * t * r : 2 * t * (1 - r), i = 0;
        return n < 1 && (i = (r - 0.5 * n) / (1 - n)), [e[0], n * 100, i * 100];
      };
      P.hsv.hcg = function(e) {
        let t = e[1] / 100, r = e[2] / 100, n = t * r, i = 0;
        return n < 1 && (i = (r - n) / (1 - n)), [e[0], n * 100, i * 100];
      };
      P.hcg.rgb = function(e) {
        let t = e[0] / 360, r = e[1] / 100, n = e[2] / 100;
        if (r === 0)
          return [n * 255, n * 255, n * 255];
        let i = [0, 0, 0], o = t % 1 * 6, s = o % 1, l = 1 - s, u = 0;
        switch (Math.floor(o)) {
          case 0:
            i[0] = 1, i[1] = s, i[2] = 0;
            break;
          case 1:
            i[0] = l, i[1] = 1, i[2] = 0;
            break;
          case 2:
            i[0] = 0, i[1] = 1, i[2] = s;
            break;
          case 3:
            i[0] = 0, i[1] = l, i[2] = 1;
            break;
          case 4:
            i[0] = s, i[1] = 0, i[2] = 1;
            break;
          default:
            i[0] = 1, i[1] = 0, i[2] = l;
        }
        return u = (1 - r) * n, [(r * i[0] + u) * 255, (r * i[1] + u) * 255, (r * i[2] + u) * 255];
      };
      P.hcg.hsv = function(e) {
        let t = e[1] / 100, r = e[2] / 100, n = t + r * (1 - t), i = 0;
        return n > 0 && (i = t / n), [e[0], i * 100, n * 100];
      };
      P.hcg.hsl = function(e) {
        let t = e[1] / 100, n = e[2] / 100 * (1 - t) + 0.5 * t, i = 0;
        return n > 0 && n < 0.5 ? i = t / (2 * n) : n >= 0.5 && n < 1 && (i = t / (2 * (1 - n))), [e[0], i * 100, n * 100];
      };
      P.hcg.hwb = function(e) {
        let t = e[1] / 100, r = e[2] / 100, n = t + r * (1 - t);
        return [e[0], (n - t) * 100, (1 - n) * 100];
      };
      P.hwb.hcg = function(e) {
        let t = e[1] / 100, n = 1 - e[2] / 100, i = n - t, o = 0;
        return i < 1 && (o = (n - i) / (1 - i)), [e[0], i * 100, o * 100];
      };
      P.apple.rgb = function(e) {
        return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255];
      };
      P.rgb.apple = function(e) {
        return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535];
      };
      P.gray.rgb = function(e) {
        return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255];
      };
      P.gray.hsl = function(e) {
        return [0, 0, e[0]];
      };
      P.gray.hsv = P.gray.hsl;
      P.gray.hwb = function(e) {
        return [0, 100, e[0]];
      };
      P.gray.cmyk = function(e) {
        return [0, 0, 0, e[0]];
      };
      P.gray.lab = function(e) {
        return [e[0], 0, 0];
      };
      P.gray.hex = function(e) {
        let t = Math.round(e[0] / 100 * 255) & 255, n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
        return "000000".substring(n.length) + n;
      };
      P.rgb.gray = function(e) {
        return [(e[0] + e[1] + e[2]) / 3 / 255 * 100];
      };
    });
    var Cs = F((vy, _s) => {
      var hn = ji();
      function bp() {
        let e = {}, t = Object.keys(hn);
        for (let r = t.length, n = 0; n < r; n++)
          e[t[n]] = { distance: -1, parent: null };
        return e;
      }
      a(bp, "buildGraph");
      function Ep(e) {
        let t = bp(), r = [e];
        for (t[e].distance = 0; r.length; ) {
          let n = r.pop(), i = Object.keys(hn[n]);
          for (let o = i.length, s = 0; s < o; s++) {
            let l = i[s], u = t[l];
            u.distance === -1 && (u.distance = t[n].distance + 1, u.parent = n, r.unshift(l));
          }
        }
        return t;
      }
      a(Ep, "deriveBFS");
      function wp(e, t) {
        return function(r) {
          return t(e(r));
        };
      }
      a(wp, "link");
      function xp(e, t) {
        let r = [t[e].parent, e], n = hn[t[e].parent][e], i = t[e].parent;
        for (; t[i].parent; )
          r.unshift(t[i].parent), n = wp(hn[t[i].parent][i], n), i = t[i].parent;
        return n.conversion = r, n;
      }
      a(xp, "wrapConversion");
      _s.exports = function(e) {
        let t = Ep(e), r = {}, n = Object.keys(t);
        for (let i = n.length, o = 0; o < i; o++) {
          let s = n[o];
          t[s].parent !== null && (r[s] = xp(s, t));
        }
        return r;
      };
    });
    var Ms = F((Ay, Os) => {
      var Bi = ji(), vp = Cs(), St = {}, Tp = Object.keys(Bi);
      function Ap(e) {
        let t = a(function(...r) {
          let n = r[0];
          return n == null ? n : (n.length > 1 && (r = n), e(r));
        }, "wrappedFn");
        return "conversion" in e && (t.conversion = e.conversion), t;
      }
      a(Ap, "wrapRaw");
      function Sp(e) {
        let t = a(function(...r) {
          let n = r[0];
          if (n == null)
            return n;
          n.length > 1 && (r = n);
          let i = e(r);
          if (typeof i == "object")
            for (let o = i.length, s = 0; s < o; s++)
              i[s] = Math.round(i[s]);
          return i;
        }, "wrappedFn");
        return "conversion" in e && (t.conversion = e.conversion), t;
      }
      a(Sp, "wrapRounded");
      Tp.forEach((e) => {
        St[e] = {}, Object.defineProperty(St[e], "channels", { value: Bi[e].channels }), Object.defineProperty(St[e], "labels", { value: Bi[e].labels });
        let t = vp(e);
        Object.keys(t).forEach((n) => {
          let i = t[n];
          St[e][n] = Sp(i), St[e][n].raw = Ap(i);
        });
      });
      Os.exports = St;
    });
    var ks = F((Py, Ds) => {
      "use strict";
      var Ns = a((e, t) => (...r) => `\x1B[${e(...r) + t}m`, "wrapAnsi16"), Rs = a((e, t) => (...r) => {
        let n = e(...r);
        return `\x1B[${38 + t};5;${n}m`;
      }, "wrapAnsi256"), Fs = a((e, t) => (...r) => {
        let n = e(...r);
        return `\x1B[${38 + t};2;${n[0]};${n[1]};${n[2]}m`;
      }, "wrapAnsi16m"), yn = a((e) => e, "ansi2ansi"), Is = a((e, t, r) => [e, t, r], "rgb2rgb"), Pt = a((e, t, r) => {
        Object.defineProperty(e, t, { get: () => {
          let n = r();
          return Object.defineProperty(e, t, { value: n, enumerable: true, configurable: true }), n;
        }, enumerable: true, configurable: true });
      }, "setLazyProperty"), qi, _t = a((e, t, r, n) => {
        qi === void 0 && (qi = Ms());
        let i = n ? 10 : 0, o = {};
        for (let [s, l] of Object.entries(qi)) {
          let u = s === "ansi16" ? "ansi" : s;
          s === t ? o[u] = e(r, i) : typeof l == "object" && (o[u] = e(l[t], i));
        }
        return o;
      }, "makeDynamicStyles");
      function Pp() {
        let e = /* @__PURE__ */ new Map(), t = { modifier: { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29] }, color: { black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], blackBright: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39] }, bgColor: { bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49] } };
        t.color.gray = t.color.blackBright, t.bgColor.bgGray = t.bgColor.bgBlackBright, t.color.grey = t.color.blackBright, t.bgColor.bgGrey = t.bgColor.bgBlackBright;
        for (let [r, n] of Object.entries(t)) {
          for (let [i, o] of Object.entries(n))
            t[i] = { open: `\x1B[${o[0]}m`, close: `\x1B[${o[1]}m` }, n[i] = t[i], e.set(o[0], o[1]);
          Object.defineProperty(t, r, { value: n, enumerable: false });
        }
        return Object.defineProperty(t, "codes", { value: e, enumerable: false }), t.color.close = "\x1B[39m", t.bgColor.close = "\x1B[49m", Pt(t.color, "ansi", () => _t(Ns, "ansi16", yn, false)), Pt(t.color, "ansi256", () => _t(Rs, "ansi256", yn, false)), Pt(t.color, "ansi16m", () => _t(Fs, "rgb", Is, false)), Pt(t.bgColor, "ansi", () => _t(Ns, "ansi16", yn, true)), Pt(t.bgColor, "ansi256", () => _t(Rs, "ansi256", yn, true)), Pt(t.bgColor, "ansi16m", () => _t(Fs, "rgb", Is, true)), t;
      }
      a(Pp, "assembleStyles");
      Object.defineProperty(Ds, "exports", { enumerable: true, get: Pp });
    });
    var Vi = F((Cy, Ls) => {
      "use strict";
      Ls.exports = (e, t = process.argv) => {
        let r = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", n = t.indexOf(r + e), i = t.indexOf("--");
        return n !== -1 && (i === -1 || n < i);
      };
    });
    var bn = F((Oy, js) => {
      "use strict";
      var _p = require("os"), $s = require("tty"), ve = Vi(), { env: W } = process, We;
      ve("no-color") || ve("no-colors") || ve("color=false") || ve("color=never") ? We = 0 : (ve("color") || ve("colors") || ve("color=true") || ve("color=always")) && (We = 1);
      "FORCE_COLOR" in W && (W.FORCE_COLOR === "true" ? We = 1 : W.FORCE_COLOR === "false" ? We = 0 : We = W.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(W.FORCE_COLOR, 10), 3));
      function Ui(e) {
        return e === 0 ? false : { level: e, hasBasic: true, has256: e >= 2, has16m: e >= 3 };
      }
      a(Ui, "translateLevel");
      function Gi(e, t) {
        if (We === 0)
          return 0;
        if (ve("color=16m") || ve("color=full") || ve("color=truecolor"))
          return 3;
        if (ve("color=256"))
          return 2;
        if (e && !t && We === void 0)
          return 0;
        let r = We || 0;
        if (W.TERM === "dumb")
          return r;
        if (process.platform === "win32") {
          let n = _p.release().split(".");
          return Number(n[0]) >= 10 && Number(n[2]) >= 10586 ? Number(n[2]) >= 14931 ? 3 : 2 : 1;
        }
        if ("CI" in W)
          return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((n) => n in W) || W.CI_NAME === "codeship" ? 1 : r;
        if ("TEAMCITY_VERSION" in W)
          return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(W.TEAMCITY_VERSION) ? 1 : 0;
        if (W.COLORTERM === "truecolor")
          return 3;
        if ("TERM_PROGRAM" in W) {
          let n = parseInt((W.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
          switch (W.TERM_PROGRAM) {
            case "iTerm.app":
              return n >= 3 ? 3 : 2;
            case "Apple_Terminal":
              return 2;
          }
        }
        return /-256(color)?$/i.test(W.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(W.TERM) || "COLORTERM" in W ? 1 : r;
      }
      a(Gi, "supportsColor");
      function Cp(e) {
        let t = Gi(e, e && e.isTTY);
        return Ui(t);
      }
      a(Cp, "getSupportLevel");
      js.exports = { supportsColor: Cp, stdout: Ui(Gi(true, $s.isatty(1))), stderr: Ui(Gi(true, $s.isatty(2))) };
    });
    var qs = F((Ny, Bs) => {
      "use strict";
      var Op = a((e, t, r) => {
        let n = e.indexOf(t);
        if (n === -1)
          return e;
        let i = t.length, o = 0, s = "";
        do
          s += e.substr(o, n - o) + t + r, o = n + i, n = e.indexOf(t, o);
        while (n !== -1);
        return s += e.substr(o), s;
      }, "stringReplaceAll"), Mp = a((e, t, r, n) => {
        let i = 0, o = "";
        do {
          let s = e[n - 1] === "\r";
          o += e.substr(i, (s ? n - 1 : n) - i) + t + (s ? `\r
` : `
`) + r, i = n + 1, n = e.indexOf(`
`, i);
        } while (n !== -1);
        return o += e.substr(i), o;
      }, "stringEncaseCRLFWithFirstIndex");
      Bs.exports = { stringReplaceAll: Op, stringEncaseCRLFWithFirstIndex: Mp };
    });
    var Ks = F((Fy, Qs) => {
      "use strict";
      var Np = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi, Vs = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g, Rp = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/, Fp = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi, Ip = /* @__PURE__ */ new Map([["n", `
`], ["r", "\r"], ["t", "	"], ["b", "\b"], ["f", "\f"], ["v", "\v"], ["0", "\0"], ["\\", "\\"], ["e", "\x1B"], ["a", "\x07"]]);
      function Gs(e) {
        let t = e[0] === "u", r = e[1] === "{";
        return t && !r && e.length === 5 || e[0] === "x" && e.length === 3 ? String.fromCharCode(parseInt(e.slice(1), 16)) : t && r ? String.fromCodePoint(parseInt(e.slice(2, -1), 16)) : Ip.get(e) || e;
      }
      a(Gs, "unescape");
      function Dp(e, t) {
        let r = [], n = t.trim().split(/\s*,\s*/g), i;
        for (let o of n) {
          let s = Number(o);
          if (!Number.isNaN(s))
            r.push(s);
          else if (i = o.match(Rp))
            r.push(i[2].replace(Fp, (l, u, c) => u ? Gs(u) : c));
          else
            throw new Error(`Invalid Chalk template style argument: ${o} (in style '${e}')`);
        }
        return r;
      }
      a(Dp, "parseArguments");
      function kp(e) {
        Vs.lastIndex = 0;
        let t = [], r;
        for (; (r = Vs.exec(e)) !== null; ) {
          let n = r[1];
          if (r[2]) {
            let i = Dp(n, r[2]);
            t.push([n].concat(i));
          } else
            t.push([n]);
        }
        return t;
      }
      a(kp, "parseStyle");
      function Us(e, t) {
        let r = {};
        for (let i of t)
          for (let o of i.styles)
            r[o[0]] = i.inverse ? null : o.slice(1);
        let n = e;
        for (let [i, o] of Object.entries(r))
          if (!!Array.isArray(o)) {
            if (!(i in n))
              throw new Error(`Unknown Chalk style: ${i}`);
            n = o.length > 0 ? n[i](...o) : n[i];
          }
        return n;
      }
      a(Us, "buildStyle");
      Qs.exports = (e, t) => {
        let r = [], n = [], i = [];
        if (t.replace(Np, (o, s, l, u, c, p) => {
          if (s)
            i.push(Gs(s));
          else if (u) {
            let f = i.join("");
            i = [], n.push(r.length === 0 ? f : Us(e, r)(f)), r.push({ inverse: l, styles: kp(u) });
          } else if (c) {
            if (r.length === 0)
              throw new Error("Found extraneous } in Chalk template literal");
            n.push(Us(e, r)(i.join(""))), i = [], r.pop();
          } else
            i.push(p);
        }), n.push(i.join("")), r.length > 0) {
          let o = `Chalk template literal is missing ${r.length} closing bracket${r.length === 1 ? "" : "s"} (\`}\`)`;
          throw new Error(o);
        }
        return n.join("");
      };
    });
    var ae = F((Dy, Xs) => {
      "use strict";
      var cr = ks(), { stdout: Ki, stderr: Wi } = bn(), { stringReplaceAll: Lp, stringEncaseCRLFWithFirstIndex: $p } = qs(), { isArray: wn } = Array, Js = ["ansi", "ansi", "ansi256", "ansi16m"], Ct = /* @__PURE__ */ Object.create(null), jp = a((e, t = {}) => {
        if (t.level && !(Number.isInteger(t.level) && t.level >= 0 && t.level <= 3))
          throw new Error("The `level` option should be an integer from 0 to 3");
        let r = Ki ? Ki.level : 0;
        e.level = t.level === void 0 ? r : t.level;
      }, "applyOptions"), En = class {
        constructor(t) {
          return Hs(t);
        }
      };
      a(En, "ChalkClass");
      var Hs = a((e) => {
        let t = {};
        return jp(t, e), t.template = (...r) => zs(t.template, ...r), Object.setPrototypeOf(t, xn.prototype), Object.setPrototypeOf(t.template, t), t.template.constructor = () => {
          throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
        }, t.template.Instance = En, t.template;
      }, "chalkFactory");
      function xn(e) {
        return Hs(e);
      }
      a(xn, "Chalk");
      for (let [e, t] of Object.entries(cr))
        Ct[e] = { get() {
          let r = vn(this, Ji(t.open, t.close, this._styler), this._isEmpty);
          return Object.defineProperty(this, e, { value: r }), r;
        } };
      Ct.visible = { get() {
        let e = vn(this, this._styler, true);
        return Object.defineProperty(this, "visible", { value: e }), e;
      } };
      var Ys = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
      for (let e of Ys)
        Ct[e] = { get() {
          let { level: t } = this;
          return function(...r) {
            let n = Ji(cr.color[Js[t]][e](...r), cr.color.close, this._styler);
            return vn(this, n, this._isEmpty);
          };
        } };
      for (let e of Ys) {
        let t = "bg" + e[0].toUpperCase() + e.slice(1);
        Ct[t] = { get() {
          let { level: r } = this;
          return function(...n) {
            let i = Ji(cr.bgColor[Js[r]][e](...n), cr.bgColor.close, this._styler);
            return vn(this, i, this._isEmpty);
          };
        } };
      }
      var Bp = Object.defineProperties(() => {
      }, { ...Ct, level: { enumerable: true, get() {
        return this._generator.level;
      }, set(e) {
        this._generator.level = e;
      } } }), Ji = a((e, t, r) => {
        let n, i;
        return r === void 0 ? (n = e, i = t) : (n = r.openAll + e, i = t + r.closeAll), { open: e, close: t, openAll: n, closeAll: i, parent: r };
      }, "createStyler"), vn = a((e, t, r) => {
        let n = a((...i) => wn(i[0]) && wn(i[0].raw) ? Ws(n, zs(n, ...i)) : Ws(n, i.length === 1 ? "" + i[0] : i.join(" ")), "builder");
        return Object.setPrototypeOf(n, Bp), n._generator = e, n._styler = t, n._isEmpty = r, n;
      }, "createBuilder"), Ws = a((e, t) => {
        if (e.level <= 0 || !t)
          return e._isEmpty ? "" : t;
        let r = e._styler;
        if (r === void 0)
          return t;
        let { openAll: n, closeAll: i } = r;
        if (t.indexOf("\x1B") !== -1)
          for (; r !== void 0; )
            t = Lp(t, r.close, r.open), r = r.parent;
        let o = t.indexOf(`
`);
        return o !== -1 && (t = $p(t, i, n, o)), n + t + i;
      }, "applyStyle"), Qi, zs = a((e, ...t) => {
        let [r] = t;
        if (!wn(r) || !wn(r.raw))
          return t.join(" ");
        let n = t.slice(1), i = [r.raw[0]];
        for (let o = 1; o < r.length; o++)
          i.push(String(n[o - 1]).replace(/[{}\\]/g, "\\$&"), String(r.raw[o]));
        return Qi === void 0 && (Qi = Ks()), Qi(e, i.join(""));
      }, "chalkTag");
      Object.defineProperties(xn.prototype, Ct);
      var Tn = xn();
      Tn.supportsColor = Ki;
      Tn.stderr = xn({ level: Wi ? Wi.level : 0 });
      Tn.stderr.supportsColor = Wi;
      Xs.exports = Tn;
    });
    var fr = F((jy, da) => {
      "use strict";
      da.exports = (e, t = 1, r) => {
        if (r = { indent: " ", includeEmptyLines: false, ...r }, typeof e != "string")
          throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
        if (typeof t != "number")
          throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
        if (typeof r.indent != "string")
          throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
        if (t === 0)
          return e;
        let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return e.replace(n, r.indent.repeat(t));
      };
    });
    var Nn = F((By, ma) => {
      "use strict";
      ma.exports = function() {
        function e(t, r, n, i, o) {
          return t < r || n < r ? t > n ? n + 1 : t + 1 : i === o ? r : r + 1;
        }
        return a(e, "_min"), function(t, r) {
          if (t === r)
            return 0;
          if (t.length > r.length) {
            var n = t;
            t = r, r = n;
          }
          for (var i = t.length, o = r.length; i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1); )
            i--, o--;
          for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s); )
            s++;
          if (i -= s, o -= s, i === 0 || o < 3)
            return o;
          var l = 0, u, c, p, f, d, m, h, g, b, y, x, E, w = [];
          for (u = 0; u < i; u++)
            w.push(u + 1), w.push(t.charCodeAt(s + u));
          for (var T = w.length - 1; l < o - 3; )
            for (b = r.charCodeAt(s + (c = l)), y = r.charCodeAt(s + (p = l + 1)), x = r.charCodeAt(s + (f = l + 2)), E = r.charCodeAt(s + (d = l + 3)), m = l += 4, u = 0; u < T; u += 2)
              h = w[u], g = w[u + 1], c = e(h, c, p, b, g), p = e(c, p, f, y, g), f = e(p, f, d, x, g), m = e(f, d, m, E, g), w[u] = m, d = f, f = p, p = c, c = h;
          for (; l < o; )
            for (b = r.charCodeAt(s + (c = l)), m = ++l, u = 0; u < T; u += 2)
              h = w[u], w[u] = m = e(h, c, m, b, w[u + 1]), c = h;
          return m;
        };
      }();
    });
    var wa = F((s0, Ea) => {
      var $t = 1e3, jt = $t * 60, Bt = jt * 60, yt = Bt * 24, qf = yt * 7, Vf = yt * 365.25;
      Ea.exports = function(e, t) {
        t = t || {};
        var r = typeof e;
        if (r === "string" && e.length > 0)
          return Uf(e);
        if (r === "number" && isFinite(e))
          return t.long ? Qf(e) : Gf(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
      };
      function Uf(e) {
        if (e = String(e), !(e.length > 100)) {
          var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
          if (!!t) {
            var r = parseFloat(t[1]), n = (t[2] || "ms").toLowerCase();
            switch (n) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return r * Vf;
              case "weeks":
              case "week":
              case "w":
                return r * qf;
              case "days":
              case "day":
              case "d":
                return r * yt;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return r * Bt;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return r * jt;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return r * $t;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return r;
              default:
                return;
            }
          }
        }
      }
      a(Uf, "parse");
      function Gf(e) {
        var t = Math.abs(e);
        return t >= yt ? Math.round(e / yt) + "d" : t >= Bt ? Math.round(e / Bt) + "h" : t >= jt ? Math.round(e / jt) + "m" : t >= $t ? Math.round(e / $t) + "s" : e + "ms";
      }
      a(Gf, "fmtShort");
      function Qf(e) {
        var t = Math.abs(e);
        return t >= yt ? Dn(e, t, yt, "day") : t >= Bt ? Dn(e, t, Bt, "hour") : t >= jt ? Dn(e, t, jt, "minute") : t >= $t ? Dn(e, t, $t, "second") : e + " ms";
      }
      a(Qf, "fmtLong");
      function Dn(e, t, r, n) {
        var i = t >= r * 1.5;
        return Math.round(e / r) + " " + n + (i ? "s" : "");
      }
      a(Dn, "plural");
    });
    var io = F((l0, xa) => {
      function Kf(e) {
        r.debug = r, r.default = r, r.coerce = u, r.disable = o, r.enable = i, r.enabled = s, r.humanize = wa(), r.destroy = c, Object.keys(e).forEach((p) => {
          r[p] = e[p];
        }), r.names = [], r.skips = [], r.formatters = {};
        function t(p) {
          let f = 0;
          for (let d = 0; d < p.length; d++)
            f = (f << 5) - f + p.charCodeAt(d), f |= 0;
          return r.colors[Math.abs(f) % r.colors.length];
        }
        a(t, "selectColor"), r.selectColor = t;
        function r(p) {
          let f, d = null, m, h;
          function g(...b) {
            if (!g.enabled)
              return;
            let y = g, x = Number(/* @__PURE__ */ new Date()), E = x - (f || x);
            y.diff = E, y.prev = f, y.curr = x, f = x, b[0] = r.coerce(b[0]), typeof b[0] != "string" && b.unshift("%O");
            let w = 0;
            b[0] = b[0].replace(/%([a-zA-Z%])/g, (C, S) => {
              if (C === "%%")
                return "%";
              w++;
              let D = r.formatters[S];
              if (typeof D == "function") {
                let V = b[w];
                C = D.call(y, V), b.splice(w, 1), w--;
              }
              return C;
            }), r.formatArgs.call(y, b), (y.log || r.log).apply(y, b);
          }
          return a(g, "debug"), g.namespace = p, g.useColors = r.useColors(), g.color = r.selectColor(p), g.extend = n, g.destroy = r.destroy, Object.defineProperty(g, "enabled", { enumerable: true, configurable: false, get: () => d !== null ? d : (m !== r.namespaces && (m = r.namespaces, h = r.enabled(p)), h), set: (b) => {
            d = b;
          } }), typeof r.init == "function" && r.init(g), g;
        }
        a(r, "createDebug");
        function n(p, f) {
          let d = r(this.namespace + (typeof f > "u" ? ":" : f) + p);
          return d.log = this.log, d;
        }
        a(n, "extend");
        function i(p) {
          r.save(p), r.namespaces = p, r.names = [], r.skips = [];
          let f, d = (typeof p == "string" ? p : "").split(/[\s,]+/), m = d.length;
          for (f = 0; f < m; f++)
            !d[f] || (p = d[f].replace(/\*/g, ".*?"), p[0] === "-" ? r.skips.push(new RegExp("^" + p.slice(1) + "$")) : r.names.push(new RegExp("^" + p + "$")));
        }
        a(i, "enable");
        function o() {
          let p = [...r.names.map(l), ...r.skips.map(l).map((f) => "-" + f)].join(",");
          return r.enable(""), p;
        }
        a(o, "disable");
        function s(p) {
          if (p[p.length - 1] === "*")
            return true;
          let f, d;
          for (f = 0, d = r.skips.length; f < d; f++)
            if (r.skips[f].test(p))
              return false;
          for (f = 0, d = r.names.length; f < d; f++)
            if (r.names[f].test(p))
              return true;
          return false;
        }
        a(s, "enabled");
        function l(p) {
          return p.toString().substring(2, p.toString().length - 2).replace(/\.\*\?$/, "*");
        }
        a(l, "toNamespace");
        function u(p) {
          return p instanceof Error ? p.stack || p.message : p;
        }
        a(u, "coerce");
        function c() {
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
        return a(c, "destroy"), r.enable(r.load()), r;
      }
      a(Kf, "setup");
      xa.exports = Kf;
    });
    var va = F((Ee, kn) => {
      Ee.formatArgs = Jf;
      Ee.save = Hf;
      Ee.load = Yf;
      Ee.useColors = Wf;
      Ee.storage = zf();
      Ee.destroy = (() => {
        let e = false;
        return () => {
          e || (e = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
        };
      })();
      Ee.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
      function Wf() {
        return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? true : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? false : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      }
      a(Wf, "useColors");
      function Jf(e) {
        if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + kn.exports.humanize(this.diff), !this.useColors)
          return;
        let t = "color: " + this.color;
        e.splice(1, 0, t, "color: inherit");
        let r = 0, n = 0;
        e[0].replace(/%[a-zA-Z%]/g, (i) => {
          i !== "%%" && (r++, i === "%c" && (n = r));
        }), e.splice(n, 0, t);
      }
      a(Jf, "formatArgs");
      Ee.log = console.debug || console.log || (() => {
      });
      function Hf(e) {
        try {
          e ? Ee.storage.setItem("debug", e) : Ee.storage.removeItem("debug");
        } catch {
        }
      }
      a(Hf, "save");
      function Yf() {
        let e;
        try {
          e = Ee.storage.getItem("debug");
        } catch {
        }
        return !e && typeof process < "u" && "env" in process && (e = process.env.DEBUG), e;
      }
      a(Yf, "load");
      function zf() {
        try {
          return localStorage;
        } catch {
        }
      }
      a(zf, "localstorage");
      kn.exports = io()(Ee);
      var { formatters: Xf } = kn.exports;
      Xf.j = function(e) {
        try {
          return JSON.stringify(e);
        } catch (t) {
          return "[UnexpectedJSONParseError]: " + t.message;
        }
      };
    });
    var Aa = F((z, $n) => {
      var Zf = require("tty"), Ln = require("util");
      z.init = sd;
      z.log = nd;
      z.formatArgs = td;
      z.save = id;
      z.load = od;
      z.useColors = ed;
      z.destroy = Ln.deprecate(() => {
      }, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      z.colors = [6, 2, 3, 4, 5, 1];
      try {
        let e = bn();
        e && (e.stderr || e).level >= 2 && (z.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221]);
      } catch {
      }
      z.inspectOpts = Object.keys(process.env).filter((e) => /^debug_/i.test(e)).reduce((e, t) => {
        let r = t.substring(6).toLowerCase().replace(/_([a-z])/g, (i, o) => o.toUpperCase()), n = process.env[t];
        return /^(yes|on|true|enabled)$/i.test(n) ? n = true : /^(no|off|false|disabled)$/i.test(n) ? n = false : n === "null" ? n = null : n = Number(n), e[r] = n, e;
      }, {});
      function ed() {
        return "colors" in z.inspectOpts ? Boolean(z.inspectOpts.colors) : Zf.isatty(process.stderr.fd);
      }
      a(ed, "useColors");
      function td(e) {
        let { namespace: t, useColors: r } = this;
        if (r) {
          let n = this.color, i = "\x1B[3" + (n < 8 ? n : "8;5;" + n), o = `  ${i};1m${t} \x1B[0m`;
          e[0] = o + e[0].split(`
`).join(`
` + o), e.push(i + "m+" + $n.exports.humanize(this.diff) + "\x1B[0m");
        } else
          e[0] = rd() + t + " " + e[0];
      }
      a(td, "formatArgs");
      function rd() {
        return z.inspectOpts.hideDate ? "" : (/* @__PURE__ */ new Date()).toISOString() + " ";
      }
      a(rd, "getDate");
      function nd(...e) {
        return process.stderr.write(Ln.format(...e) + `
`);
      }
      a(nd, "log");
      function id(e) {
        e ? process.env.DEBUG = e : delete process.env.DEBUG;
      }
      a(id, "save");
      function od() {
        return process.env.DEBUG;
      }
      a(od, "load");
      function sd(e) {
        e.inspectOpts = {};
        let t = Object.keys(z.inspectOpts);
        for (let r = 0; r < t.length; r++)
          e.inspectOpts[t[r]] = z.inspectOpts[t[r]];
      }
      a(sd, "init");
      $n.exports = io()(z);
      var { formatters: Ta } = $n.exports;
      Ta.o = function(e) {
        return this.inspectOpts.colors = this.useColors, Ln.inspect(e, this.inspectOpts).split(`
`).map((t) => t.trim()).join(" ");
      };
      Ta.O = function(e) {
        return this.inspectOpts.colors = this.useColors, Ln.inspect(e, this.inspectOpts);
      };
    });
    var Sa = F((f0, oo) => {
      typeof process > "u" || process.type === "renderer" || process.browser === true || process.__nwjs ? oo.exports = va() : oo.exports = Aa();
    });
    var ka = F((eb, vd) => {
      vd.exports = { name: "@prisma/engines-version", version: "4.13.0-50.1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "16.11.64", typescript: "4.8.4" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
    });
    var uo = F((Un) => {
      "use strict";
      Object.defineProperty(Un, "__esModule", { value: true });
      Un.enginesVersion = void 0;
      Un.enginesVersion = ka().prisma.enginesVersion;
    });
    var Ba = F((db, po) => {
      "use strict";
      var I = po.exports;
      po.exports.default = I;
      var k = "\x1B[", _r = "\x1B]", Vt = "\x07", Kn = ";", ja = process.env.TERM_PROGRAM === "Apple_Terminal";
      I.cursorTo = (e, t) => {
        if (typeof e != "number")
          throw new TypeError("The `x` argument is required");
        return typeof t != "number" ? k + (e + 1) + "G" : k + (t + 1) + ";" + (e + 1) + "H";
      };
      I.cursorMove = (e, t) => {
        if (typeof e != "number")
          throw new TypeError("The `x` argument is required");
        let r = "";
        return e < 0 ? r += k + -e + "D" : e > 0 && (r += k + e + "C"), t < 0 ? r += k + -t + "A" : t > 0 && (r += k + t + "B"), r;
      };
      I.cursorUp = (e = 1) => k + e + "A";
      I.cursorDown = (e = 1) => k + e + "B";
      I.cursorForward = (e = 1) => k + e + "C";
      I.cursorBackward = (e = 1) => k + e + "D";
      I.cursorLeft = k + "G";
      I.cursorSavePosition = ja ? "\x1B7" : k + "s";
      I.cursorRestorePosition = ja ? "\x1B8" : k + "u";
      I.cursorGetPosition = k + "6n";
      I.cursorNextLine = k + "E";
      I.cursorPrevLine = k + "F";
      I.cursorHide = k + "?25l";
      I.cursorShow = k + "?25h";
      I.eraseLines = (e) => {
        let t = "";
        for (let r = 0; r < e; r++)
          t += I.eraseLine + (r < e - 1 ? I.cursorUp() : "");
        return e && (t += I.cursorLeft), t;
      };
      I.eraseEndLine = k + "K";
      I.eraseStartLine = k + "1K";
      I.eraseLine = k + "2K";
      I.eraseDown = k + "J";
      I.eraseUp = k + "1J";
      I.eraseScreen = k + "2J";
      I.scrollUp = k + "S";
      I.scrollDown = k + "T";
      I.clearScreen = "\x1Bc";
      I.clearTerminal = process.platform === "win32" ? `${I.eraseScreen}${k}0f` : `${I.eraseScreen}${k}3J${k}H`;
      I.beep = Vt;
      I.link = (e, t) => [_r, "8", Kn, Kn, t, Vt, e, _r, "8", Kn, Kn, Vt].join("");
      I.image = (e, t = {}) => {
        let r = `${_r}1337;File=inline=1`;
        return t.width && (r += `;width=${t.width}`), t.height && (r += `;height=${t.height}`), t.preserveAspectRatio === false && (r += ";preserveAspectRatio=0"), r + ":" + e.toString("base64") + Vt;
      };
      I.iTerm = { setCwd: (e = process.cwd()) => `${_r}50;CurrentDir=${e}${Vt}`, annotation: (e, t = {}) => {
        let r = `${_r}1337;`, n = typeof t.x < "u", i = typeof t.y < "u";
        if ((n || i) && !(n && i && typeof t.length < "u"))
          throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
        return e = e.replace(/\|/g, ""), r += t.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=", t.length > 0 ? r += (n ? [e, t.length, t.x, t.y] : [t.length, e]).join("|") : r += e, r + Vt;
      } };
    });
    var Ua = F((mb, Va) => {
      "use strict";
      var Sd = bn(), Ut = Vi();
      function qa(e) {
        if (/^\d{3,4}$/.test(e)) {
          let r = /(\d{1,2})(\d{2})/.exec(e);
          return { major: 0, minor: parseInt(r[1], 10), patch: parseInt(r[2], 10) };
        }
        let t = (e || "").split(".").map((r) => parseInt(r, 10));
        return { major: t[0], minor: t[1], patch: t[2] };
      }
      a(qa, "parseVersion");
      function fo(e) {
        let { env: t } = process;
        if ("FORCE_HYPERLINK" in t)
          return !(t.FORCE_HYPERLINK.length > 0 && parseInt(t.FORCE_HYPERLINK, 10) === 0);
        if (Ut("no-hyperlink") || Ut("no-hyperlinks") || Ut("hyperlink=false") || Ut("hyperlink=never"))
          return false;
        if (Ut("hyperlink=true") || Ut("hyperlink=always") || "NETLIFY" in t)
          return true;
        if (!Sd.supportsColor(e) || e && !e.isTTY || process.platform === "win32" || "CI" in t || "TEAMCITY_VERSION" in t)
          return false;
        if ("TERM_PROGRAM" in t) {
          let r = qa(t.TERM_PROGRAM_VERSION);
          switch (t.TERM_PROGRAM) {
            case "iTerm.app":
              return r.major === 3 ? r.minor >= 1 : r.major > 3;
            case "WezTerm":
              return r.major >= 20200620;
            case "vscode":
              return r.major > 1 || r.major === 1 && r.minor >= 72;
          }
        }
        if ("VTE_VERSION" in t) {
          if (t.VTE_VERSION === "0.50.0")
            return false;
          let r = qa(t.VTE_VERSION);
          return r.major > 0 || r.minor >= 50;
        }
        return false;
      }
      a(fo, "supportsHyperlink");
      Va.exports = { supportsHyperlink: fo, stdout: fo(process.stdout), stderr: fo(process.stderr) };
    });
    var Qa = F((hb, Cr) => {
      "use strict";
      var Pd = Ba(), mo = Ua(), Ga = a((e, t, { target: r = "stdout", ...n } = {}) => mo[r] ? Pd.link(e, t) : n.fallback === false ? e : typeof n.fallback == "function" ? n.fallback(e, t) : `${e} (\u200B${t}\u200B)`, "terminalLink");
      Cr.exports = (e, t, r = {}) => Ga(e, t, r);
      Cr.exports.stderr = (e, t, r = {}) => Ga(e, t, { target: "stderr", ...r });
      Cr.exports.isSupported = mo.stdout;
      Cr.exports.stderr.isSupported = mo.stderr;
    });
    var sl = F((Zb, ol) => {
      "use strict";
      ol.exports = ({ onlyFirst: e = false } = {}) => {
        let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(t, e ? void 0 : "g");
      };
    });
    var Nr = F((eE, al) => {
      "use strict";
      var Ud = sl();
      al.exports = (e) => typeof e == "string" ? e.replace(Ud(), "") : e;
    });
    var ll = F((tE, Yn) => {
      "use strict";
      Yn.exports = (e = {}) => {
        let t;
        if (e.repoUrl)
          t = e.repoUrl;
        else if (e.user && e.repo)
          t = `https://github.com/${e.user}/${e.repo}`;
        else
          throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
        let r = new URL(`${t}/issues/new`), n = ["body", "title", "labels", "template", "milestone", "assignee", "projects"];
        for (let i of n) {
          let o = e[i];
          if (o !== void 0) {
            if (i === "labels" || i === "projects") {
              if (!Array.isArray(o))
                throw new TypeError(`The \`${i}\` option should be an array`);
              o = o.join(",");
            }
            r.searchParams.set(i, o);
          }
        }
        return r.toString();
      };
      Yn.exports.default = Yn.exports;
    });
    var eu = F((Ix, _m) => {
      _m.exports = { name: "dotenv", version: "16.0.3", description: "Loads environment variables from .env file", main: "lib/main.js", types: "lib/main.d.ts", exports: { ".": { require: "./lib/main.js", types: "./lib/main.d.ts", default: "./lib/main.js" }, "./config": "./config.js", "./config.js": "./config.js", "./lib/env-options": "./lib/env-options.js", "./lib/env-options.js": "./lib/env-options.js", "./lib/cli-options": "./lib/cli-options.js", "./lib/cli-options.js": "./lib/cli-options.js", "./package.json": "./package.json" }, scripts: { "dts-check": "tsc --project tests/types/tsconfig.json", lint: "standard", "lint-readme": "standard-markdown", pretest: "npm run lint && npm run dts-check", test: "tap tests/*.js --100 -Rspec", prerelease: "npm test", release: "standard-version" }, repository: { type: "git", url: "git://github.com/motdotla/dotenv.git" }, keywords: ["dotenv", "env", ".env", "environment", "variables", "config", "settings"], readmeFilename: "README.md", license: "BSD-2-Clause", devDependencies: { "@types/node": "^17.0.9", decache: "^4.6.1", dtslint: "^3.7.0", sinon: "^12.0.1", standard: "^16.0.4", "standard-markdown": "^7.1.0", "standard-version": "^9.3.2", tap: "^15.1.6", tar: "^6.1.11", typescript: "^4.5.4" }, engines: { node: ">=12" } };
    });
    var ru = F((Dx, si) => {
      var Cm = require("fs"), tu = require("path"), Om = require("os"), Mm = eu(), Nm = Mm.version, Rm = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
      function Fm(e) {
        let t = {}, r = e.toString();
        r = r.replace(/\r\n?/mg, `
`);
        let n;
        for (; (n = Rm.exec(r)) != null; ) {
          let i = n[1], o = n[2] || "";
          o = o.trim();
          let s = o[0];
          o = o.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), s === '"' && (o = o.replace(/\\n/g, `
`), o = o.replace(/\\r/g, "\r")), t[i] = o;
        }
        return t;
      }
      a(Fm, "parse");
      function Fo(e) {
        console.log(`[dotenv@${Nm}][DEBUG] ${e}`);
      }
      a(Fo, "_log");
      function Im(e) {
        return e[0] === "~" ? tu.join(Om.homedir(), e.slice(1)) : e;
      }
      a(Im, "_resolveHome");
      function Dm(e) {
        let t = tu.resolve(process.cwd(), ".env"), r = "utf8", n = Boolean(e && e.debug), i = Boolean(e && e.override);
        e && (e.path != null && (t = Im(e.path)), e.encoding != null && (r = e.encoding));
        try {
          let o = oi.parse(Cm.readFileSync(t, { encoding: r }));
          return Object.keys(o).forEach(function(s) {
            Object.prototype.hasOwnProperty.call(process.env, s) ? (i === true && (process.env[s] = o[s]), n && Fo(i === true ? `"${s}" is already defined in \`process.env\` and WAS overwritten` : `"${s}" is already defined in \`process.env\` and was NOT overwritten`)) : process.env[s] = o[s];
          }), { parsed: o };
        } catch (o) {
          return n && Fo(`Failed to load ${t} ${o.message}`), { error: o };
        }
      }
      a(Dm, "config");
      var oi = { config: Dm, parse: Fm };
      si.exports.config = oi.config;
      si.exports.parse = oi.parse;
      si.exports = oi;
    });
    var lu = F((Qx, au) => {
      var Lo = Symbol("arg flag"), ce = class extends Error {
        constructor(t, r) {
          super(t), this.name = "ArgError", this.code = r, Object.setPrototypeOf(this, ce.prototype);
        }
      };
      a(ce, "ArgError");
      function Ur(e, { argv: t = process.argv.slice(2), permissive: r = false, stopAtPositional: n = false } = {}) {
        if (!e)
          throw new ce("argument specification object is required", "ARG_CONFIG_NO_SPEC");
        let i = { _: [] }, o = {}, s = {};
        for (let l of Object.keys(e)) {
          if (!l)
            throw new ce("argument key cannot be an empty string", "ARG_CONFIG_EMPTY_KEY");
          if (l[0] !== "-")
            throw new ce(`argument key must start with '-' but found: '${l}'`, "ARG_CONFIG_NONOPT_KEY");
          if (l.length === 1)
            throw new ce(`argument key must have a name; singular '-' keys are not allowed: ${l}`, "ARG_CONFIG_NONAME_KEY");
          if (typeof e[l] == "string") {
            o[l] = e[l];
            continue;
          }
          let u = e[l], c = false;
          if (Array.isArray(u) && u.length === 1 && typeof u[0] == "function") {
            let [p] = u;
            u = a((f, d, m = []) => (m.push(p(f, d, m[m.length - 1])), m), "type"), c = p === Boolean || p[Lo] === true;
          } else if (typeof u == "function")
            c = u === Boolean || u[Lo] === true;
          else
            throw new ce(`type missing or not a function or valid array type: ${l}`, "ARG_CONFIG_VAD_TYPE");
          if (l[1] !== "-" && l.length > 2)
            throw new ce(`short argument keys (with a single hyphen) must have only one character: ${l}`, "ARG_CONFIG_SHORTOPT_TOOLONG");
          s[l] = [u, c];
        }
        for (let l = 0, u = t.length; l < u; l++) {
          let c = t[l];
          if (n && i._.length > 0) {
            i._ = i._.concat(t.slice(l));
            break;
          }
          if (c === "--") {
            i._ = i._.concat(t.slice(l + 1));
            break;
          }
          if (c.length > 1 && c[0] === "-") {
            let p = c[1] === "-" || c.length === 2 ? [c] : c.slice(1).split("").map((f) => `-${f}`);
            for (let f = 0; f < p.length; f++) {
              let d = p[f], [m, h] = d[1] === "-" ? d.split(/=(.*)/, 2) : [d, void 0], g = m;
              for (; g in o; )
                g = o[g];
              if (!(g in s))
                if (r) {
                  i._.push(d);
                  continue;
                } else
                  throw new ce(`unknown or unexpected option: ${m}`, "ARG_UNKNOWN_OPTION");
              let [b, y] = s[g];
              if (!y && f + 1 < p.length)
                throw new ce(`option requires argument (but was followed by another short argument): ${m}`, "ARG_MISSING_REQUIRED_SHORTARG");
              if (y)
                i[g] = b(true, g, i[g]);
              else if (h === void 0) {
                if (t.length < l + 2 || t[l + 1].length > 1 && t[l + 1][0] === "-" && !(t[l + 1].match(/^-?\d*(\.(?=\d))?\d*$/) && (b === Number || typeof BigInt < "u" && b === BigInt))) {
                  let x = m === g ? "" : ` (alias for ${g})`;
                  throw new ce(`option requires argument: ${m}${x}`, "ARG_MISSING_REQUIRED_LONGARG");
                }
                i[g] = b(t[l + 1], g, i[g]), ++l;
              } else
                i[g] = b(h, g, i[g]);
            }
          } else
            i._.push(c);
        }
        return i;
      }
      a(Ur, "arg");
      Ur.flag = (e) => (e[Lo] = true, e);
      Ur.COUNT = Ur.flag((e, t, r) => (r || 0) + 1);
      Ur.ArgError = ce;
      au.exports = Ur;
    });
    var cu = F((Wx, uu) => {
      "use strict";
      uu.exports = (e) => {
        let t = e.match(/^[ \t]*(?=\S)/gm);
        return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
      };
    });
    var $o = F((Jx, pu) => {
      "use strict";
      var jm = cu();
      pu.exports = (e) => {
        let t = jm(e);
        if (t === 0)
          return e;
        let r = new RegExp(`^[ \\t]{${t}}`, "gm");
        return e.replace(r, "");
      };
    });
    var mu = F((Qo, Ko) => {
      (function(e, t) {
        typeof require == "function" && typeof Qo == "object" && typeof Ko == "object" ? Ko.exports = t() : e.pluralize = t();
      })(Qo, function() {
        var e = [], t = [], r = {}, n = {}, i = {};
        function o(m) {
          return typeof m == "string" ? new RegExp("^" + m + "$", "i") : m;
        }
        a(o, "sanitizeRule");
        function s(m, h) {
          return m === h ? h : m === m.toLowerCase() ? h.toLowerCase() : m === m.toUpperCase() ? h.toUpperCase() : m[0] === m[0].toUpperCase() ? h.charAt(0).toUpperCase() + h.substr(1).toLowerCase() : h.toLowerCase();
        }
        a(s, "restoreCase");
        function l(m, h) {
          return m.replace(/\$(\d{1,2})/g, function(g, b) {
            return h[b] || "";
          });
        }
        a(l, "interpolate");
        function u(m, h) {
          return m.replace(h[0], function(g, b) {
            var y = l(h[1], arguments);
            return s(g === "" ? m[b - 1] : g, y);
          });
        }
        a(u, "replace");
        function c(m, h, g) {
          if (!m.length || r.hasOwnProperty(m))
            return h;
          for (var b = g.length; b--; ) {
            var y = g[b];
            if (y[0].test(h))
              return u(h, y);
          }
          return h;
        }
        a(c, "sanitizeWord");
        function p(m, h, g) {
          return function(b) {
            var y = b.toLowerCase();
            return h.hasOwnProperty(y) ? s(b, y) : m.hasOwnProperty(y) ? s(b, m[y]) : c(y, b, g);
          };
        }
        a(p, "replaceWord");
        function f(m, h, g, b) {
          return function(y) {
            var x = y.toLowerCase();
            return h.hasOwnProperty(x) ? true : m.hasOwnProperty(x) ? false : c(x, x, g) === x;
          };
        }
        a(f, "checkWord");
        function d(m, h, g) {
          var b = h === 1 ? d.singular(m) : d.plural(m);
          return (g ? h + " " : "") + b;
        }
        return a(d, "pluralize"), d.plural = p(i, n, e), d.isPlural = f(i, n, e), d.singular = p(n, i, t), d.isSingular = f(n, i, t), d.addPluralRule = function(m, h) {
          e.push([o(m), h]);
        }, d.addSingularRule = function(m, h) {
          t.push([o(m), h]);
        }, d.addUncountableRule = function(m) {
          if (typeof m == "string") {
            r[m.toLowerCase()] = true;
            return;
          }
          d.addPluralRule(m, "$0"), d.addSingularRule(m, "$0");
        }, d.addIrregularRule = function(m, h) {
          h = h.toLowerCase(), m = m.toLowerCase(), i[m] = h, n[h] = m;
        }, [["I", "we"], ["me", "us"], ["he", "they"], ["she", "they"], ["them", "them"], ["myself", "ourselves"], ["yourself", "yourselves"], ["itself", "themselves"], ["herself", "themselves"], ["himself", "themselves"], ["themself", "themselves"], ["is", "are"], ["was", "were"], ["has", "have"], ["this", "these"], ["that", "those"], ["echo", "echoes"], ["dingo", "dingoes"], ["volcano", "volcanoes"], ["tornado", "tornadoes"], ["torpedo", "torpedoes"], ["genus", "genera"], ["viscus", "viscera"], ["stigma", "stigmata"], ["stoma", "stomata"], ["dogma", "dogmata"], ["lemma", "lemmata"], ["schema", "schemata"], ["anathema", "anathemata"], ["ox", "oxen"], ["axe", "axes"], ["die", "dice"], ["yes", "yeses"], ["foot", "feet"], ["eave", "eaves"], ["goose", "geese"], ["tooth", "teeth"], ["quiz", "quizzes"], ["human", "humans"], ["proof", "proofs"], ["carve", "carves"], ["valve", "valves"], ["looey", "looies"], ["thief", "thieves"], ["groove", "grooves"], ["pickaxe", "pickaxes"], ["passerby", "passersby"]].forEach(function(m) {
          return d.addIrregularRule(m[0], m[1]);
        }), [[/s?$/i, "s"], [/[^\u0000-\u007F]$/i, "$0"], [/([^aeiou]ese)$/i, "$1"], [/(ax|test)is$/i, "$1es"], [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, "$1es"], [/(e[mn]u)s?$/i, "$1s"], [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, "$1"], [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1i"], [/(alumn|alg|vertebr)(?:a|ae)$/i, "$1ae"], [/(seraph|cherub)(?:im)?$/i, "$1im"], [/(her|at|gr)o$/i, "$1oes"], [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, "$1a"], [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, "$1a"], [/sis$/i, "ses"], [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, "$1$2ves"], [/([^aeiouy]|qu)y$/i, "$1ies"], [/([^ch][ieo][ln])ey$/i, "$1ies"], [/(x|ch|ss|sh|zz)$/i, "$1es"], [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, "$1ices"], [/\b((?:tit)?m|l)(?:ice|ouse)$/i, "$1ice"], [/(pe)(?:rson|ople)$/i, "$1ople"], [/(child)(?:ren)?$/i, "$1ren"], [/eaux$/i, "$0"], [/m[ae]n$/i, "men"], ["thou", "you"]].forEach(function(m) {
          return d.addPluralRule(m[0], m[1]);
        }), [[/s$/i, ""], [/(ss)$/i, "$1"], [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, "$1fe"], [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, "$1f"], [/ies$/i, "y"], [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, "$1ie"], [/\b(mon|smil)ies$/i, "$1ey"], [/\b((?:tit)?m|l)ice$/i, "$1ouse"], [/(seraph|cherub)im$/i, "$1"], [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i, "$1"], [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, "$1sis"], [/(movie|twelve|abuse|e[mn]u)s$/i, "$1"], [/(test)(?:is|es)$/i, "$1is"], [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1us"], [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, "$1um"], [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, "$1on"], [/(alumn|alg|vertebr)ae$/i, "$1a"], [/(cod|mur|sil|vert|ind)ices$/i, "$1ex"], [/(matr|append)ices$/i, "$1ix"], [/(pe)(rson|ople)$/i, "$1rson"], [/(child)ren$/i, "$1"], [/(eau)x?$/i, "$1"], [/men$/i, "man"]].forEach(function(m) {
          return d.addSingularRule(m[0], m[1]);
        }), ["adulthood", "advice", "agenda", "aid", "aircraft", "alcohol", "ammo", "analytics", "anime", "athletics", "audio", "bison", "blood", "bream", "buffalo", "butter", "carp", "cash", "chassis", "chess", "clothing", "cod", "commerce", "cooperation", "corps", "debris", "diabetes", "digestion", "elk", "energy", "equipment", "excretion", "expertise", "firmware", "flounder", "fun", "gallows", "garbage", "graffiti", "hardware", "headquarters", "health", "herpes", "highjinks", "homework", "housework", "information", "jeans", "justice", "kudos", "labour", "literature", "machinery", "mackerel", "mail", "media", "mews", "moose", "music", "mud", "manga", "news", "only", "personnel", "pike", "plankton", "pliers", "police", "pollution", "premises", "rain", "research", "rice", "salmon", "scissors", "series", "sewage", "shambles", "shrimp", "software", "species", "staff", "swine", "tennis", "traffic", "transportation", "trout", "tuna", "wealth", "welfare", "whiting", "wildebeest", "wildlife", "you", /pok[eé]mon$/i, /[^aeiou]ese$/i, /deer$/i, /fish$/i, /measles$/i, /o[iu]s$/i, /pox$/i, /sheep$/i].forEach(d.addUncountableRule), d;
      });
    });
    var Lu = F((TT, ku) => {
      "use strict";
      ku.exports = (e) => Object.prototype.toString.call(e) === "[object RegExp]";
    });
    var ju = F((AT, $u) => {
      "use strict";
      $u.exports = (e) => {
        let t = typeof e;
        return e !== null && (t === "object" || t === "function");
      };
    });
    var Bu = F((Wo) => {
      "use strict";
      Object.defineProperty(Wo, "__esModule", { value: true });
      Wo.default = (e) => Object.getOwnPropertySymbols(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
    });
    var oc = F((JA, Wg) => {
      Wg.exports = { name: "@prisma/client", version: "4.13.0", description: "Prisma Client is an auto-generated, type-safe and modern JavaScript/TypeScript ORM for Node.js that's tailored to your data. Supports MySQL, PostgreSQL, MariaDB, SQLite databases.", keywords: ["orm", "prisma2", "prisma", "client", "query", "database", "sql", "postgres", "postgresql", "mysql", "sqlite", "mariadb", "mssql", "typescript", "query-builder"], main: "index.js", browser: "index-browser.js", types: "index.d.ts", license: "Apache-2.0", engines: { node: ">=14.17" }, homepage: "https://www.prisma.io", repository: { type: "git", url: "https://github.com/prisma/prisma.git", directory: "packages/client" }, author: "Tim Suchanek <suchanek@prisma.io>", bugs: "https://github.com/prisma/prisma/issues", scripts: { dev: "DEV=true node -r esbuild-register helpers/build.ts", build: "node -r esbuild-register helpers/build.ts", test: "jest --verbose", "test:e2e": "node -r esbuild-register tests/e2e/_utils/run.ts", "test:functional": "node -r esbuild-register helpers/functional-test/run-tests.ts", "test:memory": "node -r esbuild-register helpers/memory-tests.ts", "test:functional:code": "node -r esbuild-register helpers/functional-test/run-tests.ts --no-types", "test:functional:types": "node -r esbuild-register helpers/functional-test/run-tests.ts --types-only", "test-notypes": "jest --verbose --testPathIgnorePatterns src/__tests__/types/types.test.ts", generate: "node scripts/postinstall.js", postinstall: "node scripts/postinstall.js", prepublishOnly: "pnpm run build", "new-test": "NODE_OPTIONS='-r ts-node/register' yo ./helpers/generator-test/index.ts" }, files: ["README.md", "runtime", "!runtime/*.map", "scripts", "generator-build", "edge.js", "edge.d.ts", "index.js", "index.d.ts", "index-browser.js"], devDependencies: { "@codspeed/benchmark.js-plugin": "1.0.2", "@faker-js/faker": "7.6.0", "@fast-check/jest": "1.6.0", "@jest/globals": "29.4.3", "@jest/test-sequencer": "29.4.3", "@opentelemetry/api": "1.4.0", "@opentelemetry/context-async-hooks": "1.9.1", "@opentelemetry/instrumentation": "0.35.1", "@opentelemetry/resources": "1.9.1", "@opentelemetry/sdk-trace-base": "1.9.1", "@opentelemetry/semantic-conventions": "1.9.1", "@prisma/debug": "workspace:*", "@prisma/engine-core": "workspace:*", "@prisma/engines": "workspace:*", "@prisma/fetch-engine": "workspace:*", "@prisma/generator-helper": "workspace:*", "@prisma/get-platform": "workspace:*", "@prisma/instrumentation": "workspace:*", "@prisma/internals": "workspace:*", "@prisma/migrate": "workspace:*", "@prisma/mini-proxy": "0.6.4", "@swc-node/register": "1.5.5", "@swc/core": "1.3.32", "@swc/jest": "0.2.24", "@timsuchanek/copy": "1.4.5", "@types/debug": "4.1.7", "@types/fs-extra": "9.0.13", "@types/jest": "29.4.0", "@types/js-levenshtein": "1.1.1", "@types/mssql": "8.1.2", "@types/node": "14.18.42", "@types/pg": "8.6.6", "@types/yeoman-generator": "5.2.11", arg: "5.0.2", benchmark: "2.1.4", chalk: "4.1.2", "ci-info": "3.8.0", "decimal.js": "10.4.3", esbuild: "0.15.13", execa: "5.1.1", "expect-type": "0.15.0", "flat-map-polyfill": "0.3.8", "fs-extra": "11.1.0", "fs-monkey": "1.0.3", "get-own-enumerable-property-symbols": "3.0.2", globby: "11.1.0", "indent-string": "4.0.0", "is-obj": "2.0.0", "is-regexp": "2.1.0", jest: "29.4.3", "jest-junit": "15.0.0", "jest-serializer-ansi-escapes": "^2.0.1", "jest-snapshot": "29.4.3", "js-levenshtein": "1.1.6", klona: "2.0.6", "lz-string": "1.4.4", mariadb: "3.0.2", memfs: "3.4.13", mssql: "9.1.1", "node-fetch": "2.6.9", pg: "8.9.0", "pkg-up": "3.1.0", pluralize: "8.0.0", resolve: "1.22.1", rimraf: "3.0.2", "simple-statistics": "7.8.2", "sort-keys": "4.2.0", "source-map-support": "0.5.21", "sql-template-tag": "5.0.3", "stacktrace-parser": "0.1.10", "strip-ansi": "6.0.1", "strip-indent": "3.0.0", "ts-jest": "29.0.5", "ts-node": "10.9.1", "ts-pattern": "4.1.3", tsd: "0.21.0", typescript: "4.9.5", "yeoman-generator": "5.7.0", yo: "4.3.1", zx: "7.1.1" }, peerDependencies: { prisma: "*" }, peerDependenciesMeta: { prisma: { optional: true } }, dependencies: { "@prisma/engines-version": "4.13.0-50.1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a" }, sideEffects: false };
    });
    var oy = {};
    mn(oy, { DMMF: () => Ie, DMMFClass: () => qe, Debug: () => so, Decimal: () => ye, Engine: () => nt, Extensions: () => ki, MetricsClient: () => gt, NotFoundError: () => Pe, PrismaClientInitializationError: () => G, PrismaClientKnownRequestError: () => X, PrismaClientRustPanicError: () => fe, PrismaClientUnknownRequestError: () => Z, PrismaClientValidationError: () => J, Sql: () => he, Types: () => Li, decompressFromBase64: () => iy, empty: () => Rc, findSync: () => gs, getPrismaClient: () => ip, join: () => Nc, makeDocument: () => yi, makeStrictEnum: () => op, objectEnumValues: () => Rt, raw: () => us, sqltag: () => cs, transformDocument: () => Uu, unpack: () => bi, warnEnvConflicts: () => lp });
    module.exports = gp(oy);
    var up = O(ys());
    var ki = {};
    mn(ki, { defineExtension: () => bs, getExtensionContext: () => Es });
    function bs(e) {
      return typeof e == "function" ? e : (t) => t.$extends(e);
    }
    a(bs, "defineExtension");
    function Es(e) {
      return e;
    }
    a(Es, "getExtensionContext");
    var Li = {};
    mn(Li, { Extensions: () => ws, Public: () => xs, Utils: () => vs });
    var ws = {};
    var xs = {};
    var vs = {};
    var gt = class {
      constructor(t) {
        this._engine = t;
      }
      prometheus(t) {
        return this._engine.metrics({ format: "prometheus", ...t });
      }
      json(t) {
        return this._engine.metrics({ format: "json", ...t });
      }
    };
    a(gt, "MetricsClient");
    function $i(e, t) {
      for (let r of t)
        for (let n of Object.getOwnPropertyNames(r.prototype))
          Object.defineProperty(e.prototype, n, Object.getOwnPropertyDescriptor(r.prototype, n) ?? /* @__PURE__ */ Object.create(null));
    }
    a($i, "applyMixins");
    var Ze = O(ae());
    var Ot = 9e15;
    var ze = 1e9;
    var Hi = "0123456789abcdef";
    var Sn = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
    var Pn = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
    var Yi = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -Ot, maxE: Ot, crypto: false };
    var ra;
    var Be;
    var N = true;
    var Cn = "[DecimalError] ";
    var Ye = Cn + "Invalid argument: ";
    var na = Cn + "Precision limit exceeded";
    var ia = Cn + "crypto unavailable";
    var oa = "[object Decimal]";
    var ne = Math.floor;
    var Q = Math.pow;
    var qp = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
    var Vp = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
    var Up = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
    var sa = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    var Ce = 1e7;
    var M = 7;
    var Gp = 9007199254740991;
    var Qp = Sn.length - 1;
    var zi = Pn.length - 1;
    var v = { toStringTag: oa };
    v.absoluteValue = v.abs = function() {
      var e = new this.constructor(this);
      return e.s < 0 && (e.s = 1), _(e);
    };
    v.ceil = function() {
      return _(new this.constructor(this), this.e + 1, 2);
    };
    v.clampedTo = v.clamp = function(e, t) {
      var r, n = this, i = n.constructor;
      if (e = new i(e), t = new i(t), !e.s || !t.s)
        return new i(NaN);
      if (e.gt(t))
        throw Error(Ye + t);
      return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
    };
    v.comparedTo = v.cmp = function(e) {
      var t, r, n, i, o = this, s = o.d, l = (e = new o.constructor(e)).d, u = o.s, c = e.s;
      if (!s || !l)
        return !u || !c ? NaN : u !== c ? u : s === l ? 0 : !s ^ u < 0 ? 1 : -1;
      if (!s[0] || !l[0])
        return s[0] ? u : l[0] ? -c : 0;
      if (u !== c)
        return u;
      if (o.e !== e.e)
        return o.e > e.e ^ u < 0 ? 1 : -1;
      for (n = s.length, i = l.length, t = 0, r = n < i ? n : i; t < r; ++t)
        if (s[t] !== l[t])
          return s[t] > l[t] ^ u < 0 ? 1 : -1;
      return n === i ? 0 : n > i ^ u < 0 ? 1 : -1;
    };
    v.cosine = v.cos = function() {
      var e, t, r = this, n = r.constructor;
      return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + M, n.rounding = 1, r = Kp(n, pa(n, r)), n.precision = e, n.rounding = t, _(Be == 2 || Be == 3 ? r.neg() : r, e, t, true)) : new n(1) : new n(NaN);
    };
    v.cubeRoot = v.cbrt = function() {
      var e, t, r, n, i, o, s, l, u, c, p = this, f = p.constructor;
      if (!p.isFinite() || p.isZero())
        return new f(p);
      for (N = false, o = p.s * Q(p.s * p, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = H(p.d), e = p.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = Q(r, 1 / 3), e = ne((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), n = new f(r), n.s = p.s) : n = new f(o.toString()), s = (e = f.precision) + 3; ; )
        if (l = n, u = l.times(l).times(l), c = u.plus(p), n = $(c.plus(p).times(l), c.plus(u), s + 2, 1), H(l.d).slice(0, s) === (r = H(n.d)).slice(0, s))
          if (r = r.slice(s - 3, s + 1), r == "9999" || !i && r == "4999") {
            if (!i && (_(l, e + 1, 0), l.times(l).times(l).eq(p))) {
              n = l;
              break;
            }
            s += 4, i = 1;
          } else {
            (!+r || !+r.slice(1) && r.charAt(0) == "5") && (_(n, e + 1, 1), t = !n.times(n).times(n).eq(p));
            break;
          }
      return N = true, _(n, e, f.rounding, t);
    };
    v.decimalPlaces = v.dp = function() {
      var e, t = this.d, r = NaN;
      if (t) {
        if (e = t.length - 1, r = (e - ne(this.e / M)) * M, e = t[e], e)
          for (; e % 10 == 0; e /= 10)
            r--;
        r < 0 && (r = 0);
      }
      return r;
    };
    v.dividedBy = v.div = function(e) {
      return $(this, new this.constructor(e));
    };
    v.dividedToIntegerBy = v.divToInt = function(e) {
      var t = this, r = t.constructor;
      return _($(t, new r(e), 0, 1, 1), r.precision, r.rounding);
    };
    v.equals = v.eq = function(e) {
      return this.cmp(e) === 0;
    };
    v.floor = function() {
      return _(new this.constructor(this), this.e + 1, 3);
    };
    v.greaterThan = v.gt = function(e) {
      return this.cmp(e) > 0;
    };
    v.greaterThanOrEqualTo = v.gte = function(e) {
      var t = this.cmp(e);
      return t == 1 || t === 0;
    };
    v.hyperbolicCosine = v.cosh = function() {
      var e, t, r, n, i, o = this, s = o.constructor, l = new s(1);
      if (!o.isFinite())
        return new s(o.s ? 1 / 0 : NaN);
      if (o.isZero())
        return l;
      r = s.precision, n = s.rounding, s.precision = r + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / Mn(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), o = Mt(s, 1, o.times(t), new s(1), true);
      for (var u, c = e, p = new s(8); c--; )
        u = o.times(o), o = l.minus(u.times(p.minus(u.times(p))));
      return _(o, s.precision = r, s.rounding = n, true);
    };
    v.hyperbolicSine = v.sinh = function() {
      var e, t, r, n, i = this, o = i.constructor;
      if (!i.isFinite() || i.isZero())
        return new o(i);
      if (t = o.precision, r = o.rounding, o.precision = t + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3)
        i = Mt(o, 2, i, i, true);
      else {
        e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / Mn(5, e)), i = Mt(o, 2, i, i, true);
        for (var s, l = new o(5), u = new o(16), c = new o(20); e--; )
          s = i.times(i), i = i.times(l.plus(s.times(u.times(s).plus(c))));
      }
      return o.precision = t, o.rounding = r, _(i, t, r, true);
    };
    v.hyperbolicTangent = v.tanh = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, $(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s);
    };
    v.inverseCosine = v.acos = function() {
      var e, t = this, r = t.constructor, n = t.abs().cmp(1), i = r.precision, o = r.rounding;
      return n !== -1 ? n === 0 ? t.isNeg() ? _e(r, i, o) : new r(0) : new r(NaN) : t.isZero() ? _e(r, i + 4, o).times(0.5) : (r.precision = i + 6, r.rounding = 1, t = t.asin(), e = _e(r, i + 4, o).times(0.5), r.precision = i, r.rounding = o, e.minus(t));
    };
    v.inverseHyperbolicCosine = v.acosh = function() {
      var e, t, r = this, n = r.constructor;
      return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, N = false, r = r.times(r).minus(1).sqrt().plus(r), N = true, n.precision = e, n.rounding = t, r.ln()) : new n(r);
    };
    v.inverseHyperbolicSine = v.asinh = function() {
      var e, t, r = this, n = r.constructor;
      return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, N = false, r = r.times(r).plus(1).sqrt().plus(r), N = true, n.precision = e, n.rounding = t, r.ln());
    };
    v.inverseHyperbolicTangent = v.atanh = function() {
      var e, t, r, n, i = this, o = i.constructor;
      return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, t = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? _(new o(i), e, t, true) : (o.precision = r = n - i.e, i = $(i.plus(1), new o(1).minus(i), r + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = t, i.times(0.5))) : new o(NaN);
    };
    v.inverseSine = v.asin = function() {
      var e, t, r, n, i = this, o = i.constructor;
      return i.isZero() ? new o(i) : (t = i.abs().cmp(1), r = o.precision, n = o.rounding, t !== -1 ? t === 0 ? (e = _e(o, r + 4, n).times(0.5), e.s = i.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = n, i.times(2)));
    };
    v.inverseTangent = v.atan = function() {
      var e, t, r, n, i, o, s, l, u, c = this, p = c.constructor, f = p.precision, d = p.rounding;
      if (c.isFinite()) {
        if (c.isZero())
          return new p(c);
        if (c.abs().eq(1) && f + 4 <= zi)
          return s = _e(p, f + 4, d).times(0.25), s.s = c.s, s;
      } else {
        if (!c.s)
          return new p(NaN);
        if (f + 4 <= zi)
          return s = _e(p, f + 4, d).times(0.5), s.s = c.s, s;
      }
      for (p.precision = l = f + 10, p.rounding = 1, r = Math.min(28, l / M + 2 | 0), e = r; e; --e)
        c = c.div(c.times(c).plus(1).sqrt().plus(1));
      for (N = false, t = Math.ceil(l / M), n = 1, u = c.times(c), s = new p(c), i = c; e !== -1; )
        if (i = i.times(u), o = s.minus(i.div(n += 2)), i = i.times(u), s = o.plus(i.div(n += 2)), s.d[t] !== void 0)
          for (e = t; s.d[e] === o.d[e] && e--; )
            ;
      return r && (s = s.times(2 << r - 1)), N = true, _(s, p.precision = f, p.rounding = d, true);
    };
    v.isFinite = function() {
      return !!this.d;
    };
    v.isInteger = v.isInt = function() {
      return !!this.d && ne(this.e / M) > this.d.length - 2;
    };
    v.isNaN = function() {
      return !this.s;
    };
    v.isNegative = v.isNeg = function() {
      return this.s < 0;
    };
    v.isPositive = v.isPos = function() {
      return this.s > 0;
    };
    v.isZero = function() {
      return !!this.d && this.d[0] === 0;
    };
    v.lessThan = v.lt = function(e) {
      return this.cmp(e) < 0;
    };
    v.lessThanOrEqualTo = v.lte = function(e) {
      return this.cmp(e) < 1;
    };
    v.logarithm = v.log = function(e) {
      var t, r, n, i, o, s, l, u, c = this, p = c.constructor, f = p.precision, d = p.rounding, m = 5;
      if (e == null)
        e = new p(10), t = true;
      else {
        if (e = new p(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1))
          return new p(NaN);
        t = e.eq(10);
      }
      if (r = c.d, c.s < 0 || !r || !r[0] || c.eq(1))
        return new p(r && !r[0] ? -1 / 0 : c.s != 1 ? NaN : r ? 0 : 1 / 0);
      if (t)
        if (r.length > 1)
          o = true;
        else {
          for (i = r[0]; i % 10 === 0; )
            i /= 10;
          o = i !== 1;
        }
      if (N = false, l = f + m, s = He(c, l), n = t ? _n(p, l + 10) : He(e, l), u = $(s, n, l, 1), pr(u.d, i = f, d))
        do
          if (l += 10, s = He(c, l), n = t ? _n(p, l + 10) : He(e, l), u = $(s, n, l, 1), !o) {
            +H(u.d).slice(i + 1, i + 15) + 1 == 1e14 && (u = _(u, f + 1, 0));
            break;
          }
        while (pr(u.d, i += 10, d));
      return N = true, _(u, f, d);
    };
    v.minus = v.sub = function(e) {
      var t, r, n, i, o, s, l, u, c, p, f, d, m = this, h = m.constructor;
      if (e = new h(e), !m.d || !e.d)
        return !m.s || !e.s ? e = new h(NaN) : m.d ? e.s = -e.s : e = new h(e.d || m.s !== e.s ? m : NaN), e;
      if (m.s != e.s)
        return e.s = -e.s, m.plus(e);
      if (c = m.d, d = e.d, l = h.precision, u = h.rounding, !c[0] || !d[0]) {
        if (d[0])
          e.s = -e.s;
        else if (c[0])
          e = new h(m);
        else
          return new h(u === 3 ? -0 : 0);
        return N ? _(e, l, u) : e;
      }
      if (r = ne(e.e / M), p = ne(m.e / M), c = c.slice(), o = p - r, o) {
        for (f = o < 0, f ? (t = c, o = -o, s = d.length) : (t = d, r = p, s = c.length), n = Math.max(Math.ceil(l / M), s) + 2, o > n && (o = n, t.length = 1), t.reverse(), n = o; n--; )
          t.push(0);
        t.reverse();
      } else {
        for (n = c.length, s = d.length, f = n < s, f && (s = n), n = 0; n < s; n++)
          if (c[n] != d[n]) {
            f = c[n] < d[n];
            break;
          }
        o = 0;
      }
      for (f && (t = c, c = d, d = t, e.s = -e.s), s = c.length, n = d.length - s; n > 0; --n)
        c[s++] = 0;
      for (n = d.length; n > o; ) {
        if (c[--n] < d[n]) {
          for (i = n; i && c[--i] === 0; )
            c[i] = Ce - 1;
          --c[i], c[n] += Ce;
        }
        c[n] -= d[n];
      }
      for (; c[--s] === 0; )
        c.pop();
      for (; c[0] === 0; c.shift())
        --r;
      return c[0] ? (e.d = c, e.e = On(c, r), N ? _(e, l, u) : e) : new h(u === 3 ? -0 : 0);
    };
    v.modulo = v.mod = function(e) {
      var t, r = this, n = r.constructor;
      return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r.d && !r.d[0] ? _(new n(r), n.precision, n.rounding) : (N = false, n.modulo == 9 ? (t = $(r, e.abs(), 0, 3, 1), t.s *= e.s) : t = $(r, e, 0, n.modulo, 1), t = t.times(e), N = true, r.minus(t));
    };
    v.naturalExponential = v.exp = function() {
      return Xi(this);
    };
    v.naturalLogarithm = v.ln = function() {
      return He(this);
    };
    v.negated = v.neg = function() {
      var e = new this.constructor(this);
      return e.s = -e.s, _(e);
    };
    v.plus = v.add = function(e) {
      var t, r, n, i, o, s, l, u, c, p, f = this, d = f.constructor;
      if (e = new d(e), !f.d || !e.d)
        return !f.s || !e.s ? e = new d(NaN) : f.d || (e = new d(e.d || f.s === e.s ? f : NaN)), e;
      if (f.s != e.s)
        return e.s = -e.s, f.minus(e);
      if (c = f.d, p = e.d, l = d.precision, u = d.rounding, !c[0] || !p[0])
        return p[0] || (e = new d(f)), N ? _(e, l, u) : e;
      if (o = ne(f.e / M), n = ne(e.e / M), c = c.slice(), i = o - n, i) {
        for (i < 0 ? (r = c, i = -i, s = p.length) : (r = p, n = o, s = c.length), o = Math.ceil(l / M), s = o > s ? o + 1 : s + 1, i > s && (i = s, r.length = 1), r.reverse(); i--; )
          r.push(0);
        r.reverse();
      }
      for (s = c.length, i = p.length, s - i < 0 && (i = s, r = p, p = c, c = r), t = 0; i; )
        t = (c[--i] = c[i] + p[i] + t) / Ce | 0, c[i] %= Ce;
      for (t && (c.unshift(t), ++n), s = c.length; c[--s] == 0; )
        c.pop();
      return e.d = c, e.e = On(c, n), N ? _(e, l, u) : e;
    };
    v.precision = v.sd = function(e) {
      var t, r = this;
      if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
        throw Error(Ye + e);
      return r.d ? (t = aa(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
    };
    v.round = function() {
      var e = this, t = e.constructor;
      return _(new t(e), e.e + 1, t.rounding);
    };
    v.sine = v.sin = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + M, n.rounding = 1, r = Jp(n, pa(n, r)), n.precision = e, n.rounding = t, _(Be > 2 ? r.neg() : r, e, t, true)) : new n(NaN);
    };
    v.squareRoot = v.sqrt = function() {
      var e, t, r, n, i, o, s = this, l = s.d, u = s.e, c = s.s, p = s.constructor;
      if (c !== 1 || !l || !l[0])
        return new p(!c || c < 0 && (!l || l[0]) ? NaN : l ? s : 1 / 0);
      for (N = false, c = Math.sqrt(+s), c == 0 || c == 1 / 0 ? (t = H(l), (t.length + u) % 2 == 0 && (t += "0"), c = Math.sqrt(t), u = ne((u + 1) / 2) - (u < 0 || u % 2), c == 1 / 0 ? t = "5e" + u : (t = c.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + u), n = new p(t)) : n = new p(c.toString()), r = (u = p.precision) + 3; ; )
        if (o = n, n = o.plus($(s, o, r + 2, 1)).times(0.5), H(o.d).slice(0, r) === (t = H(n.d)).slice(0, r))
          if (t = t.slice(r - 3, r + 1), t == "9999" || !i && t == "4999") {
            if (!i && (_(o, u + 1, 0), o.times(o).eq(s))) {
              n = o;
              break;
            }
            r += 4, i = 1;
          } else {
            (!+t || !+t.slice(1) && t.charAt(0) == "5") && (_(n, u + 1, 1), e = !n.times(n).eq(s));
            break;
          }
      return N = true, _(n, u, p.rounding, e);
    };
    v.tangent = v.tan = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, r = r.sin(), r.s = 1, r = $(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, _(Be == 2 || Be == 4 ? r.neg() : r, e, t, true)) : new n(NaN);
    };
    v.times = v.mul = function(e) {
      var t, r, n, i, o, s, l, u, c, p = this, f = p.constructor, d = p.d, m = (e = new f(e)).d;
      if (e.s *= p.s, !d || !d[0] || !m || !m[0])
        return new f(!e.s || d && !d[0] && !m || m && !m[0] && !d ? NaN : !d || !m ? e.s / 0 : e.s * 0);
      for (r = ne(p.e / M) + ne(e.e / M), u = d.length, c = m.length, u < c && (o = d, d = m, m = o, s = u, u = c, c = s), o = [], s = u + c, n = s; n--; )
        o.push(0);
      for (n = c; --n >= 0; ) {
        for (t = 0, i = u + n; i > n; )
          l = o[i] + m[n] * d[i - n - 1] + t, o[i--] = l % Ce | 0, t = l / Ce | 0;
        o[i] = (o[i] + t) % Ce | 0;
      }
      for (; !o[--s]; )
        o.pop();
      return t ? ++r : o.shift(), e.d = o, e.e = On(o, r), N ? _(e, f.precision, f.rounding) : e;
    };
    v.toBinary = function(e, t) {
      return eo(this, 2, e, t);
    };
    v.toDecimalPlaces = v.toDP = function(e, t) {
      var r = this, n = r.constructor;
      return r = new n(r), e === void 0 ? r : (pe(e, 0, ze), t === void 0 ? t = n.rounding : pe(t, 0, 8), _(r, e + r.e + 1, t));
    };
    v.toExponential = function(e, t) {
      var r, n = this, i = n.constructor;
      return e === void 0 ? r = Fe(n, true) : (pe(e, 0, ze), t === void 0 ? t = i.rounding : pe(t, 0, 8), n = _(new i(n), e + 1, t), r = Fe(n, true, e + 1)), n.isNeg() && !n.isZero() ? "-" + r : r;
    };
    v.toFixed = function(e, t) {
      var r, n, i = this, o = i.constructor;
      return e === void 0 ? r = Fe(i) : (pe(e, 0, ze), t === void 0 ? t = o.rounding : pe(t, 0, 8), n = _(new o(i), e + i.e + 1, t), r = Fe(n, false, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r;
    };
    v.toFraction = function(e) {
      var t, r, n, i, o, s, l, u, c, p, f, d, m = this, h = m.d, g = m.constructor;
      if (!h)
        return new g(m);
      if (c = r = new g(1), n = u = new g(0), t = new g(n), o = t.e = aa(h) - m.e - 1, s = o % M, t.d[0] = Q(10, s < 0 ? M + s : s), e == null)
        e = o > 0 ? t : c;
      else {
        if (l = new g(e), !l.isInt() || l.lt(c))
          throw Error(Ye + l);
        e = l.gt(t) ? o > 0 ? t : c : l;
      }
      for (N = false, l = new g(H(h)), p = g.precision, g.precision = o = h.length * M * 2; f = $(l, t, 0, 1, 1), i = r.plus(f.times(n)), i.cmp(e) != 1; )
        r = n, n = i, i = c, c = u.plus(f.times(i)), u = i, i = t, t = l.minus(f.times(i)), l = i;
      return i = $(e.minus(r), n, 0, 1, 1), u = u.plus(i.times(c)), r = r.plus(i.times(n)), u.s = c.s = m.s, d = $(c, n, o, 1).minus(m).abs().cmp($(u, r, o, 1).minus(m).abs()) < 1 ? [c, n] : [u, r], g.precision = p, N = true, d;
    };
    v.toHexadecimal = v.toHex = function(e, t) {
      return eo(this, 16, e, t);
    };
    v.toNearest = function(e, t) {
      var r = this, n = r.constructor;
      if (r = new n(r), e == null) {
        if (!r.d)
          return r;
        e = new n(1), t = n.rounding;
      } else {
        if (e = new n(e), t === void 0 ? t = n.rounding : pe(t, 0, 8), !r.d)
          return e.s ? r : e;
        if (!e.d)
          return e.s && (e.s = r.s), e;
      }
      return e.d[0] ? (N = false, r = $(r, e, 0, t, 1).times(e), N = true, _(r)) : (e.s = r.s, r = e), r;
    };
    v.toNumber = function() {
      return +this;
    };
    v.toOctal = function(e, t) {
      return eo(this, 8, e, t);
    };
    v.toPower = v.pow = function(e) {
      var t, r, n, i, o, s, l = this, u = l.constructor, c = +(e = new u(e));
      if (!l.d || !e.d || !l.d[0] || !e.d[0])
        return new u(Q(+l, c));
      if (l = new u(l), l.eq(1))
        return l;
      if (n = u.precision, o = u.rounding, e.eq(1))
        return _(l, n, o);
      if (t = ne(e.e / M), t >= e.d.length - 1 && (r = c < 0 ? -c : c) <= Gp)
        return i = la(u, l, r, n), e.s < 0 ? new u(1).div(i) : _(i, n, o);
      if (s = l.s, s < 0) {
        if (t < e.d.length - 1)
          return new u(NaN);
        if ((e.d[t] & 1) == 0 && (s = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
          return l.s = s, l;
      }
      return r = Q(+l, c), t = r == 0 || !isFinite(r) ? ne(c * (Math.log("0." + H(l.d)) / Math.LN10 + l.e + 1)) : new u(r + "").e, t > u.maxE + 1 || t < u.minE - 1 ? new u(t > 0 ? s / 0 : 0) : (N = false, u.rounding = l.s = 1, r = Math.min(12, (t + "").length), i = Xi(e.times(He(l, n + r)), n), i.d && (i = _(i, n + 5, 1), pr(i.d, n, o) && (t = n + 10, i = _(Xi(e.times(He(l, t + r)), t), t + 5, 1), +H(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = _(i, n + 1, 0)))), i.s = s, N = true, u.rounding = o, _(i, n, o));
    };
    v.toPrecision = function(e, t) {
      var r, n = this, i = n.constructor;
      return e === void 0 ? r = Fe(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (pe(e, 1, ze), t === void 0 ? t = i.rounding : pe(t, 0, 8), n = _(new i(n), e, t), r = Fe(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + r : r;
    };
    v.toSignificantDigits = v.toSD = function(e, t) {
      var r = this, n = r.constructor;
      return e === void 0 ? (e = n.precision, t = n.rounding) : (pe(e, 1, ze), t === void 0 ? t = n.rounding : pe(t, 0, 8)), _(new n(r), e, t);
    };
    v.toString = function() {
      var e = this, t = e.constructor, r = Fe(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
      return e.isNeg() && !e.isZero() ? "-" + r : r;
    };
    v.truncated = v.trunc = function() {
      return _(new this.constructor(this), this.e + 1, 1);
    };
    v.valueOf = v.toJSON = function() {
      var e = this, t = e.constructor, r = Fe(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
      return e.isNeg() ? "-" + r : r;
    };
    function H(e) {
      var t, r, n, i = e.length - 1, o = "", s = e[0];
      if (i > 0) {
        for (o += s, t = 1; t < i; t++)
          n = e[t] + "", r = M - n.length, r && (o += Je(r)), o += n;
        s = e[t], n = s + "", r = M - n.length, r && (o += Je(r));
      } else if (s === 0)
        return "0";
      for (; s % 10 === 0; )
        s /= 10;
      return o + s;
    }
    a(H, "digitsToString");
    function pe(e, t, r) {
      if (e !== ~~e || e < t || e > r)
        throw Error(Ye + e);
    }
    a(pe, "checkInt32");
    function pr(e, t, r, n) {
      var i, o, s, l;
      for (o = e[0]; o >= 10; o /= 10)
        --t;
      return --t < 0 ? (t += M, i = 0) : (i = Math.ceil((t + 1) / M), t %= M), o = Q(10, M - t), l = e[i] % o | 0, n == null ? t < 3 ? (t == 0 ? l = l / 100 | 0 : t == 1 && (l = l / 10 | 0), s = r < 4 && l == 99999 || r > 3 && l == 49999 || l == 5e4 || l == 0) : s = (r < 4 && l + 1 == o || r > 3 && l + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == Q(10, t - 2) - 1 || (l == o / 2 || l == 0) && (e[i + 1] / o / 100 | 0) == 0 : t < 4 ? (t == 0 ? l = l / 1e3 | 0 : t == 1 ? l = l / 100 | 0 : t == 2 && (l = l / 10 | 0), s = (n || r < 4) && l == 9999 || !n && r > 3 && l == 4999) : s = ((n || r < 4) && l + 1 == o || !n && r > 3 && l + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == Q(10, t - 3) - 1, s;
    }
    a(pr, "checkRoundingDigits");
    function An(e, t, r) {
      for (var n, i = [0], o, s = 0, l = e.length; s < l; ) {
        for (o = i.length; o--; )
          i[o] *= t;
        for (i[0] += Hi.indexOf(e.charAt(s++)), n = 0; n < i.length; n++)
          i[n] > r - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / r | 0, i[n] %= r);
      }
      return i.reverse();
    }
    a(An, "convertBase");
    function Kp(e, t) {
      var r, n, i;
      if (t.isZero())
        return t;
      n = t.d.length, n < 32 ? (r = Math.ceil(n / 3), i = (1 / Mn(4, r)).toString()) : (r = 16, i = "2.3283064365386962890625e-10"), e.precision += r, t = Mt(e, 1, t.times(i), new e(1));
      for (var o = r; o--; ) {
        var s = t.times(t);
        t = s.times(s).minus(s).times(8).plus(1);
      }
      return e.precision -= r, t;
    }
    a(Kp, "cosine");
    var $ = function() {
      function e(n, i, o) {
        var s, l = 0, u = n.length;
        for (n = n.slice(); u--; )
          s = n[u] * i + l, n[u] = s % o | 0, l = s / o | 0;
        return l && n.unshift(l), n;
      }
      a(e, "multiplyInteger");
      function t(n, i, o, s) {
        var l, u;
        if (o != s)
          u = o > s ? 1 : -1;
        else
          for (l = u = 0; l < o; l++)
            if (n[l] != i[l]) {
              u = n[l] > i[l] ? 1 : -1;
              break;
            }
        return u;
      }
      a(t, "compare");
      function r(n, i, o, s) {
        for (var l = 0; o--; )
          n[o] -= l, l = n[o] < i[o] ? 1 : 0, n[o] = l * s + n[o] - i[o];
        for (; !n[0] && n.length > 1; )
          n.shift();
      }
      return a(r, "subtract"), function(n, i, o, s, l, u) {
        var c, p, f, d, m, h, g, b, y, x, E, w, T, C, S, D, V, U, te, At, dn = n.constructor, Di = n.s == i.s ? 1 : -1, re = n.d, L = i.d;
        if (!re || !re[0] || !L || !L[0])
          return new dn(!n.s || !i.s || (re ? L && re[0] == L[0] : !L) ? NaN : re && re[0] == 0 || !L ? Di * 0 : Di / 0);
        for (u ? (m = 1, p = n.e - i.e) : (u = Ce, m = M, p = ne(n.e / m) - ne(i.e / m)), te = L.length, V = re.length, y = new dn(Di), x = y.d = [], f = 0; L[f] == (re[f] || 0); f++)
          ;
        if (L[f] > (re[f] || 0) && p--, o == null ? (C = o = dn.precision, s = dn.rounding) : l ? C = o + (n.e - i.e) + 1 : C = o, C < 0)
          x.push(1), h = true;
        else {
          if (C = C / m + 2 | 0, f = 0, te == 1) {
            for (d = 0, L = L[0], C++; (f < V || d) && C--; f++)
              S = d * u + (re[f] || 0), x[f] = S / L | 0, d = S % L | 0;
            h = d || f < V;
          } else {
            for (d = u / (L[0] + 1) | 0, d > 1 && (L = e(L, d, u), re = e(re, d, u), te = L.length, V = re.length), D = te, E = re.slice(0, te), w = E.length; w < te; )
              E[w++] = 0;
            At = L.slice(), At.unshift(0), U = L[0], L[1] >= u / 2 && ++U;
            do
              d = 0, c = t(L, E, te, w), c < 0 ? (T = E[0], te != w && (T = T * u + (E[1] || 0)), d = T / U | 0, d > 1 ? (d >= u && (d = u - 1), g = e(L, d, u), b = g.length, w = E.length, c = t(g, E, b, w), c == 1 && (d--, r(g, te < b ? At : L, b, u))) : (d == 0 && (c = d = 1), g = L.slice()), b = g.length, b < w && g.unshift(0), r(E, g, w, u), c == -1 && (w = E.length, c = t(L, E, te, w), c < 1 && (d++, r(E, te < w ? At : L, w, u))), w = E.length) : c === 0 && (d++, E = [0]), x[f++] = d, c && E[0] ? E[w++] = re[D] || 0 : (E = [re[D]], w = 1);
            while ((D++ < V || E[0] !== void 0) && C--);
            h = E[0] !== void 0;
          }
          x[0] || x.shift();
        }
        if (m == 1)
          y.e = p, ra = h;
        else {
          for (f = 1, d = x[0]; d >= 10; d /= 10)
            f++;
          y.e = f + p * m - 1, _(y, l ? o + y.e + 1 : o, s, h);
        }
        return y;
      };
    }();
    function _(e, t, r, n) {
      var i, o, s, l, u, c, p, f, d, m = e.constructor;
      e:
        if (t != null) {
          if (f = e.d, !f)
            return e;
          for (i = 1, l = f[0]; l >= 10; l /= 10)
            i++;
          if (o = t - i, o < 0)
            o += M, s = t, p = f[d = 0], u = p / Q(10, i - s - 1) % 10 | 0;
          else if (d = Math.ceil((o + 1) / M), l = f.length, d >= l)
            if (n) {
              for (; l++ <= d; )
                f.push(0);
              p = u = 0, i = 1, o %= M, s = o - M + 1;
            } else
              break e;
          else {
            for (p = l = f[d], i = 1; l >= 10; l /= 10)
              i++;
            o %= M, s = o - M + i, u = s < 0 ? 0 : p / Q(10, i - s - 1) % 10 | 0;
          }
          if (n = n || t < 0 || f[d + 1] !== void 0 || (s < 0 ? p : p % Q(10, i - s - 1)), c = r < 4 ? (u || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (r == 4 || n || r == 6 && (o > 0 ? s > 0 ? p / Q(10, i - s) : 0 : f[d - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !f[0])
            return f.length = 0, c ? (t -= e.e + 1, f[0] = Q(10, (M - t % M) % M), e.e = -t || 0) : f[0] = e.e = 0, e;
          if (o == 0 ? (f.length = d, l = 1, d--) : (f.length = d + 1, l = Q(10, M - o), f[d] = s > 0 ? (p / Q(10, i - s) % Q(10, s) | 0) * l : 0), c)
            for (; ; )
              if (d == 0) {
                for (o = 1, s = f[0]; s >= 10; s /= 10)
                  o++;
                for (s = f[0] += l, l = 1; s >= 10; s /= 10)
                  l++;
                o != l && (e.e++, f[0] == Ce && (f[0] = 1));
                break;
              } else {
                if (f[d] += l, f[d] != Ce)
                  break;
                f[d--] = 0, l = 1;
              }
          for (o = f.length; f[--o] === 0; )
            f.pop();
        }
      return N && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
    }
    a(_, "finalise");
    function Fe(e, t, r) {
      if (!e.isFinite())
        return ca(e);
      var n, i = e.e, o = H(e.d), s = o.length;
      return t ? (r && (n = r - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Je(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + Je(-i - 1) + o, r && (n = r - s) > 0 && (o += Je(n))) : i >= s ? (o += Je(i + 1 - s), r && (n = r - i - 1) > 0 && (o = o + "." + Je(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - s) > 0 && (i + 1 === s && (o += "."), o += Je(n))), o;
    }
    a(Fe, "finiteToString");
    function On(e, t) {
      var r = e[0];
      for (t *= M; r >= 10; r /= 10)
        t++;
      return t;
    }
    a(On, "getBase10Exponent");
    function _n(e, t, r) {
      if (t > Qp)
        throw N = true, r && (e.precision = r), Error(na);
      return _(new e(Sn), t, 1, true);
    }
    a(_n, "getLn10");
    function _e(e, t, r) {
      if (t > zi)
        throw Error(na);
      return _(new e(Pn), t, r, true);
    }
    a(_e, "getPi");
    function aa(e) {
      var t = e.length - 1, r = t * M + 1;
      if (t = e[t], t) {
        for (; t % 10 == 0; t /= 10)
          r--;
        for (t = e[0]; t >= 10; t /= 10)
          r++;
      }
      return r;
    }
    a(aa, "getPrecision");
    function Je(e) {
      for (var t = ""; e--; )
        t += "0";
      return t;
    }
    a(Je, "getZeroString");
    function la(e, t, r, n) {
      var i, o = new e(1), s = Math.ceil(n / M + 4);
      for (N = false; ; ) {
        if (r % 2 && (o = o.times(t), ea(o.d, s) && (i = true)), r = ne(r / 2), r === 0) {
          r = o.d.length - 1, i && o.d[r] === 0 && ++o.d[r];
          break;
        }
        t = t.times(t), ea(t.d, s);
      }
      return N = true, o;
    }
    a(la, "intPow");
    function Zs(e) {
      return e.d[e.d.length - 1] & 1;
    }
    a(Zs, "isOdd");
    function ua(e, t, r) {
      for (var n, i = new e(t[0]), o = 0; ++o < t.length; )
        if (n = new e(t[o]), n.s)
          i[r](n) && (i = n);
        else {
          i = n;
          break;
        }
      return i;
    }
    a(ua, "maxOrMin");
    function Xi(e, t) {
      var r, n, i, o, s, l, u, c = 0, p = 0, f = 0, d = e.constructor, m = d.rounding, h = d.precision;
      if (!e.d || !e.d[0] || e.e > 17)
        return new d(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
      for (t == null ? (N = false, u = h) : u = t, l = new d(0.03125); e.e > -2; )
        e = e.times(l), f += 5;
      for (n = Math.log(Q(2, f)) / Math.LN10 * 2 + 5 | 0, u += n, r = o = s = new d(1), d.precision = u; ; ) {
        if (o = _(o.times(e), u, 1), r = r.times(++p), l = s.plus($(o, r, u, 1)), H(l.d).slice(0, u) === H(s.d).slice(0, u)) {
          for (i = f; i--; )
            s = _(s.times(s), u, 1);
          if (t == null)
            if (c < 3 && pr(s.d, u - n, m, c))
              d.precision = u += 10, r = o = l = new d(1), p = 0, c++;
            else
              return _(s, d.precision = h, m, N = true);
          else
            return d.precision = h, s;
        }
        s = l;
      }
    }
    a(Xi, "naturalExponential");
    function He(e, t) {
      var r, n, i, o, s, l, u, c, p, f, d, m = 1, h = 10, g = e, b = g.d, y = g.constructor, x = y.rounding, E = y.precision;
      if (g.s < 0 || !b || !b[0] || !g.e && b[0] == 1 && b.length == 1)
        return new y(b && !b[0] ? -1 / 0 : g.s != 1 ? NaN : b ? 0 : g);
      if (t == null ? (N = false, p = E) : p = t, y.precision = p += h, r = H(b), n = r.charAt(0), Math.abs(o = g.e) < 15e14) {
        for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
          g = g.times(e), r = H(g.d), n = r.charAt(0), m++;
        o = g.e, n > 1 ? (g = new y("0." + r), o++) : g = new y(n + "." + r.slice(1));
      } else
        return c = _n(y, p + 2, E).times(o + ""), g = He(new y(n + "." + r.slice(1)), p - h).plus(c), y.precision = E, t == null ? _(g, E, x, N = true) : g;
      for (f = g, u = s = g = $(g.minus(1), g.plus(1), p, 1), d = _(g.times(g), p, 1), i = 3; ; ) {
        if (s = _(s.times(d), p, 1), c = u.plus($(s, new y(i), p, 1)), H(c.d).slice(0, p) === H(u.d).slice(0, p))
          if (u = u.times(2), o !== 0 && (u = u.plus(_n(y, p + 2, E).times(o + ""))), u = $(u, new y(m), p, 1), t == null)
            if (pr(u.d, p - h, x, l))
              y.precision = p += h, c = s = g = $(f.minus(1), f.plus(1), p, 1), d = _(g.times(g), p, 1), i = l = 1;
            else
              return _(u, y.precision = E, x, N = true);
          else
            return y.precision = E, u;
        u = c, i += 2;
      }
    }
    a(He, "naturalLogarithm");
    function ca(e) {
      return String(e.s * e.s / 0);
    }
    a(ca, "nonFiniteToString");
    function Zi(e, t) {
      var r, n, i;
      for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; n++)
        ;
      for (i = t.length; t.charCodeAt(i - 1) === 48; --i)
        ;
      if (t = t.slice(n, i), t) {
        if (i -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % M, r < 0 && (n += M), n < i) {
          for (n && e.d.push(+t.slice(0, n)), i -= M; n < i; )
            e.d.push(+t.slice(n, n += M));
          t = t.slice(n), n = M - t.length;
        } else
          n -= i;
        for (; n--; )
          t += "0";
        e.d.push(+t), N && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
      } else
        e.e = 0, e.d = [0];
      return e;
    }
    a(Zi, "parseDecimal");
    function Wp(e, t) {
      var r, n, i, o, s, l, u, c, p;
      if (t.indexOf("_") > -1) {
        if (t = t.replace(/(\d)_(?=\d)/g, "$1"), sa.test(t))
          return Zi(e, t);
      } else if (t === "Infinity" || t === "NaN")
        return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
      if (Vp.test(t))
        r = 16, t = t.toLowerCase();
      else if (qp.test(t))
        r = 2;
      else if (Up.test(t))
        r = 8;
      else
        throw Error(Ye + t);
      for (o = t.search(/p/i), o > 0 ? (u = +t.slice(o + 1), t = t.substring(2, o)) : t = t.slice(2), o = t.indexOf("."), s = o >= 0, n = e.constructor, s && (t = t.replace(".", ""), l = t.length, o = l - o, i = la(n, new n(r), o, o * 2)), c = An(t, r, Ce), p = c.length - 1, o = p; c[o] === 0; --o)
        c.pop();
      return o < 0 ? new n(e.s * 0) : (e.e = On(c, p), e.d = c, N = false, s && (e = $(e, i, l * 4)), u && (e = e.times(Math.abs(u) < 54 ? Q(2, u) : ht.pow(2, u))), N = true, e);
    }
    a(Wp, "parseOther");
    function Jp(e, t) {
      var r, n = t.d.length;
      if (n < 3)
        return t.isZero() ? t : Mt(e, 2, t, t);
      r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, t = t.times(1 / Mn(5, r)), t = Mt(e, 2, t, t);
      for (var i, o = new e(5), s = new e(16), l = new e(20); r--; )
        i = t.times(t), t = t.times(o.plus(i.times(s.times(i).minus(l))));
      return t;
    }
    a(Jp, "sine");
    function Mt(e, t, r, n, i) {
      var o, s, l, u, c = 1, p = e.precision, f = Math.ceil(p / M);
      for (N = false, u = r.times(r), l = new e(n); ; ) {
        if (s = $(l.times(u), new e(t++ * t++), p, 1), l = i ? n.plus(s) : n.minus(s), n = $(s.times(u), new e(t++ * t++), p, 1), s = l.plus(n), s.d[f] !== void 0) {
          for (o = f; s.d[o] === l.d[o] && o--; )
            ;
          if (o == -1)
            break;
        }
        o = l, l = n, n = s, s = o, c++;
      }
      return N = true, s.d.length = f + 1, s;
    }
    a(Mt, "taylorSeries");
    function Mn(e, t) {
      for (var r = e; --t; )
        r *= e;
      return r;
    }
    a(Mn, "tinyPow");
    function pa(e, t) {
      var r, n = t.s < 0, i = _e(e, e.precision, 1), o = i.times(0.5);
      if (t = t.abs(), t.lte(o))
        return Be = n ? 4 : 1, t;
      if (r = t.divToInt(i), r.isZero())
        Be = n ? 3 : 2;
      else {
        if (t = t.minus(r.times(i)), t.lte(o))
          return Be = Zs(r) ? n ? 2 : 3 : n ? 4 : 1, t;
        Be = Zs(r) ? n ? 1 : 4 : n ? 3 : 2;
      }
      return t.minus(i).abs();
    }
    a(pa, "toLessThanHalfPi");
    function eo(e, t, r, n) {
      var i, o, s, l, u, c, p, f, d, m = e.constructor, h = r !== void 0;
      if (h ? (pe(r, 1, ze), n === void 0 ? n = m.rounding : pe(n, 0, 8)) : (r = m.precision, n = m.rounding), !e.isFinite())
        p = ca(e);
      else {
        for (p = Fe(e), s = p.indexOf("."), h ? (i = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2)) : i = t, s >= 0 && (p = p.replace(".", ""), d = new m(1), d.e = p.length - s, d.d = An(Fe(d), 10, i), d.e = d.d.length), f = An(p, 10, i), o = u = f.length; f[--u] == 0; )
          f.pop();
        if (!f[0])
          p = h ? "0p+0" : "0";
        else {
          if (s < 0 ? o-- : (e = new m(e), e.d = f, e.e = o, e = $(e, d, r, n, 0, i), f = e.d, o = e.e, c = ra), s = f[r], l = i / 2, c = c || f[r + 1] !== void 0, c = n < 4 ? (s !== void 0 || c) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : s > l || s === l && (n === 4 || c || n === 6 && f[r - 1] & 1 || n === (e.s < 0 ? 8 : 7)), f.length = r, c)
            for (; ++f[--r] > i - 1; )
              f[r] = 0, r || (++o, f.unshift(1));
          for (u = f.length; !f[u - 1]; --u)
            ;
          for (s = 0, p = ""; s < u; s++)
            p += Hi.charAt(f[s]);
          if (h) {
            if (u > 1)
              if (t == 16 || t == 8) {
                for (s = t == 16 ? 4 : 3, --u; u % s; u++)
                  p += "0";
                for (f = An(p, i, t), u = f.length; !f[u - 1]; --u)
                  ;
                for (s = 1, p = "1."; s < u; s++)
                  p += Hi.charAt(f[s]);
              } else
                p = p.charAt(0) + "." + p.slice(1);
            p = p + (o < 0 ? "p" : "p+") + o;
          } else if (o < 0) {
            for (; ++o; )
              p = "0" + p;
            p = "0." + p;
          } else if (++o > u)
            for (o -= u; o--; )
              p += "0";
          else
            o < u && (p = p.slice(0, o) + "." + p.slice(o));
        }
        p = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + p;
      }
      return e.s < 0 ? "-" + p : p;
    }
    a(eo, "toStringBinary");
    function ea(e, t) {
      if (e.length > t)
        return e.length = t, true;
    }
    a(ea, "truncate");
    function Hp(e) {
      return new this(e).abs();
    }
    a(Hp, "abs");
    function Yp(e) {
      return new this(e).acos();
    }
    a(Yp, "acos");
    function zp(e) {
      return new this(e).acosh();
    }
    a(zp, "acosh");
    function Xp(e, t) {
      return new this(e).plus(t);
    }
    a(Xp, "add");
    function Zp(e) {
      return new this(e).asin();
    }
    a(Zp, "asin");
    function ef(e) {
      return new this(e).asinh();
    }
    a(ef, "asinh");
    function tf(e) {
      return new this(e).atan();
    }
    a(tf, "atan");
    function rf(e) {
      return new this(e).atanh();
    }
    a(rf, "atanh");
    function nf(e, t) {
      e = new this(e), t = new this(t);
      var r, n = this.precision, i = this.rounding, o = n + 4;
      return !e.s || !t.s ? r = new this(NaN) : !e.d && !t.d ? (r = _e(this, o, 1).times(t.s > 0 ? 0.25 : 0.75), r.s = e.s) : !t.d || e.isZero() ? (r = t.s < 0 ? _e(this, n, i) : new this(0), r.s = e.s) : !e.d || t.isZero() ? (r = _e(this, o, 1).times(0.5), r.s = e.s) : t.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan($(e, t, o, 1)), t = _e(this, o, 1), this.precision = n, this.rounding = i, r = e.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan($(e, t, o, 1)), r;
    }
    a(nf, "atan2");
    function of(e) {
      return new this(e).cbrt();
    }
    a(of, "cbrt");
    function sf(e) {
      return _(e = new this(e), e.e + 1, 2);
    }
    a(sf, "ceil");
    function af(e, t, r) {
      return new this(e).clamp(t, r);
    }
    a(af, "clamp");
    function lf(e) {
      if (!e || typeof e != "object")
        throw Error(Cn + "Object expected");
      var t, r, n, i = e.defaults === true, o = ["precision", 1, ze, "rounding", 0, 8, "toExpNeg", -Ot, 0, "toExpPos", 0, Ot, "maxE", 0, Ot, "minE", -Ot, 0, "modulo", 0, 9];
      for (t = 0; t < o.length; t += 3)
        if (r = o[t], i && (this[r] = Yi[r]), (n = e[r]) !== void 0)
          if (ne(n) === n && n >= o[t + 1] && n <= o[t + 2])
            this[r] = n;
          else
            throw Error(Ye + r + ": " + n);
      if (r = "crypto", i && (this[r] = Yi[r]), (n = e[r]) !== void 0)
        if (n === true || n === false || n === 0 || n === 1)
          if (n)
            if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
              this[r] = true;
            else
              throw Error(ia);
          else
            this[r] = false;
        else
          throw Error(Ye + r + ": " + n);
      return this;
    }
    a(lf, "config");
    function uf(e) {
      return new this(e).cos();
    }
    a(uf, "cos");
    function cf(e) {
      return new this(e).cosh();
    }
    a(cf, "cosh");
    function fa(e) {
      var t, r, n;
      function i(o) {
        var s, l, u, c = this;
        if (!(c instanceof i))
          return new i(o);
        if (c.constructor = i, ta(o)) {
          c.s = o.s, N ? !o.d || o.e > i.maxE ? (c.e = NaN, c.d = null) : o.e < i.minE ? (c.e = 0, c.d = [0]) : (c.e = o.e, c.d = o.d.slice()) : (c.e = o.e, c.d = o.d ? o.d.slice() : o.d);
          return;
        }
        if (u = typeof o, u === "number") {
          if (o === 0) {
            c.s = 1 / o < 0 ? -1 : 1, c.e = 0, c.d = [0];
            return;
          }
          if (o < 0 ? (o = -o, c.s = -1) : c.s = 1, o === ~~o && o < 1e7) {
            for (s = 0, l = o; l >= 10; l /= 10)
              s++;
            N ? s > i.maxE ? (c.e = NaN, c.d = null) : s < i.minE ? (c.e = 0, c.d = [0]) : (c.e = s, c.d = [o]) : (c.e = s, c.d = [o]);
            return;
          } else if (o * 0 !== 0) {
            o || (c.s = NaN), c.e = NaN, c.d = null;
            return;
          }
          return Zi(c, o.toString());
        } else if (u !== "string")
          throw Error(Ye + o);
        return (l = o.charCodeAt(0)) === 45 ? (o = o.slice(1), c.s = -1) : (l === 43 && (o = o.slice(1)), c.s = 1), sa.test(o) ? Zi(c, o) : Wp(c, o);
      }
      if (a(i, "Decimal"), i.prototype = v, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = lf, i.clone = fa, i.isDecimal = ta, i.abs = Hp, i.acos = Yp, i.acosh = zp, i.add = Xp, i.asin = Zp, i.asinh = ef, i.atan = tf, i.atanh = rf, i.atan2 = nf, i.cbrt = of, i.ceil = sf, i.clamp = af, i.cos = uf, i.cosh = cf, i.div = pf, i.exp = ff, i.floor = df, i.hypot = mf, i.ln = gf, i.log = hf, i.log10 = bf, i.log2 = yf, i.max = Ef, i.min = wf, i.mod = xf, i.mul = vf, i.pow = Tf, i.random = Af, i.round = Sf, i.sign = Pf, i.sin = _f, i.sinh = Cf, i.sqrt = Of, i.sub = Mf, i.sum = Nf, i.tan = Rf, i.tanh = Ff, i.trunc = If, e === void 0 && (e = {}), e && e.defaults !== true)
        for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0; t < n.length; )
          e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
      return i.config(e), i;
    }
    a(fa, "clone");
    function pf(e, t) {
      return new this(e).div(t);
    }
    a(pf, "div");
    function ff(e) {
      return new this(e).exp();
    }
    a(ff, "exp");
    function df(e) {
      return _(e = new this(e), e.e + 1, 3);
    }
    a(df, "floor");
    function mf() {
      var e, t, r = new this(0);
      for (N = false, e = 0; e < arguments.length; )
        if (t = new this(arguments[e++]), t.d)
          r.d && (r = r.plus(t.times(t)));
        else {
          if (t.s)
            return N = true, new this(1 / 0);
          r = t;
        }
      return N = true, r.sqrt();
    }
    a(mf, "hypot");
    function ta(e) {
      return e instanceof ht || e && e.toStringTag === oa || false;
    }
    a(ta, "isDecimalInstance");
    function gf(e) {
      return new this(e).ln();
    }
    a(gf, "ln");
    function hf(e, t) {
      return new this(e).log(t);
    }
    a(hf, "log");
    function yf(e) {
      return new this(e).log(2);
    }
    a(yf, "log2");
    function bf(e) {
      return new this(e).log(10);
    }
    a(bf, "log10");
    function Ef() {
      return ua(this, arguments, "lt");
    }
    a(Ef, "max");
    function wf() {
      return ua(this, arguments, "gt");
    }
    a(wf, "min");
    function xf(e, t) {
      return new this(e).mod(t);
    }
    a(xf, "mod");
    function vf(e, t) {
      return new this(e).mul(t);
    }
    a(vf, "mul");
    function Tf(e, t) {
      return new this(e).pow(t);
    }
    a(Tf, "pow");
    function Af(e) {
      var t, r, n, i, o = 0, s = new this(1), l = [];
      if (e === void 0 ? e = this.precision : pe(e, 1, ze), n = Math.ceil(e / M), this.crypto)
        if (crypto.getRandomValues)
          for (t = crypto.getRandomValues(new Uint32Array(n)); o < n; )
            i = t[o], i >= 429e7 ? t[o] = crypto.getRandomValues(new Uint32Array(1))[0] : l[o++] = i % 1e7;
        else if (crypto.randomBytes) {
          for (t = crypto.randomBytes(n *= 4); o < n; )
            i = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, o) : (l.push(i % 1e7), o += 4);
          o = n / 4;
        } else
          throw Error(ia);
      else
        for (; o < n; )
          l[o++] = Math.random() * 1e7 | 0;
      for (n = l[--o], e %= M, n && e && (i = Q(10, M - e), l[o] = (n / i | 0) * i); l[o] === 0; o--)
        l.pop();
      if (o < 0)
        r = 0, l = [0];
      else {
        for (r = -1; l[0] === 0; r -= M)
          l.shift();
        for (n = 1, i = l[0]; i >= 10; i /= 10)
          n++;
        n < M && (r -= M - n);
      }
      return s.e = r, s.d = l, s;
    }
    a(Af, "random");
    function Sf(e) {
      return _(e = new this(e), e.e + 1, this.rounding);
    }
    a(Sf, "round");
    function Pf(e) {
      return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
    }
    a(Pf, "sign");
    function _f(e) {
      return new this(e).sin();
    }
    a(_f, "sin");
    function Cf(e) {
      return new this(e).sinh();
    }
    a(Cf, "sinh");
    function Of(e) {
      return new this(e).sqrt();
    }
    a(Of, "sqrt");
    function Mf(e, t) {
      return new this(e).sub(t);
    }
    a(Mf, "sub");
    function Nf() {
      var e = 0, t = arguments, r = new this(t[e]);
      for (N = false; r.s && ++e < t.length; )
        r = r.plus(t[e]);
      return N = true, _(r, this.precision, this.rounding);
    }
    a(Nf, "sum");
    function Rf(e) {
      return new this(e).tan();
    }
    a(Rf, "tan");
    function Ff(e) {
      return new this(e).tanh();
    }
    a(Ff, "tanh");
    function If(e) {
      return _(e = new this(e), e.e + 1, 1);
    }
    a(If, "trunc");
    v[Symbol.for("nodejs.util.inspect.custom")] = v.toString;
    v[Symbol.toStringTag] = "Decimal";
    var ht = v.constructor = fa(Yi);
    Sn = new ht(Sn);
    Pn = new ht(Pn);
    var ye = ht;
    var ro = O(fr());
    var ha = O(Nn());
    var be = class {
      constructor(t, r, n, i) {
        this.modelName = t, this.name = r, this.typeName = n, this.isList = i;
      }
      _toGraphQLInputType() {
        return `${this.isList ? `List${this.typeName}` : this.typeName}FieldRefInput<${this.modelName}>`;
      }
    };
    a(be, "FieldRefImpl");
    function Rn(e) {
      return e instanceof be;
    }
    a(Rn, "isFieldRef");
    var ga = ["JsonNullValueInput", "NullableJsonNullValueInput", "JsonNullValueFilter"];
    var Fn = Symbol();
    var to = /* @__PURE__ */ new WeakMap();
    var Y = class {
      constructor(t) {
        t === Fn ? to.set(this, `Prisma.${this._getName()}`) : to.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
      }
      _getName() {
        return this.constructor.name;
      }
      toString() {
        return to.get(this);
      }
    };
    a(Y, "ObjectEnumValue");
    var Nt = class extends Y {
      _getNamespace() {
        return "NullTypes";
      }
    };
    a(Nt, "NullTypesEnumValue");
    var dr = class extends Nt {
    };
    a(dr, "DbNull");
    var mr = class extends Nt {
    };
    a(mr, "JsonNull");
    var gr = class extends Nt {
    };
    a(gr, "AnyNull");
    var Rt = { classes: { DbNull: dr, JsonNull: mr, AnyNull: gr }, instances: { DbNull: new dr(Fn), JsonNull: new mr(Fn), AnyNull: new gr(Fn) } };
    function Xe(e) {
      return ht.isDecimal(e) ? true : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
    }
    a(Xe, "isDecimalJsLike");
    var ie = a((e, t) => {
      let r = {};
      for (let n of e) {
        let i = n[t];
        r[i] = n;
      }
      return r;
    }, "keyBy");
    var Ft = { String: true, Int: true, Float: true, Boolean: true, Long: true, DateTime: true, ID: true, UUID: true, Json: true, Bytes: true, Decimal: true, BigInt: true };
    var Df = { string: "String", boolean: "Boolean", object: "Json", symbol: "Symbol" };
    function It(e) {
      return typeof e == "string" ? e : e.name;
    }
    a(It, "stringifyGraphQLType");
    function yr(e, t) {
      return t ? `List<${e}>` : e;
    }
    a(yr, "wrapWithList");
    var kf = /^(\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60))(\.\d{1,})?(([Z])|([+|-]([01][0-9]|2[0-3]):[0-5][0-9]))$/;
    var Lf = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    function Dt(e, t) {
      let r = t?.type;
      if (e === null)
        return "null";
      if (Object.prototype.toString.call(e) === "[object BigInt]")
        return "BigInt";
      if (ye.isDecimal(e) || r === "Decimal" && Xe(e))
        return "Decimal";
      if (Buffer.isBuffer(e))
        return "Bytes";
      if ($f(e, t))
        return r.name;
      if (e instanceof Y)
        return e._getName();
      if (e instanceof be)
        return e._toGraphQLInputType();
      if (Array.isArray(e)) {
        let i = e.reduce((o, s) => {
          let l = Dt(s, t);
          return o.includes(l) || o.push(l), o;
        }, []);
        return i.includes("Float") && i.includes("Int") && (i = ["Float"]), `List<${i.join(" | ")}>`;
      }
      let n = typeof e;
      if (n === "number")
        return Math.trunc(e) === e ? "Int" : "Float";
      if (Object.prototype.toString.call(e) === "[object Date]")
        return "DateTime";
      if (n === "string") {
        if (Lf.test(e))
          return "UUID";
        if (new Date(e).toString() === "Invalid Date")
          return "String";
        if (kf.test(e))
          return "DateTime";
      }
      return Df[n];
    }
    a(Dt, "getGraphQLType");
    function $f(e, t) {
      let r = t?.type;
      if (!Bf(r))
        return false;
      if (t?.namespace === "prisma" && ga.includes(r.name)) {
        let n = e?.constructor?.name;
        return typeof n == "string" && Rt.instances[n] === e && r.values.includes(n);
      }
      return typeof e == "string" && r.values.includes(e);
    }
    a($f, "isValidEnumValue");
    function In(e, t) {
      return t.reduce((n, i) => {
        let o = (0, ha.default)(e, i);
        return o < n.distance ? { distance: o, str: i } : n;
      }, { distance: Math.min(Math.floor(e.length) * 1.1, ...t.map((n) => n.length * 3)), str: null }).str;
    }
    a(In, "getSuggestion");
    function kt(e, t = false) {
      if (typeof e == "string")
        return e;
      if (e.values)
        return `enum ${e.name} {
${(0, ro.default)(e.values.join(", "), 2)}
}`;
      {
        let r = (0, ro.default)(e.fields.map((n) => {
          let i = `${n.name}`, o = `${t ? Ze.default.green(i) : i}${n.isRequired ? "" : "?"}: ${Ze.default.white(n.inputTypes.map((s) => yr(jf(s.type) ? s.type.name : It(s.type), s.isList)).join(" | "))}`;
          return n.isRequired ? o : Ze.default.dim(o);
        }).join(`
`), 2);
        return `${Ze.default.dim("type")} ${Ze.default.bold.dim(e.name)} ${Ze.default.dim("{")}
${r}
${Ze.default.dim("}")}`;
      }
    }
    a(kt, "stringifyInputType");
    function jf(e) {
      return typeof e != "string";
    }
    a(jf, "argIsInputType");
    function hr(e) {
      return typeof e == "string" ? e === "Null" ? "null" : e : e.name;
    }
    a(hr, "getInputTypeName");
    function br(e) {
      return typeof e == "string" ? e : e.name;
    }
    a(br, "getOutputTypeName");
    function no(e, t, r = false) {
      if (typeof e == "string")
        return e === "Null" ? "null" : e;
      if (e.values)
        return e.values.join(" | ");
      let n = e, i = t && n.fields.every((o) => o.inputTypes[0].location === "inputObjectTypes" || o.inputTypes[1]?.location === "inputObjectTypes");
      return r ? hr(e) : n.fields.reduce((o, s) => {
        let l = "";
        return !i && !s.isRequired ? l = s.inputTypes.map((u) => hr(u.type)).join(" | ") : l = s.inputTypes.map((u) => no(u.type, s.isRequired, true)).join(" | "), o[s.name + (s.isRequired ? "" : "?")] = l, o;
      }, {});
    }
    a(no, "inputTypeToJson");
    function ya(e, t, r) {
      let n = {};
      for (let i of e)
        n[r(i)] = i;
      for (let i of t) {
        let o = r(i);
        n[o] || (n[o] = i);
      }
      return Object.values(n);
    }
    a(ya, "unionBy");
    function Lt(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    a(Lt, "lowerCase");
    function ba(e) {
      return e.endsWith("GroupByOutputType");
    }
    a(ba, "isGroupByOutputName");
    function Bf(e) {
      return typeof e == "object" && e !== null && typeof e.name == "string" && Array.isArray(e.values);
    }
    a(Bf, "isSchemaEnum");
    var Er = class {
      constructor({ datamodel: t }) {
        this.datamodel = t, this.datamodelEnumMap = this.getDatamodelEnumMap(), this.modelMap = this.getModelMap(), this.typeMap = this.getTypeMap(), this.typeAndModelMap = this.getTypeModelMap();
      }
      getDatamodelEnumMap() {
        return ie(this.datamodel.enums, "name");
      }
      getModelMap() {
        return { ...ie(this.datamodel.models, "name") };
      }
      getTypeMap() {
        return { ...ie(this.datamodel.types, "name") };
      }
      getTypeModelMap() {
        return { ...this.getTypeMap(), ...this.getModelMap() };
      }
    };
    a(Er, "DMMFDatamodelHelper");
    var wr = class {
      constructor({ mappings: t }) {
        this.mappings = t, this.mappingsMap = this.getMappingsMap();
      }
      getMappingsMap() {
        return ie(this.mappings.modelOperations, "model");
      }
      getOtherOperationNames() {
        return [Object.values(this.mappings.otherOperations.write), Object.values(this.mappings.otherOperations.read)].flat();
      }
    };
    a(wr, "DMMFMappingsHelper");
    var xr = class {
      constructor({ schema: t }) {
        this.outputTypeToMergedOutputType = a((t2) => ({ ...t2, fields: t2.fields }), "outputTypeToMergedOutputType");
        this.schema = t, this.enumMap = this.getEnumMap(), this.queryType = this.getQueryType(), this.mutationType = this.getMutationType(), this.outputTypes = this.getOutputTypes(), this.outputTypeMap = this.getMergedOutputTypeMap(), this.resolveOutputTypes(), this.inputObjectTypes = this.schema.inputObjectTypes, this.inputTypeMap = this.getInputTypeMap(), this.resolveInputTypes(), this.resolveFieldArgumentTypes(), this.queryType = this.outputTypeMap.Query, this.mutationType = this.outputTypeMap.Mutation, this.rootFieldMap = this.getRootFieldMap();
      }
      get [Symbol.toStringTag]() {
        return "DMMFClass";
      }
      resolveOutputTypes() {
        for (let t of this.outputTypes.model) {
          for (let r of t.fields)
            typeof r.outputType.type == "string" && !Ft[r.outputType.type] && (r.outputType.type = this.outputTypeMap[r.outputType.type] || this.outputTypeMap[r.outputType.type] || this.enumMap[r.outputType.type] || r.outputType.type);
          t.fieldMap = ie(t.fields, "name");
        }
        for (let t of this.outputTypes.prisma) {
          for (let r of t.fields)
            typeof r.outputType.type == "string" && !Ft[r.outputType.type] && (r.outputType.type = this.outputTypeMap[r.outputType.type] || this.outputTypeMap[r.outputType.type] || this.enumMap[r.outputType.type] || r.outputType.type);
          t.fieldMap = ie(t.fields, "name");
        }
      }
      resolveInputTypes() {
        let t = this.inputObjectTypes.prisma;
        this.inputObjectTypes.model && t.push(...this.inputObjectTypes.model);
        for (let r of t) {
          for (let n of r.fields)
            for (let i of n.inputTypes) {
              let o = i.type;
              typeof o == "string" && !Ft[o] && (this.inputTypeMap[o] || this.enumMap[o]) && (i.type = this.inputTypeMap[o] || this.enumMap[o] || o);
            }
          r.fieldMap = ie(r.fields, "name");
        }
      }
      resolveFieldArgumentTypes() {
        for (let t of this.outputTypes.prisma)
          for (let r of t.fields)
            for (let n of r.args)
              for (let i of n.inputTypes) {
                let o = i.type;
                typeof o == "string" && !Ft[o] && (i.type = this.inputTypeMap[o] || this.enumMap[o] || o);
              }
        for (let t of this.outputTypes.model)
          for (let r of t.fields)
            for (let n of r.args)
              for (let i of n.inputTypes) {
                let o = i.type;
                typeof o == "string" && !Ft[o] && (i.type = this.inputTypeMap[o] || this.enumMap[o] || i.type);
              }
      }
      getQueryType() {
        return this.schema.outputObjectTypes.prisma.find((t) => t.name === "Query");
      }
      getMutationType() {
        return this.schema.outputObjectTypes.prisma.find((t) => t.name === "Mutation");
      }
      getOutputTypes() {
        return { model: this.schema.outputObjectTypes.model.map(this.outputTypeToMergedOutputType), prisma: this.schema.outputObjectTypes.prisma.map(this.outputTypeToMergedOutputType) };
      }
      getEnumMap() {
        return { ...ie(this.schema.enumTypes.prisma, "name"), ...this.schema.enumTypes.model ? ie(this.schema.enumTypes.model, "name") : void 0 };
      }
      hasEnumInNamespace(t, r) {
        return this.schema.enumTypes[r]?.find((n) => n.name === t) !== void 0;
      }
      getMergedOutputTypeMap() {
        return { ...ie(this.outputTypes.model, "name"), ...ie(this.outputTypes.prisma, "name") };
      }
      getInputTypeMap() {
        return { ...this.schema.inputObjectTypes.model ? ie(this.schema.inputObjectTypes.model, "name") : void 0, ...ie(this.schema.inputObjectTypes.prisma, "name") };
      }
      getRootFieldMap() {
        return { ...ie(this.queryType.fields, "name"), ...ie(this.mutationType.fields, "name") };
      }
    };
    a(xr, "DMMFSchemaHelper");
    var et = class {
      constructor(t) {
        return Object.assign(this, new Er(t), new wr(t));
      }
    };
    a(et, "BaseDMMFHelper");
    $i(et, [Er, wr]);
    var qe = class {
      constructor(t) {
        return Object.assign(this, new et(t), new xr(t));
      }
    };
    a(qe, "DMMFHelper");
    $i(qe, [et, xr]);
    var Ie;
    ((t) => {
      let e;
      ((E) => (E.findUnique = "findUnique", E.findUniqueOrThrow = "findUniqueOrThrow", E.findFirst = "findFirst", E.findFirstOrThrow = "findFirstOrThrow", E.findMany = "findMany", E.create = "create", E.createMany = "createMany", E.update = "update", E.updateMany = "updateMany", E.upsert = "upsert", E.delete = "delete", E.deleteMany = "deleteMany", E.groupBy = "groupBy", E.count = "count", E.aggregate = "aggregate", E.findRaw = "findRaw", E.aggregateRaw = "aggregateRaw"))(e = t.ModelAction || (t.ModelAction = {}));
    })(Ie || (Ie = {}));
    var jn = O(Sa());
    var ad = 100;
    var vr = [];
    typeof process < "u" && typeof process.stderr?.write != "function" && (jn.default.log = console.debug ?? console.log);
    function ld(e) {
      let t = (0, jn.default)(e), r = Object.assign((...n) => (t.log = r.log, n.length !== 0 && vr.push([e, ...n]), vr.length > ad && vr.shift(), t("", ...n)), t);
      return r;
    }
    a(ld, "debugCall");
    var so = Object.assign(ld, jn.default);
    function Pa(e = 7500) {
      let t = vr.map((r) => r.map((n) => typeof n == "string" ? n : JSON.stringify(n)).join(" ")).join(`
`);
      return t.length < e ? t : t.slice(-e);
    }
    a(Pa, "getLogs");
    function _a() {
      vr.length = 0;
    }
    a(_a, "clearLogs");
    var B = so;
    var Ca = typeof globalThis == "object" ? globalThis : global;
    var tt = "1.4.0";
    var Oa = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
    function ud(e) {
      var t = /* @__PURE__ */ new Set([e]), r = /* @__PURE__ */ new Set(), n = e.match(Oa);
      if (!n)
        return function() {
          return false;
        };
      var i = { major: +n[1], minor: +n[2], patch: +n[3], prerelease: n[4] };
      if (i.prerelease != null)
        return a(function(u) {
          return u === e;
        }, "isExactmatch");
      function o(l) {
        return r.add(l), false;
      }
      a(o, "_reject");
      function s(l) {
        return t.add(l), true;
      }
      return a(s, "_accept"), a(function(u) {
        if (t.has(u))
          return true;
        if (r.has(u))
          return false;
        var c = u.match(Oa);
        if (!c)
          return o(u);
        var p = { major: +c[1], minor: +c[2], patch: +c[3], prerelease: c[4] };
        return p.prerelease != null || i.major !== p.major ? o(u) : i.major === 0 ? i.minor === p.minor && i.patch <= p.patch ? s(u) : o(u) : i.minor <= p.minor ? s(u) : o(u);
      }, "isCompatible");
    }
    a(ud, "_makeCompatibilityCheck");
    var Ma = ud(tt);
    var cd = tt.split(".")[0];
    var Tr = Symbol.for("opentelemetry.js.api." + cd);
    var Ar = Ca;
    function Bn(e, t, r, n) {
      var i;
      n === void 0 && (n = false);
      var o = Ar[Tr] = (i = Ar[Tr]) !== null && i !== void 0 ? i : { version: tt };
      if (!n && o[e]) {
        var s = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + e);
        return r.error(s.stack || s.message), false;
      }
      if (o.version !== tt) {
        var s = new Error("@opentelemetry/api: All API registration versions must match");
        return r.error(s.stack || s.message), false;
      }
      return o[e] = t, r.debug("@opentelemetry/api: Registered a global for " + e + " v" + tt + "."), true;
    }
    a(Bn, "registerGlobal");
    function bt(e) {
      var t, r, n = (t = Ar[Tr]) === null || t === void 0 ? void 0 : t.version;
      if (!(!n || !Ma(n)))
        return (r = Ar[Tr]) === null || r === void 0 ? void 0 : r[e];
    }
    a(bt, "getGlobal");
    function qn(e, t) {
      t.debug("@opentelemetry/api: Unregistering a global for " + e + " v" + tt + ".");
      var r = Ar[Tr];
      r && delete r[e];
    }
    a(qn, "unregisterGlobal");
    var pd = function(e, t) {
      var r = typeof Symbol == "function" && e[Symbol.iterator];
      if (!r)
        return e;
      var n = r.call(e), i, o = [], s;
      try {
        for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
          o.push(i.value);
      } catch (l) {
        s = { error: l };
      } finally {
        try {
          i && !i.done && (r = n.return) && r.call(n);
        } finally {
          if (s)
            throw s.error;
        }
      }
      return o;
    };
    var fd = function(e, t, r) {
      if (r || arguments.length === 2)
        for (var n = 0, i = t.length, o; n < i; n++)
          (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
      return e.concat(o || Array.prototype.slice.call(t));
    };
    var Na = function() {
      function e(t) {
        this._namespace = t.namespace || "DiagComponentLogger";
      }
      return a(e, "DiagComponentLogger"), e.prototype.debug = function() {
        for (var t = [], r = 0; r < arguments.length; r++)
          t[r] = arguments[r];
        return Sr("debug", this._namespace, t);
      }, e.prototype.error = function() {
        for (var t = [], r = 0; r < arguments.length; r++)
          t[r] = arguments[r];
        return Sr("error", this._namespace, t);
      }, e.prototype.info = function() {
        for (var t = [], r = 0; r < arguments.length; r++)
          t[r] = arguments[r];
        return Sr("info", this._namespace, t);
      }, e.prototype.warn = function() {
        for (var t = [], r = 0; r < arguments.length; r++)
          t[r] = arguments[r];
        return Sr("warn", this._namespace, t);
      }, e.prototype.verbose = function() {
        for (var t = [], r = 0; r < arguments.length; r++)
          t[r] = arguments[r];
        return Sr("verbose", this._namespace, t);
      }, e;
    }();
    function Sr(e, t, r) {
      var n = bt("diag");
      if (!!n)
        return r.unshift(t), n[e].apply(n, fd([], pd(r), false));
    }
    a(Sr, "logProxy");
    var le;
    (function(e) {
      e[e.NONE = 0] = "NONE", e[e.ERROR = 30] = "ERROR", e[e.WARN = 50] = "WARN", e[e.INFO = 60] = "INFO", e[e.DEBUG = 70] = "DEBUG", e[e.VERBOSE = 80] = "VERBOSE", e[e.ALL = 9999] = "ALL";
    })(le || (le = {}));
    function Ra(e, t) {
      e < le.NONE ? e = le.NONE : e > le.ALL && (e = le.ALL), t = t || {};
      function r(n, i) {
        var o = t[n];
        return typeof o == "function" && e >= i ? o.bind(t) : function() {
        };
      }
      return a(r, "_filterFunc"), { error: r("error", le.ERROR), warn: r("warn", le.WARN), info: r("info", le.INFO), debug: r("debug", le.DEBUG), verbose: r("verbose", le.VERBOSE) };
    }
    a(Ra, "createLogLevelDiagLogger");
    var dd = function(e, t) {
      var r = typeof Symbol == "function" && e[Symbol.iterator];
      if (!r)
        return e;
      var n = r.call(e), i, o = [], s;
      try {
        for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
          o.push(i.value);
      } catch (l) {
        s = { error: l };
      } finally {
        try {
          i && !i.done && (r = n.return) && r.call(n);
        } finally {
          if (s)
            throw s.error;
        }
      }
      return o;
    };
    var md = function(e, t, r) {
      if (r || arguments.length === 2)
        for (var n = 0, i = t.length, o; n < i; n++)
          (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
      return e.concat(o || Array.prototype.slice.call(t));
    };
    var gd = "diag";
    var ao = function() {
      function e() {
        function t(i) {
          return function() {
            for (var o = [], s = 0; s < arguments.length; s++)
              o[s] = arguments[s];
            var l = bt("diag");
            if (!!l)
              return l[i].apply(l, md([], dd(o), false));
          };
        }
        a(t, "_logProxy");
        var r = this, n = a(function(i, o) {
          var s, l, u;
          if (o === void 0 && (o = { logLevel: le.INFO }), i === r) {
            var c = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
            return r.error((s = c.stack) !== null && s !== void 0 ? s : c.message), false;
          }
          typeof o == "number" && (o = { logLevel: o });
          var p = bt("diag"), f = Ra((l = o.logLevel) !== null && l !== void 0 ? l : le.INFO, i);
          if (p && !o.suppressOverrideMessage) {
            var d = (u = new Error().stack) !== null && u !== void 0 ? u : "<failed to generate stacktrace>";
            p.warn("Current logger will be overwritten from " + d), f.warn("Current logger will overwrite one already registered from " + d);
          }
          return Bn("diag", f, r, true);
        }, "setLogger");
        r.setLogger = n, r.disable = function() {
          qn(gd, r);
        }, r.createComponentLogger = function(i) {
          return new Na(i);
        }, r.verbose = t("verbose"), r.debug = t("debug"), r.info = t("info"), r.warn = t("warn"), r.error = t("error");
      }
      return a(e, "DiagAPI"), e.instance = function() {
        return this._instance || (this._instance = new e()), this._instance;
      }, e;
    }();
    var hd = function() {
      function e(t) {
        var r = this;
        r._currentContext = t ? new Map(t) : /* @__PURE__ */ new Map(), r.getValue = function(n) {
          return r._currentContext.get(n);
        }, r.setValue = function(n, i) {
          var o = new e(r._currentContext);
          return o._currentContext.set(n, i), o;
        }, r.deleteValue = function(n) {
          var i = new e(r._currentContext);
          return i._currentContext.delete(n), i;
        };
      }
      return a(e, "BaseContext"), e;
    }();
    var Fa = new hd();
    var yd = function(e, t) {
      var r = typeof Symbol == "function" && e[Symbol.iterator];
      if (!r)
        return e;
      var n = r.call(e), i, o = [], s;
      try {
        for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
          o.push(i.value);
      } catch (l) {
        s = { error: l };
      } finally {
        try {
          i && !i.done && (r = n.return) && r.call(n);
        } finally {
          if (s)
            throw s.error;
        }
      }
      return o;
    };
    var bd = function(e, t, r) {
      if (r || arguments.length === 2)
        for (var n = 0, i = t.length, o; n < i; n++)
          (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
      return e.concat(o || Array.prototype.slice.call(t));
    };
    var Ia = function() {
      function e() {
      }
      return a(e, "NoopContextManager"), e.prototype.active = function() {
        return Fa;
      }, e.prototype.with = function(t, r, n) {
        for (var i = [], o = 3; o < arguments.length; o++)
          i[o - 3] = arguments[o];
        return r.call.apply(r, bd([n], yd(i), false));
      }, e.prototype.bind = function(t, r) {
        return r;
      }, e.prototype.enable = function() {
        return this;
      }, e.prototype.disable = function() {
        return this;
      }, e;
    }();
    var Ed = function(e, t) {
      var r = typeof Symbol == "function" && e[Symbol.iterator];
      if (!r)
        return e;
      var n = r.call(e), i, o = [], s;
      try {
        for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
          o.push(i.value);
      } catch (l) {
        s = { error: l };
      } finally {
        try {
          i && !i.done && (r = n.return) && r.call(n);
        } finally {
          if (s)
            throw s.error;
        }
      }
      return o;
    };
    var wd = function(e, t, r) {
      if (r || arguments.length === 2)
        for (var n = 0, i = t.length, o; n < i; n++)
          (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
      return e.concat(o || Array.prototype.slice.call(t));
    };
    var lo = "context";
    var xd = new Ia();
    var Da = function() {
      function e() {
      }
      return a(e, "ContextAPI"), e.getInstance = function() {
        return this._instance || (this._instance = new e()), this._instance;
      }, e.prototype.setGlobalContextManager = function(t) {
        return Bn(lo, t, ao.instance());
      }, e.prototype.active = function() {
        return this._getContextManager().active();
      }, e.prototype.with = function(t, r, n) {
        for (var i, o = [], s = 3; s < arguments.length; s++)
          o[s - 3] = arguments[s];
        return (i = this._getContextManager()).with.apply(i, wd([t, r, n], Ed(o), false));
      }, e.prototype.bind = function(t, r) {
        return this._getContextManager().bind(t, r);
      }, e.prototype._getContextManager = function() {
        return bt(lo) || xd;
      }, e.prototype.disable = function() {
        this._getContextManager().disable(), qn(lo, ao.instance());
      }, e;
    }();
    var Vn = Da.getInstance();
    var qd = O(uo());
    var Gn = "libquery_engine";
    function Pr(e, t) {
      let r = t === "url";
      return e.includes("windows") ? r ? "query_engine.dll.node" : `query_engine-${e}.dll.node` : e.includes("darwin") ? r ? `${Gn}.dylib.node` : `${Gn}-${e}.dylib.node` : r ? `${Gn}.so.node` : `${Gn}-${e}.so.node`;
    }
    a(Pr, "getNodeAPIName");
    var za = O(require("child_process"));
    var go = O(require("fs/promises"));
    var Jn = O(require("os"));
    var Qn = Symbol("@ts-pattern/matcher");
    var La = "@ts-pattern/anonymous-select-key";
    var $a = a(function(e) {
      return Boolean(e && typeof e == "object");
    }, "e");
    var co = a(function(e) {
      return e && !!e[Qn];
    }, "r");
    var Td = a(function e(t, r, n) {
      if ($a(t)) {
        if (co(t)) {
          var i = t[Qn]().match(r), o = i.matched, s = i.selections;
          return o && s && Object.keys(s).forEach(function(u) {
            return n(u, s[u]);
          }), o;
        }
        if (!$a(r))
          return false;
        if (Array.isArray(t))
          return !!Array.isArray(r) && t.length === r.length && t.every(function(u, c) {
            return e(u, r[c], n);
          });
        if (t instanceof Map)
          return r instanceof Map && Array.from(t.keys()).every(function(u) {
            return e(t.get(u), r.get(u), n);
          });
        if (t instanceof Set) {
          if (!(r instanceof Set))
            return false;
          if (t.size === 0)
            return r.size === 0;
          if (t.size === 1) {
            var l = Array.from(t.values())[0];
            return co(l) ? Array.from(r.values()).every(function(u) {
              return e(l, u, n);
            }) : r.has(l);
          }
          return Array.from(t.values()).every(function(u) {
            return r.has(u);
          });
        }
        return Object.keys(t).every(function(u) {
          var c, p = t[u];
          return (u in r || co(c = p) && c[Qn]().matcherType === "optional") && e(p, r[u], n);
        });
      }
      return Object.is(r, t);
    }, "t");
    function Et(e) {
      var t;
      return (t = {})[Qn] = function() {
        return { match: function(r) {
          return { matched: Boolean(e(r)) };
        } };
      }, t;
    }
    a(Et, "h");
    var ib = Et(function(e) {
      return true;
    });
    var ob = Et(function(e) {
      return typeof e == "string";
    });
    var sb = Et(function(e) {
      return typeof e == "number";
    });
    var ab = Et(function(e) {
      return typeof e == "boolean";
    });
    var lb = Et(function(e) {
      return typeof e == "bigint";
    });
    var ub = Et(function(e) {
      return typeof e == "symbol";
    });
    var cb = Et(function(e) {
      return e == null;
    });
    function qt(e) {
      return new Ad(e, []);
    }
    a(qt, "K");
    var Ad = function() {
      function e(r, n) {
        this.value = void 0, this.cases = void 0, this.value = r, this.cases = n;
      }
      a(e, "n");
      var t = e.prototype;
      return t.with = function() {
        var r = [].slice.call(arguments), n = r[r.length - 1], i = [r[0]], o = [];
        return r.length === 3 && typeof r[1] == "function" ? (i.push(r[0]), o.push(r[1])) : r.length > 2 && i.push.apply(i, r.slice(1, r.length - 1)), new e(this.value, this.cases.concat([{ match: function(s) {
          var l = {}, u = Boolean(i.some(function(c) {
            return Td(c, s, function(p, f) {
              l[p] = f;
            });
          }) && o.every(function(c) {
            return c(s);
          }));
          return { matched: u, value: u && Object.keys(l).length ? La in l ? l[La] : l : s };
        }, handler: n }]));
      }, t.when = function(r, n) {
        return new e(this.value, this.cases.concat([{ match: function(i) {
          return { matched: Boolean(r(i)), value: i };
        }, handler: n }]));
      }, t.otherwise = function(r) {
        return new e(this.value, this.cases.concat([{ match: function(n) {
          return { matched: true, value: n };
        }, handler: r }])).run();
      }, t.exhaustive = function() {
        return this.run();
      }, t.run = function() {
        for (var r = this.value, n = void 0, i = 0; i < this.cases.length; i++) {
          var o = this.cases[i], s = o.match(this.value);
          if (s.matched) {
            r = s.value, n = o.handler;
            break;
          }
        }
        if (!n) {
          var l;
          try {
            l = JSON.stringify(this.value);
          } catch {
            l = this.value;
          }
          throw new Error("Pattern matching error: no pattern matches value " + l);
        }
        return n(r, this.value);
      }, e;
    }();
    var Xa = require("util");
    var Ka = O(ae());
    var Wa = O(Qa());
    function Or(e) {
      return (0, Wa.default)(e, e, { fallback: (t) => Ka.default.underline(t) });
    }
    a(Or, "link");
    var Ja = O(ae());
    var _d = { warn: Ja.default.yellow("prisma:warn") };
    var Cd = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
    function Mr(e, ...t) {
      Cd.warn() && console.warn(`${_d.warn} ${e}`, ...t);
    }
    a(Mr, "warn");
    var Od = (0, Xa.promisify)(za.default.exec);
    var we = B("prisma:get-platform");
    var Md = ["1.0.x", "1.1.x", "3.0.x"];
    async function Za() {
      let e = Jn.default.platform(), t = process.arch;
      if (e === "freebsd") {
        let s = await Hn("freebsd-version");
        if (s && s.trim().length > 0) {
          let u = /^(\d+)\.?/.exec(s);
          if (u)
            return { platform: "freebsd", targetDistro: `freebsd${u[1]}`, arch: t };
        }
      }
      if (e !== "linux")
        return { platform: e, arch: t };
      let r = await Rd(), n = await Bd(), i = Id({ arch: t, archFromUname: n, familyDistro: r.familyDistro }), { libssl: o } = await Dd(i);
      return { platform: "linux", libssl: o, arch: t, archFromUname: n, ...r };
    }
    a(Za, "getos");
    function Nd(e) {
      let t = /^ID="?([^"\n]*)"?$/im, r = /^ID_LIKE="?([^"\n]*)"?$/im, n = t.exec(e), i = n && n[1] && n[1].toLowerCase() || "", o = r.exec(e), s = o && o[1] && o[1].toLowerCase() || "", l = qt({ id: i, idLike: s }).with({ id: "alpine" }, ({ id: u }) => ({ targetDistro: "musl", familyDistro: u, originalDistro: u })).with({ id: "raspbian" }, ({ id: u }) => ({ targetDistro: "arm", familyDistro: "debian", originalDistro: u })).with({ id: "nixos" }, ({ id: u }) => ({ targetDistro: "nixos", originalDistro: u, familyDistro: "nixos" })).with({ id: "debian" }, { id: "ubuntu" }, ({ id: u }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: u })).with({ id: "rhel" }, { id: "centos" }, { id: "fedora" }, ({ id: u }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: u })).when(({ idLike: u }) => u.includes("debian") || u.includes("ubuntu"), ({ id: u }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: u })).when(({ idLike: u }) => i === "arch" || u.includes("arch"), ({ id: u }) => ({ targetDistro: "debian", familyDistro: "arch", originalDistro: u })).when(({ idLike: u }) => u.includes("centos") || u.includes("fedora") || u.includes("rhel") || u.includes("suse"), ({ id: u }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: u })).otherwise(({ id: u }) => ({ targetDistro: void 0, familyDistro: void 0, originalDistro: u }));
      return we(`Found distro info:
${JSON.stringify(l, null, 2)}`), l;
    }
    a(Nd, "parseDistro");
    async function Rd() {
      let e = "/etc/os-release";
      try {
        let t = await go.default.readFile(e, { encoding: "utf-8" });
        return Nd(t);
      } catch {
        return { targetDistro: void 0, familyDistro: void 0, originalDistro: void 0 };
      }
    }
    a(Rd, "resolveDistro");
    function Fd(e) {
      let t = /^OpenSSL\s(\d+\.\d+)\.\d+/.exec(e);
      if (t) {
        let r = `${t[1]}.x`;
        return el(r);
      }
    }
    a(Fd, "parseOpenSSLVersion");
    function Ha(e) {
      let t = /libssl\.so\.(\d)(\.\d)?/.exec(e);
      if (t) {
        let r = `${t[1]}${t[2] ?? ".0"}.x`;
        return el(r);
      }
    }
    a(Ha, "parseLibSSLVersion");
    function el(e) {
      let t = (() => {
        if (rl(e))
          return e;
        let r = e.split(".");
        return r[1] = "0", r.join(".");
      })();
      if (Md.includes(t))
        return t;
    }
    a(el, "sanitiseSSLVersion");
    function Id(e) {
      return qt(e).with({ familyDistro: "musl" }, () => (we('Trying platform-specific paths for "alpine"'), ["/lib"])).with({ familyDistro: "debian" }, ({ archFromUname: t }) => (we('Trying platform-specific paths for "debian" (and "ubuntu")'), [`/usr/lib/${t}-linux-gnu`, `/lib/${t}-linux-gnu`])).with({ familyDistro: "rhel" }, () => (we('Trying platform-specific paths for "rhel"'), ["/lib64", "/usr/lib64"])).otherwise(({ familyDistro: t, arch: r, archFromUname: n }) => (we(`Don't know any platform-specific paths for "${t}" on ${r} (${n})`), []));
    }
    a(Id, "computeLibSSLSpecificPaths");
    async function Dd(e) {
      let t = 'grep -v "libssl.so.0"', r = await Ya(e);
      if (r) {
        we(`Found libssl.so file using platform-specific paths: ${r}`);
        let o = Ha(r);
        if (we(`The parsed libssl version is: ${o}`), o)
          return { libssl: o, strategy: "libssl-specific-path" };
      }
      we('Falling back to "ldconfig" and other generic paths');
      let n = await Hn(`ldconfig -p | sed "s/.*=>s*//" | sed "s|.*/||" | grep libssl | sort | ${t}`);
      if (n || (n = await Ya(["/lib64", "/usr/lib64", "/lib"])), n) {
        we(`Found libssl.so file using "ldconfig" or other generic paths: ${n}`);
        let o = Ha(n);
        if (o)
          return { libssl: o, strategy: "ldconfig" };
      }
      let i = await Hn("openssl version -v");
      if (i) {
        we(`Found openssl binary with version: ${i}`);
        let o = Fd(i);
        if (we(`The parsed openssl version is: ${o}`), o)
          return { libssl: o, strategy: "openssl-binary" };
      }
      return we("Couldn't find any version of libssl or OpenSSL in the system"), {};
    }
    a(Dd, "getSSLVersion");
    async function Ya(e) {
      for (let t of e) {
        let r = await kd(t);
        if (r)
          return r;
      }
    }
    a(Ya, "findLibSSLInLocations");
    async function kd(e) {
      try {
        return (await go.default.readdir(e)).find((r) => r.startsWith("libssl.so") && !r.startsWith("libssl.so.0"));
      } catch (t) {
        if (t.code === "ENOENT")
          return;
        throw t;
      }
    }
    a(kd, "findLibSSL");
    async function rt() {
      let { binaryTarget: e } = await tl();
      return e;
    }
    a(rt, "getPlatform");
    function Ld(e) {
      return e.binaryTarget !== void 0;
    }
    a(Ld, "isPlatformWithOSResultDefined");
    async function ho() {
      let { memoized: e, ...t } = await tl();
      return t;
    }
    a(ho, "getPlatformWithOSResult");
    var Wn = {};
    async function tl() {
      if (Ld(Wn))
        return Promise.resolve({ ...Wn, memoized: true });
      let e = await Za(), t = $d(e);
      return Wn = { ...e, binaryTarget: t }, { ...Wn, memoized: false };
    }
    a(tl, "getPlatformMemoized");
    function $d(e) {
      let { platform: t, arch: r, archFromUname: n, libssl: i, targetDistro: o, familyDistro: s, originalDistro: l } = e;
      t === "linux" && !["x64", "arm64"].includes(r) && Mr(`Prisma only officially supports Linux on amd64 (x86_64) and arm64 (aarch64) system architectures. If you are using your own custom Prisma engines, you can ignore this warning, as long as you've compiled the engines for your system architecture "${n}".`);
      let u = "1.1.x";
      if (t === "linux" && i === void 0) {
        let p = qt({ familyDistro: s }).with({ familyDistro: "debian" }, () => "Please manually install OpenSSL via `apt-get update -y && apt-get install -y openssl` and try installing Prisma again. If you're running Prisma on Docker, you may also try to replace your base image with `node:lts-slim`, which already ships with OpenSSL installed.").otherwise(() => "Please manually install OpenSSL and try installing Prisma again.");
        Mr(`Prisma failed to detect the libssl/openssl version to use, and may not work as expected. Defaulting to "openssl-${u}".
${p}`);
      }
      let c = "debian";
      if (t === "linux" && o === void 0 && Mr(`Prisma doesn't know which engines to download for the Linux distro "${l}". Falling back to Prisma engines built "${c}".
Please report your experience by creating an issue at ${Or("https://github.com/prisma/prisma/issues")} so we can add your distro to the list of known supported distros.`), t === "darwin" && r === "arm64")
        return "darwin-arm64";
      if (t === "darwin")
        return "darwin";
      if (t === "win32")
        return "windows";
      if (t === "freebsd")
        return o;
      if (t === "openbsd")
        return "openbsd";
      if (t === "netbsd")
        return "netbsd";
      if (t === "linux" && o === "nixos")
        return "linux-nixos";
      if (t === "linux" && r === "arm64")
        return `${o === "musl" ? "linux-musl-arm64" : "linux-arm64"}-openssl-${i || u}`;
      if (t === "linux" && r === "arm")
        return `linux-arm-openssl-${i || u}`;
      if (t === "linux" && o === "musl") {
        let p = "linux-musl";
        return !i || rl(i) ? p : `${p}-openssl-${i}`;
      }
      return t === "linux" && o && i ? `${o}-openssl-${i}` : (t !== "linux" && Mr(`Prisma detected unknown OS "${t}" and may not work as expected. Defaulting to "linux".`), i ? `${c}-openssl-${i}` : o ? `${o}-openssl-${u}` : `${c}-openssl-${u}`);
    }
    a($d, "getPlatformInternal");
    async function jd(e) {
      try {
        return await e();
      } catch {
        return;
      }
    }
    a(jd, "discardError");
    function Hn(e) {
      return jd(async () => {
        let t = await Od(e);
        return we(`Command "${e}" successfully returned "${t.stdout}"`), t.stdout;
      });
    }
    a(Hn, "getCommandOutput");
    async function Bd() {
      return typeof Jn.default.machine == "function" ? Jn.default.machine() : (await Hn("uname -m"))?.trim();
    }
    a(Bd, "getArchFromUname");
    function rl(e) {
      return e.startsWith("1.");
    }
    a(rl, "isLibssl1x");
    var nl = O(require("fs"));
    function yo() {
      let e = process.env.PRISMA_QUERY_ENGINE_LIBRARY;
      if (!(e && nl.default.existsSync(e)) && (process.arch === "x32" || process.arch === "ia32"))
        throw new Error('The default query engine type (Node-API, "library") is currently not supported for 32bit Node. Please set `engineType = "binary"` in the "generator" block of your "schema.prisma" file (or use the environment variables "PRISMA_CLIENT_ENGINE_TYPE=binary" and/or "PRISMA_CLI_QUERY_ENGINE_TYPE=binary".)');
    }
    a(yo, "isNodeAPISupported");
    var bo = ["darwin", "darwin-arm64", "debian-openssl-1.0.x", "debian-openssl-1.1.x", "debian-openssl-3.0.x", "rhel-openssl-1.0.x", "rhel-openssl-1.1.x", "rhel-openssl-3.0.x", "linux-arm64-openssl-1.1.x", "linux-arm64-openssl-1.0.x", "linux-arm64-openssl-3.0.x", "linux-arm-openssl-1.1.x", "linux-arm-openssl-1.0.x", "linux-arm-openssl-3.0.x", "linux-musl", "linux-musl-openssl-3.0.x", "linux-musl-arm64-openssl-1.1.x", "linux-musl-arm64-openssl-3.0.x", "linux-nixos", "windows", "freebsd11", "freebsd12", "freebsd13", "openbsd", "netbsd", "arm"];
    var q = O(require("path"));
    var Vd = O(uo());
    var jb = B("prisma:engines");
    function il() {
      return q.default.join(__dirname, "../");
    }
    a(il, "getEnginesPath");
    var Bb = "libquery-engine";
    q.default.join(__dirname, "../query-engine-darwin");
    q.default.join(__dirname, "../query-engine-darwin-arm64");
    q.default.join(__dirname, "../query-engine-debian-openssl-1.0.x");
    q.default.join(__dirname, "../query-engine-debian-openssl-1.1.x");
    q.default.join(__dirname, "../query-engine-debian-openssl-3.0.x");
    q.default.join(__dirname, "../query-engine-rhel-openssl-1.0.x");
    q.default.join(__dirname, "../query-engine-rhel-openssl-1.1.x");
    q.default.join(__dirname, "../query-engine-rhel-openssl-3.0.x");
    q.default.join(__dirname, "../libquery_engine-darwin.dylib.node");
    q.default.join(__dirname, "../libquery_engine-darwin-arm64.dylib.node");
    q.default.join(__dirname, "../libquery_engine-debian-openssl-1.0.x.so.node");
    q.default.join(__dirname, "../libquery_engine-debian-openssl-1.1.x.so.node");
    q.default.join(__dirname, "../libquery_engine-debian-openssl-3.0.x.so.node");
    q.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.0.x.so.node");
    q.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.1.x.so.node");
    q.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-3.0.x.so.node");
    q.default.join(__dirname, "../libquery_engine-linux-musl.so.node");
    q.default.join(__dirname, "../libquery_engine-linux-musl-openssl-3.0.x.so.node");
    q.default.join(__dirname, "../libquery_engine-rhel-openssl-1.0.x.so.node");
    q.default.join(__dirname, "../libquery_engine-rhel-openssl-1.1.x.so.node");
    q.default.join(__dirname, "../libquery_engine-rhel-openssl-3.0.x.so.node");
    q.default.join(__dirname, "../query_engine-windows.dll.node");
    var nt = class {
    };
    a(nt, "Engine");
    var G = class extends Error {
      constructor(r, n, i) {
        super(r);
        this.clientVersion = n, this.errorCode = i, Error.captureStackTrace(G);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
      }
    };
    a(G, "PrismaClientInitializationError");
    var X = class extends Error {
      constructor(r, { code: n, clientVersion: i, meta: o, batchRequestIdx: s }) {
        super(r);
        this.code = n, this.clientVersion = i, this.meta = o, Object.defineProperty(this, "batchRequestIdx", { value: s, enumerable: false, writable: true });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
      }
    };
    a(X, "PrismaClientKnownRequestError");
    var fe = class extends Error {
      constructor(r, n) {
        super(r);
        this.clientVersion = n;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
      }
    };
    a(fe, "PrismaClientRustPanicError");
    var Z = class extends Error {
      constructor(r, { clientVersion: n, batchRequestIdx: i }) {
        super(r);
        this.clientVersion = n, Object.defineProperty(this, "batchRequestIdx", { value: i, writable: true, enumerable: false });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
      }
    };
    a(Z, "PrismaClientUnknownRequestError");
    var gl = O(ae());
    var Eo = O(Nr());
    var cl = O(ll());
    var nE = B("plusX");
    function ul(e) {
      return { fromEnvVar: null, value: e };
    }
    a(ul, "transformPlatformToEnvValue");
    function pl(e, t) {
      return e = e || [], e.find((r) => r.value === "native") ? [...e, ul(t)] : [ul("native"), ...e];
    }
    a(pl, "fixBinaryTargets");
    function fl({ title: e, user: t = "prisma", repo: r = "prisma", template: n = "bug_report.md", body: i }) {
      return (0, cl.default)({ user: t, repo: r, template: n, title: e, body: i });
    }
    a(fl, "getGitHubIssueUrl");
    function dl(e) {
      return e ? e.replace(/".*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (t) => `${t[0]}5`) : "";
    }
    a(dl, "maskQuery");
    function ml(e) {
      return e.split(`
`).map((t) => t.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "")).join(`
`);
    }
    a(ml, "normalizeLogs");
    function hl({ version: e, platform: t, title: r, description: n, engineVersion: i, database: o, query: s }) {
      let l = Pa(6e3 - (s?.length ?? 0)), u = ml((0, Eo.default)(l)), c = n ? `# Description
\`\`\`
${n}
\`\`\`` : "", p = (0, Eo.default)(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${process.version?.padEnd(19)}| 
| OS              | ${t?.padEnd(19)}|
| Prisma Client   | ${e?.padEnd(19)}|
| Query Engine    | ${i?.padEnd(19)}|
| Database        | ${o?.padEnd(19)}|

${c}

## Logs
\`\`\`
${u}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? dl(s) : ""}
\`\`\`
`), f = fl({ title: r, body: p });
      return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${gl.default.underline(f)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
    }
    a(hl, "getErrorMessageWithLink");
    function yl({ error: e, user_facing_error: t }, r) {
      return t.error_code ? new X(t.message, { code: t.error_code, clientVersion: r, meta: t.meta, batchRequestIdx: t.batch_request_idx }) : new Z(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
    }
    a(yl, "prismaGraphQLToJSError");
    function bl(e, t) {
      return Gd(e) ? !t || t.kind === "itx" ? { batch: e, transaction: false } : { batch: e, transaction: true, isolationLevel: t.options.isolationLevel } : { batch: e, transaction: t?.kind === "batch" ? { isolationLevel: t.options.isolationLevel } : void 0 };
    }
    a(bl, "getBatchRequestPayload");
    function Gd(e) {
      return typeof e[0].query == "string";
    }
    a(Gd, "isGraphQLBatch");
    var El = O(fr());
    function wl(e) {
      return String(new zn(e));
    }
    a(wl, "printGeneratorConfig");
    var zn = class {
      constructor(t) {
        this.config = t;
      }
      toString() {
        let { config: t } = this, r = t.provider.fromEnvVar ? `env("${t.provider.fromEnvVar}")` : t.provider.value, n = JSON.parse(JSON.stringify({ provider: r, binaryTargets: Qd(t.binaryTargets) }));
        return `generator ${t.name} {
${(0, El.default)(Kd(n), 2)}
}`;
      }
    };
    a(zn, "GeneratorConfigClass");
    function Qd(e) {
      let t;
      if (e.length > 0) {
        let r = e.find((n) => n.fromEnvVar !== null);
        r ? t = `env("${r.fromEnvVar}")` : t = e.map((n) => n.value);
      } else
        t = void 0;
      return t;
    }
    a(Qd, "getOriginalBinaryTargetsValue");
    function Kd(e) {
      let t = Object.keys(e).reduce((r, n) => Math.max(r, n.length), 0);
      return Object.entries(e).map(([r, n]) => `${r.padEnd(t)} = ${Wd(n)}`).join(`
`);
    }
    a(Kd, "printDatamodelObject");
    function Wd(e) {
      return JSON.parse(JSON.stringify(e, (t, r) => Array.isArray(r) ? `[${r.map((n) => JSON.stringify(n)).join(", ")}]` : JSON.stringify(r)));
    }
    a(Wd, "niceStringify");
    var xl = typeof globalThis == "object" ? globalThis : global;
    var it = "1.3.0";
    var vl = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
    function Jd(e) {
      var t = /* @__PURE__ */ new Set([e]), r = /* @__PURE__ */ new Set(), n = e.match(vl);
      if (!n)
        return function() {
          return false;
        };
      var i = { major: +n[1], minor: +n[2], patch: +n[3], prerelease: n[4] };
      if (i.prerelease != null)
        return a(function(u) {
          return u === e;
        }, "isExactmatch");
      function o(l) {
        return r.add(l), false;
      }
      a(o, "_reject");
      function s(l) {
        return t.add(l), true;
      }
      return a(s, "_accept"), a(function(u) {
        if (t.has(u))
          return true;
        if (r.has(u))
          return false;
        var c = u.match(vl);
        if (!c)
          return o(u);
        var p = { major: +c[1], minor: +c[2], patch: +c[3], prerelease: c[4] };
        return p.prerelease != null || i.major !== p.major ? o(u) : i.major === 0 ? i.minor === p.minor && i.patch <= p.patch ? s(u) : o(u) : i.minor <= p.minor ? s(u) : o(u);
      }, "isCompatible");
    }
    a(Jd, "_makeCompatibilityCheck");
    var Tl = Jd(it);
    var Hd = it.split(".")[0];
    var Rr = Symbol.for("opentelemetry.js.api." + Hd);
    var Fr = xl;
    function Gt(e, t, r, n) {
      var i;
      n === void 0 && (n = false);
      var o = Fr[Rr] = (i = Fr[Rr]) !== null && i !== void 0 ? i : { version: it };
      if (!n && o[e]) {
        var s = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + e);
        return r.error(s.stack || s.message), false;
      }
      if (o.version !== it) {
        var s = new Error("@opentelemetry/api: All API registration versions must match");
        return r.error(s.stack || s.message), false;
      }
      return o[e] = t, r.debug("@opentelemetry/api: Registered a global for " + e + " v" + it + "."), true;
    }
    a(Gt, "registerGlobal");
    function Ve(e) {
      var t, r, n = (t = Fr[Rr]) === null || t === void 0 ? void 0 : t.version;
      if (!(!n || !Tl(n)))
        return (r = Fr[Rr]) === null || r === void 0 ? void 0 : r[e];
    }
    a(Ve, "getGlobal");
    function Qt(e, t) {
      t.debug("@opentelemetry/api: Unregistering a global for " + e + " v" + it + ".");
      var r = Fr[Rr];
      r && delete r[e];
    }
    a(Qt, "unregisterGlobal");
    var Yd = function(e, t) {
      var r = typeof Symbol == "function" && e[Symbol.iterator];
      if (!r)
        return e;
      var n = r.call(e), i, o = [], s;
      try {
        for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
          o.push(i.value);
      } catch (l) {
        s = { error: l };
      } finally {
        try {
          i && !i.done && (r = n.return) && r.call(n);
        } finally {
          if (s)
            throw s.error;
        }
      }
      return o;
    };
    var zd = function(e, t, r) {
      if (r || arguments.length === 2)
        for (var n = 0, i = t.length, o; n < i; n++)
          (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
      return e.concat(o || Array.prototype.slice.call(t));
    };
    var Al = function() {
      function e(t) {
        this._namespace = t.namespace || "DiagComponentLogger";
      }
      return a(e, "DiagComponentLogger"), e.prototype.debug = function() {
        for (var t = [], r = 0; r < arguments.length; r++)
          t[r] = arguments[r];
        return Ir("debug", this._namespace, t);
      }, e.prototype.error = function() {
        for (var t = [], r = 0; r < arguments.length; r++)
          t[r] = arguments[r];
        return Ir("error", this._namespace, t);
      }, e.prototype.info = function() {
        for (var t = [], r = 0; r < arguments.length; r++)
          t[r] = arguments[r];
        return Ir("info", this._namespace, t);
      }, e.prototype.warn = function() {
        for (var t = [], r = 0; r < arguments.length; r++)
          t[r] = arguments[r];
        return Ir("warn", this._namespace, t);
      }, e.prototype.verbose = function() {
        for (var t = [], r = 0; r < arguments.length; r++)
          t[r] = arguments[r];
        return Ir("verbose", this._namespace, t);
      }, e;
    }();
    function Ir(e, t, r) {
      var n = Ve("diag");
      if (!!n)
        return r.unshift(t), n[e].apply(n, zd([], Yd(r), false));
    }
    a(Ir, "logProxy");
    var ue;
    (function(e) {
      e[e.NONE = 0] = "NONE", e[e.ERROR = 30] = "ERROR", e[e.WARN = 50] = "WARN", e[e.INFO = 60] = "INFO", e[e.DEBUG = 70] = "DEBUG", e[e.VERBOSE = 80] = "VERBOSE", e[e.ALL = 9999] = "ALL";
    })(ue || (ue = {}));
    function Sl(e, t) {
      e < ue.NONE ? e = ue.NONE : e > ue.ALL && (e = ue.ALL), t = t || {};
      function r(n, i) {
        var o = t[n];
        return typeof o == "function" && e >= i ? o.bind(t) : function() {
        };
      }
      return a(r, "_filterFunc"), { error: r("error", ue.ERROR), warn: r("warn", ue.WARN), info: r("info", ue.INFO), debug: r("debug", ue.DEBUG), verbose: r("verbose", ue.VERBOSE) };
    }
    a(Sl, "createLogLevelDiagLogger");
    var Xd = function(e, t) {
      var r = typeof Symbol == "function" && e[Symbol.iterator];
      if (!r)
        return e;
      var n = r.call(e), i, o = [], s;
      try {
        for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
          o.push(i.value);
      } catch (l) {
        s = { error: l };
      } finally {
        try {
          i && !i.done && (r = n.return) && r.call(n);
        } finally {
          if (s)
            throw s.error;
        }
      }
      return o;
    };
    var Zd = function(e, t, r) {
      if (r || arguments.length === 2)
        for (var n = 0, i = t.length, o; n < i; n++)
          (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
      return e.concat(o || Array.prototype.slice.call(t));
    };
    var em = "diag";
    var ot = function() {
      function e() {
        function t(i) {
          return function() {
            for (var o = [], s = 0; s < arguments.length; s++)
              o[s] = arguments[s];
            var l = Ve("diag");
            if (!!l)
              return l[i].apply(l, Zd([], Xd(o), false));
          };
        }
        a(t, "_logProxy");
        var r = this, n = a(function(i, o) {
          var s, l, u;
          if (o === void 0 && (o = { logLevel: ue.INFO }), i === r) {
            var c = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
            return r.error((s = c.stack) !== null && s !== void 0 ? s : c.message), false;
          }
          typeof o == "number" && (o = { logLevel: o });
          var p = Ve("diag"), f = Sl((l = o.logLevel) !== null && l !== void 0 ? l : ue.INFO, i);
          if (p && !o.suppressOverrideMessage) {
            var d = (u = new Error().stack) !== null && u !== void 0 ? u : "<failed to generate stacktrace>";
            p.warn("Current logger will be overwritten from " + d), f.warn("Current logger will overwrite one already registered from " + d);
          }
          return Gt("diag", f, r, true);
        }, "setLogger");
        r.setLogger = n, r.disable = function() {
          Qt(em, r);
        }, r.createComponentLogger = function(i) {
          return new Al(i);
        }, r.verbose = t("verbose"), r.debug = t("debug"), r.info = t("info"), r.warn = t("warn"), r.error = t("error");
      }
      return a(e, "DiagAPI"), e.instance = function() {
        return this._instance || (this._instance = new e()), this._instance;
      }, e;
    }();
    function wo(e) {
      return Symbol.for(e);
    }
    a(wo, "createContextKey");
    var tm = function() {
      function e(t) {
        var r = this;
        r._currentContext = t ? new Map(t) : /* @__PURE__ */ new Map(), r.getValue = function(n) {
          return r._currentContext.get(n);
        }, r.setValue = function(n, i) {
          var o = new e(r._currentContext);
          return o._currentContext.set(n, i), o;
        }, r.deleteValue = function(n) {
          var i = new e(r._currentContext);
          return i._currentContext.delete(n), i;
        };
      }
      return a(e, "BaseContext"), e;
    }();
    var Dr = new tm();
    var rm = function(e, t) {
      var r = typeof Symbol == "function" && e[Symbol.iterator];
      if (!r)
        return e;
      var n = r.call(e), i, o = [], s;
      try {
        for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
          o.push(i.value);
      } catch (l) {
        s = { error: l };
      } finally {
        try {
          i && !i.done && (r = n.return) && r.call(n);
        } finally {
          if (s)
            throw s.error;
        }
      }
      return o;
    };
    var nm = function(e, t, r) {
      if (r || arguments.length === 2)
        for (var n = 0, i = t.length, o; n < i; n++)
          (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
      return e.concat(o || Array.prototype.slice.call(t));
    };
    var Pl = function() {
      function e() {
      }
      return a(e, "NoopContextManager"), e.prototype.active = function() {
        return Dr;
      }, e.prototype.with = function(t, r, n) {
        for (var i = [], o = 3; o < arguments.length; o++)
          i[o - 3] = arguments[o];
        return r.call.apply(r, nm([n], rm(i), false));
      }, e.prototype.bind = function(t, r) {
        return r;
      }, e.prototype.enable = function() {
        return this;
      }, e.prototype.disable = function() {
        return this;
      }, e;
    }();
    var im = function(e, t) {
      var r = typeof Symbol == "function" && e[Symbol.iterator];
      if (!r)
        return e;
      var n = r.call(e), i, o = [], s;
      try {
        for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
          o.push(i.value);
      } catch (l) {
        s = { error: l };
      } finally {
        try {
          i && !i.done && (r = n.return) && r.call(n);
        } finally {
          if (s)
            throw s.error;
        }
      }
      return o;
    };
    var om = function(e, t, r) {
      if (r || arguments.length === 2)
        for (var n = 0, i = t.length, o; n < i; n++)
          (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
      return e.concat(o || Array.prototype.slice.call(t));
    };
    var xo = "context";
    var sm = new Pl();
    var Kt = function() {
      function e() {
      }
      return a(e, "ContextAPI"), e.getInstance = function() {
        return this._instance || (this._instance = new e()), this._instance;
      }, e.prototype.setGlobalContextManager = function(t) {
        return Gt(xo, t, ot.instance());
      }, e.prototype.active = function() {
        return this._getContextManager().active();
      }, e.prototype.with = function(t, r, n) {
        for (var i, o = [], s = 3; s < arguments.length; s++)
          o[s - 3] = arguments[s];
        return (i = this._getContextManager()).with.apply(i, om([t, r, n], im(o), false));
      }, e.prototype.bind = function(t, r) {
        return this._getContextManager().bind(t, r);
      }, e.prototype._getContextManager = function() {
        return Ve(xo) || sm;
      }, e.prototype.disable = function() {
        this._getContextManager().disable(), Qt(xo, ot.instance());
      }, e;
    }();
    var st;
    (function(e) {
      e[e.NONE = 0] = "NONE", e[e.SAMPLED = 1] = "SAMPLED";
    })(st || (st = {}));
    var vo = "0000000000000000";
    var To = "00000000000000000000000000000000";
    var _l = { traceId: To, spanId: vo, traceFlags: st.NONE };
    var at = function() {
      function e(t) {
        t === void 0 && (t = _l), this._spanContext = t;
      }
      return a(e, "NonRecordingSpan"), e.prototype.spanContext = function() {
        return this._spanContext;
      }, e.prototype.setAttribute = function(t, r) {
        return this;
      }, e.prototype.setAttributes = function(t) {
        return this;
      }, e.prototype.addEvent = function(t, r) {
        return this;
      }, e.prototype.setStatus = function(t) {
        return this;
      }, e.prototype.updateName = function(t) {
        return this;
      }, e.prototype.end = function(t) {
      }, e.prototype.isRecording = function() {
        return false;
      }, e.prototype.recordException = function(t, r) {
      }, e;
    }();
    var Ao = wo("OpenTelemetry Context Key SPAN");
    function Xn(e) {
      return e.getValue(Ao) || void 0;
    }
    a(Xn, "getSpan");
    function Cl() {
      return Xn(Kt.getInstance().active());
    }
    a(Cl, "getActiveSpan");
    function kr(e, t) {
      return e.setValue(Ao, t);
    }
    a(kr, "setSpan");
    function Ol(e) {
      return e.deleteValue(Ao);
    }
    a(Ol, "deleteSpan");
    function Ml(e, t) {
      return kr(e, new at(t));
    }
    a(Ml, "setSpanContext");
    function Zn(e) {
      var t;
      return (t = Xn(e)) === null || t === void 0 ? void 0 : t.spanContext();
    }
    a(Zn, "getSpanContext");
    var am = /^([0-9a-f]{32})$/i;
    var lm = /^[0-9a-f]{16}$/i;
    function um(e) {
      return am.test(e) && e !== To;
    }
    a(um, "isValidTraceId");
    function cm(e) {
      return lm.test(e) && e !== vo;
    }
    a(cm, "isValidSpanId");
    function ei(e) {
      return um(e.traceId) && cm(e.spanId);
    }
    a(ei, "isSpanContextValid");
    function Nl(e) {
      return new at(e);
    }
    a(Nl, "wrapSpanContext");
    var Rl = Kt.getInstance();
    var ti = function() {
      function e() {
      }
      return a(e, "NoopTracer"), e.prototype.startSpan = function(t, r, n) {
        var i = Boolean(r?.root);
        if (i)
          return new at();
        var o = n && Zn(n);
        return pm(o) && ei(o) ? new at(o) : new at();
      }, e.prototype.startActiveSpan = function(t, r, n, i) {
        var o, s, l;
        if (!(arguments.length < 2)) {
          arguments.length === 2 ? l = r : arguments.length === 3 ? (o = r, l = n) : (o = r, s = n, l = i);
          var u = s ?? Rl.active(), c = this.startSpan(t, o, u), p = kr(u, c);
          return Rl.with(p, l, void 0, c);
        }
      }, e;
    }();
    function pm(e) {
      return typeof e == "object" && typeof e.spanId == "string" && typeof e.traceId == "string" && typeof e.traceFlags == "number";
    }
    a(pm, "isSpanContext");
    var fm = new ti();
    var Fl = function() {
      function e(t, r, n, i) {
        this._provider = t, this.name = r, this.version = n, this.options = i;
      }
      return a(e, "ProxyTracer"), e.prototype.startSpan = function(t, r, n) {
        return this._getTracer().startSpan(t, r, n);
      }, e.prototype.startActiveSpan = function(t, r, n, i) {
        var o = this._getTracer();
        return Reflect.apply(o.startActiveSpan, o, arguments);
      }, e.prototype._getTracer = function() {
        if (this._delegate)
          return this._delegate;
        var t = this._provider.getDelegateTracer(this.name, this.version, this.options);
        return t ? (this._delegate = t, this._delegate) : fm;
      }, e;
    }();
    var Il = function() {
      function e() {
      }
      return a(e, "NoopTracerProvider"), e.prototype.getTracer = function(t, r, n) {
        return new ti();
      }, e;
    }();
    var dm = new Il();
    var So = function() {
      function e() {
      }
      return a(e, "ProxyTracerProvider"), e.prototype.getTracer = function(t, r, n) {
        var i;
        return (i = this.getDelegateTracer(t, r, n)) !== null && i !== void 0 ? i : new Fl(this, t, r, n);
      }, e.prototype.getDelegate = function() {
        var t;
        return (t = this._delegate) !== null && t !== void 0 ? t : dm;
      }, e.prototype.setDelegate = function(t) {
        this._delegate = t;
      }, e.prototype.getDelegateTracer = function(t, r, n) {
        var i;
        return (i = this._delegate) === null || i === void 0 ? void 0 : i.getTracer(t, r, n);
      }, e;
    }();
    var Lr;
    (function(e) {
      e[e.INTERNAL = 0] = "INTERNAL", e[e.SERVER = 1] = "SERVER", e[e.CLIENT = 2] = "CLIENT", e[e.PRODUCER = 3] = "PRODUCER", e[e.CONSUMER = 4] = "CONSUMER";
    })(Lr || (Lr = {}));
    var $r;
    (function(e) {
      e[e.UNSET = 0] = "UNSET", e[e.OK = 1] = "OK", e[e.ERROR = 2] = "ERROR";
    })($r || ($r = {}));
    var Wt = Kt.getInstance();
    var de = ot.instance();
    var Po = "trace";
    var Dl = function() {
      function e() {
        this._proxyTracerProvider = new So(), this.wrapSpanContext = Nl, this.isSpanContextValid = ei, this.deleteSpan = Ol, this.getSpan = Xn, this.getActiveSpan = Cl, this.getSpanContext = Zn, this.setSpan = kr, this.setSpanContext = Ml;
      }
      return a(e, "TraceAPI"), e.getInstance = function() {
        return this._instance || (this._instance = new e()), this._instance;
      }, e.prototype.setGlobalTracerProvider = function(t) {
        var r = Gt(Po, this._proxyTracerProvider, ot.instance());
        return r && this._proxyTracerProvider.setDelegate(t), r;
      }, e.prototype.getTracerProvider = function() {
        return Ve(Po) || this._proxyTracerProvider;
      }, e.prototype.getTracer = function(t, r) {
        return this.getTracerProvider().getTracer(t, r);
      }, e.prototype.disable = function() {
        Qt(Po, ot.instance()), this._proxyTracerProvider = new So();
      }, e;
    }();
    var wt = Dl.getInstance();
    var kl = function(e) {
      var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
      if (r)
        return r.call(e);
      if (e && typeof e.length == "number")
        return { next: function() {
          return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
        } };
      throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    var gm = function(e, t) {
      var r = typeof Symbol == "function" && e[Symbol.iterator];
      if (!r)
        return e;
      var n = r.call(e), i, o = [], s;
      try {
        for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
          o.push(i.value);
      } catch (l) {
        s = { error: l };
      } finally {
        try {
          i && !i.done && (r = n.return) && r.call(n);
        } finally {
          if (s)
            throw s.error;
        }
      }
      return o;
    };
    function Ll(e) {
      var t, r, n = {};
      if (typeof e != "object" || e == null)
        return n;
      try {
        for (var i = kl(Object.entries(e)), o = i.next(); !o.done; o = i.next()) {
          var s = gm(o.value, 2), l = s[0], u = s[1];
          if (!hm(l)) {
            de.warn("Invalid attribute key: " + l);
            continue;
          }
          if (!_o(u)) {
            de.warn("Invalid attribute value set for key: " + l);
            continue;
          }
          Array.isArray(u) ? n[l] = u.slice() : n[l] = u;
        }
      } catch (c) {
        t = { error: c };
      } finally {
        try {
          o && !o.done && (r = i.return) && r.call(i);
        } finally {
          if (t)
            throw t.error;
        }
      }
      return n;
    }
    a(Ll, "sanitizeAttributes");
    function hm(e) {
      return typeof e == "string" && e.length > 0;
    }
    a(hm, "isAttributeKey");
    function _o(e) {
      return e == null ? true : Array.isArray(e) ? ym(e) : $l(e);
    }
    a(_o, "isAttributeValue");
    function ym(e) {
      var t, r, n;
      try {
        for (var i = kl(e), o = i.next(); !o.done; o = i.next()) {
          var s = o.value;
          if (s != null) {
            if (!n) {
              if ($l(s)) {
                n = typeof s;
                continue;
              }
              return false;
            }
            if (typeof s !== n)
              return false;
          }
        }
      } catch (l) {
        t = { error: l };
      } finally {
        try {
          o && !o.done && (r = i.return) && r.call(i);
        } finally {
          if (t)
            throw t.error;
        }
      }
      return true;
    }
    a(ym, "isHomogeneousAttributeValueArray");
    function $l(e) {
      switch (typeof e) {
        case "number":
        case "boolean":
        case "string":
          return true;
      }
      return false;
    }
    a($l, "isValidPrimitiveAttributeValue");
    var jl = require("perf_hooks");
    var Jt = jl.performance;
    var lt = { AWS_LAMBDA_INVOKED_ARN: "aws.lambda.invoked_arn", DB_SYSTEM: "db.system", DB_CONNECTION_STRING: "db.connection_string", DB_USER: "db.user", DB_JDBC_DRIVER_CLASSNAME: "db.jdbc.driver_classname", DB_NAME: "db.name", DB_STATEMENT: "db.statement", DB_OPERATION: "db.operation", DB_MSSQL_INSTANCE_NAME: "db.mssql.instance_name", DB_CASSANDRA_KEYSPACE: "db.cassandra.keyspace", DB_CASSANDRA_PAGE_SIZE: "db.cassandra.page_size", DB_CASSANDRA_CONSISTENCY_LEVEL: "db.cassandra.consistency_level", DB_CASSANDRA_TABLE: "db.cassandra.table", DB_CASSANDRA_IDEMPOTENCE: "db.cassandra.idempotence", DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT: "db.cassandra.speculative_execution_count", DB_CASSANDRA_COORDINATOR_ID: "db.cassandra.coordinator.id", DB_CASSANDRA_COORDINATOR_DC: "db.cassandra.coordinator.dc", DB_HBASE_NAMESPACE: "db.hbase.namespace", DB_REDIS_DATABASE_INDEX: "db.redis.database_index", DB_MONGODB_COLLECTION: "db.mongodb.collection", DB_SQL_TABLE: "db.sql.table", EXCEPTION_TYPE: "exception.type", EXCEPTION_MESSAGE: "exception.message", EXCEPTION_STACKTRACE: "exception.stacktrace", EXCEPTION_ESCAPED: "exception.escaped", FAAS_TRIGGER: "faas.trigger", FAAS_EXECUTION: "faas.execution", FAAS_DOCUMENT_COLLECTION: "faas.document.collection", FAAS_DOCUMENT_OPERATION: "faas.document.operation", FAAS_DOCUMENT_TIME: "faas.document.time", FAAS_DOCUMENT_NAME: "faas.document.name", FAAS_TIME: "faas.time", FAAS_CRON: "faas.cron", FAAS_COLDSTART: "faas.coldstart", FAAS_INVOKED_NAME: "faas.invoked_name", FAAS_INVOKED_PROVIDER: "faas.invoked_provider", FAAS_INVOKED_REGION: "faas.invoked_region", NET_TRANSPORT: "net.transport", NET_PEER_IP: "net.peer.ip", NET_PEER_PORT: "net.peer.port", NET_PEER_NAME: "net.peer.name", NET_HOST_IP: "net.host.ip", NET_HOST_PORT: "net.host.port", NET_HOST_NAME: "net.host.name", NET_HOST_CONNECTION_TYPE: "net.host.connection.type", NET_HOST_CONNECTION_SUBTYPE: "net.host.connection.subtype", NET_HOST_CARRIER_NAME: "net.host.carrier.name", NET_HOST_CARRIER_MCC: "net.host.carrier.mcc", NET_HOST_CARRIER_MNC: "net.host.carrier.mnc", NET_HOST_CARRIER_ICC: "net.host.carrier.icc", PEER_SERVICE: "peer.service", ENDUSER_ID: "enduser.id", ENDUSER_ROLE: "enduser.role", ENDUSER_SCOPE: "enduser.scope", THREAD_ID: "thread.id", THREAD_NAME: "thread.name", CODE_FUNCTION: "code.function", CODE_NAMESPACE: "code.namespace", CODE_FILEPATH: "code.filepath", CODE_LINENO: "code.lineno", HTTP_METHOD: "http.method", HTTP_URL: "http.url", HTTP_TARGET: "http.target", HTTP_HOST: "http.host", HTTP_SCHEME: "http.scheme", HTTP_STATUS_CODE: "http.status_code", HTTP_FLAVOR: "http.flavor", HTTP_USER_AGENT: "http.user_agent", HTTP_REQUEST_CONTENT_LENGTH: "http.request_content_length", HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED: "http.request_content_length_uncompressed", HTTP_RESPONSE_CONTENT_LENGTH: "http.response_content_length", HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED: "http.response_content_length_uncompressed", HTTP_SERVER_NAME: "http.server_name", HTTP_ROUTE: "http.route", HTTP_CLIENT_IP: "http.client_ip", AWS_DYNAMODB_TABLE_NAMES: "aws.dynamodb.table_names", AWS_DYNAMODB_CONSUMED_CAPACITY: "aws.dynamodb.consumed_capacity", AWS_DYNAMODB_ITEM_COLLECTION_METRICS: "aws.dynamodb.item_collection_metrics", AWS_DYNAMODB_PROVISIONED_READ_CAPACITY: "aws.dynamodb.provisioned_read_capacity", AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY: "aws.dynamodb.provisioned_write_capacity", AWS_DYNAMODB_CONSISTENT_READ: "aws.dynamodb.consistent_read", AWS_DYNAMODB_PROJECTION: "aws.dynamodb.projection", AWS_DYNAMODB_LIMIT: "aws.dynamodb.limit", AWS_DYNAMODB_ATTRIBUTES_TO_GET: "aws.dynamodb.attributes_to_get", AWS_DYNAMODB_INDEX_NAME: "aws.dynamodb.index_name", AWS_DYNAMODB_SELECT: "aws.dynamodb.select", AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES: "aws.dynamodb.global_secondary_indexes", AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES: "aws.dynamodb.local_secondary_indexes", AWS_DYNAMODB_EXCLUSIVE_START_TABLE: "aws.dynamodb.exclusive_start_table", AWS_DYNAMODB_TABLE_COUNT: "aws.dynamodb.table_count", AWS_DYNAMODB_SCAN_FORWARD: "aws.dynamodb.scan_forward", AWS_DYNAMODB_SEGMENT: "aws.dynamodb.segment", AWS_DYNAMODB_TOTAL_SEGMENTS: "aws.dynamodb.total_segments", AWS_DYNAMODB_COUNT: "aws.dynamodb.count", AWS_DYNAMODB_SCANNED_COUNT: "aws.dynamodb.scanned_count", AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS: "aws.dynamodb.attribute_definitions", AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES: "aws.dynamodb.global_secondary_index_updates", MESSAGING_SYSTEM: "messaging.system", MESSAGING_DESTINATION: "messaging.destination", MESSAGING_DESTINATION_KIND: "messaging.destination_kind", MESSAGING_TEMP_DESTINATION: "messaging.temp_destination", MESSAGING_PROTOCOL: "messaging.protocol", MESSAGING_PROTOCOL_VERSION: "messaging.protocol_version", MESSAGING_URL: "messaging.url", MESSAGING_MESSAGE_ID: "messaging.message_id", MESSAGING_CONVERSATION_ID: "messaging.conversation_id", MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES: "messaging.message_payload_size_bytes", MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES: "messaging.message_payload_compressed_size_bytes", MESSAGING_OPERATION: "messaging.operation", MESSAGING_CONSUMER_ID: "messaging.consumer_id", MESSAGING_RABBITMQ_ROUTING_KEY: "messaging.rabbitmq.routing_key", MESSAGING_KAFKA_MESSAGE_KEY: "messaging.kafka.message_key", MESSAGING_KAFKA_CONSUMER_GROUP: "messaging.kafka.consumer_group", MESSAGING_KAFKA_CLIENT_ID: "messaging.kafka.client_id", MESSAGING_KAFKA_PARTITION: "messaging.kafka.partition", MESSAGING_KAFKA_TOMBSTONE: "messaging.kafka.tombstone", RPC_SYSTEM: "rpc.system", RPC_SERVICE: "rpc.service", RPC_METHOD: "rpc.method", RPC_GRPC_STATUS_CODE: "rpc.grpc.status_code", RPC_JSONRPC_VERSION: "rpc.jsonrpc.version", RPC_JSONRPC_REQUEST_ID: "rpc.jsonrpc.request_id", RPC_JSONRPC_ERROR_CODE: "rpc.jsonrpc.error_code", RPC_JSONRPC_ERROR_MESSAGE: "rpc.jsonrpc.error_message", MESSAGE_TYPE: "message.type", MESSAGE_ID: "message.id", MESSAGE_COMPRESSED_SIZE: "message.compressed_size", MESSAGE_UNCOMPRESSED_SIZE: "message.uncompressed_size" };
    var Bl = 9;
    var ri = Math.pow(10, Bl);
    function ni(e) {
      var t = e / 1e3, r = Math.trunc(t), n = Number((t - r).toFixed(Bl)) * ri;
      return [r, n];
    }
    a(ni, "numberToHrtime");
    function ql() {
      var e = Jt.timeOrigin;
      if (typeof e != "number") {
        var t = Jt;
        e = t.timing && t.timing.fetchStart;
      }
      return e;
    }
    a(ql, "getTimeOrigin");
    function bm(e) {
      var t = ni(ql()), r = ni(typeof e == "number" ? e : Jt.now()), n = t[0] + r[0], i = t[1] + r[1];
      return i > ri && (i -= ri, n += 1), [n, i];
    }
    a(bm, "hrTime");
    function ii(e) {
      if (Ul(e))
        return e;
      if (typeof e == "number")
        return e < ql() ? bm(e) : ni(e);
      if (e instanceof Date)
        return ni(e.getTime());
      throw TypeError("Invalid input type");
    }
    a(ii, "timeInputToHrTime");
    function Vl(e, t) {
      var r = t[0] - e[0], n = t[1] - e[1];
      return n < 0 && (r -= 1, n += ri), [r, n];
    }
    a(Vl, "hrTimeDuration");
    function Ul(e) {
      return Array.isArray(e) && e.length === 2 && typeof e[0] == "number" && typeof e[1] == "number";
    }
    a(Ul, "isTimeInputHrTime");
    function Gl(e) {
      return Ul(e) || typeof e == "number" || e instanceof Date;
    }
    a(Gl, "isTimeInput");
    var Ql = "exception";
    var Em = function(e) {
      var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
      if (r)
        return r.call(e);
      if (e && typeof e.length == "number")
        return { next: function() {
          return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
        } };
      throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    var wm = function(e, t) {
      var r = typeof Symbol == "function" && e[Symbol.iterator];
      if (!r)
        return e;
      var n = r.call(e), i, o = [], s;
      try {
        for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
          o.push(i.value);
      } catch (l) {
        s = { error: l };
      } finally {
        try {
          i && !i.done && (r = n.return) && r.call(n);
        } finally {
          if (s)
            throw s.error;
        }
      }
      return o;
    };
    var Kl = function() {
      function e(t, r, n, i, o, s, l, u, c) {
        l === void 0 && (l = []), c === void 0 && (c = Jt), this.attributes = {}, this.links = [], this.events = [], this.status = { code: $r.UNSET }, this.endTime = [0, 0], this._ended = false, this._duration = [-1, -1], this._clock = c, this.name = n, this._spanContext = i, this.parentSpanId = s, this.kind = o, this.links = l, this.startTime = ii(u ?? c.now()), this.resource = t.resource, this.instrumentationLibrary = t.instrumentationLibrary, this._spanLimits = t.getSpanLimits(), this._spanProcessor = t.getActiveSpanProcessor(), this._spanProcessor.onStart(this, r), this._attributeValueLengthLimit = this._spanLimits.attributeValueLengthLimit || 0;
      }
      return a(e, "Span"), e.prototype.spanContext = function() {
        return this._spanContext;
      }, e.prototype.setAttribute = function(t, r) {
        return r == null || this._isSpanEnded() ? this : t.length === 0 ? (de.warn("Invalid attribute key: " + t), this) : _o(r) ? Object.keys(this.attributes).length >= this._spanLimits.attributeCountLimit && !Object.prototype.hasOwnProperty.call(this.attributes, t) ? this : (this.attributes[t] = this._truncateToSize(r), this) : (de.warn("Invalid attribute value set for key: " + t), this);
      }, e.prototype.setAttributes = function(t) {
        var r, n;
        try {
          for (var i = Em(Object.entries(t)), o = i.next(); !o.done; o = i.next()) {
            var s = wm(o.value, 2), l = s[0], u = s[1];
            this.setAttribute(l, u);
          }
        } catch (c) {
          r = { error: c };
        } finally {
          try {
            o && !o.done && (n = i.return) && n.call(i);
          } finally {
            if (r)
              throw r.error;
          }
        }
        return this;
      }, e.prototype.addEvent = function(t, r, n) {
        if (this._isSpanEnded())
          return this;
        if (this._spanLimits.eventCountLimit === 0)
          return de.warn("No events allowed."), this;
        this.events.length >= this._spanLimits.eventCountLimit && (de.warn("Dropping extra events."), this.events.shift()), Gl(r) && (typeof n > "u" && (n = r), r = void 0), typeof n > "u" && (n = this._clock.now());
        var i = Ll(r);
        return this.events.push({ name: t, attributes: i, time: ii(n) }), this;
      }, e.prototype.setStatus = function(t) {
        return this._isSpanEnded() ? this : (this.status = t, this);
      }, e.prototype.updateName = function(t) {
        return this._isSpanEnded() ? this : (this.name = t, this);
      }, e.prototype.end = function(t) {
        if (this._isSpanEnded()) {
          de.error("You can only call end() on a span once.");
          return;
        }
        this._ended = true, this.endTime = ii(t ?? this._clock.now()), this._duration = Vl(this.startTime, this.endTime), this._duration[0] < 0 && (de.warn("Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.", this.startTime, this.endTime), this.endTime = this.startTime.slice(), this._duration = [0, 0]), this._spanProcessor.onEnd(this);
      }, e.prototype.isRecording = function() {
        return this._ended === false;
      }, e.prototype.recordException = function(t, r) {
        r === void 0 && (r = this._clock.now());
        var n = {};
        typeof t == "string" ? n[lt.EXCEPTION_MESSAGE] = t : t && (t.code ? n[lt.EXCEPTION_TYPE] = t.code.toString() : t.name && (n[lt.EXCEPTION_TYPE] = t.name), t.message && (n[lt.EXCEPTION_MESSAGE] = t.message), t.stack && (n[lt.EXCEPTION_STACKTRACE] = t.stack)), n[lt.EXCEPTION_TYPE] || n[lt.EXCEPTION_MESSAGE] ? this.addEvent(Ql, n, r) : de.warn("Failed to record an exception " + t);
      }, Object.defineProperty(e.prototype, "duration", { get: function() {
        return this._duration;
      }, enumerable: false, configurable: true }), Object.defineProperty(e.prototype, "ended", { get: function() {
        return this._ended;
      }, enumerable: false, configurable: true }), e.prototype._isSpanEnded = function() {
        return this._ended && de.warn("Can not execute the operation on ended Span {traceId: " + this._spanContext.traceId + ", spanId: " + this._spanContext.spanId + "}"), this._ended;
      }, e.prototype._truncateToLimitUtil = function(t, r) {
        return t.length <= r ? t : t.substr(0, r);
      }, e.prototype._truncateToSize = function(t) {
        var r = this, n = this._attributeValueLengthLimit;
        return n <= 0 ? (de.warn("Attribute value limit must be positive, got " + n), t) : typeof t == "string" ? this._truncateToLimitUtil(t, n) : Array.isArray(t) ? t.map(function(i) {
          return typeof i == "string" ? r._truncateToLimitUtil(i, n) : i;
        }) : t;
      }, e;
    }();
    async function Co(e) {
      await new Promise((r) => setTimeout(r, 0));
      let t = wt.getTracer("prisma");
      e.spans.forEach((r) => {
        let n = { traceId: r.trace_id, spanId: r.span_id, traceFlags: st.SAMPLED }, i = r.links?.map((s) => ({ context: { traceId: s.trace_id, spanId: s.span_id, traceFlags: st.SAMPLED } })), o = new Kl(t, Dr, r.name, n, Lr.INTERNAL, r.parent_span_id, i, r.start_time);
        r.attributes && o.setAttributes(r.attributes), o.end(r.end_time);
      });
    }
    a(Co, "createSpan");
    function De({ context: e, tracingConfig: t }) {
      let r = wt.getSpanContext(e ?? Wt.active());
      return t?.enabled && r ? `00-${r.traceId}-${r.spanId}-0${r.traceFlags}` : "00-10-10-00";
    }
    a(De, "getTraceParent");
    function Oo(e) {
      let t = e.includes("tracing");
      return { get enabled() {
        return Boolean(globalThis.PRISMA_INSTRUMENTATION && t);
      }, get middleware() {
        return Boolean(globalThis.PRISMA_INSTRUMENTATION && globalThis.PRISMA_INSTRUMENTATION.middleware);
      } };
    }
    a(Oo, "getTracingConfig");
    var xm = process.env.PRISMA_SHOW_ALL_TRACES === "true";
    async function me(e, t) {
      if (e.enabled === false || e.internal && !xm)
        return t();
      let r = wt.getTracer("prisma"), n = e.context ?? Wt.active();
      if (e.active === false) {
        let i = r.startSpan(`prisma:client:${e.name}`, e, n);
        try {
          return await t(i, n);
        } finally {
          i.end();
        }
      }
      return r.startActiveSpan(`prisma:client:${e.name}`, e, n, async (i) => {
        try {
          return await t(i, Wt.active());
        } finally {
          i.end();
        }
      });
    }
    a(me, "runInChildSpan");
    function jr(e) {
      return typeof e.batchRequestIdx == "number";
    }
    a(jr, "hasBatchIndex");
    var Wl = O(ae());
    function Jl(e) {
      let t = e.e, r = a((l) => `Prisma cannot find the required \`${l}\` system library in your system`, "systemLibraryNotFound"), n = t.message.includes("cannot open shared object file"), i = `Please refer to the documentation about Prisma's system requirements: ${Or("https://pris.ly/d/system-requirements")}`, o = `Unable to require(\`${Wl.default.dim(e.id)}\`).`, s = qt({ message: t.message, code: t.code }).with({ code: "ENOENT" }, () => "File does not exist.").when(({ message: l }) => n && l.includes("libz"), () => `${r("libz")}. Please install it and try again.`).when(({ message: l }) => n && l.includes("libgcc_s"), () => `${r("libgcc_s")}. Please install it and try again.`).when(({ message: l }) => n && l.includes("libssl"), () => {
        let l = e.platformInfo.libssl ? `openssl-${e.platformInfo.libssl}` : "openssl";
        return `${r("libssl")}. Please install ${l} and try again.`;
      }).when(({ message: l }) => l.includes("GLIBC"), () => `Prisma has detected an incompatible version of the \`glibc\` C standard library installed in your system. This probably means your system may be too old to run Prisma. ${i}`).when(({ message: l }) => e.platformInfo.platform === "linux" && l.includes("symbol not found"), () => `The Prisma engines are not compatible with your system ${e.platformInfo.originalDistro} on (${e.platformInfo.archFromUname}) which uses the \`${e.platformInfo.binaryTarget}\` binaryTarget by default. ${i}`).otherwise(() => `The Prisma engines do not seem to be compatible with your system. ${i}`);
      return `${o}
${s}

Details: ${t.message}`;
    }
    a(Jl, "handleLibraryLoadingErrors");
    var Yt = O(ae());
    var Zl = O(require("fs"));
    function Hl(e) {
      if (e?.kind === "itx")
        return e.options.id;
    }
    a(Hl, "getInteractiveTransactionId");
    var ke = O(ae());
    var Ht = O(require("fs"));
    var No = O(require("os"));
    var ut = O(require("path"));
    var Yl = B("prisma:client:libraryEngine:loader");
    var Mo = Symbol("PrismaLibraryEngineCache");
    function vm() {
      let e = globalThis;
      return e[Mo] === void 0 && (e[Mo] = {}), e[Mo];
    }
    a(vm, "getLibraryCache");
    function Tm(e) {
      let t = vm();
      if (t[e] !== void 0)
        return t[e];
      let r = ut.default.toNamespacedPath(e), n = { exports: {} }, i = 0;
      return process.platform !== "win32" && (i = No.default.constants.dlopen.RTLD_LAZY | No.default.constants.dlopen.RTLD_DEEPBIND), process.dlopen(n, r, i), t[e] = n.exports, n.exports;
    }
    a(Tm, "load");
    var Br = class {
      constructor(e) {
        this.libQueryEnginePath = null;
        this.platform = null;
        this.config = e;
      }
      async loadLibrary() {
        let e = await ho();
        this.platform = e.binaryTarget, this.libQueryEnginePath || (this.libQueryEnginePath = await this.getLibQueryEnginePath()), Yl(`loadEngine using ${this.libQueryEnginePath}`);
        try {
          let t = this.libQueryEnginePath;
          return me({ name: "loadLibrary", enabled: this.config.tracingConfig.enabled, internal: true }, () => Tm(t));
        } catch (t) {
          let r = Jl({ e: t, platformInfo: e, id: this.libQueryEnginePath });
          throw new G(r, this.config.clientVersion);
        }
      }
      async getLibQueryEnginePath() {
        let e = process.env.PRISMA_QUERY_ENGINE_LIBRARY ?? this.config.prismaPath;
        if (e && Ht.default.existsSync(e) && e.endsWith(".node"))
          return e;
        this.platform = this.platform ?? await rt();
        let { enginePath: t, searchedLocations: r } = await this.resolveEnginePath();
        if (!Ht.default.existsSync(t)) {
          let n = this.platform ? `
You incorrectly pinned it to ${ke.default.redBright.bold(`${this.platform}`)}
` : "", i = `Query engine library for current platform "${ke.default.bold(this.platform)}" could not be found.${n}
This probably happens, because you built Prisma Client on a different platform.
(Prisma Client looked in "${ke.default.underline(t)}")

Searched Locations:

${r.map((o) => {
            let s = `  ${o}`;
            if (process.env.DEBUG === "node-engine-search-locations" && Ht.default.existsSync(o)) {
              let l = Ht.default.readdirSync(o);
              s += l.map((u) => `    ${u}`).join(`
`);
            }
            return s;
          }).join(`
` + (process.env.DEBUG === "node-engine-search-locations" ? `
` : ""))}
`;
          throw this.config.generator ? (this.platform = this.platform ?? await rt(), this.config.generator.binaryTargets.find((o) => o.value === this.platform) || this.config.generator.binaryTargets.find((o) => o.value === "native") ? (i += `
You already added the platform${this.config.generator.binaryTargets.length > 1 ? "s" : ""} ${this.config.generator.binaryTargets.map((o) => `"${ke.default.bold(o.value)}"`).join(", ")} to the "${ke.default.underline("generator")}" block
in the "schema.prisma" file as described in https://pris.ly/d/client-generator,
but something went wrong. That's suboptimal.

Please create an issue at https://github.com/prisma/prisma/issues/new`, i += "") : i += `

To solve this problem, add the platform "${this.platform}" to the "${ke.default.underline("binaryTargets")}" attribute in the "${ke.default.underline("generator")}" block in the "schema.prisma" file:
${ke.default.greenBright(this.getFixedGenerator())}

Then run "${ke.default.greenBright("prisma generate")}" for your changes to take effect.
Read more about deploying Prisma Client: https://pris.ly/d/client-generator`) : i += `

Read more about deploying Prisma Client: https://pris.ly/d/client-generator
`, new G(i, this.config.clientVersion);
        }
        return this.platform = this.platform ?? await rt(), t;
      }
      async resolveEnginePath() {
        let searchedLocations = [], enginePath;
        if (this.libQueryEnginePath)
          return { enginePath: this.libQueryEnginePath, searchedLocations };
        if (this.platform = this.platform ?? await rt(), __filename.includes("DefaultLibraryLoader"))
          return enginePath = ut.default.join(il(), Pr(this.platform, "fs")), { enginePath, searchedLocations };
        let dirname = eval("__dirname"), searchLocations = [ut.default.resolve(dirname, "../../../.prisma/client"), this.config.generator?.output?.value ?? dirname, ut.default.resolve(dirname, ".."), ut.default.dirname(this.config.datamodelPath), this.config.cwd, "/tmp/prisma-engines"];
        this.config.dirname && searchLocations.push(this.config.dirname);
        for (let e of searchLocations)
          if (searchedLocations.push(e), Yl(`Searching for Query Engine Library in ${e}`), enginePath = ut.default.join(e, Pr(this.platform, "fs")), Ht.default.existsSync(enginePath))
            return { enginePath, searchedLocations };
        return enginePath = ut.default.join(__dirname, Pr(this.platform, "fs")), { enginePath, searchedLocations };
      }
      getFixedGenerator() {
        let e = { ...this.config.generator, binaryTargets: pl(this.config.generator.binaryTargets, this.platform) };
        return wl(e);
      }
    };
    a(Br, "DefaultLibraryLoader");
    var Am = B("prisma:client:libraryEngine:exitHooks");
    var qr = class {
      constructor() {
        this.nextOwnerId = 1;
        this.ownerToIdMap = /* @__PURE__ */ new WeakMap();
        this.idToListenerMap = /* @__PURE__ */ new Map();
        this.areHooksInstalled = false;
      }
      install() {
        this.areHooksInstalled || (this.installHook("beforeExit"), this.installHook("exit"), this.installHook("SIGINT", true), this.installHook("SIGUSR2", true), this.installHook("SIGTERM", true), this.areHooksInstalled = true);
      }
      setListener(t, r) {
        if (r) {
          let n = this.ownerToIdMap.get(t);
          n || (n = this.nextOwnerId++, this.ownerToIdMap.set(t, n)), this.idToListenerMap.set(n, r);
        } else {
          let n = this.ownerToIdMap.get(t);
          n !== void 0 && (this.ownerToIdMap.delete(t), this.idToListenerMap.delete(n));
        }
      }
      getListener(t) {
        let r = this.ownerToIdMap.get(t);
        if (r !== void 0)
          return this.idToListenerMap.get(r);
      }
      installHook(t, r = false) {
        process.once(t, async (n) => {
          Am(`exit event received: ${t}`);
          for (let i of this.idToListenerMap.values())
            await i();
          this.idToListenerMap.clear(), r && process.listenerCount(t) === 0 && process.exit(n);
        });
      }
    };
    a(qr, "ExitHooks");
    var Ue = B("prisma:client:libraryEngine");
    function Sm(e) {
      return e.item_type === "query" && "query" in e;
    }
    a(Sm, "isQueryEvent");
    function Pm(e) {
      return "level" in e ? e.level === "error" && e.message === "PANIC" : false;
    }
    a(Pm, "isPanicEvent");
    var zl = [...bo, "native"];
    var Xl = 0;
    var Ro = new qr();
    var zt = class extends nt {
      constructor(r, n = new Br(r)) {
        super();
        try {
          this.datamodel = Zl.default.readFileSync(r.datamodelPath, "utf-8");
        } catch (i) {
          throw i.stack.match(/\/\.next|\/next@|\/next\//) ? new G(`Your schema.prisma could not be found, and we detected that you are using Next.js.
Find out why and learn how to fix this: https://pris.ly/d/schema-not-found-nextjs`, r.clientVersion) : i;
        }
        this.config = r, this.libraryStarted = false, this.logQueries = r.logQueries ?? false, this.logLevel = r.logLevel ?? "error", this.libraryLoader = n, this.logEmitter = r.logEmitter, this.engineProtocol = r.engineProtocol, this.datasourceOverrides = r.datasources ? this.convertDatasources(r.datasources) : {}, r.enableDebugLogs && (this.logLevel = "debug"), this.libraryInstantiationPromise = this.instantiateLibrary(), Ro.install(), this.checkForTooManyEngines();
      }
      get beforeExitListener() {
        return Ro.getListener(this);
      }
      set beforeExitListener(r) {
        Ro.setListener(this, r);
      }
      checkForTooManyEngines() {
        Xl === 10 && console.warn(`${Yt.default.yellow("warn(prisma-client)")} There are already 10 instances of Prisma Client actively running.`);
      }
      async transaction(r, n, i) {
        await this.start();
        let o = JSON.stringify(n), s;
        if (r === "start") {
          let u = JSON.stringify({ max_wait: i?.maxWait ?? 2e3, timeout: i?.timeout ?? 5e3, isolation_level: i?.isolationLevel });
          s = await this.engine?.startTransaction(u, o);
        } else
          r === "commit" ? s = await this.engine?.commitTransaction(i.id, o) : r === "rollback" && (s = await this.engine?.rollbackTransaction(i.id, o));
        let l = this.parseEngineResponse(s);
        if (l.error_code)
          throw new X(l.message, { code: l.error_code, clientVersion: this.config.clientVersion, meta: l.meta });
        return l;
      }
      async instantiateLibrary() {
        if (Ue("internalSetup"), this.libraryInstantiationPromise)
          return this.libraryInstantiationPromise;
        yo(), this.platform = await this.getPlatform(), await this.loadEngine(), this.version();
      }
      async getPlatform() {
        if (this.platform)
          return this.platform;
        let r = await rt();
        if (!zl.includes(r))
          throw new G(`Unknown ${Yt.default.red("PRISMA_QUERY_ENGINE_LIBRARY")} ${Yt.default.redBright.bold(r)}. Possible binaryTargets: ${Yt.default.greenBright(zl.join(", "))} or a path to the query engine library.
You may have to run ${Yt.default.greenBright("prisma generate")} for your changes to take effect.`, this.config.clientVersion);
        return r;
      }
      parseEngineResponse(r) {
        if (!r)
          throw new Z("Response from the Engine was empty", { clientVersion: this.config.clientVersion });
        try {
          return JSON.parse(r);
        } catch {
          throw new Z("Unable to JSON.parse response from engine", { clientVersion: this.config.clientVersion });
        }
      }
      convertDatasources(r) {
        let n = /* @__PURE__ */ Object.create(null);
        for (let { name: i, url: o } of r)
          n[i] = o;
        return n;
      }
      async loadEngine() {
        if (!this.engine) {
          this.QueryEngineConstructor || (this.library = await this.libraryLoader.loadLibrary(), this.QueryEngineConstructor = this.library.QueryEngine);
          try {
            let r = new WeakRef(this);
            this.engine = new this.QueryEngineConstructor({ datamodel: this.datamodel, env: process.env, logQueries: this.config.logQueries ?? false, ignoreEnvVarErrors: true, datasourceOverrides: this.datasourceOverrides, logLevel: this.logLevel, configDir: this.config.cwd, engineProtocol: this.engineProtocol }, (n) => {
              r.deref()?.logger(n);
            }), Xl++;
          } catch (r) {
            let n = r, i = this.parseInitError(n.message);
            throw typeof i == "string" ? n : new G(i.message, this.config.clientVersion, i.error_code);
          }
        }
      }
      logger(r) {
        let n = this.parseEngineResponse(r);
        if (!!n) {
          if ("span" in n) {
            this.config.tracingConfig.enabled === true && Co(n);
            return;
          }
          n.level = n?.level.toLowerCase() ?? "unknown", Sm(n) ? this.logEmitter.emit("query", { timestamp: /* @__PURE__ */ new Date(), query: n.query, params: n.params, duration: Number(n.duration_ms), target: n.module_path }) : Pm(n) ? this.loggerRustPanic = new fe(this.getErrorMessageWithLink(`${n.message}: ${n.reason} in ${n.file}:${n.line}:${n.column}`), this.config.clientVersion) : this.logEmitter.emit(n.level, { timestamp: /* @__PURE__ */ new Date(), message: n.message, target: n.module_path });
        }
      }
      getErrorMessageWithLink(r) {
        return hl({ platform: this.platform, title: r, version: this.config.clientVersion, engineVersion: this.versionInfo?.commit, database: this.config.activeProvider, query: this.lastQuery });
      }
      parseInitError(r) {
        try {
          return JSON.parse(r);
        } catch {
        }
        return r;
      }
      parseRequestError(r) {
        try {
          return JSON.parse(r);
        } catch {
        }
        return r;
      }
      on(r, n) {
        r === "beforeExit" ? this.beforeExitListener = n : this.logEmitter.on(r, n);
      }
      async start() {
        if (await this.libraryInstantiationPromise, await this.libraryStoppingPromise, this.libraryStartingPromise)
          return Ue(`library already starting, this.libraryStarted: ${this.libraryStarted}`), this.libraryStartingPromise;
        if (this.libraryStarted)
          return;
        let r = a(async () => {
          Ue("library starting");
          try {
            let i = { traceparent: De({ tracingConfig: this.config.tracingConfig }) };
            await this.engine?.connect(JSON.stringify(i)), this.libraryStarted = true, Ue("library started");
          } catch (i) {
            let o = this.parseInitError(i.message);
            throw typeof o == "string" ? i : new G(o.message, this.config.clientVersion, o.error_code);
          } finally {
            this.libraryStartingPromise = void 0;
          }
        }, "startFn"), n = { name: "connect", enabled: this.config.tracingConfig.enabled };
        return this.libraryStartingPromise = me(n, r), this.libraryStartingPromise;
      }
      async stop() {
        if (await this.libraryStartingPromise, await this.executingQueryPromise, this.libraryStoppingPromise)
          return Ue("library is already stopping"), this.libraryStoppingPromise;
        if (!this.libraryStarted)
          return;
        let r = a(async () => {
          await new Promise((o) => setTimeout(o, 5)), Ue("library stopping");
          let i = { traceparent: De({ tracingConfig: this.config.tracingConfig }) };
          await this.engine?.disconnect(JSON.stringify(i)), this.libraryStarted = false, this.libraryStoppingPromise = void 0, Ue("library stopped");
        }, "stopFn"), n = { name: "disconnect", enabled: this.config.tracingConfig.enabled };
        return this.libraryStoppingPromise = me(n, r), this.libraryStoppingPromise;
      }
      async getDmmf() {
        await this.start();
        let r = De({ tracingConfig: this.config.tracingConfig }), n = await this.engine.dmmf(JSON.stringify({ traceparent: r }));
        return me({ name: "parseDmmf", enabled: this.config.tracingConfig.enabled, internal: true }, () => JSON.parse(n));
      }
      version() {
        return this.versionInfo = this.library?.version(), this.versionInfo?.version ?? "unknown";
      }
      debugPanic(r) {
        return this.library?.debugPanic(r);
      }
      async request(r, { traceparent: n, interactiveTransaction: i }) {
        Ue(`sending request, this.libraryStarted: ${this.libraryStarted}`);
        let o = JSON.stringify({ traceparent: n }), s = JSON.stringify(r);
        try {
          await this.start(), this.executingQueryPromise = this.engine?.query(s, o, i?.id), this.lastQuery = s;
          let l = this.parseEngineResponse(await this.executingQueryPromise);
          if (l.errors)
            throw l.errors.length === 1 ? this.buildQueryError(l.errors[0]) : new Z(JSON.stringify(l.errors), { clientVersion: this.config.clientVersion });
          if (this.loggerRustPanic)
            throw this.loggerRustPanic;
          return { data: l, elapsed: 0 };
        } catch (l) {
          if (l instanceof G)
            throw l;
          if (l.code === "GenericFailure" && l.message?.startsWith("PANIC:"))
            throw new fe(this.getErrorMessageWithLink(l.message), this.config.clientVersion);
          let u = this.parseRequestError(l.message);
          throw typeof u == "string" ? l : new Z(`${u.message}
${u.backtrace}`, { clientVersion: this.config.clientVersion });
        }
      }
      async requestBatch(r, { transaction: n, traceparent: i }) {
        Ue("requestBatch");
        let o = bl(r, n);
        await this.start(), this.lastQuery = JSON.stringify(o), this.executingQueryPromise = this.engine.query(this.lastQuery, JSON.stringify({ traceparent: i }), Hl(n));
        let s = await this.executingQueryPromise, l = this.parseEngineResponse(s);
        if (l.errors)
          throw l.errors.length === 1 ? this.buildQueryError(l.errors[0]) : new Z(JSON.stringify(l.errors), { clientVersion: this.config.clientVersion });
        let { batchResult: u, errors: c } = l;
        if (Array.isArray(u))
          return u.map((p) => p.errors && p.errors.length > 0 ? this.loggerRustPanic ?? this.buildQueryError(p.errors[0]) : { data: p, elapsed: 0 });
        throw c && c.length === 1 ? new Error(c[0].error) : new Error(JSON.stringify(l));
      }
      buildQueryError(r) {
        return r.user_facing_error.is_panic ? new fe(this.getErrorMessageWithLink(r.user_facing_error.message), this.config.clientVersion) : yl(r, this.config.clientVersion);
      }
      async metrics(r) {
        await this.start();
        let n = await this.engine.metrics(JSON.stringify(r));
        return r.format === "prometheus" ? n : this.parseEngineResponse(n);
      }
    };
    a(zt, "LibraryEngine");
    var ge = O(ae());
    var Do = O(ru());
    var ai = O(require("fs"));
    var Xt = O(require("path"));
    function nu(e) {
      let t = e.ignoreProcessEnv ? {} : process.env, r = a((n) => n.match(/(.?\${(?:[a-zA-Z0-9_]+)?})/g)?.reduce(function(o, s) {
        let l = /(.?)\${([a-zA-Z0-9_]+)?}/g.exec(s);
        if (!l)
          return o;
        let u = l[1], c, p;
        if (u === "\\")
          p = l[0], c = p.replace("\\$", "$");
        else {
          let f = l[2];
          p = l[0].substring(u.length), c = Object.hasOwnProperty.call(t, f) ? t[f] : e.parsed[f] || "", c = r(c);
        }
        return o.replace(p, c);
      }, n) ?? n, "interpolate");
      for (let n in e.parsed) {
        let i = Object.hasOwnProperty.call(t, n) ? t[n] : e.parsed[n];
        e.parsed[n] = r(i);
      }
      for (let n in e.parsed)
        t[n] = e.parsed[n];
      return e;
    }
    a(nu, "dotenvExpand");
    var Io = B("prisma:tryLoadEnv");
    function Vr({ rootEnvPath: e, schemaEnvPath: t }, r = { conflictCheck: "none" }) {
      let n = iu(e);
      r.conflictCheck !== "none" && km(n, t, r.conflictCheck);
      let i = null;
      return ou(n?.path, t) || (i = iu(t)), !n && !i && Io("No Environment variables loaded"), i?.dotenvResult.error ? console.error(ge.default.redBright.bold("Schema Env Error: ") + i.dotenvResult.error) : { message: [n?.message, i?.message].filter(Boolean).join(`
`), parsed: { ...n?.dotenvResult?.parsed, ...i?.dotenvResult?.parsed } };
    }
    a(Vr, "tryLoadEnvs");
    function km(e, t, r) {
      let n = e?.dotenvResult.parsed, i = !ou(e?.path, t);
      if (n && t && i && ai.default.existsSync(t)) {
        let o = Do.default.parse(ai.default.readFileSync(t)), s = [];
        for (let l in o)
          n[l] === o[l] && s.push(l);
        if (s.length > 0) {
          let l = Xt.default.relative(process.cwd(), e.path), u = Xt.default.relative(process.cwd(), t);
          if (r === "error") {
            let c = `There is a conflict between env var${s.length > 1 ? "s" : ""} in ${ge.default.underline(l)} and ${ge.default.underline(u)}
Conflicting env vars:
${s.map((p) => `  ${ge.default.bold(p)}`).join(`
`)}

We suggest to move the contents of ${ge.default.underline(u)} to ${ge.default.underline(l)} to consolidate your env vars.
`;
            throw new Error(c);
          } else if (r === "warn") {
            let c = `Conflict for env var${s.length > 1 ? "s" : ""} ${s.map((p) => ge.default.bold(p)).join(", ")} in ${ge.default.underline(l)} and ${ge.default.underline(u)}
Env vars from ${ge.default.underline(u)} overwrite the ones from ${ge.default.underline(l)}
      `;
            console.warn(`${ge.default.yellow("warn(prisma)")} ${c}`);
          }
        }
      }
    }
    a(km, "checkForConflicts");
    function iu(e) {
      return Lm(e) ? (Io(`Environment variables loaded from ${e}`), { dotenvResult: nu(Do.default.config({ path: e, debug: process.env.DOTENV_CONFIG_DEBUG ? true : void 0 })), message: ge.default.dim(`Environment variables loaded from ${Xt.default.relative(process.cwd(), e)}`), path: e }) : (Io(`Environment variables not found at ${e}`), null);
    }
    a(iu, "loadEnv");
    function ou(e, t) {
      return e && t && Xt.default.resolve(e) === Xt.default.resolve(t);
    }
    a(ou, "pathsEqual");
    function Lm(e) {
      return Boolean(e && ai.default.existsSync(e));
    }
    a(Lm, "exists");
    var su = "library";
    function ko(e) {
      let t = $m();
      return t || (e?.config.engineType === "library" ? "library" : e?.config.engineType === "binary" ? "binary" : su);
    }
    a(ko, "getClientEngineType");
    function $m() {
      let e = process.env.PRISMA_CLIENT_ENGINE_TYPE;
      return e === "library" ? "library" : e === "binary" ? "binary" : void 0;
    }
    a($m, "getEngineTypeFromEnvVar");
    var Bm = O(lu());
    var qm = O($o());
    function Gr(e) {
      return e instanceof Error;
    }
    a(Gr, "isError");
    function jo(e) {
      let t = process.env.PRISMA_ENGINE_PROTOCOL;
      if (t === "json" || t == "graphql")
        return t;
      if (t !== void 0)
        throw new Error(`Invalid PRISMA_ENGINE_PROTOCOL env variable value. Expected 'graphql' or 'json', got '${t}'`);
      return e?.previewFeatures?.includes("jsonProtocol") ? "json" : "graphql";
    }
    a(jo, "getQueryEngineProtocol");
    var Wr = {};
    mn(Wr, { error: () => Gm, info: () => Um, log: () => Vm, query: () => Qm, should: () => fu, tags: () => Kr, warn: () => Bo });
    var Qr = O(ae());
    var Kr = { error: Qr.default.red("prisma:error"), warn: Qr.default.yellow("prisma:warn"), info: Qr.default.cyan("prisma:info"), query: Qr.default.blue("prisma:query") };
    var fu = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
    function Vm(...e) {
      console.log(...e);
    }
    a(Vm, "log");
    function Bo(e, ...t) {
      fu.warn() && console.warn(`${Kr.warn} ${e}`, ...t);
    }
    a(Bo, "warn");
    function Um(e, ...t) {
      console.info(`${Kr.info} ${e}`, ...t);
    }
    a(Um, "info");
    function Gm(e, ...t) {
      console.error(`${Kr.error} ${e}`, ...t);
    }
    a(Gm, "error");
    function Qm(e, ...t) {
      console.log(`${Kr.query} ${e}`, ...t);
    }
    a(Qm, "query");
    function Ge(e, t) {
      throw new Error(t);
    }
    a(Ge, "assertNever");
    function li(e) {
      let t;
      return (...r) => t ?? (t = e(...r));
    }
    a(li, "callOnce");
    function qo(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    a(qo, "hasOwnProperty");
    var Vo = a((e, t) => e.reduce((r, n) => (r[t(n)] = n, r), {}), "keyBy");
    function Zt(e, t) {
      return Object.fromEntries(Object.entries(e).map(([r, n]) => [r, t(n, r)]));
    }
    a(Zt, "mapObjectValues");
    function Uo(e, t) {
      if (e.length === 0)
        return;
      let r = e[0], n = t(e[0]);
      for (let i = 1; i < e.length; i++) {
        let o = t(e[i]);
        o > n && (n = o, r = e[i]);
      }
      return r;
    }
    a(Uo, "maxBy");
    var du = /* @__PURE__ */ new Set();
    var Go = a((e, t, ...r) => {
      du.has(e) || (du.add(e), Bo(t, ...r));
    }, "warnOnce");
    var tp = require("async_hooks");
    var rp = require("events");
    var np = O(require("fs"));
    var fn = O(require("path"));
    var gu = O(mu());
    function hu(e) {
      return { ...e, mappings: Wm(e.mappings, e.datamodel) };
    }
    a(hu, "externalToInternalDmmf");
    function Wm(e, t) {
      return { modelOperations: e.modelOperations.filter((n) => {
        let i = t.models.find((o) => o.name === n.model);
        if (!i)
          throw new Error(`Mapping without model ${n.model}`);
        return i.fields.some((o) => o.kind !== "object");
      }).map((n) => ({ model: n.model, plural: (0, gu.default)(Lt(n.model)), findUnique: n.findUnique || n.findSingle, findUniqueOrThrow: n.findUniqueOrThrow, findFirst: n.findFirst, findFirstOrThrow: n.findFirstOrThrow, findMany: n.findMany, create: n.createOne || n.createSingle || n.create, createMany: n.createMany, delete: n.deleteOne || n.deleteSingle || n.delete, update: n.updateOne || n.updateSingle || n.update, deleteMany: n.deleteMany, updateMany: n.updateMany, upsert: n.upsertOne || n.upsertSingle || n.upsert, aggregate: n.aggregate, groupBy: n.groupBy, findRaw: n.findRaw, aggregateRaw: n.aggregateRaw })), otherOperations: e.otherOperations };
    }
    a(Wm, "getMappings");
    function yu(e) {
      return hu(e);
    }
    a(yu, "getPrismaClientDMMF");
    var A = O(ae());
    var xt = O(fr());
    var Xo = O(Nr());
    var Oe = class {
      constructor() {
        this._map = /* @__PURE__ */ new Map();
      }
      get(t) {
        return this._map.get(t)?.value;
      }
      set(t, r) {
        this._map.set(t, { value: r });
      }
      getOrCreate(t, r) {
        let n = this._map.get(t);
        if (n)
          return n.value;
        let i = r();
        return this.set(t, i), i;
      }
    };
    a(Oe, "Cache");
    function Te(e) {
      return e.replace(/^./, (t) => t.toLowerCase());
    }
    a(Te, "dmmfToJSModelName");
    function Eu(e, t, r) {
      let n = Te(r);
      return !t.result || !(t.result.$allModels || t.result[n]) ? e : Jm({ ...e, ...bu(t.name, e, t.result.$allModels), ...bu(t.name, e, t.result[n]) });
    }
    a(Eu, "getComputedFields");
    function Jm(e) {
      let t = new Oe(), r = a((n, i) => t.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n])), "resolveNeeds");
      return Zt(e, (n) => ({ ...n, needs: r(n.name, /* @__PURE__ */ new Set()) }));
    }
    a(Jm, "resolveDependencies");
    function bu(e, t, r) {
      return r ? Zt(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: Hm(t, o, i) })) : {};
    }
    a(bu, "getComputedFieldsFromModel");
    function Hm(e, t, r) {
      let n = e?.[t]?.compute;
      return n ? (i) => r({ ...i, [t]: n(i) }) : r;
    }
    a(Hm, "composeCompute");
    function ui(e, t) {
      if (!t)
        return e;
      let r = { ...e };
      for (let n of Object.values(t))
        if (!!e[n.name])
          for (let i of n.needs)
            r[i] = true;
      return r;
    }
    a(ui, "applyComputedFieldsToSelection");
    var er = O(ae());
    var _u = O(fr());
    var Pu = O(require("fs"));
    var ct = O(ae());
    var Ym = ct.default.rgb(246, 145, 95);
    var zm = ct.default.rgb(107, 139, 140);
    var ci = ct.default.cyan;
    var wu = ct.default.rgb(127, 155, 155);
    var xu = a((e) => e, "identity");
    var vu = { keyword: ci, entity: ci, value: wu, punctuation: zm, directive: ci, function: ci, variable: wu, string: ct.default.greenBright, boolean: Ym, number: ct.default.cyan, comment: ct.default.grey };
    var pi = {};
    var Xm = 0;
    var R = { manual: pi.Prism && pi.Prism.manual, disableWorkerMessageHandler: pi.Prism && pi.Prism.disableWorkerMessageHandler, util: { encode: function(e) {
      if (e instanceof Me) {
        let t = e;
        return new Me(t.type, R.util.encode(t.content), t.alias);
      } else
        return Array.isArray(e) ? e.map(R.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
    }, type: function(e) {
      return Object.prototype.toString.call(e).slice(8, -1);
    }, objId: function(e) {
      return e.__id || Object.defineProperty(e, "__id", { value: ++Xm }), e.__id;
    }, clone: a(function e(t, r) {
      let n, i, o = R.util.type(t);
      switch (r = r || {}, o) {
        case "Object":
          if (i = R.util.objId(t), r[i])
            return r[i];
          n = {}, r[i] = n;
          for (let s in t)
            t.hasOwnProperty(s) && (n[s] = e(t[s], r));
          return n;
        case "Array":
          return i = R.util.objId(t), r[i] ? r[i] : (n = [], r[i] = n, t.forEach(function(s, l) {
            n[l] = e(s, r);
          }), n);
        default:
          return t;
      }
    }, "deepClone") }, languages: { extend: function(e, t) {
      let r = R.util.clone(R.languages[e]);
      for (let n in t)
        r[n] = t[n];
      return r;
    }, insertBefore: function(e, t, r, n) {
      n = n || R.languages;
      let i = n[e], o = {};
      for (let l in i)
        if (i.hasOwnProperty(l)) {
          if (l == t)
            for (let u in r)
              r.hasOwnProperty(u) && (o[u] = r[u]);
          r.hasOwnProperty(l) || (o[l] = i[l]);
        }
      let s = n[e];
      return n[e] = o, R.languages.DFS(R.languages, function(l, u) {
        u === s && l != e && (this[l] = o);
      }), o;
    }, DFS: a(function e(t, r, n, i) {
      i = i || {};
      let o = R.util.objId;
      for (let s in t)
        if (t.hasOwnProperty(s)) {
          r.call(t, s, t[s], n || s);
          let l = t[s], u = R.util.type(l);
          u === "Object" && !i[o(l)] ? (i[o(l)] = true, e(l, r, null, i)) : u === "Array" && !i[o(l)] && (i[o(l)] = true, e(l, r, s, i));
        }
    }, "DFS") }, plugins: {}, highlight: function(e, t, r) {
      let n = { code: e, grammar: t, language: r };
      return R.hooks.run("before-tokenize", n), n.tokens = R.tokenize(n.code, n.grammar), R.hooks.run("after-tokenize", n), Me.stringify(R.util.encode(n.tokens), n.language);
    }, matchGrammar: function(e, t, r, n, i, o, s) {
      for (let g in r) {
        if (!r.hasOwnProperty(g) || !r[g])
          continue;
        if (g == s)
          return;
        let b = r[g];
        b = R.util.type(b) === "Array" ? b : [b];
        for (let y = 0; y < b.length; ++y) {
          let x = b[y], E = x.inside, w = !!x.lookbehind, T = !!x.greedy, C = 0, S = x.alias;
          if (T && !x.pattern.global) {
            let D = x.pattern.toString().match(/[imuy]*$/)[0];
            x.pattern = RegExp(x.pattern.source, D + "g");
          }
          x = x.pattern || x;
          for (let D = n, V = i; D < t.length; V += t[D].length, ++D) {
            let U = t[D];
            if (t.length > e.length)
              return;
            if (U instanceof Me)
              continue;
            if (T && D != t.length - 1) {
              x.lastIndex = V;
              var f = x.exec(e);
              if (!f)
                break;
              var p = f.index + (w ? f[1].length : 0), d = f.index + f[0].length, l = D, u = V;
              for (let L = t.length; l < L && (u < d || !t[l].type && !t[l - 1].greedy); ++l)
                u += t[l].length, p >= u && (++D, V = u);
              if (t[D] instanceof Me)
                continue;
              c = l - D, U = e.slice(V, u), f.index -= V;
            } else {
              x.lastIndex = 0;
              var f = x.exec(U), c = 1;
            }
            if (!f) {
              if (o)
                break;
              continue;
            }
            w && (C = f[1] ? f[1].length : 0);
            var p = f.index + C, f = f[0].slice(C), d = p + f.length, m = U.slice(0, p), h = U.slice(d);
            let te = [D, c];
            m && (++D, V += m.length, te.push(m));
            let At = new Me(g, E ? R.tokenize(f, E) : f, S, f, T);
            if (te.push(At), h && te.push(h), Array.prototype.splice.apply(t, te), c != 1 && R.matchGrammar(e, t, r, D, V, true, g), o)
              break;
          }
        }
      }
    }, tokenize: function(e, t) {
      let r = [e], n = t.rest;
      if (n) {
        for (let i in n)
          t[i] = n[i];
        delete t.rest;
      }
      return R.matchGrammar(e, r, t, 0, 0, false), r;
    }, hooks: { all: {}, add: function(e, t) {
      let r = R.hooks.all;
      r[e] = r[e] || [], r[e].push(t);
    }, run: function(e, t) {
      let r = R.hooks.all[e];
      if (!(!r || !r.length))
        for (var n = 0, i; i = r[n++]; )
          i(t);
    } }, Token: Me };
    R.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
    R.languages.javascript = R.languages.extend("clike", { "class-name": [R.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: true }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: true }, { pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ });
    R.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
    R.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: true, greedy: true }, "function-variable": { pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: true, inside: R.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: R.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: true, inside: R.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: true, inside: R.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ });
    R.languages.markup && R.languages.markup.tag.addInlined("script", "javascript");
    R.languages.js = R.languages.javascript;
    R.languages.typescript = R.languages.extend("javascript", { keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ });
    R.languages.ts = R.languages.typescript;
    function Me(e, t, r, n, i) {
      this.type = e, this.content = t, this.alias = r, this.length = (n || "").length | 0, this.greedy = !!i;
    }
    a(Me, "Token");
    Me.stringify = function(e, t) {
      return typeof e == "string" ? e : Array.isArray(e) ? e.map(function(r) {
        return Me.stringify(r, t);
      }).join("") : Zm(e.type)(e.content);
    };
    function Zm(e) {
      return vu[e] || xu;
    }
    a(Zm, "getColorForSyntaxKind");
    function Tu(e) {
      return eg(e, R.languages.javascript);
    }
    a(Tu, "highlightTS");
    function eg(e, t) {
      return R.tokenize(e, t).map((n) => Me.stringify(n)).join("");
    }
    a(eg, "highlight");
    var Au = O($o());
    function Su(e) {
      return (0, Au.default)(e);
    }
    a(Su, "dedent");
    var Ae = class {
      static read(t) {
        let r;
        try {
          r = Pu.default.readFileSync(t, "utf-8");
        } catch {
          return null;
        }
        return Ae.fromContent(r);
      }
      static fromContent(t) {
        let r = t.split(/\r?\n/);
        return new Ae(1, r);
      }
      constructor(t, r) {
        this.firstLineNumber = t, this.lines = r;
      }
      get lastLineNumber() {
        return this.firstLineNumber + this.lines.length - 1;
      }
      mapLineAt(t, r) {
        if (t < this.firstLineNumber || t > this.lines.length + this.firstLineNumber)
          return this;
        let n = t - this.firstLineNumber, i = [...this.lines];
        return i[n] = r(i[n]), new Ae(this.firstLineNumber, i);
      }
      mapLines(t) {
        return new Ae(this.firstLineNumber, this.lines.map((r, n) => t(r, this.firstLineNumber + n)));
      }
      lineAt(t) {
        return this.lines[t - this.firstLineNumber];
      }
      prependSymbolAt(t, r) {
        return this.mapLines((n, i) => i === t ? `${r} ${n}` : `  ${n}`);
      }
      slice(t, r) {
        let n = this.lines.slice(t - 1, r).join(`
`);
        return new Ae(t, Su(n).split(`
`));
      }
      highlight() {
        let t = Tu(this.toString());
        return new Ae(this.firstLineNumber, t.split(`
`));
      }
      toString() {
        return this.lines.join(`
`);
      }
    };
    a(Ae, "SourceFileSlice");
    var tg = { red: (e) => er.default.red(e), gray: (e) => er.default.gray(e), dim: (e) => er.default.dim(e), bold: (e) => er.default.bold(e), underline: (e) => er.default.underline(e), highlightSource: (e) => e.highlight() };
    var rg = { red: (e) => e, gray: (e) => e, dim: (e) => e, bold: (e) => e, underline: (e) => e, highlightSource: (e) => e };
    function ng({ callsite: e, message: t, originalMethod: r, isPanic: n, callArguments: i }, o) {
      let s = { functionName: `prisma.${r}()`, message: t, isPanic: n ?? false, callArguments: i };
      if (!e || typeof window < "u" || process.env.NODE_ENV === "production")
        return s;
      let l = e.getLocation();
      if (!l || !l.lineNumber || !l.columnNumber)
        return s;
      let u = Math.max(1, l.lineNumber - 3), c = Ae.read(l.fileName)?.slice(u, l.lineNumber), p = c?.lineAt(l.lineNumber);
      if (c && p) {
        let f = og(p), d = ig(p);
        if (!d)
          return s;
        s.functionName = `${d.code})`, s.location = l, n || (c = c.mapLineAt(l.lineNumber, (h) => h.slice(0, d.openingBraceIndex))), c = o.highlightSource(c);
        let m = String(c.lastLineNumber).length;
        if (s.contextLines = c.mapLines((h, g) => o.gray(String(g).padStart(m)) + " " + h).mapLines((h) => o.dim(h)).prependSymbolAt(l.lineNumber, o.bold(o.red("\u2192"))), i) {
          let h = f + m + 1;
          h += 2, s.callArguments = (0, _u.default)(i, h).slice(h);
        }
      }
      return s;
    }
    a(ng, "getTemplateParameters");
    function ig(e) {
      let t = Object.keys(Ie.ModelAction).join("|"), n = new RegExp(String.raw`\.(${t})\(`).exec(e);
      if (n) {
        let i = n.index + n[0].length, o = e.lastIndexOf(" ", n.index) + 1;
        return { code: e.slice(o, i), openingBraceIndex: i };
      }
      return null;
    }
    a(ig, "findPrismaActionCall");
    function og(e) {
      let t = 0;
      for (let r = 0; r < e.length; r++) {
        if (e.charAt(r) !== " ")
          return t;
        t++;
      }
      return t;
    }
    a(og, "getIndent");
    function sg({ functionName: e, location: t, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
      let l = [""], u = t ? " in" : ":";
      if (n ? (l.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), l.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${u}`))) : l.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${u}`)), t && l.push(s.underline(ag(t))), i) {
        l.push("");
        let c = [i.toString()];
        o && (c.push(o), c.push(s.dim(")"))), l.push(c.join("")), o && l.push("");
      } else
        l.push(""), o && l.push(o), l.push("");
      return l.push(r), l.join(`
`);
    }
    a(sg, "stringifyErrorMessage");
    function ag(e) {
      let t = [e.fileName];
      return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(":");
    }
    a(ag, "stringifyLocationInFile");
    function pt(e) {
      let t = e.showColors ? tg : rg, r = ng(e, t);
      return sg(r, t);
    }
    a(pt, "createErrorMessageWithContext");
    function Ou(e) {
      return e instanceof Buffer || e instanceof Date || e instanceof RegExp;
    }
    a(Ou, "isSpecificValue");
    function Mu(e) {
      if (e instanceof Buffer) {
        let t = Buffer.alloc ? Buffer.alloc(e.length) : new Buffer(e.length);
        return e.copy(t), t;
      } else {
        if (e instanceof Date)
          return new Date(e.getTime());
        if (e instanceof RegExp)
          return new RegExp(e);
        throw new Error("Unexpected situation");
      }
    }
    a(Mu, "cloneSpecificValue");
    function Nu(e) {
      let t = [];
      return e.forEach(function(r, n) {
        typeof r == "object" && r !== null ? Array.isArray(r) ? t[n] = Nu(r) : Ou(r) ? t[n] = Mu(r) : t[n] = Jr({}, r) : t[n] = r;
      }), t;
    }
    a(Nu, "deepCloneArray");
    function Cu(e, t) {
      return t === "__proto__" ? void 0 : e[t];
    }
    a(Cu, "safeGetProperty");
    var Jr = a(function(e, ...t) {
      if (!e || typeof e != "object")
        return false;
      if (t.length === 0)
        return e;
      let r, n;
      for (let i of t)
        if (!(typeof i != "object" || i === null || Array.isArray(i))) {
          for (let o of Object.keys(i))
            if (n = Cu(e, o), r = Cu(i, o), r !== e)
              if (typeof r != "object" || r === null) {
                e[o] = r;
                continue;
              } else if (Array.isArray(r)) {
                e[o] = Nu(r);
                continue;
              } else if (Ou(r)) {
                e[o] = Mu(r);
                continue;
              } else if (typeof n != "object" || n === null || Array.isArray(n)) {
                e[o] = Jr({}, r);
                continue;
              } else {
                e[o] = Jr(n, r);
                continue;
              }
        }
      return e;
    }, "deepExtend");
    var Ru = a((e) => Array.isArray(e) ? e : e.split("."), "keys");
    var Hr = a((e, t) => Ru(t).reduce((r, n) => r && r[n], e), "deepGet");
    var fi = a((e, t, r) => Ru(t).reduceRight((n, i, o, s) => Object.assign({}, Hr(e, s.slice(0, o)), { [i]: n }), r), "deepSet");
    function Fu(e, t) {
      if (!e || typeof e != "object" || typeof e.hasOwnProperty != "function")
        return e;
      let r = {};
      for (let n in e) {
        let i = e[n];
        Object.hasOwnProperty.call(e, n) && t(n, i) && (r[n] = i);
      }
      return r;
    }
    a(Fu, "filterObject");
    var lg = { "[object Date]": true, "[object Uint8Array]": true, "[object Decimal]": true };
    function Iu(e) {
      return e ? typeof e == "object" && !lg[Object.prototype.toString.call(e)] : false;
    }
    a(Iu, "isObject");
    function Du(e, t) {
      let r = {}, n = Array.isArray(t) ? t : [t];
      for (let i in e)
        Object.hasOwnProperty.call(e, i) && !n.includes(i) && (r[i] = e[i]);
      return r;
    }
    a(Du, "omit");
    var xe = O(ae());
    var Ho = O(Nr());
    var ug = Lu();
    var cg = ju();
    var pg = Bu().default;
    var fg = a((e, t, r) => {
      let n = [];
      return a(function i(o, s = {}, l = "", u = []) {
        s.indent = s.indent || "	";
        let c;
        s.inlineCharacterLimit === void 0 ? c = { newLine: `
`, newLineOrSpace: `
`, pad: l, indent: l + s.indent } : c = { newLine: "@@__STRINGIFY_OBJECT_NEW_LINE__@@", newLineOrSpace: "@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@", pad: "@@__STRINGIFY_OBJECT_PAD__@@", indent: "@@__STRINGIFY_OBJECT_INDENT__@@" };
        let p = a((f) => {
          if (s.inlineCharacterLimit === void 0)
            return f;
          let d = f.replace(new RegExp(c.newLine, "g"), "").replace(new RegExp(c.newLineOrSpace, "g"), " ").replace(new RegExp(c.pad + "|" + c.indent, "g"), "");
          return d.length <= s.inlineCharacterLimit ? d : f.replace(new RegExp(c.newLine + "|" + c.newLineOrSpace, "g"), `
`).replace(new RegExp(c.pad, "g"), l).replace(new RegExp(c.indent, "g"), l + s.indent);
        }, "expandWhiteSpace");
        if (n.indexOf(o) !== -1)
          return '"[Circular]"';
        if (Buffer.isBuffer(o))
          return `Buffer(${Buffer.length})`;
        if (o == null || typeof o == "number" || typeof o == "boolean" || typeof o == "function" || typeof o == "symbol" || o instanceof Y || ug(o))
          return String(o);
        if (o instanceof Date)
          return `new Date('${o.toISOString()}')`;
        if (o instanceof be)
          return `prisma.${Lt(o.modelName)}.fields.${o.name}`;
        if (Array.isArray(o)) {
          if (o.length === 0)
            return "[]";
          n.push(o);
          let f = "[" + c.newLine + o.map((d, m) => {
            let h = o.length - 1 === m ? c.newLine : "," + c.newLineOrSpace, g = i(d, s, l + s.indent, [...u, m]);
            return s.transformValue && (g = s.transformValue(o, m, g)), c.indent + g + h;
          }).join("") + c.pad + "]";
          return n.pop(), p(f);
        }
        if (cg(o)) {
          let f = Object.keys(o).concat(pg(o));
          if (s.filter && (f = f.filter((m) => s.filter(o, m))), f.length === 0)
            return "{}";
          n.push(o);
          let d = "{" + c.newLine + f.map((m, h) => {
            let g = f.length - 1 === h ? c.newLine : "," + c.newLineOrSpace, b = typeof m == "symbol", y = !b && /^[a-z$_][a-z$_0-9]*$/i.test(m), x = b || y ? m : i(m, s, void 0, [...u, m]), E = i(o[m], s, l + s.indent, [...u, m]);
            s.transformValue && (E = s.transformValue(o, m, E));
            let w = c.indent + String(x) + ": " + E + g;
            return s.transformLine && (w = s.transformLine({ obj: o, indent: c.indent, key: x, stringifiedValue: E, value: o[m], eol: g, originalLine: w, path: u.concat(x) })), w;
          }).join("") + c.pad + "}";
          return n.pop(), p(d);
        }
        return o = String(o).replace(/[\r\n]/g, (f) => f === `
` ? "\\n" : "\\r"), s.singleQuotes === false ? (o = o.replace(/"/g, '\\"'), `"${o}"`) : (o = o.replace(/\\?'/g, "\\'"), `'${o}'`);
      }, "stringifyObject")(e, t, r);
    }, "stringifyObject");
    var Yr = fg;
    var Jo = "@@__DIM_POINTER__@@";
    function di({ ast: e, keyPaths: t, valuePaths: r, missingItems: n }) {
      let i = e;
      for (let { path: o, type: s } of n)
        i = fi(i, o, s);
      return Yr(i, { indent: "  ", transformLine: ({ indent: o, key: s, value: l, stringifiedValue: u, eol: c, path: p }) => {
        let f = p.join("."), d = t.includes(f), m = r.includes(f), h = n.find((b) => b.path === f), g = u;
        if (h) {
          typeof l == "string" && (g = g.slice(1, g.length - 1));
          let b = h.isRequired ? "" : "?", y = h.isRequired ? "+" : "?", E = (h.isRequired ? xe.default.greenBright : xe.default.green)(gg(s + b + ": " + g + c, o, y));
          return h.isRequired || (E = xe.default.dim(E)), E;
        } else {
          let b = n.some((w) => f.startsWith(w.path)), y = s[s.length - 2] === "?";
          y && (s = s.slice(1, s.length - 1)), y && typeof l == "object" && l !== null && (g = g.split(`
`).map((w, T, C) => T === C.length - 1 ? w + Jo : w).join(`
`)), b && typeof l == "string" && (g = g.slice(1, g.length - 1), y || (g = xe.default.bold(g))), (typeof l != "object" || l === null) && !m && !b && (g = xe.default.dim(g));
          let x = d ? xe.default.redBright(s) : s;
          g = m ? xe.default.redBright(g) : g;
          let E = o + x + ": " + g + (b ? c : xe.default.dim(c));
          if (d || m) {
            let w = E.split(`
`), T = String(s).length, C = d ? xe.default.redBright("~".repeat(T)) : " ".repeat(T), S = m ? dg(o, s, l, u) : 0, D = m && qu(l), V = m ? "  " + xe.default.redBright("~".repeat(S)) : "";
            C && C.length > 0 && !D && w.splice(1, 0, o + C + V), C && C.length > 0 && D && w.splice(w.length - 1, 0, o.slice(0, o.length - 2) + V), E = w.join(`
`);
          }
          return E;
        }
      } });
    }
    a(di, "printJsonWithErrors");
    function dg(e, t, r, n) {
      return r === null ? 4 : typeof r == "string" ? r.length + 2 : qu(r) ? Math.abs(mg(`${t}: ${(0, Ho.default)(n)}`) - e.length) : String(r).length;
    }
    a(dg, "getValueLength");
    function qu(e) {
      return typeof e == "object" && e !== null && !(e instanceof Y);
    }
    a(qu, "isRenderedAsObject");
    function mg(e) {
      return e.split(`
`).reduce((t, r) => r.length > t ? r.length : t, 0);
    }
    a(mg, "getLongestLine");
    function gg(e, t, r) {
      return e.split(`
`).map((n, i, o) => i === 0 ? r + t.slice(1) + n : i < o.length - 1 ? r + n.slice(1) : n).map((n) => (0, Ho.default)(n).includes(Jo) ? xe.default.dim(n.replace(Jo, "")) : n.includes("?") ? xe.default.dim(n) : n).join(`
`);
    }
    a(gg, "prefixLines");
    var zr = 2;
    var mi = class {
      constructor(t, r) {
        this.type = t;
        this.children = r;
        this.printFieldError = a(({ error: t2 }, r2, n) => {
          if (t2.type === "emptySelect") {
            let i = n ? "" : ` Available options are listed in ${A.default.greenBright.dim("green")}.`;
            return `The ${A.default.redBright("`select`")} statement for type ${A.default.bold(br(t2.field.outputType.type))} must not be empty.${i}`;
          }
          if (t2.type === "emptyInclude") {
            if (r2.length === 0)
              return `${A.default.bold(br(t2.field.outputType.type))} does not have any relation and therefore can't have an ${A.default.redBright("`include`")} statement.`;
            let i = n ? "" : ` Available options are listed in ${A.default.greenBright.dim("green")}.`;
            return `The ${A.default.redBright("`include`")} statement for type ${A.default.bold(br(t2.field.outputType.type))} must not be empty.${i}`;
          }
          if (t2.type === "noTrueSelect")
            return `The ${A.default.redBright("`select`")} statement for type ${A.default.bold(br(t2.field.outputType.type))} needs ${A.default.bold("at least one truthy value")}.`;
          if (t2.type === "includeAndSelect")
            return `Please ${A.default.bold("either")} use ${A.default.greenBright("`include`")} or ${A.default.greenBright("`select`")}, but ${A.default.redBright("not both")} at the same time.`;
          if (t2.type === "invalidFieldName") {
            let i = t2.isInclude ? "include" : "select", o = t2.isIncludeScalar ? "Invalid scalar" : "Unknown", s = n ? "" : t2.isInclude && r2.length === 0 ? `
This model has no relations, so you can't use ${A.default.redBright("include")} with it.` : ` Available options are listed in ${A.default.greenBright.dim("green")}.`, l = `${o} field ${A.default.redBright(`\`${t2.providedName}\``)} for ${A.default.bold(i)} statement on model ${A.default.bold.white(t2.modelName)}.${s}`;
            return t2.didYouMean && (l += ` Did you mean ${A.default.greenBright(`\`${t2.didYouMean}\``)}?`), t2.isIncludeScalar && (l += `
Note, that ${A.default.bold("include")} statements only accept relation fields.`), l;
          }
          if (t2.type === "invalidFieldType")
            return `Invalid value ${A.default.redBright(`${Yr(t2.providedValue)}`)} of type ${A.default.redBright(Dt(t2.providedValue, void 0))} for field ${A.default.bold(`${t2.fieldName}`)} on model ${A.default.bold.white(t2.modelName)}. Expected either ${A.default.greenBright("true")} or ${A.default.greenBright("false")}.`;
        }, "printFieldError");
        this.printArgError = a(({ error: t2, path: r2 }, n, i) => {
          if (t2.type === "invalidName") {
            let o = `Unknown arg ${A.default.redBright(`\`${t2.providedName}\``)} in ${A.default.bold(r2.join("."))} for type ${A.default.bold(t2.outputType ? t2.outputType.name : hr(t2.originalType))}.`;
            return t2.didYouMeanField ? o += `
\u2192 Did you forget to wrap it with \`${A.default.greenBright("select")}\`? ${A.default.dim("e.g. " + A.default.greenBright(`{ select: { ${t2.providedName}: ${t2.providedValue} } }`))}` : t2.didYouMeanArg ? (o += ` Did you mean \`${A.default.greenBright(t2.didYouMeanArg)}\`?`, !n && !i && (o += ` ${A.default.dim("Available args:")}
` + kt(t2.originalType, true))) : t2.originalType.fields.length === 0 ? o += ` The field ${A.default.bold(t2.originalType.name)} has no arguments.` : !n && !i && (o += ` Available args:

` + kt(t2.originalType, true)), o;
          }
          if (t2.type === "invalidType") {
            let o = Yr(t2.providedValue, { indent: "  " }), s = o.split(`
`).length > 1;
            if (s && (o = `
${o}
`), t2.requiredType.bestFittingType.location === "enumTypes")
              return `Argument ${A.default.bold(t2.argName)}: Provided value ${A.default.redBright(o)}${s ? "" : " "}of type ${A.default.redBright(Dt(t2.providedValue))} on ${A.default.bold(`prisma.${this.children[0].name}`)} is not a ${A.default.greenBright(yr(It(t2.requiredType.bestFittingType.type), t2.requiredType.bestFittingType.isList))}.
\u2192 Possible values: ${t2.requiredType.bestFittingType.type.values.map((p) => A.default.greenBright(`${It(t2.requiredType.bestFittingType.type)}.${p}`)).join(", ")}`;
            let l = ".";
            tr(t2.requiredType.bestFittingType.type) && (l = `:
` + kt(t2.requiredType.bestFittingType.type));
            let u = `${t2.requiredType.inputType.map((p) => A.default.greenBright(yr(It(p.type), t2.requiredType.bestFittingType.isList))).join(" or ")}${l}`, c = t2.requiredType.inputType.length === 2 && t2.requiredType.inputType.find((p) => tr(p.type)) || null;
            return c && (u += `
` + kt(c.type, true)), `Argument ${A.default.bold(t2.argName)}: Got invalid value ${A.default.redBright(o)}${s ? "" : " "}on ${A.default.bold(`prisma.${this.children[0].name}`)}. Provided ${A.default.redBright(Dt(t2.providedValue))}, expected ${u}`;
          }
          if (t2.type === "invalidNullArg") {
            let o = r2.length === 1 && r2[0] === t2.name ? "" : ` for ${A.default.bold(`${r2.join(".")}`)}`, s = ` Please use ${A.default.bold.greenBright("undefined")} instead.`;
            return `Argument ${A.default.greenBright(t2.name)}${o} must not be ${A.default.bold("null")}.${s}`;
          }
          if (t2.type === "missingArg") {
            let o = r2.length === 1 && r2[0] === t2.missingName ? "" : ` for ${A.default.bold(`${r2.join(".")}`)}`;
            return `Argument ${A.default.greenBright(t2.missingName)}${o} is missing.`;
          }
          if (t2.type === "atLeastOne") {
            let o = i ? "" : ` Available args are listed in ${A.default.dim.green("green")}.`, s = t2.atLeastFields ? ` and at least one argument for ${t2.atLeastFields.map((l) => A.default.bold(l)).join(", or ")}` : "";
            return `Argument ${A.default.bold(r2.join("."))} of type ${A.default.bold(t2.inputType.name)} needs ${A.default.greenBright("at least one")} argument${A.default.bold(s)}.${o}`;
          }
          if (t2.type === "atMostOne") {
            let o = i ? "" : ` Please choose one. ${A.default.dim("Available args:")} 
${kt(t2.inputType, true)}`;
            return `Argument ${A.default.bold(r2.join("."))} of type ${A.default.bold(t2.inputType.name)} needs ${A.default.greenBright("exactly one")} argument, but you provided ${t2.providedKeys.map((s) => A.default.redBright(s)).join(" and ")}.${o}`;
          }
        }, "printArgError");
        this.type = t, this.children = r;
      }
      get [Symbol.toStringTag]() {
        return "Document";
      }
      toString() {
        return `${this.type} {
${(0, xt.default)(this.children.map(String).join(`
`), zr)}
}`;
      }
      validate(t, r = false, n, i, o) {
        t || (t = {});
        let s = this.children.filter((y) => y.hasInvalidChild || y.hasInvalidArg);
        if (s.length === 0)
          return;
        let l = [], u = [], c = t && t.select ? "select" : t.include ? "include" : void 0;
        for (let y of s) {
          let x = y.collectErrors(c);
          l.push(...x.fieldErrors.map((E) => ({ ...E, path: r ? E.path : E.path.slice(1) }))), u.push(...x.argErrors.map((E) => ({ ...E, path: r ? E.path : E.path.slice(1) })));
        }
        let p = this.children[0].name, f = r ? this.type : p, d = [], m = [], h = [];
        for (let y of l) {
          let x = this.normalizePath(y.path, t).join(".");
          if (y.error.type === "invalidFieldName") {
            d.push(x);
            let E = y.error.outputType, { isInclude: w } = y.error;
            E.fields.filter((T) => w ? T.outputType.location === "outputObjectTypes" : true).forEach((T) => {
              let C = x.split(".");
              h.push({ path: `${C.slice(0, C.length - 1).join(".")}.${T.name}`, type: "true", isRequired: false });
            });
          } else
            y.error.type === "includeAndSelect" ? (d.push("select"), d.push("include")) : m.push(x);
          if (y.error.type === "emptySelect" || y.error.type === "noTrueSelect" || y.error.type === "emptyInclude") {
            let E = this.normalizePath(y.path, t), w = E.slice(0, E.length - 1).join(".");
            y.error.field.outputType.type.fields?.filter((C) => y.error.type === "emptyInclude" ? C.outputType.location === "outputObjectTypes" : true).forEach((C) => {
              h.push({ path: `${w}.${C.name}`, type: "true", isRequired: false });
            });
          }
        }
        for (let y of u) {
          let x = this.normalizePath(y.path, t).join(".");
          if (y.error.type === "invalidName")
            d.push(x);
          else if (y.error.type !== "missingArg" && y.error.type !== "atLeastOne")
            m.push(x);
          else if (y.error.type === "missingArg") {
            let E = y.error.missingArg.inputTypes.length === 1 ? y.error.missingArg.inputTypes[0].type : y.error.missingArg.inputTypes.map((w) => {
              let T = hr(w.type);
              return T === "Null" ? "null" : w.isList ? T + "[]" : T;
            }).join(" | ");
            h.push({ path: x, type: no(E, true, x.split("where.").length === 2), isRequired: y.error.missingArg.isRequired });
          }
        }
        let g = a((y) => {
          let x = u.some((U) => U.error.type === "missingArg" && U.error.missingArg.isRequired), E = Boolean(u.find((U) => U.error.type === "missingArg" && !U.error.missingArg.isRequired)), w = E || x, T = "";
          x && (T += `
${A.default.dim("Note: Lines with ")}${A.default.reset.greenBright("+")} ${A.default.dim("are required")}`), E && (T.length === 0 && (T = `
`), x ? T += A.default.dim(`, lines with ${A.default.green("?")} are optional`) : T += A.default.dim(`Note: Lines with ${A.default.green("?")} are optional`), T += A.default.dim("."));
          let S = u.filter((U) => U.error.type !== "missingArg" || U.error.missingArg.isRequired).map((U) => this.printArgError(U, w, i === "minimal")).join(`
`);
          if (S += `
${l.map((U) => this.printFieldError(U, h, i === "minimal")).join(`
`)}`, i === "minimal")
            return (0, Xo.default)(S);
          let D = { ast: r ? { [p]: t } : t, keyPaths: d, valuePaths: m, missingItems: h };
          n?.endsWith("aggregate") && (D = Ag(D));
          let V = pt({ callsite: y, originalMethod: n || f, showColors: i && i === "pretty", callArguments: di(D), message: `${S}${T}
` });
          return process.env.NO_COLOR || i === "colorless" ? (0, Xo.default)(V) : V;
        }, "renderErrorStr"), b = new J(g(o));
        throw process.env.NODE_ENV !== "production" && Object.defineProperty(b, "render", { get: () => g, enumerable: false }), b;
      }
      normalizePath(t, r) {
        let n = t.slice(), i = [], o, s = r;
        for (; (o = n.shift()) !== void 0; )
          !Array.isArray(s) && o === 0 || (o === "select" ? s[o] ? s = s[o] : s = s.include : s && s[o] && (s = s[o]), i.push(o));
        return i;
      }
    };
    a(mi, "Document");
    var J = class extends Error {
      get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
      }
    };
    a(J, "PrismaClientValidationError");
    var K = class extends Error {
      constructor(t) {
        super(t + `
Read more at https://pris.ly/d/client-constructor`);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientConstructorValidationError";
      }
    };
    a(K, "PrismaClientConstructorValidationError");
    var oe = class {
      constructor({ name: t, args: r, children: n, error: i, schemaField: o }) {
        this.name = t, this.args = r, this.children = n, this.error = i, this.schemaField = o, this.hasInvalidChild = n ? n.some((s) => Boolean(s.error || s.hasInvalidArg || s.hasInvalidChild)) : false, this.hasInvalidArg = r ? r.hasInvalidArg : false;
      }
      get [Symbol.toStringTag]() {
        return "Field";
      }
      toString() {
        let t = this.name;
        return this.error ? t + " # INVALID_FIELD" : (this.args && this.args.args && this.args.args.length > 0 && (this.args.args.length === 1 ? t += `(${this.args.toString()})` : t += `(
${(0, xt.default)(this.args.toString(), zr)}
)`), this.children && (t += ` {
${(0, xt.default)(this.children.map(String).join(`
`), zr)}
}`), t);
      }
      collectErrors(t = "select") {
        let r = [], n = [];
        if (this.error && r.push({ path: [this.name], error: this.error }), this.children)
          for (let i of this.children) {
            let o = i.collectErrors(t);
            r.push(...o.fieldErrors.map((s) => ({ ...s, path: [this.name, t, ...s.path] }))), n.push(...o.argErrors.map((s) => ({ ...s, path: [this.name, t, ...s.path] })));
          }
        return this.args && n.push(...this.args.collectErrors().map((i) => ({ ...i, path: [this.name, ...i.path] }))), { fieldErrors: r, argErrors: n };
      }
    };
    a(oe, "Field");
    var se = class {
      constructor(t = []) {
        this.args = t, this.hasInvalidArg = t ? t.some((r) => Boolean(r.hasError)) : false;
      }
      get [Symbol.toStringTag]() {
        return "Args";
      }
      toString() {
        return this.args.length === 0 ? "" : `${this.args.map((t) => t.toString()).filter((t) => t).join(`
`)}`;
      }
      collectErrors() {
        return this.hasInvalidArg ? this.args.flatMap((t) => t.collectErrors()) : [];
      }
    };
    a(se, "Args");
    function Yo(e, t) {
      return Buffer.isBuffer(e) ? JSON.stringify(e.toString("base64")) : e instanceof be ? `{ _ref: ${JSON.stringify(e.name)}}` : Object.prototype.toString.call(e) === "[object BigInt]" ? e.toString() : typeof t?.type == "string" && t.type === "Json" ? e === null ? "null" : e && e.values && e.__prismaRawParameters__ ? JSON.stringify(e.values) : t?.isList && Array.isArray(e) ? JSON.stringify(e.map((r) => JSON.stringify(r))) : JSON.stringify(JSON.stringify(e)) : e === void 0 ? null : e === null ? "null" : ye.isDecimal(e) || t?.type === "Decimal" && Xe(e) ? JSON.stringify(e.toFixed()) : t?.location === "enumTypes" && typeof e == "string" ? Array.isArray(e) ? `[${e.join(", ")}]` : e : typeof e == "number" && t?.type === "Float" ? e.toExponential() : JSON.stringify(e, null, 2);
    }
    a(Yo, "stringify");
    var Se = class {
      constructor({ key: t, value: r, isEnum: n = false, error: i, schemaArg: o, inputType: s }) {
        this.inputType = s, this.key = t, this.value = r instanceof Y ? r._getName() : r, this.isEnum = n, this.error = i, this.schemaArg = o, this.isNullable = o?.inputTypes.reduce((l) => l && o.isNullable, true) || false, this.hasError = Boolean(i) || (r instanceof se ? r.hasInvalidArg : false) || Array.isArray(r) && r.some((l) => l instanceof se ? l.hasInvalidArg : false);
      }
      get [Symbol.toStringTag]() {
        return "Arg";
      }
      _toString(t, r) {
        if (!(typeof t > "u")) {
          if (t instanceof se)
            return `${r}: {
${(0, xt.default)(t.toString(), 2)}
}`;
          if (Array.isArray(t)) {
            if (this.inputType?.type === "Json")
              return `${r}: ${Yo(t, this.inputType)}`;
            let n = !t.some((i) => typeof i == "object");
            return `${r}: [${n ? "" : `
`}${(0, xt.default)(t.map((i) => i instanceof se ? `{
${(0, xt.default)(i.toString(), zr)}
}` : Yo(i, this.inputType)).join(`,${n ? " " : `
`}`), n ? 0 : zr)}${n ? "" : `
`}]`;
          }
          return `${r}: ${Yo(t, this.inputType)}`;
        }
      }
      toString() {
        return this._toString(this.value, this.key);
      }
      collectErrors() {
        if (!this.hasError)
          return [];
        let t = [];
        if (this.error) {
          let r = typeof this.inputType?.type == "object" ? `${this.inputType.type.name}${this.inputType.isList ? "[]" : ""}` : void 0;
          t.push({ error: this.error, path: [this.key], id: r });
        }
        return Array.isArray(this.value) ? t.concat(this.value.flatMap((r, n) => r?.collectErrors ? r.collectErrors().map((i) => ({ ...i, path: [this.key, n, ...i.path] })) : [])) : this.value instanceof se ? t.concat(this.value.collectErrors().map((r) => ({ ...r, path: [this.key, ...r.path] }))) : t;
      }
    };
    a(Se, "Arg");
    function yi({ dmmf: e, rootTypeName: t, rootField: r, select: n, modelName: i, extensions: o }) {
      n || (n = {});
      let s = t === "query" ? e.queryType : e.mutationType, l = { args: [], outputType: { isList: false, type: s, location: "outputObjectTypes" }, name: t }, u = { modelName: i }, c = Gu({ dmmf: e, selection: { [r]: n }, schemaField: l, path: [t], context: u, extensions: o });
      return new mi(t, c);
    }
    a(yi, "makeDocument");
    function Uu(e) {
      return e;
    }
    a(Uu, "transformDocument");
    function Gu({ dmmf: e, selection: t, schemaField: r, path: n, context: i, extensions: o }) {
      let s = r.outputType.type, l = i.modelName ? o.getAllComputedFields(i.modelName) : {};
      return t = ui(t, l), Object.entries(t).reduce((u, [c, p]) => {
        let f = s.fieldMap ? s.fieldMap[c] : s.fields.find((E) => E.name === c);
        if (!f)
          return l?.[c] || u.push(new oe({ name: c, children: [], error: { type: "invalidFieldName", modelName: s.name, providedName: c, didYouMean: In(c, s.fields.map((E) => E.name).concat(Object.keys(l ?? {}))), outputType: s } })), u;
        if (f.outputType.location === "scalar" && f.args.length === 0 && typeof p != "boolean")
          return u.push(new oe({ name: c, children: [], error: { type: "invalidFieldType", modelName: s.name, fieldName: c, providedValue: p } })), u;
        if (p === false)
          return u;
        let d = { name: f.name, fields: f.args, constraints: { minNumFields: null, maxNumFields: null } }, m = typeof p == "object" ? Du(p, ["include", "select"]) : void 0, h = m ? hi(m, d, i, [], typeof f == "string" ? void 0 : f.outputType.type) : void 0, g = f.outputType.location === "outputObjectTypes";
        if (p) {
          if (p.select && p.include)
            u.push(new oe({ name: c, children: [new oe({ name: "include", args: new se(), error: { type: "includeAndSelect", field: f } })] }));
          else if (p.include) {
            let E = Object.keys(p.include);
            if (E.length === 0)
              return u.push(new oe({ name: c, children: [new oe({ name: "include", args: new se(), error: { type: "emptyInclude", field: f } })] })), u;
            if (f.outputType.location === "outputObjectTypes") {
              let w = f.outputType.type, T = w.fields.filter((S) => S.outputType.location === "outputObjectTypes").map((S) => S.name), C = E.filter((S) => !T.includes(S));
              if (C.length > 0)
                return u.push(...C.map((S) => new oe({ name: S, children: [new oe({ name: S, args: new se(), error: { type: "invalidFieldName", modelName: w.name, outputType: w, providedName: S, didYouMean: In(S, T) || void 0, isInclude: true, isIncludeScalar: w.fields.some((D) => D.name === S) } })] }))), u;
            }
          } else if (p.select) {
            let E = Object.values(p.select);
            if (E.length === 0)
              return u.push(new oe({ name: c, children: [new oe({ name: "select", args: new se(), error: { type: "emptySelect", field: f } })] })), u;
            if (E.filter((T) => T).length === 0)
              return u.push(new oe({ name: c, children: [new oe({ name: "select", args: new se(), error: { type: "noTrueSelect", field: f } })] })), u;
          }
        }
        let b = g ? yg(e, f.outputType.type) : null, y = b;
        p && (p.select ? y = p.select : p.include ? y = Jr(b, p.include) : p.by && Array.isArray(p.by) && f.outputType.namespace === "prisma" && f.outputType.location === "outputObjectTypes" && ba(f.outputType.type.name) && (y = hg(p.by)));
        let x;
        if (y !== false && g) {
          let E = i.modelName;
          typeof f.outputType.type == "object" && f.outputType.namespace === "model" && f.outputType.location === "outputObjectTypes" && (E = f.outputType.type.name), x = Gu({ dmmf: e, selection: y, schemaField: f, path: [...n, c], context: { modelName: E }, extensions: o });
        }
        return u.push(new oe({ name: c, args: h, children: x, schemaField: f })), u;
      }, []);
    }
    a(Gu, "selectionToFields");
    function hg(e) {
      let t = /* @__PURE__ */ Object.create(null);
      for (let r of e)
        t[r] = true;
      return t;
    }
    a(hg, "byToSelect");
    function yg(e, t) {
      let r = /* @__PURE__ */ Object.create(null);
      for (let n of t.fields)
        e.typeMap[n.outputType.type.name] !== void 0 && (r[n.name] = true), (n.outputType.location === "scalar" || n.outputType.location === "enumTypes") && (r[n.name] = true);
      return r;
    }
    a(yg, "getDefaultSelection");
    function Zo(e, t, r, n) {
      return new Se({ key: e, value: t, isEnum: n.location === "enumTypes", inputType: n, error: { type: "invalidType", providedValue: t, argName: e, requiredType: { inputType: r.inputTypes, bestFittingType: n } } });
    }
    a(Zo, "getInvalidTypeArg");
    function Qu(e, t, r) {
      let { isList: n } = t, i = bg(t, r), o = Dt(e, t);
      return o === i || n && o === "List<>" || i === "Json" && o !== "Symbol" && !(e instanceof Y) && !(e instanceof be) || o === "Int" && i === "BigInt" || (o === "Int" || o === "Float") && i === "Decimal" || o === "DateTime" && i === "String" || o === "UUID" && i === "String" || o === "String" && i === "ID" || o === "Int" && i === "Float" || o === "Int" && i === "Long" || o === "String" && i === "Decimal" && Eg(e) || e === null ? true : t.isList && Array.isArray(e) ? e.every((s) => Qu(s, { ...t, isList: false }, r)) : false;
    }
    a(Qu, "hasCorrectScalarType");
    function bg(e, t, r = e.isList) {
      let n = It(e.type);
      return e.location === "fieldRefTypes" && t.modelName && (n += `<${t.modelName}>`), yr(n, r);
    }
    a(bg, "getExpectedType");
    var gi = a((e) => Fu(e, (t, r) => r !== void 0), "cleanObject");
    function Eg(e) {
      return /^\-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i.test(e);
    }
    a(Eg, "isDecimalString");
    function wg(e, t, r, n) {
      let i = null, o = [];
      for (let s of r.inputTypes) {
        if (i = vg(e, t, r, s, n), i?.collectErrors().length === 0)
          return i;
        if (i && i?.collectErrors()) {
          let l = i?.collectErrors();
          l && l.length > 0 && o.push({ arg: i, errors: l });
        }
      }
      if (i?.hasError && o.length > 0) {
        let s = o.map(({ arg: l, errors: u }) => {
          let c = u.map((p) => {
            let f = 1;
            return p.error.type === "invalidType" && (f = 2 * Math.exp(Ku(p.error.providedValue)) + 1), f += Math.log(p.path.length), p.error.type === "missingArg" && l.inputType && tr(l.inputType.type) && l.inputType.type.name.includes("Unchecked") && (f *= 2), p.error.type === "invalidName" && tr(p.error.originalType) && p.error.originalType.name.includes("Unchecked") && (f *= 2), f;
          });
          return { score: u.length + xg(c), arg: l, errors: u };
        });
        return s.sort((l, u) => l.score < u.score ? -1 : 1), s[0].arg;
      }
      return i;
    }
    a(wg, "valueToArg");
    function Ku(e) {
      let t = 1;
      if (!e || typeof e != "object")
        return t;
      for (let r in e)
        if (!!Object.prototype.hasOwnProperty.call(e, r) && typeof e[r] == "object") {
          let n = Ku(e[r]) + 1;
          t = Math.max(n, t);
        }
      return t;
    }
    a(Ku, "getDepth");
    function xg(e) {
      return e.reduce((t, r) => t + r, 0);
    }
    a(xg, "sum");
    function vg(e, t, r, n, i) {
      if (typeof t > "u")
        return r.isRequired ? new Se({ key: e, value: t, isEnum: n.location === "enumTypes", inputType: n, error: { type: "missingArg", missingName: e, missingArg: r, atLeastOne: false, atMostOne: false } }) : null;
      let { isNullable: o, isRequired: s } = r;
      if (t === null && !o && !s && !(tr(n.type) ? n.type.constraints.minNumFields !== null && n.type.constraints.minNumFields > 0 : false))
        return new Se({ key: e, value: t, isEnum: n.location === "enumTypes", inputType: n, error: { type: "invalidNullArg", name: e, invalidType: r.inputTypes, atLeastOne: false, atMostOne: false } });
      if (!n.isList)
        if (tr(n.type)) {
          if (typeof t != "object" || Array.isArray(t) || n.location === "inputObjectTypes" && !Iu(t))
            return Zo(e, t, r, n);
          {
            let p = gi(t), f, d = Object.keys(p || {}), m = d.length;
            return m === 0 && typeof n.type.constraints.minNumFields == "number" && n.type.constraints.minNumFields > 0 || n.type.constraints.fields?.some((h) => d.includes(h)) === false ? f = { type: "atLeastOne", key: e, inputType: n.type, atLeastFields: n.type.constraints.fields } : m > 1 && typeof n.type.constraints.maxNumFields == "number" && n.type.constraints.maxNumFields < 2 && (f = { type: "atMostOne", key: e, inputType: n.type, providedKeys: d }), new Se({ key: e, value: p === null ? null : hi(p, n.type, i, r.inputTypes), isEnum: n.location === "enumTypes", error: f, inputType: n, schemaArg: r });
          }
        } else
          return Vu(e, t, r, n, i);
      if (!Array.isArray(t) && n.isList && e !== "updateMany" && (t = [t]), n.location === "enumTypes" || n.location === "scalar")
        return Vu(e, t, r, n, i);
      let l = n.type, c = (typeof l.constraints?.minNumFields == "number" && l.constraints?.minNumFields > 0 ? Array.isArray(t) && t.some((p) => !p || Object.keys(gi(p)).length === 0) : false) ? { inputType: l, key: e, type: "atLeastOne" } : void 0;
      if (!c) {
        let p = typeof l.constraints?.maxNumFields == "number" && l.constraints?.maxNumFields < 2 ? Array.isArray(t) && t.find((f) => !f || Object.keys(gi(f)).length !== 1) : false;
        p && (c = { inputType: l, key: e, type: "atMostOne", providedKeys: Object.keys(p) });
      }
      if (!Array.isArray(t))
        for (let p of r.inputTypes) {
          let f = hi(t, p.type, i);
          if (f.collectErrors().length === 0)
            return new Se({ key: e, value: f, isEnum: false, schemaArg: r, inputType: p });
        }
      return new Se({ key: e, value: t.map((p) => n.isList && typeof p != "object" ? p : typeof p != "object" || !t ? Zo(e, p, r, n) : hi(p, l, i)), isEnum: false, inputType: n, schemaArg: r, error: c });
    }
    a(vg, "tryInferArgs");
    function tr(e) {
      return !(typeof e == "string" || Object.hasOwnProperty.call(e, "values"));
    }
    a(tr, "isInputArgType");
    function Vu(e, t, r, n, i) {
      return Qu(t, n, i) ? new Se({ key: e, value: t, isEnum: n.location === "enumTypes", schemaArg: r, inputType: n }) : Zo(e, t, r, n);
    }
    a(Vu, "scalarToArg");
    function hi(e, t, r, n, i) {
      t.meta?.source && (r = { modelName: t.meta.source });
      let o = gi(e), { fields: s, fieldMap: l } = t, u = s.map((d) => [d.name, void 0]), c = Object.entries(o || {}), f = ya(c, u, (d) => d[0]).reduce((d, [m, h]) => {
        let g = l ? l[m] : s.find((y) => y.name === m);
        if (!g) {
          let y = typeof h == "boolean" && i && i.fields.some((x) => x.name === m) ? m : null;
          return d.push(new Se({ key: m, value: h, error: { type: "invalidName", providedName: m, providedValue: h, didYouMeanField: y, didYouMeanArg: !y && In(m, [...s.map((x) => x.name), "select"]) || void 0, originalType: t, possibilities: n, outputType: i } })), d;
        }
        let b = wg(m, h, g, r);
        return b && d.push(b), d;
      }, []);
      if (typeof t.constraints.minNumFields == "number" && c.length < t.constraints.minNumFields || f.find((d) => d.error?.type === "missingArg" || d.error?.type === "atLeastOne")) {
        let d = t.fields.filter((m) => !m.isRequired && o && (typeof o[m.name] > "u" || o[m.name] === null));
        f.push(...d.map((m) => {
          let h = m.inputTypes[0];
          return new Se({ key: m.name, value: void 0, isEnum: h.location === "enumTypes", error: { type: "missingArg", missingName: m.name, missingArg: m, atLeastOne: Boolean(t.constraints.minNumFields) || false, atMostOne: t.constraints.maxNumFields === 1 || false }, inputType: h });
        }));
      }
      return new se(f);
    }
    a(hi, "objectToArgs");
    function bi({ document: e, path: t, data: r }) {
      let n = Hr(r, t);
      if (n === "undefined")
        return null;
      if (typeof n != "object")
        return n;
      let i = Tg(e, t);
      return es({ field: i, data: n });
    }
    a(bi, "unpack");
    function es({ field: e, data: t }) {
      if (!t || typeof t != "object" || !e.children || !e.schemaField)
        return t;
      let r = { DateTime: (n) => new Date(n), Json: (n) => JSON.parse(n), Bytes: (n) => Buffer.from(n, "base64"), Decimal: (n) => new ye(n), BigInt: (n) => BigInt(n) };
      for (let n of e.children) {
        let i = n.schemaField?.outputType.type;
        if (i && typeof i == "string") {
          let o = r[i];
          if (o)
            if (Array.isArray(t))
              for (let s of t)
                typeof s[n.name] < "u" && s[n.name] !== null && (Array.isArray(s[n.name]) ? s[n.name] = s[n.name].map(o) : s[n.name] = o(s[n.name]));
            else
              typeof t[n.name] < "u" && t[n.name] !== null && (Array.isArray(t[n.name]) ? t[n.name] = t[n.name].map(o) : t[n.name] = o(t[n.name]));
        }
        if (n.schemaField && n.schemaField.outputType.location === "outputObjectTypes")
          if (Array.isArray(t))
            for (let o of t)
              es({ field: n, data: o[n.name] });
          else
            es({ field: n, data: t[n.name] });
      }
      return t;
    }
    a(es, "mapScalars");
    function Tg(e, t) {
      let r = t.slice(), n = r.shift(), i = e.children.find((o) => o.name === n);
      if (!i)
        throw new Error(`Could not find field ${n} in document ${e}`);
      for (; r.length > 0; ) {
        let o = r.shift();
        if (!i.children)
          throw new Error(`Can't get children for field ${i} with child ${o}`);
        let s = i.children.find((l) => l.name === o);
        if (!s)
          throw new Error(`Can't find child ${o} of field ${i}`);
        i = s;
      }
      return i;
    }
    a(Tg, "getField");
    function zo(e) {
      return e.split(".").filter((t) => t !== "select").join(".");
    }
    a(zo, "removeSelectFromPath");
    function ts(e) {
      if (Object.prototype.toString.call(e) === "[object Object]") {
        let r = {};
        for (let n in e)
          if (n === "select")
            for (let i in e.select)
              r[i] = ts(e.select[i]);
          else
            r[n] = ts(e[n]);
        return r;
      }
      return e;
    }
    a(ts, "removeSelectFromObject");
    function Ag({ ast: e, keyPaths: t, missingItems: r, valuePaths: n }) {
      let i = t.map(zo), o = n.map(zo), s = r.map((u) => ({ path: zo(u.path), isRequired: u.isRequired, type: u.type }));
      return { ast: ts(e), keyPaths: i, missingItems: s, valuePaths: o };
    }
    a(Ag, "transformAggregatePrintJsonArgs");
    function Xr(e) {
      return { getKeys() {
        return Object.keys(e);
      }, getPropertyValue(t) {
        return e[t];
      } };
    }
    a(Xr, "addObjectProperties");
    function ft(e, t) {
      return { getKeys() {
        return [e];
      }, getPropertyValue() {
        return t();
      } };
    }
    a(ft, "addProperty");
    function vt(e) {
      let t = new Oe();
      return { getKeys() {
        return e.getKeys();
      }, getPropertyValue(r) {
        return t.getOrCreate(r, () => e.getPropertyValue(r));
      }, getPropertyDescriptor(r) {
        return e.getPropertyDescriptor?.(r);
      } };
    }
    a(vt, "cacheProperties");
    var Hu = require("util");
    var Ei = { enumerable: true, configurable: true, writable: true };
    function wi(e) {
      let t = new Set(e);
      return { getOwnPropertyDescriptor: () => Ei, has: (r, n) => t.has(n), set: (r, n, i) => t.add(n) && Reflect.set(r, n, i), ownKeys: () => [...t] };
    }
    a(wi, "defaultProxyHandlers");
    var Wu = Symbol.for("nodejs.util.inspect.custom");
    function dt(e, t) {
      let r = Sg(t), n = /* @__PURE__ */ new Set(), i = new Proxy(e, { get(o, s) {
        if (n.has(s))
          return o[s];
        let l = r.get(s);
        return l ? l.getPropertyValue(s) : o[s];
      }, has(o, s) {
        if (n.has(s))
          return true;
        let l = r.get(s);
        return l ? l.has?.(s) ?? true : Reflect.has(o, s);
      }, ownKeys(o) {
        let s = Ju(Reflect.ownKeys(o), r), l = Ju(Array.from(r.keys()), r);
        return [.../* @__PURE__ */ new Set([...s, ...l, ...n])];
      }, set(o, s, l) {
        return r.get(s)?.getPropertyDescriptor?.(s)?.writable === false ? false : (n.add(s), Reflect.set(o, s, l));
      }, getOwnPropertyDescriptor(o, s) {
        let l = r.get(s);
        return l ? l.getPropertyDescriptor ? { ...Ei, ...l?.getPropertyDescriptor(s) } : Ei : Reflect.getOwnPropertyDescriptor(o, s);
      }, defineProperty(o, s, l) {
        return n.add(s), Reflect.defineProperty(o, s, l);
      } });
      return i[Wu] = function(o, s, l = Hu.inspect) {
        let u = { ...this };
        return delete u[Wu], l(u, s);
      }, i;
    }
    a(dt, "createCompositeProxy");
    function Sg(e) {
      let t = /* @__PURE__ */ new Map();
      for (let r of e) {
        let n = r.getKeys();
        for (let i of n)
          t.set(i, r);
      }
      return t;
    }
    a(Sg, "mapKeysToLayers");
    function Ju(e, t) {
      return e.filter((r) => t.get(r)?.has?.(r) ?? true);
    }
    a(Ju, "getExistingKeys");
    function rs(e) {
      return { getKeys() {
        return e;
      }, has() {
        return false;
      }, getPropertyValue() {
      } };
    }
    a(rs, "removeProperties");
    var zu = O(require("path"));
    var Zr = "<unknown>";
    function Yu(e) {
      var t = e.split(`
`);
      return t.reduce(function(r, n) {
        var i = Cg(n) || Mg(n) || Fg(n) || Lg(n) || Dg(n);
        return i && r.push(i), r;
      }, []);
    }
    a(Yu, "parse");
    var Pg = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
    var _g = /\((\S*)(?::(\d+))(?::(\d+))\)/;
    function Cg(e) {
      var t = Pg.exec(e);
      if (!t)
        return null;
      var r = t[2] && t[2].indexOf("native") === 0, n = t[2] && t[2].indexOf("eval") === 0, i = _g.exec(t[2]);
      return n && i != null && (t[2] = i[1], t[3] = i[2], t[4] = i[3]), { file: r ? null : t[2], methodName: t[1] || Zr, arguments: r ? [t[2]] : [], lineNumber: t[3] ? +t[3] : null, column: t[4] ? +t[4] : null };
    }
    a(Cg, "parseChrome");
    var Og = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function Mg(e) {
      var t = Og.exec(e);
      return t ? { file: t[2], methodName: t[1] || Zr, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
    }
    a(Mg, "parseWinjs");
    var Ng = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
    var Rg = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
    function Fg(e) {
      var t = Ng.exec(e);
      if (!t)
        return null;
      var r = t[3] && t[3].indexOf(" > eval") > -1, n = Rg.exec(t[3]);
      return r && n != null && (t[3] = n[1], t[4] = n[2], t[5] = null), { file: t[3], methodName: t[1] || Zr, arguments: t[2] ? t[2].split(",") : [], lineNumber: t[4] ? +t[4] : null, column: t[5] ? +t[5] : null };
    }
    a(Fg, "parseGecko");
    var Ig = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
    function Dg(e) {
      var t = Ig.exec(e);
      return t ? { file: t[3], methodName: t[1] || Zr, arguments: [], lineNumber: +t[4], column: t[5] ? +t[5] : null } : null;
    }
    a(Dg, "parseJSC");
    var kg = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function Lg(e) {
      var t = kg.exec(e);
      return t ? { file: t[2], methodName: t[1] || Zr, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
    }
    a(Lg, "parseNode");
    var xi = class {
      getLocation() {
        return null;
      }
    };
    a(xi, "DisabledCallSite");
    var vi = class {
      constructor() {
        this._error = new Error();
      }
      getLocation() {
        let t = this._error.stack;
        if (!t)
          return null;
        let n = Yu(t).find((i) => {
          if (!i.file)
            return false;
          let o = i.file.split(zu.default.sep).join("/");
          return o !== "<anonymous>" && !o.includes("@prisma") && !o.includes("/packages/client/src/runtime/") && !o.endsWith("/runtime/binary.js") && !o.endsWith("/runtime/library.js") && !o.endsWith("/runtime/data-proxy.js") && !o.endsWith("/runtime/edge.js") && !o.endsWith("/runtime/edge-esm.js") && !o.startsWith("internal/") && !i.methodName.includes("new ") && !i.methodName.includes("getCallSite") && !i.methodName.includes("Proxy.") && i.methodName.split(".").length < 4;
        });
        return !n || !n.file ? null : { fileName: n.file, lineNumber: n.lineNumber, columnNumber: n.column };
      }
    };
    a(vi, "EnabledCallSite");
    function mt(e) {
      return e === "minimal" ? new xi() : new vi();
    }
    a(mt, "getCallSite");
    function Le(e) {
      let t, r = a((n) => {
        try {
          return n === void 0 || n?.kind === "itx" ? t ?? (t = Xu(e(n))) : Xu(e(n));
        } catch (i) {
          return Promise.reject(i);
        }
      }, "_callback");
      return { then(n, i, o) {
        return r(o).then(n, i, o);
      }, catch(n, i) {
        return r(i).catch(n, i);
      }, finally(n, i) {
        return r(i).finally(n, i);
      }, requestTransaction(n) {
        let i = r(n);
        return i.requestTransaction ? i.requestTransaction(n) : i;
      }, [Symbol.toStringTag]: "PrismaPromise" };
    }
    a(Le, "createPrismaPromise");
    function Xu(e) {
      return typeof e.then == "function" ? e : Promise.resolve(e);
    }
    a(Xu, "valueToPromise");
    var Zu = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
    function rr(e = {}) {
      let t = jg(e);
      return Object.entries(t).reduce((n, [i, o]) => (Zu[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
    }
    a(rr, "desugarUserArgs");
    function jg(e = {}) {
      return typeof e._count == "boolean" ? { ...e, _count: { _all: e._count } } : e;
    }
    a(jg, "desugarCountInUserArgs");
    function Ti(e = {}) {
      return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
    }
    a(Ti, "createUnpacker");
    function ec(e, t) {
      let r = Ti(e);
      return t({ action: "aggregate", unpacker: r, argsMapper: rr })(e);
    }
    a(ec, "aggregate");
    function Bg(e = {}) {
      let { select: t, ...r } = e;
      return typeof t == "object" ? rr({ ...r, _count: t }) : rr({ ...r, _count: { _all: true } });
    }
    a(Bg, "desugarUserArgs");
    function qg(e = {}) {
      return typeof e.select == "object" ? (t) => Ti(e)(t)._count : (t) => Ti(e)(t)._count._all;
    }
    a(qg, "createUnpacker");
    function tc(e, t) {
      return t({ action: "count", unpacker: qg(e), argsMapper: Bg })(e);
    }
    a(tc, "count");
    function Vg(e = {}) {
      let t = rr(e);
      if (Array.isArray(t.by))
        for (let r of t.by)
          typeof r == "string" && (t.select[r] = true);
      return t;
    }
    a(Vg, "desugarUserArgs");
    function Ug(e = {}) {
      return (t) => (typeof e?._count == "boolean" && t.forEach((r) => {
        r._count = r._count._all;
      }), t);
    }
    a(Ug, "createUnpacker");
    function rc(e, t) {
      return t({ action: "groupBy", unpacker: Ug(e), argsMapper: Vg })(e);
    }
    a(rc, "groupBy");
    function nc(e, t, r) {
      if (t === "aggregate")
        return (n) => ec(n, r);
      if (t === "count")
        return (n) => tc(n, r);
      if (t === "groupBy")
        return (n) => rc(n, r);
    }
    a(nc, "applyAggregates");
    function ic(e) {
      let t = e.fields.filter((n) => !n.relationName), r = Vo(t, (n) => n.name);
      return new Proxy({}, { get(n, i) {
        if (i in n || typeof i == "symbol")
          return n[i];
        let o = r[i];
        if (o)
          return new be(e.name, i, o.type, o.isList);
      }, ...wi(Object.keys(r)) });
    }
    a(ic, "applyFieldsProxy");
    function Gg(e, t) {
      return e === void 0 || t === void 0 ? [] : [...t, "select", e];
    }
    a(Gg, "getNextDataPath");
    function Qg(e, t, r) {
      return t === void 0 ? e ?? {} : fi(t, r, e || true);
    }
    a(Qg, "getNextUserArgs");
    function ns(e, t, r, n, i, o) {
      let l = e._baseDmmf.modelMap[t].fields.reduce((u, c) => ({ ...u, [c.name]: c }), {});
      return (u) => {
        let c = mt(e._errorFormat), p = Gg(n, i), f = Qg(u, o, p), d = r({ dataPath: p, callsite: c })(f), m = Kg(e, t);
        return new Proxy(d, { get(h, g) {
          if (!m.includes(g))
            return h[g];
          let y = [l[g].type, r, g], x = [p, f];
          return ns(e, ...y, ...x);
        }, ...wi([...m, ...Object.getOwnPropertyNames(d)]) });
      };
    }
    a(ns, "applyFluent");
    function Kg(e, t) {
      return e._baseDmmf.modelMap[t].fields.filter((r) => r.kind === "object").map((r) => r.name);
    }
    a(Kg, "getOwnKeys");
    var Ai = oc().version;
    var Pe = class extends X {
      constructor(t) {
        super(t, { code: "P2025", clientVersion: Ai }), this.name = "NotFoundError";
      }
    };
    a(Pe, "NotFoundError");
    function is(e, t, r, n) {
      let i;
      if (r && typeof r == "object" && "rejectOnNotFound" in r && r.rejectOnNotFound !== void 0)
        i = r.rejectOnNotFound, delete r.rejectOnNotFound;
      else if (typeof n == "boolean")
        i = n;
      else if (n && typeof n == "object" && e in n) {
        let o = n[e];
        if (o && typeof o == "object")
          return t in o ? o[t] : void 0;
        i = is(e, t, r, o);
      } else
        typeof n == "function" ? i = n : i = false;
      return i;
    }
    a(is, "getRejectOnNotFound");
    var Jg = /(findUnique|findFirst)/;
    function sc(e, t, r, n) {
      if (r ?? (r = "record"), n && !e && Jg.exec(t))
        throw typeof n == "boolean" && n ? new Pe(`No ${r} found`) : typeof n == "function" ? n(new Pe(`No ${r} found`)) : Gr(n) ? n : new Pe(`No ${r} found`);
    }
    a(sc, "throwIfNotFound");
    function ac(e, t, r) {
      return e === Ie.ModelAction.findFirstOrThrow || e === Ie.ModelAction.findUniqueOrThrow ? Hg(t, r) : r;
    }
    a(ac, "adaptErrors");
    function Hg(e, t) {
      return async (r) => {
        if ("rejectOnNotFound" in r.args) {
          let i = pt({ originalMethod: r.clientMethod, callsite: r.callsite, message: "'rejectOnNotFound' option is not supported" });
          throw new J(i);
        }
        return await t(r).catch((i) => {
          throw i instanceof X && i.code === "P2025" ? new Pe(`No ${e} found`) : i;
        });
      };
    }
    a(Hg, "applyOrThrowWrapper");
    var Yg = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
    var zg = ["aggregate", "count", "groupBy"];
    function os(e, t) {
      let r = [Zg(e, t), Xg(t)];
      e._engineConfig.previewFeatures?.includes("fieldReference") && r.push(rh(e, t));
      let n = e._extensions.getAllModelExtensions(t);
      return n && r.push(Xr(n)), dt({}, r);
    }
    a(os, "applyModel");
    function Xg(e) {
      return ft("name", () => e);
    }
    a(Xg, "modelMetaLayer");
    function Zg(e, t) {
      let r = Te(t), n = eh(e, t);
      return { getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = i, s = a((u) => e._request(u), "requestFn");
        s = ac(o, t, s);
        let l = a((u) => (c) => {
          let p = mt(e._errorFormat);
          return Le((f) => {
            let d = { args: c, dataPath: [], action: o, model: t, clientMethod: `${r}.${i}`, jsModelName: r, transaction: f, callsite: p };
            return s({ ...d, ...u });
          });
        }, "action");
        return Yg.includes(o) ? ns(e, t, l) : th(i) ? nc(e, i, l) : l({});
      } };
    }
    a(Zg, "modelActionsLayer");
    function eh(e, t) {
      let r = Object.keys(e._baseDmmf.mappingsMap[t]).filter((n) => n !== "model" && n !== "plural");
      return r.push("count"), r;
    }
    a(eh, "getOwnKeys");
    function th(e) {
      return zg.includes(e);
    }
    a(th, "isValidAggregateName");
    function rh(e, t) {
      return vt(ft("fields", () => {
        let r = e._baseDmmf.modelMap[t];
        return ic(r);
      }));
    }
    a(rh, "fieldsPropertyLayer");
    function lc(e) {
      return e.replace(/^./, (t) => t.toUpperCase());
    }
    a(lc, "jsToDMMFModelName");
    var ss = Symbol();
    function Si(e) {
      let t = [nh(e), ft(ss, () => e)], r = e._extensions.getAllClientExtensions();
      return r && t.push(Xr(r)), dt(e, t);
    }
    a(Si, "applyModelsAndClientExtensions");
    function nh(e) {
      let t = Object.keys(e._baseDmmf.modelMap), r = t.map(Te), n = [...new Set(t.concat(r))];
      return vt({ getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = lc(i);
        if (e._baseDmmf.modelMap[o] !== void 0)
          return os(e, o);
        if (e._baseDmmf.modelMap[i] !== void 0)
          return os(e, i);
      }, getPropertyDescriptor(i) {
        if (!r.includes(i))
          return { enumerable: false };
      } });
    }
    a(nh, "modelsLayer");
    function uc(e) {
      return e[ss] ? e[ss] : e;
    }
    a(uc, "unapplyModelsAndClientExtensions");
    function cc(e) {
      if (!this._hasPreviewFlag("clientExtensions"))
        throw new J("Extensions are not yet generally available, please add `clientExtensions` to the `previewFeatures` field in the `generator` block in the `schema.prisma` file.");
      if (typeof e == "function")
        return e(this);
      let t = uc(this), r = Object.create(t, { _extensions: { value: this._extensions.append(e) } });
      return Si(r);
    }
    a(cc, "$extends");
    function $e(e) {
      if (typeof e != "object")
        return e;
      var t, r, n = Object.prototype.toString.call(e);
      if (n === "[object Object]") {
        if (e.constructor !== Object && typeof e.constructor == "function") {
          r = new e.constructor();
          for (t in e)
            e.hasOwnProperty(t) && r[t] !== e[t] && (r[t] = $e(e[t]));
        } else {
          r = {};
          for (t in e)
            t === "__proto__" ? Object.defineProperty(r, t, { value: $e(e[t]), configurable: true, enumerable: true, writable: true }) : r[t] = $e(e[t]);
        }
        return r;
      }
      if (n === "[object Array]") {
        for (t = e.length, r = Array(t); t--; )
          r[t] = $e(e[t]);
        return r;
      }
      return n === "[object Set]" ? (r = /* @__PURE__ */ new Set(), e.forEach(function(i) {
        r.add($e(i));
      }), r) : n === "[object Map]" ? (r = /* @__PURE__ */ new Map(), e.forEach(function(i, o) {
        r.set($e(o), $e(i));
      }), r) : n === "[object Date]" ? /* @__PURE__ */ new Date(+e) : n === "[object RegExp]" ? (r = new RegExp(e.source, e.flags), r.lastIndex = e.lastIndex, r) : n === "[object DataView]" ? new e.constructor($e(e.buffer)) : n === "[object ArrayBuffer]" ? e.slice(0) : n.slice(-6) === "Array]" ? new e.constructor(e) : e;
    }
    a($e, "klona");
    function pc(e, t, r, n = 0) {
      return Le((i) => {
        let o = t.customDataProxyFetch ?? ((s) => s);
        return i !== void 0 && (t.transaction?.kind === "batch" && t.transaction.lock.then(), t.transaction = i), n === r.length ? e._executeRequest(t) : r[n]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: $e(t.args ?? {}), __internalParams: t, query: (s, l = t) => {
          let u = l.customDataProxyFetch ?? ((c) => c);
          return l.customDataProxyFetch = (c) => o(u(c)), l.args = s, pc(e, l, r, n + 1);
        } });
      });
    }
    a(pc, "iterateAndCallQueryCallbacks");
    function fc(e, t) {
      let { jsModelName: r, action: n, clientMethod: i } = t, o = r ? n : i;
      if (e._extensions.isEmpty())
        return e._executeRequest(t);
      let s = e._extensions.getAllQueryCallbacks(r ?? "*", o);
      return pc(e, t, s);
    }
    a(fc, "applyQueryExtensions");
    function dc(e) {
      let t;
      return { get() {
        return t || (t = { value: e() }), t.value;
      } };
    }
    a(dc, "lazyProperty");
    var en = class {
      constructor(t, r) {
        this.extension = t;
        this.previous = r;
        this.computedFieldsCache = new Oe();
        this.modelExtensionsCache = new Oe();
        this.queryCallbacksCache = new Oe();
        this.clientExtensions = dc(() => this.extension.client ? { ...this.previous?.getAllClientExtensions(), ...this.extension.client } : this.previous?.getAllClientExtensions());
      }
      getAllComputedFields(t) {
        return this.computedFieldsCache.getOrCreate(t, () => Eu(this.previous?.getAllComputedFields(t), this.extension, t));
      }
      getAllClientExtensions() {
        return this.clientExtensions.get();
      }
      getAllModelExtensions(t) {
        return this.modelExtensionsCache.getOrCreate(t, () => {
          let r = Te(t);
          return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? this.previous?.getAllModelExtensions(t) : { ...this.previous?.getAllModelExtensions(t), ...this.extension.model.$allModels, ...this.extension.model[r] };
        });
      }
      getAllQueryCallbacks(t, r) {
        return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
          let n = this.previous?.getAllQueryCallbacks(t, r) ?? [], i = [], o = this.extension.query;
          return !o || !(o[t] || o.$allModels || o[r]) ? n : (o[t] !== void 0 && (o[t][r] !== void 0 && i.push(o[t][r]), o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)), o.$allModels !== void 0 && (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[r] !== void 0 && i.push(o[r]), n.concat(i));
        });
      }
    };
    a(en, "MergedExtensionsListNode");
    var Qe = class {
      constructor(t) {
        this.head = t;
      }
      static empty() {
        return new Qe();
      }
      static single(t) {
        return new Qe(new en(t));
      }
      isEmpty() {
        return this.head === void 0;
      }
      append(t) {
        return new Qe(new en(t, this.head));
      }
      getAllComputedFields(t) {
        return this.head?.getAllComputedFields(t);
      }
      getAllClientExtensions() {
        return this.head?.getAllClientExtensions();
      }
      getAllModelExtensions(t) {
        return this.head?.getAllModelExtensions(t);
      }
      getAllQueryCallbacks(t, r) {
        return this.head?.getAllQueryCallbacks(t, r) ?? [];
      }
    };
    a(Qe, "MergedExtensionsList");
    var mc = B("prisma:client");
    var gc = { Vercel: "vercel", "Netlify CI": "netlify" };
    function hc({ postinstall: e, ciName: t, clientVersion: r }) {
      if (mc("checkPlatformCaching:postinstall", e), mc("checkPlatformCaching:ciName", t), e === true && t && t in gc) {
        let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${gc[t]}-build`;
        throw console.error(n), new G(n, r);
      }
    }
    a(hc, "checkPlatformCaching");
    var ih = { findUnique: "query", findUniqueOrThrow: "query", findFirst: "query", findFirstOrThrow: "query", findMany: "query", count: "query", create: "mutation", createMany: "mutation", update: "mutation", updateMany: "mutation", upsert: "mutation", delete: "mutation", deleteMany: "mutation", executeRaw: "mutation", queryRaw: "mutation", aggregate: "query", groupBy: "query", runCommandRaw: "mutation", findRaw: "query", aggregateRaw: "query" };
    var tn = class {
      constructor(t, r) {
        this.dmmf = t;
        this.errorFormat = r;
      }
      createMessage({ action: t, modelName: r, args: n, extensions: i, clientMethod: o, callsite: s }) {
        let l, u = ih[t];
        (t === "executeRaw" || t === "queryRaw" || t === "runCommandRaw") && (l = t);
        let c;
        if (r !== void 0) {
          if (c = this.dmmf?.mappingsMap[r], c === void 0)
            throw new Error(`Could not find mapping for model ${r}`);
          l = c[t === "count" ? "aggregate" : t];
        }
        if (u !== "query" && u !== "mutation")
          throw new Error(`Invalid operation ${u} for action ${t}`);
        if (this.dmmf?.rootFieldMap[l] === void 0)
          throw new Error(`Could not find rootField ${l} for action ${t} for model ${r} on rootType ${u}`);
        let f = yi({ dmmf: this.dmmf, rootField: l, rootTypeName: u, select: n, modelName: r, extensions: i });
        return f.validate(n, false, o, this.errorFormat, s), new Pi(f);
      }
      createBatch(t) {
        return t.map((r) => r.toEngineQuery());
      }
    };
    a(tn, "GraphQLProtocolEncoder");
    var Pi = class {
      constructor(t) {
        this.document = t;
      }
      isWrite() {
        return this.document.type === "mutation";
      }
      getBatchId() {
        if (!this.getRootField().startsWith("findUnique"))
          return;
        let t = this.document.children[0].args?.args.map((n) => n.value instanceof se ? `${n.key}-${n.value.args.map((i) => i.key).join(",")}` : n.key).join(","), r = this.document.children[0].children.join(",");
        return `${this.document.children[0].name}|${t}|${r}`;
      }
      toDebugString() {
        return String(this.document);
      }
      toEngineQuery() {
        return { query: String(this.document), variables: {} };
      }
      deserializeResponse(t, r) {
        let n = this.getRootField(), i = [];
        return n && i.push(n), i.push(...r.filter((o) => o !== "select" && o !== "include")), bi({ document: this.document, path: i, data: t });
      }
      getRootField() {
        return this.document.children[0].name;
      }
    };
    a(Pi, "GraphQLMessage");
    function _i(e) {
      return e === null ? e : Array.isArray(e) ? e.map(_i) : typeof e == "object" ? oh(e) ? sh(e) : Zt(e, _i) : e;
    }
    a(_i, "deserializeJsonResponse");
    function oh(e) {
      return e !== null && typeof e == "object" && typeof e.$type == "string";
    }
    a(oh, "isTaggedValue");
    function sh({ $type: e, value: t }) {
      switch (e) {
        case "BigInt":
          return BigInt(t);
        case "Bytes":
          return Buffer.from(t, "base64");
        case "DateTime":
          return new Date(t);
        case "Decimal":
          return new ye(t);
        case "Json":
          return JSON.parse(t);
        default:
          Ge(t, "Unknown tagged value");
      }
    }
    a(sh, "deserializeTaggedValue");
    var _c = O(ae());
    var rn = class {
      constructor(t = 0, r) {
        this.context = r;
        this.lines = [];
        this.currentLine = "";
        this.currentIndent = 0;
        this.currentIndent = t;
      }
      write(t) {
        return typeof t == "string" ? this.currentLine += t : t.write(this), this;
      }
      writeJoined(t, r) {
        let n = r.length - 1;
        for (let i = 0; i < r.length; i++)
          this.write(r[i]), i !== n && this.write(t);
        return this;
      }
      writeLine(t) {
        return this.write(t).newLine();
      }
      newLine() {
        this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
        let t = this.afterNextNewLineCallback;
        return this.afterNextNewLineCallback = void 0, t?.(), this;
      }
      withIndent(t) {
        return this.indent(), t(this), this.unindent(), this;
      }
      afterNextNewline(t) {
        return this.afterNextNewLineCallback = t, this;
      }
      indent() {
        return this.currentIndent++, this;
      }
      unindent() {
        return this.currentIndent > 0 && this.currentIndent--, this;
      }
      addMarginSymbol(t) {
        return this.marginSymbol = t, this;
      }
      toString() {
        return this.lines.concat(this.indentedCurrentLine()).join(`
`);
      }
      getCurrentLineLength() {
        return this.currentLine.length;
      }
      indentedCurrentLine() {
        let t = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
        return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
      }
    };
    a(rn, "Writer");
    var bc = O(Nn());
    var je = class {
      constructor(t, r) {
        this.name = t;
        this.value = r;
        this.isRequired = false;
      }
      makeRequired() {
        return this.isRequired = true, this;
      }
      write(t) {
        let { chalk: r } = t.context;
        t.addMarginSymbol(r.greenBright(this.isRequired ? "+" : "?")), t.write(r.greenBright(this.name)), this.isRequired || t.write(r.greenBright("?")), t.write(r.greenBright(": ")), typeof this.value == "string" ? t.write(r.greenBright(this.value)) : t.write(this.value);
      }
    };
    a(je, "ObjectFieldSuggestion");
    var nr = { write(e) {
      e.writeLine(",");
    } };
    var Ne = class {
      constructor(t) {
        this.contents = t;
        this.isUnderlined = false;
        this.color = a((t2) => t2, "color");
      }
      underline() {
        return this.isUnderlined = true, this;
      }
      setColor(t) {
        return this.color = t, this;
      }
      write(t) {
        let r = t.getCurrentLineLength();
        t.write(this.color(this.contents)), this.isUnderlined && t.afterNextNewline(() => {
          t.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)));
        });
      }
    };
    a(Ne, "FormattedString");
    var Ke = class {
      constructor() {
        this.hasError = false;
      }
      markAsError() {
        return this.hasError = true, this;
      }
    };
    a(Ke, "Value");
    var j = class extends Ke {
      constructor() {
        super(...arguments);
        this.fields = {};
        this.suggestions = [];
      }
      addField(r) {
        this.fields[r.name] = r;
      }
      addSuggestion(r) {
        this.suggestions.push(r);
      }
      getField(r) {
        return this.fields[r];
      }
      getDeepField(r) {
        let [n, ...i] = r, o = this.getField(n);
        if (!o)
          return;
        let s = o;
        for (let l of i) {
          if (!(s.value instanceof j))
            return;
          let u = s.value.getField(l);
          if (!u)
            return;
          s = u;
        }
        return s;
      }
      getDeepFieldValue(r) {
        return r.length === 0 ? this : this.getDeepField(r)?.value;
      }
      hasField(r) {
        return Boolean(this.getField(r));
      }
      removeAllFields() {
        this.fields = {};
      }
      getFields() {
        return this.fields;
      }
      isEmpty() {
        return Object.keys(this.fields).length === 0;
      }
      getFieldValue(r) {
        return this.getField(r)?.value;
      }
      getDeepSubSelectionValue(r) {
        let n = this;
        for (let i of r) {
          if (!(n instanceof j))
            return;
          let o = n.getSubSelectionValue(i);
          if (!o)
            return;
          n = o;
        }
        return n;
      }
      getDeepSelectionParent(r) {
        let n = this.getSelectionParent();
        if (!n)
          return;
        let i = n;
        for (let o of r) {
          let s = i.value.getFieldValue(o);
          if (!s || !(s instanceof j))
            return;
          let l = s.getSelectionParent();
          if (!l)
            return;
          i = l;
        }
        return i;
      }
      getSelectionParent() {
        let r = this.getField("select");
        if (r?.value instanceof j)
          return { kind: "select", value: r.value };
        let n = this.getField("include");
        if (n?.value instanceof j)
          return { kind: "include", value: n.value };
      }
      getSubSelectionValue(r) {
        return this.getSelectionParent()?.value.fields[r].value;
      }
      getPrintWidth() {
        let r = Object.values(this.fields);
        return r.length == 0 ? 2 : Math.max(...r.map((i) => i.getPrintWidth())) + 2;
      }
      write(r) {
        let n = Object.values(this.fields);
        if (n.length === 0 && this.suggestions.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithContents(r, n);
      }
      writeEmpty(r) {
        let n = new Ne("{}");
        this.hasError && n.setColor(r.context.chalk.redBright).underline(), r.write(n);
      }
      writeWithContents(r, n) {
        r.writeLine("{").withIndent(() => {
          r.writeJoined(nr, [...n, ...this.suggestions]).newLine();
        }), r.write("}"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(r.context.chalk.redBright("~".repeat(this.getPrintWidth())));
        });
      }
    };
    a(j, "ObjectValue");
    var ee = class extends Ke {
      constructor(r) {
        super();
        this.text = r;
      }
      getPrintWidth() {
        return this.text.length;
      }
      write(r) {
        let n = new Ne(this.text);
        this.hasError && n.underline().setColor(r.context.chalk.redBright), r.write(n);
      }
    };
    a(ee, "ScalarValue");
    var nn = class {
      constructor() {
        this.fields = [];
      }
      addField(t, r) {
        return this.fields.push({ write(n) {
          let i = n.context.chalk;
          n.write(i.greenBright.dim(`${t}: ${r}`)).addMarginSymbol(i.greenBright.dim("+"));
        } }), this;
      }
      write(t) {
        let { chalk: r } = t.context;
        t.writeLine(r.greenBright("{")).withIndent(() => {
          t.writeJoined(nr, this.fields).newLine();
        }).write(r.greenBright("}")).addMarginSymbol(r.greenBright("+"));
      }
    };
    a(nn, "SuggestionObjectValue");
    function Ci(e, t) {
      switch (e.kind) {
        case "IncludeAndSelect":
          lh(e, t);
          break;
        case "IncludeOnScalar":
          uh(e, t);
          break;
        case "EmptySelection":
          ch(e, t);
          break;
        case "UnknownSelectionField":
          ph(e, t);
          break;
        case "UnknownArgument":
          fh(e, t);
          break;
        case "UnknownInputField":
          dh(e, t);
          break;
        case "RequiredArgumentMissing":
          mh(e, t);
          break;
        case "InvalidArgumentType":
          gh(e, t);
          break;
        case "InvalidArgumentValue":
          hh(e, t);
          break;
        case "ValueTooLarge":
          yh(e, t);
          break;
        case "SomeFieldsMissing":
          bh(e, t);
          break;
        case "TooManyFieldsGiven":
          Eh(e, t);
          break;
        case "Union":
          wh(e, t);
          break;
        default:
          throw console.log(e), new Error("not implemented: " + e.kind);
      }
    }
    a(Ci, "applyValidationError");
    function lh(e, t) {
      let r = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      r && r instanceof j && (r.getField("include")?.markAsError(), r.getField("select")?.markAsError()), t.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.greenBright("`include`")} or ${n.greenBright("`select`")}, but ${n.redBright("not both")} at the same time.`);
    }
    a(lh, "applyIncludeAndSelectError");
    function uh(e, t) {
      let [r, n] = Oi(e.selectionPath), i = e.outputType, o = t.arguments.getDeepSelectionParent(r)?.value;
      if (o && (o.getField(n)?.markAsError(), i))
        for (let s of i.fields)
          s.isRelation && o.addSuggestion(new je(s.name, "true"));
      t.addErrorMessage((s) => {
        let l = `Invalid scalar field ${s.redBright(`\`${n}\``)} for ${s.bold("include")} statement`;
        return i ? l += ` on model ${s.bold(i.name)}. ${on(s)}` : l += ".", l += `
Note that ${s.bold("include")} statements only accept relation fields.`, l;
      });
    }
    a(uh, "applyIncludeOnScalarError");
    function ch(e, t) {
      let r = e.outputType, n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value, i = n?.isEmpty() ?? false;
      n && (n.removeAllFields(), xc(n, r)), t.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${on(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`);
    }
    a(ch, "applyEmptySelectionError");
    function ph(e, t) {
      let [r, n] = Oi(e.selectionPath), i = t.arguments.getDeepSelectionParent(r);
      i && (i.value.getField(n)?.markAsError(), xc(i.value, e.outputType)), t.addErrorMessage((o) => {
        let s = [`Unknown field ${o.redBright(`\`${n}\``)}`];
        return i && s.push(`for ${o.bold(i.kind)} statement`), s.push(`on model ${o.bold(`\`${e.outputType.name}\``)}.`), s.push(on(o)), s.join(" ");
      });
    }
    a(ph, "applyUnknownSelectionFieldError");
    function fh(e, t) {
      let r = e.argumentPath[0], n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      n instanceof j && (n.getField(r)?.markAsError(), Th(n, e.arguments)), t.addErrorMessage((i) => Ec(i, r, e.arguments.map((o) => o.name)));
    }
    a(fh, "applyUnknownArgumentError");
    function dh(e, t) {
      let [r, n] = Oi(e.argumentPath), i = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      if (i instanceof j) {
        i.getDeepField(e.argumentPath)?.markAsError();
        let o = i.getDeepFieldValue(r);
        o instanceof j && vc(o, e.inputType);
      }
      t.addErrorMessage((o) => Ec(o, n, e.inputType.fields.map((s) => s.name)));
    }
    a(dh, "applyUnknownInputFieldError");
    function Ec(e, t, r) {
      let n = [`Unknown argument \`${e.redBright(t)}\`.`], i = Sh(t, r);
      return i && n.push(`Did you mean \`${e.greenBright(i)}\`?`), r.length > 0 && n.push(on(e)), n.join(" ");
    }
    a(Ec, "unknownArgumentMessage");
    function mh(e, t) {
      t.addErrorMessage((l) => `Argument \`${l.greenBright(i)}\` is missing.`);
      let r = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      if (!(r instanceof j))
        return;
      let [n, i] = Oi(e.argumentPath), o = new nn(), s = r.getDeepFieldValue(n);
      if (s instanceof j)
        if (e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
          for (let l of e.inputTypes[0].fields)
            o.addField(l.name, l.typeNames.join(" | "));
          s.addSuggestion(new je(i, o).makeRequired());
        } else {
          let l = e.inputTypes.map(wc).join(" | ");
          s.addSuggestion(new je(i, l).makeRequired());
        }
    }
    a(mh, "applyRequiredArgumentMissingError");
    function wc(e) {
      return e.kind === "list" ? `${wc(e.elementType)}[]` : e.name;
    }
    a(wc, "getInputTypeName");
    function gh(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      n instanceof j && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
        let o = Mi("or", e.argument.typeNames.map((s) => i.greenBright(s)));
        return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.redBright(e.inferredType)}.`;
      });
    }
    a(gh, "applyInvalidArgumentTypeError");
    function hh(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      n instanceof j && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
        let o = Mi("or", e.argument.typeNames.map((s) => i.greenBright(s)));
        return `Invalid value for argument \`${i.bold(r)}\`: ${e.underlyingError}. Expected ${o}.`;
      });
    }
    a(hh, "applyInvalidArgumentValueError");
    function yh(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath), i;
      if (n instanceof j) {
        let s = n.getDeepField(e.argumentPath)?.value;
        s?.markAsError(), s instanceof ee && (i = s.text);
      }
      t.addErrorMessage((o) => {
        let s = ["Unable to fit value"];
        return i && s.push(o.redBright(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``), s.join(" ");
      });
    }
    a(yh, "applyValueTooLargeError");
    function bh(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      if (n instanceof j) {
        let i = n.getDeepFieldValue(e.argumentPath);
        i instanceof j && vc(i, e.inputType);
      }
      t.addErrorMessage((i) => {
        let o = [`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.greenBright("at least one of")} ${Mi("or", e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.greenBright("at least one")} argument.`) : o.push(`${i.greenBright(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(on(i)), o.join(" ");
      });
    }
    a(bh, "applySomeFieldsMissingError");
    function Eh(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath), i = [];
      if (n instanceof j) {
        let o = n.getDeepFieldValue(e.argumentPath);
        o instanceof j && (o.markAsError(), i = Object.keys(o.getFields()));
      }
      t.addErrorMessage((o) => {
        let s = [`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.greenBright("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.greenBright("at most one")} argument,`) : s.push(`${o.greenBright(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${Mi("and", i.map((l) => o.redBright(l)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
      });
    }
    a(Eh, "applyTooManyFieldsGivenError");
    function wh(e, t) {
      let r = xh(e);
      if (r) {
        Ci(r, t);
        return;
      }
      let n = vh(e);
      if (n) {
        Ci(n, t);
        return;
      }
      t.addErrorMessage(() => "Unknown error");
    }
    a(wh, "applyUnionError");
    function xh({ errors: e }) {
      if (e.length === 0 || e[0].kind !== "InvalidArgumentType")
        return;
      let t = { ...e[0], argument: { ...e[0].argument } };
      for (let r = 1; r < e.length; r++) {
        let n = e[r];
        if (n.kind !== "InvalidArgumentType" || !yc(n.selectionPath, t.selectionPath) || !yc(n.argumentPath, t.argumentPath))
          return;
        t.argument.typeNames = t.argument.typeNames.concat(n.argument.typeNames);
      }
      return t;
    }
    a(xh, "tryMergingUnionError");
    function yc(e, t) {
      if (e.length !== t.length)
        return false;
      for (let r = 0; r < e.length; r++)
        if (e[r] !== t[r])
          return false;
      return true;
    }
    a(yc, "isSamePath");
    function vh(e) {
      return Uo(e.errors, (t) => {
        let r = 0;
        return Array.isArray(t.selectionPath) && (r += t.selectionPath.length), Array.isArray(t.argumentPath) && (r += t.argumentPath.length), r;
      });
    }
    a(vh, "getLongestPathError");
    function xc(e, t) {
      for (let r of t.fields)
        e.hasField(r.name) || e.addSuggestion(new je(r.name, "true"));
    }
    a(xc, "addSelectionSuggestions");
    function Th(e, t) {
      for (let r of t)
        e.hasField(r.name) || e.addSuggestion(new je(r.name, r.typeNames.join(" | ")));
    }
    a(Th, "addArgumentsSuggestions");
    function vc(e, t) {
      if (t.kind === "object")
        for (let r of t.fields)
          e.hasField(r.name) || e.addSuggestion(new je(r.name, r.typeNames.join(" | ")));
    }
    a(vc, "addInputSuggestions");
    function Oi(e) {
      let t = [...e], r = t.pop();
      if (!r)
        throw new Error("unexpected empty path");
      return [t, r];
    }
    a(Oi, "splitPath");
    function on(e) {
      return `Available options are listed in ${e.greenBright("green")}.`;
    }
    a(on, "availableOptionsMessage");
    function Mi(e, t) {
      if (t.length === 1)
        return t[0];
      let r = [...t], n = r.pop();
      return `${r.join(", ")} ${e} ${n}`;
    }
    a(Mi, "joinWithPreposition");
    var Ah = 3;
    function Sh(e, t) {
      let r = 1 / 0, n;
      for (let i of t) {
        let o = (0, bc.default)(e, i);
        o > Ah || o < r && (r = o, n = i);
      }
      return n;
    }
    a(Sh, "getSuggestion");
    var sn = class extends Ke {
      constructor() {
        super(...arguments);
        this.items = [];
      }
      addItem(r) {
        return this.items.push(r), this;
      }
      getPrintWidth() {
        return Math.max(...this.items.map((n) => n.getPrintWidth())) + 2;
      }
      write(r) {
        if (this.items.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithItems(r);
      }
      writeEmpty(r) {
        let n = new Ne("[]");
        this.hasError && n.setColor(r.context.chalk.redBright).underline(), r.write(n);
      }
      writeWithItems(r) {
        let { chalk: n } = r.context;
        r.writeLine("[").withIndent(() => r.writeJoined(nr, this.items).newLine()).write("]"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(n.redBright("~".repeat(this.getPrintWidth())));
        });
      }
    };
    a(sn, "ArrayValue");
    var Tc = ": ";
    var an = class {
      constructor(t, r) {
        this.name = t;
        this.value = r;
        this.hasError = false;
      }
      markAsError() {
        this.hasError = true;
      }
      getPrintWidth() {
        return this.name.length + this.value.getPrintWidth() + Tc.length;
      }
      write(t) {
        let r = new Ne(this.name);
        this.hasError && r.underline().setColor(t.context.chalk.redBright), t.write(r).write(Tc).write(this.value);
      }
    };
    a(an, "ObjectField");
    var Ni = class {
      constructor(t) {
        this.errorMessages = [];
        this.arguments = t;
      }
      write(t) {
        t.write(this.arguments);
      }
      addErrorMessage(t) {
        this.errorMessages.push(t);
      }
      renderAllMessages(t) {
        return this.errorMessages.map((r) => r(t)).join(`
`);
      }
    };
    a(Ni, "ArgumentsRenderingTree");
    function Ac(e) {
      return new Ni(Sc(e));
    }
    a(Ac, "buildArgumentsRenderingTree");
    function Sc(e) {
      let t = new j();
      for (let [r, n] of Object.entries(e)) {
        let i = new an(r, Pc(n));
        t.addField(i);
      }
      return t;
    }
    a(Sc, "buildInputObject");
    function Pc(e) {
      if (typeof e == "string")
        return new ee(JSON.stringify(e));
      if (typeof e == "number" || typeof e == "boolean")
        return new ee(String(e));
      if (typeof e == "bigint")
        return new ee(`${e}n`);
      if (e === null)
        return new ee("null");
      if (e === void 0)
        return new ee("undefined");
      if (Xe(e))
        return new ee(`new Prisma.Decimal("${e.toFixed()}")`);
      if (e instanceof Uint8Array)
        return Buffer.isBuffer(e) ? new ee(`Buffer.alloc(${e.byteLength})`) : new ee(`new Uint8Array(${e.byteLength})`);
      if (e instanceof Date)
        return new ee(`new Date("${e.toISOString()}")`);
      if (e instanceof Y)
        return new ee(`Prisma.${e._getName()}`);
      if (Rn(e))
        return new ee(`prisma.${Lt(e.modelName)}.$fields.${e.name}`);
      if (Array.isArray(e))
        return Ph(e);
      if (typeof e == "object")
        return Sc(e);
      Ge(e, "Unknown value type");
    }
    a(Pc, "buildInputValue");
    function Ph(e) {
      let t = new sn();
      for (let r of e)
        t.addItem(Pc(r));
      return t;
    }
    a(Ph, "buildInputArray");
    function Ri({ args: e, errors: t, errorFormat: r, callsite: n, originalMethod: i }) {
      let o = Ac(e);
      for (let p of t)
        Ci(p, o);
      let s = new _c.default.Instance();
      r !== "pretty" && (s.level = 0);
      let l = o.renderAllMessages(s), u = new rn(0, { chalk: s }).write(o).toString(), c = pt({ message: l, callsite: n, originalMethod: i, showColors: r === "pretty", callArguments: u });
      throw new J(c);
    }
    a(Ri, "throwValidationException");
    var _h = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", update: "updateOne", updateMany: "updateMany", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
    function Cc({ modelName: e, action: t, args: r, baseDmmf: n, extensions: i, callsite: o, clientMethod: s, errorFormat: l }) {
      let u = new ir({ baseDmmf: n, modelName: e, action: t, rootArgs: r, callsite: o, extensions: i, path: [], originalMethod: s, errorFormat: l });
      return { modelName: e, action: _h[t], query: as(r, u) };
    }
    a(Cc, "serializeJsonQuery");
    function as({ select: e, include: t, ...r } = {}, n) {
      return { arguments: Mc(r), selection: Ch(e, t, n) };
    }
    a(as, "serializeFieldSelection");
    function Ch(e, t, r) {
      return e && t && r.throwValidationError({ kind: "IncludeAndSelect", selectionPath: r.getSelectionPath() }), e ? Nh(e, r) : Oh(r, t);
    }
    a(Ch, "serializeSelectionSet");
    function Oh(e, t) {
      let r = {};
      return e.model && !e.isRawAction() && (r.$composites = true, r.$scalars = true), t && Mh(r, t, e), r;
    }
    a(Oh, "createImplicitSelection");
    function Mh(e, t, r) {
      for (let [n, i] of Object.entries(t)) {
        let o = r.findField(n);
        o && o?.kind !== "object" && r.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), i === true ? e[n] = true : typeof i == "object" && (e[n] = as(i, r.atField(n)));
      }
    }
    a(Mh, "addIncludedRelations");
    function Nh(e, t) {
      let r = {}, n = t.getComputedFields(), i = ui(e, n);
      for (let [o, s] of Object.entries(i)) {
        let l = t.findField(o);
        n?.[o] && !l || (s === true ? r[o] = true : typeof s == "object" && (r[o] = as(s, t.atField(o))));
      }
      return r;
    }
    a(Nh, "createExplicitSelection");
    function Oc(e) {
      if (e === null)
        return null;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
        return e;
      if (typeof e == "bigint")
        return { $type: "BigInt", value: String(e) };
      if (Fh(e))
        return { $type: "DateTime", value: e.toISOString() };
      if (Rn(e))
        return { $type: "FieldRef", value: { _ref: e.name } };
      if (Array.isArray(e))
        return Rh(e);
      if (ArrayBuffer.isView(e))
        return { $type: "Bytes", value: Buffer.from(e).toString("base64") };
      if (Ih(e))
        return e.values;
      if (Xe(e))
        return { $type: "Decimal", value: e.toFixed() };
      if (e instanceof Y) {
        if (e !== Rt.instances[e._getName()])
          throw new Error("Invalid ObjectEnumValue");
        return { $type: "Enum", value: e._getName() };
      }
      if (typeof e == "object")
        return Mc(e);
      Ge(e, "Unknown value type");
    }
    a(Oc, "serializeArgumentsValue");
    function Mc(e) {
      if (e.$type)
        return { $type: "Json", value: JSON.stringify(e) };
      let t = {};
      for (let r in e) {
        let n = e[r];
        n !== void 0 && (t[r] = Oc(n));
      }
      return t;
    }
    a(Mc, "serializeArgumentsObject");
    function Rh(e) {
      let t = [];
      for (let r of e)
        r !== void 0 && t.push(Oc(r));
      return t;
    }
    a(Rh, "serializeArgumentsArray");
    function Fh(e) {
      return Object.prototype.toString.call(e) === "[object Date]";
    }
    a(Fh, "isDate");
    function Ih(e) {
      return typeof e == "object" && e !== null && e.__prismaRawParameters__ === true;
    }
    a(Ih, "isRawParameters");
    var ir = class {
      constructor(t) {
        this.params = t;
        this.params.modelName && (this.model = this.params.baseDmmf.modelMap[this.params.modelName]);
      }
      throwValidationError(t) {
        Ri({ errors: [t], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat });
      }
      getSelectionPath() {
        return this.params.path;
      }
      getOutputTypeDescription() {
        if (!!this.model)
          return { name: this.model.name, fields: this.model.fields.map((t) => ({ name: t.name, typeName: "boolean", isRelation: t.kind === "object" })) };
      }
      isRawAction() {
        return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
      }
      getComputedFields() {
        if (!!this.model)
          return this.params.extensions.getAllComputedFields(this.model.name);
      }
      findField(t) {
        return this.model?.fields.find((r) => r.name === t);
      }
      atField(t) {
        let r = this.findField(t), n = r?.kind === "object" ? r.type : void 0;
        return new ir({ ...this.params, modelName: n, path: this.params.path.concat(t) });
      }
    };
    a(ir, "SerializeContext");
    var or = class {
      constructor(t, r) {
        this.baseDmmf = t;
        this.errorFormat = r;
      }
      createMessage(t) {
        let r = Cc({ ...t, baseDmmf: this.baseDmmf, errorFormat: this.errorFormat });
        return new ln(r);
      }
      createBatch(t) {
        return t.map((r) => r.toEngineQuery());
      }
    };
    a(or, "JsonProtocolEncoder");
    var Dh = { aggregate: false, aggregateRaw: false, createMany: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateOne: true, upsertOne: true };
    var ln = class {
      constructor(t) {
        this.query = t;
      }
      isWrite() {
        return Dh[this.query.action];
      }
      getBatchId() {
        if (this.query.action !== "findUnique")
          return;
        let t = [];
        return this.query.modelName && t.push(this.query.modelName), this.query.query.arguments && t.push(ls(this.query.query.arguments)), t.push(ls(this.query.query.selection)), t.join("");
      }
      toDebugString() {
        return JSON.stringify(this.query, null, 2);
      }
      toEngineQuery() {
        return this.query;
      }
      deserializeResponse(t, r) {
        if (!t)
          return t;
        let n = Object.values(t)[0], i = r.filter((o) => o !== "select" && o !== "include");
        return _i(Hr(n, i));
      }
    };
    a(ln, "JsonProtocolMessage");
    function ls(e) {
      return `(${Object.keys(e).sort().map((r) => {
        let n = e[r];
        return typeof n == "object" && n !== null ? `(${r} ${ls(n)})` : r;
      }).join(" ")})`;
    }
    a(ls, "buildKeysString");
    var he = class {
      constructor(t, r) {
        if (t.length - 1 !== r.length)
          throw t.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${t.length} strings to have ${t.length - 1} values`);
        let n = r.reduce((s, l) => s + (l instanceof he ? l.values.length : 1), 0);
        this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = t[0];
        let i = 0, o = 0;
        for (; i < r.length; ) {
          let s = r[i++], l = t[i];
          if (s instanceof he) {
            this.strings[o] += s.strings[0];
            let u = 0;
            for (; u < s.values.length; )
              this.values[o++] = s.values[u++], this.strings[o] = s.strings[u];
            this.strings[o] += l;
          } else
            this.values[o++] = s, this.strings[o] = l;
        }
      }
      get text() {
        let t = 1, r = this.strings[0];
        for (; t < this.strings.length; )
          r += `$${t}${this.strings[t++]}`;
        return r;
      }
      get sql() {
        let t = 1, r = this.strings[0];
        for (; t < this.strings.length; )
          r += `?${this.strings[t++]}`;
        return r;
      }
      inspect() {
        return { text: this.text, sql: this.sql, values: this.values };
      }
    };
    a(he, "Sql");
    function Nc(e, t = ",", r = "", n = "") {
      if (e.length === 0)
        throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
      return new he([r, ...Array(e.length - 1).fill(t), n], e);
    }
    a(Nc, "join");
    function us(e) {
      return new he([e], []);
    }
    a(us, "raw");
    var Rc = us("");
    function cs(e, ...t) {
      return new he(e, t);
    }
    a(cs, "sql");
    var ps = a((e) => e.reduce((t, r, n) => `${t}@P${n}${r}`), "mssqlPreparedStatement");
    function sr(e) {
      try {
        return Fc(e, "fast");
      } catch {
        return Fc(e, "slow");
      }
    }
    a(sr, "serializeRawParameters");
    function Fc(e, t) {
      return JSON.stringify(e.map((r) => kh(r, t)));
    }
    a(Fc, "serializeRawParametersInternal");
    function kh(e, t) {
      return typeof e == "bigint" ? { prisma__type: "bigint", prisma__value: e.toString() } : Lh(e) ? { prisma__type: "date", prisma__value: e.toJSON() } : ye.isDecimal(e) ? { prisma__type: "decimal", prisma__value: e.toJSON() } : Buffer.isBuffer(e) ? { prisma__type: "bytes", prisma__value: e.toString("base64") } : $h(e) || ArrayBuffer.isView(e) ? { prisma__type: "bytes", prisma__value: Buffer.from(e).toString("base64") } : typeof e == "object" && t === "slow" ? Dc(e) : e;
    }
    a(kh, "encodeParameter");
    function Lh(e) {
      return e instanceof Date ? true : Object.prototype.toString.call(e) === "[object Date]" && typeof e.toJSON == "function";
    }
    a(Lh, "isDate");
    function $h(e) {
      return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? true : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : false;
    }
    a($h, "isArrayBufferLike");
    function Dc(e) {
      if (typeof e != "object" || e === null)
        return e;
      if (typeof e.toJSON == "function")
        return e.toJSON();
      if (Array.isArray(e))
        return e.map(Ic);
      let t = {};
      for (let r of Object.keys(e))
        t[r] = Ic(e[r]);
      return t;
    }
    a(Dc, "preprocessObject");
    function Ic(e) {
      return typeof e == "bigint" ? e.toString() : Dc(e);
    }
    a(Ic, "preprocessValueInObject");
    var jh = /^(\s*alter\s)/i;
    var kc = B("prisma:client");
    function fs(e, t, r) {
      if (t.length > 0 && jh.exec(e))
        throw new Error(`Running ALTER using ${r} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
    }
    a(fs, "checkAlter");
    function Bh(e) {
      return Array.isArray(e);
    }
    a(Bh, "isReadonlyArray");
    var ds = a((e, t) => ([r, ...n]) => {
      let i = "", o;
      if (typeof r == "string")
        i = r, o = { values: sr(n || []), __prismaRawParameters__: true }, t.includes("executeRaw") && fs(i, n, "prisma.$executeRawUnsafe(<SQL>, [...values])");
      else if (Bh(r))
        switch (e._activeProvider) {
          case "sqlite":
          case "mysql": {
            let s = new he(r, n);
            i = s.sql, o = { values: sr(s.values), __prismaRawParameters__: true };
            break;
          }
          case "cockroachdb":
          case "postgresql": {
            let s = new he(r, n);
            i = s.text, t.includes("executeRaw") && fs(i, s.values, "prisma.$executeRaw`<SQL>`"), o = { values: sr(s.values), __prismaRawParameters__: true };
            break;
          }
          case "sqlserver": {
            i = ps(r), o = { values: sr(n), __prismaRawParameters__: true };
            break;
          }
          default:
            throw new Error(`The ${e._activeProvider} provider does not support ${t}`);
        }
      else {
        switch (e._activeProvider) {
          case "sqlite":
          case "mysql":
            i = r.sql;
            break;
          case "cockroachdb":
          case "postgresql":
            i = r.text, t.includes("executeRaw") && fs(i, r.values, "prisma.$executeRaw(sql`<SQL>`)");
            break;
          case "sqlserver":
            i = ps(r.strings);
            break;
          default:
            throw new Error(`The ${e._activeProvider} provider does not support ${t}`);
        }
        o = { values: sr(r.values), __prismaRawParameters__: true };
      }
      return o?.values ? kc(`prisma.${t}(${i}, ${o.values})`) : kc(`prisma.${t}(${i})`), { query: i, parameters: o };
    }, "rawQueryArgsMapper");
    function Lc(e, t = () => {
    }) {
      let r, n = new Promise((i) => r = i);
      return { then(i) {
        return --e === 0 && r(t()), i?.(n);
      } };
    }
    a(Lc, "getLockCountPromise");
    function $c(e) {
      return typeof e == "string" ? e : e.reduce((t, r) => {
        let n = typeof r == "string" ? r : r.level;
        return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
      }, void 0);
    }
    a($c, "getLogLevel");
    function Bc(e, t, r) {
      let n = jc(e, r), i = jc(t, r), o = Object.values(i).map((l) => l[l.length - 1]), s = Object.keys(i);
      return Object.entries(n).forEach(([l, u]) => {
        s.includes(l) || o.push(u[u.length - 1]);
      }), o;
    }
    a(Bc, "mergeBy");
    var jc = a((e, t) => e.reduce((r, n) => {
      let i = t(n);
      return r[i] || (r[i] = []), r[i].push(n), r;
    }, {}), "groupBy");
    var un = class {
      constructor() {
        this._middlewares = [];
      }
      use(t) {
        this._middlewares.push(t);
      }
      get(t) {
        return this._middlewares[t];
      }
      has(t) {
        return !!this._middlewares[t];
      }
      length() {
        return this._middlewares.length;
      }
    };
    a(un, "MiddlewareHandler");
    var Uc = O(Nr());
    function qc({ result: e, modelName: t, select: r, extensions: n }) {
      let i = n.getAllComputedFields(t);
      if (!i)
        return e;
      let o = [], s = [];
      for (let l of Object.values(i)) {
        if (r) {
          if (!r[l.name])
            continue;
          let u = l.needs.filter((c) => !r[c]);
          u.length > 0 && s.push(rs(u));
        }
        qh(e, l.needs) && o.push(Vh(l, dt(e, o)));
      }
      return o.length > 0 || s.length > 0 ? dt(e, [...o, ...s]) : e;
    }
    a(qc, "applyResultExtensions");
    function qh(e, t) {
      return t.every((r) => qo(e, r));
    }
    a(qh, "areNeedsMet");
    function Vh(e, t) {
      return vt(ft(e.name, () => e.compute(t)));
    }
    a(Vh, "computedPropertyLayer");
    function Fi({ visitor: e, result: t, args: r, dmmf: n, model: i }) {
      if (Array.isArray(t)) {
        for (let s = 0; s < t.length; s++)
          t[s] = Fi({ result: t[s], args: r, model: i, dmmf: n, visitor: e });
        return t;
      }
      let o = e(t, i, r) ?? t;
      return r.include && Vc({ includeOrSelect: r.include, result: o, parentModel: i, dmmf: n, visitor: e }), r.select && Vc({ includeOrSelect: r.select, result: o, parentModel: i, dmmf: n, visitor: e }), o;
    }
    a(Fi, "visitQueryResult");
    function Vc({ includeOrSelect: e, result: t, parentModel: r, dmmf: n, visitor: i }) {
      for (let [o, s] of Object.entries(e)) {
        if (!s || t[o] == null)
          continue;
        let l = r.fields.find((c) => c.name === o);
        if (!l || l.kind !== "object" || !l.relationName)
          continue;
        let u = typeof s == "object" ? s : {};
        t[o] = Fi({ visitor: i, result: t[o], args: u, model: n.getModelMap()[l.type], dmmf: n });
      }
    }
    a(Vc, "visitNested");
    var cn = class {
      constructor(t) {
        this.options = t;
        this.tickActive = false;
        this.batches = {};
      }
      request(t) {
        let r = this.options.batchBy(t);
        return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = true, process.nextTick(() => {
          this.dispatchBatches(), this.tickActive = false;
        }))), new Promise((n, i) => {
          this.batches[r].push({ request: t, resolve: n, reject: i });
        })) : this.options.singleLoader(t);
      }
      dispatchBatches() {
        for (let t in this.batches) {
          let r = this.batches[t];
          delete this.batches[t], r.length === 1 ? this.options.singleLoader(r[0].request).then((n) => {
            n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
          }).catch((n) => {
            r[0].reject(n);
          }) : this.options.batchLoader(r.map((n) => n.request)).then((n) => {
            if (n instanceof Error)
              for (let i = 0; i < r.length; i++)
                r[i].reject(n);
            else
              for (let i = 0; i < r.length; i++) {
                let o = n[i];
                o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
              }
          }).catch((n) => {
            for (let i = 0; i < r.length; i++)
              r[i].reject(n);
          });
        }
      }
      get [Symbol.toStringTag]() {
        return "DataLoader";
      }
    };
    a(cn, "DataLoader");
    var Uh = B("prisma:client:request_handler");
    var pn = class {
      constructor(t, r) {
        this.logEmitter = r, this.client = t, this.dataloader = new cn({ batchLoader: (n) => {
          let i = n[0].transaction, s = n[0].protocolEncoder.createBatch(n.map((c) => c.protocolMessage)), l = De({ context: n[0].otelParentCtx, tracingConfig: t._tracingConfig }), u = n.some((c) => c.protocolMessage.isWrite());
          return this.client._engine.requestBatch(s, { traceparent: l, transaction: Gh(i), containsWrite: u, customDataProxyFetch: n[0].customDataProxyFetch });
        }, singleLoader: (n) => {
          let i = n.transaction?.kind === "itx" ? Gc(n.transaction) : void 0;
          return this.client._engine.request(n.protocolMessage.toEngineQuery(), { traceparent: De({ tracingConfig: n.tracingConfig }), interactiveTransaction: i, isWrite: n.protocolMessage.isWrite(), customDataProxyFetch: n.customDataProxyFetch });
        }, batchBy: (n) => n.transaction?.id ? `transaction-${n.transaction.id}` : n.protocolMessage.getBatchId() });
      }
      async request({ protocolMessage: t, protocolEncoder: r, dataPath: n = [], callsite: i, modelName: o, rejectOnNotFound: s, clientMethod: l, args: u, transaction: c, unpacker: p, extensions: f, otelParentCtx: d, otelChildCtx: m, customDataProxyFetch: h }) {
        try {
          let g = await this.dataloader.request({ protocolMessage: t, protocolEncoder: r, transaction: c, otelParentCtx: d, otelChildCtx: m, tracingConfig: this.client._tracingConfig, customDataProxyFetch: h }), b = g?.data, y = g?.elapsed, x = this.unpack(t, b, n, p);
          return sc(x, l, o, s), o && (x = this.applyResultExtensions({ result: x, modelName: o, args: u, extensions: f })), process.env.PRISMA_CLIENT_GET_TIME ? { data: x, elapsed: y } : x;
        } catch (g) {
          this.handleAndLogRequestError({ error: g, clientMethod: l, callsite: i, transaction: c, args: u });
        }
      }
      handleAndLogRequestError(t) {
        try {
          this.handleRequestError(t);
        } catch (r) {
          throw this.logEmitter && this.logEmitter.emit("error", { message: r.message, target: t.clientMethod, timestamp: /* @__PURE__ */ new Date() }), r;
        }
      }
      handleRequestError({ error: t, clientMethod: r, callsite: n, transaction: i, args: o }) {
        if (Uh(t), Qh(t, i) || t instanceof Pe)
          throw t;
        if (t instanceof X && Kh(t)) {
          let l = Qc(t.meta);
          Ri({ args: o, errors: [l], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r });
        }
        let s = t.message;
        throw n && (s = pt({ callsite: n, originalMethod: r, isPanic: t.isPanic, showColors: this.client._errorFormat === "pretty", message: s })), s = this.sanitizeMessage(s), t.code ? new X(s, { code: t.code, clientVersion: this.client._clientVersion, meta: t.meta, batchRequestIdx: t.batchRequestIdx }) : t.isPanic ? new fe(s, this.client._clientVersion) : t instanceof Z ? new Z(s, { clientVersion: this.client._clientVersion, batchRequestIdx: t.batchRequestIdx }) : t instanceof G ? new G(s, this.client._clientVersion) : t instanceof fe ? new fe(s, this.client._clientVersion) : (t.clientVersion = this.client._clientVersion, t);
      }
      sanitizeMessage(t) {
        return this.client._errorFormat && this.client._errorFormat !== "pretty" ? (0, Uc.default)(t) : t;
      }
      unpack(t, r, n, i) {
        if (!r)
          return r;
        r.data && (r = r.data);
        let o = t.deserializeResponse(r, n);
        return i ? i(o) : o;
      }
      applyResultExtensions({ result: t, modelName: r, args: n, extensions: i }) {
        if (i.isEmpty() || t == null)
          return t;
        let o = this.client._baseDmmf.getModelMap()[r];
        return o ? Fi({ result: t, args: n ?? {}, model: o, dmmf: this.client._baseDmmf, visitor(s, l, u) {
          let c = Te(l.name);
          return qc({ result: s, modelName: c, select: u.select, extensions: i });
        } }) : t;
      }
      get [Symbol.toStringTag]() {
        return "RequestHandler";
      }
    };
    a(pn, "RequestHandler");
    function Gh(e) {
      if (!!e) {
        if (e.kind === "batch")
          return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
        if (e.kind === "itx")
          return { kind: "itx", options: Gc(e) };
        Ge(e, "Unknown transaction kind");
      }
    }
    a(Gh, "getTransactionOptions");
    function Gc(e) {
      return { id: e.id, payload: e.payload };
    }
    a(Gc, "getItxTransactionOptions");
    function Qh(e, t) {
      return jr(e) && t?.kind === "batch" && e.batchRequestIdx !== t.index;
    }
    a(Qh, "isMismatchingBatchIndex");
    function Kh(e) {
      return e.code === "P2009" || e.code === "P2012";
    }
    a(Kh, "isValidationError");
    function Qc(e) {
      if (e.kind === "Union")
        return { kind: "Union", errors: e.errors.map(Qc) };
      if (Array.isArray(e.selectionPath)) {
        let [, ...t] = e.selectionPath;
        return { ...e, selectionPath: t };
      }
      return e;
    }
    a(Qc, "convertValidationError");
    function Kc(e) {
      return e.map((t) => {
        let r = {};
        for (let n of Object.keys(t))
          r[n] = Wc(t[n]);
        return r;
      });
    }
    a(Kc, "deserializeRawResults");
    function Wc({ prisma__type: e, prisma__value: t }) {
      switch (e) {
        case "bigint":
          return BigInt(t);
        case "bytes":
          return Buffer.from(t, "base64");
        case "decimal":
          return new ye(t);
        case "datetime":
        case "date":
          return new Date(t);
        case "time":
          return /* @__PURE__ */ new Date(`1970-01-01T${t}Z`);
        case "array":
          return t.map(Wc);
        default:
          return t;
      }
    }
    a(Wc, "deserializeValue");
    var zc = O(Nn());
    var Jc = ["datasources", "errorFormat", "log", "__internal", "rejectOnNotFound"];
    var Hc = ["pretty", "colorless", "minimal"];
    var Yc = ["info", "query", "warn", "error"];
    var Wh = { datasources: (e, t) => {
      if (!!e) {
        if (typeof e != "object" || Array.isArray(e))
          throw new K(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let i = ar(r, t) || `Available datasources: ${t.join(", ")}`;
            throw new K(`Unknown datasource ${r} provided to PrismaClient constructor.${i}`);
          }
          if (typeof n != "object" || Array.isArray(n))
            throw new K(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == "object")
            for (let [i, o] of Object.entries(n)) {
              if (i !== "url")
                throw new K(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
              if (typeof o != "string")
                throw new K(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            }
        }
      }
    }, errorFormat: (e) => {
      if (!!e) {
        if (typeof e != "string")
          throw new K(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
        if (!Hc.includes(e)) {
          let t = ar(e, Hc);
          throw new K(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`);
        }
      }
    }, log: (e) => {
      if (!e)
        return;
      if (!Array.isArray(e))
        throw new K(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
      function t(r) {
        if (typeof r == "string" && !Yc.includes(r)) {
          let n = ar(r, Yc);
          throw new K(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`);
        }
      }
      a(t, "validateLogLevel");
      for (let r of e) {
        t(r);
        let n = { level: t, emit: (i) => {
          let o = ["stdout", "event"];
          if (!o.includes(i)) {
            let s = ar(i, o);
            throw new K(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
          }
        } };
        if (r && typeof r == "object")
          for (let [i, o] of Object.entries(r))
            if (n[i])
              n[i](o);
            else
              throw new K(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
      }
    }, __internal: (e) => {
      if (!e)
        return;
      let t = ["debug", "hooks", "engine", "measurePerformance"];
      if (typeof e != "object")
        throw new K(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
      for (let [r] of Object.entries(e))
        if (!t.includes(r)) {
          let n = ar(r, t);
          throw new K(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`);
        }
    }, rejectOnNotFound: (e) => {
      if (!!e) {
        if (Gr(e) || typeof e == "boolean" || typeof e == "object" || typeof e == "function")
          return e;
        throw new K(`Invalid rejectOnNotFound expected a boolean/Error/{[modelName: Error | boolean]} but received ${JSON.stringify(e)}`);
      }
    } };
    function Xc(e, t) {
      for (let [r, n] of Object.entries(e)) {
        if (!Jc.includes(r)) {
          let i = ar(r, Jc);
          throw new K(`Unknown property ${r} provided to PrismaClient constructor.${i}`);
        }
        Wh[r](n, t);
      }
    }
    a(Xc, "validatePrismaClientOptions");
    function ar(e, t) {
      if (t.length === 0 || typeof e != "string")
        return "";
      let r = Jh(e, t);
      return r ? ` Did you mean "${r}"?` : "";
    }
    a(ar, "getDidYouMean");
    function Jh(e, t) {
      if (t.length === 0)
        return null;
      let r = t.map((i) => ({ value: i, distance: (0, zc.default)(e, i) }));
      r.sort((i, o) => i.distance < o.distance ? -1 : 1);
      let n = r[0];
      return n.distance < 3 ? n.value : null;
    }
    a(Jh, "getAlternative");
    function Zc(e) {
      return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
        let n = new Array(e.length), i = null, o = false, s = 0, l = a(() => {
          o || (s++, s === e.length && (o = true, i ? r(i) : t(n)));
        }, "settleOnePromise"), u = a((c) => {
          o || (o = true, r(c));
        }, "immediatelyReject");
        for (let c = 0; c < e.length; c++)
          e[c].then((p) => {
            n[c] = p, l();
          }, (p) => {
            if (!jr(p)) {
              u(p);
              return;
            }
            p.batchRequestIdx === c ? u(p) : (i || (i = p), l());
          });
      });
    }
    a(Zc, "waitForBatch");
    var Re = B("prisma:client");
    typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
    var Hh = Symbol.for("prisma.client.transaction.id");
    var Yh = { id: 0, nextId() {
      return ++this.id;
    } };
    function ip(e) {
      class t {
        constructor(n) {
          this._middlewares = new un();
          this._getDmmf = li(async (n2) => {
            try {
              let i2 = await me({ name: "getDmmf", enabled: this._tracingConfig.enabled, internal: true }, () => this._engine.getDmmf());
              return me({ name: "processDmmf", enabled: this._tracingConfig.enabled, internal: true }, () => new qe(yu(i2)));
            } catch (i2) {
              this._fetcher.handleAndLogRequestError({ ...n2, args: {}, error: i2 });
            }
          });
          this._getProtocolEncoder = li(async (n2) => this._engineConfig.engineProtocol === "json" ? new or(this._baseDmmf, this._errorFormat) : (this._dmmf === void 0 && (this._dmmf = await this._getDmmf(n2)), new tn(this._dmmf, this._errorFormat)));
          this.$extends = cc;
          hc(e), n && Xc(n, e.datasourceNames);
          let i = new rp.EventEmitter().on("error", () => {
          });
          this._extensions = Qe.empty(), this._previewFeatures = e.generator?.previewFeatures ?? [], this._rejectOnNotFound = n?.rejectOnNotFound, this._clientVersion = e.clientVersion ?? Ai, this._activeProvider = e.activeProvider, this._dataProxy = e.dataProxy, this._tracingConfig = Oo(this._previewFeatures), this._clientEngineType = ko(e.generator);
          let o = { rootEnvPath: e.relativeEnvPaths.rootEnvPath && fn.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && fn.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }, s = Vr(o, { conflictCheck: "none" });
          try {
            let l = n ?? {}, u = l.__internal ?? {}, c = u.debug === true;
            c && B.enable("prisma:client");
            let p = fn.default.resolve(e.dirname, e.relativePath);
            np.default.existsSync(p) || (p = e.dirname), Re("dirname", e.dirname), Re("relativePath", e.relativePath), Re("cwd", p);
            let f = l.datasources || {}, d = Object.entries(f).filter(([b, y]) => y && y.url).map(([b, { url: y }]) => ({ name: b, url: y })), m = Bc([], d, (b) => b.name), h = u.engine || {};
            l.errorFormat ? this._errorFormat = l.errorFormat : process.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : process.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._baseDmmf = new et(e.document);
            let g = jo(e.generator);
            if (Re("protocol", g), this._dataProxy && g === "graphql") {
              let b = e.document;
              this._dmmf = new qe(b);
            }
            if (this._engineConfig = { cwd: p, dirname: e.dirname, enableDebugLogs: c, allowTriggerPanic: h.allowTriggerPanic, datamodelPath: fn.default.join(e.dirname, e.filename ?? "schema.prisma"), prismaPath: h.binaryPath ?? void 0, engineEndpoint: h.endpoint, datasources: m, generator: e.generator, showColors: this._errorFormat === "pretty", logLevel: l.log && $c(l.log), logQueries: l.log && Boolean(typeof l.log == "string" ? l.log === "query" : l.log.find((b) => typeof b == "string" ? b === "query" : b.level === "query")), env: s?.parsed ?? e.injectableEdgeEnv?.parsed ?? {}, flags: [], clientVersion: e.clientVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingConfig: this._tracingConfig, logEmitter: i, engineProtocol: g }, Re("clientVersion", e.clientVersion), Re("clientEngineType", this._dataProxy ? "dataproxy" : this._clientEngineType), this._dataProxy && Re("using Data Proxy with Node.js runtime"), this._engine = this.getEngine(), this._fetcher = new pn(this, i), l.log)
              for (let b of l.log) {
                let y = typeof b == "string" ? b : b.emit === "stdout" ? b.level : null;
                y && this.$on(y, (x) => {
                  Wr.log(`${Wr.tags[y] ?? ""}`, x.message || x.query);
                });
              }
            this._metrics = new gt(this._engine);
          } catch (l) {
            throw l.clientVersion = this._clientVersion, l;
          }
          return Si(this);
        }
        get [Symbol.toStringTag]() {
          return "PrismaClient";
        }
        getEngine() {
          if (this._dataProxy, this._clientEngineType === "library")
            return new zt(this._engineConfig);
          throw this._clientEngineType, "binary", new J("Invalid client engine type, please use `library` or `binary`");
        }
        $use(n) {
          this._middlewares.use(n);
        }
        $on(n, i) {
          n === "beforeExit" ? this._engine.on("beforeExit", i) : this._engine.on(n, (o) => {
            let s = o.fields;
            return i(n === "query" ? { timestamp: o.timestamp, query: s?.query ?? o.query, params: s?.params ?? o.params, duration: s?.duration_ms ?? o.duration, target: o.target } : { timestamp: o.timestamp, message: s?.message ?? o.message, target: o.target });
          });
        }
        $connect() {
          try {
            return this._engine.start();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          }
        }
        async _runDisconnect() {
          await this._engine.stop(), delete this._connectionPromise, this._engine = this.getEngine(), delete this._disconnectionPromise;
        }
        async $disconnect() {
          try {
            await this._engine.stop();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          } finally {
            _a(), this._dataProxy || (this._dmmf = void 0);
          }
        }
        $executeRawInternal(n, i, o) {
          return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: ds(this, i), callsite: mt(this._errorFormat), dataPath: [] });
        }
        $executeRaw(n, ...i) {
          return Le((o) => {
            if (n.raw !== void 0 || n.sql !== void 0)
              return this.$executeRawInternal(o, "$executeRaw", [n, ...i]);
            throw new J("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n");
          });
        }
        $executeRawUnsafe(n, ...i) {
          return Le((o) => this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i]));
        }
        $runCommandRaw(n) {
          if (e.activeProvider !== "mongodb")
            throw new J(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`);
          return Le((i) => this._request({ args: { command: n }, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", callsite: mt(this._errorFormat), transaction: i }));
        }
        async $queryRawInternal(n, i, o) {
          return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: ds(this, i), callsite: mt(this._errorFormat), dataPath: [] }).then(Kc);
        }
        $queryRaw(n, ...i) {
          return Le((o) => {
            if (n.raw !== void 0 || n.sql !== void 0)
              return this.$queryRawInternal(o, "$queryRaw", [n, ...i]);
            throw new J("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n");
          });
        }
        $queryRawUnsafe(n, ...i) {
          return Le((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
        }
        _transactionWithArray({ promises: n, options: i }) {
          let o = Yh.nextId(), s = Lc(n.length), l = n.map((u, c) => {
            if (u?.[Symbol.toStringTag] !== "PrismaPromise")
              throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
            let p = i?.isolationLevel, f = { kind: "batch", id: o, index: c, isolationLevel: p, lock: s };
            return u.requestTransaction?.(f) ?? u;
          });
          return Zc(l);
        }
        async _transactionWithCallback({ callback: n, options: i }) {
          let o = { traceparent: De({ tracingConfig: this._tracingConfig }) }, s = await this._engine.transaction("start", o, i), l;
          try {
            let u = { kind: "itx", ...s };
            l = await n(ms(this, u)), await this._engine.transaction("commit", o, s);
          } catch (u) {
            throw await this._engine.transaction("rollback", o, s).catch(() => {
            }), u;
          }
          return l;
        }
        $transaction(n, i) {
          let o;
          typeof n == "function" ? o = a(() => this._transactionWithCallback({ callback: n, options: i }), "callback") : o = a(() => this._transactionWithArray({ promises: n, options: i }), "callback");
          let s = { name: "transaction", enabled: this._tracingConfig.enabled, attributes: { method: "$transaction" } };
          return me(s, o);
        }
        async _request(n) {
          n.otelParentCtx = Vn.active();
          let i = { args: n.args, dataPath: n.dataPath, runInTransaction: Boolean(n.transaction), action: n.action, model: n.model }, o = { middleware: { name: "middleware", enabled: this._tracingConfig.middleware, attributes: { method: "$use" }, active: false }, operation: { name: "operation", enabled: this._tracingConfig.enabled, attributes: { method: i.action, model: i.model, name: `${i.model}.${i.action}` } } }, s = -1, l = a((u) => {
            let c = this._middlewares.get(++s);
            if (c)
              return me(o.middleware, (m) => c(u, (h) => (m?.end(), l(h))));
            let { runInTransaction: p, ...f } = u, d = { ...n, ...f };
            return p || (d.transaction = void 0), fc(this, d);
          }, "consumer");
          return await me(o.operation, () => new tp.AsyncResource("prisma-client-request").runInAsyncScope(() => l(i)));
        }
        async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: l, model: u, argsMapper: c, transaction: p, unpacker: f, otelParentCtx: d, customDataProxyFetch: m }) {
          try {
            let h = await this._getProtocolEncoder({ clientMethod: i, callsite: s });
            n = c ? c(n) : n;
            let g = { name: "serialize", enabled: this._tracingConfig.enabled }, b;
            u && (b = is(l, u, n, this._rejectOnNotFound), Xh(b, u, l));
            let y = await me(g, () => h.createMessage({ modelName: u, action: l, args: n, clientMethod: i, callsite: s, extensions: this._extensions }));
            return B.enabled("prisma:client") && (Re("Prisma Client call:"), Re(`prisma.${i}(${di({ ast: n, keyPaths: [], valuePaths: [], missingItems: [] })})`), Re("Generated request:"), Re(y.toDebugString() + `
`)), p?.kind === "batch" && await p.lock, this._fetcher.request({ protocolMessage: y, protocolEncoder: h, modelName: u, clientMethod: i, dataPath: o, rejectOnNotFound: b, callsite: s, args: n, extensions: this._extensions, transaction: p, unpacker: f, otelParentCtx: d, otelChildCtx: Vn.active(), customDataProxyFetch: m });
          } catch (h) {
            throw h.clientVersion = this._clientVersion, h;
          }
        }
        get $metrics() {
          if (!this._hasPreviewFlag("metrics"))
            throw new J("`metrics` preview feature must be enabled in order to access metrics API");
          return this._metrics;
        }
        _hasPreviewFlag(n) {
          return !!this._engineConfig.previewFeatures?.includes(n);
        }
      }
      return a(t, "PrismaClient"), t;
    }
    a(ip, "getPrismaClient");
    var ep = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"];
    function ms(e, t) {
      return typeof e != "object" ? e : new Proxy(e, { get: (r, n) => {
        if (!ep.includes(n))
          return n === Hh ? t?.id : typeof r[n] == "function" ? (...i) => n === "then" ? r[n](i[0], i[1], t) : n === "catch" || n === "finally" ? r[n](i[0], t) : ms(r[n](...i), t) : ms(r[n], t);
      }, has(r, n) {
        return ep.includes(n) ? false : Reflect.has(r, n);
      } });
    }
    a(ms, "transactionProxy");
    var zh = { findUnique: "findUniqueOrThrow", findFirst: "findFirstOrThrow" };
    function Xh(e, t, r) {
      if (e) {
        let n = zh[r], i = t ? `prisma.${Te(t)}.${n}` : `prisma.${n}`, o = `rejectOnNotFound.${t ?? ""}.${r}`;
        Go(o, `\`rejectOnNotFound\` option is deprecated and will be removed in Prisma 5. Please use \`${i}\` method instead`);
      }
    }
    a(Xh, "warnAboutRejectOnNotFound");
    var Zh = /* @__PURE__ */ new Set(["toJSON", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
    function op(e) {
      return new Proxy(e, { get(t, r) {
        if (r in t)
          return t[r];
        if (!Zh.has(r))
          throw new TypeError(`Invalid enum value: ${String(r)}`);
      } });
    }
    a(op, "makeStrictEnum");
    var Tt = O(require("fs"));
    var ap = O(require("path"));
    var Ii = require("util");
    var SO = (0, Ii.promisify)(Tt.default.readdir);
    var PO = (0, Ii.promisify)(Tt.default.realpath);
    var _O = (0, Ii.promisify)(Tt.default.stat);
    var ey = Tt.default.readdirSync;
    var ty = Tt.default.realpathSync;
    var ry = Tt.default.statSync;
    function sp(e) {
      return e.isFile() ? "f" : e.isDirectory() ? "d" : e.isSymbolicLink() ? "l" : void 0;
    }
    a(sp, "direntToType");
    function ny(e, t) {
      for (let r of t)
        if (typeof r == "string") {
          if (e.includes(r))
            return true;
        } else if (r.exec(e))
          return true;
      return false;
    }
    a(ny, "isMatched");
    function gs(e, t, r = ["f", "d", "l"], n = [], i = 1 / 0, o = () => true, s = [], l = {}) {
      try {
        let u = ty(e);
        if (l[u] || i - s.length <= 0 || sp(ry(u)) !== "d")
          return s;
        let c = ey(e, { withFileTypes: true });
        l[u] = true;
        for (let p of c) {
          let f = p.name, d = sp(p), m = ap.default.join(e, p.name);
          if (d && r.includes(d) && ny(m, t)) {
            let h = o(e, f, d);
            typeof h == "string" ? s.push(h) : h === true && s.push(m);
          }
          n.includes(d) && gs(m, t, r, n, i, o, s, l);
        }
      } catch {
      }
      return s;
    }
    a(gs, "findSync");
    function lp(e) {
      Vr(e, { conflictCheck: "warn" });
    }
    a(lp, "warnEnvConflicts");
    var iy = up.decompressFromBase64;
  }
});

// node_modules/.prisma/client/index.js
var require_client = __commonJS({
  "node_modules/.prisma/client/index.js"(exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var {
      PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
      PrismaClientUnknownRequestError: PrismaClientUnknownRequestError2,
      PrismaClientRustPanicError: PrismaClientRustPanicError2,
      PrismaClientInitializationError: PrismaClientInitializationError2,
      PrismaClientValidationError: PrismaClientValidationError2,
      NotFoundError: NotFoundError2,
      decompressFromBase64: decompressFromBase642,
      getPrismaClient: getPrismaClient2,
      sqltag: sqltag2,
      empty: empty2,
      join: join2,
      raw: raw2,
      Decimal: Decimal2,
      Debug: Debug2,
      objectEnumValues: objectEnumValues2,
      makeStrictEnum: makeStrictEnum2,
      Extensions: Extensions2,
      findSync: findSync2
    } = require_library();
    var Prisma = {};
    exports2.Prisma = Prisma;
    Prisma.prismaVersion = {
      client: "4.13.0",
      engine: "1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a"
    };
    Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError2;
    Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError2;
    Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError2;
    Prisma.PrismaClientInitializationError = PrismaClientInitializationError2;
    Prisma.PrismaClientValidationError = PrismaClientValidationError2;
    Prisma.NotFoundError = NotFoundError2;
    Prisma.Decimal = Decimal2;
    Prisma.sql = sqltag2;
    Prisma.empty = empty2;
    Prisma.join = join2;
    Prisma.raw = raw2;
    Prisma.validator = () => (val) => val;
    Prisma.DbNull = objectEnumValues2.instances.DbNull;
    Prisma.JsonNull = objectEnumValues2.instances.JsonNull;
    Prisma.AnyNull = objectEnumValues2.instances.AnyNull;
    Prisma.NullTypes = {
      DbNull: objectEnumValues2.classes.DbNull,
      JsonNull: objectEnumValues2.classes.JsonNull,
      AnyNull: objectEnumValues2.classes.AnyNull
    };
    var path = require("path");
    var fs2 = require("fs");
    var hasDirname = typeof __dirname !== "undefined" && __dirname !== "/";
    var regularDirname = hasDirname && fs2.existsSync(path.join(__dirname, "schema.prisma")) && __dirname;
    var foundDirname = !regularDirname && findSync2(process.cwd(), [
      "node_modules\\.prisma\\client",
      ".prisma\\client"
    ], ["d"], ["d"], 1)[0];
    var dirname2 = regularDirname || foundDirname || __dirname;
    exports2.Prisma.AgendamentoScalarFieldEnum = {
      id: "id",
      descricao: "descricao",
      valor: "valor",
      data_do_agendamento: "data_do_agendamento",
      status: "status",
      user_id: "user_id",
      dentista_id: "dentista_id",
      servico_id: "servico_id",
      created_at: "created_at",
      updated_at: "updated_at"
    };
    exports2.Prisma.DentistaScalarFieldEnum = {
      id: "id",
      nome: "nome",
      contato: "contato",
      email: "email",
      data_de_nascimento: "data_de_nascimento",
      status: "status",
      endereco: "endereco",
      password: "password",
      created_at: "created_at",
      updated_at: "updated_at"
    };
    exports2.Prisma.QueryMode = {
      default: "default",
      insensitive: "insensitive"
    };
    exports2.Prisma.RHScalarFieldEnum = {
      id: "id",
      nome: "nome",
      email: "email",
      status: "status",
      contato: "contato",
      enderco: "enderco",
      password: "password",
      created_at: "created_at",
      updated_at: "updated_at"
    };
    exports2.Prisma.SecretariaScalarFieldEnum = {
      id: "id",
      nome: "nome",
      contato: "contato",
      endereco: "endereco",
      password: "password",
      status: "status",
      created_at: "created_at",
      updated_at: "updated_at"
    };
    exports2.Prisma.ServicoScalarFieldEnum = {
      id: "id",
      nome: "nome",
      created_at: "created_at",
      updated_at: "updated_at"
    };
    exports2.Prisma.SortOrder = {
      asc: "asc",
      desc: "desc"
    };
    exports2.Prisma.TransactionIsolationLevel = makeStrictEnum2({
      ReadUncommitted: "ReadUncommitted",
      ReadCommitted: "ReadCommitted",
      RepeatableRead: "RepeatableRead",
      Serializable: "Serializable"
    });
    exports2.Prisma.UserScalarFieldEnum = {
      id: "id",
      nome: "nome",
      contato: "contato",
      email: "email",
      endereco: "endereco",
      password: "password",
      created_at: "created_at",
      updated_at: "updated_at"
    };
    exports2.Prisma.ModelName = {
      RH: "RH",
      User: "User",
      Dentista: "Dentista",
      Secretaria: "Secretaria",
      Servico: "Servico",
      Agendamento: "Agendamento"
    };
    var dmmfString = '{"datamodel":{"enums":[],"models":[{"name":"RH","dbName":"rhs","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"nome","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":true,"isGenerated":false,"isUpdatedAt":false},{"name":"contato","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"enderco","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"password","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},{"name":"User","dbName":"users","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"nome","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"contato","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"endereco","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"password","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"agendamentos","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Agendamento","relationName":"AgendamentoToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},{"name":"Dentista","dbName":"dentistas","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"nome","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"contato","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"data_de_nascimento","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":true,"isGenerated":false,"isUpdatedAt":false},{"name":"endereco","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"password","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"agendamentos","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Agendamento","relationName":"AgendamentoToDentista","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},{"name":"Secretaria","dbName":"secretarias","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"nome","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"contato","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"endereco","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"password","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":true,"isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},{"name":"Servico","dbName":"servicos","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"nome","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"agendamentos","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Agendamento","relationName":"AgendamentoToServico","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},{"name":"Agendamento","dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"descricao","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"valor","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"data_do_agendamento","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"user_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"dentista_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"servico_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","relationName":"AgendamentoToUser","relationFromFields":["user_id"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"dentista","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Dentista","relationName":"AgendamentoToDentista","relationFromFields":["dentista_id"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"servico","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Servico","relationName":"AgendamentoToServico","relationFromFields":["servico_id"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}],"types":[]},"mappings":{"modelOperations":[{"model":"RH","plural":"rHS","findUnique":"findUniqueRH","findUniqueOrThrow":"findUniqueRHOrThrow","findFirst":"findFirstRH","findFirstOrThrow":"findFirstRHOrThrow","findMany":"findManyRH","create":"createOneRH","createMany":"createManyRH","delete":"deleteOneRH","update":"updateOneRH","deleteMany":"deleteManyRH","updateMany":"updateManyRH","upsert":"upsertOneRH","aggregate":"aggregateRH","groupBy":"groupByRH"},{"model":"User","plural":"users","findUnique":"findUniqueUser","findUniqueOrThrow":"findUniqueUserOrThrow","findFirst":"findFirstUser","findFirstOrThrow":"findFirstUserOrThrow","findMany":"findManyUser","create":"createOneUser","createMany":"createManyUser","delete":"deleteOneUser","update":"updateOneUser","deleteMany":"deleteManyUser","updateMany":"updateManyUser","upsert":"upsertOneUser","aggregate":"aggregateUser","groupBy":"groupByUser"},{"model":"Dentista","plural":"dentistas","findUnique":"findUniqueDentista","findUniqueOrThrow":"findUniqueDentistaOrThrow","findFirst":"findFirstDentista","findFirstOrThrow":"findFirstDentistaOrThrow","findMany":"findManyDentista","create":"createOneDentista","createMany":"createManyDentista","delete":"deleteOneDentista","update":"updateOneDentista","deleteMany":"deleteManyDentista","updateMany":"updateManyDentista","upsert":"upsertOneDentista","aggregate":"aggregateDentista","groupBy":"groupByDentista"},{"model":"Secretaria","plural":"secretarias","findUnique":"findUniqueSecretaria","findUniqueOrThrow":"findUniqueSecretariaOrThrow","findFirst":"findFirstSecretaria","findFirstOrThrow":"findFirstSecretariaOrThrow","findMany":"findManySecretaria","create":"createOneSecretaria","createMany":"createManySecretaria","delete":"deleteOneSecretaria","update":"updateOneSecretaria","deleteMany":"deleteManySecretaria","updateMany":"updateManySecretaria","upsert":"upsertOneSecretaria","aggregate":"aggregateSecretaria","groupBy":"groupBySecretaria"},{"model":"Servico","plural":"servicos","findUnique":"findUniqueServico","findUniqueOrThrow":"findUniqueServicoOrThrow","findFirst":"findFirstServico","findFirstOrThrow":"findFirstServicoOrThrow","findMany":"findManyServico","create":"createOneServico","createMany":"createManyServico","delete":"deleteOneServico","update":"updateOneServico","deleteMany":"deleteManyServico","updateMany":"updateManyServico","upsert":"upsertOneServico","aggregate":"aggregateServico","groupBy":"groupByServico"},{"model":"Agendamento","plural":"agendamentos","findUnique":"findUniqueAgendamento","findUniqueOrThrow":"findUniqueAgendamentoOrThrow","findFirst":"findFirstAgendamento","findFirstOrThrow":"findFirstAgendamentoOrThrow","findMany":"findManyAgendamento","create":"createOneAgendamento","createMany":"createManyAgendamento","delete":"deleteOneAgendamento","update":"updateOneAgendamento","deleteMany":"deleteManyAgendamento","updateMany":"updateManyAgendamento","upsert":"upsertOneAgendamento","aggregate":"aggregateAgendamento","groupBy":"groupByAgendamento"}],"otherOperations":{"read":[],"write":["executeRaw","queryRaw"]}}}';
    var dmmf = JSON.parse(dmmfString);
    exports2.Prisma.dmmf = JSON.parse(dmmfString);
    var config = {
      "generator": {
        "name": "client",
        "provider": {
          "fromEnvVar": null,
          "value": "prisma-client-js"
        },
        "output": {
          "value": "C:\\Users\\User\\Desktop\\PROGRAMACAO\\SistemaAgendamento\\backend\\node_modules\\@prisma\\client",
          "fromEnvVar": null
        },
        "config": {
          "engineType": "library"
        },
        "binaryTargets": [],
        "previewFeatures": []
      },
      "relativeEnvPaths": {
        "rootEnvPath": "..\\..\\..\\.env",
        "schemaEnvPath": "..\\..\\..\\.env"
      },
      "relativePath": "..\\..\\..\\prisma",
      "clientVersion": "4.13.0",
      "engineVersion": "1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a",
      "datasourceNames": [
        "db"
      ],
      "activeProvider": "postgresql",
      "dataProxy": false
    };
    config.dirname = dirname2;
    config.document = dmmf;
    var { warnEnvConflicts: warnEnvConflicts2 } = require_library();
    warnEnvConflicts2({
      rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname2, config.relativeEnvPaths.rootEnvPath),
      schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname2, config.relativeEnvPaths.schemaEnvPath)
    });
    var PrismaClient2 = getPrismaClient2(config);
    exports2.PrismaClient = PrismaClient2;
    Object.assign(exports2, Prisma);
    path.join(__dirname, "query_engine-windows.dll.node");
    path.join(process.cwd(), "node_modules\\.prisma\\client\\query_engine-windows.dll.node");
    path.join(__dirname, "schema.prisma");
    path.join(process.cwd(), "node_modules\\.prisma\\client\\schema.prisma");
  }
});

// node_modules/@prisma/client/index.js
var require_client2 = __commonJS({
  "node_modules/@prisma/client/index.js"(exports2, module2) {
    module2.exports = {
      ...require_client()
    };
  }
});

// src/controller/Dentista/createDentistacontroller.ts
var createDentistacontroller_exports = {};
__export(createDentistacontroller_exports, {
  createDentistacontroller: () => createDentistacontroller
});
module.exports = __toCommonJS(createDentistacontroller_exports);

// src/prisma/index.ts
var import_client = __toESM(require_client2());
var prismaClient = new import_client.PrismaClient();
var prisma_default = prismaClient;

// src/services/Dentista/createDentistaService.ts
var import_bcryptjs = require("bcryptjs");
var createDentistaService = class {
  async execute({
    nome,
    contato,
    email,
    data_de_nascimento,
    endereco,
    password
  }) {
    const dentista = await prisma_default.dentista.findFirst({
      where: { email }
    });
    if (dentista) {
      throw new Error("Usu\xE1rio j\xE1 existe");
    }
    const cadastramento = await prisma_default.dentista.create({
      data: {
        nome,
        contato,
        email,
        data_de_nascimento,
        endereco,
        password: await (0, import_bcryptjs.hash)(password, 10)
      },
      select: {
        nome: true,
        contato: true,
        email: true,
        data_de_nascimento: true
      }
    });
    return cadastramento;
  }
};

// src/controller/Dentista/createDentistacontroller.ts
var createDentistacontroller = class {
  async handle(req, res) {
    const {
      nome,
      contato,
      email,
      data_de_nascimento,
      endereco,
      password
    } = req.body;
    const inicializar = new createDentistaService();
    const dentista = await inicializar.execute({
      nome,
      contato,
      email,
      data_de_nascimento,
      endereco,
      password
    });
    return res.json(dentista);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createDentistacontroller
});
/*! Bundled license information:

@prisma/client/runtime/library.js:
  (*!
   *  decimal.js v10.4.3
   *  An arbitrary-precision Decimal type for JavaScript.
   *  https://github.com/MikeMcl/decimal.js
   *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
   *  MIT Licence
   *)
  (*!
   * @description Recursive object extending
   * @author Viacheslav Lotsmanov <lotsmanov89@gmail.com>
   * @license MIT
   *
   * The MIT License (MIT)
   *
   * Copyright (c) 2013-2018 Viacheslav Lotsmanov
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy of
   * this software and associated documentation files (the "Software"), to deal in
   * the Software without restriction, including without limitation the rights to
   * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
   * the Software, and to permit persons to whom the Software is furnished to do so,
   * subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
   * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
   * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
   * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
   * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   *)
*/
