"use client";

import React, { useState, useEffect } from "react";
import { ProvinceVietNam_API } from "@/api/provinceVietNam/province";
import { Button, Box, Select, Center, Input, FormControl, FormLabel, CircularProgress } from "@chakra-ui/react";

interface ProvinceInterface {
  code: number;
  name: String;
}

const FormProvince = () => {
  const emptyObjectProvince = {
    name: "",
    code: 0,
  };
  const [listProvince, setListProvince] = useState<[ProvinceInterface]>([emptyObjectProvince]);
  const [province, setSelectProvince] = useState<ProvinceInterface>(emptyObjectProvince);
  const [disableDistrict, setDisableDistrict] = useState(true);
  const [listDistricts, setListDistricts] = useState<[ProvinceInterface]>([emptyObjectProvince]);
  const [district, setSelectDistrict] = useState<ProvinceInterface>(emptyObjectProvince);
  const [listWards, setListWards] = useState<[ProvinceInterface]>([emptyObjectProvince]);
  const [street, setStreet] = useState();
  const [loading, setLoading] = useState(true);
  const [ward, setSelectWard] = useState<ProvinceInterface>(emptyObjectProvince);

  const resetValue = () => {
    setSelectProvince({
      code: 0,
      name: "",
    });

    setDisableDistrict(true);
  };
  const onChangeProvince = async (codeProvince: number) => {
    var objectProvince = findObjectFromCode(listProvince, codeProvince);
    if (objectProvince != null) setSelectProvince(objectProvince);

    let _listDistricts = await ProvinceVietNam_API.getDistrictFromProvinceCode(codeProvince);
    setListDistricts(_listDistricts);
    setSelectDistrict({
      name: "",
      code: 0,
    });
    setDisableDistrict(false);
  };
  const onChangeDistrict = async (codeDistrict: number) => {
    // listDistricts.forEach((district) => {
    //   console.log("DIS", district);
    // });
    var objectDistrict = findObjectFromCode(listDistricts, codeDistrict);
    if (objectDistrict != null) setSelectDistrict(objectDistrict);
    let _listWards = await ProvinceVietNam_API.getWardFromDistrictCode(codeDistrict);
    setListWards(_listWards);
  };
  const onChangeWard = async (codeWard: number) => {
    var objectWard = findObjectFromCode(listWards, codeWard);
    if (objectWard != null) setSelectWard(objectWard);
  };

  const onSetAllProvince = async () => {
    let _listProvince: [ProvinceInterface] = await ProvinceVietNam_API.getAllProvince();
    setLoading(!loading);

    setListProvince(_listProvince);
  };

  const findObjectFromCode = (list: [ProvinceInterface], code: number) => {
    var afterFind = list.find((l) => l.code == code);
    // if(afterFind != null){
    //   return
    // }

    if (afterFind != null) return afterFind;
  };

  useEffect(() => {
    onSetAllProvince();
    console.log("CALL");
  }, []);

  return (
    <Box maxW="2xl" mx="auto" p={4} border="1px" borderColor="gray.200" borderRadius={"2xl"}>
      {loading ? (
        <Center>
          <CircularProgress isIndeterminate color="green.300" />
        </Center>
      ) : (
        <FormControl>
          <FormLabel py={2}>Tỉnh (Thành phố)</FormLabel>
          <Select
            placeholder="Chọn Tỉnh (Thành phố ) "
            onChange={async (event) => {
              let value: number = Number(event.target.value);
              if (value == 0) {
                resetValue();
              } else {
                await onChangeProvince(value);
              }
            }}
          >
            {listProvince?.map((value) => {
              return (
                <option value={value.code} key={value.code}>
                  {value.name}
                </option>
              );
            })}
          </Select>

          <FormLabel py={2}>Chọn Quận Huyện</FormLabel>

          <Select
            isDisabled={disableDistrict}
            placeholder="Chọn Quận/Huyện"
            onChange={(event) => {
              let codeDistrict: number = Number(event.target.value);

              if (codeDistrict != 0) {
                onChangeDistrict(codeDistrict);
              }
            }}
          >
            {listDistricts?.map((value) => {
              return (
                <option value={value.code!} key={value.code}>
                  {value.name}
                </option>
              );
            })}
          </Select>

          <FormLabel py={2}>Chọn Phường</FormLabel>

          <Select
            isDisabled={district.code == 0 ? true : false}
            placeholder="Chọn Phường"
            onChange={(event) => {
              let codeWard: number = Number(event.target.value);
              if (codeWard != 0) {
                onChangeWard(codeWard);
              }
              // if (codeDistrict != 0) {
              //   onChangeDistrict(codeDistrict);
              // }
              // let codeDistrict: number = Number(event.target.value);
              // onChangeDistrict(codeDistrict);
            }}
          >
            {listWards?.map((value) => {
              return (
                <option value={value.code!} key={value.code}>
                  {value.name}
                </option>
              );
            })}
          </Select>

          <FormLabel py={2}>Địa chỉ</FormLabel>
          <Input placeholder="Nhập địa chỉ và tên đường"></Input>

          <Button
            mt={4}
            onClick={() => {
              console.log("WARD", ward);
              // validateForm();
            }}
          >
            Handle Submit
          </Button>
        </FormControl>
      )}
    </Box>
  );
};

export default FormProvince;
