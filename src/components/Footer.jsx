
function Footer() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-zinc-500 sm:px-8 md:flex-row md:items-center md:justify-between">
      <p className="flex text-xl">
        <a href="/"><img className="h-6" src="/public/nanoDEX v2-01.png" alt="" /></a>
        {" "}© {new Date().getFullYear()}
      </p>

      <p>Fictional storefront built as a frontend portfolio project by
        <br /> 
        <a href="https://gugulethu-nkabinde-portfolio.vercel.app/" target="_blank"> <img className="h-10" src="/public/Gugulethu Logo web-v-01.png" alt="" /></a>  </p>
    </footer>
  );
}

export default Footer;
