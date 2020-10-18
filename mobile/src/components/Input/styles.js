import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 8px;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255,255,255, 0.8)',
})`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'NunitoSans-Regular';
`;
