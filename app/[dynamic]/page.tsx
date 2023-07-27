"use client";

export default function Page({ params }: any) {
  return (
    <div className="w-full h-full flex flex-col justify-center align-middle p-3">
      <h1>{params.dynamic}</h1>
    </div>
  );
}
