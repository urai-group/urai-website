import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DataPrivacy = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans selection:bg-blue-500/30">
      <Navigation />

      {/* LAYOUT FIX: 'pt-32' sorgt dafür, dass der Inhalt unter der fixierten Navigation beginnt */}
      <section className="px-8 pb-8 pt-32 max-w-3xl mx-auto relative z-10">
        <h1 className="text-4xl font-bold mb-2 text-white tracking-tight">Datenschutzerklärung</h1>
        <p className="mb-8 text-sm text-gray-400 border-l-2 border-blue-500 pl-3">Stand: 20. November 2025</p>

        <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-12 backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-4 text-white">Inhaltsübersicht</h2>
            <ul className="space-y-2 text-sm">
            <li><a className="text-blue-400 hover:text-blue-300 hover:underline transition-colors flex items-center gap-2" href="#general"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Allgemeine Hinweise</a></li>
            <li><a className="text-blue-400 hover:text-blue-300 hover:underline transition-colors flex items-center gap-2" href="#responsible"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Verantwortliche Stelle</a></li>
            <li><a className="text-blue-400 hover:text-blue-300 hover:underline transition-colors flex items-center gap-2" href="#server-logs"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Zugriffsdaten (Server-Logfiles)</a></li>
            <li><a className="text-blue-400 hover:text-blue-300 hover:underline transition-colors flex items-center gap-2" href="#social-media"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Soziale Medien</a></li>
            <li><a className="text-blue-400 hover:text-blue-300 hover:underline transition-colors flex items-center gap-2" href="#newsletter"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Newsletter</a></li>
            <li><a className="text-blue-400 hover:text-blue-300 hover:underline transition-colors flex items-center gap-2" href="#contact"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Kontaktformular</a></li>
            <li><a className="text-blue-400 hover:text-blue-300 hover:underline transition-colors flex items-center gap-2" href="#usage"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Datenverwendung und -weitergabe</a></li>
            <li><a className="text-blue-400 hover:text-blue-300 hover:underline transition-colors flex items-center gap-2" href="#encryption"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>SSL- bzw. TLS-Verschlüsselung</a></li>
            <li><a className="text-blue-400 hover:text-blue-300 hover:underline transition-colors flex items-center gap-2" href="#storage"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>§ 1 Speicherdauer</a></li>
            <li><a className="text-blue-400 hover:text-blue-300 hover:underline transition-colors flex items-center gap-2" href="#rights"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>§ 2 Betroffenenrechte</a></li>
            <li><a className="text-blue-400 hover:text-blue-300 hover:underline transition-colors flex items-center gap-2" href="#validity"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Gültigkeit und Änderung</a></li>
            </ul>
        </div>

        <h2 id="general" className="text-2xl font-bold mt-16 mb-6 text-white scroll-mt-32 border-b border-white/10 pb-2">Allgemeine Hinweise</h2>
        <p className="mb-4 leading-relaxed">
          Diese Datenschutzerklärung enthält ausführliche Informationen darüber, was mit Ihren persönlichen Daten passiert, wenn Sie unsere Website <a href="https://urai-group.com/" className="text-blue-400 hover:underline">https://urai-group.com/</a> besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie sich persönlich identifizieren können.
        </p>
        <p className="mb-4 leading-relaxed">
          Wir halten uns bei der Verarbeitung Ihrer Daten streng an die gesetzlichen Bestimmungen, insbesondere die Datenschutzgrundverordnung („DSGVO"), und legen großen Wert darauf, dass Ihr Besuch auf unserer Website absolut sicher ist.
        </p>

        <h2 id="responsible" className="text-2xl font-bold mt-16 mb-6 text-white scroll-mt-32 border-b border-white/10 pb-2">Verantwortliche Stelle</h2>
        <p className="mb-4 leading-relaxed">
          Datenschutzrechtlich verantwortlich für die Erhebung und Verarbeitung von personenbezogenen Daten auf dieser Website ist:
        </p>
        <div className="mb-6 pl-4 border-l-4 border-blue-500 bg-white/5 p-4 rounded-r-lg">
          <strong className="text-white block mb-1">Hochschulgruppe URAI</strong>
          <span className="block text-gray-300">Universitätsstraße 31</span>
          <span className="block text-gray-300">93053 Regensburg</span>
          <span className="block text-gray-300 mb-2">Deutschland</span>
          <span className="block">E-Mail: <a href="mailto:legal@urai-group.com" className="text-blue-400 hover:underline">legal@urai-group.com</a></span>
        </div>

        <h2 id="server-logs" className="text-2xl font-bold mt-16 mb-6 text-white scroll-mt-32 border-b border-white/10 pb-2">Zugriffsdaten (Server-Logfiles)</h2>
        <p className="mb-4 leading-relaxed">
          Beim Aufruf unserer Website erheben wir und speichern automatisch in sogenannten Server-Logfiles Zugriffsdaten, die Ihr Browser automatisch an uns übermittelt. Dies sind:
        </p>
        <ul className="list-disc list-outside ml-6 mb-4 text-gray-300 marker:text-blue-500">
          <li>Datum und Uhrzeit der Serveranfrage</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          Ein Personenbezug ist uns im Regelfall nicht möglich und auch nicht beabsichtigt. Die Verarbeitung solcher Daten erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO zur Wahrung unseres berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website.
        </p>

        <h2 id="social-media" className="text-2xl font-bold mt-16 mb-6 text-white scroll-mt-32 border-b border-white/10 pb-2">Soziale Medien</h2>
        
        <div className="mb-8">
            <h3 className="text-xl font-semibold mt-6 mb-3 text-white flex items-center gap-2">
                <span className="bg-blue-500/20 text-blue-400 text-xs px-2 py-1 rounded uppercase tracking-wide">0.1</span> Instagram Plugin
            </h3>
            <p className="mb-4 leading-relaxed">
            Auf unseren Seiten sind Funktionen des Dienstes Instagram eingebunden. Diese Funktionen werden durch die Instagram Inc., 1601 Willow Road, Menlo Park, CA 94025, USA, („Instagram") angeboten. Die Plugins sind mit einem Instagram-Logo beispielsweise in Form einer „Instagram-Kamera" gekennzeichnet.
            </p>
            <p className="mb-4 leading-relaxed">
            Wir verhindern die unbewusste und ungewollte Erfassung und Übertragung von personenbezogenen Daten an den Dienstanbieter durch eine 2-Klick-Lösung. Um das Social Plugin zu aktivieren, muss der Nutzer auf die Schaltfläche klicken. Erst durch diesen Klick wird die Erfassung von personenbezogenen Informationen und deren Weitergabe an den Dienstanbieter ausgelöst.
            </p>
            <p className="mb-4 leading-relaxed">
            Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Instagram unter: <a href="https://instagram.com/about/legal/privacy/" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline break-all">https://instagram.com/about/legal/privacy/</a>.
            </p>
        </div>

        <div className="mb-8">
            <h3 className="text-xl font-semibold mt-6 mb-3 text-white flex items-center gap-2">
                <span className="bg-blue-500/20 text-blue-400 text-xs px-2 py-1 rounded uppercase tracking-wide">0.2</span> LinkedIn Plugin
            </h3>
            <p className="mb-4 leading-relaxed">
            Unsere Website benutzt Funktionen des Netzwerks LinkedIn. Anbieter ist die LinkedIn Corporation, 2029 Stierlin Court, Mountain View, CA 94043, USA („LinkedIn").
            </p>
            <p className="mb-4 leading-relaxed">
            Wir verhindern die unbewusste und ungewollte Erfassung und Übertragung von personenbezogenen Daten an den Dienstanbieter durch eine 2-Klick-Lösung. Um das Social Plugin zu aktivieren, muss der Nutzer auf die Schaltfläche klicken.
            </p>
            <p className="mb-4 leading-relaxed">
            Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von LinkedIn unter: <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline break-all">https://www.linkedin.com/legal/privacy-policy</a>.
            </p>
        </div>

        <h2 id="newsletter" className="text-2xl font-bold mt-16 mb-6 text-white scroll-mt-32 border-b border-white/10 pb-2">Newsletter</h2>
        <p className="mb-4 leading-relaxed">
          Sofern Sie ausdrücklich eingewilligt haben, senden wir an Ihre E-Mail-Adresse regelmäßig unseren Newsletter. Zum Erhalt unseres Newsletters müssen Sie uns Ihre E-Mail-Adresse mitteilen und sie anschließend verifizieren.
        </p>
        <p className="mb-4 leading-relaxed">
          Die bei der Newsletteranmeldung gemachten Daten werden ausschließlich auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO verarbeitet. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich (z.B. über den „Austragen"-Link im Newsletter).
        </p>

        <h2 id="contact" className="text-2xl font-bold mt-16 mb-6 text-white scroll-mt-32 border-b border-white/10 pb-2">Kontaktformular</h2>
        <p className="mb-4 leading-relaxed">
          Sofern Sie mit uns Kontakt per E-Mail oder über ein Kontaktformular aufnehmen, werden übermittelte Daten einschließlich Ihrer Kontaktdaten gespeichert, um Ihre Anfrage bearbeiten zu können. Eine Weitergabe dieser Daten findet ohne Ihre Einwilligung nicht statt.
        </p>
        <p className="mb-4 leading-relaxed">
          Die Verarbeitung erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie jederzeit widerrufen können.
        </p>

        <h2 id="usage" className="text-2xl font-bold mt-16 mb-6 text-white scroll-mt-32 border-b border-white/10 pb-2">Datenverwendung und -weitergabe</h2>
        <p className="mb-4 leading-relaxed">
          Die personenbezogenen Daten, die Sie uns z.B. per E-Mail mitteilen, werden wir weder an Dritte verkaufen noch anderweitig vermarkten. Ihre personenbezogenen Daten werden nur zur Korrespondenz mit Ihnen und nur für den Zweck verarbeitet, zu dem Sie uns die Daten zur Verfügung gestellt haben.
        </p>

        <h2 id="encryption" className="text-2xl font-bold mt-16 mb-6 text-white scroll-mt-32 border-b border-white/10 pb-2">SSL- bzw. TLS-Verschlüsselung</h2>
        <p className="mb-4 leading-relaxed">
          Unsere Website benutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
        </p>

        <h2 id="storage" className="text-2xl font-bold mt-16 mb-6 text-white scroll-mt-32 border-b border-white/10 pb-2">§ 1 Speicherdauer</h2>
        <p className="mb-4 leading-relaxed">
          Personenbezogene Daten, die uns über unsere Website mitgeteilt worden sind, werden nur so lange gespeichert, bis der Zweck erfüllt ist, zu dem sie uns anvertraut wurden. Soweit handels- und steuerrechtliche Aufbewahrungsfristen zu beachten sind, kann die Speicherdauer zu bestimmten Daten bis zu 10 Jahre betragen.
        </p>

        <h2 id="rights" className="text-2xl font-bold mt-16 mb-6 text-white scroll-mt-32 border-b border-white/10 pb-2">§ 2 Betroffenenrechte</h2>
        <p className="mb-4 leading-relaxed">Hinsichtlich der Sie betreffenden personenbezogenen Daten haben Sie als Betroffener nach Maßgabe der gesetzlichen Bestimmungen folgende Rechte:</p>

        <div className="space-y-6 pl-6 border-l-2 border-white/10 mt-8">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-white">2.1 Widerrufsrecht</h3>
            <p className="text-gray-300">Sie haben das Recht, eine einmal erteilte Einwilligung in die Verarbeitung von Daten gemäß Art. 7 Abs. 3 DSGVO jederzeit mit Wirkung für die Zukunft zu widerrufen.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-white">2.2 Auskunftsrecht</h3>
            <p className="text-gray-300">Sie haben das Recht, gemäß Art. 15 DSGVO von uns eine Bestätigung darüber zu verlangen, ob wir personenbezogene Daten verarbeiten, die Sie betreffen, und Auskunft über diese Daten zu erhalten.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-white">2.3 Recht auf Berichtigung</h3>
            <p className="text-gray-300">Sie haben das Recht, gemäß Art. 16 DSGVO jederzeit unverzügliche Berichtigung unrichtiger oder Vervollständigung Ihrer Daten zu verlangen.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-white">2.4 Recht auf Löschung</h3>
            <p className="text-gray-300">Sie haben das Recht, gemäß Art. 17 DSGVO die Löschung Ihrer personenbezogenen Daten zu verlangen, sofern bestimmte Gründe zutreffen (z.B. Zweckentfall, Widerruf der Einwilligung, unrechtmäßige Verarbeitung).</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-white">2.5 Recht auf Einschränkung der Verarbeitung</h3>
            <p className="text-gray-300">Sie haben das Recht, gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-white">2.6 Recht auf Unterrichtung</h3>
            <p className="text-gray-300">Haben Sie das Recht auf Berichtigung, Löschung oder Einschränkung geltend gemacht, sind wir verpflichtet, allen Empfängern dies mitzuteilen (Art. 19 DSGVO).</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-white">2.7 Rechte bei automatisierter Entscheidung</h3>
            <p className="text-gray-300">Sie haben das Recht, gemäß Art. 22 DSGVO nicht einer ausschließlich auf einer automatisierten Verarbeitung beruhenden Entscheidung unterworfen zu werden.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-white">2.8 Recht auf Datenübertragbarkeit</h3>
            <p className="text-gray-300">Sie haben das Recht, gemäß Art. 20 DSGVO Ihre Daten in einem strukturierten, gängigen Format zu erhalten oder an einen anderen Verantwortlichen zu übermitteln.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-white">2.9 Widerspruchsrecht</h3>
            <p className="text-gray-300">Soweit wir die Verarbeitung auf Art. 6 Abs. 1 lit. f DSGVO (Interessenabwägung) stützen, haben Sie jederzeit das Recht, aus Gründen Ihrer besonderen Situation Widerspruch einzulegen (Art. 21 DSGVO). Werden Daten für Direktwerbung verarbeitet, haben Sie ein jederzeitiges Widerspruchsrecht.</p>
          </div>

          <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/20">
            <h3 className="text-lg font-semibold mb-2 text-blue-200 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
                2.10 Beschwerderecht
            </h3>
            <p className="text-sm text-gray-300 mb-3">Im Falle von Verstößen gegen die DSGVO steht Ihnen ein Beschwerderecht bei einer Aufsichtsbehörde zu (Art. 77 DSGVO). Die für uns zuständige Aufsichtsbehörde ist:</p>
            <div className="bg-black/40 p-3 rounded text-sm border border-white/5">
              <strong className="text-white block">Bayerisches Landesamt für Datenschutzaufsicht</strong>
              <span className="block text-gray-400">Promenade 18, 91522 Ansbach</span>
              <span className="block text-gray-400 mt-2">Postanschrift: Postfach 1349, 91504 Ansbach</span>
              <span className="block text-gray-400">Telefon: 0981/180093-0</span>
              <span className="block text-gray-400">E-Mail: <a href="mailto:poststelle@lda.bayern.de" className="text-blue-400 hover:underline">poststelle@lda.bayern.de</a></span>
              <span className="block text-gray-400">Internet: <a href="https://www.lda.bayern.de" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">https://www.lda.bayern.de</a></span>
            </div>
          </div>
        </div>

        <h2 id="validity" className="text-2xl font-bold mt-16 mb-6 text-white scroll-mt-32 border-b border-white/10 pb-2">Gültigkeit und Änderung dieser Datenschutzerklärung</h2>
        <p className="mb-4 leading-relaxed">
          Diese Datenschutzerklärung gilt ab dem 20. November 2025. Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit unter Beachtung der geltenden Datenschutzvorschriften zu ändern. Es gilt die zum Zeitpunkt Ihres Besuchs abrufbare Fassung.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default DataPrivacy;