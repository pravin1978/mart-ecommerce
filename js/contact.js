// ============================================
// DIGIMART — CONTACT WIDGET, FOOTER & SOCIAL
// ============================================
// Renders three things from js/config.js:
//   1. A compact floating contact widget (bottom-right).
//   2. The "Contact Digimart" footer block.
//   3. The social media icon row.
// No values are hardcoded here — edit js/config.js only.
// ============================================

(function () {
  "use strict";

  var CFG = window.DIGIMART_CONTACT;
  if (!CFG || !CFG.links) return;

  // ---------- ICONS (inline SVG, no emoji, no icon library) ----------
  var ICONS = {
    whatsapp:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>',
    phone:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    email:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    chat:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
    close:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    // Brand marks (filled). Simple, recognizable outlines.
    facebook:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z"/></svg>',
    instagram:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38C1.34 2.68.92 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13.67.67 1.34 1.08 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.3 1.46-.71 2.13-1.38.67-.67 1.08-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.79-.71-1.46-1.38-2.13C21.32 1.34 20.65.92 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z"/></svg>',
    youtube:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z"/></svg>'
  };

  // Build the three contact actions from config.
  function contactActions() {
    return [
      {
        key: "whatsapp",
        label: "WhatsApp Chat",
        hint: "Chat with us on WhatsApp",
        href: CFG.links.whatsapp,
        icon: ICONS.whatsapp,
        external: true
      },
      {
        key: "call",
        label: "Call Us",
        hint: "Call our support line",
        href: CFG.links.tel,
        icon: ICONS.phone,
        external: false
      },
      {
        key: "email",
        label: "Email Support",
        hint: "Email our support team",
        href: CFG.links.mailto,
        icon: ICONS.email,
        external: false
      }
    ];
  }

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function actionLink(action, cls) {
    var a = el("a", cls);
    a.href = action.href;
    a.setAttribute("aria-label", action.label + " — " + action.hint);
    a.title = action.hint;
    if (action.external) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    a.innerHTML = action.icon;
    return a;
  }

  // ---------- 1. FLOATING CONTACT WIDGET ----------
  function buildFloatingWidget() {
    var actions = contactActions();

    var widget = el("div", "contact-fab");
    widget.setAttribute("role", "group");
    widget.setAttribute("aria-label", "Contact Digimart");

    var panel = el("div", "contact-fab__panel");
    panel.id = "contactFabPanel";
    panel.setAttribute("aria-hidden", "true");

    actions.forEach(function (a) {
      var link = el("a", "contact-fab__item");
      link.href = a.href;
      link.setAttribute("data-fab-item", a.key);
      link.setAttribute("aria-label", a.label + " — " + a.hint);
      link.title = a.hint;
      if (a.external) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
      var iconWrap = el("span", "contact-fab__icon", a.icon);
      var textWrap = el("span", "contact-fab__text");
      var strong = el("strong", null, a.label);
      var sub = el("small", null, a.key === "whatsapp" ? CFG.whatsappNumber
        : a.key === "call" ? CFG.callNumber : CFG.supportEmail);
      textWrap.appendChild(strong);
      textWrap.appendChild(sub);
      link.appendChild(iconWrap);
      link.appendChild(textWrap);
      panel.appendChild(link);
    });

    // Legal honesty note inside the panel.
    var note = el(
      "p",
      "contact-fab__note",
      "Opens your own WhatsApp, phone or email app. This demo site does not send messages itself."
    );
    panel.appendChild(note);

    var toggle = el("button", "contact-fab__toggle");
    toggle.type = "button";
    toggle.setAttribute("aria-label", "Open contact options");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", "contactFabPanel");
    toggle.title = "Contact Digimart";
    toggle.innerHTML = ICONS.chat;

    widget.appendChild(panel);
    widget.appendChild(toggle);

    function setOpen(open) {
      widget.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close contact options" : "Open contact options");
      panel.setAttribute("aria-hidden", open ? "false" : "true");
      toggle.innerHTML = open ? ICONS.close : ICONS.chat;
    }

    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      setOpen(!widget.classList.contains("is-open"));
    });

    // Close on Escape.
    widget.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && widget.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });

    // Close when clicking outside.
    document.addEventListener("click", function (e) {
      if (widget.classList.contains("is-open") && !widget.contains(e.target)) {
        setOpen(false);
      }
    });

    document.body.appendChild(widget);

    // Lift the widget above the fixed demo banner when it is present.
    if (document.querySelector(".demo-mode-banner")) {
      widget.classList.add("has-demo-banner");
    }
  }

  // ---------- 2. FOOTER "CONTACT DIGIMART" ----------
  function buildFooterContact() {
    var grid = document.querySelector(".footer-grid");
    if (!grid) return;

    // Reuse an existing contact column (the old hardcoded "Contact Info"
    // block) so we never show two contact blocks side by side.
    var oldList = grid.querySelector(".footer-contact");
    var oldCol = oldList ? oldList.closest(".footer-column") : null;
    if (!oldCol) {
      // Fallback: match by heading text.
      var cols = grid.querySelectorAll(".footer-column");
      for (var i = 0; i < cols.length; i++) {
        var h2 = cols[i].querySelector("h2");
        if (h2 && /^contact info$/i.test(h2.textContent.trim())) {
          oldCol = cols[i];
          break;
        }
      }
    }

    var col = oldCol || document.querySelector(".footer-column--contact") || el("div", "footer-column footer-column--contact");
    col.className = "footer-column footer-column--contact";
    col.innerHTML = "";

    var h = el("h2", null, "Contact Digimart");
    col.appendChild(h);

    var ul = el("ul", "footer-contact-list");
    contactActions().forEach(function (a) {
      var li = el("li");
      var link = el("a");
      link.href = a.href;
      link.setAttribute("aria-label", a.label + " — " + a.hint);
      link.title = a.hint;
      if (a.external) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
      var icon = el("span", "footer-contact-list__icon", a.icon);
      var text = el("span", "footer-contact-list__text");
      var label = el("strong", null, a.label);
      var value = el("small", null, a.key === "whatsapp" ? CFG.whatsappNumber
        : a.key === "call" ? CFG.callNumber : CFG.supportEmail);
      text.appendChild(label);
      text.appendChild(value);
      link.appendChild(icon);
      link.appendChild(text);
      li.appendChild(link);
      ul.appendChild(li);
    });
    col.appendChild(ul);

    // Social row (built in section 3) sits under the contact list.
    var social = buildSocialRow();
    if (social) col.appendChild(social);

    // Honest microcopy — never claims 24/7 or verified staffing.
    var note = el(
      "p",
      "footer-contact-note",
      "Response times are not guaranteed. No 24/7 support is claimed on this demo site."
    );
    col.appendChild(note);

    if (!oldCol) grid.appendChild(col);
  }

  // ---------- 3. SOCIAL ICONS ----------
  // Returns a row of social icons. Unconfigured profiles render as a
  // non-clickable "Coming Soon" item — never href="#".
  function buildSocialRow() {
    var social = CFG.social || {};
    var order = [
      { key: "facebook", name: "Facebook", icon: ICONS.facebook },
      { key: "instagram", name: "Instagram", icon: ICONS.instagram },
      { key: "youtube", name: "YouTube", icon: ICONS.youtube },
      { key: "linkedin", name: "LinkedIn", icon: ICONS.linkedin },
      { key: "x", name: "X", icon: ICONS.x }
    ];

    var configured = order.filter(function (s) {
      return typeof social[s.key] === "string" && social[s.key].trim() !== "";
    });

    var wrap = el("div", "footer-social");
    var h = el("h3", null, "Follow Digimart");
    wrap.appendChild(h);

    var row = el("ul", "footer-social__list");
    order.forEach(function (s) {
      var url = (social[s.key] || "").trim();
      var li = el("li");
      if (url) {
        var a = el("a", "footer-social__link");
        a.href = url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.setAttribute("aria-label", "Digimart on " + s.name + " (opens in a new tab)");
        a.title = s.name;
        a.innerHTML = s.icon;
        li.appendChild(a);
      } else {
        var span = el("span", "footer-social__pending");
        span.setAttribute("aria-label", s.name + " page coming soon");
        span.title = s.name + " — coming soon";
        span.innerHTML = s.icon;
        var tag = el("em", null, "Soon");
        span.appendChild(tag);
        li.appendChild(span);
      }
      row.appendChild(li);
    });
    wrap.appendChild(row);

    // Only render the heading block if there is something to show.
    // Always show: it communicates the profiles are on the way.
    if (configured.length === 0) {
      var sub = el(
        "p",
        "footer-social__status",
        "Official Digimart social pages are not live yet. Icons will become clickable once the URLs are added to js/config.js."
      );
      wrap.appendChild(sub);
    }
    return wrap;
  }

  // ---------- 4. CONTACT PAGE CARDS ----------
  // Renders three premium contact cards into #contactMethods on contact.html
  function buildContactPageCards() {
    var container = document.getElementById('contactMethods');
    if (!container) return;
    if (container.querySelector('.contact-cards')) return; // already built

    var wrap = el('div', 'contact-cards');
    contactActions().forEach(function (a) {
      var card = el('a', 'contact-card');
      card.href = a.href;
      card.setAttribute('data-method', a.key);
      card.setAttribute('aria-label', a.label + ' — ' + a.hint);
      if (a.external) {
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
      }
      var icon = el('div', 'contact-card__icon', a.icon);
      var h2 = el('h2', null, a.label);
      var p = el('p', null, a.hint);
      var value = el('div', 'contact-card__value', a.key === 'whatsapp' ? CFG.whatsappNumber
        : a.key === 'call' ? CFG.callNumber : CFG.supportEmail);
      var cta = el('span', 'contact-card__cta', 'Open ' + a.label + ' →');
      card.appendChild(icon);
      card.appendChild(h2);
      card.appendChild(p);
      card.appendChild(value);
      card.appendChild(cta);
      wrap.appendChild(card);
    });
    container.appendChild(wrap);
  }

  // ---------- INIT ----------
  function init() {
    try {
      buildFloatingWidget();
    } catch (e) {
      if (window.console && console.warn) console.warn("Contact widget failed:", e);
    }
    try {
      buildFooterContact();
    } catch (e) {
      if (window.console && console.warn) console.warn("Footer contact failed:", e);
    }
    try {
      buildContactPageCards();
    } catch (e) {
      if (window.console && console.warn) console.warn("Contact page cards failed:", e);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
