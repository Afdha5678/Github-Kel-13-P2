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
exports.deleteSupplier = exports.updateSupplier = exports.getSupplierById = exports.getAllSupplier = exports.createSupplier = void 0;
const supplierService = __importStar(require("../services/supplierService"));
const createSupplier = async (req, res) => {
    try {
        const newSupplier = await supplierService.createSupplierService(req.body);
        res.status(201).json({ success: true, message: 'Supplier berhasil ditambahkan', data: newSupplier });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Gagal menambah supplier', error: error instanceof Error ? error.message : 'Unknown Error' });
    }
};
exports.createSupplier = createSupplier;
const getAllSupplier = async (req, res) => {
    try {
        const search = req.query.search;
        const suppliers = await supplierService.getAllSupplierService(search);
        res.status(200).json({ success: true, message: 'Berhasil mengambil daftar supplier', data: suppliers });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Gagal mengambil data supplier', error: error instanceof Error ? error.message : 'Unknown Error' });
    }
};
exports.getAllSupplier = getAllSupplier;
const getSupplierById = async (req, res) => {
    try {
        const id = req.params.id;
        const supplier = await supplierService.getSupplierByIdService(id);
        res.status(200).json({ success: true, message: 'Data supplier ditemukan', data: supplier });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown Error';
        const statusCode = errorMessage.includes('tidak ditemukan') ? 404 : 500;
        res.status(statusCode).json({ success: false, message: errorMessage });
    }
};
exports.getSupplierById = getSupplierById;
const updateSupplier = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedSupplier = await supplierService.updateSupplierService(id, req.body);
        res.status(200).json({ success: true, message: 'Data supplier berhasil diperbarui', data: updatedSupplier });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Gagal memperbarui data supplier', error: error instanceof Error ? error.message : 'Unknown Error' });
    }
};
exports.updateSupplier = updateSupplier;
const deleteSupplier = async (req, res) => {
    try {
        const id = req.params.id;
        await supplierService.deleteSupplierService(id);
        res.status(200).json({ success: true, message: 'Data supplier berhasil dihapus' });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Gagal menghapus data supplier', error: error instanceof Error ? error.message : 'Unknown Error' });
    }
};
exports.deleteSupplier = deleteSupplier;
