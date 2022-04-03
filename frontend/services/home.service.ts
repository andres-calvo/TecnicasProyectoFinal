export const getClientsData = async () => {
  try {
    const resp = await fetch("http://127.0.0.1:5000/");

    console.log(resp);
    return resp.json();
  } catch (error) {}
};
