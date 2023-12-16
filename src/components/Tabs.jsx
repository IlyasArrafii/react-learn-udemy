export default function Tabs({ children, buttons, ButtonsSection = "menu" }) {
  return (
    <>
      <ButtonsSection>{buttons}</ButtonsSection>
      {children}
    </>
  );
}
