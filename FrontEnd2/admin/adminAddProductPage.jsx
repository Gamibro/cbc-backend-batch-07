import { useState } from "react";
import { useNavigate } from "react-router-dom";
import mediaUpload from "../utils/mediaUpload";
import toast from "react-hot-toast";
import axios from "axios";

export default function AdminAddProductPage() {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [altNames, setaltNames] = useState([]);
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [price, setPrice] = useState(0);
  const [labelledPrice, setlabelledPrice] = useState(0);
  const [category, setCategory] = useState("SkinCare");
  const [stock, setStock] = useState(0);
  const navigate = useNavigate();

  async function addProduct() {
    let token = localStorage.getItem("token");
    if (token == null) {
      navigate("/login");
      return;
    }
    const promises = [];
    for (let i = 0; i < images.length; i++) {
      promises[i] = mediaUpload(images[i]);
    }
    try {
      const urls = await Promise.all(promises);
      const alternativeNames = altNames.split(",");
      const product = {
        productId: productId,
        productName: productName,
        altNames: alternativeNames,
        description: description,
        images: urls,
        price: price,
        labelledPrice: labelledPrice,
        category: category,
        stock: stock,
      };
      await axios.post(
        import.meta.env.VITE_BASE_URL + "/api/product",
        product,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      toast.success("Product added successfully");
      navigate("/admin/products");
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong.");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 relative">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-tr from-pink-300 to-rose-300 rounded-full"></div>
            </div>

            <div className="relative z-10 flex items-center space-x-4">
              {/* Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>

              {/* Text Content */}
              <div>
                <h1 className="text-2xl font-bold text-gray-800 mb-1">
                  Add New Product
                </h1>
                <p className="text-gray-600 flex items-center">
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2"></span>
                  Create a new product listing for your store
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Form Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-secondary/80 overflow-hidden">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-6">
            <h2 className="text-xl font-semibold text-white">
              Product Information
            </h2>
          </div>

          {/* Form Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Product ID */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Product ID
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  value={productId}
                  onChange={(e) => {
                    setProductId(e.target.value);
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="Enter unique product ID (PRD001)"
                />
              </div>

              {/* Product Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Product Name
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => {
                    setProductName(e.target.value);
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="Enter product name"
                />
              </div>

              {/* Alternative Names */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Alternative Names
                </label>
                <input
                  type="text"
                  value={altNames}
                  onChange={(e) => {
                    setaltNames(e.target.value);
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="Enter alternative names (comma separated)"
                />
              </div>

              {/* Category */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Category
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <select
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                >
                  <option value="SkinCare">SkinCare</option>
                  <option value="Makeup">Makeup</option>
                  <option value="HairCare">HairCare</option>
                  <option value="BodyCare">BodyCare</option>
                </select>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Price
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">$</span>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="0.00"
                  />
                </div>
              </div>

              {/* Labelled Price */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Labelled Price
                  <span className="text-gray-400 text-xs ml-1">
                    (Original price)
                  </span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">$</span>
                  <input
                    type="number"
                    value={labelledPrice}
                    onChange={(e) => {
                      setlabelledPrice(e.target.value);
                    }}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="0.00"
                  />
                </div>
              </div>

              {/* Stock */}
              <div className="space-y-2 lg:col-span-1">
                <label className="block text-sm font-medium text-gray-700">
                  Stock Quantity
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="number"
                  value={stock}
                  onChange={(e) => {
                    setStock(e.target.value);
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="Enter stock quantity"
                />
              </div>
            </div>

            {/* Description - Full Width */}
            <div className="mt-6 space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                placeholder="Enter detailed product description..."
              />
            </div>

            {/* Images Upload */}
            <div className="mt-6 space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Product Images
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-pink-400 transition-colors duration-200">
                <input
                  type="file"
                  onChange={(e) => {
                    setImages(e.target.files);
                  }}
                  multiple
                  accept="image/*"
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <div className="space-y-2">
                    <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">
                        Click to upload images
                      </p>
                      <p className="text-xs text-gray-400">
                        PNG, JPG, JPEG up to 10MB each
                      </p>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex justify-end space-x-4">
              <button
                onClick={() => {
                  navigate("/admin/products");
                }}
                type="button"
                className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-600 text-white text-sm rounded-lg hover:from-red-700 hover:to-red-700 transition-all duration-200  shadow-lg hover:shadow-xl"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={addProduct}
                className="px-6 py-2 bg-gradient-to-r from-green-600 to-green-600 text-white text-sm rounded-lg hover:from-green-700 hover:to-green-700 transition-all duration-200  shadow-lg hover:shadow-xl"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
