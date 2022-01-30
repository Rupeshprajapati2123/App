import React from 'react';
import './pagination.css'
export default function Page() {
  return <div className='page'>
      <button ><i class="fas fa-chevron-left"></i></button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button><i class="fas fa-chevron-right"></i></button>
  </div>;
}
