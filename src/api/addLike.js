const addLike = async (id) => {
  try {
    const res = await fetch(`${process.env.INVOLVMENT_URL}/apps/${process.env.APP_ID}/likes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
      }),
    });
    const data = await res.json();
    return {
      secuss: true,
      data,
    };
  } catch (err) {
    return {
      secuss: false,
      message: err?.message,
    };
  }
};

export default addLike;