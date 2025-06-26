import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const StatCard = ({ icon, label, value, bg }) => (
  <div className={`p-6 rounded shadow text-lg ${bg}`}>
    {icon} {label}: <span className="font-bold">{value}</span>
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

  if (loading) return <p>Loading overview…</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Welcome, {user?.displayName || 'User'}!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <StatCard
          icon="🍲"
          label="Total Recipes"
          value={stats.total}
          bg="bg-yellow-100"
        />
        <StatCard
          icon="📝"
          label="My Recipes"
          value={stats.mine}
          bg="bg-green-100"
        />
      </div>
    </div>
  );
}
