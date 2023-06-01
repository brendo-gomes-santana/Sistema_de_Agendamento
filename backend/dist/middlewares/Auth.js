"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/middlewares/Auth.ts
var Auth_exports = {};
__export(Auth_exports, {
  Auth: () => Auth
});
module.exports = __toCommonJS(Auth_exports);
var import_jsonwebtoken = require("jsonwebtoken");
function Auth(req, res, next) {
  const authToken = req.headers.authorization;
  if (!authToken) {
    return res.status(401).json({ error: "Informe o token" });
  }
  const [_, token] = authToken.split(" ");
  try {
    const { sub } = (0, import_jsonwebtoken.verify)(token, "40ea851007f3f2bcdc26c64b206919fe");
    req.valicao_id = sub;
    return next();
  } catch (err) {
    return res.status(401).end();
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Auth
});
