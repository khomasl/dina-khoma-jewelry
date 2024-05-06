const INSTAGRAM_URL = "https://www.instagram.com/dinakhoma/";
const FACEBOOK_URL = "https://www.facebook.com/dina.khoma.5";
const TELEGRAM_URL = "https://t.me/dina_khoma";
const PHONE_NUMBER = "+380931070851";
const EMAIL = "KhomaDina@gmail.com";

const CONTENT = {
  header: {
    logo: "logo.png",
    nav: ["Про мене", "Мої вироби", "Відгуки"],
    socials: [
      {
        title: "Instagram",
        link: INSTAGRAM_URL,
      },
      {
        title: "Facebook",
        link: FACEBOOK_URL,
      },
      {
        title: "Telegram",
        link: TELEGRAM_URL,
      },
      {
        title: "093 107 08 51",
        link: PHONE_NUMBER,
      },
    ],
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
      img: "hero.png",
    },

    {
      key: "slider",
      items: [
        {img: "current/1.png"},
        {img: "current/2.png"},
        {img: "current/3.png"},
        {img: "current/4.png"},
        {img: "other/1.png"},
        {img: "other/2.png"},
        {img: "other/3.png"},
        {img: "other/4.png"},
        {img: "other/5.png"},
        {img: "other/6.png"},
        {img: "other/7.png"},
        {img: "other/8.png"},
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
      img: "about.png",
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
      img: "features.png",
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
          img: "current/1.png",
        },
        {
          title: "",
          description: "",
          price: "",
          img: "current/2.png",
        },
        {
          title: "",
          description: "",
          price: "",
          img: "current/3.png",
        },
        {
          title: "",
          description: "",
          price: "",
          img: "current/4.png",
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
          img: "feedback/1.png",
        },
        {
          title: "",
          description: "",
          img: "feedback/2.png",
        },
        {
          title: "",
          description: "",
          img: "feedback/3.png",
        },
        {
          title: "",
          description: "",
          img: "feedback/4.png",
        },
        {
          title: "",
          description: "",
          img: "feedback/5.png",
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
          img: "other/1.png",
        },
        {
          title: "",
          description: "",
          price: "",
          img: "other/2.png",
        },
        {
          title: "",
          description: "",
          price: "",
          img: "other/3.png",
        },
        {
          title: "",
          description: "",
          price: "",
          img: "other/4.png",
        },
        {
          title: "",
          description: "",
          price: "",
          img: "other/5.png",
        },
        {
          title: "",
          description: "",
          price: "",
          img: "other/6.png",
        },
        {
          title: "",
          description: "",
          price: "",
          img: "other/7.png",
        },
        {
          title: "",
          description: "",
          price: "",
          img: "other/8.png",
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
          title: "@dinakhoma",
          link: INSTAGRAM_URL,
        },
        {
          title: "Dina Khoma",
          link: FACEBOOK_URL,
        },
        {
          title: "@dina_khoma",
          link: TELEGRAM_URL,
        },
        {
          title: "093 107 08 51",
          link: PHONE_NUMBER,
        },
        {
          title: "KhomaDina@gmail.com",
          link: EMAIL,
        },
      ],
    },
    mySocials: {
      title: "Мої соціальні мережі",
      socials: [
        {
          title: "Instagram",
          link: INSTAGRAM_URL,
        },
        {
          title: "Facebook",
          link: FACEBOOK_URL,
        },
        {
          title: "Telegram",
          link: TELEGRAM_URL,
        },
        {
          title: "093 107 08 51",
          link: PHONE_NUMBER,
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
