import fetch from 'node-fetch';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    if (!text && !(m.quoted && m.quoted.text)) {
      throw `*_Need query._*\n*_Example:_* _${usedPrefix + command} When did Jesus Christ die?_`;
    }

    if (!text && m.quoted && m.quoted.text) {
      text = m.quoted.text;
    }

    await m.react('⚡');

    const API_URL = `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=${encodeURIComponent(text)}`;

    const response = await fetch(API_URL);
    const data = await response.json();

    await m.react('✅');

    if (data.status && data.data) {
      const respuestaAPI = data.data;
      conn.reply(m.chat, respuestaAPI, m);
    } else {
      throw '*Could not get a valid answer, sorry 😅.*';
    }
  } catch (error) {
    throw `*Oops, an API error occurred. Please try again later 😅.*`;
  }
};

handler.command = /^gpt5$/i;
handler.tags = ['study'];

export default handler;
