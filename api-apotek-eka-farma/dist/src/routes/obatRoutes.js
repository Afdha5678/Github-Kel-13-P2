"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const obatController = __importStar(require("../controllers/obatController"));
const authMiddleware_1 = require("../middlewares/authMiddleware");
const formRequest_1 = require("../middlewares/formRequest");
const StoreObatRequest_1 = require("../requests/obat/StoreObatRequest");
const UpdateObatRequest_1 = require("../requests/obat/UpdateObatRequest");
const uploadMiddleware_1 = require("../middlewares/uploadMiddleware");
const router = (0, express_1.Router)();
router.post('/', authMiddleware_1.authenticateToken, uploadMiddleware_1.upload.single('image'), (0, formRequest_1.formRequest)(StoreObatRequest_1.StoreObatRequest), obatController.createObat);
router.get('/', authMiddleware_1.authenticateToken, obatController.getAllObat);
router.get('/kedaluwarsa', authMiddleware_1.authenticateToken, obatController.checkObatKedaluwarsa);
router.get('/:id', authMiddleware_1.authenticateToken, obatController.getObatById);
router.put('/:id', authMiddleware_1.authenticateToken, uploadMiddleware_1.upload.single('image'), (0, formRequest_1.formRequest)(UpdateObatRequest_1.UpdateObatRequest), obatController.updateObat);
router.delete('/:id', authMiddleware_1.authenticateToken, obatController.deleteObat);
exports.default = router;
