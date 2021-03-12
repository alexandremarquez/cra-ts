import React from 'react';

import { Container } from './styles';

export interface TypographyProps {
  children: React.ReactNode;
}
const Typography: React.FC<TypographyProps> = ({
  children,
}: TypographyProps) => {
  return <Container>{children}</Container>;
};

export default Typography;
