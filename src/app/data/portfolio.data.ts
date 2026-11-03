/* =========================================================
   DATOS DEL PORTAFOLIO
   Todo el contenido personal vive aquí. Para personalizar
   el portafolio, se edita SOLO este archivo.
   ========================================================= */

/** Molde de una red social */
export interface SocialLink {
    label :  string;
    icon : string;
    url: string; 
}
/** Molde de los datos personales */
export interface Profile{
    name: string;
    initials: string;
    greeting: string;
    roles: string[];
    bio: string;
    photo: string; 
    cvUrl: string; 
    socials: SocialLink[]
}
/** Tus datos */
export const PROFILE: Profile = {
    name: 'Jhon Emerson Anchayhua',
    initials: 'JEAP',
    greeting: 'Hola K tal, los saluda el terrible DJ',
    roles: [
        'CEO de NVIDIA',
        'Experto BD',
        'DJ Sabatero',
    ],
    bio: 'Construyo APIs REST y aplicaciones web. Me gusta escribir código claro y aprender tecnologías nuevas cada semana.Tengo por hobbie ser DJ ',
    photo: 'foto.jpeg',
    cvUrl: 'cv.pdf',
    socials: [
        { label: 'GitHub', icon: 'bi-github', url: 'https://github.com/GERB-DEVELOPER' },
        { label: 'LinkedIn', icon: 'bi-linkedin', url: 'https://www.linkedin.com/in/giovanni-emilio-ramirez-berrocal-28b5161b8/' },
        { label: 'Correo', icon: 'bi-envelope', url: 'ramirezberrocalgiovanni@gmail.com' },
        { label: 'Whatsapp', icon: 'bi-whatsapp', url: 'ramirezberrocalgiovanni@gmail.com' },
        { label: 'Youtube', icon: 'bi-youtube', url: 'https://www.youtube.com/' },
    ]
};
export interface Highlight{

  icon: string;       // clase de Bootstrap Icons
  title: string;      // título de la tarjeta
  text: string;       // descripción corta
    link: string;       // ruta interna: '/sobre-mi'
   linkText: string;   // texto del enlace 
}
export const HIGHLIGHTS: Highlight[] = [
    {
    icon: 'bi-person',
    title: 'Sobre mí',
    text: 'Experto en Diseño, planos,#D autocad',
    link: '/sobre-mi',
    linkText: 'Conóceme',
},
{
    icon: 'bi-grid',
    title: 'DJ',
    text: 'Trabajos de DJ y Stripper.',
    link: '/proyectos',
    linkText: 'Ver proyectos',
  },
  {
    icon: 'bi-envelope',
    title: 'Contacto para maltrato',
    text: '¿Tienes una propuesta decente o indecente una oportunidad? Escríbeme.',
    link: '/contacto',
    linkText: 'Escríbeme',
  },

  ]