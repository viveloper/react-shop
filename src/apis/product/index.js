import { apiClient } from '@/apis/clients';

export const api = {
  async fetchNewArrivals() {
    try {
      const { data } = await apiClient.get('/product', {
        params: {
          isNewArrival: true,
        },
      });
      return data;
    } catch (e) {
      throw Error(e.message);
    }
  },
  async fetchProducts(categoryId = null) {
    try {
      const { data } = await apiClient.get('/product', {
        params: {
          categoryId,
        },
      });
      return data;
    } catch (e) {
      throw Error(e.message);
    }
  },
};
