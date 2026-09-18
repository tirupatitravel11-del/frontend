const BlogSkeleton = () => {
  return (
<div className="bg-black/[0.02] backdrop-blur-sm rounded-2xl overflow-hidden animate-pulse border border-black/[0.04]">
  {/* Image */}
  <div className="w-full h-[300px] bg-black/[0.03]"></div>

  {/* Content */}
  <div className="p-4 space-y-3">
    <div className="h-5 w-3/4 rounded bg-black/[0.04]"></div>
    <div className="h-5 w-1/2 rounded bg-black/[0.04]"></div>

    <div className="flex gap-3 mt-4">
      <div className="h-4 w-24 rounded bg-black/[0.03]"></div>
      <div className="h-4 w-20 rounded bg-black/[0.03]"></div>
    </div>

    <div className="h-10 w-28 rounded-lg bg-black/[0.04] mt-3"></div>
  </div>
</div>
  );
};
export default BlogSkeleton