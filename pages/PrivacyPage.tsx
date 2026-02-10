import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PageTransition } from "../components/PageTransition";

export const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col font-mono text-zinc-300 selection:bg-orange-500/30">
      <Navbar />

      <PageTransition className="flex-1 w-full max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          política de privacidad
        </h1>
        <p className="text-sm text-zinc-500 mb-12">
          última actualización: febrero 2026
        </p>

        <div className="space-y-12 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              1. responsable del tratamiento
            </h2>
            <p className="mb-4">
              Alpacka AI es un servicio operado por{" "}
              <strong>Proyecto SaaS</strong>. Nos comprometemos a proteger tu
              privacidad y a tratar tus datos personales de acuerdo con las
              normativas internacionales de protección de datos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              2. recopilación de información
            </h2>
            <p className="mb-4">
              Recopilamos los datos mínimos necesarios para el funcionamiento
              del servicio:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-400">
              <li>
                <strong className="text-zinc-300">Datos de Cuenta:</strong>{" "}
                Correo electrónico y nombre de usuario gestionados de forma
                segura a través de nuestros proveedores de autenticación.
              </li>
              <li>
                <strong className="text-zinc-300">Datos de Pago:</strong> Los
                pagos son procesados externamente por <strong>Paddle</strong>.
                Proyecto SaaS no almacena ni tiene acceso a los datos de tu
                tarjeta de crédito o información bancaria sensible. Paddle actúa
                como nuestro responsable de tratamiento para la facturación.
              </li>
              <li>
                <strong className="text-zinc-300">Uso del Servicio:</strong>{" "}
                Registro técnico de acceso y preferencias (prompts favoritos)
                para garantizar la continuidad del servicio.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              3. finalidad del tratamiento
            </h2>
            <p className="mb-4">Utilizamos tus datos para:</p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-400">
              <li>Proporcionar acceso a la biblioteca de Alpacka AI.</li>
              <li>
                Procesar transacciones y gestionar suscripciones a través de
                Paddle.
              </li>
              <li>
                Cumplir con obligaciones legales de facturación y prevención del
                fraude.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              4. cookies y rastreo
            </h2>
            <p className="mb-4">
              Utilizamos cookies esenciales para mantener tu sesión activa y
              cookies de análisis para mejorar nuestra oferta de contenidos.
              Puedes gestionar tus preferencias de cookies desde la
              configuración de tu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              5. seguridad y retención
            </h2>
            <p className="mb-4">
              Tus datos se almacenan de forma cifrada mediante protocolos
              SSL/TLS. Mantendremos tu información personal solo mientras sea
              necesario para prestar el servicio o para cumplir con
              requerimientos legales (como registros fiscales de ventas en
              Paddle).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              6. tus derechos (GDPR/RGPD)
            </h2>
            <p className="mb-4">
              Tienes derecho a acceder, rectificar, portar o solicitar la
              eliminación de tus datos. Para ejercer estos derechos o para
              cualquier consulta sobre tu privacidad en el contexto de{" "}
              <strong>Proyecto SaaS</strong>, puedes contactarnos directamente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">7. contacto</h2>
            <p className="mb-4">
              Si tienes dudas sobre esta política, escríbenos a:{" "}
              <span className="text-orange-500 underline">
                eban112001@gmail.com
              </span>
              .
            </p>
          </section>
        </div>
      </PageTransition>

      <Footer />
    </div>
  );
};
