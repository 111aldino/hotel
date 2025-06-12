Saya menemukan 2 error apostrophe di file `checkout-detail.tsx` pada **baris 14**:

## Error yang ditemukan:

**Baris 14:**
```jsx
<p className="text-gray-600 mt-2">The reservation you're looking for doesn't exist.</p>
```

Ada 2 apostrophe yang tidak di-escape:
1. `you're` 
2. `doesn't`

## Perbaikan:

Ganti baris 14 dari:
```jsx
<p className="text-gray-600 mt-2">The reservation you're looking for doesn't exist.</p>
```

Menjadi:
```jsx
<p className="text-gray-600 mt-2">The reservation you&apos;re looking for doesn&apos;t exist.</p>
```

## Atau alternatif lain:

Anda bisa menggunakan escape character lainnya:
```jsx
<p className="text-gray-600 mt-2">The reservation you&#39;re looking for doesn&#39;t exist.</p>
```

Setelah memperbaiki ini, Anda masih perlu memperbaiki 1 file terakhir:
- `./components/reserve-form.tsx` (baris 17 - error TypeScript `any`)

Bisa share file `reserve-form.tsx` juga?