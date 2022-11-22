const createApp = async () => {
  try {
    const res = await fetch(`${process.env.INVOLVMENT_URL}/apps/`, {
      method: 'POST',
    });

    const data = await res.text();
    return data;
  } catch (err) {
    return err;
  }
};

export default createApp;