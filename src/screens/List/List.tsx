import React, { useEffect, useState } from "react";
import Unauthorized from "../../components/Unauthorized/Unauthorized";
import ScreenTemplate from "../../components/ScreenTemplate/ScreenTemplate";
import { gql, useQuery } from "@apollo/client";
import { RootState } from "../../redux/store/rootReducer";
import { useSelector } from "react-redux";
import { Text, View } from "react-native";
import { styles } from "./List.styles";

export const QUERY = gql`
  query {
    continents {
      name
      code
    }
  }
`;
const List = () => {
  const { data } = useQuery(QUERY);
  const { user } = useSelector((state: RootState) => state.auth);

  const UnauthorizedView = () => (
    <ScreenTemplate scrollable={false}>
      <Unauthorized />
    </ScreenTemplate>
  );

  return (
    <ScreenTemplate scrollable={false}>
      {!user ? (
        UnauthorizedView()
      ) : (
        <View style={styles.container}>
          {data.continents.map((item) => (
            <Text key={item.code} style={styles.textStyle}>
              {JSON.stringify(item.name)}
            </Text>
          ))}
        </View>
      )}
    </ScreenTemplate>
  );
};

export default List;
