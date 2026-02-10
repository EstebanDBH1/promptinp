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
        <p className="text-sm text-zinc-500 mb-12">última actualización: octubre 2023</p>

        <div className="space-y-12 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. aceptación de los términos</h2>
            <p className="mb-4">
              al acceder y utilizar promptbank.ai ("el servicio"), aceptas estar legalmente vinculado por estos términos.
              si no aceptas estos términos, no debes usar nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. descripción del servicio</h2>
            <p className="mb-4">
              promptbank.ai es un mercado digital que permite a los usuarios comprar, vender y compartir instrucciones de texto
              ("prompts") optimizadas para modelos de lenguaje grande (llms) y generadores de imágenes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. propiedad intelectual</h2>
            <ul className="list-disc pl-5 space-y-2 text-zinc-400">
              <li>
                <strong className="text-zinc-300">vendedores:</strong> retienen la propiedad intelectual de los prompts que suben,
                pero otorgan a promptbank una licencia mundial, no exclusiva y libre de regalías para distribuir dicho contenido.
              </li>
              <li>
                <strong className="text-zinc-300">compradores:</strong> adquieren una licencia de uso personal o comercial (según se especifique)
                para utilizar el prompt, pero no para revenderlo o redistribuirlo como un activo independiente.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. conducta prohibida</h2>
            <p className="mb-4">se prohíbe estrictamente:</p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-400">
              <li>subir prompts diseñados para generar contenido ilegal, dañino, o sexualmente explícito no consensuado.</li>
              <li>intentar realizar ingeniería inversa de la plataforma.</li>
              <li>usar bots o scrapers para recopilar datos de nuestra base de datos.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. limitación de responsabilidad</h2>
            <p className="mb-4">
              el servicio se proporciona "tal cual". no garantizamos que los prompts generen resultados específicos,
              dado que los modelos de ia son deterministas y cambian con el tiempo. no somos responsables de alucinaciones
              o salidas ofensivas generadas por modelos de terceros usando nuestros prompts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. pagos y reembolsos</h2>
            <p className="mb-4">
              las transacciones son finales. dado que los productos digitales son irrevocables una vez revelados,
              solo ofrecemos reembolsos si el prompt es demostrablemente defectuoso o engañoso según nuestra discreción.
            </p>
          </section>
        </div>
      </PageTransition>

      <Footer />
    </div>
  );
};
