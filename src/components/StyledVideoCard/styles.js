import styled from 'styled-components/macro';

export const Card = styled.div`
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  overflow: hidden;
  width: 406px;
  position: relative;
`;

export const Poster = styled.img`
  width: 100%;
  height: 321px;
  object-fit: cover;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-family: sans-serif;
  color: ${(props) => (props.isFavorite ? 'orange' : 'grey')};
`;

export const Description = styled.p`
  font-size: 14px;
  font-family: sans-serif;
`;

export const AddButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #87a9ff;
  width: 48px;
  height: 48px;
  border: none;
  color: white;
  font-size: 24px;
  font-weight: 700;

  &:hover {
    cursor: pointer;
    background-color: #6471eb;
  }
`;
