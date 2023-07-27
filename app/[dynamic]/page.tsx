"use client";

import { useState } from "react";

const Page = (context: any) => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="w-full h-full flex flex-col justify-center align-middle p-3">
      <h1>{context.params.dynamic}</h1>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};

export default Page;
