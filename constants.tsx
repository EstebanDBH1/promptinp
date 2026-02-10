import { Zap, Bot, Leaf, Terminal, Sparkles, Brain, Code, PenTool, Image as ImageIcon, MessageSquare, Search, Database } from 'lucide-react';
import { PromptProfile, Feature, Task, Step, PricingPlan } from './types';

export const PROMPTS: PromptProfile[] = [];

export const FEATURES: Feature[] = [
  {
    id: '1',
    icon: Sparkles,
    title: 'Bibliotecas VIP',
    description: 'Prompts exclusivos que no encontrarás en ningún foro público o repositorio gratuito.',
  },
  {
    id: '2',
    icon: Zap,
    title: 'Resultados Inmediatos',
    description: 'Instrucciones diseñadas para obtener la respuesta perfecta al primer intento.',
  },
  {
    id: '3',
    icon: Brain,
    title: 'Ingeniería Inversa',
    description: 'Cada prompt ha sido refinado con técnicas de CoT y Few-Shot para máxima precisión.',
  },
];

export const TASKS: Task[] = [
  { id: '1', label: 'Ingeniería', icon: '💻' },
  { id: '2', label: 'Marketing', icon: '✍️' },
  { id: '3', label: 'Imagen', icon: '🎨' },
  { id: '4', label: 'Código', icon: '⚛️' },
  { id: '5', label: 'Carrera', icon: '🚀' },
  { id: '6', label: 'Negocios', icon: '📈' },
  { id: '7', label: 'Legal', icon: '⚖️' },
  { id: '8', label: 'Academia', icon: '🎓' },
  { id: '9', label: 'Creatividad', icon: '💡' },
  { id: '10', label: 'Escritura', icon: '📝' },
  { id: '11', label: 'Social Media', icon: '📱' },
  { id: '12', label: 'Data Analysis', icon: '📊' },
];

export const STEPS: Step[] = [
  {
    id: 1,
    title: 'Explora la Colección',
    description: 'Filtra por categoría: desde marketing viral hasta desarrollo de software complejo.',
  },
  {
    id: 2,
    title: 'Extrae el Código',
    description: 'Copia el prompt optimizado para el modelo que estés usando (GPT-4, Claude 3.5, etc).',
  },
  {
    id: 3,
    title: 'Pega y Domina',
    description: 'Inserta la instrucción en tu chat y observa cómo la IA eleva su nivel de respuesta.',
  },
  {
    id: 4,
    title: 'Ahorra Horas de Trabajo',
    description: 'Elimina el "ensayo y error". Obtén resultados profesionales en segundos.',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    paddlePriceId: 'pri_01kgqdp514bf45kjd1rq39yx0h',
    name: 'Explorador',
    price: '$0',
    period: 'siempre',
    description: 'Acceso limitado a nuestra biblioteca base.',
    features: [
      '3 prompts premium al día',
      'Acceso a categorías básicas',
      'Actualizaciones mensuales',
      'Soporte comunitario'
    ],
    buttonText: 'empezar gratis',
    variant: 'outline'
  },
  {
    id: 'pro',
    paddlePriceId: 'pri_01kgqd8cxfkth64xv64d50awpy',
    name: 'Pase Infinito',
    price: '$19',
    period: 'mes',
    description: 'El estándar de oro para profesionales de la IA.',
    features: [
      'Acceso total a +1,000 prompts',
      'Nuevos prompts VIP cada semana',
      'Biblioteca privada de favoritos',
      'Filtros de búsqueda avanzada',
      'Soporte prioritario 1-on-1'
    ],
    buttonText: 'obtener acceso total',
    isPopular: true,
    variant: 'primary'
  },
  {
    id: 'team',
    paddlePriceId: 'pri_01kgqdn9h07nxe0hvfryfdrk1x',
    name: 'Agency Hub',
    price: '$99',
    period: 'mes',
    description: 'Para equipos que escalan con IA.',
    features: [
      'Hasta 10 licencias de acceso',
      'Prompts personalizados a medida',
      'Dashboard de equipo',
      'Derechos de uso comercial extendidos',
      'Account Manager dedicado'
    ],
    buttonText: 'contacto para equipos',
    variant: 'white'
  }
];