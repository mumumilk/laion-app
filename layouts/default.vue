<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
@font-face {
  font-family: 'Heebo';
  src: url('../assets/Heebo-Regular.ttf') format('truetype');
  font-display: swap;
}

@font-face {
  font-family: 'Heebo';
  src: url('../assets/Heebo-Bold.ttf') format('truetype');
  font-weight: bold;
  font-display: swap;
}

html {
  font-family: 'Heebo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
