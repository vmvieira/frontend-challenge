import styled from 'styled-components';

const Button = styled.button`
  padding: 1em;
  color: ${(p) =>
    p.secondary ? p.theme.primaryColor : p.theme.secondaryColor};
  background: ${(p) =>
    p.secondary ? p.theme.secondaryColor : p.theme.primaryColor};
  border: 1px solid
    ${(p) => (p.secondary ? p.theme.primaryColor : p.theme.secondaryColor)};
  font-weight: bold;
  box-shadow: none;
  display: block;
  white-space: none;
`;

export { Button };
