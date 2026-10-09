export type Lang = 'es' | 'en'

const es = {
  meta: {
    title: 'ReNest · Segunda mano sin idas y vueltas',
    description:
      'ReNest es el marketplace de segunda mano donde reservas un artículo y agendas la recogida en un lugar público, en un solo paso. Cochabamba, Arequipa, San Salvador y Utah.',
  },
  numberLocale: 'es',
  skipToContent: 'Saltar al contenido',
  header: {
    home: 'ReNest, ir al inicio',
    nav: { how: 'Cómo funciona', trust: 'Confianza', catalog: 'Catálogo', faq: 'Preguntas' },
    login: 'Ingresar',
    explore: 'Explorar productos',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    language: 'Idioma',
  },
  hero: {
    badge: 'Marketplace de segunda mano · LatAm',
    titleA: 'Segunda mano,',
    titleB: 'sin idas y vueltas.',
    leadBefore: 'En ReNest reservas un artículo y eliges dónde y cuándo recogerlo ',
    leadStrong: 'en un solo paso',
    leadAfter: '. Se encuentran en un lugar público, revisas el producto y pagas en persona.',
    explore: 'Explorar productos',
    sell: 'Vender algo',
    perks: ['Mira sin crear cuenta', 'Sin pagos dentro de la app'],
    phone: {
      confirmed: '¡Reserva confirmada!',
      confirmedSub: 'Es tuyo. Coordina el día exacto por WhatsApp.',
      item: 'Sofá de tres cuerpos gris',
      pickup: 'Punto de recogida',
      place: 'Plaza 14 de Septiembre, frente a la Catedral',
      when: 'Sábado y domingo · 10:00 – 13:00',
      maps: 'Ver en Google Maps',
      verified: 'Vendedor verificado',
      rating: '4,8 · 12 calificaciones',
      whatsapp: 'Escribir por WhatsApp',
    },
    chips: { publicPlace: 'Lugar público', payInPerson: 'Pagas en persona' },
  },
  cities: {
    label: 'Ya disponible en',
    countries: { BO: 'Bolivia', PE: 'Perú', SV: 'El Salvador', US: 'Estados Unidos' },
  },
  problem: {
    overline: 'Por qué ReNest',
    title: 'Comprar usado no debería ser una cadena de mensajes',
    intro:
      'Los grupos de compra y venta funcionan, hasta que hay que coordinar. ReNest convierte esa conversación en una reserva clara.',
    before: 'Antes',
    after: 'Con ReNest',
    pairs: {
      schedule: {
        before: '“¿Sigue disponible?” y veinte mensajes para cuadrar un horario.',
        after: 'El vendedor publica sus horarios. Tú eliges uno al reservar.',
      },
      double: {
        before: 'Dos personas creen que lo apartaron y al final nadie sabe de quién es.',
        after: 'El primero en confirmar se lo lleva. Una reserva, un comprador.',
      },
      place: {
        before: '“Pásame tu dirección”: encuentros en casas de desconocidos.',
        after: 'Siempre en un lugar público: una plaza, un café, un centro comercial.',
      },
    },
  },
  how: {
    overline: 'Cómo funciona',
    title: 'Cuatro pasos, de la foto a la entrega',
    intro:
      'Una misma cuenta sirve para comprar y vender. Eres vendedor en tus publicaciones y comprador en tus reservas.',
    tablist: 'Elige tu rol',
    buyer: {
      label: 'Quiero comprar',
      cta: 'Ver productos',
      steps: {
        explore: {
          title: 'Explora',
          text: 'Busca por nombre o filtra por Muebles, Electrónica y Hogar. No necesitas cuenta para mirar.',
        },
        reserve: {
          title: 'Reserva y agenda',
          text: 'Elige uno de los puntos y horarios del vendedor y confirma. La reserva y la cita quedan listas a la vez.',
        },
        meet: {
          title: 'Encuéntrense',
          text: 'Ves el lugar, los días, el link a Google Maps y el WhatsApp del vendedor para acordar el día exacto.',
        },
        review: {
          title: 'Revisa y califica',
          text: 'Con el artículo en mano, confirma la recepción con un checklist rápido y deja de 1 a 5 estrellas.',
        },
      },
    },
    seller: {
      label: 'Quiero vender',
      cta: 'Publicar un artículo',
      steps: {
        publish: {
          title: 'Publica',
          text: 'Sube de 1 a 3 fotos, título, precio y estado: como nuevo, poco uso o muy usado. Sale al instante.',
        },
        times: {
          title: 'Define tus horarios',
          text: 'Agrega de 1 a 3 puntos de recogida: un lugar público, los días y una franja horaria que te acomode.',
        },
        reserved: {
          title: 'Recibe la reserva',
          text: 'Cuando alguien reserva, el artículo sale del catálogo y ves quién es, su WhatsApp y el punto elegido.',
        },
        handover: {
          title: 'Entrega y suma reputación',
          text: 'Confirma la entrega y la venta queda registrada. Cada calificación construye tu reputación.',
        },
      },
    },
  },
  trust: {
    overline: 'Confianza',
    title: 'Diseñado para que ambos lleguen tranquilos al encuentro',
    intro:
      'No movemos tu dinero: pagas en persona, cuando ves el producto. Lo que sí hacemos es poner reglas claras para todos.',
    features: {
      places: {
        title: 'Solo lugares públicos',
        text: 'Los puntos de recogida son plazas, cafés o centros comerciales. Nunca una dirección particular.',
      },
      verified: {
        title: 'Vendedores verificados',
        text: 'El equipo de ReNest verifica a mano a algunos vendedores, y lo vas a ver en cada publicación.',
      },
      noDouble: {
        title: 'Sin dobles reservas',
        text: 'Si dos personas confirman a la vez, solo una se lo lleva. La otra lo sabe al instante.',
      },
      checklist: {
        title: 'Checklist de recepción',
        text: '¿Coincide con las fotos? ¿Funciona? ¿Trae todo? Lo confirmas al recibir, y puedes reportar lo que quieras.',
      },
      ratings: {
        title: 'Calificaciones reales',
        text: 'Solo quien compró y recibió el artículo puede calificar, una sola vez. Sin reseñas infladas.',
      },
      phone: {
        title: 'Tu número, protegido',
        text: 'El WhatsApp del vendedor solo lo ven usuarios registrados. El tuyo, solo el vendedor de lo que reservaste.',
      },
    },
    lifecycle: {
      overline: 'Cada quien confirma lo suyo',
      title: 'El vendedor confirma la entrega. Tú, la recepción.',
      text: 'Ninguno cierra la operación por el otro. Aunque el vendedor ya haya marcado la entrega, tú sigues pudiendo revisar el artículo, reportar algo y calificar.',
      seller: 'Vendedor',
      sellerStages: ['Activo', 'En proceso', 'Completado'],
      sellerEvents: ['Alguien reserva', 'Confirma la entrega'],
      buyer: 'Comprador',
      buyerStages: ['Agendado', 'Completado'],
      buyerEvents: ['Confirma la recepción'],
      whatsapp: 'Todo lo que haya que hablar, se habla por WhatsApp.',
    },
  },
  catalog: {
    overline: 'Catálogo',
    title: 'Muebles, electrónica y cosas para la casa',
    intro:
      'Cada publicación muestra precio, estado, ciudad y si el vendedor está verificado, para que decidas antes de escribir.',
    filterLabel: 'Filtrar por categoría',
    all: 'Todo',
    categories: { FURNITURE: 'Muebles', ELECTRONICS: 'Electrónica', HOME: 'Hogar' },
    conditions: { LIKE_NEW: 'Como nuevo', GENTLY_USED: 'Poco uso', HEAVILY_USED: 'Muy usado' },
    verified: 'Vendedor verificado',
    titles: {
      sofa: 'Sofá de tres cuerpos gris',
      laptop: 'Laptop Lenovo ThinkPad T480',
      headphones: 'Audífonos Sony WH-1000XM4',
      pots: 'Juego de ollas de acero inoxidable',
      switch: 'Consola Nintendo Switch con dos controles',
      lamp: 'Lámpara de pie de madera',
      chair: 'Silla de escritorio ergonómica',
      coffee: 'Cafetera italiana de 6 tazas',
    },
    disclaimer: 'Ejemplos de publicaciones. Los precios los pone cada vendedor y se pagan en persona.',
    seeAll: 'Ver todo el catálogo',
  },
  faq: {
    overline: 'Preguntas frecuentes',
    title: 'Lo que todos preguntan antes de su primera reserva',
    items: [
      {
        q: '¿Cómo se paga?',
        a: 'En persona, al momento del encuentro. ReNest no procesa pagos ni cobra comisiones: el acuerdo es entre comprador y vendedor.',
      },
      {
        q: '¿Necesito una cuenta para ver los productos?',
        a: 'No. El catálogo, la búsqueda y el detalle de cada producto son públicos. Necesitas cuenta para reservar, publicar, ver el WhatsApp del vendedor o calificar.',
      },
      {
        q: '¿Qué pasa si dos personas quieren el mismo artículo?',
        a: 'Se lo lleva quien confirme primero. Apenas alguien reserva, el artículo sale del catálogo y nadie más puede reservarlo.',
      },
      {
        q: '¿Puedo cancelar una reserva?',
        a: 'Por ahora no. Por eso la reserva incluye el punto y el horario de recogida: confirmas solo cuando ya sabes que puedes ir.',
      },
      {
        q: '¿Cómo acordamos el día exacto?',
        a: 'El vendedor ofrece un lugar, unos días y una franja horaria. Al reservar eliges uno de esos puntos, y el día exacto lo coordinan por WhatsApp.',
      },
      {
        q: '¿Cómo obtengo la insignia de vendedor verificado?',
        a: 'La otorga el equipo de ReNest de forma manual. No se solicita desde la app.',
      },
      {
        q: '¿En qué ciudades funciona?',
        a: 'Cochabamba (Bolivia), Arequipa (Perú), San Salvador (El Salvador) y Utah (Estados Unidos). Los precios se muestran con un “$” genérico y se pagan en la moneda local que acuerden.',
      },
    ],
  },
  finalCta: {
    title: 'Lo que a ti ya no te sirve, a alguien le hace falta.',
    text: 'Crea tu cuenta en un minuto. Compra, vende o las dos cosas con la misma cuenta.',
    register: 'Crear cuenta gratis',
    explore: 'Explorar productos',
  },
  footer: {
    tagline: 'El marketplace de segunda mano donde reservas y agendas la recogida en un solo paso.',
    product: 'Producto',
    app: 'App',
    links: {
      how: 'Cómo funciona',
      trust: 'Confianza',
      faq: 'Preguntas frecuentes',
      explore: 'Explorar productos',
      publish: 'Publicar un artículo',
      register: 'Crear cuenta',
      login: 'Ingresar',
    },
  },
}

export type Messages = typeof es

const en: Messages = {
  meta: {
    title: 'ReNest · Secondhand, without the back-and-forth',
    description:
      'ReNest is the secondhand marketplace where you reserve an item and schedule pickup at a public place in one step. Cochabamba, Arequipa, San Salvador and Utah.',
  },
  numberLocale: 'en',
  skipToContent: 'Skip to content',
  header: {
    home: 'ReNest, go to top',
    nav: { how: 'How it works', trust: 'Trust', catalog: 'Catalog', faq: 'FAQ' },
    login: 'Log in',
    explore: 'Browse items',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
  },
  hero: {
    badge: 'Secondhand marketplace · LatAm',
    titleA: 'Secondhand,',
    titleB: 'without the back-and-forth.',
    leadBefore: 'On ReNest you reserve an item and choose where and when to pick it up ',
    leadStrong: 'in a single step',
    leadAfter: '. You meet at a public place, check the item and pay in person.',
    explore: 'Browse items',
    sell: 'Sell something',
    perks: ['Browse without an account', 'No payments inside the app'],
    phone: {
      confirmed: 'Reservation confirmed!',
      confirmedSub: "It's yours. Agree on the exact day over WhatsApp.",
      item: 'Gray three-seat sofa',
      pickup: 'Pickup point',
      place: 'Plaza 14 de Septiembre, frente a la Catedral',
      when: 'Saturday and Sunday · 10:00 – 13:00',
      maps: 'Open in Google Maps',
      verified: 'Verified seller',
      rating: '4.8 · 12 ratings',
      whatsapp: 'Message on WhatsApp',
    },
    chips: { publicPlace: 'Public place', payInPerson: 'Pay in person' },
  },
  cities: {
    label: 'Now available in',
    countries: { BO: 'Bolivia', PE: 'Peru', SV: 'El Salvador', US: 'United States' },
  },
  problem: {
    overline: 'Why ReNest',
    title: "Buying used shouldn't take a hundred messages",
    intro:
      'Buy-and-sell groups work, until it is time to coordinate. ReNest turns that conversation into one clear reservation.',
    before: 'Before',
    after: 'With ReNest',
    pairs: {
      schedule: {
        before: '“Is this still available?” and twenty messages to settle on a time.',
        after: 'The seller posts their pickup times. You pick one when you reserve.',
      },
      double: {
        before: 'Two people think they claimed it, and nobody knows whose it is.',
        after: 'The first to confirm gets it. One reservation, one buyer.',
      },
      place: {
        before: '“Send me your address”: meeting at a stranger’s home.',
        after: 'Always at a public place: a plaza, a café, a shopping mall.',
      },
    },
  },
  how: {
    overline: 'How it works',
    title: 'Four steps, from photo to handover',
    intro: 'One account lets you buy and sell. You are the seller on your listings and the buyer on your reservations.',
    tablist: 'Choose your role',
    buyer: {
      label: 'I want to buy',
      cta: 'Browse items',
      steps: {
        explore: {
          title: 'Browse',
          text: 'Search by name or filter by Furniture, Electronics and Home. No account needed to look around.',
        },
        reserve: {
          title: 'Reserve and schedule',
          text: "Pick one of the seller's places and time slots and confirm. Your reservation and meetup are set at once.",
        },
        meet: {
          title: 'Meet up',
          text: "You see the place, the days, a Google Maps link and the seller's WhatsApp to agree on the exact day.",
        },
        review: {
          title: 'Check and rate',
          text: 'With the item in hand, confirm you received it with a quick checklist and leave 1 to 5 stars.',
        },
      },
    },
    seller: {
      label: 'I want to sell',
      cta: 'List an item',
      steps: {
        publish: {
          title: 'List it',
          text: 'Add 1 to 3 photos, a title, a price and the condition: like new, gently used or heavily used. It goes live right away.',
        },
        times: {
          title: 'Set your times',
          text: 'Add 1 to 3 pickup points: a public place, the days and a time window that works for you.',
        },
        reserved: {
          title: 'Get reserved',
          text: 'When someone reserves, the item leaves the catalog and you see who it is, their WhatsApp and the chosen point.',
        },
        handover: {
          title: 'Hand over, build reputation',
          text: 'Confirm the handover and the sale is recorded. Every rating builds your reputation.',
        },
      },
    },
  },
  trust: {
    overline: 'Trust',
    title: 'Designed so both of you show up at ease',
    intro:
      "We don't touch your money: you pay in person, once you see the item. What we do is set clear rules for everyone.",
    features: {
      places: {
        title: 'Public places only',
        text: 'Pickup points are plazas, cafés or shopping malls. Never a private address.',
      },
      verified: {
        title: 'Verified sellers',
        text: 'The ReNest team verifies some sellers by hand, and you will see it on every listing.',
      },
      noDouble: {
        title: 'No double bookings',
        text: 'If two people confirm at the same time, only one gets it. The other finds out right away.',
      },
      checklist: {
        title: 'Reception checklist',
        text: 'Does it match the photos? Does it work? Is everything included? You confirm on pickup and can report anything.',
      },
      ratings: {
        title: 'Real ratings',
        text: 'Only someone who bought and received the item can rate it, and only once. No inflated reviews.',
      },
      phone: {
        title: 'Your number, protected',
        text: "Only signed-in users see a seller's WhatsApp. Yours is shown only to the seller of the item you reserved.",
      },
    },
    lifecycle: {
      overline: 'Each side confirms their own part',
      title: 'The seller confirms the handover. You confirm the pickup.',
      text: 'Neither side closes the deal for the other. Even if the seller already marked the handover, you can still check the item, report an issue and rate.',
      seller: 'Seller',
      sellerStages: ['Active', 'Pending', 'Completed'],
      sellerEvents: ['Someone reserves', 'Confirms handover'],
      buyer: 'Buyer',
      buyerStages: ['Scheduled', 'Completed'],
      buyerEvents: ['Confirms pickup'],
      whatsapp: 'Anything you need to talk about happens on WhatsApp.',
    },
  },
  catalog: {
    overline: 'Catalog',
    title: 'Furniture, electronics and things for the home',
    intro:
      'Every listing shows the price, condition, city and whether the seller is verified, so you can decide before you message.',
    filterLabel: 'Filter by category',
    all: 'All',
    categories: { FURNITURE: 'Furniture', ELECTRONICS: 'Electronics', HOME: 'Home' },
    conditions: { LIKE_NEW: 'Like new', GENTLY_USED: 'Gently used', HEAVILY_USED: 'Heavily used' },
    verified: 'Verified seller',
    titles: {
      sofa: 'Gray three-seat sofa',
      laptop: 'Lenovo ThinkPad T480 laptop',
      headphones: 'Sony WH-1000XM4 headphones',
      pots: 'Stainless steel cookware set',
      switch: 'Nintendo Switch with two controllers',
      lamp: 'Wooden floor lamp',
      chair: 'Ergonomic office chair',
      coffee: '6-cup moka pot',
    },
    disclaimer: 'Sample listings. Each seller sets their price, paid in person.',
    seeAll: 'See the full catalog',
  },
  faq: {
    overline: 'FAQ',
    title: 'What everyone asks before their first reservation',
    items: [
      {
        q: 'How do I pay?',
        a: "In person, when you meet. ReNest doesn't process payments or charge fees: the deal is between buyer and seller.",
      },
      {
        q: 'Do I need an account to browse?',
        a: "No. The catalog, search and listing details are public. You need an account to reserve, list, see a seller's WhatsApp or rate.",
      },
      {
        q: 'What if two people want the same item?',
        a: 'Whoever confirms first gets it. As soon as someone reserves, the item leaves the catalog and nobody else can reserve it.',
      },
      {
        q: 'Can I cancel a reservation?',
        a: "Not yet. That's why a reservation includes the pickup place and time: you only confirm once you know you can make it.",
      },
      {
        q: 'How do we agree on the exact day?',
        a: 'The seller offers a place, some days and a time window. When you reserve you pick one of those, and you settle the exact day on WhatsApp.',
      },
      {
        q: 'How do I get the verified seller badge?',
        a: "The ReNest team grants it manually. It can't be requested from the app.",
      },
      {
        q: 'Which cities does it work in?',
        a: 'Cochabamba (Bolivia), Arequipa (Peru), San Salvador (El Salvador) and Utah (United States). Prices show a generic “$” and are paid in whatever local currency you agree on. The app itself is in Spanish.',
      },
    ],
  },
  finalCta: {
    title: "What you no longer use, someone else needs.",
    text: 'Create your account in a minute. Buy, sell or both with the same account.',
    register: 'Sign up free',
    explore: 'Browse items',
  },
  footer: {
    tagline: 'The secondhand marketplace where you reserve and schedule pickup in a single step.',
    product: 'Product',
    app: 'App',
    links: {
      how: 'How it works',
      trust: 'Trust',
      faq: 'FAQ',
      explore: 'Browse items',
      publish: 'List an item',
      register: 'Sign up',
      login: 'Log in',
    },
  },
}

export const messages: Record<Lang, Messages> = { es, en }
