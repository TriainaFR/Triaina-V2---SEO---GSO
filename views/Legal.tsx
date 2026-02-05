import React from 'react';
import { SEO } from '../components/SEO';

export const Legal: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4 min-h-screen max-w-4xl mx-auto relative z-10">
      <SEO 
        title="Mentions Légales" 
        description="Mentions légales de la société TRIAINA, agence SEO & GSO." 
      />

      <div className="mb-12 border-b border-slate-400 pb-8 animate-fade-in-up">
        <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-2">
            MENTIONS LÉGALES
        </h1>
        <p className="font-mono text-blue-700 text-xs tracking-widest uppercase">
            // Informations Juridiques
        </p>
      </div>

      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 text-slate-700 leading-relaxed space-y-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        
        <p className="text-sm">
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site internet de la société TRIAINA l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
        </p>

        <section>
            <h2 className="text-xl font-display font-bold text-slate-900 mb-4">1. Édition du site</h2>
            <p className="mb-4">Le présent site est édité par la société TRIAINA, Société par Actions Simplifiée (SAS) au capital social de 1 000,00 euros.</p>
            <ul className="list-none space-y-2 text-sm font-mono bg-slate-50 p-6 rounded-lg border border-slate-100">
                <li><strong>Siège social :</strong> 60 RUE FRANCOIS IER, 75008 PARIS</li>
                <li><strong>Immatriculation :</strong> Inscrite au RCS de Paris sous le numéro 999 402 654</li>
                <li><strong>SIRET :</strong> 999 402 654 00019</li>
                <li><strong>Numéro de TVA Intracommunautaire :</strong> FR54999402654</li>
                <li><strong>Code NAF/APE :</strong> 70.22Z (Conseil pour les affaires et autres conseils de gestion)</li>
            </ul>
            <div className="mt-4">
                <p><strong>Nous contacter :</strong></p>
                <p>Par email : <a href="mailto:lucas@triaina.fr" className="text-blue-600 hover:underline">lucas@triaina.fr</a></p>
                <p>Par téléphone : 06 14 91 62 95</p>
            </div>
        </section>

        <section>
            <h2 className="text-xl font-display font-bold text-slate-900 mb-4">2. Responsable de la publication</h2>
            <p>Le Directeur de la publication est Monsieur Lucas LECOQ-PELLIZZON, en qualité de Président de la société TRIAINA.</p>
        </section>

        <section>
            <h2 className="text-xl font-display font-bold text-slate-900 mb-4">3. Hébergement</h2>
            <p>Le site est hébergé par la société OVH SAS.</p>
            <p className="mt-2 text-sm">Adresse : 2 rue Kellermann - 59100 Roubaix - France</p>
            <p className="text-sm">Site web : <a href="https://www.ovhcloud.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">www.ovhcloud.com</a></p>
        </section>

        <section>
            <h2 className="text-xl font-display font-bold text-slate-900 mb-4">4. Propriété intellectuelle et contrefaçons</h2>
            <p className="mb-4">La société TRIAINA est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons et logiciels.</p>
            <p className="mb-4">Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de la société TRIAINA.</p>
            <p>Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>
        </section>

        <section>
            <h2 className="text-xl font-display font-bold text-slate-900 mb-4">5. Description des services fournis</h2>
            <p className="mb-4">Le site a pour objet de fournir une information concernant l’ensemble des activités de la société. TRIAINA est spécialisée dans :</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                <li>Le conseil en marketing ;</li>
                <li>La prestation de services en marketing digital ;</li>
                <li>Le référencement (SEO, GSO) ;</li>
                <li>L'activité de pôle média.</li>
            </ul>
            <p>La société s’efforce de fournir sur le site des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des oublis, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.</p>
        </section>

        <section>
            <h2 className="text-xl font-display font-bold text-slate-900 mb-4">6. Données personnelles (RGPD)</h2>
            <p className="mb-4">Conformément au Règlement Général sur la Protection des Données (RGPD), l'utilisateur dispose d’un droit d’accès, de rectification et d’opposition aux données personnelles le concernant.</p>
            <p className="mb-4">Pour exercer ce droit, l'utilisateur peut adresser sa demande par email à : <a href="mailto:lucas@triaina.fr" className="text-blue-600 hover:underline">lucas@triaina.fr</a>.</p>
            <p>Aucune information personnelle de l'utilisateur du site n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers.</p>
        </section>

        <section>
            <h2 className="text-xl font-display font-bold text-slate-900 mb-4">7. Limitations de responsabilité</h2>
            <p className="mb-4">La société TRIAINA ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site.</p>
            <p>Des espaces interactifs (possibilité de poser des questions dans l’espace contact) peuvent être à la disposition des utilisateurs. La société se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France.</p>
        </section>

        <section>
            <h2 className="text-xl font-display font-bold text-slate-900 mb-4">8. Droit applicable et attribution de juridiction</h2>
            <p>Tout litige en relation avec l’utilisation du site est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de PARIS.</p>
        </section>

      </div>
    </div>
  );
};
