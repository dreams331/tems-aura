'use client';

import { useEffect } from 'react';

export default function AdminPage() {
  useEffect(() => {
    // Force redirect to the working admin page
    window.location.replace('/admin/index.html');
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px', color: '#333' }}>
          Loading TEMS AURA CMS...
        </h2>
        <p style={{ color: '#666' }}>Redirecting to admin panel...</p>
      </div>
    </div>
  );
}
