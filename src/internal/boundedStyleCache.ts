/** Tiny LRU-ish cache: caps heap from repeated dynamic style calls with identical args. */
const MAX_ENTRIES = 64;

const cache = new Map<string, object>();
const order: string[] = [];

export function getCachedStyle<T extends object>(key: string, create: () => T): T {
  const hit = cache.get(key);
  if (hit) return hit as T;
  const next = create();
  if (cache.size >= MAX_ENTRIES) {
    const oldest = order.shift();
    if (oldest !== undefined) cache.delete(oldest);
  }
  cache.set(key, next);
  order.push(key);
  return next;
}
