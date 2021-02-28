
const help = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku) => { 
	return `
◪ *INFO DEVELOPER*
  ❏ Nama: PUTRA ELF NARNIA
  ❏ Wa: wa.me/6281253534285
  ❏ Ig: https://instagram.com/putraenzet
  ❏ Fb: https://facebook.com/putraelf
  ----------------------------------
◪ *INFO ENZETBOT*
  ❏ Nama: ENZETBOT 
  ❏ Nomor: wa.me/994408987084
  ❏ Fb: https://facebook.com/putraelf
  ----------------------------------
◪ *YOUR INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Nama: ${pushname}
  ❏ Uang mu : Rp${uangku}
  ❏ Nomer: ${sender.split("@")[0]}
  ❏ XP: ${getLevelingXp(sender)}/${reqXp}
  ❏ Pangkat : ${role}
  ❏ Level: ${getLevelingLevel(sender)}
  ❏ User register : ${_registered.length}
            *Rules* - *Simple*
▬▭▬▭▬▭▬▭▬▭▬▭▬
  ❏ *Spam : Auto Block!*
  ❏ *Beri Jeda 10detik Saat Menggunakannya!!*
  ❏ *Bug/Error Harap Cht Owner!*
  ❏ *Untuk Memastikan Bot Off Atau On*
  ❏ *Ketik ${prefix}bot*
  ❏ *Untuk Melihat Sisa Limit Kamu*
  ❏ *Ketik ${prefix}limit*
  ❏ *Harap Sabar Dengan Bug²nya!*
  ❏ *Gunakan Bot Sebaik-baiknya!*
▬▭▬▭▬▭▬▭▬▭▬▭▬
◪ *ABOUT*
═══════════════════════════
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}snk
  ├─ ❏ ${prefix}lpr 
  ├─ ❏ ${prefix}del [premium]
  ├─ ❏ ${prefix}request
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}ping
  ├─ ❏ ${prefix}buypremium
  ├─ ❏ ${prefix}hargaprem
  ├─ ❏ ${prefix}gcainebot
  ├─ ❏ ${prefix}menupict
  └─ ❏ ${prefix}menuowner
◪ *MAKER*
  │
  ├─ ❏ ${prefix}nulis
  ├─ ❏ ${prefix}sticker
  ├─ ❏ ${prefix}stickergif
  ├─ ❏ ${prefix}toimg
  ├─ ❏ ${prefix}tomp3 [premium]
  ├─ ❏ ${prefix}quotemaker
  ├─ ❏ ${prefix}hartatata ❌
  ├─ ❏ ${prefix}imgmaker ❌
  └─ ❏ ${prefix}calendermaker ❌
◪ *MEDIA*
═══════════════════════════
  │
  ├─ ❏ ${prefix}tribunews ❌
  ├─ ❏ ${prefix}beritahoax ❌
  └─ ❏ ${prefix}trendtwit ❌
◪ *OTHER FITUR*
  │
  ├─ ❏ ${prefix}ssweb
  ├─ ❏ ${prefix}hilih [teks]
  ├─ ❏ ${prefix}alay [teks] ❌
  ├─ ❏ ${prefix}say [teks]
  ├─ ❏ ${prefix}wiki [teks]
  ├─ ❏ ${prefix}kbbi [teks]
  ├─ ❏ ${prefix}map [teks]
  ├─ ❏ ${prefix}kalkulator
  ├─ ❏ ${prefix}fml ❌
  ├─ ❏ ${prefix}lirik [teks]
  ├─ ❏ ${prefix}brainly [teks]
  ├─ ❏ ${prefix}bitly 
  ├─ ❏ ${prefix}chord [teks]
  ├─ ❏ ${prefix}katacinta ❌
  ├─ ❏ ${prefix}katabijak
  ├─ ❏ ${prefix}resepmakanan
  ├─ ❏ ${prefix}sms
  ├─ ❏ ${prefix}findnabi
  ├─ ❏ ${prefix}faktaunik 
  ├─ ❏ ${prefix}translate [lang|text]
  ├─ ❏ ${prefix}pantun ❌
  └─ ❏ ${prefix}artinama [teks]
◪ *KERANG AJAIB*
  │
  ├─ ❏ ${prefix}gantengcek
  ├─ ❏ ${prefix}cantikcek
  ├─ ❏ ${prefix}sangecek
  ├─ ❏ ${prefix}gaycek
  ├─ ❏ ${prefix}lesbicek
  ├─ ❏ ${prefix}watak
  ├─ ❏ ${prefix}hobby
  ├─ ❏ ${prefix}apakah
  ├─ ❏ ${prefix}kapankah
  ├─ ❏ ${prefix}bisakah
  ├─ ❏ ${prefix}bagaimanakah
  └─ ❏ ${prefix}rate
◪ *DOWNLOADER*
  │
  ├─ ❏ ${prefix}1cak
  ├─ ❏ ${prefix}pinterest [teks]
  ├─ ❏ ${prefix}ytmp3 [link][premium]
  ├─ ❏ ${prefix}ytmp4 [link][premium]
  ├─ ❏ ${prefix}fbmp4 [link][premium]
  ├─ ❏ ${prefix}play [teks][premium]
  ├─ ❏ ${prefix}fototiktok
  └─ ❏ ${prefix}joox [teks][premium]
◪ *MEME*
  │
  ├─ ❏ ${prefix}meme ❌
  └─ ❏ ${prefix}memeindo ❌
◪ *FIND TARGET*
  │
  ├─ ❏ ${prefix}mutual [premium]
  └─ ❏ ${prefix}next [premium]
◪ *SPAM*
  │
  ├─ ❏ ${prefix}spamcall [premium]
  └─ ❏ ${prefix}spamsms [premium]
◪ *QUOTES*
  │
  ├─ ❏ ${prefix}quotes
  ├─ ❏ ${prefix}quoteskehidupan
  ├─ ❏ ${prefix}quotesislami
  ├─ ❏ ${prefix}quotesnasehat
  ├─ ❏ ${prefix}quotescinta ❌
  ├─ ❏ ${prefix}quotesmotivasi
  └─ ❏ ${prefix}animequotes ❌
◪ *LIMIT & UANG & LB*
  │
  ├─ ❏ ${prefix}limit
  ├─ ❏ ${prefix}buylimit
  ├─ ❏ ${prefix}buypremiumlimit
  ├─ ❏ ${prefix}transfer
  └─ ❏ ${prefix}leaderboard
◪ *SOUND*
═══════════════════════════
  │
  ├─ ❏ ${prefix}hai [premium]
  ├─ ❏ ${prefix}hallo [only computer]
  ├─ ❏ ${prefix}aine [premium]
  ├─ ❏ ${prefix}soundplaydate [only computer]
  ├─ ❏ ${prefix}soundbakahentai [only computer]
  ├─ ❏ ${prefix}sayonichan [only computer]
  └─ ❏ ${prefix}gtts [premium]
◪ *ISLAM*
═══════════════════════════
  │
  ├─ ❏ ${prefix}jadwalsholat [teks]
  └─ ❏ ${prefix}quran
◪ *STALK*
  │
  ├─ ❏ ${prefix}tiktokstalk
  └─ ❏ ${prefix}igstalk ❌
◪ *WIBU*
  │
  ├─ ❏ ${prefix}neonime ❌
  └─ ❏ ${prefix}wait [premium]
◪ *APK*
  ├─ ❏ ${prefix}apkpure [teks]
  ├─ ❏ ${prefix}happymod [teks]
  └─ ❏ ${prefix}moddroid [teks]
◪ *18+ Nsfw*
  |
  ├─ ❏ ${prefix}blowjob [premium]
  ├─ ❏ ${prefix}randomhentai [premium]
  └─ ❏ ${prefix}nsfwneko
◪ *FUN*
═══════════════════════════
  │
  ├─ ❏ ${prefix}truth
  ├─ ❏ ${prefix}dare
  ├─ ❏ ${prefix}slap
  ├─ ❏ ${prefix}tampar
  ├─ ❏ ${prefix}nangis
  ├─ ❏ ${prefix}cium
  └─ ❏ ${prefix}simi
◪ *INFORMATION*
═══════════════════════════
  │
  ├─ ❏ ${prefix}bahasa
  ├─ ❏ ${prefix}kodenegara
  ├─ ❏ ${prefix}infogempa
  ├─ ❏ ${prefix}infocuaca
  ├─ ❏ ${prefix}infonomor ❌
  └─ ❏ ${prefix}covid
◪ *GROUP*
═══════════════════════════
  │
  ├─ ❏ ${prefix}tagall
  ├─ ❏ ${prefix}listadmin
  ├─ ❏ ${prefix}wakillist
  ├─ ❏ ${prefix}premiumlist
  ├─ ❏ ${prefix}banlist
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}linkgc
  ├─ ❏ ${prefix}mining
  ├─ ❏ ${prefix}level
  ├─ ❏ ${prefix}kick
  ├─ ❏ ${prefix}add
  ├─ ❏ ${prefix}grup [buka/tutup]
  ├─ ❏ ${prefix}antibadword [1/0]
  ├─ ❏ ${prefix}welcome [1/0]
  ├─ ❏ ${prefix}antilink [1/0]
  ├─ ❏ ${prefix}nsfw [1/0]
  ├─ ❏ ${prefix}leveling [1/0]
  └─ ❏ ${prefix}simih [1/0]
◪ *OTHER*
═══════════════════════════
  │
  ├─ ❏ ${prefix}wame
  ├─ ❏ ${prefix}qrcode
  └─ ❏ ${prefix}afk
═══════════════════════════
◪ *POWERED BY ENZETBOT*
◪ *SINCE 02-02-2021*
═══════════════════════════
`
}
exports.help = help



  
