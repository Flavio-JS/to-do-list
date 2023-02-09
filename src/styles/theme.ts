const DefaultTheme = {
  breakpoints: {
    ssm: "340px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1366px",
    xxxl: "1536px",
  },
  colors: {
    primary: "#f2551",
    second200: "#feede1",
    second100: "#fffbff",
    greenGradient: "#50f283",
    dark900: "#241722",
    dark800: "#352432",
    dark700: "#462730",
    dark600: "#462730",
  },
  font: {
    weight: {
    bold: 700,
    semiBold: 600,
    medium: 500,
    regular: 400,
  },
    size: {
      xxxs: "0.625rem" /* 10px */,
      xxs: "0.75rem" /* 12px */,
      xs: "0.875rem" /* 14px */,
      sm: "1rem" /* 16px */,
      mm: '20px',
      md: "1.5rem" /* 24px */,
      l: "2rem" /* 32px */,
      xl: "2.5rem" /* 40px */,
      xxl: "3rem" /* 48px */,
      xxxl: "3.5rem" /* 56px */,
      xxxxl: "4rem" /* 64px */,
      giant: "4.5rem" /* 72px */,
      giant1: "5rem" /* 80px */,
      giant2: "5.5rem" /* 88px */,
      giant3: "128px"
    },
    lineHeight: {
      default: "110%",
      md: "120%",
      l: "140%",
    },
  },
  opacity: {
    semiOpaque: 0.72,
    medium: 0.48,
    light: 0.24,
    semiTransparent: 0.16,
  },
};

export default DefaultTheme;
