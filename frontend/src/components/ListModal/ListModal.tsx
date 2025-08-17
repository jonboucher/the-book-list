import { useState } from 'react';
import axios from 'axios';

function ListModal() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:3000/api/lists', {
        user_id: 'ab6fbf9b-d204-4a7c-be97-e96cc185564c',
        title,
        description,
      });
      setSuccess('List created successfully!');
      setTitle('');
      setDescription('');
      console.log('Response:', response.data);
    } catch (err) {
      setError('Failed to create list. Try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title: <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>

      <br />

      <label>
        Description: <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} required />
      </label>

      <br />

      <button type='submit'>Create List</button>
    </form>
  );
}

export default ListModal;
