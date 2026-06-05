// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.fraghugo.de',
	integrations: [
		starlight({
			title: 'frag.hugo Docs',
			description: 'Hilfe-Center der frag.hugo Plattform — Anleitungen für Datenschutz, Website-Sicherheit, NIS2, Lieferkette, KI-Compliance, Schulungen.',
			defaultLocale: 'de',
			locales: {
				root: { label: 'Deutsch', lang: 'de' },
			},
			logo: {
				src: './public/logo-octopus.svg',
				alt: 'frag.hugo Logo',
				replacesTitle: false,
			},
			favicon: '/favicon.svg',
			customCss: ['./src/styles/custom.css'],
			head: [
				{
					tag: 'link',
					attrs: { rel: 'preload', href: '/fonts/PlusJakartaSans-latin.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
				},
				{
					tag: 'meta',
					attrs: { property: 'og:image', content: 'https://docs.fraghugo.de/og-image.jpg' },
				},
				{
					tag: 'script',
					content: `var _paq=window._paq=window._paq||[];_paq.push(['disableCookies']);_paq.push(['setDoNotTrack',true]);_paq.push(['trackPageView']);_paq.push(['enableLinkTracking']);(function(){var u='//metomo.it-support-hamburg-24x7.de/';_paq.push(['setTrackerUrl',u+'matomo.php']);_paq.push(['setSiteId','6']);function loadMatomo(){var d=document,g=d.createElement('script'),s=d.getElementsByTagName('script')[0];g.async=true;g.src=u+'matomo.js';s.parentNode.insertBefore(g,s);}function scheduleMatomo(){if('requestIdleCallback' in window){requestIdleCallback(loadMatomo,{timeout:3000});}else{setTimeout(loadMatomo,2000);}}if(document.readyState==='complete'){scheduleMatomo();}else{window.addEventListener('load',scheduleMatomo,{once:true});}})();`,
				},
			],
			social: [
				{ icon: 'external', label: 'app.fraghugo.de', href: 'https://app.fraghugo.de' },
				{ icon: 'external', label: 'fraghugo.de', href: 'https://www.fraghugo.de' },
			],
			components: {
				SocialIcons: './src/components/HeaderLinks.astro',
				Footer: './src/components/Footer.astro',
			},
			sidebar: [
				{
					label: 'Erste Schritte',
					items: [
						{ label: 'Übersicht', slug: 'erste-schritte/uebersicht' },
						{ label: 'Account erstellen', slug: 'erste-schritte/account-erstellen' },
						{ label: 'Dashboard verstehen', slug: 'erste-schritte/dashboard' },
						{ label: 'Einstellungen', slug: 'erste-schritte/einstellungen' },
						{ label: 'Benachrichtigungen', slug: 'erste-schritte/notifications' },
						{ label: 'Upgrade & Tarife', slug: 'erste-schritte/upgrade' },
					],
				},
				{
					label: 'Datenschutz',
					items: [
						{ label: 'Übersicht', slug: 'datenschutz/uebersicht' },
						{ label: 'Verarbeitungsverzeichnis (VVT)', slug: 'datenschutz/vvt' },
						{ label: 'Auftragsverarbeiter (AVV)', slug: 'datenschutz/avv' },
						{ label: 'Datenschutzerklärung', slug: 'datenschutz/dse' },
						{ label: 'TOMs', slug: 'datenschutz/toms' },
						{ label: 'Löschkonzept', slug: 'datenschutz/loeschkonzept' },
						{ label: 'DSFA', slug: 'datenschutz/dsfa' },
						{ label: 'Audits', slug: 'datenschutz/audits' },
						{ label: 'Dokumenten-Vorlagen', slug: 'datenschutz/dokumente' },
						{ label: 'Jahresbericht', slug: 'datenschutz/jahresbericht' },
						{ label: 'Mein Siegel', slug: 'datenschutz/siegel' },
					],
				},
				{
					label: 'Vorfälle & Anfragen',
					items: [
						{ label: 'Übersicht', slug: 'vorfaelle/uebersicht' },
						{ label: 'Datenpannen (72 h)', slug: 'vorfaelle/datenpannen' },
						{ label: 'Betroffenenanfragen (DSAR)', slug: 'vorfaelle/betroffenenanfragen' },
						{ label: 'Public-DSAR-Portal', slug: 'vorfaelle/public-portal' },
						{ label: 'Hinweisgeberschutz', slug: 'vorfaelle/hinweisgeberschutz' },
					],
				},
				{
					label: 'Website & IT-Sicherheit',
					items: [
						{ label: 'Übersicht', slug: 'website-it-sicherheit/uebersicht' },
						{ label: 'Neuer Scan', slug: 'website-it-sicherheit/neuer-scan' },
						{ label: 'Scan-Übersicht', slug: 'website-it-sicherheit/scan-uebersicht' },
						{ label: 'Monitoring', slug: 'website-it-sicherheit/monitoring' },
						{ label: 'Agentur-Bereich', slug: 'website-it-sicherheit/agentur-bereich' },
						{ label: 'Bulk-Scan', slug: 'website-it-sicherheit/bulk-scan' },
						{ label: 'Konkurrenz-Vergleich', slug: 'website-it-sicherheit/konkurrenz-vergleich' },
						{ label: 'API-Zugang', slug: 'website-it-sicherheit/api-zugang' },
					],
				},
				{
					label: 'Lieferkette',
					items: [
						{ label: 'Übersicht', slug: 'lieferkette/uebersicht' },
						{ label: 'Mein Score', slug: 'lieferkette/mein-score' },
						{ label: 'Self-Assessment', slug: 'lieferkette/self-assessment' },
						{ label: 'Auftraggeber-Dashboard', slug: 'lieferkette/dashboard' },
						{ label: 'Zulieferer verwalten', slug: 'lieferkette/zulieferer' },
						{ label: 'Eigene Fragen', slug: 'lieferkette/eigene-fragen' },
						{ label: 'Reports', slug: 'lieferkette/reports' },
					],
				},
				{
					label: 'ISMS / NIS2',
					items: [
						{ label: 'Übersicht', slug: 'isms-nis2/uebersicht' },
						{ label: 'Asset-Register', slug: 'isms-nis2/asset-register' },
						{ label: 'Schutzbedarf', slug: 'isms-nis2/schutzbedarf' },
						{ label: 'Risiko-Register', slug: 'isms-nis2/risiko-register' },
						{ label: 'Maßnahmen', slug: 'isms-nis2/massnahmen' },
						{ label: 'Richtlinien', slug: 'isms-nis2/richtlinien' },
						{ label: 'NIS2-Vorfälle', slug: 'isms-nis2/nis2-vorfaelle' },
						{ label: 'ISMS-Reports', slug: 'isms-nis2/isms-reports' },
						{ label: 'NIS2-Dashboard', slug: 'isms-nis2/nis2-dashboard' },
						{ label: 'BSI-Registrierung', slug: 'isms-nis2/bsi-registrierung' },
						{ label: 'GF-Schulung §38', slug: 'isms-nis2/gf-schulung' },
					],
				},
				{
					label: 'Arbeitsschutz',
					items: [
						{ label: 'Übersicht', slug: 'arbeitsschutz' },
						{ label: 'Mitarbeiter anlegen & zuweisen', slug: 'arbeitsschutz/mitarbeiter-anlegen-zuweisen' },
						{ label: 'Unterweisung durchführen', slug: 'arbeitsschutz/unterweisung-durchfuehren' },
						{ label: 'Abschlusstest & Zertifikat', slug: 'arbeitsschutz/abschlusstest-zertifikat' },
						{ label: 'Nachweis-Dossier', slug: 'arbeitsschutz/nachweis-dossier' },
						{ label: 'Jahres-Erinnerung', slug: 'arbeitsschutz/jahres-erinnerung' },
						{ label: 'KI-Erklärvideos', slug: 'arbeitsschutz/ki-videos' },
						{ label: 'Gefährdungsbeurteilung verknüpfen', slug: 'arbeitsschutz/gefaehrdungsbeurteilung-verknuepfung' },
						{ label: 'Rechtliche Hinweise', slug: 'arbeitsschutz/rechtliche-hinweise' },
					],
				},
				{
					label: 'KI-Compliance',
					items: [
						{ label: 'Übersicht', slug: 'ki-compliance/uebersicht' },
						{ label: 'KI-Register', slug: 'ki-compliance/ki-register' },
						{ label: 'Klassifizierung', slug: 'ki-compliance/klassifizierung' },
						{ label: 'KI-Dokumente', slug: 'ki-compliance/ki-dokumente' },
					],
				},
				{
					label: 'Schulungen',
					items: [
						{ label: 'Übersicht', slug: 'schulungen/uebersicht' },
						{ label: 'Hugo Learn', slug: 'schulungen/hugo-learn' },
						{ label: 'Fortschritt im Blick', slug: 'schulungen/uebersicht-schulungen' },
						{ label: 'Mitarbeiter verwalten', slug: 'schulungen/mitarbeiter' },
						{ label: 'Phishing-Simulation', slug: 'schulungen/phishing-simulation' },
						{ label: 'M365-Integration', slug: 'schulungen/m365-integration' },
					],
				},
				{
					label: 'Beratung & Add-Ons',
					items: [
						{ label: 'Übersicht', slug: 'beratung/uebersicht' },
						{ label: 'Beratung & Add-Ons', slug: 'beratung/beratung-und-add-ons' },
						{ label: 'Reifegrad-Check', slug: 'beratung/reifegrad-check' },
					],
				},
				{
					label: 'Für Mitarbeiter',
					items: [
						{ label: 'Übersicht', slug: 'fuer-mitarbeiter/uebersicht' },
						{ label: 'Schulung machen', slug: 'fuer-mitarbeiter/schulung-machen' },
						{ label: 'Quiz bestehen', slug: 'fuer-mitarbeiter/quiz-bestehen' },
						{ label: 'Zertifikat holen', slug: 'fuer-mitarbeiter/zertifikat' },
						{ label: 'Datenpanne melden', slug: 'fuer-mitarbeiter/datenpanne-melden' },
					],
				},
				{
					label: 'Für Partner (Systemhäuser)',
					items: [
						{ label: 'Übersicht', slug: 'partner/uebersicht' },
						{ label: 'Empfehlungs-Programm', slug: 'partner/empfehlungs-programm' },
						{ label: 'Kunden registrieren', slug: 'partner/kunden-registrieren' },
					],
				},
				{
					label: 'FAQ',
					items: [
						{ label: 'Preise & Abrechnung', slug: 'faq/preise' },
						{ label: 'Datenschutz & Sicherheit', slug: 'faq/datenschutz' },
						{ label: 'Technische Fragen', slug: 'faq/technik' },
					],
				},
			],
		}),
	],
});
