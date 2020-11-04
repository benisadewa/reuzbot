exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `☣️ -----[ *MENU ${BotName}* ]----- ☣️
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Berikut adalah info pada bot ini!✨

🔱 *${tampilTanggal}*
🔱 *${tampilWaktu}*

♻ INFO BOT! :
   
☢ *GITHUB*: https://github.com/benisadewa/reuzbot
☢ *AUTHOR*: REUZ
☢ *DESIGNER*: REUZ
☢ *YOUTUBE*: REUZ
☢ *SCRIPT ORIGINAL BY*: ABDUL MUTTAQIN / FDCIABDUL

♻ INFO LAIN! :

OH IYA SCRIPT INI 100% GRATIS KOK.
SCRIPT DIBUAT DENGAN BAHASA PEMROGRAMAN NODE.JS
UPDATE BOT TERBARU DI YOUTUBE REUZ

♻️ JANGAN  LUPA DONASI AGAR BOT AKTIF TERUS!
♻️ MAU DONASI? SILAHKAN KETIK #donate

📺 *Iklan* : *ROSUGO ESPORT*

✅ Follow akun instagram admin ${instagramlu}

🔱 INFORMASI COVID-19 TERBARU!

🔱 POSITIF: *${corohelp.confirmed.value}*
🔱 SEMBUH: *${corohelp.recovered.value}*
🔱 MENINGGAL: *${corohelp.deaths.value}*
🔱 UPDATE: *${corohelp.lastUpdate}*

♻️ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_

♻️ Mau pasang iklan di *${BotName} ?*
☎️ WA : *${whatsapplu}*
  
🔱 Gunakan dengan bijak ‼️
🔱 Bot ini berjalan ${kapanbotaktif} ‼️

💢 Official Grub : ${grupch1}



  
☣️ -----[ *POWERED BY ${BotName}* ]----- ☣️`
}
