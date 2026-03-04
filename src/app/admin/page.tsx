'use client';

import { useEffect } from 'react';

export default function AdminPage() {
  useEffect(() => {
    // Redirect to the actual admin page
    window.location.href = '/admin/index.html';
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <p>Loading CMS...</p>
    </div>
  );
}
