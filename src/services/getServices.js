export const getServices = async () => {
  try {
    const res = await fetch("http://localhost:3000/services/api/get-all", {
      cache: "no-store",
    });

    const data = await res.json();
    return data.services;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const getServicesDetails = async (id) => {
  const res = await fetch(`http://localhost:3000/services/api/${id}`, {
    cache: "no-store",
  });

  const data = await res.json();
  return data.service;
};
