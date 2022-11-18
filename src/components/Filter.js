import React from 'react';

export default function filter({ filter, onChange }) {
  return (
    <div>
      <input type="text" value={filter} onChange={onChange} />
    </div>
  );
}
