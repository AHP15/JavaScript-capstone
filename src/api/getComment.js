const getComment = async (id) => {
  try {
    const res = await fetch(`${process.env.INVOLVMENT_URL}/apps/${process.env.APP_ID}/comments?item_id=${id}`);
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

export default getComment;