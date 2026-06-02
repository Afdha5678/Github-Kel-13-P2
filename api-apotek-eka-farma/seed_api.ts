import fs from 'fs';

const API_URL = 'https://backend-production-42ba.up.railway.app/api';
let token = '';

async function fetchApi(path: string, options: RequestInit = {}) {
    const headers: any = options.headers || {};
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    
    // Default to JSON if not FormData
    if (options.body && !(options.body instanceof FormData)) {
        headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(options.body);
    }
    
    const res = await fetch(`${API_URL}${path}`, { ...options, headers });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Request failed');
    return data;
}

async function downloadDummyImage() {
    const res = await fetch('https://images.unsplash.com/photo-1584308666744-24d5c474f2ad?w=500&q=80');
    const buffer = await res.arrayBuffer();
    fs.writeFileSync('dummy.jpg', Buffer.from(buffer));
}

async function main() {
    console.log('1. Mendownload dummy image...');
    await downloadDummyImage();

    console.log('2. Login ke production...');
    const loginRes = await fetchApi('/auth/login', {
        method: 'POST',
        body: { email: 'owner@apotek.com', password: 'owner123' } as any
    });
    token = loginRes.data.token;
    console.log('Login sukses.');

    console.log('3. Membuat 5 Supplier...');
    const supplierNames = [
        { nama: 'PT. Kimia Farma', alamat: 'Jl. Veteran No 1, Jakarta', telepon: '081234567890' },
        { nama: 'PT. Kalbe Farma', alamat: 'Jl. Letjen Suprapto, Jakarta', telepon: '081234567891' },
        { nama: 'PT. Sanbe Farma', alamat: 'Jl. Pasteur No 23, Bandung', telepon: '081234567892' },
        { nama: 'PT. Dexa Medica', alamat: 'Jl. Rungkut Industri, Surabaya', telepon: '081234567893' },
        { nama: 'PT. Phapros', alamat: 'Jl. Simongan, Semarang', telepon: '081234567894' }
    ];
    
    const createdSuppliers = [];
    for (const sup of supplierNames) {
        const data = await fetchApi('/supplier', { method: 'POST', body: sup as any });
        createdSuppliers.push(data.data);
    }
    console.log(`Berhasil membuat ${createdSuppliers.length} supplier.`);

    console.log('4. Membuat 20 Obat...');
    const obatData = [
        { nama: 'Paracetamol 500mg', hargaJual: 5000, satuan: 'Strip', lokasiRak: 'A1' },
        { nama: 'Amoxicillin 500mg', hargaJual: 7500, satuan: 'Strip', lokasiRak: 'A2' },
        { nama: 'Sanmol Syrup 60ml', hargaJual: 15000, satuan: 'Botol', lokasiRak: 'B1' },
        { nama: 'Mylanta Syrup 150ml', hargaJual: 45000, satuan: 'Botol', lokasiRak: 'B2' },
        { nama: 'Vitamin C IPI', hargaJual: 6000, satuan: 'Botol', lokasiRak: 'C1' },
        { nama: 'Tolak Angin Cair', hargaJual: 3500, satuan: 'Sachet', lokasiRak: 'C2' },
        { nama: 'Antangin JRG', hargaJual: 3500, satuan: 'Sachet', lokasiRak: 'C3' },
        { nama: 'Promag Tablet', hargaJual: 8000, satuan: 'Strip', lokasiRak: 'A3' },
        { nama: 'Panadol Extra', hargaJual: 12000, satuan: 'Strip', lokasiRak: 'A4' },
        { nama: 'Betadine 15ml', hargaJual: 15000, satuan: 'Botol', lokasiRak: 'D1' },
        { nama: 'Oskadon', hargaJual: 4000, satuan: 'Strip', lokasiRak: 'A5' },
        { nama: 'Decolgen', hargaJual: 3000, satuan: 'Strip', lokasiRak: 'A6' },
        { nama: 'Bodrexin Syrup', hargaJual: 12000, satuan: 'Botol', lokasiRak: 'B3' },
        { nama: 'OBH Combi Plus 60ml', hargaJual: 18000, satuan: 'Botol', lokasiRak: 'B4' },
        { nama: 'Woods Peppermint', hargaJual: 25000, satuan: 'Botol', lokasiRak: 'B5' },
        { nama: 'Insto Reguler 7.5ml', hargaJual: 14000, satuan: 'Botol', lokasiRak: 'D2' },
        { nama: 'Rohto Cool 7ml', hargaJual: 16000, satuan: 'Botol', lokasiRak: 'D3' },
        { nama: 'Hansaplast Plester', hargaJual: 5000, satuan: 'Pack', lokasiRak: 'E1' },
        { nama: 'Minyak Kayu Putih 60ml', hargaJual: 22000, satuan: 'Botol', lokasiRak: 'E2' },
        { nama: 'Minyak Telon 60ml', hargaJual: 20000, satuan: 'Botol', lokasiRak: 'E3' }
    ];

    const createdObats = [];
    const imageBlob = new Blob([fs.readFileSync('dummy.jpg')], { type: 'image/jpeg' });
    for (const data of obatData) {
        const formData = new FormData();
        formData.append('nama', data.nama);
        formData.append('hargaJual', data.hargaJual.toString());
        formData.append('satuan', data.satuan);
        formData.append('lokasiRak', data.lokasiRak);
        formData.append('image', imageBlob, 'dummy.jpg');

        try {
            const res = await fetchApi('/obat', {
                method: 'POST',
                body: formData
            });
            createdObats.push(res.data);
            console.log(`Created obat: ${data.nama}`);
        } catch (err: any) {
            console.error(`Gagal obat ${data.nama}:`, err.message);
        }
    }
    
    // Cleanup
    if (fs.existsSync('dummy.jpg')) {
        fs.unlinkSync('dummy.jpg');
    }

    console.log('5. Membuat Pembelian (PO) dan Receive (Masuk Gudang)...');
    for (let i = 0; i < 5; i++) {
        // Create PO
        const pRes = await fetchApi('/pembelian', {
            method: 'POST',
            body: {
                supplierId: createdSuppliers[i].id,
                details: [
                    { obatId: createdObats[i * 4].id, quantityOrdered: 50 },
                    { obatId: createdObats[i * 4 + 1].id, quantityOrdered: 50 }
                ]
            } as any
        });
        const pembelian = pRes.data;
        
        // Receive PO
        const pGetRes = await fetchApi(`/pembelian/${pembelian.id}`);
        const pembelianFull = pGetRes.data;
        const receiveDetails = pembelianFull.details.map((d: any) => ({
            detailId: d.id,
            quantityReceived: 50,
            tanggalKedaluwarsa: new Date(new Date().setFullYear(new Date().getFullYear() + 2)).toISOString()
        }));
        
        await fetchApi(`/pembelian/${pembelian.id}/receive`, {
            method: 'POST',
            body: { details: receiveDetails } as any
        });
        console.log(`Completed Pembelian ${pembelian.id}`);
    }

    console.log('6. Membuat Penjualan...');
    for (let i = 0; i < 5; i++) {
        const obat1 = createdObats[i * 2];
        const obat2 = createdObats[i * 2 + 1];
        const qty1 = 2;
        const qty2 = 1;
        const total = obat1.hargaJual * qty1 + obat2.hargaJual * qty2;

        await fetchApi('/penjualan', {
            method: 'POST',
            body: {
                total: total,
                details: [
                    { obatId: obat1.id, quantity: qty1, harga: obat1.hargaJual },
                    { obatId: obat2.id, quantity: qty2, harga: obat2.hargaJual }
                ]
            } as any
        });
        console.log(`Created Penjualan ${i+1}`);
    }

    console.log('✅ Semua data berhasil diinput ke server production!');
}

main().catch(console.error);
