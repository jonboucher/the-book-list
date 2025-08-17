import { useState } from 'react';
import axios from 'axios';
import styles from './ListModal.module.scss';

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

    const modal: Element | null = document.querySelector('.list-modal');
    modal?.classList.add('hidden');
  };

  return (
    <div className={`${styles['list-modal']} list-modal hidden`}>
      <form className={`${styles['list-modal__form']}`} onSubmit={handleSubmit}>
        <h2>Create New List</h2>
        <input type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea
          placeholder='Add a description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          required
        />
        <button type='submit'>Create List</button>
      </form>
    </div>
  );
}

export default ListModal;
