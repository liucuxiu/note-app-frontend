const BASE_URL = process.env.REACT_APP_API_URL;

export async function loginUser(credentials) {
  try {
    const res = await fetch(`${BASE_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    return await res.json();
  }
  catch (e) {
    console.log(e);
  }
}
