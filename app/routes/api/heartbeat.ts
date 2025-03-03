import { json } from '@remix-run/node';
import type { LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = async () =>
  json({ status: 'ok' }, { status: 200 });
