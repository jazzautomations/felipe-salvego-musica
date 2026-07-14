export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10 text-center">
      <small className="font-[var(--font-jetbrains)] text-[clamp(0.55rem,1.2vw,0.65rem)] tracking-[0.15em] text-[var(--muted)] uppercase">
        &copy; {new Date().getFullYear()} Felipe Salvego · Todos os direitos reservados
      </small>
    </footer>
  );
}
