// ============================================
// DIGIMART TESTIMONIALS — CENTRAL DATA SOURCE
// ============================================
// All entries are DEMO PLACEHOLDERS.
// - Names are generic sample labels, not real people.
// - Feedback is editable placeholder copy, not real reviews.
// - rating is 0 (no stars claimed) until real reviews exist.
// To add real testimonials:
// 1. Set isPlaceholder: false
// 2. Fill in verified name, role, review (with permission)
// 3. Set isVerified: true only after verification process
// ============================================

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sample User A",
    role: "Sample Role — Digital Creator",
    review: "Placeholder feedback. Replace with an authentic customer review (with permission) before launch.",
    avatar: null,
    rating: 0,
    isPlaceholder: true,
    isVerified: false
  },
  {
    id: 2,
    name: "Sample User B",
    role: "Sample Role — Small Business Owner",
    review: "Placeholder feedback. Replace with an authentic customer review (with permission) before launch.",
    avatar: null,
    rating: 0,
    isPlaceholder: true,
    isVerified: false
  },
  {
    id: 3,
    name: "Sample User C",
    role: "Sample Role — Freelancer",
    review: "Placeholder feedback. Replace with an authentic customer review (with permission) before launch.",
    avatar: null,
    rating: 0,
    isPlaceholder: true,
    isVerified: false
  },
  {
    id: 4,
    name: "Sample User D",
    role: "Sample Role — Educator",
    review: "Placeholder feedback. Replace with an authentic customer review (with permission) before launch.",
    avatar: null,
    rating: 0,
    isPlaceholder: true,
    isVerified: false
  },
  {
    id: 5,
    name: "Sample User E",
    role: "Sample Role — Content Creator",
    review: "Placeholder feedback. Replace with an authentic customer review (with permission) before launch.",
    avatar: null,
    rating: 0,
    isPlaceholder: true,
    isVerified: false
  },
  {
    id: 6,
    name: "Sample User F",
    role: "Sample Role — Marketing Professional",
    review: "Placeholder feedback. Replace with an authentic customer review (with permission) before launch.",
    avatar: null,
    rating: 0,
    isPlaceholder: true,
    isVerified: false
  }
];

// Helper: Get initials from name
function getInitials(name) {
  if (!name) return "?";
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

// Helper: Generate avatar color based on id
function getAvatarColor(id) {
  const colors = ['#2563EB', '#7C3AED', '#059669', '#D97706', '#DC2626', '#0891B2'];
  return colors[(id - 1) % colors.length];
}

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TESTIMONIALS, getInitials, getAvatarColor };
}
