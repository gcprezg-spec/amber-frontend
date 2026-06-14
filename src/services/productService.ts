const API_URL = 'http://45.77.45.250:3000';

export async function getProducts() {
  const response = await fetch(
    `${API_URL}/products`
  );

  if (!response.ok) {
    throw new Error(
      'Failed to fetch products'
    );
  }

  return response.json();
}

export async function getProduct(
  id: number
) {
  const response = await fetch(
    `${API_URL}/products/${id}`
  );

  if (!response.ok) {
    throw new Error(
      'Failed to fetch product'
    );
  }

  return response.json();
}