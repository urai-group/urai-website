import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCubes from "@/components/FloatingCubes";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* FIX APPLIED: 
        Changed 'p-8' to 'px-8 pb-8 pt-32'. 
        'pt-32' adds extra space at the top so the Navigation doesn't cover the title.
      */}
      <section className="px-8 pb-8 pt-32 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Impressum</h1>

        <h2 id="m46" className="text-xl font-semibold mt-6 mb-2">Diensteanbieter</h2>
        <p>Noah Meißner, Samuel Bullard, Federico Mizzaro</p>
        <p>Universitätsstraße 31</p>
        <p>93053 Regensburg</p>
        <p>Deutschland</p>

        <h2 id="m56" className="text-xl font-semibold mt-6 mb-2">Kontaktmöglichkeiten</h2>
        <p>E-Mail-Adresse: legal@urai-group.com</p>

        <h2 id="m153" className="text-xl font-semibold mt-6 mb-2">Vertretungsberechtigte Personen</h2>
        <p>Vertretungsberechtigt: Noah Meißner, Samuel Bullard, Federico Mizzaro</p>

        <h2 id="m172" className="text-xl font-semibold mt-6 mb-2">Social Media und andere Onlinepräsenzen</h2>
        <p>Dieses Impressum gilt auch für die folgenden Social-Media-Präsenzen und Onlineprofile:</p>
        <p>
          <a
            href="https://www.linkedin.com/company/urai-group/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            https://www.linkedin.com/company/urai-group/
            
       </a>
        </p>
        <p>
          <a
            href="https://www.instagram.com/urai_group"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            https://www.instagram.com/urai_group
            
       </a>
        </p>

        <h2 id="m65" className="text-xl font-semibold mt-6 mb-2">Haftungs- und Schutzrechtshinweise</h2>
        <p className="mb-4">
          Haftungsausschluss: Die Inhalte dieses Onlineangebotes wurden sorgfältig
          und nach unserem aktuellen Kenntnisstand erstellt, dienen jedoch nur der
          Information und entfalten keine rechtlich bindende Wirkung, sofern es
          sich nicht um gesetzlich verpflichtende Informationen (z. B. das
          Impressum, die Datenschutzerklärung, AGB oder verpflichtende
          Belehrungen von Verbrauchern) handelt. Wir behalten uns vor, die Inhalte
          vollständig oder teilweise zu ändern oder zu löschen, soweit
          vertragliche Verpflichtungen unberührt bleiben. Alle Angebote sind
          freibleibend und unverbindlich.
        </p>
        <p className="mb-4">
          Links auf fremde Webseiten: Die Inhalte fremder Webseiten, auf die wir
          direkt oder indirekt verweisen, liegen außerhalb unseres
          Verantwortungsbereiches und wir machen sie uns nicht zu Eigen. Für alle
          Inhalte und Nachteile, die aus der Nutzung der in den verlinkten
          Webseiten aufrufbaren Informationen entstehen, übernehmen wir keine
          Verantwortung.
        </p>
        <p className="mb-8">
          Hinweise auf Rechtsverstöße: Sollten Sie innerhalb unseres
          Internetauftritts Rechtsverstöße bemerken, bitten wir Sie uns auf diese
          hinzuweisen. Wir werden rechtswidrige Inhalte und Links nach
          Kenntnisnahme unverzüglich entfernen.
        </p>

        <p className="seal text-sm text-gray-500">
          <a
            href="https://datenschutz-generator.de/"
            title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="hover:text-gray-300 transition-colors"
          >
            Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas
            Schwenke
          </a>
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default Index;