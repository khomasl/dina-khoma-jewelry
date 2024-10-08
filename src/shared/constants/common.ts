const BREAKPOINT_LG = 1024;
const BREAKPOINT_MD = 768;

const BASE_URL = 'https://dinakhoma.com'
const INSTAGRAM_URL = "https://www.instagram.com/dinakhoma/";
const FACEBOOK_URL = "https://www.facebook.com/dina.khoma.5";
const TELEGRAM_URL = "https://t.me/dina_khoma";
const PHONE_NUMBER = "+380931070851";
const EMAIL = "KhomaDina@gmail.com";

const METADATA = {
  title: 'Купити прикраси з полімерної глини | Dina Khoma Jewelry',
  description: 'Купити пташки. Пташки з петриківським розписом. Біла пташка. Пташка з малюнком. Чокери. Кольє. Полімерна глина. Перли. Фурнітура. Ручна робота. Вироби за індивідуальним замовленням. Доставка по Україні.',
  siteName: 'Dina Khoma Jewelry',
}

const CURRENT_COLLECTIONS = {
  type: "currentCollections",
  header: "МОЇ ВИРОБИ",
  title: "Найостанніші колекції",
  items: [
    {
      title: "Кольє",
      description: "Полімерна глина, ланцюжок з нержавіючої сталі",
      price: "600 грн",
      src: "/current-collections/1.jpg",
      link: INSTAGRAM_URL,
    },
    {
      title: "Чокер з голубкою",
      description: "Пташка з полімерної глини, перлини річкові, фурнітура з позолотою",
      price: "850 грн",
      src: "/current-collections/2.jpg",
      link: INSTAGRAM_URL,
    },
    {
      title: "Чокер з пташкою",
      description: "Пташка з полімерної глини, ручний петриківський розпис, скляні намистини, бронзова фурнітура",
      price: "520 грн",
      src: "/current-collections/3.jpg",
      link: INSTAGRAM_URL,
    },
    {
      title: "Ластівка на шнурочку",
      description: "Пташка з полімерної глини, ручний розпис, шнурочок з екозамші 150 см",
      price: "380 грн",
      src: "/current-collections/4.jpg",
      link: INSTAGRAM_URL,
    },
  ],
} as const

const OTHER_COLLECTIONS = {
  type: "otherCollections",
  header: "МОЇ ВИРОБИ",
  title: "Різні вироби",
  items: [
    {
      title: "Підвіска на шнурочку",
      description: "Підвіска з полімерної глини, шнурочок з екозамші 150 см",
      price: "650 грн",
      src: "/other-collections/1.jpg",
      link: INSTAGRAM_URL,
    },
    {
      title: "Сережки",
      description: "Полімерна глина, якісна фурнітура з позолотою 18к",
      price: "280 грн",
      src: "/other-collections/2.jpg",
      link: INSTAGRAM_URL,
    },
    {
      title: 'Браслет "Ластівка"',
      description: "Пташка з полімерної глини, ручний розпис, ланцюжок з позолотою",
      price: "530 грн",
      src: "/other-collections/3.jpg",
      link: INSTAGRAM_URL,
    },
    {
      title: 'Підвіска "Серце"',
      description: "Підвіска з полімерної глини, ручний розпис, оксамитова стрічка 150 см, фурнітура з позолотою",
      price: "650 грн",
      src: "/other-collections/4.jpg",
      link: INSTAGRAM_URL,
    },
    {
      title: "Малиновий чокер",
      description: "Ягідки з полімерної глини, скляні намистини, нержавіюча сталь",
      price: "680 грн",
      src: "/other-collections/5.jpg",
      link: INSTAGRAM_URL,
    },
    {
      title: 'Сережки "Глечики"',
      description: "Полімерна глина, петриківський розпис, нержавіюча сталь",
      price: "500 грн",
      src: "/other-collections/6.jpg",
      link: INSTAGRAM_URL,
    },
    {
      title: 'Сережки "Обліпиха"',
      description: "Полімерна глина, фурнітура бронзова",
      price: "500 грн",
      src: "/other-collections/7.jpg",
      link: INSTAGRAM_URL,
    },
    {
      title: 'Сережки "Ластівки"',
      description: "Полімерна глина, гіпоалергенний сплав",
      price: "320 грн",
      src: "/other-collections/8.jpg",
      link: INSTAGRAM_URL,
    },
  ],
} as const

const CONTENT_HOMEPAGE = {
  header: {
    logo: {
      src: "/logo.png",
      title: "Dina Khoma Jewelry Logo",
      link: "/",
    },
    nav: [
      {
        link: "/pages/about",
        title: "Про мене"
      }, 
      {
        link: "/collection",
        title: "Мої вироби"
      }, 
      {
        link: "/#feedbacks",
        title: "Відгуки"
      }, 
    ],
    socials: [
      {
        src: "instagram.svg",
        title: "Instagram",
        link: INSTAGRAM_URL,
      },
      {
        src: "facebook.svg",
        title: "Facebook",
        link: FACEBOOK_URL,
      },
      {
        src: "telegram.svg",
        title: "Telegram",
        link: TELEGRAM_URL,
      },
    ],
    phone: {
      title: "093 107 08 51",
      link: PHONE_NUMBER,
    },
    email: {
      title: EMAIL,
      link: EMAIL
    }
  },

  main: [
    {
      type: "hero",
      header: "",
      title: "Доповніть свій стиль унікальними прикрасами ручної роботи",
      description: "Відкрийте для себе світ елегантності та стилю з унікальними прикрасами ручної роботи. Доведена до досконалості, кожна прикраса є свідченням майстерності та індивідуальності.",
      button: {
        title: "Купити",
        link: INSTAGRAM_URL,
      },
      src: "/hero.jpg",
    },

    {
      type: "slider",
      items: [
        {
          src: "/current-collections/1.jpg",
          link: INSTAGRAM_URL,
        },
        {
          src: "/current-collections/2.jpg",
          link: INSTAGRAM_URL,
        },
        {
          src: "/current-collections/3.jpg",
          link: INSTAGRAM_URL,
        },
        {
          src: "/current-collections/4.jpg",
          link: INSTAGRAM_URL,
        },
        {
          src: "/other-collections/1.jpg",
          link: INSTAGRAM_URL,
        },
        {
          src: "/other-collections/2.jpg",
          link: INSTAGRAM_URL,
        },
        {
          src: "/other-collections/3.jpg",
          link: INSTAGRAM_URL,
        },
        {
          src: "/other-collections/4.jpg",
          link: INSTAGRAM_URL,
        },
        {
          src: "/other-collections/5.jpg",
          link: INSTAGRAM_URL,
        },
        {
          src: "/other-collections/6.jpg",
          link: INSTAGRAM_URL,
        },
        {
          src: "/other-collections/7.jpg",
          link: INSTAGRAM_URL,
        },
        {
          src: "/other-collections/8.jpg",
          link: INSTAGRAM_URL,
        },
      ],
    },

    CURRENT_COLLECTIONS,

    {
      type: "feedback",
      header: "ВІДГУКИ",
      title: "Що кажуть клієнти",
      items: [
        {
          title: "Лія",
          description: "Дуже гарно",
          src: "/feedbacks/1.jpg",
        },
        {
          title: "Зоряна",
          description: "Моє захоплення роботами Діни почалося ще з прекрасного горнятка, де настільки добра деталізація передає малинку, кубик шоколаду, морозиво НАЧЕ СПРАВЖНЄ... А коли почалися брошки- метелики чи осінні листочки, брилочки- яблучка чи персики, сережки- трансформери (квіти, пташки, вісюльки) то я вже стала колекціонувати такі милі мистецькі речі.. Це чудовий подарунок друзям...А головне, що робота виконана навіть краще, ніж я її бачила в своїй уяві... Неймовірно тішуся таким радощам, які допомагають сяяти і ділитися КРАСОЮ",
          src: "/feedbacks/2.jpg",
        },
        {
          title: "Марія",
          description: "Краса. Перлини в поєднанні з пташками - щось надзвичайне",
          src: "/feedbacks/3.jpg",
        },
        {
          title: "Мілка",
          description: "Якісні матеріали. Гарне пакування. І ще до замовлення... надзвичайна листівка",
          src: ""
          // src: "/feedbacks/4.jpg",
        },
        {
          title: "Оксана",
          description: "Дуже подобаються пташки з петриківським розписом",
          src: ""
          // src: "/feedbacks/5.jpg",
        },
      ],
    },

    OTHER_COLLECTIONS
  ],

  footer: {
    logo: {
      title: "Dina Khoma",
      description: "Відкрийте для себе світ елегантності та стилю з моїми унікальними прикрасами ручної роботи. Доведена  до досконалості, кожна прикраса є свідченням майстерності та індивідуальності.",
    },
    info: {
      title: "Інформація",
      nav: [
        {title:"Home", link: '/'},
        {title:"Про мене",  link: '/pages/about'},
        {title:"Мої вироби",  link: '/collection'},
        {title: "Відгуки", link: '/#feedbacks'},
      ],
    },
    myContacts: {
      title: "Деталі для контакту",
      contacts: [
        {
          src: "instagram-line.svg",
          title: "@dinakhoma",
          link: INSTAGRAM_URL,
        },
        {
          src: "facebook-line.svg",
          title: "Dina Khoma",
          link: FACEBOOK_URL,
        },
        {
          src: "telegram-line.svg",
          title: "@dina_khoma",
          link: TELEGRAM_URL,
        },
        {
          src: "phone-line.svg",
          title: "093 107 08 51",
          link: PHONE_NUMBER,
        },
        {
          src: "email-line.svg",
          title: "KhomaDina@gmail.com",
          link: EMAIL,
        },
      ],
    },
    mySocials: {
      title: "Мої соціальні мережі",
      socials: [
        {
          src: "instagram.svg",
          title: "Instagram",
          link: INSTAGRAM_URL,
        },
        {
          src: "facebook.svg",
          title: "Facebook",
          link: FACEBOOK_URL,
        },
        {
          src: "telegram.svg",
          title: "Telegram",
          link: TELEGRAM_URL,
        },
      ],
    },
    promo: {
      title: "Отримайте знижку 15%",
      description: "Відправте промокод в один із месенджерів і отримайте знижку на своє перше замовлення",
      code: "prm-dina-15",
    },
  },
} as const;

const CONTENT_ABOUT = [
  {
    type: "features",
    header: "ОСОБЛИВОСТІ",
    title: "Досвід та якісні матеріали",
    description: "Більше 10 років досвіду. Використовую тільки якісні матеріали.",
    button: {
      title: "Дізнатись більше",
      link: INSTAGRAM_URL,
    },
    src: "/features.jpg",
  },

  {
    type: "aboutMe",
    header: "ПРО МЕНЕ",
    title: "Майстерність поєднується з елегантністю",
    description: "Кожен виріб виготовлено вручну, поєднуючи традиції та сучасність. Відчуйте розкіш моїх ексклюзивних колекцій.",
    items: [
      {
        title: "800+",
        description: "КЛІЄНТІВ",
      },
      {
        title: "1500+",
        description: "ВИРОБІВ",
      }
    ],
    button: {
      title: "Дивитись колекцію",
      link: INSTAGRAM_URL,
    },
    src: "/about.jpg",
  }
] as const;

const CONTENT_COLLECTION = [ OTHER_COLLECTIONS ] as const;

const CONTENT_BLOG = [ OTHER_COLLECTIONS ] as const;

const BLOG_POSTS = [
  {
    id: 'a1',
    title: 'Підвіска на шнурочку',
    date: "2024-08-15",
    content: `<h3>Підвіска на шнурочку</h3>

<p>Підвіска з полімерної глини, шнурочок з екозамші 150 см</p>

<ul>
  <li>Підвіска з полімерної глини - <a href="/">Перейти</a></li>
  <li>Шнурочок з екозамші 150 см - <a href="/">Перейти</a></li>
</ul>`,
  }
]

export { 
  BASE_URL,
  METADATA,
  CONTENT_HOMEPAGE,
  CONTENT_ABOUT,
  CONTENT_COLLECTION,
  CONTENT_BLOG,
  BLOG_POSTS,
  PHONE_NUMBER,
  EMAIL, 
  BREAKPOINT_LG, 
  BREAKPOINT_MD
};
