import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";
import toast from "react-hot-toast";
import Loader from "../components/loader";

export default function AdminProductPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleteConfirmVisible, isSetDeleteConfirmVisible] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const navigate = useNavigate();

  // Mock data for demonstration since axios isn't available

  useEffect(() => {
    // Simulate API call - replace with your actual axios call
    if (isLoading) {
      axios
        .get(import.meta.env.VITE_BASE_URL + "/api/product")
        .then((response) => {
          console.log(response.data);
          setProducts(response.data);
          setIsLoading(false);
        });
    }
  }, [isLoading]);

  function DeleteConfirmed(props) {
    const close = props.close;
    const productId = props.productId;
    const refresh = props.refresh;

    function productToDelete() {
      const token = localStorage.getItem("token");
      axios
        .delete(import.meta.env.VITE_BASE_URL + "/api/product/" + productId, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          console.log(res.data);
          toast.success("Product deleted successfully");
          close();
          refresh();
        })
        .catch((e) => {
          console.log(e);
          toast.error("Product deletion failed");
        });
    }

    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="delete-title"
          aria-describedby="delete-desc"
          className="relative w-[92%] max-w-[420px] rounded-3xl border border-[var(--color-accent)]/40 bg-white/95 shadow-2xl ring-1 ring-black/5"
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute -top-4 -right-4 rounded-full bg-white/90 border border-black/5 p-1 shadow-md hover:scale-105 transition"
          >
            <IoIosCloseCircle className="text-[32px] text-red-600 hover:brightness-110" />
          </button>

          {/* Accent pill header */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--color-accent)] text-white text-[11px] font-medium px-4 py-1 shadow-md">
            Confirm deletion
          </div>

          {/* Content */}
          <div className="p-6 pt-8 text-center">
            {/* Subtle warning icon */}
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-accent)]/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  className="text-[var(--color-accent)]"
                />
              </svg>
            </div>

            <h3
              id="delete-title"
              className="text-base font-semibold text-secondary"
            >
              Delete product?
            </h3>

            <p id="delete-desc" className="mt-1 text-xs text-black">
              Are you sure you want to delete the product{" "}
              <span className="font-semibold text-[var(--color-accent)]">
                {productId}
              </span>
              ? This action can’t be undone.
            </p>

            <div className="mt-5 flex items-center justify-center gap-3">
              <button
                onClick={productToDelete}
                className="inline-flex items-center justify-center rounded-xl bg-[var(--color-accent)] px-5 py-2 text-xs font-semibold text-white shadow-lg shadow-[rgba(255,0,102,0.35)] hover:translate-y-[-1px] active:translate-y-0 transition focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40 focus:ring-offset-2 focus:ring-offset-white"
              >
                Yes
              </button>
              <button
                onClick={close}
                className="inline-flex items-center justify-center rounded-xl border border-[#44444E]/20 bg-white px-4 py-2 text-xs font-semibold text-[#44444E] hover:bg-[var(--color-primary)] transition focus:outline-none focus:ring-2 focus:ring-[#44444E]/30 focus:ring-offset-2 focus:ring-offset-white"
              >
                Cancel
              </button>
            </div>
          </div>

          {/* Decorative accent glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(120px_60px_at_85%_0%,rgba(255,0,102,0.15),transparent_60%),radial-gradient(140px_80px_at_0%_100%,rgba(241,239,236,0.9),transparent_60%)]"
          />
        </div>
      </div>
    );
  }

  const FaRegTrashCan = () => (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  );

  const FaRegEdit = () => (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      />
    </svg>
  );

  return (
    <div className="w-full h-full p-4 bg-gradient-to-br  from-gray-50 to-gray-100 max-h-screen">
      {isDeleteConfirmVisible && (
        <DeleteConfirmed
          productId={productToDelete}
          refresh ={()=>{
            setIsLoading(true);
          }}
          close={() => {
            isSetDeleteConfirmVisible(false);
          }}
        />
      )}
      <div className="mb-4  flex items-center justify-between relative">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-secondary/400 mb-2">
            Product Management
          </h1>
          <p className="text-gray-600 text-sm">Manage your product inventory</p>
        </div>
        <Link
          to="/admin/add-product"
          className="bg-pink-500 text-sm shadow-lg font-bold hover:bg-pink-600 absolute right-[20px] text-white  py-2 px-2 rounded-full"
        >
          Add Product
        </Link>
      </div>
      {/* stats */}
      <div className="mt-2 mb-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="text-center">
            <div className="text-xl font-bold text-blue-600">
              {products.length}
            </div>
            <div className="text-gray-600 text-sm">Total Products</div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="text-center">
            <div className="text-xl font-bold text-green-600">
              {products.length > 0
                ? new Set(products.map((p) => p.category)).size
                : 0}
            </div>
            <div className="text-gray-600 text-sm">Categories</div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="text-center">
            <div className="textxl font-bold text-purple-600">
              Rs.
              {products
                .reduce((sum, p) => sum + (parseFloat(p.price) || 0), 0)
                .toFixed(2)}
            </div>
            <div className="text-gray-600 text-sm">Total Value</div>
          </div>
        </div>
      </div>

      {/* Modern card container */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        {/* Header section */}
        <div className="bg-gradient-to-r from-pink-400 to-pink-500 p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-white font-semibold text-lg">
              Products ({products.length})
            </h2>
            <div className="bg-white/20 rounded-full px-3 py-1">
              <span className="text-white text-sm font-medium">
                Total Items: {products.length}
              </span>
            </div>
          </div>
        </div>

        {/* Table container with custom scrollbar */}
        <div className="overflow-x-auto max-h-96">
        {isLoading? <Loader/>: <table className="w-full text-xs">
            <thead className="bg-gray-50 sticky top-0 z-10">
              <tr className="border-b border-gray-200">
                <th className="text-left p-3 font-semibold text-gray-700 min-w-[80px]">
                  Image
                </th>
                <th className="text-left p-3 font-semibold text-gray-700 min-w-[100px]">
                  Product ID
                </th>
                <th className="text-left p-3 font-semibold text-gray-700 min-w-[120px]">
                  Name
                </th>
                <th className="text-left p-3 font-semibold text-gray-700 min-w-[80px]">
                  Price
                </th>
                <th className="text-left p-3 font-semibold text-gray-700 min-w-[100px]">
                  Label Price
                </th>
                <th className="text-left p-3 font-semibold text-gray-700 min-w-[100px]">
                  Category
                </th>
                <th className="text-center p-3 font-semibold text-gray-700 min-w-[100px]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => {
                return (
                  <tr
                    key={item.productId}
                    className={`border-b border-gray-100  transition-colors duration-200'}`}
                  >
                    <td className="p-3">
                      <div className="relative group">
                        <img
                          src={item.images[0]}
                          alt="Product"
                          className="w-12 h-12 object-cover rounded-lg shadow-sm border border-gray-200  transition-shadow duration-200"
                        />
                        {/* <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-lg transition-colors duration-200"></div> */}
                      </div>
                    </td>
                    <td className="p-3">
                      <span className="text-white font-mono text-xs bg-accent/60 px-2 py-1 rounded-full">
                        {item.productId}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="font-medium text-gray-800">
                        {item.productName}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="text-green-600 font-semibold">
                        Rs.{item.price}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="text-red-500 font-bold text-sm">
                        Rs.{item.labelledPrice}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                        {item.category}
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="flex justify-center items-center gap-2">
                        <button
                          onClick = {
                            ()=>{
                              navigate("/admin/update-product",{
                                state: item
                              })
                            }
                          }
                          className="p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200 group"
                          title="Edit Product"
                        >
                          <FaRegEdit />
                        </button>
                        <button
                          onClick={() => {
                            setProductToDelete(item.productId);
                            isSetDeleteConfirmVisible(true);
                          }}
                          className="p-2 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 group"
                          title="Delete Product"
                        >
                          <FaRegTrashCan />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>}
        </div>

        {/* Empty state */}
        {!isLoading && products.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📦</div>
            <h3 className="text-gray-600 font-medium mb-2">
              No products found
            </h3>
            <p className="text-gray-500 text-sm">
              Start adding products to see them here
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
