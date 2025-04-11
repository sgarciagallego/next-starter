import Link from '@/components/atoms/Link';
import List from '@/components/molecules/List';
import { styled } from '@linaria/react';
import Container from '../atoms/Container';

export default function Header() {
  return (
    <Container>
      <StyledHeader>
        <nav>
          <List>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/docs'>Docs</Link>
            </li>
          </List>
        </nav>
      </StyledHeader>
    </Container>
  );
}

const StyledHeader = styled.header`
  height: 4rem;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
`;
