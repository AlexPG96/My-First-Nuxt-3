import {API_URL} from '../utils/constants';

export async function getCharacters() {
  try {
    const response = await fetch(`${API_URL}/character`);
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
    return null;
  }
}