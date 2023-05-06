import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography/Typography';

type ServiceCardProps = {
    image: string
    heading: string
    contentText: string
}

const ServiceCard = ({ image, heading, contentText} : ServiceCardProps) => {
    return (
        <Card elevation={5} sx={{height: '405px'}}>
            <CardMedia
                component='img'
                height='200px'
                // image='/assets/services/construction.jpg'
                image={image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {heading}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {contentText}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ServiceCard;