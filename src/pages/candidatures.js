import React, { useState } from 'react';
import Layout from '@theme/Layout';

export default function Candidatures() {
  const [pseudo, setPseudo] = useState('');
  const [presentation, setPresentation] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const webhookURL = "https://discord.com/api/webhooks/1470101534225334362/5Ty2WcHhbUSkoIWmxzFA2fIgGdYpvbeNBW0z9Q1iMmsyU8NMkUgJKBk8ZWGANwA_pTuS"; // ⚠️ Mets ton lien ici

    const message = {
      embeds: [{
        title: "✨ Nouvelle Candidature Staff",
        color: 0x10b981,
        fields: [
          { name: "👤 Pseudo en jeu", value: pseudo },
          { name: "📝 Présentation", value: presentation }
        ],
        footer: { text: "Foxalia Wiki - Système de Candidature" }
      }]
    };

    try {
      const response = await fetch(webhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message),
      });

      if (response.ok) {
        setStatus('✅ Candidature envoyée avec succès !');
        setPseudo('');
        setPresentation('');
      } else {
        setStatus('❌ Erreur lors de l\'envoi.');
      }
    } catch (error) {
      setStatus('❌ Impossible de contacter Discord.');
    }
  };

  return (
    <Layout title="Candidatures Staff">
      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
        
        {/* BLOC JAUNE : ENTÊTE */}
        <div style={{ backgroundColor: '#fffbeb', border: '1px solid #fef3c7', borderRadius: '12px', padding: '2rem', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Rejoins le staff</h1>
          <p style={{ color: '#4b5563' }}>Remplis le formulaire pour postuler.</p>
        </div>

        {/* BLOC VERT : FORMULAIRE DIRECT */}
        <div style={{ border: '2px solid #10b981', borderRadius: '12px', padding: '2rem', backgroundColor: '#fff' }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>Pseudo en jeu</label>
              <input 
                type="text" 
                placeholder="Exemple: BlacktoeZ"
                value={pseudo}
                onChange={(e) => setPseudo(e.target.value)}
                required
                style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #d1d5db' }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>Présentation</label>
              <textarea 
                rows="6"
                placeholder="Parle-nous de toi..."
                value={presentation}
                onChange={(e) => setPresentation(e.target.value)}
                required
                style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #d1d5db' }}
              ></textarea>
            </div>

            <button type="submit" style={{ backgroundColor: '#10b981', color: 'white', padding: '12px 25px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
              Envoyer ma candidature
            </button>

            {status && <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>{status}</p>}
          </form>
        </div>
      </div>
    </Layout>
  );
}