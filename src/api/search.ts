import apiRequest from './index';

const RESOURCE = '/search';

export const getSearchList = async (keyword: string, page: number) => {
  try {
    const response = await apiRequest.get({
      url: `${RESOURCE}`,
      config: { params: { q: keyword, page: page } },
    });

    return response;
  } catch (error) {
    throw new Error('API getSearchList error');
  }
};
