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
      description:
        "Відкрийте для себе світ елегантності та стилю з унікальними прикрасами ручної роботи. Доведена до досконалості, кожна прикраса є свідченням майстерності та індивідуальності.",
      button: {
        title: "Купити",
        link: INSTAGRAM_URL,
      },
      img: "hero.png",
    },

    {
      key: "slider",
      slider: [
        "current/1.png",
        "current/2.png",
        "current/3.png",
        "current/4.png",
        "other/1.png",
        "other/2.png",
        "other/3.png",
        "other/4.png",
        "other/5.png",
        "other/6.png",
        "other/7.png",
        "other/8.png",
      ],
    },

    {
      key: "aboutMe",
      header: "ПРО МЕНЕ",
      title: "Майстерність поєднується з елегантністю",
      description:
        "Кожен виріб виготовлено вручну, поєднуючи традиції та сучасність. Відчуйте розкіш моїх ексклюзивних колекцій.",
      details: {
        clients: "КЛІЄНТІВ",
        products: "ВИРОБІВ",
      },
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
      products: [
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
      slides: [
        {
          name: "",
          text: "",
          img: "feedback/1.png",
        },
        {
          name: "",
          text: "",
          img: "feedback/2.png",
        },
        {
          name: "",
          text: "",
          img: "feedback/3.png",
        },
        {
          name: "",
          text: "",
          img: "feedback/4.png",
        },
        {
          name: "",
          text: "",
          img: "feedback/5.png",
        },
      ],
    },

    {
      key: "otherCollections",
      header: "МОЇ ВИРОБИ",
      title: "Різні вироби",
      products: [
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
      description:
        "Відкрийте для себе світ елегантності та стилю з моїми унікальними прикрасами ручної роботи. Доведена  до досконалості, кожна прикраса є свідченням майстерності та індивідуальності.",
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
      description:
        "Відправте промокод в Direct Instagram і отримайте знижку на своє перше замовлення",
      code: "prm-dina-15",
    },
  },
};

export { CONTENT };
