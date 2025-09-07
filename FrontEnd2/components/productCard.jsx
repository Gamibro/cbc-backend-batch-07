export default function ProductCard(props) {
  const item = props.item;
  return (
    <div
      className="
        group relative w-[350px] h-[450px]
        rounded-2xl border border-accent/10 bg-white/80 p-3
        flex flex-col items-center
        shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur
        transition-all duration-300 hover:-translate-y-1
        hover:shadow-[0_20px_60px_rgba(255,0,102,0.25)]
        overflow-hidden
        before:absolute before:inset-0 before:-z-10 before:rounded-[1.1rem]
        before:bg-[radial-gradient(80%_60%_at_80%_0%,rgba(255,0,102,0.14),transparent_60%)]
      "
    >
      {/* soft accent sparkles */}
      <span className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-accent/20 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-[var(--color-primary)]/70 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* image */}
      <div className="relative mt-1">
        <div
          className="
            absolute inset-0 -z-10 rounded-xl
            bg-gradient-to-b from-accent/10 to-transparent opacity-0
            transition-opacity duration-300 group-hover:opacity-100
          "
        />
        <img
          src={item.images[0]}
          alt={item.productName}
          className="
            w-[300px] h-[250px] object-cover
            rounded-xl shadow-md ring-1 ring-accent/10
            transition-transform duration-300 group-hover:scale-[1.03]
          "
        />
        {/* corner ribbon if discounted */}
        {item.labelledPrice > item.price && (
          <div
            className="
              absolute -left-2 -top-2 rotate-[-6deg]
              rounded-md bg-accent text-white
              px-2 py-[2px] text-[10px] font-semibold shadow-md
            "
          >
            SALE
          </div>
        )}
        {/* category badge */}
        <span
          className="
            absolute -top-2 right-2
            rounded-full border border-accent/20 bg-white/95
            px-2 py-[2px] text-[10px] font-semibold text-secondary  shadow-sm
          "
        >
          {item.category}
        </span>
      </div>

      {/* title with accent underline */}
      <div className="mt-3 text-center px-2 w-full">
        <h1 className="text-[15px] font-semibold text-secondary line-clamp-2">
          {item.productName}
        </h1>
        <div className="mx-auto mt-1 h-[2px] w-16 rounded-full bg-accent/40 group-hover:w-20 transition-all"></div>
      </div>

      {/* price block with subtle divider */}
      <div className="relative mt-2 w-full">
        <div className="mx-auto h-px w-[85%] bg-secondary/10 rounded-full" />
        {item.labelledPrice > item.price ? (
          <div className="mt-2 flex items-end justify-center gap-3">
            <p className="text-[20px] leading-none font-extrabold tracking-tight text-accent">
              LKR {item.price.toFixed(2)}
            </p>
            <p className="text-sm leading-none text-secondary line-through">
              LKR {item.labelledPrice.toFixed(2)}
            </p>
            {/* visual-only chip */}
           
          </div>
        ) : (
          <div className="mt-2 flex items-center justify-center gap-2">
            <p className="text-[20px] leading-none font-extrabold tracking-tight text-accent">
              Rs. {item.labelledPrice.toFixed(2)}
            </p>
            <span className="rounded-full bg-[var(--color-primary)]/80 px-2 py-[2px] text-[10px] font-medium text-secondary/70 border border-accent/10">
              Everyday
            </span>
          </div>
        )}
      </div>

      {/* meta row with pill + tiny dot separator */}
      <div className="mt-3 flex items-center gap-2">
        <p className="text-[11px] font-semibold tracking-wide text-secondary bg-[var(--color-primary)]/80 px-2 py-1 rounded-md border border-accent/10">
          {item.productId}
        </p>
        <span className="h-1 w-1 rounded-full bg-secondary" />
        <span className="text-[11px] text-secondary font-semibold">{item.stock} stock</span>
      </div>

      {/* CTA with glossy sheen and arrow */}
      <button
        className="
          mt-auto w-full rounded-xl bg-accent/90 px-3 py-2.5 text-sm hover:cursor-pointer
          font-semibold text-white shadow-lg
          transition-all
          hover:bg-accent hover:shadow-[0_14px_34px_rgba(255,0,102,0.35)]
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
          relative overflow-hidden
          after:absolute after:inset-0 after:rounded-xl after:ring-1 after:ring-white/20 after:pointer-events-none
        "
      >
        <span className="relative z-[1] inline-flex items-center justify-center gap-2">
          View Product
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14" />
            <path d="M13 5l7 7-7 7" />
          </svg>
        </span>
        {/* sheen */}
       
      </button>
    </div>
  );
}
