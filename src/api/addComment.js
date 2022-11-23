const addComment = async (id, name, insight) => {
  try {
    const res = await fetch(`${process.env.INVOLVMENT_URL}/apps/${process.env.APP_ID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
        username: name,
        comment: insight,
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

export default addComment;