export default function Terms() {
  return (
    <div className="min-h-screen py-10 px-4 md:px-8">
      <div className="container sm:px-8 mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Terms & Conditions</h1>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
            Terms and conditions governing software development services provided by the Company.
            Read carefully — by hiring or using our services you acknowledge and accept these
            provisions.
          </p>
        </header>

        <main className="lg:col-span-2 space-y-6">
            <section id="introduction" className="bg-background/30 border border-white/[0.06] rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">1</div>
                <h2 className="text-lg font-semibold">Introduction</h2>
              </div>
              <p className="text-sm text-muted-foreground">
                These Terms and Conditions ("Terms") govern the provision of software development
                services by [Company Name] to its clients or customers (the "Client"). These Terms
                apply to all agreements for software development services entered into by the Client
                and [Company Name].
              </p>
            </section>

            <section id="scope" className="bg-background/30 border border-white/[0.06] rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">2</div>
                <h2 className="text-lg font-semibold">Scope of Work</h2>
              </div>
              <p className="text-sm text-muted-foreground">
                The scope of work refers to the specific tasks, features, and deliverables agreed upon
                in writing between the Client and [Company Name]. The scope of work may change as
                necessary with appropriate change-control and approval.
              </p>
            </section>

            <section id="payment" className="bg-background/30 border border-white/[0.06] rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">3</div>
                <h2 className="text-lg font-semibold">Acceptance & Payment</h2>
              </div>
              <p className="text-sm text-muted-foreground">
                To accept the Terms, the Client must sign below or confirm acceptance electronically
                (via email or online portal). Payments are due on a timely basis as outlined in the
                invoice.
              </p>
            </section>

            <section id="ip" className="bg-background/30 border border-white/[0.06] rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">4</div>
                <h2 className="text-lg font-semibold">Intellectual Property Rights</h2>
              </div>
              <p className="text-sm text-muted-foreground">
                The Client retains all intellectual property rights to the software development work
                produced by [Company Name]. All client intellectual property, including code,
                documentation, and other materials, remains the sole property of the Client. The
                Company assigns any and all right, title, and interest in and to its intellectual
                property to the Client upon payment of all amounts due.
              </p>
            </section>

            <section id="confidentiality" className="bg-background/30 border border-white/[0.06] rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">5</div>
                <h2 className="text-lg font-semibold">Confidentiality</h2>
              </div>
              <p className="text-sm text-muted-foreground">
                The Client agrees not to disclose any confidential information related to [Company
                Name]'s business or trade secrets without the prior written consent of [Company
                Name]. Confidential information includes but is not limited to:
              </p>
              <ul className="mt-3 ml-5 list-disc text-sm text-muted-foreground">
                <li>Trade secrets and proprietary data;</li>
                <li>Business strategies, plans, and operations;</li>
                <li>Technical specifications and designs.</li>
              </ul>
            </section>

            <section id="data" className="bg-background/30 border border-white/[0.06] rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">6</div>
                <h2 className="text-lg font-semibold">Data Protection</h2>
              </div>
              <p className="text-sm text-muted-foreground">
                The Client agrees to ensure that all data processed by [Company Name] in connection
                with the provision of services complies with applicable laws, regulations, and
                industry standards, including but not limited to GDPR and other relevant
                requirements.
              </p>
            </section>

            <section id="more" className="bg-background/30 border border-white/[0.06] rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">7+</div>
                <h2 className="text-lg font-semibold">Other Provisions</h2>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <strong>Performance Obligations:</strong> The Client agrees to provide [Company Name]
                  with reasonable notice before any performance obligations are triggered.
                </div>
                <div>
                  <strong>Risk of Loss:</strong> In no event shall either party be liable for
                  consequential damages (including lost profits) arising from any breach of this
                  Agreement.
                </div>
                <div>
                  <strong>Governing Law & Dispute Resolution:</strong> This Agreement shall be governed
                  by the laws of [State/Province] and disputes will be resolved via binding
                  arbitration.
                </div>
                <div>
                  <strong>Termination:</strong> Either party may terminate this Agreement upon written
                  notice. If terminated, the Client will pay amounts due for work completed up to that
                  point.
                </div>
                <div>
                  <strong>Warranty Disclaimer:</strong> The Company disclaims warranties regarding
                  accuracy, completeness, and reliability of the services.
                </div>
                <div>
                  <strong>Indemnification:</strong> The Client agrees to indemnify and hold harmless
                  [Company Name] from claims, damages, losses and expenses arising from the services.
                </div>
              </div>
            </section>

            <section id="acceptance" className="bg-background/30 border border-white/[0.06] rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Acceptance</h3>
              <p className="text-sm text-muted-foreground">
                By accepting these Terms, the Client acknowledges that it has read, understands, and
                agrees to be bound by each provision.
              </p>
            </section>
          </main> 
      </div>
    </div>
  );
}
