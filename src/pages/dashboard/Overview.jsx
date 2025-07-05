// src/pages/dashboard/Overview.jsx
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const StatCard = ({ icon, label, value }) => (
  <div className="bg-gray-100 dark:bg-[#1a1a1a] text-blue-800 dark:text-[#c59d5f] p-6 rounded-lg shadow-md flex items-center justify-between transition-colors duration-300">
    <div className="text-3xl">{icon}</div>
    <div className="text-right">
      <h4 className="text-lg font-medium">{label}</h4>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

export default function Overview() {
  const { user } = useContext(AuthContext);

  const [stats, setStats] = useState({ total: 0, mine: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user?.email) return;

    const ac = new AbortController();
    (async () => {
      try {
        const res = await fetch(
          'https://cecipe-server-site.vercel.app/recipes',
          { signal: ac.signal }
        );
        const data = await res.json();
        setStats({
          total: data.length,
          mine: data.filter((r) => r.email === user.email).length,
        });
      } catch (err) {
        if (err.name !== 'AbortError') setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    })();

    return () => ac.abort();
  }, [user?.email]);

  if (loading)
    return (
      <p className="text-blue-800 dark:text-[#c59d5f]">Loading overview…</p>
    );
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="bg-white dark:bg-black min-h-screen p-6 rounded-lg transition-colors duration-300">
      <h2 className="text-2xl font-bold mb-6 text-blue-800 dark:text-[#c59d5f]">
        Welcome, {user?.displayName || 'User'}!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatCard icon="🍲" label="Total Recipes" value={stats.total} />
        <StatCard icon="📝" label="My Recipes" value={stats.mine} />
      </div>
    </div>
  );
}
