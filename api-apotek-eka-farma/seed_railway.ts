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

    console.log('2. Menambahkan 30 Supplier...');
    const supplierIds: string[] = [];
    for (let i = 1; i <= 30; i++) {
        const supRes = await fetch(`${API_URL}/supplier`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                nama: `PT. Suplier Railway ${i} ${Math.floor(Math.random() * 1000)}`,
                alamat: `Jl. Jendral Sudirman No. ${i}`,
                telepon: `0812${Math.floor(10000000 + Math.random() * 90000000)}`
            })
        });
        const supData = await supRes.json();
        if (supData.success && supData.data?.id) {
            supplierIds.push(supData.data.id);
        }
    }
    console.log(`Berhasil menambah ${supplierIds.length} supplier.`);

    console.log('3. Fetching Obat...');
    const obatRes = await fetch(`${API_URL}/obat`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    const obatData = await obatRes.json();
    const obats = obatData.data;

    if (obats.length === 0 || supplierIds.length === 0) {
        console.log('Obat atau supplier kosong!');
        return;
    }

    console.log('4. Menambahkan 20 Transaksi Pembelian (PO) & Receive...');
    for (let i = 0; i < 20; i++) {
        const randomSup = supplierIds[Math.floor(Math.random() * supplierIds.length)];
        
        // Pilih 2-4 obat random
        const numItems = 2 + Math.floor(Math.random() * 3);
        const details = [];
        for (let j = 0; j < numItems; j++) {
            details.push({
                obatId: obats[Math.floor(Math.random() * obats.length)].id,
                quantityOrdered: 50 + Math.floor(Math.random() * 50)
            });
        }

        // Create PO
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
            // Receive PO to add stock
            const receiveDetails = poData.data.details.map((d: any) => {
                const expiry = new Date();
                expiry.setFullYear(expiry.getFullYear() + 2); // 2 years expiry
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
    console.log('Berhasil menambah 20 Pembelian & menyetok obat.');

    console.log('5. Menambahkan 20 Transaksi Penjualan...');
    for (let i = 0; i < 20; i++) {
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
    console.log('Berhasil menambah 20 Penjualan.');
    console.log('Selesai!');
}

main().catch(console.error);
