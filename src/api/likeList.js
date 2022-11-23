const getLikes = async () => {
  try {
    const res = await fetch(`${process.env.INVOLVMENT_URL}/apps/${process.env.APP_ID}/likes`);
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

export default getLikes;