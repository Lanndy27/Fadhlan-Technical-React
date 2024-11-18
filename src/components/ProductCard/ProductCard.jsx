import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import formatToIDRCurrency from "../../utils/formatToIDRCurrency";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.slug}` ?? ""}
      className="flex flex-col max-w-[370px] flex-wrap p-[16px] bg-[#081116] hover:ring-opacity-40 active:ring-5 active:ring-[#6247eb] hover:ring-4 active:ring-2 active:ring-opacity-90"
    >
      <div className="w-full h-[300px] bg-white rounded-lg p-4 mb-4">
        <img
          src={product?.imageUrl ?? ""}
          alt={product?.name ?? "No Title"}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="space-y-2">
          <h4 className="font-medium text-[20px] text-white line-clamp-2 min-h-[60px]">
            {product?.name ?? "No Title"}
          </h4>
          <span className="block font-medium text-[14px] text-[#eaeaea]">
            {product?.category ?? "Uncategorized"}
          </span>
          <span className="block font-medium text-[20px] text-white">
            {product?.price > 0
              ? formatToIDRCurrency(product.price)
              : "Not For Sale"}
          </span>
        </div>

        <div className="w-full">
          {product.stock <= 0 ? (
            <div className="space-y-3">
              <p className="text-xl font-semibold text-center text-red-500">
                Out of Stock
              </p>
              <Button
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 p-4 bg-[#9A9A9A] text-center"
                disabled
              >
                <FontAwesomeIcon icon={faCartShopping} className="mb-0" />
                <span className="text-[#F3F3F3]">Add to cart</span>
              </Button>
            </div>
          ) : product.stock <= 25 ? (
            <div className="space-y-3">
              <p className="text-xl font-semibold text-center text-yellow-500">
                Almost Sold Out
              </p>
              <Button
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 p-4 bg-[#6173E6] text-center hover:bg-[#5969cf] text-white active:bg-[#4956ab]"
              >
                <FontAwesomeIcon icon={faCartShopping} className="mb-0" />
                <span>Add to cart</span>
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-xl font-semibold text-center text-green-500">
                In Stock
              </p>
              <Button
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 p-4 bg-[#6173E6] text-center hover:bg-[#5969cf] text-white active:bg-[#4956ab]"
              >
                <FontAwesomeIcon icon={faCartShopping} className="mb-0" />
                <span>Add to cart</span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
