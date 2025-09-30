# Machine-Learning-Kelompok-2

Tugas Project Machine Learning Minggu ke-2  
Proyek ini terdiri dari **2 bagian utama**:
- **Backend**: FastAPI (Python)
- **Frontend**: React + JavaScript + SWC

Terdapat 3 branch pada repository ini:
- `main` → Branch utama (penggabungan)
- `backend` → Kode backend (FastAPI)
- `frontend` → Kode frontend (React + SWC)


---

##  Backend (FastAPI)

### 1. Instalasi Dokcer Desktop
Pastikan device anda sudah menginstall Docker Desktop, 
jika belum silahkan install di :
https://www.docker.com/products/docker-desktop/

### 2. Instalasi Dependensi
Pastikan anda sudah pull / download repository berikut,
Masuk ke folder dimana repositori berada lalu buka dengan terminal
Masuk ke folder `backend`:
` ``bash
cd backend`` `
### 3. Build and Run Container Docker
Lakukan perintah berikut :
` ``bash
docker build -t fitness-lv .`` 
docker run -d -p 8000:8000 fitness-lv`

##  Frontend (React + SWC)

### 1. Instalasi npm 
Pastikan device anda sudah mendownload npm 
Jika belum silahkan install di :
https://nodejs.org/en/download 

### 2. Instalasi Dependensi
Pastikan anda sudah pull / download repository berikut,
Masuk ke folder dimana repositori berada lalu buka dengan terminal
Masuk ke folder `frontend`:
` ``bash
cd frontend`` `

### 3. Run frontend in local 
` ``bash
npm run dev.`` 
