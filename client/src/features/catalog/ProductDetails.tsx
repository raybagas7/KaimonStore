import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();

  return <Typography variant="h2">ProductDetails {id}</Typography>;
};

export default ProductDetails;
