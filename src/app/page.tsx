export default function Home() {
  return (
    <div className="min-h-screen text-foreground">
      <header className="sticky top-0 z-30 backdrop-blur-md/2 bg-white/40 shadow-[0_8px_30px_rgb(255_140_26_/_0.12)] border-b border-orange-200/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2 group">
            <span className="text-2xl">🍕</span>
            <span className="font-extrabold tracking-tight text-lg sm:text-xl group-hover:rotate-[-2deg] transition-all">
              Funky Pizza
            </span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#menu" className="hover:text-orange-700 transition-colors">Menu</a>
            <a href="#about" className="hover:text-orange-700 transition-colors">About</a>
            <a href="#contact" className="hover:text-orange-700 transition-colors">Contact</a>
            <a href="#order" className="ml-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-orange-950 font-semibold px-4 py-2 shadow-[0_10px_20px_-10px_rgba(255,140,26,.7)] hover:shadow-[0_10px_25px_-8px_rgba(255,140,26,.9)] hover:scale-[1.03] active:scale-[.99] transition-all">Order Now</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-56 h-56 bg-orange-400/40 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-yellow-300/40 rounded-full blur-3xl animate-pulse" />
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="relative">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight">
                  <span className="inline-block -rotate-2 bg-clip-text text-transparent bg-gradient-to-tr from-orange-600 via-yellow-500 to-orange-400 drop-shadow-sm">
                    Funky Flavors
                  </span>
                  <br />
                  <span className="inline-block rotate-1 mt-2 bg-clip-text text-transparent bg-gradient-to-br from-yellow-500 via-orange-500 to-yellow-400">
                    Hot & Fresh
                  </span>
                </h1>
                <p className="mt-5 text-base sm:text-lg text-orange-900/80 max-w-prose">
                  Slices that slap, crust that crunches, and sauces that sing. Bright vibes. Bolder bites. Your new favorite pizza party lives here.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href="#menu" className="inline-flex items-center justify-center rounded-xl bg-orange-600 text-white px-5 py-3 font-semibold shadow-lg hover:bg-orange-700 active:scale-[.99] transition-all">
                    Browse Menu
                  </a>
                  <a href="#order" className="inline-flex items-center justify-center rounded-xl border-2 border-orange-400/60 bg-white/60 backdrop-blur px-5 py-3 font-semibold text-orange-800 hover:border-orange-500 hover:bg-white transition-all">
                    Build Your Pie →
                  </a>
                </div>
                <div className="mt-6 flex items-center gap-3 text-sm text-orange-900/70">
                  <span className="inline-flex items-center gap-1"><span className="text-lg">🔥</span> Wood-fired</span>
                  <span className="inline-flex items-center gap-1"><span className="text-lg">🧀</span> Extra cheesy</span>
                  <span className="inline-flex items-center gap-1"><span className="text-lg">🚀</span> Ready fast</span>
                </div>
              </div>
              <div className="relative">
                <div className="relative mx-auto aspect-square w-72 sm:w-80 md:w-96 rounded-[28px] border border-orange-300/60 bg-white/70 backdrop-blur shadow-[0_40px_120px_-30px_rgba(255,140,26,.45)] overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,221,87,.5),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(255,140,26,.45),transparent_45%)]" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="relative">
                      <div className="text-7xl sm:text-8xl animate-bounce">🍕</div>
                      <div className="absolute -top-3 -right-6 rotate-6 text-3xl">🫑</div>
                      <div className="absolute -bottom-2 -left-4 -rotate-6 text-3xl">🍅</div>
                      <div className="absolute top-14 -left-8 rotate-12 text-3xl">🧅</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center text-sm text-orange-900/70">Our pies bounce with flavor. Literally.</div>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="relative">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
            <div className="flex items-end justify-between mb-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Menu Highlights</h2>
              <a href="#order" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-orange-950 font-semibold px-4 py-2 shadow hover:scale-[1.02] transition">
                Order a Combo →
              </a>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <article className="group rounded-2xl border border-orange-200/70 bg-white/80 backdrop-blur p-5 shadow hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">The Sunburst</h3>
                  <span className="text-2xl">🌞</span>
                </div>
                <p className="text-sm text-orange-900/80">Golden cheddar, sweet corn, charred peppers, and a drizzle of honey-chili.</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-extrabold text-orange-800">$14</span>
                  <button className="rounded-lg bg-orange-600 text-white px-3 py-2 text-sm font-semibold hover:bg-orange-700 active:scale-[.99]">Add</button>
                </div>
              </article>
              <article className="group rounded-2xl border border-orange-200/70 bg-white/80 backdrop-blur p-5 shadow hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">Zesty Zing</h3>
                  <span className="text-2xl">⚡️</span>
                </div>
                <p className="text-sm text-orange-900/80">Tangy lemon zest ricotta, basil, garlic oil, and blistered cherry tomatoes.</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-extrabold text-orange-800">$16</span>
                  <button className="rounded-lg bg-orange-600 text-white px-3 py-2 text-sm font-semibold hover:bg-orange-700 active:scale-[.99]">Add</button>
                </div>
              </article>
              <article className="group rounded-2xl border border-orange-200/70 bg-white/80 backdrop-blur p-5 shadow hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">Cheezy Groove</h3>
                  <span className="text-2xl">🧀</span>
                </div>
                <p className="text-sm text-orange-900/80">Mozzarella, provolone, parmesan, and a creamy cheddar swirl. Ultra melty.</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-extrabold text-orange-800">$15</span>
                  <button className="rounded-lg bg-orange-600 text-white px-3 py-2 text-sm font-semibold hover:bg-orange-700 active:scale-[.99]">Add</button>
                </div>
              </article>
            </div>
            <p className="mt-5 text-sm text-orange-900/70">Gluten-free and vegan cheese available. Ask about our rotating specials!</p>
          </div>
        </section>

        <section id="about" className="relative">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-3xl border border-orange-200/70 bg-white/70 backdrop-blur p-6 shadow">
                <h3 className="text-2xl font-bold mb-2">Our Funky Story</h3>
                <p className="text-orange-900/80">
                  Born from late-night jam sessions and a love for crispy crusts, we spin pies like vinyl: warm, crackly, and unforgettable. Ingredients are local, the vibe is global.
                </p>
              </div>
              <ul className="grid sm:grid-cols-3 gap-4">
                <li className="rounded-2xl border border-yellow-300/70 bg-white/70 p-4 text-center shadow"><div className="text-3xl">⏱️</div><div className="mt-1 font-semibold">15-min Avg</div></li>
                <li className="rounded-2xl border border-yellow-300/70 bg-white/70 p-4 text-center shadow"><div className="text-3xl">🥬</div><div className="mt-1 font-semibold">Fresh Produce</div></li>
                <li className="rounded-2xl border border-yellow-300/70 bg-white/70 p-4 text-center shadow"><div className="text-3xl">🔥</div><div className="mt-1 font-semibold">Stone Oven</div></li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="relative">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
            <div className="rounded-3xl border border-orange-200/70 bg-white/80 backdrop-blur p-6 sm:p-8 shadow">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-lg">Visit</h4>
                  <p className="text-orange-900/80">123 Zesty Ave, Flavor Town</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Hours</h4>
                  <p className="text-orange-900/80">Mon–Thu 11a–10p • Fri–Sat 11a–12a • Sun 12p–9p</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Contact</h4>
                  <p className="text-orange-900/80">(555) 123-4567 • hello@funkypizza.com</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a id="order" href="#" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-semibold px-5 py-3 shadow hover:scale-[1.02] active:scale-[.99] transition">
                  Start Order
                </a>
                <a href="#menu" className="inline-flex items-center gap-2 rounded-full border-2 border-orange-400/70 bg-white px-5 py-3 font-semibold text-orange-800 hover:border-orange-500 transition">
                  See Full Menu
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-orange-200/70 bg-white/60 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-orange-900/70">© {new Date().getFullYear()} Funky Pizza. All rights reserved.</p>
          <div className="text-sm text-orange-900/70">Made with 🍕 + ❤️</div>
        </div>
      </footer>
    </div>
  );
}
