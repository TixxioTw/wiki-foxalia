import React, { useState } from 'react';
import Layout from '@theme/Layout';

export default function Candidatures() {
  const [formData, setFormData] = useState({
    pseudo: '',
    age: '',
    discord: '',
    experience: '',
    motivations: '',
    disponibilites: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const webhookURL = "TON_WEBHOOK_DISCORD_ICI";

    // Amélioration de l'Embed Discord
    const message = {
      username: "Recrutements Foxalia",
      avatar_url: "https://docs.foxalia-mc.fr/img/foxalia.png",
      embeds: [{
        title: "📄 Nouvelle Candidature Staff",
        description: `Une nouvelle candidature a été déposée par **${formData.pseudo}**.`,
        color: 3066993, // Vert émeraude
        timestamp: new Date().toISOString(),
        fields: [
          { name: "👤 Pseudo en jeu", value: `\`${formData.pseudo}\``, inline: true },
          { name: "🎂 Âge", value: `${formData.age} ans`, inline: true },
          { name: "🆔 Discord", value: formData.discord, inline: true },
          { name: "🛠 Expériences passées", value: formData.experience },
          { name: "🎯 Motivations", value: formData.motivations },
          { name: "📅 Disponibilités", value: formData.disponibilites }
        ],
        footer: { text: "Système de Candidature Foxalia" }
      }]
    };

    try {
      const response = await fetch(webhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message),
      });

      if (response.ok) {
        setStatus('✅ Candidature envoyée ! Nous reviendrons vers vous sur Discord.');
        setFormData({ pseudo: '', age: '', discord: '', experience: '', motivations: '', disponibilites: '' });
      } else {
        setStatus('❌ Erreur lors de l\'envoi. Vérifiez le Webhook.');
      }
    } catch (error) {
      setStatus('❌ Erreur technique. Réessayez plus tard.');
    }
  };

  return (
    <Layout title="Candidatures Staff">
      <div style={{ padding: '3rem 1rem', maxWidth: '900px', margin: '0 auto', color: '#1a1a1b' }}>
        
        {/* SECTION ENTÊTE */}
        <header style={{ 
          backgroundColor: '#fffbeb', 
          border: '1px solid #fef3c7', 
          borderRadius: '16px', 
          padding: '2.5rem', 
          marginBottom: '2rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
        }}>
          <span style={{ backgroundColor: '#d97706', color: 'white', padding: '6px 16px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
            Ouvert aux candidatures
          </span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '800', margin: '1rem 0', letterSpacing: '-1px' }}>Rejoins le staff</h1>
          <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: '1.6' }}>
            Rejoignez l'équipe de modération de Foxalia pour nous aider à faire grandir le projet !
          </p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '10px' }}>
             <div style={{ padding: '10px 15px', backgroundColor: '#fef3c7', borderRadius: '8px', fontSize: '0.9rem', color: '#92400e', fontWeight: '500' }}>
               📌 Âge minimum : 15 ans
             </div>
             <div style={{ padding: '10px 15px', backgroundColor: '#fef3c7', borderRadius: '8px', fontSize: '0.9rem', color: '#92400e', fontWeight: '500' }}>
               🎤 Micro fonctionnel requis
             </div>
          </div>
        </header>

        {/* SECTION FORMULAIRE */}
        <main style={{ 
          backgroundColor: '#ffffff', 
          border: '2px solid #10b981', 
          borderRadius: '16px', 
          padding: '2.5rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
        }}>
          <h2 style={{ color: '#065f46', marginBottom: '2rem', borderBottom: '2px solid #ecfdf5', paddingBottom: '1rem' }}>Envoyer ta candidature</h2>
          
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div>
                <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>Pseudo en jeu</label>
                <input name="pseudo" value={formData.pseudo} onChange={handleChange} required placeholder="Exemple: Tixxio" style={inputStyle} />
              </div>
              <div>
                <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>Âge</label>
                <input name="age" type="number" value={formData.age} onChange={handleChange} required placeholder="Ex: 17" style={inputStyle} />
              </div>
            </div>

            <div>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>Identifiant Discord</label>
              <input name="discord" value={formData.discord} onChange={handleChange} required placeholder="Ex: tixxio_dev" style={inputStyle} />
            </div>

            <div>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>Expériences passées</label>
              <textarea name="experience" value={formData.experience} onChange={handleChange} required placeholder="As-tu déjà été staff sur d'autres serveurs ?" style={textareaStyle}></textarea>
            </div>

            <div>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>Motivations</label>
              <textarea name="motivations" value={formData.motivations} onChange={handleChange} required placeholder="Pourquoi toi et pas un autre ? Qu'apporterais-tu à Foxalia ?" style={textareaStyle}></textarea>
            </div>

            <div>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>Disponibilités hebdomadaires</label>
              <input name="disponibilites" value={formData.disponibilites} onChange={handleChange} required placeholder="Lundi 17h-20h, etc." style={inputStyle} />
            </div>

            <button type="submit" style={{ 
              backgroundColor: '#10b981', 
              color: 'white', 
              padding: '1rem', 
              borderRadius: '10px', 
              border: 'none', 
              fontWeight: 'bold', 
              fontSize: '1.1rem',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
            }}>
              Soumettre ma candidature
            </button>

            {status && <div style={{ textAlign: 'center', padding: '1rem', borderRadius: '8px', backgroundColor: status.includes('✅') ? '#ecfdf5' : '#fef2f2', color: status.includes('✅') ? '#065f46' : '#991b1b', fontWeight: 'bold' }}>{status}</div>}
          </form>
        </main>
      </div>
    </Layout>
  );
}

// Styles réutilisables
const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '10px',
  border: '1px solid #d1d5db',
  fontSize: '1rem',
  backgroundColor: '#f9fafb'
};

const textareaStyle = {
  ...inputStyle,
  minHeight: '120px',
  resize: 'vertical'
};