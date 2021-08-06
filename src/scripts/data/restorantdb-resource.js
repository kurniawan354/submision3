import API_ENDPOINT from '../globals/api-endpoint';

class RestorantDbSource {
  static async homePageResto() {
    const response = await fetch(API_ENDPOINT.HOME_PAGE);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    console.log(responseJson.restaurant);
    return responseJson.restaurant;
  }
}

export default RestorantDbSource;
