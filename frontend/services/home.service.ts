export const getClientsData = async () => {
  try {
    const resp = await fetch("https://secure-lake-76119.herokuapp.com/");
    return resp.json();
  } catch (error) {}
};
