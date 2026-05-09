// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.fraghugo.de',
	integrations: [
		starlight({
			title: 'frag.hugo Docs',
			description: 'Hilfe-Center der frag.hugo Plattform – Datenschutz, IT-Sicherheit, NIS2 und Lieferketten-Compliance einfach erklärt.',
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
					tag: 'link',
					attrs: { rel: 'preload', href: '/fonts/DMSerifDisplay-Regular-latin.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
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
						{ label: 'Tarife & Preise', slug: 'erste-schritte/tarife' },
					],
				},
				{
					label: 'Website & IT-Sicherheit',
					items: [
						{ label: 'Ersten Scan durchführen', slug: 'hugo-check/website-check-starten' },
						{ label: 'Scan-Ergebnis verstehen', slug: 'hugo-check/scan-ergebnis-verstehen' },
						{ label: 'KI-Analyse erklärt', slug: 'hugo-check/ki-features' },
						{ label: 'Pro-Features', slug: 'hugo-check/pro-features' },
						{ label: 'Monitoring einrichten', slug: 'hugo-check/monitoring-einrichten' },
						{ label: 'NIS2-Betroffenheitscheck', slug: 'hugo-check/nis2-betroffenheit' },
						{ label: 'Konkurrenz-Vergleich (Agentur)', slug: 'hugo-check/konkurrenz-vergleich' },
						{ label: 'Badge & Verifizierung', slug: 'hugo-check/check-badge' },
						{ label: 'Free, Pro oder Agentur?', slug: 'hugo-check/check-tarife' },
					],
				},
				{
					label: 'Datenschutz',
					items: [
						{ label: 'Dashboard verstehen', slug: 'hugo-dsb/dsb-dashboard' },
						{ label: 'VVT anlegen', slug: 'hugo-dsb/vvt-anlegen' },
						{ label: 'AVV erstellen', slug: 'hugo-dsb/avv-erstellen' },
						{ label: 'TOMs dokumentieren', slug: 'hugo-dsb/toms-dokumentieren' },
						{ label: 'Datenschutzerklärung', slug: 'hugo-dsb/dse-generator' },
						{ label: 'Löschkonzept', slug: 'hugo-dsb/loeschkonzept' },
						{ label: 'DSFA durchführen', slug: 'hugo-dsb/dsfa-durchfuehren' },
						{ label: 'Hinweisgeberschutz', slug: 'hugo-dsb/hinweisgeberschutz' },
						{ label: 'Mitarbeiter einladen', slug: 'hugo-dsb/mitarbeiter-einladen' },
						{ label: 'Schulungen & Quiz', slug: 'hugo-dsb/schulungen-starten' },
						{ label: 'Datenpanne melden', slug: 'hugo-dsb/datenpanne-melden' },
					],
				},
				{
					label: 'NIS2-Compliance',
					items: [
						{ label: 'NIS2-Dashboard', slug: 'nis2/nis2-dashboard' },
						{ label: 'BSI-Registrierung', slug: 'nis2/bsi-registrierung' },
						{ label: 'Vorfall melden (24h)', slug: 'nis2/vorfall-melden' },
						{ label: 'GF-Schulung §38 BSIG', slug: 'nis2/gf-schulung' },
					],
				},
				{
					label: 'ISMS (NIS2 / ISO 27001)',
					items: [
						{ label: 'Was ist ein ISMS?', slug: 'isms/was-ist-ein-isms' },
						{ label: 'Asset-Register', slug: 'isms/asset-register' },
						{ label: 'Risiko-Matrix', slug: 'isms/risiko-matrix' },
						{ label: 'Statement of Applicability', slug: 'isms/soa' },
						{ label: 'NIS2-Vorfallmeldung', slug: 'isms/nis2-vorfallmeldung' },
						{ label: 'VVT → ISMS Bridge', slug: 'isms/cross-modul-bridge' },
					],
				},
				{
					label: 'Audits',
					items: [
						{ label: 'Übersicht & 7 Kataloge', slug: 'audit/uebersicht' },
						{ label: '3 Bericht-Stile', slug: 'audit/3-bericht-stile' },
						{ label: 'Re-Audit Magic-Link', slug: 'audit/recall-magic-link' },
					],
				},
				{
					label: 'Public-DSAR-Portal',
					items: [
						{ label: '30-Sekunden-Setup', slug: 'dsar-portal/30-sekunden-setup' },
						{ label: 'Aufsichtsbehörden Art. 77', slug: 'dsar-portal/aufsichtsbehoerden-art-77' },
						{ label: 'Secure-Reply-Portal', slug: 'dsar-portal/secure-reply' },
					],
				},
				{
					label: 'Dokumenten-Vorlagen',
					items: [
						{ label: '35 Master-Vorlagen', slug: 'dokumente/uebersicht' },
					],
				},
				{
					label: 'Tätigkeitsbericht',
					items: [
						{ label: 'DSB-Bericht: Pflicht oder freiwillig?', slug: 'taetigkeitsbericht/uebersicht' },
					],
				},
				{
					label: 'KI-Prompt-Galerie',
					items: [
						{ label: 'Alle Hugo-Prompts offen', slug: 'ki-prompts/uebersicht' },
					],
				},
				{
					label: 'Lieferkette (NIS2)',
					items: [
						{ label: 'Assessment ausfüllen', slug: 'hugo-shield/assessment-ausfuellen' },
						{ label: 'Score verstehen', slug: 'hugo-shield/score-verstehen' },
						{ label: 'Maßnahmenplan', slug: 'hugo-shield/massnahmenplan' },
						{ label: 'Re-Assessment', slug: 'hugo-shield/re-assessment' },
						{ label: 'Zulieferer einladen', slug: 'hugo-shield/zulieferer-einladen' },
						{ label: 'Auftraggeber-Dashboard', slug: 'hugo-shield/shield-dashboard' },
						{ label: 'Reports erstellen', slug: 'hugo-shield/shield-reports' },
					],
				},
				{
					label: 'Für Mitarbeiter',
					items: [
						{ label: 'Schulung machen', slug: 'mitarbeiter/schulung-machen' },
						{ label: 'Quiz bestehen', slug: 'mitarbeiter/quiz-bestehen' },
						{ label: 'Zertifikat herunterladen', slug: 'mitarbeiter/zertifikat-herunterladen' },
						{ label: 'Datenpanne melden', slug: 'mitarbeiter/mitarbeiter-datenpanne' },
					],
				},
				{
					label: 'Für IT-Systemhäuser',
					items: [
						{ label: 'Empfehlungs-Programm', slug: 'partner/empfehlungs-programm' },
					],
				},
				{
					label: 'Lead-Magnete & Vorlagen',
					items: [
						{ label: 'Übersicht (7 Vorlagen)', slug: 'lead-magnete' },
						{ label: 'DSGVO-Audit-Checkliste', slug: 'lead-magnete/dsgvo-checkliste' },
						{ label: 'NIS2-Quick-Check', slug: 'lead-magnete/nis2-quick-check' },
						{ label: 'VVT-Vorlagen-Pack (425)', slug: 'lead-magnete/vvt-vorlagen' },
						{ label: 'AVV-Pack', slug: 'lead-magnete/avv-pack' },
						{ label: 'TOMs-Vorlage', slug: 'lead-magnete/toms-vorlage' },
						{ label: 'Datenpannen-Notfallplan', slug: 'lead-magnete/datenpannen-notfallplan' },
						{ label: 'GF-Haftung-Whitepaper', slug: 'lead-magnete/gf-haftung' },
					],
				},
				{
					label: 'FAQ',
					items: [
						{ label: 'Preise & Abrechnung', slug: 'faq/faq-preise' },
						{ label: 'Datenschutz & Sicherheit', slug: 'faq/faq-datenschutz' },
						{ label: 'Technische Fragen', slug: 'faq/faq-technik' },
					],
				},
			],
		}),
	],
});
