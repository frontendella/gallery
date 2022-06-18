import React from 'react';
const Data = ({ data }) => {
  return (
    <div>
      <ul>
        {data && data.map((item, id) => <li key={id}>{item.title}</li>)}
      </ul>
    </div>
  );
};
export default Data;