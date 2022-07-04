import React from "react";
import { View, ScrollView } from "react-native";

import { styles } from "./ScreenTemplate.styles";
import { ScreenTemplateProps as Props } from "./ScreenTemplate.types";

const ScreenTemplate: React.FC<Props> = (props) => {
  const { scrollable = true, children } = props;
  if (!scrollable) {
    return <View style={[styles.container]}>{children}</View>;
  } else {
    <View style={[styles.container]}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </View>;
  }
};

ScreenTemplate.defaultProps = {};

export default ScreenTemplate;
