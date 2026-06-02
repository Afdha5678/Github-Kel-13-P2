import fs from 'fs';
import path from 'path';

const API_URL = 'https://backend-production-42ba.up.railway.app/api';
let token = '';

async function main() {
    console.log('1. Login...');
    const loginRes = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'owner@apotek.com', password: 'owner123' })
    });
    const loginData = await loginRes.json();
    token = loginData.data.token;

    console.log('2. Fetching obats...');
    const obatRes = await fetch(`${API_URL}/obat`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    const obatData = await obatRes.json();
    const obats = obatData.data;

    const imageUrls = [
        'https://images.unsplash.com/photo-1584308666744-24d5c474f2ad?w=500&q=80',
        'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=500&q=80',
        'https://images.unsplash.com/photo-1550572017-edb947c0b024?w=500&q=80',
        'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=500&q=80'
    ];

    for (let i = 0; i < obats.length; i++) {
        const obat = obats[i];
        console.log(`3. Uploading image for ${obat.nama}...`);
        
        try {
            // Download image
            const imgRes = await fetch(imageUrls[i % imageUrls.length]);
            const arrayBuffer = await imgRes.arrayBuffer();
            const blob = new Blob([arrayBuffer], { type: 'image/jpeg' });
            
            const form = new FormData();
            form.append('image', blob, 'obat.jpg');

            const updateRes = await fetch(`${API_URL}/obat/${obat.id}`, {
                method: 'PUT',
                headers: { Authorization: `Bearer ${token}` },
                body: form
            });
            const updateData = await updateRes.json();
            console.log(`Update success: ${updateData.data?.image}`);
        } catch (e: any) {
            console.log(`Failed for ${obat.nama}: ${e.message}`);
        }
    }
    console.log('Selesai!');
}

main().catch(console.error);
