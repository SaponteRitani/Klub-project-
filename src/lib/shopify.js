/**
 * Shopify Storefront API integration for Klub theme.
 *
 * SETUP:
 * 1. In Shopify Admin → Apps → Develop apps → Create a custom app
 * 2. Enable Storefront API access
 * 3. Copy the Storefront API access token
 * 4. Fill in SHOPIFY_DOMAIN and STOREFRONT_TOKEN below
 *
 * Then replace the static PRODUCTS in ProductLineup.jsx with
 * data fetched via fetchProducts().
 */

const SHOPIFY_DOMAIN = 'YOUR-STORE.myshopify.com'; // e.g. 'drinkklub.myshopify.com'
const STOREFRONT_TOKEN = 'YOUR-STOREFRONT-API-TOKEN';
const API_VERSION = '2024-10';

async function shopifyFetch(query, variables = {}) {
  const res = await fetch(
    `https://${SHOPIFY_DOMAIN}/api/${API_VERSION}/graphql.json`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': STOREFRONT_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
    }
  );
  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);
  return json.data;
}

export async function fetchProducts() {
  const data = await shopifyFetch(`
    {
      products(first: 10) {
        edges {
          node {
            id
            title
            description
            handle
            images(first: 1) { edges { node { url altText } } }
            variants(first: 1) {
              edges { node { id price { amount currencyCode } } }
            }
          }
        }
      }
    }
  `);
  return data.products.edges.map(({ node }) => ({
    id: node.id,
    name: node.title,
    tagline: node.description,
    handle: node.handle,
    image: node.images.edges[0]?.node.url || '/images/placeholder.jpg',
    imageAlt: node.images.edges[0]?.node.altText || node.title,
    price: node.variants.edges[0]?.node.price.amount,
    variantId: node.variants.edges[0]?.node.id,
  }));
}

export async function createCheckout(lineItems) {
  const data = await shopifyFetch(
    `
    mutation cartCreate($lines: [CartLineInput!]!) {
      cartCreate(input: { lines: $lines }) {
        cart { checkoutUrl }
        userErrors { field message }
      }
    }
    `,
    {
      lines: lineItems.map(item => ({
        merchandiseId: item.variantId,
        quantity: item.qty,
      })),
    }
  );
  const errors = data.cartCreate.userErrors;
  if (errors.length) throw new Error(errors[0].message);
  return data.cartCreate.cart.checkoutUrl;
}
