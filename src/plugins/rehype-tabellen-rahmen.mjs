/**
 * Markdown-Tabellen in einen rollbaren Rahmen legen (X06, R §12.2).
 *
 * Auf dem Handy sind viele Tabellen breiter als der Bildschirm. Rollt die Tabelle selbst, erreicht sie niemand mit der
 * Tastatur (axe `scrollable-region-focusable`), und Kopf/Zeilen ragen in der Messung über die Seite hinaus. Deshalb:
 * `<div class="fh-tabelle" role="region" tabindex="0" aria-label="Tabelle: …">` um jede Tabelle. Die Beschriftung
 * nennt die Überschrift des Abschnitts, damit Bildschirmleser die Bereiche unterscheiden können. Das Rollen selbst
 * regelt `custom.css`.
 *
 * Zweitens: Ein Link, der allein in einem Listenpunkt oder einer Zelle steht („Siehe auch“), ist ein eigenes Bedienziel
 * und bekommt `fh-einzel-link` (auf dem Handy 44 px hoch). CSS kann das nicht unterscheiden — `:only-child` übersieht
 * Text daneben und träfe auch Links mitten im Satz.
 */
function text(knoten) {
  if (!knoten) return '';
  if (knoten.type === 'text') return knoten.value;
  return (knoten.children ?? []).map(text).join('');
}

export default function rehypeTabellenRahmen() {
  return (baum) => {
    let ueberschrift = '';
    const gehen = (eltern) => {
      const kinder = eltern.children ?? [];
      for (let i = 0; i < kinder.length; i++) {
        const k = kinder[i];
        if (k.type !== 'element') continue;
        if (/^h[1-4]$/.test(k.tagName)) {
          ueberschrift = text(k).trim();
          continue;
        }
        if (/^(li|td|th)$/.test(k.tagName)) {
          const inhalt = (k.children ?? []).filter((c) => !(c.type === 'text' && !c.value.trim()));
          const nurP = inhalt.length === 1 && inhalt[0].type === 'element' && inhalt[0].tagName === 'p' ? inhalt[0].children ?? [] : inhalt;
          const echt = nurP.filter((c) => !(c.type === 'text' && !c.value.trim()));
          if (echt.length === 1 && echt[0].type === 'element' && echt[0].tagName === 'a') {
            const a = echt[0];
            a.properties = { ...a.properties, className: [...(a.properties?.className ?? []), 'fh-einzel-link'] };
          }
        }
        if (k.tagName === 'table') {
          if (eltern.type === 'element' && eltern.properties?.className?.includes?.('fh-tabelle')) continue;
          kinder[i] = {
            type: 'element',
            tagName: 'div',
            properties: {
              className: ['fh-tabelle'],
              role: 'region',
              tabIndex: 0,
              ariaLabel: ueberschrift ? `Tabelle: ${ueberschrift}` : 'Tabelle',
            },
            children: [k],
          };
          continue;
        }
        gehen(k);
      }
    };
    gehen(baum);
  };
}
