import { useState } from 'react';

function NewReminder(): JSX.Element {
  const [title, setTitle] = useState('');

  return (
    <form className='my-30'>
      <label htmlFor='Add Reminder'></label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type='text'
        className='form-control'
      />
      <button
        onClick={}
        type='submit'
        className='btn btn-primary rounded-pill my-3'
      >
        Add Reminder
      </button>
    </form>
  );
}

export default NewReminder;
