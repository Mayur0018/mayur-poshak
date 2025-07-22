import Image from "next/image";
export default async function page({ params }) {
  const { id } = params;

  const res = await fetch(`http://localhost:3000/api/products/${id}`);

  if (!res.ok) {
    return <div>Product Not Found</div>;
  }

  const product = await res.json();
  return (
    <>
      <div className="p-6">
        <div className="grid items-start grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left Side - Images */}
          <div className="col-span-2 grid grid-cols-2 lg:sticky top-0 gap-1">
            <div className="columns-2 gap-1 space-y-1">
              <div className="overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={500}
                  className="w-full aspect-[253/337] object-cover object-top shadow-md hover:scale-[1.05] transition-all duration-300"
                />
              </div>
              <div className="overflow-hidden">
                <Image
                  src={product.image}
                  alt="Product"
                  width={400}
                  height={500}
                  className="w-full aspect-[253/337] object-cover object-top shadow-md hover:scale-[1.05] transition-all duration-300"
                />
              </div>
              <div className="overflow-hidden">
                <Image
                  src={product.image}
                  alt="Product"
                  width={400}
                  height={500}
                  className="w-full aspect-[253/337] object-cover object-top shadow-md hover:scale-[1.05] transition-all duration-300"
                />
              </div>
              <div className="overflow-hidden">
                <Image
                  src={product.image}
                  alt="Product"
                  width={400}
                  height={500}
                  className="w-full aspect-[253/337] object-cover object-top shadow-md hover:scale-[1.05] transition-all duration-300"
                />
              </div>
            </div>
            <div className="overflow-hidden">
              <Image
                src={product.image}
                alt="Product"
                width={400}
                height={500}
                className="w-full aspect-[3/4] object-cover object-top shadow-md hover:scale-[1.05] transition-all duration-300"
              />
            </div>
          </div>

          {/* Right Side - Details */}
          <div className="py-6 px-8 max-lg:max-w-2xl">
            <h2 className="text-xl font-semibold text-slate-900">
              {product.name}
            </h2>
            <p className="text-sm text-slate-500 mt-2">Well-Versed Commerce</p>

            {/* Ratings */}
            <div className="flex items-center space-x-1 mt-6">
              {[...Array(4)].map((_, idx) => (
                <svg
                  key={idx}
                  className="w-4 h-4 fill-slate-800"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              ))}
              <svg
                className="w-4 h-4 fill-[#CED5D8]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <button className="px-2.5 py-1.5 bg-slate-100 text-xs text-slate-900 rounded-md flex items-center ml-4">
                87 Reviews
              </button>
            </div>

            {/* Price Section */}
            <div className="mt-8 flex items-center flex-wrap gap-4">
              <p className="text-slate-900 text-4xl font-semibold">
                ${product.price}
              </p>
              <p className="text-slate-400 text-sm mt-2">
                <strike>${product.price}</strike>{" "}
                <span className="ml-1">Tax included</span>
              </p>
            </div>

            {/* Size Selection */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-slate-900">
                Choose a Size
              </h3>
              <div className="flex flex-wrap gap-4 mt-4">
                {["SM", "MD", "LG", "XL"].map((size) => (
                  <button
                    key={size}
                    className="w-10 h-10 border font-semibold text-slate-900 text-sm rounded-full flex items-center justify-center hover:border-slate-800"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 space-y-4">
              <button className="w-full px-4 py-2.5 border border-slate-800 bg-transparent hover:bg-slate-50 text-slate-900 text-sm font-medium rounded-md">
                Add to cart
              </button>
              <button className="w-full px-4 py-2.5 border border-slate-800 bg-slate-800 hover:bg-slate-900 text-white text-sm font-medium rounded-md">
                Buy now
              </button>
            </div>

            {/* Product Description */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-slate-900">
                Product Description
              </h3>
              <p className="text-sm text-slate-500 mt-4">
                Elevate your casual style with our premium men's t-shirt.
                Crafted for comfort and designed with a modern fit, this
                versatile shirt is an essential addition to your wardrobe.
              </p>
              <ul className="list-disc mt-4 pl-4 text-sm text-slate-500 space-y-3">
                <li>
                  A t-shirt is a wardrobe essential because it is so versatile.
                </li>
                <li>
                  Available in a wide range of sizes, from extra small to extra
                  large.
                </li>
                <li>Easy to care for, machine-washable and low heat dry.</li>
                <li>
                  You can customize with designs, paintings, or embroidery.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
