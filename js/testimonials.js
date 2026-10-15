// ============================================
// DIGIMART TESTIMONIALS — CENTRAL DATA SOURCE
// ============================================
// All entries are DEMO PLACEHOLDERS.
// To add real testimonials:
// 1. Set isPlaceholder: false
// 2. Fill in name, role, review, avatar
// 3. Set isVerified: true only after verification process
// ============================================

const TESTIMONIALS = [
  {
    id: 1,
    name: "Customer Name",
    role: "Digital Creator",
    review: "Your genuine customer feedback will appear here. Replace this sample with an authentic review after receiving permission.",
    avatar: null,
    rating: 0,
    isPlaceholder: true,
    isVerified: false
  },
  {
    id: 2,
    name: "Customer Name",
    role: "Small Business Owner",
    review: "Your genuine customer feedback will appear here. Replace this sample with an authentic review after receiving permission.",
    avatar: null,
    rating: 0,
    isPlaceholder: true,
    isVerified: false
  },
  {
    id: 3,
    name: "Customer Name",
    role: "Freelancer",
    review: "Your genuine customer feedback will appear here. Replace this sample with an authentic review after receiving permission.",
    avatar: null,
    rating: 0,
    isPlaceholder: true,
    isVerified: false
  },
  {
    id: 4,
    name: "Customer Name",
    role: "Educator",
    review: "Your genuine customer feedback will appear here. Replace this sample with an authentic review after receiving permission.",
    avatar: null,
    rating: 0,
    isPlaceholder: true,
    isVerified: false
  },
  {
    id: 5,
    name: "Customer Name",
    role: "Content Creator",
    review: "Your genuine customer feedback will appear here. Replace this sample with an authentic review after receiving permission.",
    avatar: null,
    rating: 0,
    isPlaceholder: true,
    isVerified: false
  },
  {
    id: 6,
    name: "Customer Name",
    role: "Marketing Professional",
    review: "Your genuine customer feedback will appear here. Replace this sample with an authentic review after receiving permission.",
    avatar: null,
    rating: 0,
    isPlaceholder: true,
    isVerified: false
  }
];

// Helper: Get initials from name
function getInitials(name) {
  if (!name || name === "Customer Name") return "?";
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
