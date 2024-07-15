// typography.ts
import styled from 'styled-components/native';

const fontFamily = 'Inter';

export const Typography = {
  H1: styled.Text`
    font-family: ${fontFamily};
    font-size: 32px;
    font-weight: 700;
    color: #333;
  `,
  H2: styled.Text`
    font-family: ${fontFamily};
    font-size: 24px;
    font-weight: 600;
    color: #333;
  `,
  Body: styled.Text`
    font-family: ${fontFamily};
    font-size: 16px;
    font-weight: 400;
    color: #333;
  `,
  Caption: styled.Text`
    font-family: ${fontFamily};
    font-size: 12px;
    font-weight: 300;
    color: #333;
  `,
};
