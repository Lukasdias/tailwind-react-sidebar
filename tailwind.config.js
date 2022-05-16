/* 
  Explore configuration options docs https://tailwindcss.com/docs/configuration#configuration-options
  Or check the default configuration https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
*/

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'body-color': "#dce4e3",
        'sidebar-green': '#18c29c',
        'sidebar-light-green': '#8ed7c6',
        'sidebar-grey': '#084236',
        'sidebar-light-grey': '#dce4e3',
      }
    }
  },
  plugins: []
}
