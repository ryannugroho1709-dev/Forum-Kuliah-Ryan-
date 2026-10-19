@echo off
REM Membangun ulang folder dist lalu mengunggahnya ke Cloudflare Pages (proyek: forum-kuliah-uq).
REM Pertama kali: Cloudflare akan meminta login di browser -> klik Allow.
cd /d "%~dp0.."
node tools\build-dist.js || goto :err
npx --yes wrangler pages deploy dist --project-name forum-kuliah-uq --branch main || goto :err
echo.
echo Website berhasil diterbitkan.
pause
exit /b 0
:err
echo Terjadi kesalahan. Periksa pesan di atas.
pause
exit /b 1
