import React, { useState } from 'react';
import Layout from '@theme/Layout';

export default function Candidatures() {
  const [formData, setFormData] = useState({
    pseudo: '', age: '', discord: '', experience: '', motivations: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const webhookURL = "https://discord.com/api/webhooks/1470101534225334362/5Ty2WcHhbUSkoIWmxzFA2fIgGdYpvbeNBW0z9Q1iMmsyU8NMkUgJKBk8ZWGANwA_pTuS"; 

    const message = {
      username: "Foxalia Recrutements",
      avatar_url: "https://docs.foxalia-mc.fr/img/foxalia.png",
      embeds: [{
        title: "✨ NOUVELLE CANDIDATURE STAFF",
        description: `Un nouveau candidat souhaite rejoindre l'équipe !`,
        color: 3066993,
        timestamp: new Date().toISOString(),
        fields: [
          { name: "👤 Pseudo en jeu", value: `\`${formData.pseudo}\``, inline: true },
          { name: "🎂 Âge", value: `${formData.age} ans`, inline: true },
          { name: "🆔 Discord", value: `\`${formData.discord}\``, inline: true },
          { name: "🛠 Expériences passées", value: formData.experience },
          { name: "🎯 Motivations", value: formData.motivations }
        ],
        footer: { text: "Foxalia Wiki | Système de Candidatures" }
      }]
    };

    try {
      const response = await fetch(webhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message),
      });
      if (response.ok) {
        // Message de succès mis à jour avec l'info de l'entretien ✅
        setStatus('✅ Candidature reçue ! Si ton profil est retenu, tu seras recontacté sur Discord pour un entretien.');
        setFormData({ pseudo: '', age: '', discord: '', experience: '', motivations: '' });
      } else { 
        setStatus('❌ Erreur technique. Contactez un admin sur Discord.'); 
      }
    } catch (error) { 
      setStatus('❌ Impossible de joindre Discord.'); 
    }
  };

  return (
    <Layout title="Candidatures Staff">
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1.8fr', 
        gap: '1.5rem', 
        padding: '2rem', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        minHeight: '80vh'
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
            INFOS RECRUTEMENT
          </span>
          <h1 style={{ fontSize: '1.8rem', fontWeight: '900', margin: '0.8rem 0', color: '#111827' }}>Rejoins le staff</h1>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '1rem' }}>
            <div style={conditionStyle}>🔞 <b>16 ans minimum</b></div>
            <div style={conditionStyle}>🎤 <b>Micro de qualité</b> requis</div>
            <div style={conditionStyle}>⏳ <b>Disponibilité</b> régulière</div>
            <div style={conditionStyle}>💬 <b>Entretien oral</b> obligatoire</div>
          </div>

          <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#fef3c7', borderRadius: '8px', border: '1px solid #fde68a' }}>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#92400e', fontWeight: 'bold' }}>
              ℹ️ Processus :
            </p>
            <p style={{ margin: '5px 0 0 0', fontSize: '0.8rem', color: '#92400e', lineHeight: '1.4' }}>
              Après analyse de ta candidature, un membre de la direction te contactera sur Discord pour fixer un rendez-vous oral si ton profil nous intéresse.
            </p>
          </div>
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
                <label style={labelStyle}>Identifiant Discord</label>
                <input name="discord" value={formData.discord} onChange={handleChange} required placeholder="tixxio_dev" style={inputStyle} />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Expériences passées (Staff / Projets)</label>
              <textarea name="experience" value={formData.experience} onChange={handleChange} required placeholder="Où avez-vous déjà travaillé ?" style={{...inputStyle, minHeight: '80px'}}></textarea>
            </div>

            <div>
              <label style={labelStyle}>Motivations & Pourquoi vous ?</label>
              <textarea name="motivations" value={formData.motivations} onChange={handleChange} required placeholder="Qu'allez-vous apporter de plus à Foxalia ?" style={{...inputStyle, minHeight: '120px'}}></textarea>
            </div>

            <button type="submit" style={{ 
              backgroundColor: '#10b981', color: 'white', padding: '1rem', borderRadius: '10px', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem', marginTop: '0.5rem'
            }}>Envoyer ma candidature</button>

            {status && <div style={{ textAlign: 'center', padding: '1rem', borderRadius: '8px', backgroundColor: status.includes('✅') ? '#ecfdf5' : '#fef2f2', color: status.includes('✅') ? '#065f46' : '#991b1b', fontWeight: 'bold', fontSize: '0.85rem', lineHeight: '1.4' }}>{status}</div>}
          </form>
        </main>

      </div>
    </Layout>
  );
}

const conditionStyle = { backgroundColor: '#fef3c7', padding: '8px 12px', borderRadius: '8px', fontSize: '0.85rem', color: '#92400e', border: '1px solid #fde68a' };
const labelStyle = { fontWeight: 'bold', display: 'block', marginBottom: '4px', fontSize: '0.8rem', color: '#374151' };
const inputStyle = { width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #d1d5db', backgroundColor: '#f9fafb', fontSize: '0.9rem', outline: 'none' };