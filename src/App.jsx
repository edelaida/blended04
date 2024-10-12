import { Section, Container, Header, Text, Form } from 'components';

export const App = () => {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Text textAlign="center">Create your first todo😉</Text>
          <Form />
        </Container>
      </Section>
    </>
  );
};
