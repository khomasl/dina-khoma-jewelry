const INSTAGRAM_URL = "https://www.instagram.com/dinakhoma/";
const FACEBOOK_URL = "https://www.facebook.com/dina.khoma.5";
const TELEGRAM_URL = "https://t.me/dina_khoma";
const PHONE_NUMBER = "+380931070851";
const EMAIL = "KhomaDina@gmail.com";

const CONTENT = {
  header: {
    logo: {
      src: "logo.png",
      title: "Dina Khoma Jewelry Logo"
    },
    nav: ["Про мене", "Мої вироби", "Відгуки"],
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
  },

  main: [
    {
      key: "hero",
      header: "",
      title: "Доповніть свій стиль унікальними прикрасами ручної роботи",
      description: "Відкрийте для себе світ елегантності та стилю з унікальними прикрасами ручної роботи. Доведена до досконалості, кожна прикраса є свідченням майстерності та індивідуальності.",
      button: {
        title: "Купити",
        link: INSTAGRAM_URL,
      },
      src: "hero.jpg",
    },

    {
      key: "slider",
      items: [
        {src: "current/1.jpg"},
        {src: "current/2.jpg"},
        {src: "current/3.jpg"},
        {src: "current/4.jpg"},
        {src: "other/1.jpg"},
        {src: "other/2.jpg"},
        {src: "other/3.jpg"},
        {src: "other/4.jpg"},
        {src: "other/5.jpg"},
        {src: "other/6.jpg"},
        {src: "other/7.jpg"},
        {src: "other/8.jpg"},
      ],
    },

    {
      key: "aboutMe",
      header: "ПРО МЕНЕ",
      title: "Майстерність поєднується з елегантністю",
      description: "Кожен виріб виготовлено вручну, поєднуючи традиції та сучасність. Відчуйте розкіш моїх ексклюзивних колекцій.",
      items: [ 
        {
          title: "1209+",
          description: "КЛІЄНТІВ",
        },
        {
          title: "150+",
          description: "ВИРОБІВ",
        }
      ],
      button: {
        title: "Дивитись колекцію",
        link: INSTAGRAM_URL,
      },
      src: "about.jpg",
    },

    {
      key: "features",
      header: "ОСОБЛИВОСТІ",
      title: "",
      description: "",
      button: {
        title: "Дізнатись більше",
        link: INSTAGRAM_URL,
      },
      src: "features.jpg",
    },

    {
      key: "currentCollections",
      header: "МОЇ ВИРОБИ",
      title: "Найостанніші колекції",
      items: [
        {
          title: "",
          description: "",
          price: "",
          src: "1.jpg",
        },
        {
          title: "",
          description: "",
          price: "",
          src: "2.jpg",
        },
        {
          title: "",
          description: "",
          price: "",
          src: "3.jpg",
        },
        {
          title: "",
          description: "",
          price: "",
          src: "4.jpg",
        },
      ],
    },

    {
      key: "feedback",
      header: "ВІДГУКИ",
      title: "Що кажуть клієнти",
      items: [
        {
          title: "",
          description: "",
          src: "1.jpg",
        },
        {
          title: "",
          description: "",
          src: "2.jpg",
        },
        {
          title: "",
          description: "",
          src: "3.jpg",
        },
        {
          title: "",
          description: "",
          src: "4.jpg",
        },
        {
          title: "",
          description: "",
          src: "5.jpg",
        },
      ],
    },

    {
      key: "otherCollections",
      header: "МОЇ ВИРОБИ",
      title: "Різні вироби",
      items: [
        {
          title: "",
          description: "",
          price: "",
          src: "1.jpg",
        },
        {
          title: "",
          description: "",
          price: "",
          src: "2.jpg",
        },
        {
          title: "",
          description: "",
          price: "",
          src: "3.jpg",
        },
        {
          title: "",
          description: "",
          price: "",
          src: "4.jpg",
        },
        {
          title: "",
          description: "",
          price: "",
          src: "5.jpg",
        },
        {
          title: "",
          description: "",
          price: "",
          src: "6.jpg",
        },
        {
          title: "",
          description: "",
          price: "",
          src: "7.jpg",
        },
        {
          title: "",
          description: "",
          price: "",
          src: "8.jpg",
        },
      ],
    },
  ],

  footer: {
    logo: {
      title: "Dina Khoma",
      description: "Відкрийте для себе світ елегантності та стилю з моїми унікальними прикрасами ручної роботи. Доведена  до досконалості, кожна прикраса є свідченням майстерності та індивідуальності.",
    },
    info: {
      title: "Інформація",
      nav: ["Home", "Про мене", "Мої вироби", "Відгуки"],
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
      description: "Відправте промокод в Direct Instagram і отримайте знижку на своє перше замовлення",
      code: "prm-dina-15",
    },
  },
};

export { CONTENT };
