import { apiClient } from '@/apis/clients';

export const api = {
  async getAllCategories() {
    try {
      const { data } = await apiClient.get('/category');
      return data;
    } catch (e) {
      throw Error(e.message);
    }
  },
};
