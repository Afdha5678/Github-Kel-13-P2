import fs from 'fs';

const API_URL = 'https://backend-production-42ba.up.railway.app/api';
let token = '';

async function main() {
    console.log('1. Login ke Railway...');
    const loginRes = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'owner@apotek.com', password: 'owner123' })
    });
    const loginData = await loginRes.json();
    token = loginData.data.token;

    console.log('2. Fetching Obat & Supplier...');
    const obatRes = await fetch(`${API_URL}/obat`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    const obatData = await obatRes.json();
    const obats = obatData.data;

    const supRes = await fetch(`${API_URL}/supplier`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    const supData = await supRes.json();
    const suppliers = supData.data.map((s: any) => s.id);

    if (obats.length === 0 || suppliers.length === 0) {
        console.log('Obat atau supplier kosong!');
        return;
    }

    console.log('3. Menambahkan 30 Transaksi Pembelian (PO) Tambahan ke Railway...');
    for (let i = 0; i < 30; i++) {
        const randomSup = suppliers[Math.floor(Math.random() * suppliers.length)];
        const numItems = 2 + Math.floor(Math.random() * 3);
        const details = [];
        for (let j = 0; j < numItems; j++) {
            details.push({
                obatId: obats[Math.floor(Math.random() * obats.length)].id,
                quantityOrdered: 50 + Math.floor(Math.random() * 50)
            });
        }

        const poRes = await fetch(`${API_URL}/pembelian`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                supplierId: randomSup,
                details: details
            })
        });
        const poData = await poRes.json();
        
        if (poData.success && poData.data?.id) {
            const receiveDetails = poData.data.details.map((d: any) => {
                const expiry = new Date();
                expiry.setFullYear(expiry.getFullYear() + 2);
                return {
                    detailId: d.id,
                    quantityReceived: d.quantityOrdered,
                    tanggalKedaluwarsa: expiry.toISOString()
                };
            });

            await fetch(`${API_URL}/pembelian/${poData.data.id}/receive`, {
                method: 'PUT',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ details: receiveDetails })
            });
        }
    }
    console.log('Berhasil menambah 30 Pembelian.');

    console.log('4. Menambahkan 80 Transaksi Penjualan Tambahan ke Railway...');
    for (let i = 0; i < 80; i++) {
        const numItems = 1 + Math.floor(Math.random() * 3);
        const details = [];
        let total = 0;
        
        for (let j = 0; j < numItems; j++) {
            const obat = obats[Math.floor(Math.random() * obats.length)];
            const qty = 1 + Math.floor(Math.random() * 5);
            details.push({
                obatId: obat.id,
                quantity: qty,
                harga: obat.hargaJual
            });
            total += (qty * obat.hargaJual);
        }

        await fetch(`${API_URL}/penjualan`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                total: total,
                details: details
            })
        });
    }
    console.log('Berhasil menambah 80 Penjualan.');
    console.log('Selesai membanjiri Railway!');
}

main().catch(console.error);
