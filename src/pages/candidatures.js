import React, { useState } from 'react';
import Layout from '@theme/Layout';

export default function Candidatures() {
  const [formData, setFormData] = useState({
    pseudo: '', age: '', discord: '', experience: '', motivations: '', disponibilites: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const webhookURL = "TON_WEBHOOK_DISCORD_ICI";

    const message = {
      username: "Recrutements Foxalia",
      avatar_url: "https://docs.foxalia-mc.fr/img/foxalia.png",
      content: "<@&ID_DU_ROLE_ADMIN>", // Optionnel : mentionne un rôle
      embeds: [{
        title: "📄 Nouvelle Candidature Staff",
        color: 3066993,
        timestamp: new Date().toISOString(),
        fields: [
          { name: "👤 Pseudo", value: `\`${formData.pseudo}\``, inline: true },
          { name: "🎂 Âge", value: `${formData.age} ans`, inline: true },
          { name: "🆔 Discord", value: formData.discord, inline: true },
          { name: "🛠 Expérience", value: formData.experience },
          { name: "🎯 Motivations", value: formData.motivations },
          { name: "📅 Disponibilités", value: formData.disponibilites }
        ],
        footer: { text: "Foxalia Wiki" }
      }]
    };

    try {
      const response = await fetch(webhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message),
      });
      if (response.ok) {
        setStatus('✅ Envoyé !');
        setFormData({ pseudo: '', age: '', discord: '', experience: '', motivations: '', disponibilites: '' });
      } else { setStatus('❌ Erreur Webhook.'); }
    } catch (error) { setStatus('❌ Erreur technique.'); }
  };

  return (
    <Layout title="Candidatures Staff">
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '350px 1fr', 
        gap: '2rem', 
        padding: '2rem', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        alignItems: 'start',
        height: 'calc(100vh - 100px)' // Tente de faire tenir sur l'écran
      }}>
        
        {/* COLONNE GAUCHE : INFOS */}
        <aside style={{ 
          backgroundColor: '#fffbeb', 
          border: '1px solid #fef3c7', 
          borderRadius: '16px', 
          padding: '1.5rem',
          position: 'sticky',
          top: '2rem'
        }}>
          <span style={{ backgroundColor: '#d97706', color: 'white', padding: '4px 12px', borderRadius: '50px', fontSize: '0.65rem', fontWeight: 'bold' }}>
            RECRUTEMENT OUVERT
          </span>
          <h1 style={{ fontSize: '1.8rem', fontWeight: '800', margin: '1rem 0' }}>Rejoins le staff</h1>
          <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: '1.5' }}>
            Devenez modérateur sur Foxalia. Fournis un maximum de détails pour que l'équipe puisse te répondre rapidement.
          </p>
          <ul style={{ paddingLeft: '1.2rem', fontSize: '0.85rem', color: '#92400e', fontWeight: '500' }}>
            <li>Âge : 15 ans minimum</li>
            <li>Micro Discord requis</li>
            <li>Connaître le règlement</li>
          </ul>
          <a href="https://discord.gg/DnGcXttTSz" style={{ 
            marginTop: '1rem', display: 'block', textAlign: 'center', backgroundColor: '#d97706', color: 'white', padding: '10px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem'
          }}>Rejoindre le Discord</a>
        </aside>

        {/* COLONNE DROITE : FORMULAIRE */}
        <main style={{ 
          backgroundColor: '#ffffff', 
          border: '2px solid #10b981', 
          borderRadius: '16px', 
          padding: '1.5rem',
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
        }}>
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>Pseudo en jeu</label>
                <input name="pseudo" value={formData.pseudo} onChange={handleChange} required placeholder="Ex: Tixxio" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Âge</label>
                <input name="age" type="number" value={formData.age} onChange={handleChange} required placeholder="17" style={inputStyle} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>Identifiant Discord</label>
                <input name="discord" value={formData.discord} onChange={handleChange} required placeholder="tixxio_dev" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Disponibilités</label>
                <input name="disponibilites" value={formData.disponibilites} onChange={handleChange} required placeholder="Soirs et week-end" style={inputStyle} />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Expériences passées</label>
              <textarea name="experience" value={formData.experience} onChange={handleChange} required placeholder="Anciens serveurs ?" style={{...inputStyle, minHeight: '60px'}}></textarea>
            </div>

            <div>
              <label style={labelStyle}>Motivations</label>
              <textarea name="motivations" value={formData.motivations} onChange={handleChange} required placeholder="Pourquoi toi ?" style={{...inputStyle, minHeight: '80px'}}></textarea>
            </div>

            <button type="submit" style={{ 
              backgroundColor: '#10b981', color: 'white', padding: '0.8rem', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer'
            }}>Envoyer ma candidature</button>

            {status && <div style={{ textAlign: 'center', fontSize: '0.9rem', fontWeight: 'bold', color: '#065f46' }}>{status}</div>}
          </form>
        </main>

      </div>
    </Layout>
  );
}

const labelStyle = { fontWeight: 'bold', display: 'block', marginBottom: '4px', fontSize: '0.85rem' };
const inputStyle = { width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1px solid #d1d5db', backgroundColor: '#f9fafb', fontSize: '0.9rem' };