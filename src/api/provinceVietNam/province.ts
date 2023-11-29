import { axiosInterceptorForProvince } from "@/axios/interceptorForProvince";

const ProvinceVietNam_API = {
  getAllProvince: async () => {
    try {
      const response = await axiosInterceptorForProvince.get("/p", {
        // params: {
        //   depth: 3,
        // },
      });

      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  getDistrictFromProvinceCode: async (codeProvince: number) => {
    try {
      const response = await axiosInterceptorForProvince.get(`/p/${codeProvince}`, {
        params: {
          depth: 2,
        },
      });
      return response.data["districts"];
    } catch (err) {
      console.error(err);
    }
  },

  getWardFromDistrictCode: async (codeDistrict: number) => {
    try {
      const response = await axiosInterceptorForProvince.get(`/d/${codeDistrict}`, {
        params: {
          depth: 2,
        },
      });
      return response.data["wards"];
    } catch (err) {
      console.error(err);
    }
  },
};

export { ProvinceVietNam_API };
