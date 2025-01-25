import React, { useContext } from "react";
import Wishlist from "../components/Wishlist";
import { WishlistContext } from "../context/WishlistContext";

function WishlistPage() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div>
      <h1>My Wishlist</h1>
      <Wishlist wishlist={wishlist} onRemove={removeFromWishlist} />
    </div>
  );
}

export default WishlistPage;
