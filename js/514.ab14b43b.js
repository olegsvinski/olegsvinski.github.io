"use strict";
(globalThis["webpackChunkplanner_project"] = globalThis["webpackChunkplanner_project"] || []).push([
  [514],
  {
    514: (e, a, s) => {
      s.r(a), s.d(a, { default: () => v });
      var p = s(9835);
      const o = { class: "row" },
        n = { class: "col phase" },
        c = { class: "col phase" },
        l = { class: "row" },
        t = { class: "col phase" },
        r = { class: "col phase" };
      function i(e, a, s, i, d, h) {
        const u = (0, p.up)("app-phase"),
          v = (0, p.up)("app-editor"),
          m = (0, p.up)("app-finish-popup");
        return (
          (0, p.wg)(),
          (0, p.iD)(
            p.HY,
            null,
            [
              (0, p._)("div", null, [
                (0, p._)("div", o, [
                  (0, p._)("div", n, [(0, p.Wm)(u, { "phase-name": "work" })]),
                  (0, p._)("div", c, [(0, p.Wm)(u, { "phase-name": "service" })]),
                ]),
                (0, p._)("div", l, [
                  (0, p._)("div", t, [(0, p.Wm)(u, { "phase-name": "planning" })]),
                  (0, p._)("div", r, [(0, p.Wm)(u, { "phase-name": "emotions" })]),
                ]),
              ]),
              e.$root.editor.opened ? ((0, p.wg)(), (0, p.j4)(v, { key: 0 })) : (0, p.kq)("", !0),
              (0, p.Wm)(m),
            ],
            64
          )
        );
      }
      const d = {
        data() {
          return { test: "test1" };
        },
        created() {
          console.log("v 0.0.3");
        },
        computed: {},
      };
      var h = s(1639);
      const u = (0, h.Z)(d, [
          ["render", i],
          ["__scopeId", "data-v-931758a8"],
        ]),
        v = u;
    },
  },
]);
