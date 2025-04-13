export default function DesignCollection() {
  return (
    <div className="min-h-screen py-6 sm:py-8 lg:py-12 relative mb-16 sm:mb-20">
      {/* Main content area with flex layout */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Left side - Title and description */}
        <div className="lg:w-1/2 lg:pr-8 mb-4 lg:mb-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Design Collection</h1>
          <p className="mt-2 sm:mt-4 text-base sm:text-lg text-gray-600">
            Explore our curated collection of unique and artistic designs.
          </p>
        </div>

        {/* Right side - Collection Box */}
        <div className="lg:w-1/2 lg:pl-8">
          <div className="bg-white rounded-lg shadow-lg p-3 sm:p-6">
            <div className="grid grid-cols-2 gap-2 sm:gap-6">
              {/* Collection Items - Add more as needed */}
              <div className="bg-gray-50 rounded-lg p-2 sm:p-4 hover:shadow-md transition-shadow">
                <div className="aspect-w-1 aspect-h-1 mb-2 sm:mb-4">
                  <img
                    src="/placeholder-design.jpg"
                    alt="Design 1"
                    className="object-cover rounded-lg w-full h-full"
                  />
                </div>
                <h3 className="text-sm sm:text-lg font-semibold">Design 1</h3>
                <p className="text-xs sm:text-base text-gray-600">Beautiful phone case design</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-2 sm:p-4 hover:shadow-md transition-shadow">
                <div className="aspect-w-1 aspect-h-1 mb-2 sm:mb-4">
                  <img
                    src="/placeholder-design.jpg"
                    alt="Design 2"
                    className="object-cover rounded-lg w-full h-full"
                  />
                </div>
                <h3 className="text-sm sm:text-lg font-semibold">Design 2</h3>
                <p className="text-xs sm:text-base text-gray-600">Elegant pattern design</p>
              </div>

              {/* Add more design items as needed */}
            </div>

            {/* Pagination or Load More button */}
            <div className="mt-4 sm:mt-8 text-center">
              <button className="bg-blue-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base rounded-lg hover:bg-blue-700 transition-colors">
                Load More Designs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 