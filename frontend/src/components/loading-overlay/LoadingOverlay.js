function ContentPlaceholder() {
  return (
    <div className="relative p-4 w-full bg-white overflow-hidden rounded-lg">
      <div className="animate-pulse flex flex-col">
        <div className="rounded w-full h-60 bg-gray-200"></div>

        <div className="grid grid-cols-2 mt-1 gap-x-2 gap-y-1">
          <div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
          <div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
          <div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
          <div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
        </div>

        <div className="flex flex-col mt-2">
          <div className="w-full h-10 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export function LoadingOverlay() {
  return (
    <>
      <div className="w-1/6 h-3 ml-4 bg-gray-200 rounded"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-3 gap-x-3">
        <ContentPlaceholder />
        <ContentPlaceholder />
        <ContentPlaceholder />
        <ContentPlaceholder />
      </div>
    </>
  );
}
