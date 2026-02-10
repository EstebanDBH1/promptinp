import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PageTransition } from '../components/PageTransition';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col font-mono text-zinc-300 selection:bg-orange-500/30">
      <Navbar />

      <PageTransition className="flex-1 w-full max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">términos de servicio</h1>
        <p className="text-sm text-zinc-500 mb-12">última actualización: febrero 2026</p>

        <div className="space-y-12 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. aceptación de los términos</h2>
            <p className="mb-4">
              Al acceder y utilizar vault.ai ("el servicio"), aceptas estar legalmente vinculado por estos términos.
              vault.ai es una biblioteca de prompts exclusiva. El acceso a los contenidos premium está sujeto al pago de la suscripción correspondiente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. licencia de uso</h2>
            <p className="mb-4">
              Al adquirir una suscripción, vault.ai te otorga una licencia limitada, no exclusiva e intransferible para utilizar los prompts contenidos en nuestra biblioteca para tus proyectos personales o comerciales.
            </p>
            <p className="text-zinc-400">
              <strong className="text-zinc-300">Prohibiciones:</strong> Queda estrictamente prohibida la redistribución, reventa, sublicencia o publicación de los prompts de vault.ai en repositorios públicos, foros o plataformas competidoras. La violación de esta cláusula resultará en la terminación inmediata de la cuenta sin derecho a reembolso.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. propiedad intelectual</h2>
            <p className="mb-4">
              Todos los prompts, metodologías de ingeniería, y contenidos de la plataforma son propiedad de vault.ai o sus colaboradores licenciantes. El uso de nuestra biblioteca no transfiere la propiedad intelectual de las instrucciones, solo un derecho de uso para generar resultados en modelos de IA de terceros.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. política de reembolsos</h2>
            <p className="mb-4">
              Debido a la naturaleza digital e instantánea de nuestro contenido, todas las ventas son finales. Al realizar el pago, obtienes acceso inmediato a propiedad intelectual valiosa. Solo se considerarán reembolsos en casos de fallos técnicos demostrables que impidan el acceso al servicio por más de 48 horas consecutivas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. limitación de responsabilidad</h2>
            <p className="mb-4">
              vault.ai no garantiza que los prompts generen resultados idénticos en cada ejecución, dado que los modelos de lenguaje (GPT-4, Claude, etc.) son probabilísticos. No somos responsables del mal uso de la IA ni de las consecuencias derivadas de los resultados generados por modelos externos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. modificaciones</h2>
            <p className="mb-4">
              Nos reservamos el derecho de actualizar estos términos en cualquier momento. El uso continuado de la plataforma tras dichos cambios constituye la aceptación de los nuevos términos.
            </p>
          </section>
        </div>
      </PageTransition>

      <Footer />
    </div>
  );
};
