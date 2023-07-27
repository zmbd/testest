export async function generateStaticParams() {
  const clients = await fetch("https://nextjsisrback.onrender.com/clients", {
    next: { revalidate: 60 },
  }).then((res) => res.json());

  console.log(clients);

  return clients.map(({ client }: { client: string }) => ({
    dynamic: client,
  }));
}

export default async function Page({ params }: any) {
  return (
    <div className="w-full h-full flex flex-col justify-center align-middle p-3">
      <h1>{params.dynamic}</h1>
    </div>
  );
}
