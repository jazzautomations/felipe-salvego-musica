export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-10 text-center">
      <small className="text-[clamp(0.6rem,1.2vw,0.7rem)] tracking-[0.12em] text-[var(--muted)] uppercase">
        &copy; {new Date().getFullYear()} Felipe Salvego • Todos os direitos reservados
      </small>
    </footer>
  );
}
