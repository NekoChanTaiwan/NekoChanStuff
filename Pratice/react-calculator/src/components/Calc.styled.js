import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 2fr 8fr;
  height: 100%;
`

export const Input = styled.input.attrs(props => ({
  value: props.value,
  title: 'input',
  disabled: 'disabled',
}))`
  /* padding-top: 5vh; */
  padding-right: 1vh;
  border: 0;
  background-color: #1e2024;
  text-align: right;
  color: #fff;
  font-size: 10vh;
`

export const Keyboard = styled.section`
  display: grid;
  grid-template-rows: 1fr 4fr;
  background-color: #202020;
`

export const Header = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1px;
  padding: 1px 1px 0;
`

export const Bottom = styled.section`
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 1px;
`

export const Left = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 1px;
`

export const Right = styled.section`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 1px;
  padding-left: 1px;
`

export const Btn = styled.button`
  border: 0;
  border-radius: 5px;
  background-color: #323232;
  color: #fff;
  user-select: none;
  font-size: 4vh;

  &:hover {
    background-color: #3b3b3b;
  }

  &:active {
    background-color: #323232;
  }
`

export const NumBtn = styled(Btn)`
  background-color: #3b3b3b;

  &:hover {
    background-color: #323232;
  }

  &:active {
    background-color: #282828;
  }
`

// export const EqualBtn = styled(Btn)`
//   background-color: #848381;

//   &:hover {
//     background-color: #797877;
//   }

//   &:active {
//     background-color: #6f6e6d;
//   }
// `
