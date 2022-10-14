import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Pendanaan } from "../../common";

const SejarahPendanaan = () => {
  return (
    <ScrollView>
      <Pendanaan
        name={"Gaji Desember 2022"}
        danaAwal={14}
        danaAkhir={1115}
        createdAt={11}
        danaList={[]}
      />

      <Pendanaan
        name={"name"}
        danaAwal={12}
        danaAkhir={111}
        createdAt={11}
        danaList={[]}
      />
      <Pendanaan
        name={"name"}
        danaAwal={1000}
        danaAkhir={2000}
        createdAt={11}
        danaList={[]}
      />
      <Pendanaan
        name={"name"}
        danaAwal={1000}
        danaAkhir={111}
        createdAt={11}
        danaList={[]}
      />
      <Pendanaan
        name={"name"}
        danaAwal={16}
        danaAkhir={11178}
        createdAt={11}
        danaList={[]}
      />
      <Pendanaan
        name={"name"}
        danaAwal={67}
        danaAkhir={111}
        createdAt={11}
        danaList={[]}
      />
      <Pendanaan
        name={"name"}
        danaAwal={67}
        danaAkhir={1118}
        createdAt={11}
        danaList={[]}
      />
    </ScrollView>
  );
};

export default SejarahPendanaan;
