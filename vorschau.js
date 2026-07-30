/**
 * Nur in der Vorschau vorhanden.
 *
 * Auf dem Zielserver verschickt das Formular per PHP eine Mail. Diese
 * Fassung liegt auf einem Webspace ohne PHP, das Absenden kann also
 * nichts bewirken. Statt es stumm ins Leere laufen zu lassen, sagt es
 * das hier deutlich.
 */
document.addEventListener('submit', function (ereignis) {
    var formular = ereignis.target.closest('[data-formular]');
    if (!formular) return;

    ereignis.preventDefault();
    ereignis.stopImmediatePropagation();

    var hinweis = formular.querySelector('[data-vorschau-hinweis]');
    if (!hinweis) {
        hinweis = document.createElement('p');
        hinweis.setAttribute('data-vorschau-hinweis', '');
        hinweis.setAttribute('role', 'status');
        hinweis.style.cssText =
            'margin-top:1rem;padding:1rem 1.25rem;border-left:0;' +
            'background:#fff8e1;color:#5c4400;font-weight:600;line-height:1.5';
        formular.appendChild(hinweis);
    }
    hinweis.textContent =
        'Dies ist eine Vorschau zur Abstimmung. Das Formular verschickt hier '
        + 'nichts. Auf dem Server des Betriebs geht die Anfrage an '
        + 'die hinterlegte Adresse.';
    hinweis.scrollIntoView({ behavior: 'smooth', block: 'center' });
}, true);
