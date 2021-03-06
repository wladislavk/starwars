"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mainController_1 = __importDefault(require("../controllers/mainController"));
const router = express_1.default.Router();
router.get("/people/:id", mainController_1.default.show);
router.get('*', function (req, res) {
    res.status(404).json({ "message": "No route matched" });
});
exports.default = router;
//# sourceMappingURL=main.js.map