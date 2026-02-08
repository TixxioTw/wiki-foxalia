import React, { useState } from 'react';
import Layout from '@theme/Layout';

export default function Candidatures() {
  const [formData, setFormData] = useState({
    pseudo: '', age: '', discord: '', experience: '', motivations: '', sanctions: 'Aucune'
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const webhookURL = "TON_WEBHOOK_DISCORD_ICI"; // ⚠️ À REMPLACER

    const message = {
      username: "Recrutements Foxalia",
      avatar_url: "https://docs.foxalia-mc.fr/img/foxalia.png",
      embeds: [{
        title: "📄 Nouvelle Candidature Staff",
        color: 3066993,
        timestamp: new Date().toISOString(),
        fields: [
          { name: "👤 Pseudo", value: `\`${formData.pseudo}\``, inline: true },
          { name: "🎂 Âge", value: `${formData.age} ans`, inline: true },
          { name: "🆔 Discord", value: formData.discord, inline: true },
          { name: "⚖️ Historique Sanctions", value: formData.sanctions },
          { name: "🛠 Expérience", value: formData.experience },
          { name: "🎯 Motivations", value: formData.motivations }
        ],
        footer: { text: "Foxalia - Système Automatisé" }
      }]
    };

    try {
      const response = await fetch(webhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message),
      });
      if (response.ok) {
        setStatus('✅ Candidature transmise avec succès !');
        setFormData({ pseudo: '', age: '', discord: '', experience: '', motivations: '', sanctions: 'Aucune' });
      } else { setStatus('❌ Erreur de transmission.'); }
    } catch (error) { setStatus('❌ Erreur technique (Discord).'); }
  };

  return (
    <Layout title="Candidatures Staff">
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1.8fr', 
        gap: '1.5rem', 
        padding: '1.5rem', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        minHeight: '85vh'
      }}>
        
        {/* COLONNE GAUCHE : CONDITIONS */}
        <aside style={{ 
          backgroundColor: '#fffbeb', 
          border: '1px solid #fef3c7', 
          borderRadius: '16px', 
          padding: '1.5rem',
          alignSelf: 'start'
        }}>
          <span style={{ backgroundColor: '#d97706', color: 'white', padding: '4px 10px', borderRadius: '50px', fontSize: '0.65rem', fontWeight: 'bold' }}>
            CRITÈRES DE SÉLECTION
          </span>
          <h1 style={{ fontSize: '1.8rem', fontWeight: '900', margin: '0.8rem 0', color: '#111827' }}>Rejoindre l'équipe</h1>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '1rem' }}>
            <div style={conditionStyle}>🔞 <b>16 ans minimum</b> (Strict)</div>
            <div style={conditionStyle}>⚖️ <b>Casier vierge</b> sur Foxalia</div>
            <div style={conditionStyle}>🎤 <b>Micro de qualité</b> requis</div>
            <div style={conditionStyle}>⏳ <b>Disponibilité</b> régulière</div>
            <div style={conditionStyle}>📖 <b>Maîtrise</b> du règlement</div>
          </div>

          <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: '#4b5563', lineHeight: '1.4' }}>
            <i>Note : Toute candidature bâclée ou comportant trop de fautes sera automatiquement refusée.</i>
          </p>
        </aside>

        {/* COLONNE DROITE : FORMULAIRE */}
        <main style={{ 
          backgroundColor: '#ffffff', 
          border: '2px solid #10b981', 
          borderRadius: '16px', 
          padding: '1.5rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
        }}>
          <h2 style={{ color: '#065f46', marginBottom: '1.2rem', fontSize: '1.3rem' }}>Formulaire de postulation</h2>
          
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 0.5fr 1fr', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>Pseudo en jeu</label>
                <input name="pseudo" value={formData.pseudo} onChange={handleChange} required placeholder="Ex: Tixxio" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Âge</label>
                <input name="age" type="number" min="15" value={formData.age} onChange={handleChange} required placeholder="16" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Discord</label>
                <input name="discord" value={formData.discord} onChange={handleChange} required placeholder="tixxio#0000" style={inputStyle} />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Historique de sanctions (Précisez si besoin)</label>
              <input name="sanctions" value={formData.sanctions} onChange={handleChange} required placeholder="Ex: Aucune / Un mute en 2024..." style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle}>Expériences passées (Staff / Projets)</label>
              <textarea name="experience" value={formData.experience} onChange={handleChange} required placeholder="Détaillez vos anciens rôles..." style={{...inputStyle, minHeight: '60px'}}></textarea>
            </div>

            <div>
              <label style={labelStyle}>Motivations & Pourquoi vous ?</label>
              <textarea name="motivations" value={formData.motivations} onChange={handleChange} required placeholder="Rédigez un paragraphe convaincant..." style={{...inputStyle, minHeight: '100px'}}></textarea>
            </div>

            <button type="submit" style={{ 
              backgroundColor: '#10b981', color: 'white', padding: '0.9rem', borderRadius: '10px', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem', transition: '0.2s opacity'
            }}>Envoyer ma candidature sur le bureau des admins</button>

            {status && <div style={{ textAlign: 'center', padding: '0.8rem', borderRadius: '8px', backgroundColor: '#ecfdf5', color: '#065f46', fontWeight: 'bold', fontSize: '0.9rem' }}>{status}</div>}
          </form>
        </main>

      </div>
    </Layout>
  );
}

const conditionStyle = { backgroundColor: '#fef3c7', padding: '8px 12px', borderRadius: '8px', fontSize: '0.85rem', color: '#92400e', border: '1px solid #fde68a' };
const labelStyle = { fontWeight: 'bold', display: 'block', marginBottom: '4px', fontSize: '0.8rem', color: '#374151' };
const inputStyle = { width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #d1d5db', backgroundColor: '#f9fafb', fontSize: '0.9rem', outline: 'none' };