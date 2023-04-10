import Button from "deco-sites/onevc/components/ui/Button.tsx";
import {
  Options as UseAddToCartProps,
  useAddToCart,
} from "deco-sites/onevc/sdk/useAddToCart.ts";

interface Props extends UseAddToCartProps {
  /**
   * @description Product id
   */
  sellerId: string;
}

function AddToCartButton(
  { skuId, sellerId, discount, price, productGroupId, name }: Props,
) {
  const props = useAddToCart({
    skuId,
    sellerId,
    discount,
    price,
    productGroupId,
    name,
  });

  return (
    <Button data-deco="add-to-cart" {...props} class="w-full">
      Adicionar à Sacola
    </Button>
  );
}

export default AddToCartButton;
