export function Layout({ children }) {
  return (
    <div className="flex justify-center items-center">
      <div className="m-auto max-w-2xl flex flex-col min-h-[100vh] sm:mt-16 sm:mx-8 sm:min-h-[60vh] bg-[#473A74] sm:rounded-3xl text-white overflow-hidden">
        {children}
      </div>
    </div>
  );
}