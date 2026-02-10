import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PageTransition } from "../components/PageTransition";

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col font-mono text-zinc-300 selection:bg-orange-500/30">
      <Navbar />

      <PageTransition className="flex-1 w-full max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          términos de servicio
        </h1>
        <p className="text-sm text-zinc-500 mb-12">
          última actualización: febrero 2026
        </p>

        <div className="space-y-12 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              1. aceptación de los términos
            </h2>
            <p className="mb-4">
              Este sitio web y sus servicios son operados bajo el nombre
              comercial Alpacka AI por <strong>Proyecto SaaS</strong>. Al
              acceder y utilizar este servicio, aceptas estar legalmente
              vinculado por estos términos.
            </p>
            <p className="mb-4 text-zinc-400">
              Nuestros servicios de pedido son gestionados por Paddle. Paddle es
              el Vendedor Registrado (Merchant of Record) de todos nuestros
              pedidos. Paddle proporciona asistencia con las consultas
              relacionadas con las devoluciones y los pagos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              2. licencia de uso
            </h2>
            <p className="mb-4">
              Al adquirir una suscripción, <strong>Proyecto SaaS</strong> te
              otorga una licencia limitada, no exclusiva e intransferible para
              utilizar los prompts contenidos en nuestra biblioteca para tus
              proyectos personales o comerciales.
            </p>
            <p className="text-zinc-400">
              <strong className="text-zinc-300">Prohibiciones:</strong> Queda
              estrictamente prohibida la redistribución, reventa o sublicencia
              de los prompts en plataformas competidoras.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              3. propiedad intelectual
            </h2>
            <p className="mb-4">
              Todos los contenidos de la plataforma son propiedad de{" "}
              <strong>Proyecto SaaS</strong>. El uso de nuestra biblioteca no
              transfiere la propiedad intelectual de las instrucciones, solo un
              derecho de uso.
            </p>
          </section>

          <section id="refund-policy">
            <h2 className="text-xl font-bold text-white mb-4">
              4. política de reembolsos
            </h2>
            <p className="mb-4">
              En cumplimiento con las normativas de protección al consumidor y
              las políticas de nuestro socio de pagos Paddle, ofrecemos un
              periodo de reembolso claro:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                Los usuarios tienen derecho a solicitar un reembolso completo
                dentro de los <strong>14 días</strong> posteriores a la compra
                inicial.
              </li>
              <li>
                Para solicitar un reembolso, puede contactar con nuestro soporte
                o directamente a través de los canales de atención al cliente de
                Paddle.
              </li>
              <li>
                Una vez procesado el reembolso, el acceso a los contenidos
                premium será revocado inmediatamente.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              5. limitación de responsabilidad
            </h2>
            <p className="mb-4">
              <strong>Proyecto SaaS</strong> no garantiza resultados idénticos
              en modelos de lenguaje de terceros (como GPT-4 o Claude) debido a
              su naturaleza probabilística.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. contacto</h2>
            <p className="mb-4">
              Si tiene preguntas sobre estos términos, puede contactarnos en el
              correo de soporte: eban112001@gamil.com y través de
              Paddle.com.
            </p>
          </section>
        </div>
      </PageTransition>

      <Footer />
    </div>
  );
};
