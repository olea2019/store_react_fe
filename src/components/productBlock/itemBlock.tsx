import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';

type Props = {
    imageUrl: string;
    title: string;
    price: number;
    isLiked: boolean;
    setIsLiked: (value: boolean) => void;
    addToCart: () => void;
    isCart?: boolean;
    isHistory?: boolean;
};

export const ItemBlock: React.FC<Props> = ({
    imageUrl,
    title,
    price,
    isLiked,
    setIsLiked,
    addToCart,
    isCart = false,
    isHistory = false,
}) => {

    const likeClick = () => {
        setIsLiked(!isLiked);
    };

    return (
        <Card sx={{ maxWidth: 280, height: 400, display: 'inline-flex', flexDirection: 'column', margin: '20px 20px' }}>
            <CardMedia
                component="img"
                sx={{ objectFit: 'contain' }}
                height="200"
                image={imageUrl}
            />

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>

                <Typography gutterBottom variant="h5" component="div" color='red'>
                    {price}
                </Typography>
            </CardContent>

            <div style={{ margin: 'auto 0 12px' }}>
                <CardActions >
                    <IconButton onClick={likeClick} aria-label="add to favorites">
                        <FavoriteIcon color={isLiked ? 'primary' : 'action'} />
                    </IconButton>

                    <Button
                        onClick={addToCart}
                        disabled={isHistory}
                        variant="outlined"
                    >
                        {isCart ? 'Sterge din cos' : 'Adauga in cos'}
                    </Button>
                </CardActions>
            </div>
        </Card>
    )
}