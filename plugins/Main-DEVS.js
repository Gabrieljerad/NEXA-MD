var handler = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let owners = '256789810043 - *NEXA*'; // Define owners variable

  let fkontak = {
    "key": {
      "participants": "0@s.whatsapp.net",
      "remoteJid": "status@broadcast",
      "fromMe": false,
      "id": "hey"
    },
    "message": {
      "contactMessage": {
        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    },
    "participant": "0@s.whatsapp.net"
  };

  let pp = './Assets/XLICON-V2.jpg';

  const cat = `*_XLICON-V2_*

*_—⛔ BULLSEYE MD  𝐃𝐄𝐕 𝟏 wa.me/+256789810043 %dont_contact_me%_*

*_—🍷 BULLSEYE MD  𝐃𝐄𝐕 2 wa.me/+923184070915_*
*---------------------*

*_ᴛʜᴇ ᴍᴏᴅᴇʀᴀᴛᴏʀ_*
*${owners}*`;

  await conn.sendFile(m.chat, pp, 'menuvid', cat, fkontak);
};

handler.help = ['devi', 'maindev'];
handler.tags = ['info'];
handler.command = /^(maindev|devi)$/i;

export default handler;
