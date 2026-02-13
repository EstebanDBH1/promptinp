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
              normativas internacionales de protección de datos (GDPR/RGPD).
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
                segura a través de Supabase Auth.
              </li>
              <li>
                <strong className="text-zinc-300">Datos de Pago:</strong> Los
                pagos son procesados externamente por{" "}
                <strong className="text-zinc-300">PayPal</strong>. Proyecto
                SaaS no almacena ni tiene acceso a los datos completos de tu
                tarjeta de crédito o información bancaria sensible. PayPal
                actúa como procesador de pagos independiente y está sujeto a su
                propia{" "}
                <a
                  href="https://www.paypal.com/es/webapps/mpp/ua/privacy-full"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-400 underline"
                >
                  Política de Privacidad
                </a>
                .
              </li>
              <li>
                <strong className="text-zinc-300">
                  Información de Suscripción:
                </strong>{" "}
                Almacenamos el ID de suscripción de PayPal, estado de la
                suscripción, y fechas de facturación para gestionar tu acceso
                al servicio.
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
              3. compartir información con terceros
            </h2>
            <p className="mb-4">
              Compartimos información limitada con los siguientes terceros de
              confianza:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-400">
              <li>
                <strong className="text-zinc-300">PayPal:</strong> Procesador
                de pagos que maneja todas las transacciones financieras. PayPal
                recibe tu información de pago y facturación según sus propios
                términos. Consulta la{" "}
                <a
                  href="https://www.paypal.com/es/webapps/mpp/ua/privacy-full"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-400 underline"
                >
                  Política de Privacidad de PayPal
                </a>{" "}
                para más detalles.
              </li>
              <li>
                <strong className="text-zinc-300">Supabase:</strong>{" "}
                Proveedor de infraestructura que almacena datos de usuario y
                suscripciones de forma cifrada.
              </li>
            </ul>
            <p className="mt-4 text-zinc-400">
              No vendemos ni compartimos tus datos personales con terceros para
              fines de marketing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              4. finalidad del tratamiento
            </h2>
            <p className="mb-4">Utilizamos tus datos para:</p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-400">
              <li>Proporcionar acceso a la biblioteca de Alpacka AI.</li>
              <li>
                Procesar transacciones y gestionar suscripciones a través de
                PayPal.
              </li>
              <li>
                Cumplir con obligaciones legales de facturación y prevención
                del fraude.
              </li>
              <li>
                Comunicarte actualizaciones importantes sobre tu suscripción o
                el servicio.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              5. cookies y rastreo
            </h2>
            <p className="mb-4">
              Utilizamos cookies esenciales para mantener tu sesión activa.
              PayPal también puede utilizar cookies durante el proceso de pago
              según su propia política. Puedes gestionar tus preferencias de
              cookies desde la configuración de tu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              6. seguridad y retención
            </h2>
            <p className="mb-4">
              Tus datos se almacenan de forma cifrada mediante protocolos
              SSL/TLS. Mantendremos tu información personal solo mientras sea
              necesario para prestar el servicio o para cumplir con
              requerimientos legales.
            </p>
            <p className="mb-4 text-zinc-400">
              Los datos de pago son gestionados exclusivamente por PayPal y
              están sujetos a los estándares de seguridad PCI-DSS. No
              almacenamos información completa de tarjetas de crédito en
              nuestros servidores.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              7. tus derechos (GDPR/RGPD)
            </h2>
            <p className="mb-4">
              Tienes derecho a acceder, rectificar, portar o solicitar la
              eliminación de tus datos. Para ejercer estos derechos:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-400">
              <li>
                <strong className="text-zinc-300">
                  Datos en Proyecto SaaS:
                </strong>{" "}
                Contáctanos en{" "}
                <span className="text-orange-500">eban112001@gmail.com</span>
              </li>
              <li>
                <strong className="text-zinc-300">Datos en PayPal:</strong>{" "}
                Gestiona tus datos directamente en tu{" "}
                <a
                  href="https://www.paypal.com/myaccount/privacy/settings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-400 underline"
                >
                  Configuración de Privacidad de PayPal
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              8. transferencias internacionales
            </h2>
            <p className="mb-4 text-zinc-400">
              PayPal puede transferir y procesar tus datos de pago en
              diferentes países. Estas transferencias están protegidas por las
              cláusulas contractuales estándar de la UE y otros mecanismos de
              protección aprobados. Consulta la{" "}
              <a
                href="https://www.paypal.com/es/webapps/mpp/ua/privacy-full"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400 underline"
              >
                Política de Privacidad de PayPal
              </a>{" "}
              para más información.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">9. contacto</h2>
            <p className="mb-4">
              Si tienes dudas sobre esta política, escríbenos a:{" "}
              <span className="text-orange-500 underline">
                eban112001@gmail.com
              </span>
              .
            </p>
            <p className="text-zinc-400 text-xs">
              Para consultas sobre cómo PayPal maneja tus datos de pago,
              contacta directamente con{" "}
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
