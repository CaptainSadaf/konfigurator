import React from 'react';
import ConfiguratorOption from '../ConfiguratorOption';

interface ProductSelectionProps {
  selectedProduct: string;
  onSelectProduct: (product: string) => void;
}

const ProductColours: React.FC<ProductSelectionProps> = ({ selectedProduct, onSelectProduct }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-4 gap-y-4 w-full">
      <ConfiguratorOption
        title="Wandmontage"
        imageMobile={`${process.env.REACT_APP_PUBLIC_URL}/images/mobile/carport.svg`}
        imageDesktop={`${process.env.REACT_APP_PUBLIC_URL}/images/desktop/Carport.svg`}
        onClick={() => onSelectProduct("Terrassenüberdachung")}
        isSelected={selectedProduct === "Terrassenüberdachung"}
      />
      <ConfiguratorOption
        title="Freistehend"
        imageMobile={`${process.env.REACT_APP_PUBLIC_URL}/images/mobile/carport.svg`}
        imageDesktop={`${process.env.REACT_APP_PUBLIC_URL}/images/desktop/Carport.svg`}
        onClick={() => console.log('Selected Freistehend')}
        isSelected={false}
      />
      <ConfiguratorOption
        title="Freistehend"
        imageMobile={`${process.env.REACT_APP_PUBLIC_URL}/images/mobile/carport.svg`}
        imageDesktop={`${process.env.REACT_APP_PUBLIC_URL}/images/desktop/Carport.svg`}
        onClick={() => console.log('Selected Freistehend')}
        isSelected={false}
      />
      <ConfiguratorOption
        title="Freistehend"
        imageMobile={`${process.env.REACT_APP_PUBLIC_URL}/images/mobile/carport.svg`}
        imageDesktop={`${process.env.REACT_APP_PUBLIC_URL}/images/desktop/Carport.svg`}
        onClick={() => console.log('Selected Freistehend')}
        isSelected={false}
      />
    </div>
  );
};

export default ProductColours;
