# XCLONE - React Native X (Twitter) Klonu 🚀

Bu proje, X (eski adıyla Twitter) uygulamasının React Native (mobil) ve Node.js/Express (backend) kullanılarak geliştirilmiş tam yığın (full-stack) bir klonudur.

Proje, hem Android hem de iOS platformlarında çalışacak şekilde tasarlanmıştır ve kimlik doğrulama, bulut tabanlı veritabanı entegrasyonu ve medya yükleme gibi modern uygulama özelliklerini içerir.

📱 Özellikler
🔐 Kimlik Doğrulama: Clerk aracılığıyla Google / Apple ID desteği ile tam kimlik doğrulama.

🏠 Ana Akış: Metin ve görsel (galeriden veya kameradan) gönderileri paylaşma.

❤️ Etkileşimler: Gönderiler için beğeni ve yorum sistemi.

🔔 Bildirimler: Yeni beğeniler ve yorumlar için bildirim sekmesi.

📬 Mesajlaşma: Sohbet geçmişi ve mesaj silme özelliklerine sahip özel mesajlaşma.

👤 Kullanıcı Profili: Düzenlenebilir kullanıcı profili sayfası.

🔎 Arama: Trend içerikleri keşfetmek için arama sekmesi.

🚪 Çıkış Yap: Güvenli oturum sonlandırma.

🛠️ Kullanılan Teknolojiler
Bu proje, modern ve ölçeklenebilir teknolojiler kullanılarak oluşturulmuştur.

Backend (API)
Node.js / Express.js: REST API oluşturmak için kullanıldı.

MongoDB: Ana veritabanı olarak kullanıldı.

Clerk: Sunucu tarafında güçlü kimlik doğrulama yönetimi için.

Cloudinary: Görsel yükleme ve medya servisi için.

Arcjet: Güvenlik, rate-limiting (hız sınırı) ve bot tespiti için.

Frontend (Mobile)
React Native (Expo): Çapraz platform (iOS & Android) mobil uygulama geliştirmesi.

Clerk: İstemci tarafında kimlik doğrulama akışları için.

🚀 Kurulum ve Çalıştırma
Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin.

1. Projeyi Klonlayın
Bash

git clone (https://github.com/alican41/XCLONE)

cd xclone
2. Backend Kurulumu
Backend API'sini kurmak ve çalıştırmak için:

Bash

# Backend dizinine gidin
cd backend

# Bağımlılıkları yükleyin
npm install

# .env dosyasını oluşturun (aşağıdaki şablonu kullanın)
touch .env

# Sunucuyu geliştirme modunda başlatın
npm run dev
3. Mobil (Frontend) Kurulumu
Mobil uygulamayı kurmak ve çalıştırmak için (ana dizinden):

Bash

# Mobil dizinine gidin
cd mobile

# Bağımlılıkları yükleyin
npm install

# .env dosyasını oluşturun (aşağıdaki şablonu kullanın)
touch .env

# Expo sunucusunu başlatın
npx expo start
⚙️ Ortam Değişkenleri (.env)
Projenin düzgün çalışması için backend ve mobile klasörlerinin kök dizinlerinde .env dosyaları oluşturulmalı ve ilgili servislerden alınan API anahtarları girilmelidir.

📁 backend/.env
Kod snippet'i

PORT=5001
NODE_ENV=development

CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
CLERK_SECRET_KEY=<your_clerk_secret_key>

MONGO_URI=<your_mongodb_connection_uri>

ARCJET_ENV=development
ARCJET_KEY=<your_arcjet_api_key>

CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
📁 mobile/.env
Kod snippet'i

EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
EXPO_PUBLIC_API_URL=<your_backend_api_url>
Not: EXPO_PUBLIC_API_URL için, yerel geliştirme yapıyorsanız (örneğin http://localhost:5001) veya backend'i deploy ettiyseniz o adresi girmelisiniz.
