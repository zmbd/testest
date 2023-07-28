async function getClients() {
  const res = await fetch("https://nextjsisrback.onrender.com/clients", {
    next: { revalidate: 60 },
  });

  const clients = await res.json();

  return clients;
}

export default async function Page({ params }: any) {
  const clients = await getClients();

  return (
    <div className="w-full h-full flex flex-col justify-center align-middle p-3">
      <h1>{params.dynamic}</h1>
    </div>
  );
}
