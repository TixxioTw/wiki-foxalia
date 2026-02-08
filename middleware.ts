// middleware.ts à la racine
export default async function middleware(req: Request) {
  const url = new URL(req.url);

  // On protège uniquement le dossier staff
  if (url.pathname.startsWith('/docs/staff')) {
    const cookieHeader = req.headers.get('cookie') || '';
    
    // Vérification simple du cookie de session
    if (!cookieHeader.includes('foxalia_staff_session=true')) {
      const clientID = "1464833535545184458";
      const redirectUri = encodeURIComponent('https://docs.foxalia-mc.fr/api/auth/callback');
      
      const authUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientID}&redirect_uri=${redirectUri}&response_type=code&scope=identify%20guilds.members.read`;
      
      return Response.redirect(authUrl, 307);
    }
  }

  // Si tout est bon ou hors dossier staff, on laisse passer
  return new Response(null, {
    headers: { 'x-middleware-next': '1' },
  });
}

// Configuration pour Vercel pour ne pas scanner tout le site
export const config = {
  matcher: '/docs/staff/:path*',
};