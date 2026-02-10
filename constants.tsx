import { Zap, Bot, Leaf, Terminal, Sparkles, Brain, Code, PenTool, Image as ImageIcon, MessageSquare, Search, Database } from 'lucide-react';
import { PromptProfile, Feature, Task, Step, PricingPlan } from './types';

export const PROMPTS: PromptProfile[] = [
  {
    id: '1',
    title: 'Arquitecto de Software',
    author: '@dev_master',
    category: 'Ingeniería',
    modelIcon: '💻',
    tags: ['Python', 'System Design', '+50k'],
    price: '$5.00',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
    description: 'Genera diagramas de arquitectura escalables y documentación técnica detallada basada en requerimientos vagos. Ideal para System Design Interviews.'
  },
  {
    id: '2',
    title: 'SEO Blog Writer Pro',
    author: '@content_king',
    category: 'Marketing',
    modelIcon: '✍️',
    tags: ['SEO', 'Long-form', 'GPT-4'],
    price: 'Gratis',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka',
    description: 'Crea artículos de blog de +2000 palabras optimizados para SEO, con estructura H2/H3, keywords integradas y tono humano indetectable.'
  },
  {
    id: '3',
    title: 'Midjourney Photo V6',
    author: '@art_vandelay',
    category: 'Imagen',
    modelIcon: '🎨',
    tags: ['Realism', 'Lighting', 'Film'],
    price: '$2.99',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob',
    description: 'Prompt maestro para fotografía fotorrealista. Controla iluminación cinemática, tipo de lente, ISO y composición con precisión milimétrica.'
  },
  {
    id: '4',
    title: 'Analista de Datos SQL',
    author: '@data_wizard',
    category: 'Data',
    modelIcon: '📊',
    tags: ['SQL', 'Pandas', 'Viz'],
    price: '$9.99',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dora',
    description: 'Convierte preguntas en lenguaje natural a queries SQL complejos optimizados. Explica la lógica y sugiere índices para mejorar performance.'
  },
  {
    id: '5',
    title: 'Asistente Legal',
    author: '@lex_ai',
    category: 'Legal',
    modelIcon: '⚖️',
    tags: ['Contratos', 'Revisión', 'ES'],
    price: '$15.00',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jack',
    description: 'Analiza contratos en busca de cláusulas abusivas y riesgos potenciales. Redacta términos legales formales adaptados a la legislación local.'
  },
  {
    id: '6',
    title: 'React Component Gen',
    author: '@frontend_god',
    category: 'Código',
    modelIcon: '⚛️',
    tags: ['React', 'Tailwind', 'TS'],
    price: '$4.50',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Milo',
    description: 'Crea componentes React modernos con Tailwind CSS, totalmente tipados en TypeScript, accesibles y listos para producción.'
  },
  {
    id: '7',
    title: 'Email Copywriter B2B',
    author: '@sales_guru',
    category: 'Marketing',
    modelIcon: '📧',
    tags: ['Cold Email', 'Sales', 'B2B'],
    price: 'Gratis',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zoe',
    description: 'Secuencias de cold email para B2B que aumentan la tasa de respuesta un 300%. Personalización dinámica basada en la industria del cliente.'
  },
  {
    id: '8',
    title: 'Profesor de Física',
    author: '@einstein_jr',
    category: 'Educación',
    modelIcon: '🎓',
    tags: ['Física', 'Tutoría', 'STEM'],
    price: '$2.00',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Albert',
    description: 'Explica conceptos complejos de física cuántica y relatividad usando analogías simples. Genera ejercicios paso a paso.'
  },
  {
    id: '9',
    title: 'Traductor Literario',
    author: '@polyglot_mind',
    category: 'Traducción',
    modelIcon: '🌍',
    tags: ['EN-ES', 'Literario', 'Nuance'],
    price: '$3.50',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
    description: 'Traducción literaria inglés-español que preserva el tono, la voz del autor y los matices culturales. No suena a traducción automática.'
  },
  {
    id: '10',
    title: 'Creador de Logos',
    author: '@design_bot',
    category: 'Imagen',
    modelIcon: '🎨',
    tags: ['Dall-E 3', 'Minimal', 'Vector'],
    price: '$1.99',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Leo',
    description: 'Genera logos minimalistas y vectoriales listos para usar. Especifica paleta de colores, símbolos y estilo tipográfico.'
  },
  {
    id: '11',
    title: 'Consultor de Ciberseguridad',
    author: '@sec_ops',
    category: 'Ingeniería',
    modelIcon: '🔒',
    tags: ['Security', 'Audit', 'Pentest'],
    price: '$12.00',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hacker',
    description: 'Simula un experto en seguridad para auditar código o configuraciones de red. Identifica vulnerabilidades OWASP Top 10.'
  },
  {
    id: '12',
    title: 'Coach de Negociación',
    author: '@deal_closer',
    category: 'Negocios',
    modelIcon: '💼',
    tags: ['Negociación', 'Soft Skills', 'Sales'],
    price: '$5.50',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Boss',
    description: 'Simula escenarios de negociación difíciles. Te da feedback en tiempo real sobre tu tono, argumentos y estrategia de cierre.'
  }
];

export const FEATURES: Feature[] = [
  {
    id: '1',
    icon: Sparkles,
    title: 'calidad verificada',
    description: 'prompts probados contra alucinaciones. funcionan o te devolvemos tus tokens.',
  },
  {
    id: '2',
    icon: Terminal,
    title: 'formato json/mcp',
    description: 'copia estructuras listas para agentes. integración directa.',
  },
  {
    id: '3',
    icon: Brain,
    title: 'contexto infinito',
    description: 'técnicas avanzadas de chain-of-thought y few-shot learning incluidas.',
  },
];

export const TASKS: Task[] = [
  { id: '1', label: 'copywriting', icon: '📝' },
  { id: '2', label: 'código', icon: '💻' },
  { id: '3', label: 'imágenes', icon: '🎨' },
  { id: '4', label: 'análisis', icon: '📈' },
  { id: '5', label: 'traducción', icon: '🌍' },
  { id: '6', label: 'seo', icon: '🔍' },
  { id: '7', label: 'jurídico', icon: '⚖️' },
  { id: '8', label: 'académico', icon: '🎓' },
  { id: '9', label: 'email', icon: '📧' },
  { id: '10', label: 'midjourney', icon: '🖼️' },
  { id: '11', label: 'resúmenes', icon: '📋' },
  { id: '12', label: 'creatividad', icon: '💡' },
];

export const STEPS: Step[] = [
  {
    id: 1,
    title: 'busca tu necesidad',
    description: 'código, marketing, arte. tenemos la instrucción perfecta.',
  },
  {
    id: 2,
    title: 'copia el prompt',
    description: 'optimizado para GPT-4, Claude 3, y Llama 3.',
  },
  {
    id: 3,
    title: 'pega en tu modelo',
    description: 'sin configuración extra. resultados inmediatos.',
  },
  {
    id: 4,
    title: 'mejora tus resultados',
    description: 'ahorra horas de prueba y error. sé un ingeniero de prompts.',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    paddlePriceId: 'pri_01kgqdp514bf45kjd1rq39yx0h',
    name: 'Hobby',
    price: '$0',
    period: 'para siempre',
    description: 'Para experimentadores y curiosos.',
    features: [
      'Acceso a 5 prompts gratis/día',
      'Comunidad pública',
      'Formato texto básico',
      'Soporte por email estándar'
    ],
    buttonText: 'comenzar gratis',
    variant: 'outline'
  },
  {
    id: 'pro',
    paddlePriceId: 'pri_01kgqd8cxfkth64xv64d50awpy',
    name: 'Ingeniero',
    price: '$19',
    period: 'mes',
    description: 'Para constructores serios y devs.',
    features: [
      'Prompts ilimitados',
      'Acceso API RESTful',
      'Formatos JSON y MCP',
      'Biblioteca privada',
      'Soporte prioritario'
    ],
    buttonText: 'mejorar plan',
    isPopular: true,
    variant: 'primary'
  },
  {
    id: 'team',
    paddlePriceId: 'pri_01kgqdn9h07nxe0hvfryfdrk1x',
    name: 'Equipo',
    price: '$99',
    period: 'mes',
    description: 'Para agencias y startups.',
    features: [
      '5 licencias incluidas',
      'Panel de administración',
      'Prompts compartidos de equipo',
      'Facturación centralizada',
      'Soporte dedicado 24/7'
    ],
    buttonText: 'contactar ventas',
    variant: 'white'
  }
];