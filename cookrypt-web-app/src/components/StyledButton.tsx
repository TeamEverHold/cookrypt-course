import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    dashed: true;
  }
}

export const myButtonTheme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            border: `2px ${grey[700]}`,
            backgroundColor: grey[700],
            color: grey[50],
            ":hover": {
                backgroundColor: grey[800],
            },
          },
        }
      ],
    },
  },
});