// ============================================
// DIGIMART — AUTH DEMO UI
// Client-side validation only.
//
// DEMO SAFETY:
// - No authentication backend exists.
// - Passwords are NEVER stored (localStorage /
//   sessionStorage / cookies / network).
// - "Remember me" stores only the email address.
// - No fake success state is created: submitting
//   shows an explicit demo notice instead.
// - A real provider (e.g. Firebase Auth) can replace
//   the marked handlers below later.
// ============================================

(function () {
  'use strict';

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
  const REMEMBER_KEY = 'digimart.demo.rememberEmail';

  // ---------- helpers ----------
  function setError(input, errorEl, message) {
    if (message) {
      input.setAttribute('aria-invalid', 'true');
      input.classList.add('is-invalid');
      errorEl.textContent = message;
      errorEl.hidden = false;
    } else {
      input.removeAttribute('aria-invalid');
      input.classList.remove('is-invalid');
      errorEl.textContent = '';
      errorEl.hidden = true;
    }
    return !message;
  }

  function showNotice(el, message, type) {
    if (!el) return;
    el.className = 'auth-notice ' + (type === 'error' ? 'auth-notice--error' : 'auth-notice--info');
    el.textContent = message;
    el.hidden = false;
    el.focus({ preventScroll: true });
  }

  // ---------- password visibility ----------
  function initPasswordToggles(root) {
    root.querySelectorAll('.password-toggle').forEach((btn) => {
      const input = document.getElementById(btn.dataset.target);
      if (!input) return;
      btn.addEventListener('click', () => {
        const showing = input.type === 'text';
        input.type = showing ? 'password' : 'text';
        btn.setAttribute('aria-pressed', String(!showing));
        btn.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
        const eye = btn.querySelector('.icon-eye');
        const eyeOff = btn.querySelector('.icon-eye-off');
        if (eye) eye.style.display = showing ? '' : 'none';
        if (eyeOff) eyeOff.style.display = showing ? 'none' : '';
        input.focus();
      });
    });
  }

  // ---------- password strength (visual only) ----------
  function scorePassword(value) {
    let score = 0;
    if (value.length >= 8) score++;
    if (/[A-Z]/.test(value) && /[a-z]/.test(value)) score++;
    if (/\d/.test(value)) score++;
    if (/[^A-Za-z0-9]/.test(value)) score++;
    if (value.length >= 12) score++;
    return Math.min(score, 4);
  }

  function initStrengthMeter(input, bar, meter) {
    if (!input || !bar) return;
    const labels = ['Too short', 'Weak', 'Fair', 'Good', 'Strong'];
    input.addEventListener('input', () => {
      const v = input.value;
      if (!v) {
        bar.style.width = '0%';
        bar.style.background = 'transparent';
        if (meter) meter.removeAttribute('data-score');
        return;
      }
      const s = scorePassword(v);
      bar.style.width = (s / 4) * 100 + '%';
      bar.style.background = ['#DC2626', '#F59E0B', '#2563EB', '#10B981'][s - 1] || '#DC2626';
      if (meter) meter.setAttribute('data-score', String(s));
      bar.setAttribute('aria-label', 'Password strength: ' + labels[s]);
    });
  }

  // ---------- sign in ----------
  function initSignIn() {
    const form = document.getElementById('signinForm');
    if (!form) return;

    const email = document.getElementById('signin-email');
    const password = document.getElementById('signin-password');
    const remember = document.getElementById('signin-remember');
    const notice = document.createElement('p');
    notice.className = 'auth-notice';
    notice.setAttribute('role', 'status');
    notice.setAttribute('tabindex', '-1');
    notice.hidden = true;
    form.insertBefore(notice, form.querySelector('button[type="submit"]'));

    initPasswordToggles(form);

    // Restore remembered email ONLY (never a password).
    try {
      const saved = localStorage.getItem(REMEMBER_KEY);
      if (saved) {
        email.value = saved;
        remember.checked = true;
      }
    } catch (e) { /* storage unavailable — ignore */ }

    const emailError = document.getElementById('signin-email-error');
    const passwordError = document.getElementById('signin-password-error');

    email.addEventListener('blur', () => {
      if (!email.value) return;
      setError(email, emailError, EMAIL_RE.test(email.value.trim()) ? '' : 'Enter a valid email address, for example name@company.com');
    });
    password.addEventListener('blur', () => {
      if (!password.value) return;
      setError(password, passwordError, password.value.length < 8 ? 'Password must be at least 8 characters.' : '');
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      notice.hidden = true;

      const okEmail = setError(
        email,
        emailError,
        !email.value.trim()
          ? 'Email address is required.'
          : EMAIL_RE.test(email.value.trim())
            ? ''
            : 'Enter a valid email address, for example name@company.com'
      );
      const okPassword = setError(
        password,
        passwordError,
        !password.value ? 'Password is required.' : password.value.length < 8 ? 'Password must be at least 8 characters.' : ''
      );

      if (!okEmail || !okPassword) {
        (okEmail ? password : email).focus();
        showNotice(notice, 'Please fix the highlighted fields and try again.', 'error');
        return;
      }

      // Remember email only — passwords are never persisted.
      try {
        if (remember.checked) localStorage.setItem(REMEMBER_KEY, email.value.trim());
        else localStorage.removeItem(REMEMBER_KEY);
      } catch (err) { /* ignore */ }

      // DEMO: no auth provider wired up yet.
      showNotice(
        notice,
        'Demo sign-in only. No authentication provider is connected, so no session was created and no credentials were sent or stored. A real sign-in flow will be added when a backend is connected.',
        'info'
      );
      form.reset();
      email.focus();
    });

    const forgot = document.getElementById('forgot-link');
    if (forgot) {
      forgot.addEventListener('click', (e) => {
        e.preventDefault();
        showNotice(
          notice,
          'Password recovery is not available in this demo. A reset flow will be added once real authentication is connected.',
          'info'
        );
      });
    }
  }

  // ---------- sign up ----------
  function initSignUp() {
    const form = document.getElementById('signupForm');
    if (!form) return;

    const name = document.getElementById('signup-name');
    const email = document.getElementById('signup-email');
    const password = document.getElementById('signup-password');
    const confirm = document.getElementById('signup-confirm');
    const terms = document.getElementById('signup-terms');

    const nameErr = document.getElementById('signup-name-error');
    const emailErr = document.getElementById('signup-email-error');
    const passErr = document.getElementById('signup-password-error');
    const confirmErr = document.getElementById('signup-confirm-error');
    const termsErr = document.getElementById('signup-terms-error');

    initPasswordToggles(form);
    initStrengthMeter(password, document.getElementById('strengthBar'), document.getElementById('strengthMeter'));

    const notice = document.createElement('p');
    notice.className = 'auth-notice';
    notice.setAttribute('role', 'status');
    notice.setAttribute('tabindex', '-1');
    notice.hidden = true;
    form.insertBefore(notice, form.querySelector('button[type="submit"]'));

    function validatePassword() {
      const v = password.value;
      if (!v) return setError(password, passErr, 'Password is required.');
      if (v.length < 8) return setError(password, passErr, 'Password must be at least 8 characters.');
      if (!/\d/.test(v)) return setError(password, passErr, 'Password must include at least one number.');
      return setError(password, passErr, '');
    }

    name.addEventListener('blur', () => {
      if (!name.value.trim()) return;
      setError(name, nameErr, name.value.trim().length < 2 ? 'Please enter your full name.' : '');
    });
    email.addEventListener('blur', () => {
      if (!email.value.trim()) return;
      setError(email, emailErr, EMAIL_RE.test(email.value.trim()) ? '' : 'Enter a valid email address, for example name@company.com');
    });
    password.addEventListener('blur', validatePassword);
    confirm.addEventListener('blur', () => {
      if (!confirm.value) return;
      setError(confirm, confirmErr, confirm.value === password.value ? '' : 'Passwords do not match.');
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      notice.hidden = true;

      const okName = setError(name, nameErr, !name.value.trim() ? 'Full name is required.' : name.value.trim().length < 2 ? 'Please enter your full name.' : '');
      const okEmail = setError(
        email,
        emailErr,
        !email.value.trim() ? 'Email address is required.' : EMAIL_RE.test(email.value.trim()) ? '' : 'Enter a valid email address, for example name@company.com'
      );
      const okPass = validatePassword();
      const okConfirm = setError(confirm, confirmErr, !confirm.value ? 'Please confirm your password.' : confirm.value !== password.value ? 'Passwords do not match.' : '');
      const okTerms = terms.checked ? (termsErr.hidden = true, termsErr.textContent = '', true) : setError(terms, termsErr, 'Please accept the Terms and Privacy Policy to continue.');

      const results = [okName, okEmail, okPass, okConfirm, okTerms];
      if (results.some((ok) => !ok)) {
        const firstBad = [name, email, password, confirm, terms].find((el) => el.getAttribute('aria-invalid') === 'true') || name;
        firstBad.focus();
        showNotice(notice, 'Please fix the highlighted fields and try again.', 'error');
        return;
      }

      // DEMO: nothing is submitted or created.
      showNotice(
        notice,
        'Validation passed — but this is a demo. No account was created, nothing was sent to a server, and your details were not stored.',
        'info'
      );
      form.reset();
      const bar = document.getElementById('strengthBar');
      if (bar) bar.style.width = '0%';
      name.focus();
    });
  }

  // ---------- shared ----------
  function initShared() {
    // Clear demo notices when the user starts typing again.
    document.querySelectorAll('.auth-form input').forEach((input) => {
      input.addEventListener('input', () => {
        const err = input.parentElement && input.parentElement.querySelector('.field-error');
        if (err && !err.hidden && input.getAttribute('aria-invalid') === 'true') {
          input.removeAttribute('aria-invalid');
          input.classList.remove('is-invalid');
          err.hidden = true;
          err.textContent = '';
        }
        const notice = input.form && input.form.querySelector('.auth-notice--error');
        if (notice) notice.hidden = true;
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initShared();
    initSignIn();
    initSignUp();
  });
})();