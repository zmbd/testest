async function getClients(requestedClient: string, isPreview: boolean) {
  // const res = await fetch("https://nextjsisrback.onrender.com/clients", {
  //   next: { revalidate: isPreview ? 0 : 100 },
  // });

  const res = await fetch("https://nextjsisrback.onrender.com/clients", {
    next: { revalidate: 60 },
  });

  const clients = await res.json();

  return clients;
}

export default async function Page({ params }: any) {
  const clients = await getClients("morningstar", true);

  const isRouteValid = clients.some(
    (client: any) => client.client === params.dynamic
  );

  if (!isRouteValid) return <h1>NO</h1>;

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{params.dynamic}</h1>
    </div>
  );
}
