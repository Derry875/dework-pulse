import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Platforms() {
  const [platforms, setPlatforms] = useState<any[]>([]);

  useEffect(() => {
    supabase.from('platforms').select('*').then(({ data }) => {
      if (data) setPlatforms(data);
    });

    supabase
      .channel('platforms')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'platforms' },
        payload => {
          setPlatforms(prev =>
            prev.map(p => (p.id === payload.new.id ? payload.new : p))
          );
        }
      )
      .subscribe();
  }, []);

  return (
    <div>
      <h3 className="font-display text-2xl mb-4">Platforms</h3>
      <div className="space-y-4">
        {platforms.map(p => (
          <div key={p.id} className="glass rounded-xl p-4">
            <div className="flex justify-between">
              <strong>{p.name}</strong>
              <span className="text-sm text-white/70">
                {p.availability.toUpperCase()}
              </span>
            </div>
            <p className="text-sm text-white/60">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
