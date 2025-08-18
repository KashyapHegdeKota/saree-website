"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { redirect } from "next/navigation";

// --------------------------------------------------
// Data (add more products by following the same shape)
// --------------------------------------------------
const products = [
  {
    id: 1,
    title: "Pure Mysore Silk Saree",
    variants: [
      {
        sku: "1-pink",
        colorName: "Pink",
        colorHex: "#c42c4c",
        price: 425.0,
        image: "/sarees/1-pink.jpg",
      },
      {
        sku: "1-teal",
        colorName: "Teal",
        colorHex: "#047773",
        price: 275.0,
        image: "/sarees/1-teal.jpg",
      },
      {
        sku: "1-blue",
        colorName: "Blue",
        colorHex: "#0484ac",
        price: 425.0,
        image: "/sarees/1-blue.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Bishnupuri Silk Saree",
    variants: [
      {
        sku: "2-yellow",
        colorName: "Yellow",
        colorHex: "#c08516",
        price: 300.0,
        image: "/sarees/2-yellow.jpg",
      },
      {
        sku: "2-pink",
        colorName: "Pink",
        colorHex: "#e36da0",
        price: 300.0,
        image: "/sarees/2-pink.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Banarasi Georgettes Saree",
    variants: [
      {
        sku: "3-pink",
        colorName: "Pink",
        colorHex: "#9c545c",
        price: 150.0,
        image: "/sarees/3-pink.jpg",
      },
      {
        sku: "3-purple",
        colorName: "Purple",
        colorHex: "#625d89",
        price: 150.0,
        image: "/sarees/3-purple.jpg",
      },
      {
        sku: "3-light-pink",
        colorName: "Light Pink",
        colorHex: "#b281a9",
        price: 150.0,
        image: "/sarees/3-light-pink.jpg",
      },
      {
        sku: "3-yellow",
        colorName: "Yellow",
        colorHex: "#b29a34",
        price: 150.0,
        image: "/sarees/3-yellow.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Pure Silk Saree",
    variants: [
      {
        sku: "4-blue",
        colorName: "Blue",
        colorHex: "#4ca4d8",
        price: 200.0,
        image: "/sarees/4-blue.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Cotton Silk Gadwal Temple Border Saree",
    variants: [
      {
        sku: "5-green",
        colorName: "Green",
        colorHex: "#ffffff",
        price: 100.0,
        image: "/sarees/5-green.jpg",
      },
    ],
  },
  {
    id: 6,
    title: "Mangalagiri Cotton Saree",
    variants: [
      {
        sku: "6-red",
        colorName: "Red",
        colorHex: "#ff0000",
        price: 50.0,
        image: "/sarees/6-red.jpg",
      },
    ],
  },
  {
    id: 7,
    title: "Ajrakh Printed Sarees",
    variants: [
      {
        sku: "7-brown",
        colorName: "Brown",
        colorHex: "#8B4513",
        price: 90.0,
        image: "/sarees/7-gold.jpg",
      },
      {
        sku: "7-blue",
        colorName: "Blue",
        colorHex: "#0000ff",
        price: 210.0,
        image: "/sarees/7-blue.jpg",
      },
    ],
  },
  {
    id: 8,
    title: "Pure Silk Saree",
    variants: [
      {
        sku: "8-pink",
        colorName: "Pink and Blue.",
        colorHex: "#ff69b4",
        price: 280.0,
        image: "/sarees/8-pink.jpg",
      },
    ],
  },
];

const ColorSwatches = ({ variants, selectedSku, onSelect }) => (
  <div className="mt-2 flex flex-wrap gap-2">
    {variants.map((v) => {
      const selected = v.sku === selectedSku;
      return (
        <label
          key={v.sku}
          className="relative cursor-pointer"
          title={v.colorName}
        >
          {/* a11y radio (hidden) */}
          <input
            type="radio"
            name={`color-${variants[0].sku.split("-")[0]}`}
            className="sr-only"
            checked={selected}
            onChange={() => onSelect(v.sku)}
          />
          {/* color dot */}
          <span
            className="block h-6 w-6 rounded-full ring-1 ring-gray-300"
            style={{ backgroundColor: v.colorHex }}
            aria-label={v.colorName}
          />
          {/* selected outline */}
          {selected && (
            <span
              className="absolute -inset-1 rounded-full ring-2 ring-gray-800 pointer-events-none"
              aria-hidden="true"
            />
          )}
        </label>
      );
    })}
  </div>
);

const ProductCard = ({ product, onAdd }) => {
  const [sku, setSku] = useState(product.variants[0].sku);
  const current =
    product.variants.find((v) => v.sku === sku) || product.variants[0];

  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white hover:shadow-md transition">
      <Link href={`/products/${product.id}`} className="block">
        <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-50">
          {/* Use next/image if preferred; for now <img> keeps it simple */}
          <img
            src={current.image}
            alt={`${product.title} - ${current.colorName}`}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <h3 className="mt-3 text-sm text-gray-900 line-clamp-2">
          {product.title}
        </h3>
      </Link>

      {product.variants.length > 1 && (
        <div className="mt-2">
          <p className="text-xs text-gray-600">
            Color: <span className="font-medium">{current.colorName}</span>
          </p>
          <ColorSwatches
            variants={product.variants}
            selectedSku={sku}
            onSelect={setSku}
          />
        </div>
      )}

      <div className="mt-3 text-lg font-semibold text-gray-900">
        AED {current.price.toFixed(2)}
      </div>

      <button
        onClick={() => onAdd(product.id, sku)}
        className="mt-3 w-full inline-flex items-center justify-center rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 active:bg-gray-200 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

const HomePage = () => {
  const handleAddToCart = (productId, sku) => {
    // TODO: wire to your cart store or API
    redirect("/contact");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {products.length === 0 ? (
          <p className="text-gray-600">No products available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} onAdd={handleAddToCart} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default HomePage;
