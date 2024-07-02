import CustomFlatList from "./components/CustomFlatList/CustomFlatList";
import { SafeAreaView, StyleSheet, View } from "react-native";
import styles from './styles'

const data = Array(10).fill(1);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CustomFlatList
        data={data}
        style={styles.list}
        renderItem={() => <View style={styles.item} />}
        HeaderComponent={<View style={styles.header} />}
        StickyElementComponent={<View style={styles.sticky} />}
        TopListElementComponent={<View style={styles.topList} />}
      />
    </SafeAreaView>
  );
}
