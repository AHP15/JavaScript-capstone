const getSingleMovie = async (movieId) => {
  try {
    const res = await fetch(
      `${process.env.MOVIE_DETAIL_URL}/${movieId}?api_key=${process.env.API_KEY}`
    );
    const data = await res.json();
    return {
      success: true,
      data,
    };
  } catch {
    return {
      success: false,
      message: err?.message,
    };
  }
};

export { getSingleMovie };
