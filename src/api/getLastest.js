const getLastest = async () => {
  try {
    const res = await fetch(`${process.env.LASTEST_URL}?api_key=${process.env.API_KEY}`);
    const data = await res.json();
    console.log(data);
    return {
      success: true,
      data,
    };
  } catch (err) {
    return {
      success: false,
      message: err?.message,
    };
  }
};

export default getLastest;