import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CButton from "./components/CButton";
import EqualBT from "./components/EqualBT";
import FunctionBT from "./components/FunctionBT";
import NumberBT from "./components/NumberBT";
import OperatorBT from "./components/OperatorBT";
export default function App() {
  const [express, setExpress] = useState("");
  const [result, setResult] = useState("0");
  const [hasOperator, setHasOperator] = useState(false);
  const [currentOperator, setCurrentOperator] = useState();
  const numberClick = (i) => {
    setExpress((pre) => pre + i);
  };
  const operatorClick = (o) => {
    if (!express == "") {
      let last = express[express.length - 1];
      if (hasOperator && !isNaN(last)) {
        const result = floor(express);
        setResult(express + "=" + result);
        setExpress(result + o);
      } else {
        if (isNaN(last)) {
          if (o != currentOperator) {
            setExpress((pre) => pre.replace(pre[pre.length - 1], o));
            setCurrentOperator(o);
          }
        } else {
          setExpress((pre) => pre + o);
          setHasOperator(true);
        }
      }
    }
  };
  const clear = () => {
    setExpress("");
    setResult("");
    setHasOperator(false);
    setCurrentOperator(undefined);
  };
  const del = () => {
    setExpress((pre) => {
      const arr = pre.split("");
      arr.pop();
      return arr.join("");
    });
  };
  const pre = () => {
    if (express == "") {
      setExpress("");
    }
  };
  const equal = () => {
    const val = floor(express);
    setResult((pre) => express + "=" + val);
    setExpress(val);
  };

  const replace = (str) => {
    str = str.replace("x", "*");
    return str.replace("÷", "/");
  };

  const floor = (express) => {
    let result = eval(replace(express));
    if (result !== Math.floor(result)) {
      result = Math.floor(result * 100) / 100;
    }
    return (result = result.toString());
  };

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <View style={styles.input}>
          <Text style={styles.express}>{express}</Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.resultText}>{result}</Text>
        </View>
      </View>
      <View style={styles.keyboard}>
        <View style={styles.row}>
          <CButton onPress={clear} />
          <FunctionBT text="-->" onPress={del} />
          <FunctionBT text="+/-" onPress={pre} />
          <OperatorBT
            text="÷"
            onPress={() => {
              operatorClick("÷");
            }}
          />
        </View>

        <View style={styles.row}>
          <NumberBT
            text="7"
            onPress={() => {
              numberClick("7");
            }}
          />
          <NumberBT
            text="8"
            onPress={() => {
              numberClick("8");
            }}
          />
          <NumberBT
            text="9"
            onPress={() => {
              numberClick("9");
            }}
          />
          <OperatorBT
            text="x"
            onPress={() => {
              operatorClick("x");
            }}
          />
        </View>
        <View style={styles.row}>
          <NumberBT
            text="4"
            onPress={() => {
              numberClick("4");
            }}
          />
          <NumberBT
            text="5"
            onPress={() => {
              numberClick("5");
            }}
          />
          <NumberBT
            text="6"
            onPress={() => {
              numberClick("6");
            }}
          />
          <OperatorBT
            text="+"
            onPress={() => {
              operatorClick("+");
            }}
          />
        </View>
        <View style={styles.row}>
          <NumberBT
            text="1"
            onPress={() => {
              numberClick("1");
            }}
          />
          <NumberBT
            text="2"
            onPress={() => {
              numberClick("2");
            }}
          />
          <NumberBT
            text="3"
            onPress={() => {
              numberClick("3");
            }}
          />
          <OperatorBT
            text="-"
            onPress={() => {
              operatorClick("-");
            }}
          />
        </View>

        <View style={styles.row}>
          <NumberBT
            text="0"
            onPress={() => {
              numberClick("0");
            }}
          />
          <NumberBT
            text="."
            onPress={() => {
              numberClick(".");
            }}
          />
          <EqualBT
            onPress={() => {
              equal();
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 5,
  },
  screen: {
    flex: 1,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#121",
  },
  keyboard: {
    flex: 5,
    backgroundColor: "#ccc",
    borderRadius: 8,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  input: {
    flex: 3,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    borderBottomColor: "#131",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  result: {
    flex: 2,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  express: {
    color: "orange",
    fontSize: 26,
  },
  resultText: {
    color: "#fff",
    fontSize: 22,
  },
});
