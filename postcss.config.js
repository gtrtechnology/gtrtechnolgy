module.exports = {
    plugins: [
      require('autoprefixer') ({
          grid: 'autoplace',
          flexbox: 'no-2009'
      }),
      require('cssnano')
    ]
}
/* Autoprefixer está agregando propiedades de especificaciones de flexbox antiguas para webkit "display: -webkit-box;" que rompe el diseño en dispositivos móviles.

Considere usar la opción flexbox: "no-2009" para evitar que se agregue. */