export const getServices = async () => {
  try {
    const res = await fetch(
      "https://vehicleboss-with-next.vercel.app/services/api/get-all",
      {
        cache: "no-store",
      },
    );

    const data = await res.json();
    return data.services;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const getServicesDetails = async (id) => {
  const res = await fetch(
    `https://vehicleboss-with-next.vercel.app/services/api/${id}`,
    {
      cache: "no-store",
    },
  );

  const data = await res.json();
  return data.service;
};
