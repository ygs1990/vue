import ApiService from '@/services/API-servies'

export const postRegionAction = {
  postRegInfo ({commit, state},callback) {
    ApiService.common.region()
      .then(function (response) {
        commit('GIT_REGION', response.data);
        if(callback) callback();
      })
      .catch(function (error) {
        alert(error);
      });
  },
  postSideInfo ({commit, state},callback) {
    ApiService.login.listMenu()
      .then(function (response) {
        commit('GIT_SIDE', response.data);
        if(callback) callback();
      })
      .catch(function (error) {
        alert(error);
      });
  },
  getregionCodeList ({commit, state},callback) {
    ApiService.hfInsMchnt.regionList()
      .then(function (response) {
        commit('MOD_REGIONCODES', response.data);
        if(callback) callback();
      })
      .catch(function (error) {
        alert(error);
      });
  },
  getMccTypes ({commit, state},callback) {
    ApiService.hfInsMchnt.mccList()
      .then(function (response) {
        commit('GET_MCCTYPES', response.data);
        if(callback) callback();
      })
      .catch(function (error) {
        alert(error);
      });
  }
};
