import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send('Code manquant');
  }

  try {
    // 1. Échange du code contre un token Discord
    const response = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      body: new URLSearchParams({
        client_id: process.env.DISCORD_CLIENT_ID!,
        client_secret: process.env.DISCORD_CLIENT_SECRET!,
        grant_type: 'authorization_code',
        code: code.toString(),
        redirect_uri: 'https://docs.foxalia-mc.fr/api/auth/callback',
      }),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    const data = await response.json();

    // 2. Vérification du membre sur ton serveur Foxalia
    const memberResponse = await fetch(
      `https://discord.com/api/users/@me/guilds/${process.env.DISCORD_GUILD_ID}/member`,
      { headers: { Authorization: `Bearer ${data.access_token}` } }
    );

    const member = await memberResponse.json();

    // 3. Vérification du rôle Staff
    if (member.roles && member.roles.includes(process.env.STAFF_ROLE_ID)) {
      // Succès : On pose le cookie de session pour 7 jours
      res.setHeader('Set-Cookie', 'foxalia_staff_session=true; Path=/; Max-Age=604800; HttpOnly; SameSite=Lax');
      return res.redirect('/docs/staff/sanctions');
    }

    return res.status(403).send("Accès refusé : Tu n'as pas le rôle Staff.");
  } catch (error) {
    return res.status(500).send("Erreur lors de l'authentification.");
  }
}