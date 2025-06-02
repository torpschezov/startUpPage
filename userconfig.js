// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Alexandria",
    scale: "C",
  },
  clock: {
    format: "k:i p",
    icon_color: palette.maroon,
  },
  additionalClocks: [
    {
      label: "ALX",
      timezone: "Africa/Cairo",
      format: "h:i",
      icon_color: palette.peach,
    },
  ],
  search: {
    engines: {
      p: ["https://www.perplexity.ai/search/?q=", "PerplexityAI"],
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
    },
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://www.catppuccin.com",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "astiel",
      background_url: "src/img/banners/banner_14.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "Arch Wiki",
              url: "https://wiki.archlinux.org/",
              icon: "brand-wikipedia",
              icon_color: palette.mauve,
            },
            {
              name: "Apple",
              url: "https:///account.apple.com/",
              icon: "brand-apple",
              icon_color: palette.peach,
            },
            {
              name: "Lyra",
              url: "https:///lyra.it.com/",
              icon: "flare",
              icon_color: palette.pink,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "Gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.mauve,
            },
            {
              name: "Proton Mail",
              url: "https://calendar.google.com",
              icon: "mailbox",
              icon_color: palette.peach,
            },
            {
              name: "Sheets",
              url: "https://docs.google.com/spreadsheets",
              icon: "table",
              icon_color: palette.pink,
            },
            {
              name: "Filen",
              url: "https://filen.io",
              icon: "cloud-storm",
              icon_color: palette.blue,
            },
            {
              name: "Drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "Defcon",
              url: "https://www.pravda.com.ua",
              icon: "alert-hexagon",
              icon_color: palette.mauve,
            },
            {
              name: "Legion",
              url: "https://ildu.com.ua",
              icon: "laurel-wreath",
              icon_color: palette.peach,
            },
            {
              name: "Finance",
              url: "https://kutok.io",
              icon: "chart-dots-2",
              icon_color: palette.pink,
            },
            {
              name: "Грунт",
              url: "https://grnt.media",
              icon: "eye-bolt",
              icon_color: palette.blue,
            },
            {
              name: "Translate",
              url: "https://www.village.com.ua",
              icon: "language-katakana",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/banner_15.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "Github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.mauve,
            },
            {
              name: "ChatGPT",
              url: "https://chatgpt.com",
              icon: "brand-openai",
              icon_color: palette.peach,
            },
            {
              name: "Stack Overflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.pink,
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "Kaggle",
              url: "https://www.kaggle.com",
              icon: "brain",
              icon_color: palette.mauve,
            },
            {
              name: "Leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.peach,
            },
            {
              name: "Exercism",
              url: "https://exercism.org",
              icon: "code-minus",
              icon_color: palette.pink,
            },
            {
              name: "Chess",
              url: "https://chess.com",
              icon: "chess",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "Debian Wiki",
              url: "https://wiki.debian.org",
              icon: "brand-debian",
              icon_color: palette.mauve,
            },
            {
              name: "Hacker News",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
            {
              name: "Apple Wiki",
              url: "https://theapplewiki.com/wiki",
              icon: "brand-apple",
              icon_color: palette.blue,
            },
            {
              name: "Champagne",
              url: "https://champagne.pages.dev",
              icon: "glass-champagne",
              icon_color: palette.pink,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/banner_13.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "Instagram",
              url: "https://www.instagram.com",
              icon: "brand-instagram",
              icon_color: palette.mauve,
            },
            {
              name: "Facebook",
              url: "https://www.facebook.com",
              icon: "brand-facebook",
              icon_color: palette.peach,
            },
            {
              name: "Reddit",
              url: "https://www.reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: palette.pink,
            },
            {
              name: "Dread",
              url: "https://www.reddit.com/r/unixporn",
              icon: "shield-checkered",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "IGN",
              url: "https://www.ign.com/account/playlist/library",
              icon: "device-gamepad",
              icon_color: palette.mauve,
            },
            {
              name: "Steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.peach,
            },
            {
              name: "Epic Games",
              url: "https://store.epicgames.com",
              icon: "brand-fortnite",
              icon_color: palette.pink,
            },
            {
              name: "Nintendo",
              url: "https://store.nintendo.co.uk",
              icon: "device-nintendo",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "multimedia",
          links: [
            {
              name: "1Shows",
              url: "https://www.1shows.live",
              icon: "brand-funimation",
              icon_color: palette.mauve,
            },
            {
              name: "Youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
            {
              name: "Genesis",
              url: "https://libgen.st/",
              icon: "book",
              icon_color: palette.pink,
            },
            {
              name: "Anker",
              url: "https://ankergames.net",
              icon: "device-gamepad-2",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.mauve);
