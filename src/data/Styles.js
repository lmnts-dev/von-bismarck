// Global JS Variables for Styled Components
// Typically imported as `lmnts`

// Usage
// 1. First:
// import * as lmnts from '../../../path/to/Styles'
// 2. Use it in your SC: `color: ${lmnts.Clr.White};`


module.exports = {
    // Typography
    Fnt: {
      Header: "'Poppins', 'San Francisco', 'Helvetica', 'Roboto', 'Arial', sans-serif",
      Body: "'Poppins', 'San Francisco', 'Helvetica', 'Roboto', 'Arial', sans-serif"
    },
  
    // Base Measurements
    Base: {
      Size: 60,
      Type: 14,
      BangerWidth: "20vh",
      Grid: {
        Nav: {
          LgSize: 200,
          MdSize: 150,
          SmSize: 40
        },
        Gutter: {
          Top: 20,
          Bottom: 20,
          Right: 20,
          Left: 20
        }
      }
    },
  
    // Palette
    Clr: {
      Cream: "#FAF9EE",
      DarkCream: "#E5E3CA",
      Tan: "#DEAD87",
      Navy: "#002746",
      White: "#ffffff",
      Black: "#000000",
    },
  
    // Animations
    Anim: {
      Page: {
        Direction: "up",
        Type: "cover",
        Duration: 1,
        Color: "#e2e2e2",
        Function: "ease"
      }
    }
  };