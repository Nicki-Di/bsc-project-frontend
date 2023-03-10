/** @type {import("tailwindcss").Config} */
module.exports = {
  safelist: [
    {
      pattern:
        /(text)-(badge)-*/,
    },
  ],

  content: ["./app/**/*.{js,ts,jsx,tsx}", "./Components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: {
            10: "#0D0815",
            9: "#19112B",
            8: "#2D2B65",
            7: "#141330",
            6: "#3F2A6B",
            5: "#1D1D41",
            4: "#4B3380",
            3: "#341987",
            2: "#3D00A1",
            1: "#5F39D6",
          },
          light: {
            10: "#F2EEFB",
            9: "#E5DDF7",
            8: "#D8CCF3",
            7: "#CBBBEE",
            6: "#BEAAEA",
            5: "#B199E6",
            4: "#A588E2",
            3: "#9877DE",
            2: "#8B66DA",
            1: "#7E55D6",
          },
        },
        neutral: {
          10: "#000000",
          9: "#1A1A1A",
          8: "#333333",
          7: "#4D4D4D",
          6: "#666666",
          5: "#808080",
          4: "#999999",
          3: "#B2B2B2",
          2: "#CCCCCC",
          1: "#E5E5E5",
        },
        red: {
          dark: {
            10: "#120003",
            9: "#230006",
            8: "#35000A",
            7: "#46000D",
            6: "#580010",
            5: "#6A0013",
            4: "#7B0016",
            3: "#8D001A",
            2: "#9E001D",
            1: "#B00020",
          },
          light: {
            10: "#F7E5E9",
            9: "#EFCCD2",
            8: "#E7B2BC",
            7: "#DF99A6",
            6: "#EC8D8D",
            5: "#D06679",
            4: "#C84D63",
            3: "#C0334D",
            2: "#B81A36",
            1: "#B00020",
          },
        },
        green: {
          dark: {
            10: "#090E05",
            9: "#111C09",
            8: "#1A2A0E",
            7: "#223813",
            6: "#2B4618",
            5: "#33531C",
            4: "#3C6121",
            3: "#446F26",
            2: "#4D7D2A",
            1: "#558B2F",
          },
          light: {
            10: "#EEF3EA",
            9: "#DDE8D5",
            8: "#CCDCC1",
            7: "#BBD1AC",
            6: "#AAC597",
            5: "#99B982",
            4: "#88AE6D",
            3: "#77A259",
            2: "#669744",
            1: "#558B2F",
          },
        },
        badge : {
          gold: "#FFD700",
          silver: "#BEC2CB",
          bronze: "#B08D57"
        }
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};