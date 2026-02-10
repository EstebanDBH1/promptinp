import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PageTransition } from '../components/PageTransition';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col font-mono text-zinc-300 selection:bg-orange-500/30">
      <Navbar />

      <PageTransition className="flex-1 w-full max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">política de privacidad</h1>
        <p className="text-sm text-zinc-500 mb-12">última actualización: febrero 2026</p>

        <div className="space-y-12 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. recopilación de información</h2>
            <p className="mb-4">
              En vault.ai, valoramos tu privacidad. Recopilamos datos mínimos necesarios para el funcionamiento del servicio:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-400">
              <li><strong className="text-zinc-300">Datos de Cuenta:</strong> Nombre y correo electrónico proporcionados durante el registro (vía Supabase Auth).</li>
              <li><strong className="text-zinc-300">Datos de Pago:</strong> Procesados de forma segura a través de Paddle. vault.ai no almacena ni tiene acceso a tu información financiera completa (tarjetas de crédito).</li>
              <li><strong className="text-zinc-300">Uso de la Plataforma:</strong> Prompts guardados en favoritos e historial de acceso para mejorar tu experiencia.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. uso de los datos</h2>
            <p className="mb-4">
              Toda la información recopilada se utiliza exclusivamente para:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-400">
              <li>Gestionar tu suscripción y acceso a la biblioteca VIP.</li>
              <li>Enviar actualizaciones críticas sobre el servicio o nuevos lanzamientos de prompts.</li>
              <li>Prevenir el abuso de la plataforma y la piratería de contenidos.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. cookies y tecnologías de rastreo</h2>
            <p className="mb-4">
              Utilizamos cookies esenciales para mantener tu sesión iniciada y cookies analíticas anónimas para entender cómo los usuarios interactúan con nuestra biblioteca, permitiéndonos optimizar la relevancia de nuestros prompts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. seguridad de los datos</h2>
            <p className="mb-4">
              Implementamos protocolos de seguridad avanzados (SSL/TLS) para proteger la transferencia de datos. Sin embargo, recuerda que ninguna transmisión en internet es 100% segura. Recomendamos usar contraseñas robustas y no compartirlas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. tus derechos</h2>
            <p className="mb-4">
              Como usuario, tienes derecho a acceder, rectificar o solicitar la eliminación de tus datos personales en cualquier momento. Puedes realizar estas gestiones desde tu panel de ajustes o contactándonos directamente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. contacto</h2>
            <p className="mb-4">
              Para cualquier duda sobre tu privacidad en vault.ai, puedes escribirnos a <span className="text-orange-500 underline">support@vault.ai</span>.
            </p>
          </section>
        </div>
      </PageTransition>

      <Footer />
    </div>
  );
};
