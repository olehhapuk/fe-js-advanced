// import * as styles from './styles';
import { Card, Poster, Title, Description, AddButton } from './styles';
// import moduleName from 'module' -> imp
// import {  } from 'module' -> imd

function StyledVideoCard({ imageUrl, title, description, isFavorite }) {
  return (
    <Card>
      <Poster src={imageUrl} />
      <Title isFavorite={isFavorite}>{title}</Title>
      <Description>{description}</Description>
      {!isFavorite && <AddButton type="button">+</AddButton>}
    </Card>
  );
}

export default StyledVideoCard;
