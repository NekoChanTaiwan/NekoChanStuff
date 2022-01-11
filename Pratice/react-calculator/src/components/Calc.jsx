import React, { useState, useEffect } from 'react'
import { Container, Input, Keyboard, Header, Bottom, Left, Right, NumBtn, Btn } from './Calc.styled'
import { INCREMENT, DECREMENT, MULTIPLICATION, DIVISION, REMAINDER } from '../constant'

const key = {
  features: ['DEL', REMAINDER, 'C', '='],
  num: [7, 8, 9, 4, 5, 6, 1, 2, 3, '+ / -', 0, '.'],
  operator: [DIVISION, MULTIPLICATION, DECREMENT, INCREMENT],
}

export default () => {
  const [curNum, setCurNum] = useState('')
  const [secNum, setSecNum] = useState('')
  const [curOperator, setOperator] = useState('')
  const [total, setTotal] = useState(0)
  const [displayValue, setDisplayValue] = useState('')

  useEffect(() => {
    setDisplayValue(
      (curNum
        ? secNum
          ? Number(secNum)
          : total
          ? Number(total)
          : Number(curNum)
        : 0
      ).toLocaleString(undefined, { style: 'decimal', maximumFractionDigits: 20 })
    )
  }, [curNum, secNum, curOperator, total])

  const calc = (curNum = 0, operator, secNum) => {
    const n1 = Number(curNum)
    const n2 = Number(secNum)

    switch (operator) {
      case DIVISION:
        return n1 / n2

      case MULTIPLICATION:
        return n1 * n2

      case DECREMENT:
        return n1 - n2

      case INCREMENT:
        return n1 + n2

      case REMAINDER:
        return n1 % n2
    }
  }

  const equal = _ => {
    const total = calc(curNum, curOperator, secNum)
    setTotal(total)
    setCurNum(total)
  }

  const featuresBtnHander = features => _ => {
    switch (features) {
      case '=':
        equal()
        break

      case 'C':
        setTotal('')
        setCurNum('')
        break

      case '%':
        return operatorBtnHandler(REMAINDER)()

      case 'DEL':
        if (secNum) {
          if (secNum.length === 1) return setSecNum('0')
          return setSecNum(secNum.substring(0, secNum.length - 1))
        } else if (curNum) {
          if (curNum.length === 1) return setCurNum('0')
          return setCurNum(curNum.substring(0, curNum.length - 1))
        }
        return
    }

    setSecNum('')
    setOperator('')
  }

  const numBtnHandler = num => _ => {
    if (!curOperator) {
      if (num !== '+ / -') return setCurNum(curNum + num)
      return setCurNum(-curNum)
    } else {
      if (num !== '+ / -') return setSecNum(secNum + num)
      return setSecNum(-secNum)
    }
  }

  const operatorBtnHandler = operator => _ => {
    if (!curOperator) return setOperator(operator)
    equal()
    setSecNum('')
    setOperator(operator)
  }

  /**
   * toLocaleString() 默認可以將數字轉換為 000,000,000 ( 每三位加一個逗號，因為默認 option 有 style: 'decimal' )
   */
  return (
    <Container>
      <Input value={displayValue} />
      <Keyboard>
        <Header>
          {key.features.map(feature => (
            <Btn key={feature} onClick={featuresBtnHander(feature)}>
              {feature}
            </Btn>
          ))}
        </Header>
        <Bottom>
          <Left>
            {key.num.map(item => (
              <NumBtn key={item} onClick={numBtnHandler(item)}>
                {item}
              </NumBtn>
            ))}
          </Left>
          <Right>
            {key.operator.map(operator => (
              <Btn key={operator} onClick={operatorBtnHandler(operator)}>
                {operator}
              </Btn>
            ))}
          </Right>
        </Bottom>
      </Keyboard>
    </Container>
  )
}
