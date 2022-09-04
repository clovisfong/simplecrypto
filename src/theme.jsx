import { createTheme } from '@mui/material'


const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 650,
            md: 900,
            lg: 1200,
            xl: 1536
        }
    },
    palette: {
        primary: {
            main: '#286E5E',

        },
        secondary: {
            main: '#225559'
        },
    },
    shape: {
        borderRadius: 30
    },
    components: {
        MuiInputLabel: {
            defaultProps: {
                sx: {
                    fontSize: "0.75rem",
                    top: 2,
                },
            }
        },
        MuiButton: {
            defaultProps: {
                sx: {
                    fontSize: '0.7rem',
                    pt: '0.6rem',
                    pb: '0.6rem',


                }

            },
            variants: [
                {
                    props: { variant: 'contained' },
                    style: {

                    },
                },
            ]
        },
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: 'h4',
                    },
                    style: {
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                        color: '#225559'
                    }

                },
                {
                    props: {
                        variant: 'h5',
                    },
                    style: {
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        color: '#225559'
                    }

                },
                {
                    props: {
                        variant: 'h6',
                    },
                    style: {
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        color: '#28292C'
                    }
                },
                {
                    props: {
                        variant: 'body1',
                    },
                    style: {
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        color: '#28292C'
                    }

                },
                {
                    props: {
                        variant: 'body2',
                    },
                    style: {
                        fontSize: '1rem',
                        color: '#28292C'
                    }

                }

            ],
        }
    }
})

export default theme