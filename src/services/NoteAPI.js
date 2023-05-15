const BASE_URL = process.env.REACT_APP_API_URL;
const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;

export async function fetchNotes() {
  try {
    const res = await fetch(`${BASE_URL}/notes`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: AUTH_TOKEN,
      },
    });
    return await res.json();
  } catch (e) {
    console.log(e);
  }
}

export async function fetchNoteById(id) {
  try {
    const res = await fetch(`${BASE_URL}/notes/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: AUTH_TOKEN,
      },
    });
    return await res.json();
  } catch (e) {
    console.log(e);
  }
}

export async function saveNote(note) {
  try {
    const res = await fetch(`${BASE_URL}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: AUTH_TOKEN,
      },
      body: JSON.stringify({
        title: note.title,
        content: note.content,
      }),
    });
    return await res.json();
  }
  catch (e) {
    console.log(e);
  }
}

export async function updateNoteById(note) {
  try {
    const res = await fetch(`${BASE_URL}/notes/${note.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: AUTH_TOKEN,
      },
      body: JSON.stringify({
        title: note.title,
        content: note.content,
      }),
    });
    return await res.json();
  } catch (e) {
    console.log(e);
  }
}

export async function deleteNoteById(id) {
  try {
    const res = await fetch(`${BASE_URL}/notes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: AUTH_TOKEN,
      },
    });
    return await res.json();
  } catch (e) {
    console.log(e);
  }
}
