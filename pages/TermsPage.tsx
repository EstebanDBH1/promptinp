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
              Nuestros servicios de pago y suscripción son procesados por{" "}
              <strong className="text-zinc-300">PayPal</strong>. Al suscribirte,
              también aceptas los{" "}
              <a
                href="https://www.paypal.com/es/webapps/mpp/ua/useragreement-full"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400 underline"
              >
                Términos de Servicio de PayPal
              </a>{" "}
              y su{" "}
              <a
                href="https://www.paypal.com/es/webapps/mpp/ua/privacy-full"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400 underline"
              >
                Política de Privacidad
              </a>
              . PayPal proporciona asistencia con consultas relacionadas con
              pagos, reembolsos y facturación.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              2. suscripciones y pagos
            </h2>
            <p className="mb-4">
              Las suscripciones se renuevan automáticamente cada mes a través de
              PayPal hasta que decidas cancelarlas. Al suscribirte:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4 text-zinc-400">
              <li>
                Autorizas a PayPal a cobrar el importe de la suscripción de
                forma recurrente.
              </li>
              <li>
                Puedes cancelar tu suscripción en cualquier momento desde tu
                perfil o directamente en{" "}
                <a
                  href="https://www.paypal.com/myaccount/autopay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-400 underline"
                >
                  PayPal
                </a>
                .
              </li>
              <li>
                Al cancelar, mantendrás acceso hasta el final del período de
                facturación actual.
              </li>
              <li>
                No se realizarán cargos adicionales después de la cancelación.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              3. licencia de uso
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
              4. propiedad intelectual
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
              5. política de reembolsos
            </h2>
            <p className="mb-4">
              En cumplimiento con las normativas de protección al consumidor y
              las políticas de PayPal, ofrecemos un periodo de reembolso claro:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                Los usuarios tienen derecho a solicitar un reembolso completo
                dentro de los <strong>14 días</strong> posteriores a la compra
                inicial.
              </li>
              <li>
                Para solicitar un reembolso, puedes contactar con nuestro
                soporte en{" "}
                <span className="text-orange-500">eban112001@gmail.com</span> o
                directamente a través del{" "}
                <a
                  href="https://www.paypal.com/disputes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-400 underline"
                >
                  Centro de Resoluciones de PayPal
                </a>
                .
              </li>
              <li>
                Una vez procesado el reembolso, el acceso a los contenidos
                premium será revocado inmediatamente.
              </li>
              <li>
                Los reembolsos se procesan según los{" "}
                <a
                  href="https://www.paypal.com/es/webapps/mpp/ua/useragreement-full"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-400 underline"
                >
                  términos de PayPal
                </a>{" "}
                y pueden tardar de 5 a 10 días hábiles en reflejarse en tu
                cuenta.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              6. limitación de responsabilidad
            </h2>
            <p className="mb-4">
              <strong>Proyecto SaaS</strong> no garantiza resultados idénticos
              en modelos de lenguaje de terceros (como GPT-4 o Claude) debido a
              su naturaleza probabilística.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              7. modificaciones del servicio
            </h2>
            <p className="mb-4">
              Nos reservamos el derecho de modificar, suspender o descontinuar
              cualquier aspecto del servicio en cualquier momento. Los cambios
              significativos en los precios o términos se comunicarán con al
              menos 30 días de anticipación.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">8. contacto</h2>
            <p className="mb-4">
              Si tienes preguntas sobre estos términos, puedes contactarnos en:{" "}
              <span className="text-orange-500 underline">
                eban112001@gmail.com
              </span>
            </p>
            <p className="text-zinc-400 text-xs">
              Para consultas relacionadas con pagos y facturación, contacta
              directamente con{" "}
              <a
                href="https://www.paypal.com/es/smarthelp/home"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400 underline"
              >
                Soporte de PayPal
              </a>
              .
            </p>
          </section>
        </div>
      </PageTransition>

      <Footer />
    </div>
  );
};
