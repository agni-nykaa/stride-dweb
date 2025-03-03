# My Remix App

This is a sample Remix application.

## Setup

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd stride
   ```

2. Install dependencies:

   ```sh
   yarn install
   ```

3. Set up the environment:
   ```sh
   yarn setup
   ```

## Development

To start the development server, run:

```sh
yarn dev
```

## Build

To build the application, run:

```sh
yarn build
```

## Start

To start the application, run:

```sh
yarn start
```

# How to Implement a POST API Call

This guide demonstrates how to implement a POST API call using both the server-side and client-side approaches from our codebase.

## Server-Side Implementation (Using Remix Action)

1. Create a route file for your API endpoint:

```typescript
import { json } from '@remix-run/node';
import type { ActionFunction } from '@remix-run/node';

export const action: ActionFunction = async ({ request }) => {
  // 1. Get form data
  const formData = await request.formData();

  // 2. Extract data from formData
  const data = {
    key1: formData.get('key1'),
    key2: formData.get('key2'),
  };

  // 3. Configure API endpoint
  const apiUrl = `${process.env.API_HOST}/your-endpoint`;

  // 4. Make the API call
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const apiResponse = await response.json();

    // 5. Handle success
    if (apiResponse.success) {
      return json({ status: 'success', data: apiResponse.data });
    }

    // 6. Handle error
    return json(
      { status: 'error', message: 'API call failed' },
      { status: 400 },
    );
  } catch (error) {
    return json({ status: 'error', message: 'Server error' }, { status: 500 });
  }
};
```

## Client-Side Implementation (Using Remix useFetcher)

1. Import required hooks and initialize fetcher:

```typescript
import { useFetcher } from '@remix-run/react';

const YourComponent = () => {
  const fetcher = useFetcher();
```

2. Create a function to make the API call:

```typescript
const makeApiCall = () => {
  fetcher.submit(
    {
      key1: 'value1',
      key2: 'value2',
    },
    {
      method: 'post',
      action: '/your-api-endpoint',
    },
  );
};
```

3. Handle API response:

```typescript
useEffect(() => {
  if (fetcher.state === 'idle' && fetcher.data) {
    if (fetcher.data.status === 'success') {
      // Handle success
      const responseData = fetcher.data.data;
    } else {
      // Handle error
      const errorMessage = fetcher.data.message;
    }
  }
}, [fetcher.state, fetcher.data]);
```

## Example Usage

See the `address-details.ts` and `Delivery/index.tsx` files in our codebase for a complete implementation example of fetching address details using this pattern.
