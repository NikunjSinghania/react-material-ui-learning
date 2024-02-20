import Typography from '@mui/material/Typography';


const TypographyMUI = () => {
    return (
        <div>
            <Typography variant="h1" gutterBottom>
                h1. Heading
            </Typography>
            <Typography variant="h2" color="primary">
                h2. Heading
            </Typography>
            <Typography variant="h3" gutterBottom color='secondary'>
                h3. Heading
            </Typography>
            <Typography variant="h4" color="warning.dark">
                h4. Heading
            </Typography>
            <Typography variant="h5" gutterBottom color='success.main'>
                h5. Heading
            </Typography>
            <Typography variant="h6" color="error">
                h6. Heading
            </Typography>

            <Typography variant="subtitle1" color="error">
                Subtitle 1  
            </Typography>
            <Typography variant="subtitle2" color="error" gutterBottom>
                Subititle 2
            </Typography>

            <Typography variant="body1" color='secondary'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ad nesciunt, ducimus repellat consectetur tenetur obcaecati sit, labore, suscipit tempore alias totam expedita exercitationem maiores. Doloribus nam eaque accusamus adipisci.
            </Typography>

            <Typography variant="body2" color='secondary'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ad nesciunt, ducimus repellat consectetur tenetur obcaecati sit, labore, suscipit tempore alias totam expedita exercitationem maiores. Doloribus nam eaque accusamus adipisci.
            </Typography>
        </div>
    )
}

export default TypographyMUI