import { RemixBrowser } from '@remix-run/react';
import { hydrate } from 'react-dom';

if (typeof window !== 'undefined') {
  // On the client, define __SERVER__ as false
  window.__SERVER__ = false;
}

hydrate(<RemixBrowser />, document);
