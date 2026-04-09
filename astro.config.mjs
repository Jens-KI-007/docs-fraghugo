// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.fraghugo.de',
	integrations: [
		starlight({
			title: 'frag.hugo Docs',
			description: 'Hilfe-Center für Hugo Check, Hugo DSB und Hugo Shield – Datenschutz, NIS2 und Lieferketten-Compliance einfach erklärt.',
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
			],
			social: [
				{ icon: 'external', label: 'fraghugo.de', href: 'https://www.fraghugo.de' },
			],
			components: {
				SocialIcons: './src/components/HeaderLinks.astro',
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
					label: 'Hugo Check (Website-Scanner)',
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
					label: 'Hugo DSB (Datenschutz)',
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
					label: 'Hugo Shield (Lieferkette)',
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
