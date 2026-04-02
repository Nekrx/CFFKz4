import React, { useState } from 'react';
import { HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi2'; 
import * as S from './styles';

interface CardGridItemProps {
  name: string;
  image?: string;
}

export const CardGridItem: React.FC<CardGridItemProps> = ({ name, image }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <S.CardContainer>
      {image ? (
        <S.CardImage src={image} alt={name} />
      ) : (
        <S.CardImagePlaceholder>
          <span>✦</span>
        </S.CardImagePlaceholder>
      )}

      <S.CardName title={name}>{name}</S.CardName>
      
      <S.QuantitySelector>
        <button onClick={handleDecrease}>
          <HiOutlineMinus size={18} />
        </button>
        <span>{quantity}</span>
        <button onClick={handleIncrease}>
          <HiOutlinePlus size={18} />
        </button>
      </S.QuantitySelector>
    </S.CardContainer>
  );
};