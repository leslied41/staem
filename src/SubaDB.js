import { createClient } from "@supabase/supabase-js";

const api = {
  url: import.meta.env.VITE_SUPADB_URL,
  an_key: import.meta.env.VITE_SUPADB_ANON_KEY,
  key: import.meta.env.VITE_AUTHORIZATION_KEY,
};

export const supabase = createClient(api.url, api.an_key, {
  headers: {
    Authorization: `Bearer ${api.key}`,
  },
});
