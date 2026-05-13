# Configuration EmailJS - Guide Complet

## Étapes pour rendre le formulaire Contact FONCTIONNEL

### 1. Créer un compte EmailJS (GRATUIT)
- Allez sur https://www.emailjs.com
- Cliquez sur "Sign Up" → Inscrivez-vous avec votre email
- Confirmez votre compte par email

### 2. Créer un Service Email (d'où viendront les emails)
Dans le dashboard EmailJS:
1. Allez dans "Email Services" (colonne de gauche)
2. Cliquez "Create New Service"
3. Choisissez un provider (Gmail, Outlook, etc.)
4. Remplissez les infos et générez un nouveau mot de passe d'app
5. Copiez le **Service ID** (ex: `service_a1b2c3d4e5f6`)

### 3. Créer un Email Template
1. Allez dans "Email Templates" (colonne de gauche)
2. Cliquez "Create New Template"
3. Remplissez:
   - **Name**: `contact_form`
   - **Subject**: `Nouveau message de {{from_name}}`
   - **Content**:
   ```
   Nom: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   ```
4. Sauvegardez et copiez le **Template ID** (ex: `template_x1y2z3`)

### 4. Obtenir votre Public Key
1. Allez dans "Account" → "API Keys" (en haut à droite)
2. Copiez votre **Public Key** (commence par `vxxx...`)

### 5. Mettre à jour Contact.jsx
Ouvrez `src/components/Contact.jsx` et remplacez les 3 placeholders:

```jsx
// Ligne 15 - Remplacez votre_public_key_ici:
emailjs.init('votre_public_key_ici');  // ← Paste votre Public Key ici

// Ligne 34-35 - Remplacez les IDs:
await emailjs.send(
  'service_xxxxxx',    // ← Paste votre Service ID
  'template_xxxxxx',   // ← Paste votre Template ID
```

### 6. Exemple de remplissage
```jsx
// Ligne 15:
emailjs.init('vN8x9y0z1a2b3c4d5e6f7g');

// Ligne 34-35:
await emailjs.send(
  'service_abc123def456',
  'template_xyz789uvw012',
```

### 7. Tester le formulaire
1. Relancez le serveur: `npm run dev`
2. Allez sur http://localhost:5176/#contact
3. Remplissez le formulaire et cliquez "Envoyer"
4. Vous recevrez un email!

## Options supplémentaires

### Changer l'email de réception
Dans `Contact.jsx` ligne 40, modifiez:
```jsx
to_email: 'keithsorail@gmail.com'  // ← Email où vous recevrez les messages
```

### Ajouter des champs supplémentaires
1. Ajoutez le champ dans le formulaire
2. Ajoutez-le dans formData (ligne 7)
3. Passez-le dans emailjs.send() (ligne 34)
4. Ajoutez la variable dans le template EmailJS

### Limite gratuite EmailJS
- ✅ 200 emails/mois (gratuit)
- ✅ Emails illimités après
- ✅ Support email illimité

## Dépannage

**"Module not found: @emailjs/browser"**
→ Lancez: `npm install @emailjs/browser`

**"Message non envoyé"**
→ Vérifiez que Service ID et Template ID sont corrects
→ Vérifiez que Public Key est bon
→ Vérifiez l'email dans "to_email"

**Email arrive en Spam**
→ C'est normal avec EmailJS gratuit, vérifiez Spam si besoin
