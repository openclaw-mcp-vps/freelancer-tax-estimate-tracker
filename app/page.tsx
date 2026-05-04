export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          For Freelancers &amp; Contractors
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Never be surprised by a{" "}
          <span className="text-[#58a6ff]">tax bill</span> again
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          TaxTrack connects to your bank and invoicing tools, automatically calculates your quarterly estimated taxes using IRS guidelines, and moves money into a high-yield savings account so it&apos;s ready when you need it.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial — $15/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required for 14-day trial. Cancel anytime.</p>

        {/* Stats row */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl bg-[#161b22] p-6">
          <div>
            <p className="text-2xl font-bold text-white">$0</p>
            <p className="text-xs text-[#8b949e] mt-1">Surprise tax bills</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">Auto</p>
            <p className="text-xs text-[#8b949e] mt-1">Quarterly estimates</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">4.5%</p>
            <p className="text-xs text-[#8b949e] mt-1">APY on savings</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl bg-[#161b22] p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#8b949e] text-sm mb-6">/month · billed monthly</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Plaid bank &amp; invoice sync",
              "Real-time quarterly tax estimates",
              "Automatic tax savings transfers",
              "IRS safe-harbor calculations",
              "Self-employment tax included",
              "State tax estimates (all 50 states)",
              "Export-ready tax summaries",
              "Priority email support"
            ].map((feat, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span dangerouslySetInnerHTML={{ __html: feat }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          <div className="border border-[#30363d] rounded-lg bg-[#161b22] p-5">
            <h3 className="font-semibold text-white mb-2">How does TaxTrack calculate my taxes?</h3>
            <p className="text-sm text-[#8b949e]">We use current IRS guidelines for self-employment tax (15.3%) and federal income tax brackets, plus your state&apos;s rates. We factor in deductions like the QBI deduction and half of SE tax to give you accurate quarterly estimates.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg bg-[#161b22] p-5">
            <h3 className="font-semibold text-white mb-2">Is my bank data secure?</h3>
            <p className="text-sm text-[#8b949e]">Yes. We use Plaid, the industry-standard bank connection service trusted by thousands of apps. We only read transaction data — we never store your banking credentials and cannot move money without your explicit approval.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg bg-[#161b22] p-5">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-sm text-[#8b949e]">Absolutely. Cancel with one click from your account dashboard. You&apos;ll keep access until the end of your billing period with no cancellation fees or penalties.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} TaxTrack. Not a licensed tax advisor. Consult a CPA for official tax advice.
      </footer>
    </main>
  );
}
