import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Alerts() {
  const [alerts, setAlerts] = useState<any[]>([]);

  useEffect(() => {
    supabase
      .from('task_alerts')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10)
      .then(({ data }) => data && setAlerts(data));

    supabase
      .channel('alerts')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'task_alerts' },
        payload => setAlerts(a => [payload.new, ...a])
      )
      .subscribe();
  }, []);

  return (
    <aside>
      <h3 className="font-display text-2xl mb-4">Alerts</h3>
      <div className="space-y-3">
        {alerts.map(a => (
          <div key={a.id} className="glass rounded-xl p-3 text-sm">
            {a.message}
          </div>
        ))}
      </div>
    </aside>
  );
}
