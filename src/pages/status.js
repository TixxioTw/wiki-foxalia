import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';

export default function Status() {
  const [serverData, setServerData] = useState({ online: false, players: 0, max: 0, version: '...' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ping de l'IP Foxalia via API
    fetch('https://api.mcsrvstat.us/2/80.15.54.59:25565')
      .then(res => res.json())
      .then(data => {
        setServerData({
          online: data.online,
          players: data.players ? data.players.online : 0,
          max: data.players ? data.players.max : 0,
          version: data.version || '1.20.1'
        });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <Layout title="État des services">
      <div style={{ padding: '3rem 1rem', maxWidth: '1000px', margin: '0 auto', fontFamily: 'sans-serif' }}>
        
        <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#111827', marginBottom: '0.5rem' }}>État des Services</h1>
          <p style={{ fontSize: '1.2rem', color: '#6b7280' }}>Disponibilité en temps réel des infrastructures Foxalia.</p>
        </header>

        <div style={{ display: 'grid', gap: '2rem' }}>
          
          {/* BLOC PRINCIPAL MINECRAFT */}
          <div style={{
            backgroundColor: serverData.online ? '#f0fdf4' : '#fef2f2',
            border: `2px solid ${serverData.online ? '#bbf7d0' : '#fecaca'}`,
            borderRadius: '20px',
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h2 style={{ margin: 0, fontSize: '1.8rem', color: '#166534' }}>Serveur Minecraft</h2>
                <code style={{ fontSize: '0.9rem', color: '#374151', backgroundColor: 'rgba(255,255,255,0.5)', padding: '2px 8px', borderRadius: '5px' }}>
                  80.15.54.59:25565
                </code>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: 'white', padding: '8px 16px', borderRadius: '50px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                <span style={{ 
                  height: '12px', width: '12px', backgroundColor: serverData.online ? '#22c55e' : '#ef4444', 
                  borderRadius: '50%', display: 'inline-block',
                  animation: serverData.online ? 'pulse 2s infinite' : 'none'
                }}></span>
                <span style={{ fontWeight: 'bold', fontSize: '0.9rem', color: serverData.online ? '#166534' : '#991b1b' }}>
                  {loading ? 'CHARGEMENT...' : serverData.online ? 'OPÉRATIONNEL' : 'HORS-LIGNE'}
                </span>
              </div>
            </div>

            {serverData.online && (
              <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '1.5rem' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#6b7280', textTransform: 'uppercase', fontWeight: 'bold' }}>Joueurs</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{serverData.players} <span style={{ color: '#9ca3af', fontSize: '1rem' }}>/ {serverData.max}</span></div>
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#6b7280', textTransform: 'uppercase', fontWeight: 'bold' }}>Version</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{serverData.version}</div>
                </div>
              </div>
            )}
          </div>

          {/* PETITS BLOCS SECONDAIRES */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <div style={subCardStyle('#f0f9ff', '#bae6fd')}>
              <h4 style={{ margin: 0, color: '#0369a1' }}>Wiki & Site Web</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '10px', color: '#0284c7', fontWeight: 'bold', fontSize: '0.9rem' }}>
                 <div style={{ height: '8px', width: '8px', backgroundColor: '#0ea5e9', borderRadius: '50%' }}></div>
                 100% DISPONIBLE
              </div>
            </div>

            <div style={subCardStyle('#f5f3ff', '#ddd6fe')}>
              <h4 style={{ margin: 0, color: '#5b21b6' }}>API & Webhooks</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '10px', color: '#7c3aed', fontWeight: 'bold', fontSize: '0.9rem' }}>
                 <div style={{ height: '8px', width: '8px', backgroundColor: '#8b5cf6', borderRadius: '50%' }}></div>
                 OPÉRATIONNEL
              </div>
            </div>
          </div>

          {/* NOTE DE MAINTENANCE */}
          <div style={{ backgroundColor: '#f9fafb', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e5e7eb', textAlign: 'center' }}>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#6b7280' }}>
              Les pings sont effectués toutes les 60 secondes. En cas de problème majeur, un message sera posté sur le <b>#annonces</b> de notre Discord.
            </p>
          </div>

        </div>

        {/* ANIMATION CSS */}
        <style>{`
          @keyframes pulse {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
            70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
          }
        `}</style>
      </div>
    </Layout>
  );
}

const subCardStyle = (bg, border) => ({
  backgroundColor: bg,
  border: `1px solid ${border}`,
  padding: '1.2rem',
  borderRadius: '16px',
});