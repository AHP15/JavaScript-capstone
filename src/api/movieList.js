const getMovies = async () => {
  try {
    const res = await fetch(`${process.env.MOVIES_URL}?api_key=${process.env.API_KEY}&page=3`);
    const data = await res.json();
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

export default getMovies;