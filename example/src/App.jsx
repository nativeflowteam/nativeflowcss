import { useState } from 'react'
import { Text, View, Button, TextInput } from 'react-native'
import { p, m, flex, border } from 'nativeflowcss'

export default function App() {
  const [currentGoalInput, setCurrentGoalInput] = useState('')
  const [goalsList, setGoalsList] = useState([])

  function handleGoalInput(input) {
    setCurrentGoalInput(input)
  }

  function handleGoalAdd() {
    setGoalsList((currentGoalsList) => [...currentGoalsList, currentGoalInput])
  }

  return (
    <View style={[p.t(56), p.x(32), flex.f(1)]}>
      <View
        style={[
          flex.row,
          flex.justify('around'),
          flex.gap(12),
          flex.items('center'),
          flex.f(1),
        ]}
      >
        <TextInput
          placeholder='Your div centering goal!'
          keyboardType='alphanumeric'
          style={[border.width(), border.color('#cccccc'), flex.f(), p.p(6)]}
          onChangeText={handleGoalInput}
        />
        <Button title='Add Goal' onPress={handleGoalAdd} />
      </View>
      <View style={[flex.f(5)]}>
        <Text style={[m.b(12)]}>Your Goals:</Text>
        {goalsList.map((goal, index) => (
          <Text key={index}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}
