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
        <p className="text-sm text-zinc-500 mb-12">última actualización: octubre 2023</p>

        <div className="space-y-12 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. recopilación de datos</h2>
            <p className="mb-4">recopilamos la siguiente información:</p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-400">
              <li><strong className="text-zinc-300">información de cuenta:</strong> correo electrónico, nombre de usuario y contraseña cifrada.</li>
              <li><strong className="text-zinc-300">datos de transacción:</strong> historial de compras y ventas (no almacenamos números completos de tarjetas de crédito; utilizamos stripe/paypal).</li>
              <li><strong className="text-zinc-300">uso del sitio:</strong> métricas de interacción, prompts vistos y búsquedas realizadas.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. uso de la información</h2>
            <p className="mb-4">
              utilizamos tus datos para procesar transacciones, mejorar nuestros algoritmos de recomendación de prompts,
              y prevenir fraudes. no vendemos tus datos personales a terceros.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. cookies y rastreo</h2>
            <p className="mb-4">
              utilizamos cookies técnicas para mantener tu sesión activa y cookies analíticas para entender cómo se usa
              nuestra plataforma. puedes desactivar las cookies en tu navegador, pero algunas funciones del sitio podrían fallar.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. seguridad</h2>
            <p className="mb-4">
              implementamos medidas de seguridad estándar de la industria (cifrado ssl, hashing de contraseñas) para proteger tus datos.
              sin embargo, ningún método de transmisión por internet es 100% seguro.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. tus derechos</h2>
            <p className="mb-4">
              tienes derecho a acceder, corregir o eliminar tus datos personales. para ejercer estos derechos,
              contáctanos en privacy@promptbank.ai.
            </p>
          </section>
        </div>
      </PageTransition>

      <Footer />
    </div>
  );
};
