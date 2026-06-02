import fs from 'fs';

const API_URL = 'https://backend-production-42ba.up.railway.app/api';
let token = '';

async function fetchApi(path: string, options: RequestInit = {}) {
    const headers: any = options.headers || {};
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    
    if (options.body && !(options.body instanceof FormData)) {
        headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(options.body);
    }
    
    const res = await fetch(`${API_URL}${path}`, { ...options, headers });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Request failed');
    return data;
}

async function main() {
    console.log('1. Login ke production...');
    const loginRes = await fetchApi('/auth/login', {
        method: 'POST',
        body: { email: 'owner@apotek.com', password: 'owner123' } as any
    });
    token = loginRes.data.token;
    console.log('Login sukses.');

    console.log('2. Update Obat Images...');
    // We fetch all obat and update their images to Unsplash URLs using PUT /obat/:id
    const obatRes = await fetchApi('/obat');
    const obats = obatRes.data;

    const imageUrls = [
        'https://images.unsplash.com/photo-1584308666744-24d5c474f2ad?w=500&q=80',
        'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=500&q=80'
    ];

    for (let i = 0; i < obats.length; i++) {
        const obat = obats[i];
        if (obat.image && obat.image.startsWith('/uploads')) {
            const externalImageUrl = imageUrls[i % imageUrls.length];
            try {
                await fetchApi(`/obat/${obat.id}`, {
                    method: 'PUT',
                    body: {
                        nama: obat.nama,
                        hargaJual: obat.hargaJual,
                        satuan: obat.satuan,
                        lokasiRak: obat.lokasiRak,
                        image: externalImageUrl
                    } as any
                });
                console.log(`Updated image untuk ${obat.nama}`);
            } catch (err: any) {
                console.error(`Gagal update image ${obat.nama}:`, err.message);
            }
        }
    }

    console.log('✅ Semua gambar obat telah diperbarui menggunakan URL eksternal!');
}

main().catch(console.error);
